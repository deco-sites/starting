---
description: Aprenda a usar imagens em seu site sem perder performance.
---

> TL;DR
>
> Para melhorar a métrica de LCP da sua página, onde o elemento do LCP é uma
> imagem, utilize imagens responsivas com dimensões adequadas e a tag link no
> head do documento com as propriedades
> `rel="preload" as="image" href="<<src_da_imagem>>"`.
>
> O Live oferece componentes de Image, Picture e Source que fazem isso
> automaticamente.

Neste post vamos aprender sobre como utilizar das propriedades da tag de `<img>`
e tag de `<link>` para melhorar a performance e experiência de navegação na
página. Por fim como utilizar o componente de imagem do live para obter a máxima
performance utilizando as propriedades da tag `<img>`, junto da tag `<link>`.
Será necessário conhecimento básico de HTML e CSS para compreender os conceitos
descritos aqui.

Você que é desenvolvedor frontend já deve ter se deparado com alguma dessas duas
imagens, a primeira é o report do CoreWebVitals do PageSpeed Insights, já a
segunda é o report do Lighthouse.

<img width="964" alt="Resultados do PageSpeed" src="https://user-images.githubusercontent.com/18706156/224483655-907ec9fe-77b4-4c6a-9794-be382fe4deeb.png">

#### 

<img width="960" alt="Resultados do PageSpeed" src="https://user-images.githubusercontent.com/18706156/224483656-bbf928ff-f96b-4156-83af-732dc3935ecb.png">

Pode observar que a métrica de Largest Contentful Paint (LCP) está pintada de
vermelho em ambas as imagens. Mas o que é LCP? LCP é uma métrica que indica
quanto tempo durou, em segundos, para exibir o maior texto ou imagem de uma
página. Baseado neste tempo, o Lighthouse, ferramenta que calcula esta métrica,
categoriza em: "Boa", "A melhorar" e "Ruim".

Por que é importante melhorar o LCP? A Google, criadora do Lighthouse, e outras
empresas realizaram pesquisas e identificaram que existe uma correlação entre um
baixo LCP e uma alta conversão da página.

Assumindo que queremos sites que convertem mais, como podemos melhorar o LCP de
uma página, que o elemento do LCP é uma imagem? Veremos algumas estratégias para
diminuir o tempo do LCP

#### Adequando tamanho da imagem baseado no viewport

A primeira abordagem consiste em baixar imagens de dimensões menores, fazendo
com que trafegue, na internet, menos dados das images e, consequentemente,
baixando elas mais rápido, fazendo com que o LCP diminua. Para baixar imagens
menores, podemos utilizar algumas abordagens, uma delas é a propriedade
[**srcset**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)
da tag img.

#### Srcset

A propriedade **srcset** consiste em fornecer imagens candidatas para ser
renderizada pelo browser, considerando a largura da viewport ou a densidade de
pixel da tela do dispositivo (DPR). Neste exemplo abaixo, as imagens candidatas
estão sendo consideradas baseado na viewport do dispositivo.

```html
<img
  src="/imagem-1920px.png"
  srcset="/imagem-720px.png 720w, /imagem-1024px.png 1024w, /imagem-1920px.png 1920w" />
```

Esse exemplo mostra que para dimensões de até 720px renderiza imagem
`imagem-720px.png` , para dimensões até 1024px renderiza a imagem
`imagem-1024px.png` , assim em diante.

A tabela abaixo mostra como o browser faz para escolher a imagem candidata.

| Largura da Viewport | DPR | Largura da **viewport** considerando DPR (largura viewport x DPR) | Imagem escolhida pelo browser (currentSrc) |
| ------------------- | --- | ----------------------------------------------------------------- | ------------------------------------------ |
| 360px               | 1   | 360 × 1 = 360px                                                   | /imagem-720px.png                          |
| 360px               | 2   | 360 × 2 = 720px                                                   | /imagem-720px.png                          |
| 360px               | 3   | 360 × 3 = 1080px                                                  | /imagem-1920px.png                         |
| 420px               | 1   | 420 × 1 = 420px                                                   | /imagem-720px.png                          |
| 420px               | 2   | 420 × 2 = 840px                                                   | /imagem-1024px.png                         |
| 1440px              | 1   | 1440 × 1 = 1440px                                                 | /imagem-1920px.png                         |

> currentSrc é uma propriedade que representa a src escolhida pelo browser para
> ser renderizada. Esta propriedade pode ser encontrada nos elementos do DOM do
> tipo HTMLImageElement.

