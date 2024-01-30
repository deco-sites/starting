---
description: Customize o comportamento do formulário do Admin da Deco com annotations nas suas propriedades.
---

Customize o comportamento do formulário do [Admin da Deco](https://admin.deco.cx) com annotations nas suas propriedades.

Por exemplo: Ao usar tipos nativos (number, string, etc.), o editor usará o nome da 
propriedade como a _label_ padrão do formulário. Mas é possível personalizar isso usando 
tags [JSDoc](https://jsdoc.app/).

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

| Annotation | Descrição | Uso |
|------------|------------|-----------|
|`@title`|Recebe texto que será usado como título da label daquele input no formulário.|`@title Número de produtos`|
|`@description`|Recebe texto que será usado como descrição na label daquele input no formulário.|`@description Total de produtos para mostrar na vitrine`|
|`@hide`|Esconde essa propriedade no formulário do Admin. O valor continua presente no JSON da Section.|`@hide`|
|`@ignore`|O valor e a propriedade são completamente ignorados.|`@ignore`|
|`@maximum`|Configura um valor máximo para aquele campo. Funciona em propriedades do tipo `number`. (valor <= X)|`@maximum 10`|
|`@minimum`|Configura um valor mínimo para aquele campo. Funciona em propriedades do tipo `number`. (valor >= X)|`@minimum 15`|
|`@exclusiveMaximum`|Configura um valor máximo para aquele campo. Funciona em propriedades do tipo `number`. É a contraparte exclusiva do `@maximum`. (valor < X)|`@exclusiveMaximum 10`|
|`@exclusiveMinimum`|Configura um valor mínimo para aquele campo. Funciona em propriedades do tipo `number`. É a contraparte exclusiva do `@minimum`. (valor > X)|`@exclusiveMinimum 15`|
|`@maxLength`|Configura um tamanho máximo para o texto de um campo. Funciona em propriedades do tipo `string`.|`@maxLength 30`|
|`@minLength`|Configura um tamanho mínimo para o texto de um campo. Funciona em propriedades do tipo `string`.|`@minLength 8`|
|`@readOnly`|Faz com que um campo não possa ser editado no formulário de admin, mas possa ser lido.|`@readOnly`|
|`@uniqueItems`|Faz com que campos do tipo `array` não possam ter valores duplicados.|`@uniqueItems true`|
|`@maxItems`|Faz com que campos do tipo `array` não possam ter mais que X valores.|`@maxItems 3`|
|`@minItems`|Faz com que campos do tipo `array` não possam ter menos que X valores.|`@minItems 2`|
|`@default`|Configura um valor padrão para aquele campo.|`@default Testando`|
