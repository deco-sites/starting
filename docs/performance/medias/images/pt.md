---
description: Aprenda como usar imagens em seu site sem perder desempenho.
---

### Resumo

> Deco oferece componentes de Imagem, Picture e Source para trabalhar com
> imagens. Esses componentes adicionam padrões sensíveis para acelerar seu site.
> Para adicionar uma imagem ao seu site:
>
> 1. Adicione os componentes de imagem da deco (`<Image/>`, `<Source>`, `<Picture>`) ao
> seu código
> 2. Estilize os componentes com CSS até obter a aparência desejada
> 3. Defina os atributos de largura e altura do componente.

> Os componentes da deco já oferecem:
> - Imagens responsivas para todos os tamanhos de tela
> - Tags de pré-carregamento para melhorar o LCP


# Image ou Picture

Existem dois componentes para a exibição de imagens: `<Image>` e `<Picture>`. O componente adequado depende do seu caso de uso:

- `<Image>` exibe uma imagem (internamente usando `<img>`) e é útil para imagens que tem sempre a mesma proporção (largura vs altura) independente do tamanho de tela.

<img src="/docs/image-aspect-ratio.png">

- `<Picture>` define imagens que podem variar de tamanho de acordo com a resolução de tela.

<img src="/docs/picture-aspect-ratio.png">


# Adicionando uma imagem

Utilizando o componente adequado, estilize-o com classes tailwind. É obrigatório definir a src e usar as props height/width:

```tsx
import Image from "apps/website/components/Image.tsx";

export default function MeuComponente() {
  return (
    <Image
      src="https://example.com/image.png"
      class="w-full h-full object-cover"
      width={800}
      height={1200}
    />
  );
}
```

O width/height não altera o tamanho da imagem em tela pois a mesma está estilizada pelo CSS. Esses atributos nem precisam ser o tamanho da imagem original. A altura e largura estão presentes para permitir que o browser possa escolher a imagem adequada a ser baixada de acordo com a resolução da tela do usuário.

# Adicionando uma Picture

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

> Observe que você deve usar a tag `<img/>` dentro de Picture, não o componente
> `<Image/>`. Observe que o atributo `src` na tag `<img/>` É OBRIGATÓRIO e deve
> receber a imagem maior, neste caso, a do desktop.

O exemplo acima renderiza a imagem `/image-mobile.png` em tamanhos de tela de
até 768px de largura. Em tamanhos de tela maiores, será renderizada a imagem
`/image-desktop.png`.

Para estilizar essa imagem, adicione classes à tag `<img/>`. Por exemplo, para
fazendo a imagem preencher todo o espaço disponível, como no exemplo acima.

# Encontrando as propriedades de largura e altura

Os atributos `width` e `height` da imagem podem ser confusos, mesmo para
os desenvolvedores experientes. Essa confusão ocorre pelo fato de que esses
atributos NÃO alteram o tamanho final da imagem renderizada na tela. Em vez disso, eles
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

# Carregando imagens de forma otimizada (melhorando o LCP)

Para um bom LCP, não apenas você precisa enviar payloads pequenos, mas também
precisa carregá-los na ordem correta, priorizando aqueles que estão
visíveis na tela em relação aos demais elementos (bellow the fold). Uma boa heurística é:

1. Priorizar a imagem do LCP.
2. Carregar todas as outras imagens de forma preguiçosa (lazy load).

Felizmente, os componentes `<Image>` e `<Picture>` do Deco nos ajudam a obter
esse comportamento. Comece localizando o maior elemento na tela (LCP). Em seguida, abra
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

> **dica**: a pagina final deveria ter somente <u>uma única imagem pré-carregada</u>. O
> pré-carregamento de multiplas imagens piora a nota LCP. Para verificar
> que somente uma imagem esteja sendo pré-carregada, verifique que ha somente
> uma tag `<link rel="preload"/>`.

# Fontes relevantes
- [LCP](https://web.dev/lcp/)
- [Aspect-ratio CSS](https://www.w3schools.com/cssref/css_pr_aspect-ratio.php)
