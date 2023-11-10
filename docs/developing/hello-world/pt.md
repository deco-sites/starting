---
description: Criando uma Section
since: 1.0.0
---

# Tópicos

1. Criando uma Section
2. Propriedades de uma Section
3. Tematizando a Section com DaisyUI

# Criando uma Section

A Section é um componente [Preact](https://preactjs.com/) que é configurável no Admin. Para que a Section seja visĩvel no Admin, é preciso criar esse componente na pasta `sections/` ou em algum de seus sub-diretórios.

Comece criando uma Section para, em seguida, explorar diferentes tipos de propriedades e especializações de propriedades no admin.

Abra a pasta do seu site em uma IDE e execute as seguintes ações:

1. Crie um arquivo `.tsx` na pasta `sections/` em seu Site com o nome desejado
   para Section (_e.g_: `LatestPosts.tsx`).

2. Exporte um componente [Preact](https://preactjs.com/) **usando
   `export default`** como o exemplo abaixo:

   1. `sections/LatestPosts.tsx`

      ```tsx
      export interface Props {
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

**Pronto!** A Section foi criada localmente no seu projeto.

Caso o projeto esteja rodando localmente (`deno task start`) e caso o seletor de ambientes esteja apontando para `localhost:8000`, será possível visualizar a nova Section na biblioteca de blocos (**Library**).

# Propriedades de uma Section

Uma Section pode ter como propriedade qualquer elemento que seja serializável, e interpretável no formulário de propriedades no admin da deco. Isto inclue:

- `strings` e `numbers`
- Tipos simples de objetos serializáveis
- Tipos gerados de união, extensão, `Pick` ou `Omit`
- `Sections` ( `import { Section } from "deco/blocks/section.ts"` )
- `Image` (`import { Image } from "deco-sites/std/components/types.ts"`) e outros componentes da biblioteca padrão deco
- Arrays dos tipos indicados acima

Além dos tipos acima, é possível anotar algumas propriedades para que o formulário do admin altere o mecanismo de inserção ou para determinar alguns aspectos do comportamento da propriedade.

Como exemplo, vamos adicionar três novas propriedades ao nosso componente `LatestPosts`, uma para imagem (`photo`), outro para o corpo da postagem (`post`) e um para a hora da postagem.

```tsx
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
   /**
    * @title Post image.
    */
   photo?: DecoImage;
   /**
   * @title Post body.
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

export default function LatestPosts({ title, photo }: Props) {
   return (
      <div>
      {photo && <Image
         src={photo}
         alt={`${title} image`}
         height={500}
         width={500}
         class="rounded"
      />}
      <h1 class="font-bold">{title}</h1>
      <p>This is an example section</p>
      </div>
   );
}
```

Ao salvar e carregar o admin no ambiente local (com o `deno` em execução), é possível ver que o admin prepara componentes próprios de formulário para a colocação de imagens, data, bem como sinaliza o que é cada campo a partir do `title` indicado em código.

# Tematizando a Section com DaisyUI

No projeto base deco, é possível acessar uma Section especial, a `Theme.tsx`. Esta section define tokens e nomes especiais de classes que podem ser utilizadas por outras Sections seguindo a estrutura da ferramenta DaisyUI. Dentro do `Theme.tsx` é possível observar alguns tokens como o de cores principais:

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

Adapte a classe de postagens para fazer uso de alguns tokens. Por exemplo, o título principal da postagem agora segue a cor primária do site.

```tsx
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
   /**
    * @title Post image.
    */
   photo?: DecoImage;
   /**
   * @title Post body.
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

export default function LatestPosts({ title, photo }: Props) {
   return (
      <div>
      {photo && <Image
         src={photo}
         alt={`${title} image`}
         height={500}
         width={500}
         class="rounded"
      />}
      <h1 class="font-bold text-primary">{title}</h1>
      <p>This is an example section</p>
      </div>
   );
}
```

O cõdigo fonte do `Theme.tsx` apresenta diferentes usos dos tokens. Agora, caso um componente de `Theme` esteja na mesma página do `LatestPosts`, este último podera ser estilizado a partir do componente de tema.

![Estilização com o componente de tema](https://github.com/deco-sites/starting/assets/882438/58860548-d4e4-46f8-a198-75461cf8ab86)