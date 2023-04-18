---
description: Sections podem ser codificadas por desenvolvedores e configuradas por usuários de negócio no Admin. Aprenda todas as suas capacidades.
---

## Leitura sugerida

- [Conceitos: Section](/docs/pt/concepts/section)
- [Codificando uma nova Section](/docs/pt/tutorials/creating-a-section)

Você já sabe que é fácil criar uma [Section](/docs/pt/concepts/section)
configurável na _deco.cx_. Neste post vamos detalhar todas as formas possíveis
de declarar os types das `props` e como isso afeta o formulário que renderizamos
no Admin da _deco.cx_.

## Personalizando Sections

As Sections, como componentes [Preact](https://preactjs.org), aceitam `props`
como seus primeiro argumento e usam esses valores em seus _markups_ para exibir
textos, imagens ou configurar algum comportamento.

Normalmente, essas `props` são passadas a partir de outro componente, mas quando
você usa _deco.cx_ **essas props são configuradas no Admin**, o que facilita
usuários de negócios alterarem o conteúdo em seus Sites.

Para declarar como essas `props` serão configuradas você usa o **Typescript
type**, especificando quais props e seus respectivos tipos como `string`,
`number`, `Array<T>`, etc.

_Exemplo:_

- Configuração de Section em um site _deco.cx_.

```tsx
interface Props {
  título: string;
}

export default function LatestPosts({ title }: Props) {
  return (
    <div>
      <h1 class="font-bold">{title}</h1>
      <p>Esta é uma Section de exemplo</p>
    </div>
  );
}
```

- Como fica o editor no Admin:

<img width="202" alt="image" src="https://user-images.githubusercontent.com/18706156/225458611-9fe5d3a2-e602-4313-b5b3-c2dddec80888.png">

## Tipos suportados

O editor aceita um subconjunto de tipos Typescript para configuração da Section.
Esta é a lista de tipos suportados atualmente:

### Tipos nativos

#### string

```ts
export interface Props {
  title: string;
}
```

#### number

```ts
export interface Props {
  lineNumber: número;
}
```

#### object

```ts
export interface Props {
  address: {
    street: string;
    postalCode: string;
  };
}
```

#### array

```ts
export default {
   menuItems: Array<{ label: string; value: string }>;
}
```

#### string options

```ts
export interface Props {
  variant: "primary" | "secondary" | "tertiary";
}
```

### Tipos Especiais

#### Imagem

Este tipo renderiza um _widget_ de upload de imagem no editor, possibilitando os
usuários **fazer upload de imagens**.

O tipo é um _wrapper_ para `string`, então a Section receberá a URL da imagem
hospedada nos servidores da _deco.cx_.

> Você pode ler mais sobre como trabalhar com Imagens na _deco.cx_
> [aqui](/docs/pt/receitas/imagens)

**Opcional:** A _deco.cx_ fornece um componente que otimiza o carregamento da
imagens e pode ser usado em conjunto com esta propriedade.

Exemplo:

```tsx
import type { Image } from "$live/std/ui/types/Image.ts";

export interface props {
  bannerImg: Image;
}
```

#### Vídeo

Semelhante à Imagem, as propriedades com este tipo serão editadas através de um
_widget_ com a possibilidade de upload de vídeos.

Exemplo de uso
[aqui](https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/VideoCarousel.tsx#L3).

```ts
import type { Video } from "$live/std/ui/types/Video.ts";

export interface props {
  myVideo: Video;
}
```

### Enriquecendo o editor

Ao usar tipos nativos, o editor usará o nome do prop como a _label_ padrão do
formulário. Mas é possível personalizar isso usando tags
[JSDoc](https://jsdoc.app/).

- Exemplo: Código da Section:

```tsx
export interface props {
  /** @title Numero de produtos */
  /** @description Total de produtos para mostrar na vitrine */
  count: number;
}
```

- Editor:

![Exemplo](https://deco.fibery.io/api/files/62cc889a-9460-4899-8d35-44f6a6608400?is-public=1#align=%3Aalignment%2Fblock-center&width=350&height=135)

As tags disponíveis são os campos compatíveis com
[JSON Schema](https://json-schema.org/), ou seja, `@title`, `@description`,
`@format` entre outros. Por exemplo, para aceitar apenas e-mails:

```tsx
export interface props {
  /** @format email */
  color: string;
}
```

Outros tipos de formatos válidos são: `uri`, `color`.

### Carregando dados de APIs externas

Um caso de uso comum para obter dados dentro de Sections é **usar fontes como
APIs ou bancos de dados**. Este é um cenário muito comum no ecommerce, onde
geralmente queremos obter dados do produto através da API de um ecommerce
provider _(como Shopify, Magento, VTEX...)_.

Para entender como fazer isso com [Sections](/docs/pt/concepts/section) e
[Loaders](/docs/pt/concepts/loader), leia
[Buscando dados de APIs](/docs/pt/tutorials/data-fetching).
