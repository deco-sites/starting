---
description: Lista de widgets disponíveis no Admin da Deco.
---

Widgets são componentes que aparecem no formulário do
[Admin da Deco](https://admin.deco.cx) de forma correspondente as propriedades
de um [Bloco](/docs/pt/concepts/block). Aqui está uma lista dos Widgets
existentes:

# TextArea

<img src="/docs/widgets/textarea.png" alt="Exemplo textarea" width="400"/>

Este Widget é renderizado para campos de texto que usam a
[Annotation de JSDoc](/docs/pt/reference/annotations) de formatação especial
`@format textarea`. Exemplo:

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

Este widget é renderizado para campos do tipo `ImageWidget`. Este tipo pode ser
importado de `deco-cx/apps`. Exemplo:

```ts
import { ImageWidget as Image } from "apps/admin/widgets.ts";

export interface Props {
  imagem: Image;
}
```

# VideoUri

<img src="/docs/widgets/video.png" alt="Exemplo video" width="400"/>

Este widget é renderizado para campos do tipo `VideoWidget`. Este tipo pode ser
importado de `deco-cx/apps`. Exemplo:

```ts
import { VideoWidget as Video } from "apps/admin/widgets.ts";

export interface Props {
  video: Video;
}
```

# Section

<img src="/docs/widgets/section.png" alt="Exemplo section" width="400"/>

O widget `Section` é utilizado para criar Sections que podem receber outras
Sections como propriedades. Funciona de forma bem similar a receber outros
componentes por props.

Ao utilizar este campo, você pode selecionar qualquer Section do seu projeto. O
formulário renderizado nesta widget toma forma do mesmo formulário que seria
renderizado para a Section que foi selecionada.

Este widget é renderizado para campos do tipo `Section`. Este tipo pode ser
importado de `deco-cx/apps`. Exemplo:

```ts
import { Section } from "deco/blocks/section.ts";

export interface Props {
  innerSection: Section;
}
```

# Select

<img src="/docs/widgets/select.png" alt="Exemplo select" width="300"/>

O widget Select é empregado para criar listas suspensas ou menus de opções,
proporcionando aos usuários a capacidade de escolher entre diferentes
alternativas. Esse widget é renderizado para campos cujo tipo é uma
[Union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
do Typescript. Exemplo:

```ts
export interface Props {
  layout: "Grid" | "Table" | "List";
}
```

# HTML

<img src="/docs/widgets/html-open.png" alt="Exemplo html" width="600"/>

O widget HTML é renderizado para campos do tipo `HTMLWidget`. Este widget
permite a edição do conteúdo de seu campo através de um
[Editor WYSIWYG (What You See Is What You Get)](https://tecnoblog.net/responde/o-que-e-um-editor-wysiwyg/).
Este tipo pode ser importado de `deco-cx/apps`. Exemplo:

```ts
import { HTMLWidget as HTML } from "apps/admin/widgets.ts";

export interface Props {
  content: HTML;
}
```

# Secret

<img src="/docs/widgets/secret.png" alt="Exemplo secret" width="400"/>

O widget Secret é destinado a campos sensíveis, como senhas, e garante que o
conteúdo seja encriptado para proteger informações confidenciais. Ele é
renderizado para campos do tipo `Secret`. Este tipo pode ser importado de
`deco-cx/apps`. Exemplo:

```ts
import { Secret } from "apps/website/loaders/secret.ts";

export interface Props {
  password: Secret;
}
```

# Dynamic Options

Este widget é especialmente útil quando as opções disponíveis em um campo
dependem de dados dinâmicos. Ele exibe em sua interface o mesmo que o
[Select](#select), porém suas opções podem ser carregadas dinamicamente via um
loader!

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
import { allowCorsFor, FnContext } from "deco/mod.ts";

export default function ProdutosLoader(
  _props: unknown,
  req: Request,
  ctx: FnContext,
) {
  // Allow Cors
  Object.entries(allowCorsFor(req)).map(([name, value]) => {
    ctx.response.headers.set(name, value);
  });

  return ["Produto X", "Produto Y", "Produto Z"];
}
```

# Color Input

O widget Color Input exibe um círculo preenchido representando a cor selecionada juntamente com seu valor hexadecimal correspondente. Os usuários podem interagir com o widget clicando nele para abrir um seletor de cores.

<img src="/docs/widgets/color-input.png" alt="Example color input" width="400"/>

Exemplo:

`MySection.tsx`

```ts
export interface Props {
  /** @format color-input */
  "primary"?: string;
}
```

# Button Group

O widget Button Group permite que você renderize opções de seleção em um formato de ícone, fornecendo uma maneira visualmente atraente de escolher opções. Cada opção é representada por um ícone, oferecendo flexibilidade e personalização para sua aplicação.

<img src="/docs/widgets/button-group.png" alt="Example button group" width="400"/>

Exemplo:

`MySection.tsx`

```ts
export interface Props {
  /**
   * @format button-group
   * @options deco-sites/mystore/loaders/icons.ts
   */
  textAlignment?: "Left" | "Center" | "Right";
}
```

Para garantir que os ícones estejam disponíveis para seleção no widget, é essencial que cada ícone seja definido explicitamente como uma string SVG em `static/adminIcons.ts` e exportado como uma constante:

`mystore/static/adminIcons.ts`
```ts
// adminIcons.ts contém todos os ícones disponíveis necessários para renderizar o widget, em um formato de string.
export const AlignLeft = `<svg id="AlignLeft" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
<path ... />
</svg>`;
```

`mystore/loaders/icons.ts`

```ts
import { allowCorsFor, FnContext } from "deco/mod.ts";
// Importe ícones em formato de string
import { AlignCenter, AlignLeft, AlignRight } from "../static/adminIcons.ts";

// Defina ícones com seus labels e props correspondentes conforme definido na sua interface Props
const icons = [
  { component: AlignLeft, label: "Left", prop: "textAlignment" },
  { component: AlignCenter, label: "Center", prop: "textAlignment" },
  { component: AlignRight, label: "Right", prop: "textAlignment" },
];

// Loader para mapear ícones para o formato esperado pelo widget Button Group
export default function IconsLoader(
  _props: unknown,
  req: Request,
  ctx: FnContext,
) {
  Object.entries(allowCorsFor(req)).map(([name, value]) => {
    ctx.response.headers.set(name, value);
  });

  const iconsMap = icons.map((icon) => ({
    value: icon.component,
    label: icon.label,
    prop: icon.prop,
  }));

  return iconsMap;
}
```

# Icon Select

O widget Icon Select permite criar um seletor de entrada para ícones, onde cada opção consiste em um ícone e sua etiqueta. Isso permite aos usuários visualizar e escolher facilmente o ícone certo. Todos os ícones renderizados no widget devem ser definidos explicitamente como strings SVG.

<img src="/docs/widgets/icon-select.png" alt="Example icon select" width="400"/>

Exemplo:

`MySection.tsx`

```ts
export interface Props {
  /**
   * @format icon-select
   * @options deco-sites/storefront/loaders/availableIcons.ts
   */
  icon: AvailableIcons;
}
```

Para garantir que todos os ícones sejam devidamente integrados e selecionáveis em nosso widget, cada ícone do seu arquivo `static/sprites.svg` deve ser explicitamente definido como uma string SVG e exportado de um arquivo separado, `static/adminIcons.ts`. Nós simplificamos esse processo com o script `generate-icons.ts` no template da loja Deco, que automatiza a conversão dos ícones de `sprites.svg` para o formato de string e os grava em `adminIcons.ts`.

Para adicionar novos ícones, basta inseri-los no seu `sprites.svg`. Em seguida, interrompa a execução do projeto e reinicie-o usando `deno task run`. Isso aciona o script `generate-icons.ts`, atualizando o arquivo `adminIcons.ts` com os novos ícones, tornando-os imediatamente disponíveis para seleção no widget. Essa abordagem centraliza as atualizações de ícones em `sprites.svg`, garantindo um processo de atualização suave.

Esteja ciente de que, se um ícone não foi gerado como uma string em static/adminIcons.ts, ele não será exibido como uma opção no seletor.

`mystore/loaders/availableIcons.ts`

```ts
import { allowCorsFor, FnContext } from "deco/mod.ts";
import { AvailableIcons } from "../static/adminIcons.ts";

const icons = Object.keys(AvailableIcons).map((iconName) => ({
  component: AvailableIcons[iconName as keyof typeof AvailableIcons],
  label: iconName,
}));

// Loader para mapear todos os ícones disponíveis que serão usados nos widgets IconSelect.
export default function IconsLoader(
  _props: unknown,
  req: Request,
  ctx: FnContext,
) {
  // Permitir Cors
  Object.entries(allowCorsFor(req)).map(([name, value]) => {
    ctx.response.headers.set(name, value);
  });

  // Mapeamento de ícones para { value, label, icon }
  const iconsMap = icons.map((icon) => ({
    icon: icon.component,
    label: icon.label,
    value: icon.label,
  }));

  return iconsMap;
}
```