#### Sizes + srcset

Em alguns casos é interessante renderizar imagens diferentes e em dimensões
diferentes baseados na viewport, porém a propriedade srcset não consegue lidar
com este caso. Para lidar com isso, existe a propriedade
[**sizes**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes)
da tag img.

A propriedade **sizes** possui uma lista separada por vírgula, e cada valor
descreve a largura da imagem renderizada em relação a viewport. Utilizando o
mesmo exemplo anterior, adicionando sizes:

```html
<img
  src="/imagem-1920px.png"
  sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 25vw"
  srcset="/imagem-720px.png 720w, /imagem-1024px.png 1024w, /imagem-1920px.png 1920w" />
```

No exemplo acima o browser, com a propriedade sizes, você indica ao browser que:

- se a viewport é menor ou igual a 720px, então a imagem renderizada terá a
  largura de 100vw;
- se a viewport é maior do que 720px e menor ou igual a 1024px, então a imagem
  renderizada terá a largura de 50vw
- qualquer outro tamanho de tela maior do que 1024px, então a imagem a
  renderizada terá largura de 25vw

> O valor do tamanho da imagem que será renderizada pode ser descrito com px,
> cm, em, ex ou vw.

A tabela abaixo mostra como browser faz para selecionar as imagens candidatas
descritas no **srcset**

| Largura da Viewport | Largura da imagem         | DPR | Largura da **imagem** considerando DPR (largura viewport x DPR) | Imagem escolhida pelo browser (currentSrc) |
| ------------------- | ------------------------- | --- | --------------------------------------------------------------- | ------------------------------------------ |
| 360px               | 100vw = 1 \* 360px        | 1   | 360 × 1 = 360px                                                 | /imagem-720px.png                          |
| 360px               | 100vw = 1 \* 360px        | 2   | 360 × 2 = 720px                                                 | /imagem-720px.png                          |
| 420px               | 100vw = 1 × 420px         | 1   | 420 × 1 = 420px                                                 | /imagem-720px.png                          |
| 420px               | 100vw = 1 × 420px         | 2   | 420 × 2 = 840px                                                 | /imagem-1024px.png                         |
| 760px               | 50vw = 1/2 × 760 = 380px  | 1   | 380 × 1 = 380px                                                 | /imagem-720px.png                          |
| 760px               | 50vw = 1/2 × 760 = 380px  | 2   | 380 × 2 = 760px                                                 | /imagem-1024px.png                         |
| 1440px              | 25vw = 1/4 × 1440 = 360px | 1   | 360 × 1 = 360px                                                 | /imagem-720px.png                          |
| 1512px              | 25vw = 1/4 × 1512 = 378px | 2   | 378 × 2 = 756px                                                 | /imagem-1024px.png                         |

Essas são as formas de renderizar as imagens candidatas da tag img do exemplo.

#### \<picture\> e \<source\>

Quando é necessário ter imagens diferentes beseado na largura da viewport é
recomendado utilizar as tags `picture` e `source`. A tag source, utilizada como
filho da tag picture, tem as propriedades sizes e srcset com semântica iguais as
da tag `<img>`, além destas duas existe a propriedade media que recebe um valor
de media query. Quando o valor media está presente na tag source, o browser
elege, somente, as imagens presentes no srcset da tag source cuja media query
der match. Veja o exemplo

```html
<picture>
  <source media="(max-width: 720px)" srcset="/imagem-360px.png 360w, /imagem-720px.png 720w" />
  <source media="(max-width: 1024px)" srcset="/imagem-1024px.png 1024w" />
  <source media="(min-width: 1025px)" srcset="/imagem-1920px.png 1920w"/>
  <img src="/imagem-1920px.png" />
</picture>
```

Veja a seguir como o browser escolhe as imagens:

| Largura da Viewport | Largura da imagem  | DPR | Largura da **imagem** considerando DPR (largura viewport x DPR) | Imagem escolhida pelo browser (currentSrc) |
| ------------------- | ------------------ | --- | --------------------------------------------------------------- | ------------------------------------------ |
| 360px               | 100vw = 1 \* 360px | 1   | 360 × 1 = 360px                                                 | /imagem-360px.png                          |
| 360px               | 100vw = 1 \* 360px | 2   | 360 × 2 = 720px                                                 | /imagem-720px.png                          |
| 420px               | 100vw = 1 × 420px  | 1   | 420 × 1 = 420px                                                 | /imagem-720px.png                          |
| 420px               | 100vw = 1 × 420px  | 2   | 420 × 2 = 840px                                                 | /imagem-720px.png                          |

