---
description: Aprenda como usar imagens em seu site sem perder desempenho.
---

> Resumo
>
> Deco oferece componentes de Imagem, Picture e Source para trabalhar com
> imagens. Esses componentes adicionam padrões sensíveis para acelerar seu site.
> Para adicionar uma imagem ao seu site:
>
> 1. Adicione os componentes de imagem (`<Image/>`, `<Source>`, `<Picture>`) ao
   > seu código
> 2. Estilize os componentes com CSS até obter a aparência desejada
> 3. Defina os atributos de largura e altura. Confira #Adicionando propriedades
   > de largura e altura

Neste artigo, você aprenderá como adicionar imagens ao seu site mantendo um bom
[LCP](https://web.dev/lcp/). Será necessário ter conhecimentos básicos de HTML e
CSS. Além disso, certifique-se de entender os seguintes conceitos:

- LCP: https://web.dev/lcp/
- aspect-ratio CSS: https://www.w3schools.com/cssref/css_pr_aspect-ratio.php

### Devo usar image ou picture?

Existem duas tags HTML para adicionar imagens a um site, `<img/>` e
`<picture/>`. Você deve escolher uma ou outra dependendo do design do seu site
em dispositivos móveis e desktop. Use `<img/>` quando a proporção da imagem for
a mesma em todos os tamanhos de tela. Use `<picture/>` se as proporções variarem
com o tamanho da janela.

No exemplo abaixo, temos a página de um produto em um site de comércio
eletrônico. Observe que a imagem principal do produto mantém sua proporção
(360/500 neste caso) tanto em dispositivos móveis quanto em desktops. Nesse
caso, devemos usar a tag `<img/>`.

<img src="/docs/image-aspect-ratio.png">

No entanto, no exemplo do carrossel de imagens abaixo, vemos que a imagem Não
mantém sua proporção em dispositivos móveis/desktop, passando de 1440/600 para
360/600. Nesse caso, devemos usar o elemento `<picture/>`.

<img src="/docs/picture-aspect-ratio.png">

Continue lendo para aprender como usar essas tags para adicionar imagens ao seu
site.

#### Adicionando imagem

Usar apenas a tag `<img/>` do HTML pode ser muito difícil e pode reduzir o
desempenho do seu site. Para isso, o Deco fornece um componente `<Image/>`. Este
componente funciona de maneira semelhante à tag `<img/>`, mas oferece algumas
configurações padrão interessantes, como:

- Imagens responsivas para todos os tamanhos de tela
- Tags de pré-carregamento para melhorar o LCP

Recomenda-se nunca usar a tag `<img/>` diretamente, mas usar o componente
`<Image/>` em vez disso. Para usá-lo:

```tsx
import Image from "apps/website/components/Image.tsx";

export default function MeuComponente() {
  return <Image src="https://example.com/image.png" />;
}
```

Agora, você deverá ver a imagem no seu navegador! O componente `<Image/>` não
adiciona nenhum estilo por padrão. Para estilizá-lo, você pode usar CSS como de
costume. Por exemplo, para fazer a imagem preencher todo o espaço disponível,
você pode aplicar

os seguintes tokens do Tailwind ao código acima:

```tsx
import Image from "apps/website/components/Image.tsx";

export default function MeuComponente() {
  return (
    <Image
      src="https://example.com/image.png"
      class="w-full h-full object-cover"
    />
  );
}
```

Agora, siga o guia para adicionar as propriedades padrão de `width` e `height`
ao componente `<Image/>`. Observe que isso é obrigatório e não seguir este guia
pode ter um grande impacto no desempenho.

#### Adicionando picture

As tags `<picture/>` e `<source/>` do HTML sofrem dos mesmos problemas da tag
`<img/>`. Ambas são complexas e difíceis de usar. Para isso, o Deco também
fornece os componentes personalizados `<Picture/>` e `<Source/>`, que trazem
recursos como:

- Imagens responsivas para todos os tamanhos de tela
- Tags de pré-carregamento para melhorar o LCP

Abaixo, você encontrará um exemplo mínimo que renderiza uma imagem para desktop
e outra para dispositivos móveis.

```tsx
import { Picture, Source } from "apps/website/components/Picture.tsx";

function MeuComponente() {
  return (
    <Picture>
      <Source
        media="(max-width: 768px)"
        src="https://example.com/image-mobile.png"
      />
      <Source
        media="(min-width: 768px)"
        src="https://example.com/image-desktop.png"
      />
      <img src="https://example.com/image-desktop.png" />
    </Picture>
  );
}
```

> Observe que você deve usar a tag `<img/>` dentro de Picture, não o componente
> `<Image/>`. Observe que o atributo `src` na tag `<img/>` É OBRIGATÓRIO e deve
> receber a imagem maior, neste caso, a do desktop.

O exemplo acima renderiza a imagem `/image-mobile.png` em tamanhos de tela de
até 768px de largura. Em tamanhos de tela maiores, será renderizada a imagem
`/image-desktop.png`.

Para estilizar essa imagem, adicione classes à tag `<img/>`. Por exemplo, para
fazer a imagem preencher todo o espaço disponível, você pode aplicar os
seguintes tokens do Tailwind ao código acima:

```tsx
import { Picture, Source } from "apps/website/components/Picture.tsx";

function MeuComponente() {
  return (
    <Picture>
      <Source
        media="(max-width: 768px)"
        src="https://example.com/image-mobile.png"
      />
      <Source
        media="(min-width: 768px)"
        src="https://example.com/image-desktop.png"
      />
      <img
        src="https://example.com/image-desktop.png"
        class="w-full h-full object-cover"
      />
    </Picture>
  );
}
```

Agora, siga o guia para adicionar as propriedades padrão de `width` e `height`
ao componente `<Source/>`. Observe que isso é obrigatório e não seguir este guia
pode impactar no desempenho.

#### Adicionando propriedades de largura e altura

Os atributos `width` e `height` da imagem podem ser muito confusos, mesmo para
os desenvolvedores mais experientes. Essa confusão ocorre pelo fato de que esses
atributos

NÃO alteram o tamanho final da imagem renderizada na tela. Em vez disso, eles
alteram a imagem que o navegador irá baixar em um cenário de imagem responsiva.
Escolher valores adequados de largura e altura é a chave para baixar uma imagem
pequena para obter bons resultados de LCP.

Para descobrir um bom valor para largura e altura:

1. Abra seu site e inspecione o elemento da imagem.
2. Defina o viewport para o tamanho desejado (412px para dispositivos móveis ou
   1440px para desktop).
3. Passe o mouse sobre a tag da imagem. Você deverá ver algo como:
   <img src="/docs/width-attribute.png" />
4. Voilà! Um bom valor de largura e altura está disponível no atributo "Rendered
   size". Neste caso, a `width` é 270px e a `height` é 377px.

Agora, abra seu componente e preencha os valores de largura e altura:

```tsx
import Image from "apps/website/components/Image.tsx";

export default function MeuComponente() {
  return <Image src="https://example.com/image.png" width={270} height={377} />;
}
```

Para Pictures, aplique o mesmo método para cada atributo Source:

```tsx
import { Picture, Source } from "apps/website/components/Picture.tsx";

function MeuComponente() {
  return (
    <Picture>
      <Source
        media="(max-width: 768px)"
        src="https://example.com/image-mobile.png"
        width={270}
        height={377}
      />
      <Source
        media="(min-width: 768px)"
        src="https://example.com/image-desktop.png"
        width={800}
        height={1200}
      />
      <img
        src="https://example.com/image-desktop.png"
        class="w-full h-full object-cover"
      />
    </Picture>
  );
}
```

#### Carregando imagens de forma otimizada - melhorando o LCP

Para um bom LCP, não apenas você precisa enviar payloads pequenos, mas também
precisa carregar os ativos na ordem correta, priorizando aqueles que estão
visíveis na tela em relação aos que estão abaixo da dobra. Uma boa heurística é:

1. Priorizar a imagem do LCP.
2. Carregar todas as outras imagens de forma preguiçosa (lazy load).

Felizmente, os componentes `<Image>` e `<Picture>` do Deco nos ajudam a obter
esse comportamento. Comece localizando o elemento LCP na tela. Em seguida, abra
o código do componente e verifique se:

1. O atributo `preload` está definido.
2. O atributo `loading` está definido como 'eager'.
3. O atributo `fetchPriority` esta definido como 'high'

Por exemplo, para um componente `<Image/>`:

```tsx
import Image from "apps/website/components/Image.tsx";

export default function MyComponent() {
  return (
    <Image
      src="https://example.com/image.png"
      width={270}
      height={377}
      preload
      loading="eager"
      fetchPriority="high"
    />
  );
}
```

Para um `<Picture/>`:

```tsx
import { Picture, Source } from "apps/website/components/Picture.tsx";

function MyComponent() {
  return (
    <Picture preload>
      <Source
        media="(max-width: 768px)"
        src="https://example.com/image-mobile.png"
        width={270}
        height={377}
      />
      <Source
        media="(min-width: 768px)"
        src="https://example.com/image-desktop.png"
        width={800}
        height={1200}
      />
      <img
        loading="eager"
        fetchPriority="high"
        src="https://example.com/image-desktop.png"
        class="w-full h-full object-cover"
      />
    </Picture>
  );
}
```

Verifique que outras imagens nao tenham os atibuto de preload e tenha o
`loading="lazy"` e `fetchPriority="low"`. Ao adicionar essas configurações, você
estará otimizando o carregamento de imagens para melhorar o LCP.

> Note que a pagina final deveria ter somente uma imagem pré-carregada. O
> pré-carregamento de multiplas imagens pode piorar a nota LCP. Para verificar
> que somente uma imagem esteja sendo pré-carregada, verifique que ha somente
> uma tag `<link rel="preload"/>`.

Agora você sabe como adicionar imagens ao seu site usando os componentes
`<Image/>`, `<Picture/>` e `<Source/>` do Deco. Lembre-se de ajustar as
propriedades de largura e altura corretamente e otimizar o carregamento das
imagens para um melhor desempenho do LCP.

Você quer aprender como usamos HTML/CSS/JS para implementar os componentes de
Image, Picture e Source? Veja o código fonte em:
[Image.tsx](https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx)
,
[Picture.tsx](https://github.com/deco-cx/live/blob/main/std/ui/components/Picture.tsx)

**Referências:**

<https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx>

<https://github.com/deco-cx/live/blob/main/std/ui/components/Picture.tsx>

<https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset>

<https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes>

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture>

<https://dev.to/antonfrattaroli/what-happens-when-you-type-googlecom-into-a-browser-and-press-enter-39g8>

<https://imagekit.io/responsive-images/#chapter-1---what-is-responsive-images>

<https://caniuse.com/>
