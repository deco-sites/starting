---
description: Criando uma Section
since: 1.0.0
---

Agora que você está mais familiarizado com Sections e como elas são usadas no
admin, vamos criar uma Section do zero. Neste guia, você aprenderá a criar uma
Section, a adicionar propriedades a ela e a estilizá-la com seus temas.

Abra a pasta do seu site em uma IDE e execute as seguintes ações:

## 1. Crie um arquivo `.tsx` na pasta `sections/`

Crie um arquivo `.tsx` na pasta `sections/` em seu Site com o nome desejado para
Section (_e.g_: `Post.tsx`).

A Section é um componente [Preact](https://preactjs.com/) que é configurável no
Admin. Para que a Section seja visível no Admin, é preciso criar esse componente
na pasta `sections/` ou em algum de seus sub-diretórios.

## 2. Exporte o componente

Exporte um componente [Preact](https://preactjs.com/) **usando
`export default`** como o exemplo abaixo:

`sections/Post.tsx`

```tsx
export interface Props {
  title: string;
}

export default function Post({ title }: Props) {
  return (
    <div>
      <h1 class="font-bold">{title}</h1>
      <p>This is an example section</p>
    </div>
  );
}
```

**Pronto!** A Section foi criada localmente no seu projeto.

## 3. Visualize a Section no Admin

Execute o projeto localmente como foi feito anteriormente no
[setup](/docs/pt/developing-guide/setup). Ao selecionar seu ambiente local no
Admin, você poderá visualizar a nova Section na biblioteca de Sections
(**Sections**) e adicioná-la a uma página.

![Nova section na section library](/docs/hello-world/new-section.png)

## 4. Adicionando propriedades à Section

Vamos adicionar três novas propriedades ao nosso componente `Post`, uma para
imagem (`photo`), outro para o corpo da postagem (`post`) e um para a hora da
postagem.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Post image.
   */
  photo?: ImageWidget;
  /**
   * @title Post body.
   * @format textarea
   */
  post: string;
  /**
   * @title Publish date.
   * @format datetime
   */
  datetime: string;
  /**
   * @title Post title.
   */
  title: string;
}

export default function Post({ title, photo, datetime, post }: Props) {
  return (
    <div>
      {photo && (
        <Image
          src={photo}
          alt={`${title} image`}
          height={300}
          width={300}
          class="rounded"
        />
      )}
      <h1 class="font-bold text-lg">{title}</h1>
      <p>Published at: {datetime}</p>
      <p>This is an example section</p>
      <p>{post}</p>
    </div>
  );
}
```

Uma Section pode ter como propriedade qualquer elemento que seja serializável, e
interpretável no formulário de propriedades no admin da deco. Isto inclue:

- `strings` e `numbers`
- Tipos simples de objetos serializáveis
- Tipos gerados de união, extensão, `Pick` ou `Omit`
- `Sections` ( `import { Section } from "deco/blocks/section.ts"` )
- `ImageWidget` (`import type { ImageWidget } from "apps/admin/widgets.ts";`) e
  outros components do admin
- Arrays dos tipos indicados acima

Além dos tipos acima, é possível anotar algumas propriedades para que o
formulário do admin altere o mecanismo de inserção ou para determinar alguns
aspectos do comportamento da propriedade (através da anotação `@format`, por
exemplo). Leia mais sobre
[essas anotações aqui](/docs/pt/developing-capabilities/section-properties/widgets)

## 5. Visualizando as novas propriedades no Admin

Com o projeto executando localmente, abra novamente a Section no Admin. Você
verá as novas propriedades adicionadas ao componente `Post`. É possível ver que
o admin prepara componentes próprios de formulário para a inserção de imagens,
data, bem como sinaliza o que é cada campo a partir do `title` indicado em
código.

![Formulário da section no admin](/docs/hello-world/section-properties.png)

## 6. Tematizando a Section

### 6.1 Tema do Site

No projeto base deco, é possível acessar uma Section especial, a `Theme.tsx`.
Esta section define tokens e nomes especiais de classes que podem ser utilizadas
por outras Sections seguindo a estrutura da ferramenta DaisyUI. Dentro do
`Theme.tsx` é possível observar alguns tokens como o de cores principais:

```tsx
export interface MainColors {
  /**
   * @format color
   * @title Base
   * @default #FFFFFF
   */
  "base-100": string;
  /**
   * @format color
   * @title Primary
   * @default #003232
   */
  "primary": string;
  /**
   * @format color
   * @title Scondary
   * @default #8C3D3D
   */
  "secondary": string;
  /**
   * @format color
   * @title Tertiary
   * @default #00FF7F
   */
  "tertiary": string;
}
```

As cores de cada token podem ser alteradas no Admin, na aba de Themes. Nela,
você pode alterar as cores do seu tema atual ou criar um novo tema.

![Alterando as cores do tema](/docs/hello-world/themes.png)

### 6.2 Tema de uma página

Além do tema do site, é possível alterar o tema de uma página específica. Para
isso, basta acessar uma página específica no Admin adicionar a section do tema
desejado.

![Escolhendo o tema de uma página](/docs/hello-world/add-section.png)

![Alterando o tema de uma página](/docs/hello-world/section-themes.png)

Neste caso, adicionamos na página My New Page a Section do tema Groovy Vibes.
Esta página em específico agora tem um tema diferente do restante do site.

![Adicionando o tema Groovy Vibes](/docs/hello-world/page-theme.png)

### 6.3 Estilizando a Section

Adapte a classe de postagens para fazer uso de alguns tokens. Por exemplo, o
título principal da postagem agora segue a cor primária do tema.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Post image.
   */
  photo?: ImageWidget;
  /**
   * @title Post body.
   * @format textarea
   */
  post: string;
  /**
   * @title Publish date.
   * @format datetime
   */
  datetime: string;
  /**
   * @title Post title.
   */
  title: string;
}

export default function Post({ title, photo, datetime, post }: Props) {
  return (
    <div>
      {photo && (
        <Image
          src={photo}
          alt={`${title} image`}
          height={300}
          width={300}
          class="rounded"
        />
      )}
      <h1 class="font-bold text-lg text-primary">{title}</h1>
      <p>Published at: {datetime}</p>
      <p>This is an example section</p>
      <p>{post}</p>
    </div>
  );
}
```

Agora, a Section `Post` segue o tema do site (ou da página) e utiliza as cores
definidas no tema.

![Section com tema do site](/docs/hello-world/new-section-with-theme.png)
