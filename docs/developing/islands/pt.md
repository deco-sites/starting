---
description: Adicionando interatividade à página.
since: 1.0.0
---

Uma das razões pelas quais o Deco é rápido é a nossa abordagem centrada no
servidor para criar sites. Isso significa que todo o código que você escreve é
executado em nossos servidores, em vez de ser executado em dispositivos de
usuário lentos e inconsistentes (navegador). No entanto, às vezes precisamos
fornecer interatividade extra aos nossos sites, como adicionar manipuladores de
eventos `onClick`, `useState` ou `useEffect`. Neste guia, você aprenderá como
criar componentes que são executados no navegador. Certifique-se de ler nossas
dicas de desempenho antes de criar qualquer JavaScript no navegador, para evitar
problemas comuns com o JavaScript do lado do cliente.

# Sumário

1. Tornando os componentes interativos
2. Limitações de uso das islands
3. Compartilhando estado entre as islands
4. Considerações e dicas

# Tornando os componentes interativos

Suponha que você tenha o seguinte componente. Um contador que permite ao usuário
adicionar/subtrair o valor exibido.
<img width="320"  src="https://github.com/deco-sites/starting/assets/1753396/ffecce87-22e4-4165-8436-e46cf9681eb0" />

Este componente pode ser implementado com o seguinte código:

```tsx
import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
```

Ao criar um arquivo chamado `Counter.tsx` e colocá-lo na pasta `components`,
obtemos o seguinte resultado na tela:

![Jul-13-2023 10-34-48](https://github.com/deco-sites/starting/assets/1753396/49db9135-842c-46ca-94cb-e65290611d57)

No entanto, quando tentamos clicar no botão, nada acontece. Isso ocorre porque o
Deco não envia nenhum JavaScript para o navegador, tornando os hooks como
`useState` e `useEffect` inoperantes. Para habilitar o envio de JavaScript para
o navegador, você deve mover o arquivo `Counter.tsx` para uma pasta especial
chamada `islands` na raiz do projeto.

![Jul-13-2023 10-40-08](https://github.com/deco-sites/starting/assets/1753396/e672d732-8377-44fb-9494-057ec22a7e29)

Ao mover o arquivo do componente para a pasta `islands`, temos o componente com
uma interação funcional.

![Jul-13-2023 10-38-29](https://github.com/deco-sites/starting/assets/1753396/9d4cda22-f302-4b8e-a98e-d5c9dd4af596)

Agora esse componente é chamado de `island`!

Embora adicionar islands ao seu projeto pareça tentador, tenha em mente que as
islands tornam os sites mais lentos e prejudicam a métrica TBT
([Total Blocking Time](https://web.dev/tbt/)). Portanto, antes de mover qualquer
componente para a pasta `island`, verifique se sua interatividade final:

- Não é alcançada por meio de navegação de página com links ou envio de
  formulários...
- Não é uma interação construída puramente com CSS...
- Requer manipulação de elementos ou estado da página atual (por exemplo, usando
  onClick, onChange, useEffect, outro hook ou um ouvinte de eventos)

# Limitações de uso das islands

As islands são componentes do Preact. Isso significa que elas aceitam `props`.
No entanto, esses valores devem ser um dos seguintes:

- Tipos primitivos `string`, `boolean`, `bigint` e `null`
- Objetos simples com chaves `string` e valores serializáveis
- Arrays de valores serializáveis
- `Uint8Array`
- Elementos JSX (SOMENTE como props.children)
- Sinais do Preact (se o valor do sinal for serializável)
- A maioria dos números (`Infinity`, `-Infinity` e `NaN` são convertidos para
  `null`)

Objetos complexos como `Date`, funções e classes personalizadas não são aceitos
como props de islands.

# Utilizando signals no lugar de state

O `useState` exige que se trabalhe com uma função a parte para a atualização de
valor. Preact, e outros sistemas, oferecem
[`Signals`](https://preactjs.com/guide/v10/signals/) para tratamento de estado
até do `useState`. Um `signal` tem uma referência que tem valor mas que também
tem um atributo `.value` que permite atualizar esse valor.

Dentro de um componente, caso o estado seja só usado localmente, é possível
fazer uso do hook `useSignal` para criar esses elementos que podem ser utilizado
no corpo da função ou no próprio JSX retornado, como no exemplo abaixo.

```tsx
import { useSignal } from "@preact/signals";

export default function Counter() {
  const count = useSignal(0);

  return (
    <div>
      <button onClick={() => count.value--}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => count.value++}>
        +
      </button>
    </div>
  );
}
```

# Compartilhando estado entre as islands

No desenvolvimento normal do Preact, o compartilhamento de estado entre
componentes geralmente é feito por meio da API
[Context](https://preactjs.com/guide/v10/context/). Isso funciona bem para um
aplicativo de lado do cliente completo. No entanto, como estamos usando a
arquitetura de islands, compartilhar estado entre as islands requer uma nova
abordagem.

Os signals são uma ótima maneira de compartilhar estado entre as islands, pois é
possível publicar e se inscrever em eventos de alteração em uma API concisa.

Para usar signals, importe:

```tsx
import { signal } from "@preact/signals";
```

Agora, use o escopo global para criar, modificar e se inscrever em um signal:

```tsx
import { signal } from "@preact/signals";

const count = signal(0);

// Leia o valor de um signal acessando .value:
console.log(count.value); // 0

// Atualize o valor de um signal:
count.value += 1;

// O valor do signal foi alterado:
console.log(count.value); // 1
```

Para definir efeitos colaterais em mudanças de signal, use as operações
`effect`, `batch`, `computed` ou `useComputed`. Consulte a
[documentação dos signals](https://preactjs.com/guide/v10/signals/) para obter
mais detalhes. Além disso, dê uma olhada em
[compartilhando estado entre islands](https://fresh.deno.dev/docs/examples/sharing-state-between-islands).

> Observe que o compartilhamento de estado por meio da API `Context` NÃO
> funcionará, pois o contexto estará fora das islands e, portanto, só estará
> disponível no servidor.

# Considerações e dicas

Ao transformar um componente em uma island, pelo menos o tamanho dele em bytes
será duplicado. O servidor renderiza o HTML para esse elemento e o envia para o
navegador, mas também envia basicamente o mesmo HTML mais o JS a ser injetado no
lado do cliente. Portanto, tente criar apenas as islands necessárias, pois elas
tornam o processo de renderização mais intensivo em

Leitura complementar:

- [Introduction to the Islands architecture - EN](https://deno.com/blog/intro-to-islands)
