---
description: Sections can be coded by devs and configured by business users in the Admin. Learn all of its capabilities. 
---

## Suggested Reading

- [Core Concepts: Section](/docs/en/concepts/section)
- [Coding a new Section](/docs/en/developing-guide/hello-world)

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

<img width="640" alt="Section Form" src="/docs/dev-capabilities/utility-types/section-form.png">

## Types accepted

The deco.cx editor accepts a subset of types Typescript for section
configuration. This is the list of supported types in time:

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

**Optional:** [deco.cx](https://www.deco.cx) provides a component that optimizes
the image loading and can be used in conjunction with this property. Example:

```tsx
import type { ImageWidget as Image } from "apps/admin/widgets.ts";

export interface props {
  bannerImg: Image;
}
```

#### Video

Similar to Image, properties with this type will be edited through a video
upload _widget_.

[Example of use here](https://github.com/deco-sites/fashion/blob/e15a0320fe9e0b7503eb4723f7c230b23886c2b5/sections/VideoCarousel.tsx#L3).

```ts
import type { VideoWidget as Video } from "apps/admin/widgets.ts";

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

<img width="640" alt="Section form with customized label and description" src="/docs/dev-capabilities/utility-types/label-and-description.png">

The available tags are fields compatible with
[JSON Schema](https://json-schema.org/), i.e. `@title`, `@description`,
`@format` among others. For example, to accept emails only:

```tsx
export interface props {
  /** @format email */
  color: string;
}
```

Other types of valid formats are: `uri`, `color`. You can read more about it in
the
[annotations doc](/docs/en/developing-capabilities/section-properties/annotations).
