---
description: Customize the behavior of the Deco Admin form with annotations on its properties.
---

Customize the behavior of the [Deco Admin](https://admin.deco.cx) form with
annotations on its properties.

When using native types (number, string, etc.), the editor will use the property
name as the default form label. However, it's possible to customize this by
using [JSDoc](https://jsdoc.app/) tags.

- Example:

```ts
export interface Props {
  /** @title Number of products */
  /** @description Total number of products to display in the storefront */
  count: number;
}
```

- Editor:

<img src="/docs/annotations/example.png" alt="Example" width="400">

List with all supported annotations:

| Annotation          | Description                                                                                                                                                                                                                 | Usage                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `@title`            | Receives text that will be used as the title of the label for that input in the form.                                                                                                                                       | `@title Number of products`                                          |
| `@description`      | Receives text that will be used as the description in the label for that input in the form.                                                                                                                                 | `@description Total number of products to display in the storefront` |
| `@format`           | Configures a field to be formatted differently. This can cause its [Widget](/docs/en/reference/widgets) to change.                                                                                                          | `@format [Format value](#possible-values-for-format)`                |
| `@hide`             | Hides this property in the Admin form. The value still remains in the JSON of the Section.                                                                                                                                  | `@hide`                                                              |
| `@ignore`           | The value and the property are completely ignored.                                                                                                                                                                          | `@ignore`                                                            |
| `@maximum`          | Configures a maximum value for that field. Works on properties of type `number`. (value <= X)                                                                                                                               | `@maximum 10`                                                        |
| `@minimum`          | Configures a minimum value for that field. Works on properties of type `number`. (value >= X)                                                                                                                               | `@minimum 15`                                                        |
| `@exclusiveMaximum` | Configures a maximum value for that field. Works on properties of type `number`. It is the exclusive counterpart of `@maximum`. (value < X)                                                                                 | `@exclusiveMaximum 10`                                               |
| `@exclusiveMinimum` | Configures a minimum value for that field. Works on properties of type `number`. It is the exclusive counterpart of `@minimum`. (value > X)                                                                                 | `@exclusiveMinimum 15`                                               |
| `@maxLength`        | Configures a maximum length for the text of a field. Works on properties of type `string`.                                                                                                                                  | `@maxLength 30`                                                      |
| `@minLength`        | Configures a minimum length for the text of a field. Works on properties of type `string`.                                                                                                                                  | `@minLength 8`                                                       |
| `@readOnly`         | Makes a field uneditable in the admin form but still readable.                                                                                                                                                              | `@readOnly`                                                          |
| `@uniqueItems`      | Ensures that fields of type `array` cannot have duplicate values.                                                                                                                                                           | `@uniqueItems true`                                                  |
| `@maxItems`         | Ensures that fields of type `array` cannot have more than X values.                                                                                                                                                         | `@maxItems 3`                                                        |
| `@minItems`         | Ensures that fields of type `array` cannot have fewer than X values.                                                                                                                                                        | `@minItems 2`                                                        |
| `@default`          | Configures a default value for that field.                                                                                                                                                                                  | `@default Testing`                                                   |
| `@deprecated`       | Marks a field as deprecated.                                                                                                                                                                                                | `@deprecated We will remove this field in the next update`           |
| `@options`          | Required for the operation of the [dynamic options](/docs/pt/reference/widgets#dynamic-options), [button group](/docs/pt/reference/widgets#button-group) and [icon select](/docs/pt/reference/widgets#icon-select) widgets. | `@options deco-sites/mystore/loaders/products.ts`                    |
| `@language`         | Required for the Widget `@format code`, used to define the language on editor.                                                                                                                                              | `@language javascript`                                               |

## Possible Values for `@format`

- `@format color`: Renders a color input instead of a text input.

<img src="/docs/annotations/color2.png" alt="@format color example" width="300">

- `@format date`: Renders a date input instead of a text input.

<img src="/docs/annotations/date.png" alt="@format date example" width="300">

- `@format html`: Renders an input that opens a WYSIWYG editor for advanced HTML
  text editing.

<img src="/docs/widgets/html-open.png" alt="@format html example" width="300">

- `@format dynamic-options`:
  [Read about it here](/docs/en/reference/widgets#dynamic-options).

# Templates in Annotations with Mustache

Our annotations also support templating through
[Mustache](https://mustache.github.io/).

To use them, it's quite simple:

```ts
/**
 * @title {{{name}}}
 */
interface Person {
  name: string;
}

export interface Props {
  people: Person[];
}
```

Deco Admin result:

<img src="/docs/annotations/mustache.png" alt="mustache example" width="300">
