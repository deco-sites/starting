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

Um componente Preact, é uma função exportada por padrão (`export default`) que recebe propriedades, retorna um JSX e é invocada a cada renderização do elemento que é definido. Como exemplo, abra, no VSCode, a section `sections/Hero.tsx` do template de ecommerce. Este arquivo também está acessível [no github da deco](https://github.com/deco-sites/start/blob/main/sections/Hero.tsx).

O código deste elemento é escrito em HTML com JS, como no exemplo abaixo.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  title?: string;
  /** @format textarea */
  headline?: string;
  links?: Array<Link>;
}

export default function Hero({
  title = "deco.cx",
  logo = "/logo.svg",
  headline =
    "The digital experience platform that combines performance and personalization for the ultimate sales results.",
  links = [
    { title: "Official website", "href": "https://deco.cx/" },
    { title: "Linkedin", "href": "https://www.linkedin.com/company/deco-cx/" },
    { title: "Discord", "href": "https://deco.cx/discord" },
  ],
}: Props) {
  return (
    <header class="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-xl md:text-base">
      <div class="mb-10 md:mb-20">
        <img
          class="object-cover w-20"
          src={logo}
          alt={title}
        />
      </div>
      <div class="font-bold text-3xl lg:text-6xl leading-tight lg:leading-none xl:w-5/6">
        {headline}
      </div>
      {!!links?.length && (
        <ul class="mt-8 flex flex-col md:flex-row gap-2 md:gap-4">
          {links.map(({ href, title }) => (
            <li>
              <a target="_blank" href={href} aria-label={title} class="link">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
```

Observe os tipos exportados neste arquivo. Estes mesmos tipos são acessíveis no Admin ao criar um bloco Intro. No Admin, selecione a **Sections**, o bloco `Hero` e a opção de criar de bloco para visualizar as mesmas propriedades em um formulário de edição.

![Criar bloco](https://github.com/deco-cx/apps/assets/882438/c7eee318-c6df-4ade-abd8-66390758aca7)

As propriedades do código de um bloco se refletem no Admin.

```tsx
/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  title?: string;
  /** @format textarea */
  headline?: string;
  links?: Array<Link>;
}
```
_Tipos no arquivo de uma Section_

![Edição de propriedades da Section Hero](https://github.com/deco-cx/apps/assets/882438/b57f6fae-da58-4cc4-a5cc-aa99985cd442)

Um projeto deco faz uso do tipo das propriedades de um componente para gerar automáticamente o formulário de preenchimento de bloco no Admin. Na figura a seguir é possível visualizar como o Admin conhece as informações a serem colocadas no formulário. Para isto, o Admin entra em contato com o Site em produção para pegar os dados das propriedades das Sections daquele projeto. Por sua vez, o código em um Site é oriundo do GitHub, o mesmo que o desenvolvedor utiliza.

![Estrutura de acesso aos dados do Site](https://github.com/deco-sites/starting/assets/882438/dcc4d63a-bbb2-4f81-909a-054eef048a53)

# Primeira alteração e seleção de ambiente

Execute o projeto localmente (`deno task start`) e altere o código da `Hero` para receber uma nova propriedade opcional, o `hightlight` de um link. Para isso, altere o tipo `Link` e o código JSX do componente, lembrando de salvar o arquivo após a alteração.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
  hightlight?: boolean;
}

export interface Props {
  logo?: ImageWidget;
  title?: string;
  /** @format textarea */
  headline?: string;
  links?: Array<Link>;
}

export default function Hero({
  title = "deco.cx",
  logo = "/logo.svg",
  headline =
    "The digital experience platform that combines performance and personalization for the ultimate sales results.",
  links = [
    { title: "Official website", "href": "https://deco.cx/" },
    { title: "Linkedin", "href": "https://www.linkedin.com/company/deco-cx/" },
    { title: "Discord", "href": "https://deco.cx/discord" },
  ],
}: Props) {
  return (
    <header class="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-xl md:text-base">
      <div class="mb-10 md:mb-20">
        <img
          class="object-cover w-20"
          src={logo}
          alt={title}
        />
      </div>
      <div class="font-bold text-2xl lg:text-6xl leading-tight lg:leading-none xl:w-5/6">
        {headline}
      </div>
      {!!links?.length && (
        <ul class="mt-8 flex flex-col md:flex-row gap-2 md:gap-4">
            {links.map(({ href, title, hightlight }) => (
              <a href={href} aria-label={title}>
                <li class={`${hightlight ? "font-black" : ""}`}>{title}</li>
              </a>
            ))}
        </ul>
      )}
    </header>
  );
}
```
_Alterando o tipo Link e o JSX com a nova propriedade `hightlight`_

Ao realizar esta alteração localmente, ela não afeta ou impacta o Site em produção. No entanto, com o projeto localmente (`deno task start`), é possível visualizar tal alteração no próprio Admin. Para isto, é importante ir no seletor de ambiente, e escolher o `localhost:8000` como referência.

![Alterando o ambiente](https://github.com/deco-cx/apps/assets/882438/62efa5c1-f960-4d21-8ec8-2c8f729c1093)

Ao apontar para o `localhost`, o admin consulta agora a versão rodando localmente para detectar as propriedades e `sections` disponíveis.

Para que outras pessoas possam ver a alteração, é preciso realizar o `commit` e `push` das alterações. A branch `main` tem o código que é exibido no domínio padrão do Site, mas é possível fazer a visualização de outras branches do repositório, bastando selecionar a branch em questão no seletor de ambientes.

# Resumo: Para alterar e testar uma `section`

De forma sucinta, para testar alterações na Section `Hero.tsx`:

1. Execute `deno task start` no Terminal. _(Você não precisa executar novamente
   se já estiver rodando)_

2. Realize alterações localmente no arquivo `sections/Hero.tsx`.

3. Acesse o Admin de _deco.cx_ em https://deco.cx/admin, selecione seu Site e vá
   em `Sections`.

4. Certifique-se de que `localhost:8000` esteja selecionado no Seletor de
   Ambiente no canto superior direito da página.

5. Procure `Hero` dentre os blocos.

6. **Pronto!** Agora você pode configurar `props` para essa Section e ver como ela está sendo renderizada. O _preview_ atualizará automaticamente se você alterar o código da Section localmente.

Lembre-se de salvar o seu arquivo. Caso haja algum erro de tipagem ou transformação, o mesmo será sinalizado na linha de comando ou no próprio VSCode. Quando estiver confortável com as alterações, faça o envio do arquivo alterado ao repositório do GitHub.