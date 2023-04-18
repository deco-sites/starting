---
description: Sections can be coded by devs and configured by business users in the Admin. Learn all of its capabilities. 
---

## Suggested Reading

- [Core Concepts: Section](/docs/en/concepts/section)
- [Coding a new Section](/docs/en/tutorials/creating-a-section)

You already know that it's easy to create a configurable
[Section](/docs/en/concepts/section) on _deco.cx_. In this post we'll outline
all the possible ways that you can declare the `props` types and how that
impacts the form we render on _deco.cx_'s Admin.

## Customizing sections

Sections, as regular [Preact](https://preactjs.org) components, accepts `props`
as their first argument and use those values in their markup to display texts,
images or configure some behavior.

Usually, these `props` are passed in another component, but when you're using
_deco.cx_ **these props are configured in the Admin**, which makes it easy for
business users to change content in their Sites.

To declare how these `props` will be configured you can use the **Typescript
type**, specifying which props and their respective type like `string`,
`number`, `Array<T>`, etc..

_Example:_

- Section configuration in a _deco.cx_'s Site.

```tsx
interface Props {
  title: string;
}

export default function LatestPosts({ title }: Props) {
  return (
    <div>
      <h1 class="font-bold">{title}</h1>
      <p>This is an example section</p>
    </div>
  );
}
```

- Preview of section editing in Admin

<img width="202" alt="image" src="https://user-images.githubusercontent.com/18706156/225458611-9fe5d3a2-e602-4313-b5b3-c2dddec80888.png">

## Types accepted

The [deco.cx](deco.cx "deco.cx") editor accepts a subset of types Typescript for
section configuration. This is the list of supported types in time:

### Native Types

#### string

```ts
export interface Props {
  title: string;
}
```

#### number

```ts
export interface Props {
  numberOfLines: number;
}
```

#### object literal

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
export interface Props {
  menuItems: Array<{ label: string; value: string }>;
}
```

#### string options

```ts
export interface props {
  variant: "primary" | "secondary" | "tertiary";
}
```

### Special Types

#### Image

This type renders an image upload _widget_ in the editor, making it possible for
users to **upload images** from their own computer.

The type is a _wrapper_ for `string`, so the Section will get the URL of the
image that will be hosted on _deco.cx_ servers.

> You can read more about how to work with Images in _deco.cx_
> [here](/docs/en/recipes/images)

**Optional:** [deco.cx](https://www.deco.cx) provides a component that optimizes
the image loading and can be used in conjunction with this property. Example:

```tsx
import type { Image } from "$live/std/ui/types/Image.ts";

export interface props {
  bannerImg: Image;
}
```

#### Video

Similar to Image, properties with this type will be edited through a video
upload _widget_.

Example of use
[here](https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/VideoCarousel.tsx#L3).

```ts
import type { Video } from "$live/std/ui/types/Video.ts";

export interface props {
  myVideo: Video;
}
```

### Enriching the editor

When using native types, the editor will use the prop's name as the input Label
by default. But it's possible to customize this using
[JSDoc](https://jsdoc.app/) tags.

- Example: Section code:

```tsx
export interface props {
  /** @title Numero de produtos */
  /** @description Total de produtos para mostrar na vitrine */
  count: number;
}
```

- Editor:

![Example](https://deco.fibery.io/api/files/62cc889a-9460-4899-8d35-44f6a6608400?is-public=1#align=%3Aalignment%2Fblock-center&width=350&height=135)

The available tags are fields compatible with
[JSON Schema](https://json-schema.org/), i.e. `@title`, `@description`,
`@format` among others. For example, to accept emails only:

```tsx
export interface props {
  /** @format email */
  color: string;
}
```

Other types of valid formats are: `uri`, `color`.

### Loading data from external APIs

A common use-case for getting data inside of Sections is to **use external
sources like APIs or databases**. This is a very common scenario in ecommerce
stores, where we usually want to get product data from an ecommerce provider's
API _(like Shopify, Magento, VTEX...)_.

To understand how to accomplish that with [Sections](/docs/en/concepts/section)
and [Loaders](/docs/en/concepts/loader), go to the
[Fetching data from APIs](/docs/en/tutorials/data-fetching) tutorial.
