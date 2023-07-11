---
description: Adicionando interatividade em uma página
since: 1.1.0
---

# Tópicos

1. Introdução a Ilhas (Islands)
   - Limitações no uso de ilhas
   - Signals
2. Criando sua primeira ilha
   - Adicionando um novo componente chamado `RandomDogFact.tsx`
   - Cuidados e dicas ao usar ilhas

# Introdução a Ilhas

Ilhas são componentes com interatividade no browser dentro da arquitetura do Deno Fresh.

Por padrão, todo componente é renderizado no servidor e seu HTML é enviado ao Browser sem JS em anexo. Mas, por vezes, é preciso ter algum grau de interação no navegador. Como exemplo, pode ser necessário interagir com um botão para exibir um contador:

```tsx
import { useSignal } from "@preact/signals";

export default function MyIsland() {
  const count = useSignal(0);

  return (
    <div>
      Counter is at {count}.{" "}
      <button onClick={() => (count.value += 1)}>+</button>
    </div>
  );
}
```
_Retirado da [documentação do Fresh](https://fresh.deno.dev/docs/concepts/islands)_

Por padrão, o Fresh irá apenas gerar o HTML desse código, removendo, inclusive o código de `onClick` do botão.

Um componente se torna uma ilha no momento que é colocada dentro da pasta `islands`, ou quando é importada (diretamente ou indiretamente) por algum componente que esteja nesse diretório. Nas ilhas, o HTML ainda é gerado do lado do servidor mas enviado ao cliente onde "recebe" o JS que a torna interativa (processo de "hidratação").

Assim, se você precisa criar interação com o usuário que…
- Não é feita por navegação de páginas com links ou submit de form…
- Não é uma interação construída via CSS…
- Exige interação manipulação de elementos ou estado da página atual
(exemplo: com o uso de `onClick`, `onChange`, `useEffect`, algum outro hook ou event listener)

Então, você precisa fazer uso de ilhas.

## Limitações no uso de ilhas

Uma ilha pode receber propriedades como qualquer outro componente, desde que estas propriedades sejam serializáveis. Isto significa que é possível receber o seguintes valores:

- Os tipos primitivos `string`, `boolean`, `bigint`, e `null`
- A maioria dos números (`Infinity`, `-Infinity`, e `NaN` são convertidas para `null`)
- Objetos simples, com chaves em `string` e valores serializáveis
- Arrays de valores serializáveis
- `Uint8Array`
- JSX Elements (APENAS como props.children)
- Preact Signals (se o valor da signal for serializável)

Objetos complexos, como `Date`, funções, classes customizáveis, não são aceitas nas ilhas.

## Signals

No Preact é comum fazer o uso de signals para gerência de estado de um componente e controle da interação com o usuário.

Um signal:

- é criado com um estado inicial de valor (`const count = useSignal(0);`)
- é utilizado por um componente (`Counter is at {count}.{" "}`)
- força uma nova renderização dos componentes que o utilizem quando o mesmo for atualizado (`count.value += 1`)

Para reagir a alterações de signals, use as operações `effect`, `batch`, `computed` ou `useComputed`. Veja a [documentação de signals - EN](https://preactjs.com/guide/v10/signals/).

# Criando sua primeira ilha

## Adicionando um novo componente chamado `RandomDogFact.tsx`

1. Crie um arquivo `RandomDogFact.tsx` na pasta `islands`

2. Abra o arquivo `islands/RandomDogFact.tsx` e coloque o seguinte corpo:

```tsx
import { signal } from "@preact/signals";

export interface DogFact {
    fact: string;
  }
  
  export interface Props {
    title: string;
  }
  
  const getNewDogFact = async () => {
    const { facts: dogFacts } = (await fetch(
      `https://dogapi.dog/api/facts?number=1`,
    ).then((r) => r.json())) as { facts: string[] };
    if (dogFacts[0]) {
        dogFact.value = dogFacts[0];
    }
  }
  
  const dogFact = signal<string>("🐕");

  export default function RandomDogFact({ title }: Props) {
    return (
      <div onClick={getNewDogFact} class="p-4 cursor-pointer">
        <h1 class="font-bold">{title}</h1>
        <span>{dogFact}</span>
      </div>
    );
  }
```

3. Use o elemento `<RandomDogFact>` em uma section. Exemplo:

```tsx
import RandomDogFact from "deco-sites/fashion/islands/RandomDogFact.tsx";

// ...

function ProductGallery({ products, layout }: Props) {
  return (
    <div class="grid grid-cols-2 gap-2 items-center sm:grid-cols-4 sm:gap-10">
      <RandomDogFact title="Dog Fact" />
      {products?.map((product, index) => (
        <ProductCard product={product} preload={index === 0} layout={layout} />
      ))}
    </div>
  );
}
```

Por ser uma ilha, o elemento `RandomDogFact` é renderizado uma vez no servidor, mas seu corpo HTML e JS (incluindo de suas dependências) é enviado ao browser para ter seu JS novamente habilitado e ativado. Caso essa ilha não estivesse colocada no diretório `islands`, ela não seria clicável.

## Cuidados e dicas ao usar ilhas

Tornar um componente como ilha no mínimo tende a dobrar o seu tamanho em bytes. O servidor renderiza o HTML desse elemento e envia para o browser, mas também envia basicamente o mesmo HTML acrescido do JS a ser injetado no lado do cliente. Desta forma, tente criar o mínimo necessário de ilhas, pois elas tornam o processo de renderização custoso.

Consulte também:

- [Introdução a arquitetura de ilhas - EN](https://deno.com/blog/intro-to-islands)
- TODO RECIPES