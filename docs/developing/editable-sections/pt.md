---
description: Tornando uma Seção configurável
since: 1.0.0
---

# Tópicos

1. Introdução a Sections (dev)
2. Primeira alteração e seleção de ambiente
3. Resumo: Para alterar e testar uma `section`

# Introdução a Sections (dev)

A Section representa um elemento de UI configurável para um Site deco. Agora, é preciso entender o que isso representa em termos de desenvolvimento.

Uma Section é um código `tsx` dentro da pasta `sections` e que:

- é um componente [Preact](https://preactjs.com/)
- tem propriedades serializáveis
- exporta o tipo de suas propriedades

Um componente Preact, é uma função exportada por padrão (`export default`) que recebe propriedades, retorna um JSX e é invocada a cada renderização do elemento que é definido. Como exemplo, abra, no VSCode, a section `sections/Intro.tsx` do template de ecommerce. Este arquivo também está acessível [no github da deco](https://github.com/deco-sites/start/blob/main/sections/Intro.tsx).

O código deste elemento é escrito em HTML com JS, como no exemplo abaixo.

```tsx
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  /** @description: Ex: "Software Engineer" */
  headline: string;
  /** @title Upload your photo */
  picture?: DecoImage;
  introduction: HTML;
  links?: Array<Link>;
}

export default function Intro({
  headline,
  picture,
  introduction,
  links,
}: Props) {
  return (
    <header class="pt-20 pb-32 flex justify-center items-center">
      <div class="flex flex-col gap-2 text-3xl">
        <h1 class="font-bold text-4xl">{headline}</h1>
        <img
          class="object-cover w-24 h-24 rounded-full"
          src={picture}
          alt={headline}
        />
        <HTMLRenderer html={introduction} />
        {!!links?.length && (
          <ul>
            {links.map(({ href, title }) => (
              <a href={href} aria-label={title}>
                <li>{title}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
```

Observe os tipos exportados neste arquivo. Estes mesmos tipos são acessíveis no Admin ao criar um bloco Intro. No Admin, selecione a **Library**, o bloco `Intro` e a opção de criar de bloco para visualizar as mesmas propriedades em um formulário de edição.

```tsx
/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  /** @description: Ex: "Software Engineer" */
  headline: string;
  /** @title Upload your photo */
  picture?: DecoImage;
  introduction: HTML;
  links?: Array<Link>;
}
```
_Tipos no arquivo de uma Section_

![Edição de propriedades da Section Intro](https://github.com/deco-sites/start/assets/882438/ad261083-b924-4737-917f-f01548385a0c)

Um projeto deco faz uso do tipo das propriedades de um componente para gerar automáticamente o formulário de preenchimento de bloco no Admin. Na figura a seguir é possível visualizar como o Admin conhece as informações a serem colocadas no formulário. Para isto, o Admin entra em contato com o Site em produção para pegar os dados das propriedades das Sections daquele projeto. Por sua vez, o código em um Site é oriundo do GitHub, o mesmo que o desenvolvedor utiliza.

![Estrutura de acesso aos dados do Site](https://github.com/deco-sites/starting/assets/882438/dcc4d63a-bbb2-4f81-909a-054eef048a53)

# Primeira alteração e seleção de ambiente

Execute o projeto localmente (`deno task start`) e altere o código da `Intro` para receber uma nova propriedade opcional, o `hightlight` de um link. Para isso, altere o tipo `Link` e o código JSX do componente, lembrando de salvar o arquivo após a alteração.

```tsx
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
  hightlight?: boolean;
}

export interface Props {
  /** @description: Ex: "Software Engineer" */
  headline: string;
  /** @title Upload your photo */
  picture?: DecoImage;
  introduction: HTML;
  links?: Array<Link>;
}

export default function Intro({
  headline,
  picture,
  introduction,
  links,
}: Props) {
  return (
    <header class="pt-20 pb-32 flex justify-center items-center">
      <div class="flex flex-col gap-2 text-3xl">
        <h1 class="font-bold text-4xl">{headline}</h1>
        <img
          class="object-cover w-24 h-24 rounded-full"
          src={picture}
          alt={headline}
        />
        <HTMLRenderer html={introduction} />
        {!!links?.length && (
          <ul>
            {links.map(({ href, title, hightlight }) => (
              <a href={href} aria-label={title}>
                <li class={`${hightlight ? "font-black" : ""}`}>{title}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
```
_Alterando o tipo Link e o JSX com a nova propriedade `hightlight`_

Ao realizar esta alteração localmente, ela não afeta ou impacta o Site em produção. No entanto, com o projeto localmente (`deno task start`), é possível visualizar tal alteração no próprio Admin. Para isto, é importante ir no seletor de ambiente, e escolher o `localhost:8000` como referência.

![Alterando o ambiente](https://github.com/deco-sites/starting/assets/882438/6154427b-86b3-4569-87af-c5c21f7b7520)

Ao apontar para o `localhost`, o admin consulta agora a versão rodando localmente para detectar as propriedades e `sections` disponíveis.

Para que outras pessoas possam ver a alteração, é preciso realizar o `commit` e `push` das alterações. A branch `main` tem o código que é exibido no domínio padrão do Site, mas é possível fazer a visualização de outras branches do repositório, bastando selecionar a branch em questão no seletor de ambientes.

# Resumo: Para alterar e testar uma `section`

De forma sucinta, para testar alterações na Section `FAQ.tsx`:

1. Execute `deno task start` no Terminal. _(Você não precisa executar novamente
   se já estiver rodando)_

2. Realize alterações localmente no arquivo `sections/Intro.tsx`.

3. Acesse o Admin de _deco.cx_ em https://deco.cx/admin, selecione seu Site e vá
   em `Library`.

4. Certifique-se de que `localhost:8000` esteja selecionado no Seletor de
   Ambiente no canto superior direito da página.

5. Procure `Intro.tsx` dentre os blocos.

6. **Pronto!** Agora você pode configurar `props` para essa Section e ver como ela está sendo renderizada. O _preview_ atualizará automaticamente se você alterar o código da Section localmente.

Lembre-se de salvar o seu arquivo. Caso haja algum erro de tipagem ou transformação, o mesmo será sinalizado na linha de comando ou no próprio VSCode. Quando estiver confortável com as alterações, faça o envio do arquivo alterado ao repositório do GitHub.