---
description: Lista de widgets disponíveis no Admin da Deco.
---

Widgets são componentes que aparecem no formulário do [Admin da Deco](https://admin.deco.cx) de forma correspondente as propriedades de uma [Section](/docs/pt/concepts/section). Aqui está uma lista dos Widgets existentes:

# TextArea

<img src="/docs/widgets/textarea.png" alt="Exemplo textarea" width="400"/>

Este Widget é renderizado para campos de texto que usam a [Annotation de JSDoc](/docs/pt/reference/annotations) de formatação especial `@format textarea`. Exemplo:

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

Este widget é renderizado para campos do tipo `boolean`. Exemplo:

```ts
export interface Props {
  showTopbar: boolean;
}
```

# ImageUri

<img src="/docs/widgets/image.png" alt="Exemplo image" width="400"/>

Este widget é renderizado para campos do tipo `ImageWidget`. Este tipo pode ser importado
de `deco-cx/apps`. Exemplo:

```ts
import { ImageWidget as Image } from "apps/admin/widgets.ts"

export interface Props {
    imagem: Image;
}
```

# VideoUri

<img src="/docs/widgets/video.png" alt="Exemplo video" width="400"/>

Este widget é renderizado para campos do tipo `VideoWidget`. Este tipo pode ser importado
de `deco-cx/apps`. Exemplo:

```ts
import { VideoWidget as Video } from "apps/admin/widgets.ts"

export interface Props {
    video: Video;
}
```

# Section

<img src="/docs/widgets/section.png" alt="Exemplo section" width="400"/>

O widget `Section` é utilizado para criar Sections que podem receber outras Sections
como propriedades. Funciona de forma bem similar a receber outros componentes por props.

Ao utilizar este campo, você pode selecionar qualquer Section do seu projeto.
O formulário renderizado nesta widget toma forma do mesmo formulário que seria renderizado 
para a Section que foi selecionada.

Este widget é renderizado para campos do tipo `Section`. 
Este tipo pode ser importado de `deco-cx/apps`. Exemplo:

```ts
import { Section } from "deco/blocks/section.ts";

export interface Props {
    innerSection: Section;
}
```

# Select

<img src="/docs/widgets/select.png" alt="Exemplo select" width="300"/>

O widget Select é empregado para criar listas suspensas ou menus de opções, 
proporcionando aos usuários a capacidade de escolher entre diferentes alternativas.
Esse widget é renderizado para campos cujo tipo é uma [Union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) do Typescript.
Exemplo:

```ts
export interface Props {
    layout: "Grid" | "Table" | "List";
}
```

# HTML

<img src="/docs/widgets/html-open.png" alt="Exemplo html" width="600"/>

O widget HTML é renderizado para campos do tipo `HTMLWidget`. Este widget permite a edição
do conteúdo de seu campo através de um [Editor WYSIWYG (What You See Is What You Get)](https://tecnoblog.net/responde/o-que-e-um-editor-wysiwyg/).
Este tipo pode ser importado de `deco-cx/apps`. Exemplo:

```ts
import { HTMLWidget as HTML } from "apps/admin/widgets.ts"

export interface Props {
    content: HTML;
}
```

# Secret

<img src="/docs/widgets/secret.png" alt="Exemplo secret" width="400"/>

O widget Secret é destinado a campos sensíveis, como senhas, e garante que o conteúdo seja encriptado para proteger informações confidenciais. Ele é renderizado para campos do tipo `Secret`. Este tipo pode ser importado de `deco-cx/apps`. Exemplo:

```ts
import { Secret } from "apps/website/loaders/secret.ts";

export interface Props {
    password: Secret;
}
```

# Dynamic Options



Este widget é especialmente útil quando as opções disponíveis em um campo dependem de dados dinâmicos. Ele exibe em sua interface o mesmo que o [Select](#select), porém suas opções
podem ser carregadas dinamicamente via um loader!

Exemplo:

`MinhaSection.tsx`
```ts
export interface Props {
  /**
   * @format dynamic-options
   * @options deco-sites/minhaloja/loaders/produtos.ts
   */
  produto: string;
}
```

`minhaloja/loaders/produtos.ts`
```ts
import { FnContext, allowCorsFor } from "deco/mod.ts";

export default function ProdutosLoader(_props: unknown, req: Request, ctx: FnContext) {
    // Allow Cors
    Object.entries(allowCorsFor(req)).map(([name, value]) => {
        ctx.response.headers.set(name, value);
    });

    return ["Produto X", "Produto Y", "Produto Z"];
}
```