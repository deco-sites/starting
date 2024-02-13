---
description: List of widgets available in Deco's Admin.
---

Widgets are components that appear in the [Deco Admin](https://admin.deco.cx) form, corresponding to the properties of a [Block](/docs/en/concepts/block). Here is a list of the existing widgets:

## TextArea

<img src="/docs/widgets/textarea.png" alt="Exemplo textarea" width="400"/>

This widget is rendered for text fields using the [JSDoc Annotation](/docs/en/reference/annotations) with the special formatting `@format textarea`. Example:

```ts
export interface Props {
  /**
   * @format textarea
   */
  context: string;
}
```

# CheckBox

<img src="/docs/widgets/checkbox.png" alt="Exemplo checkbox" height="200"/>

This widget is rendered for boolean fields. Example:

```ts
export interface Props {
  showTopbar: boolean;
}
```

# ImageUri

<img src="/docs/widgets/image.png" alt="Exemplo image" width="400"/>

This widget is rendered for fields of type `ImageWidget`. This type can be imported
from `deco-cx/apps`. Example:

```ts
import { ImageWidget as Image } from "apps/admin/widgets.ts"

export interface Props {
    image: Image;
}
```

# VideoUri

<img src="/docs/widgets/video.png" alt="Exemplo video" width="400"/>

This widget is rendered for fields of type `VideoWidget`. This type can be imported
from `deco-cx/apps`. Example:

```ts
import { VideoWidget as Video } from "apps/admin/widgets.ts"

export interface Props {
    video: Video;
}
```

# Section

<img src="/docs/widgets/section.png" alt="Exemplo section" width="400"/>

The `Section` widget is used to create Sections that can receive other Sections as properties. It works similarly to receiving other components via props. When using this field, you can select any Section from your project. The form rendered in this widget takes the form of the same form that would be rendered for the selected Section. This widget is rendered for fields of type `Section`. This type can be imported from `deco-cx/apps`. Example:

```ts
import { Section } from "deco/blocks/section.ts";

export interface Props {
    innerSection: Section;
}
```

# Select

<img src="/docs/widgets/select.png" alt="Exemplo select" width="300"/>

The Select widget is used to create dropdown lists or option menus, allowing users to choose between different alternatives. This widget is rendered for fields whose type is a [Union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) in Typescript. Example:

```ts
export interface Props {
    layout: "Grid" | "Table" | "List";
}
```

# HTML

<img src="/docs/widgets/html-open.png" alt="Exemplo html" width="600"/>

The HTML widget is rendered for fields of type `HTMLWidget`. This widget allows editing the content of its field through a [WYSIWYG (What You See Is What You Get)](https://en.wikipedia.org/wiki/WYSIWYG) Editor. This type can be imported from `deco-cx/apps`. Example:

```ts
import { HTMLWidget as HTML } from "apps/admin/widgets.ts"

export interface Props {
    content: HTML;
}
```

# Secret

<img src="/docs/widgets/secret.png" alt="Exemplo secret" width="400"/>

The Secret widget is intended for sensitive fields, such as passwords, and ensures that the content is encrypted to protect confidential information. It is rendered for fields of type `Secret`. This type can be imported from `deco-cx/apps`. Example:

```ts
import { Secret } from "apps/website/loaders/secret.ts";

export interface Props {
    password: Secret;
}
```

# Dynamic Options

This widget is especially useful when the options available in a field depend on dynamic data. It displays the same as the [Select](#select), but its options can be loaded dynamically via a loader!

Example:

`MySection.tsx`
```ts
export interface Props {
  /**
   * @format dynamic-options
   * @options deco-sites/mystore/loaders/products.ts
   */
  product: string;
}
```

`mystore/loaders/products.ts`
```ts
import { FnContext, allowCorsFor } from "deco/mod.ts";

export default function ProductsLoader(_props: unknown, req: Request, ctx: FnContext) {
    // Allow Cors
    Object.entries(allowCorsFor(req)).map(([name, value]) => {
        ctx.response.headers.set(name, value);
    });

    return [
        {
            label: "Product X",
            value: "X"
        },
        {
            label: "Product Y",
            value: "Y"
        },
        {
            label: "Product Z",
            value: "Z"
        }
    ];
}
```
