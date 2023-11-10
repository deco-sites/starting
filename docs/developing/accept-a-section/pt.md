---
description: Aceitando Outras Seções como Parâmetros em Sua Seção
since: 1.0.0
---

# Aceitando Outras Seções como Parâmetros em Sua Seção

No deco, você pode criar [Seções](/docs/pt-br/concepts/section) poderosas e flexíveis ao aceitar outras seções como parâmetros. Isso permite que você construa componentes modulares e componíveis que podem ser facilmente personalizados e reutilizados em diferentes contextos.

## Visão Geral

Ao criar uma Seção que aceita outras seções como parâmetros, você define uma interface para as props do seu componente de Seção. Essa interface inclui uma propriedade com o nome da sua escolha, que é do tipo `Section`. O tipo `Section` é um tipo genérico que representa qualquer outra seção no deco.

## Implementação

Para criar uma Seção que aceita outras Seções como parâmetros, siga estas etapas:

1. Importe o tipo `Section` de `deco/blocks/section.ts`.

2. Defina uma interface para as props do seu componente de seção. Inclua uma propriedade com nome de sua escolha, que é do tipo `Section`.

```tsx
// MySection.tsx

import { Section } from "deco/blocks/section.ts";

export interface Props {
  myProp: Section;
}

export default function MySection({ myProp: { Component, props } }: Props) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}
```

3. Dentro do seu componente de seção, acesse as propriedades `Component` e `props` da prop `myProp`. A propriedade `Component` representa a função do componente da seção passada como parâmetro, e a propriedade `props` contém as props dessa seção.

## Exemplo

Digamos que você tenha uma seção chamada `ProductCardSection` que renderiza um cartão de produto com base em algumas props:

```tsx
// ProductCardSection.tsx

export interface Props {
  title: string;
  price: number;
  imageUrl: string;
}

export default function ProductCardSection({ title, price, imageUrl }: Props) {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
```

Agora, você deseja criar uma seção de ordem superior chamada `ProductContainerSection`, que aceita uma `ProductCardSection` como parâmetro e a envolve em um contêiner:

```tsx
// ProductContainerSection.tsx

import { Section } from "deco/blocks/section.ts";

export interface Props {
  myProp: Section;
}

export default function ProductContainerSection({ myProp: { Component, props } }: Props) {
  return (
    <div className="flex gap-4">
      <Component {...props} />
    </div>
  );
}
```

Com essa configuração, agora você pode usar `ProductContainerSection` para envolver qualquer outra seção, incluindo `ProductCardSection`, e adicionar um contêiner ao redor dela.

## Nota

Com a capacidade de aceitar outras seções como parâmetros, você pode criar seções altamente modulares e personalizáveis que se adaptam a diferentes casos de uso e tornam suas aplicações deco ainda mais poderosas e flexíveis. Boa codificação! 🧩🚀
