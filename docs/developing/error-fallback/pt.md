---
description: Limitador de Erros lançados durante a renderização de uma Seção
since: 1.54.0
---

# Limitador de Erros

## Visão Geral

Captura e tratamento de erro é um conceito poderoso disponível desde a versão
1.54.0, que permite lidar com erros que ocorrem durante a renderização de
componentes. Eles permitem que você lide elegantemente com erros e evite que
toda a aplicação seja interrompida devido a um erro não tratado.

Na deco, criar um limite de erro é tão simples como exportar uma função de
componente chamada `ErrorFallback` que recebe um objeto com uma propriedade: `error`. 
A propriedade `error` armazena o objeto de erro que foi lançado pelo componente.

Os pré-requisitos para fazer o seu componente funcionar com tratamento de erro
são ter as seguintes dependências nas versões iguais ou superiores às abaixo:

```json
{
  "imports": {
    "deco/": "https://denopkg.com/deco-cx/deco@1.54.0/",
    "$fresh/": "https://denopkg.com/deco-cx/fresh@1.3.2/",
    "preact": "https://esm.sh/preact@10.16.0",
    "preact/": "https://esm.sh/preact@10.16.0/",
    "preact-render-to-string": "https://esm.sh/*preact-render-to-string@6.2.0",
    "@preact/signals": "https://esm.sh/*@preact/signals@1.1.3",
    "@preact/signals-core": "https://esm.sh/@preact/signals-core@1.3.0"
  }
}
```

## Exemplo: Criando um Limitador de Exceção

Para criar um limite de erro, você pode seguir estes passos:

- Escolha a Seção selecionada (por exemplo, `ProductShelf.tsx`)
- Exporte uma função chamada `ErrorFallback`, a função deve receber um objeto
  com uma propriedade: `error`.

```tsx
// ProductShelf.tsx
export interface Props {
    myProp: string;
}

export function ErrorFallback({ error }: { error?: Error }) {
  // Sua lógica de tratamento de erro vai aqui
  // Você pode exibir uma mensagem de erro, registrar o erro ou renderizar uma interface de substituição
  return (
    <div>
      <h2>Oops! Algo deu errado.</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default function ProductShelf(props: Props) {
    ...
}
```

Se ocorrer um erro durante a renderização de `ProductShelf`, o
componente `ErrorFallback` sera renderizado no lugar de `ProductShelf`

Lembre-se de usar os limites de erro com cuidado e envolver apenas os
componentes propensos a erros. Usar os limites de erro de forma eficaz pode
melhorar muito a estabilidade e a experiência do usuário em suas aplicações.
Caso nao haja nenhum `ErrorFallback` definido, um fallback padrao será utilizado