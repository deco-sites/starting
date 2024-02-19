---
descrição: Adição de fallback de carregamento para seções
desde: 1.54.0
---

# Fallback de Carregamento

## Visão Geral

Os fallbacks de carregamento são um conceito poderoso disponível para uso desde a versão 1.54.0,
para lidar com o estado de carregamento de seções usando dados de APIs de terceiros.
Eles permitem que você lide graciosamente com estados de carregamento e evite que toda a aplicação pare
devido a alguma API de terceiros.

No deco, criar um fallback de carregamento é tão simples quanto exportar uma função de componente
chamada `LoadingFallback`.

Os pré-requisitos para fazer com que seu componente funcione são ter
as seguintes dependências em versões iguais ou superiores às listadas abaixo:

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

## Exemplo: Criando um Fallback de Carregamento

Para criar um fallback de carregamento, você pode seguir estes passos:

- Escolha sua Seção selecionada (por exemplo, `ProductShelf.tsx`)
- Exporte uma função chamada `LoadingFallback`.

```tsx
// ProductShelf.tsx
export interface Props {
    myProp: string;
}

export function LoadingFallback() {
  // Renderize spinners, esqueletos e outros espaços reservados
  return (
    <div>
      <h2>carregando...</h2>
    </div>
  );
}

export default function ProductShelf(props: Props) {
    ...
}
```

Se `ProductShelf` usar dados provenientes de uma API de terceiros lenta, o componente `LoadingFallback` será renderizado em seu lugar.
Se nenhum fallback de carregamento for definido, um fallback padrão será renderizado em seu lugar.