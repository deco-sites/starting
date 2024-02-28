---
description: Customize o comportamento do formulário do Admin da Deco com annotations nas suas propriedades.
---

Customize o comportamento do formulário do
[Admin da Deco](https://admin.deco.cx) com annotations nas suas propriedades.

Ao usar tipos nativos (number, string, etc.), o editor usará o nome da
propriedade como a _label_ padrão do formulário. Mas é possível personalizar
isso usando tags [JSDoc](https://jsdoc.app/).

- Exemplo:

```tsx
export interface Props {
  /** @title Numero de produtos */
  /** @description Total de produtos para mostrar na vitrine */
  count: number;
}
```

- Editor:

<img src="/docs/annotations/example.png" alt="Example" width="400">

Lista com todas as annotations suportadas:

| Annotation          | Descrição                                                                                                                                    | Uso                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `@title`            | Recebe texto que será usado como título da label daquele input no formulário.                                                                | `@title Número de produtos`                                   |
| `@description`      | Recebe texto que será usado como descrição na label daquele input no formulário.                                                             | `@description Total de produtos para mostrar na vitrine`      |
| `@format`           | Configura um campo para ser formatado de forma diferente. Isso pode fazer com que seu [Widget](/docs/pt/reference/widgets) mude.             | `@format [Format value](#valores-possíveis-para-o-format)`    |
| `@hide`             | Esconde essa propriedade no formulário do Admin. O valor continua presente no JSON da Section.                                               | `@hide`                                                       |
| `@ignore`           | O valor e a propriedade são completamente ignorados.                                                                                         | `@ignore`                                                     |
| `@maximum`          | Configura um valor máximo para aquele campo. Funciona em propriedades do tipo `number`. (valor <= X)                                         | `@maximum 10`                                                 |
| `@minimum`          | Configura um valor mínimo para aquele campo. Funciona em propriedades do tipo `number`. (valor >= X)                                         | `@minimum 15`                                                 |
| `@exclusiveMaximum` | Configura um valor máximo para aquele campo. Funciona em propriedades do tipo `number`. É a contraparte exclusiva do `@maximum`. (valor < X) | `@exclusiveMaximum 10`                                        |
| `@exclusiveMinimum` | Configura um valor mínimo para aquele campo. Funciona em propriedades do tipo `number`. É a contraparte exclusiva do `@minimum`. (valor > X) | `@exclusiveMinimum 15`                                        |
| `@maxLength`        | Configura um tamanho máximo para o texto de um campo. Funciona em propriedades do tipo `string`.                                             | `@maxLength 30`                                               |
| `@minLength`        | Configura um tamanho mínimo para o texto de um campo. Funciona em propriedades do tipo `string`.                                             | `@minLength 8`                                                |
| `@readOnly`         | Faz com que um campo não possa ser editado no formulário de admin, mas possa ser lido.                                                       | `@readOnly`                                                   |
| `@uniqueItems`      | Faz com que campos do tipo `array` não possam ter valores duplicados.                                                                        | `@uniqueItems true`                                           |
| `@maxItems`         | Faz com que campos do tipo `array` não possam ter mais que X valores.                                                                        | `@maxItems 3`                                                 |
| `@minItems`         | Faz com que campos do tipo `array` não possam ter menos que X valores.                                                                       | `@minItems 2`                                                 |
| `@default`          | Configura um valor padrão para aquele campo. Funciona somente com tipos primitivos.                                                          | `@default Testando`                                           |
| `@deprecated`       | Marca um campo como descontinuado.                                                                                                           | `@deprecated vamos remover esse campo na próxima atualização` |
| `@options`          | É necessário para o funcionamento da [widget de dynamic options](/docs/pt/reference/widgets#dynamic-options).                                | `@options deco-sites/minhaloja/loaders/produtos.ts`           |

## Valores possíveis para o @format

- `@format color`: Renderiza um input de cor no lugar de um de texto.

<img src="/docs/annotations/color.png" alt="@format color example" width="300">

- `@format date`: Renderiza um input de data no lugar de um de texto.

<img src="/docs/annotations/date.png" alt="@format date example" width="300">

- `@format html`: Renderiza um input que abre um Editor WYSIWYG para edição
  avançada do texto por html.

<img src="/docs/widgets/html-open.png" alt="@format html example" width="300">

- `@format dynamic-options`:
  [Ler sobre aqui](/docs/pt/reference/widgets#dynamic-options).

# Templates em annotations com Mustache

Nossas annotations também suportam templating, através do
[Mustache](https://mustache.github.io/).

Para utilizá-las, é bem simples:

```ts
/**
 * @title {{{nome}}}
 */
interface Pessoa {
  nome: string;
}

export interface Props {
  pessoas: Pessoa[];
}
```

Resultado no Admin:

<img src="/docs/annotations/mustache.png" alt="mustache example" width="300">