Observe que mesmo a largura da imagem sendo maior do que 720px o browser não
elege imagens de outra tag source que tem largura maior.

Para mais informações sobre a tag picture e source:
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture> e
[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source").

#### Priorizando carregamento de imagens

Recapitulando, queremos oferecer uma boa performance da sua página e uma boa
usabilidade. Até aqui, neste tutorial, aprendemos como otimizar os recursos
consumidos pelo browser através de imagens diferentes e de dimensões adequadas.

Além disso, o browser permite alterar a prioridade de algumas "atividades",
durante seu
[ciclo de vida](https://dev.to/antonfrattaroli/what-happens-when-you-type-googlecom-into-a-browser-and-press-enter-39g8)
para renderizar uma página. Uma forma de alterar a prioridade é através das
propriedades **loading** da tag `<img>`.

A propriedade **loading** pode assumir dois valores:

- **eager**: a imagem é carregada imediatamente, independente de estar ou não
  dentro da viewport. Este é o valor padrão para propriedade loading;
- **lazy**: adia o carregamento da imagem até que a imagem fique a uma certa
  distância da viewport. Esta distância varia e é definida pela implementação do
  browser.

Logo, para imagens que estão fora da viewport ou não são exibidas logo que a
página é carregada, é interessante ter a propriedade loading com valor `lazy`
para poupar recursos de banda e armazenamento.

O browser também permite dizer para ele como decodificar uma imagem fora da
thread principal melhorando o desempenho e usabilidade geral da aplicação. Isso
é feito através da propriedade **decoding** da tag `<img>`.

A propriedade **decoding** pode assumir três valores:

- **sync:** decodificar sincronamente e na thread principal;
- **async:** decodificar assincronamente e fora da thread principal;
- **auto:** valor padrão, sem preferência para decodificar, o browser escolhe a
  melhor forma de decodificar;

Desta forma, para as imagens que estão fora da viewport ou não são exibidas logo
que a pagina é carregada, é interessante ter a propriedade decoding com valor
`async` para poupar recursos de cpu.

Exemplo utilizando propriedades loading e decoding;

```html
<!-- imagem acima do fold -->
<img src="/imagem.png" loading="eager" />

<!-- imagem abaixo do fold ou não renderizada ao carregar a página -->
<img src="/imagem.png" loading="lazy" decoding="async" />
```

Em testes realizados com 3 imagens acima do fold com loading eager, foi
comparado o decoding sync vs async, o resultado foi inconclusivo.

Para mais informações observar o PR:
<https://github.com/deco-sites/fashion/pull/60>

#### <link rel="preload" as="image" fetchpriority="high" />

Também é possível dizer para o browser que um recurso pode ser pré carregado
antes mesmo de que o browser chegue precisar dele. Desta forma é possível pré
carregar a imagem que é o LCP da página, antes mesmo que o browser identifique a
tag `<img>` dá imagem. Para fazer isso você pode utilizar a tag `<link>` dentro
da tag `<head>` .

Além disso, é possível priorizar o request de um recurso através da propriedade
**fetchpriority,** da tag `<link>`, com valor "high" e o sizes query da imagem.

Exemplo abaixo mostra como pré carregar uma imagem, que é o LCP, e aumentar a
prioridade do seu request.

```html
<head>
  <link rel="preload" as="image" fetchpriority="high" media="(max-width: 720px)" href="/imagem-720px.png" imagesrcset="/imagem-720px.png 720w" />
  <link rel="preload" as="image" fetchpriority="high" media="(max-width: 1024px)" href="/imagem-1024px.png" imagesrcset="/imagem-1024px.png 1024w" />
  <link rel="preload" as="image" fetchpriority="high" media="(min-width: 1025px)" href="/imagem-1920px.png" imagesrcset="/imagem-1920px.png 1920w" />
</head>
<body>
  <picture>
    <source media="(max-width: 720px)" srcset="/imagem-720px.png 720w" />
    <source media="(max-width: 1024px)" srcset="/imagem-1024px.png 1024w" />
    <source media="(min-width: 1025px)" srcset="/imagem-1920px.png 1920w"/>
    <img src="/imagem-1920px.png" />
  </picture>
</body>
```

#### Utilizando o componente Image do Live

O componente `Image` foi construído com o objetivo de melhorar
performance da sua página utilizando as propriedades mencionadas anteriormente.
Além disso, os componentes de `Image` e `Source` utilizam por padrão imagens otimizadas no
formato `webp` e adicionam `srcset` com largura 1x, 1.5x e 2x

**Utilizando o componente de Imagem**

```tsx
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Props = {
  imageUrl: LiveImage;
};

export default function MeuComponente(props: Props) {
  return (
    <Image
      src={props.imageUrl}
      sizes="(max-width: 640px) 100vw, 50vw"
      width={420}
      height={420}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      preload
    />
  );
}
```

O tipo `LiveImage` da propiedade `imageUrl` permite que o usuário do admin da
deco.cx possa fazer upload de uma imagem. Na section, essa propiedade retorna
uma string com o endereço da imagem carregada.

A propriedade preload do componente Image adiciona uma tag link com **preload**
no **head** do `document`. O HTML gerado com esse componente:

```html
<html>
  <head>
    <link rel="preload" as="image" href=/image.png" imagesrcset=".../w-420,h-420/image.png 420w, .../w-630,h-630/image.png 630w, .../w-840,h-840/image.png 840w" imgagesizes="(max-width: 640px) 100vw, 50vw" fetchpriority="high" />
  </head>
  <body>
    <img src="/image.png" srcset=".../w-420,h-420/image.png 420w, .../w-630,h-630/image.png 630w, .../w-840,h-840/image.png 840w" sizes="(max-width: 640px) 100vw, 50vw" width={420} height={420} loading="eager" decoding="async" />
  </body>
</html>
```

**Utilizando o componente Picture e Source**

```tsx
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

function MeuComponente() {
  return (
    <Picture class="w-screen block" preload>
      <Source
        media="(max-width: 767px)"
        fetchPriority="high"
        src="/image-mobile.png"
        width={360}
        height={331}
      />
      <Source
        media="(min-width: 768px)"
        fetchPriority="high"
        src="/image-desktop.png"
        width={1366}
        height={517}
      />
      <img
        class="object-cover w-full"
        loading="eager"
        decoding="async"
        src="/image-desktop.png"
        width={1366}
        height={517}
      />
    </Picture>
  );
}
```

O HTML gerado com esse componente:

```html
<html>
 <head>
  <link as="image" rel="preload" href="/image-mobile.png" imagesrcset=".../w-360,h-600/image-mobile.png 360w, .../w-540,h-900/image-mobile.png 540w, .../w-720,h-1200/image-mobile.png 720w" fetchpriority="high" media="(max-width: 767px)">
  <link as="image" rel="preload" href="/image-desktop.png" imagesrcset=".../w-1366,h-600/image-desktop.png 1366w, .../w-2049,h-900/image-desktop.png 2049w, .../w-2732,h-1200/image-desktop.png 2732w" fetchpriority="high" media="(min-width: 768px)">
 </head>
 <body>
  <picture>
   <source media="(max-width: 767px)" fetchpriority="high" width="360" height="600" srcset=".../w-360,h-600/image-mobile.png 360w, .../w-540,h-900/image-mobile.png 540w, .../w-720,h-1200/image-mobile.png 720w">
   <source media="(min-width: 768px)" fetchpriority="high" width="1366" height="600" srcset=".../w-1366,h-600/image-desktop.png 1366w, .../w-2049,h-900/image-desktop.png 2049w, .../w-2732,h-1200/image-desktop.png 2732w">
   <img class="object-cover w-full" loading="eager" decoding="async" src="/image-desktop.png" alt="Feminino">
  </picture>
 </body>
</html>
```

<!-- TODO: Linkar com o tipo LiveImage que automaticamente adiciona um upload de imagem -->

Para mais informações sobre as APIs dos componentes de imagem, picture e source
do live, acesse:
<https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx> ,

[https://github.com/deco-cx/live/blob/main/std/ui/components/Picture.tsx](https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx)

**Referencias:**

<https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx>

[https://github.com/deco-cx/live/blob/main/std/ui/components/Picture.tsx](https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx)

<https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset>

<https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes>

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture>

<https://dev.to/antonfrattaroli/what-happens-when-you-type-googlecom-into-a-browser-and-press-enter-39g8>

<https://imagekit.io/responsive-images/#chapter-1---what-is-responsive-images>

<https://caniuse.com/>
