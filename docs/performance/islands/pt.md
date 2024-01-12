---
descrição: Enviando apenas dados necessários ao cliente
since: 1.0.0
---

### Resumo

> Uma ilha determina um componente interativo e que será hidratado no lado do cliente. O servidor manda todos os dados das `props` de ilhas para fazer a hidratação, bem como o browser precisa de tempo para processar e renderizar essas ilhas.
>
> Por isso, é importante tomar alguns cuidados no uso de ilhas:
>
> 1. Reduza ao máximo a quantidade de props a ser enviada / utilizada para uma ilha
> 2. Torne uma ilha apenas o que for necessário, lembrando de usar o `children` para elementos internos que não precisam de hidratação.


# Reduzindo o tamanho do JSON de props enviado para as ilhas

Ao carregar dados de APIs externas usando [Loaders](/docs/pt/concepts/loader) e
enviá-los para a [Section](/docs/pt/concepts/section), é possível que o tamanho
do _payload_ impacte negativamente a performance do site. O impacto ocorre tanto
no tempo inicial de carregamento como também na
[hidratação](https://blog.saeloun.com/2021/12/16/hydration/), onde a página é
"inicializada" no browser para que possa ser interativa (usar `useEffect`,
`useSignal`, etc...). É possível visualizar no tamanho do JSON final através da
aba **Performance** no CMS deco.

![288067513-db3a14e1-c0ac-47f8-83b9-afc8db60de71](https://github.com/deco-sites/starting/assets/76822093/ec005f5d-4169-4e89-acd0-8c06baf3c80d)

Quando o tamanho do JSON passa de ~500kb, é provável que a UI não precise do
dado completo, mas sim alguma parte dele (ou então uma computação sobre outros
valores). Para diminuir esse tamanho e melhorar a performance da página, é
possível **filtrar os dados** ainda no Loader para que apenas o necessário seja
passado para a UI.

## Reduzindo dados enviados às ilhas

Nesse primeiro exemplo, mostraremos como evitar enviar muitos dados para uma ilha. Digamos que existe um componente chamado ProductCard, que recebe todo o JSON de um produto.

```tsx
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Image src={product.image} width="100" height="100" />
    </div>
  );
}
```

Nele, você deseja incluir uma
[Island](https://fresh.deno.dev/docs/concepts/islands) para criar o botão de
comprar.

```tsx
import BuyButton from "$store/components/ui";
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Image src={product.image} width="100" height="100" />
      <BuyButton />
    </div>
  );
}
```

É possível que esse BuyButton, precise de algumas informações do produto para poder adicionar ao carrinho.

Aqui que devemos tomar cuidado a quantidade de dados enviados para a Island. Por exemplo, é bem possível que o botão de comprar não precise receber dados de imagem.

O ideal é enviar apenas os dados necessários

> ❌ Abordagem inadequada

```tsx
import BuyButton from "$store/components/ui";
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Image src={product.image} width="100" height="100" />
      <BuyButton product={product} />
    </div>
  );
}
```

> ✅ Abordagem correta

```tsx
import BuyButton from "$store/components/ui";
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Image src={product.image} width="100" height="100" />
      <BuyButton id={product.id} seller={product.seller} />
    </div>
  );
}
```

A abordagem correta envia apenas os dados de ID e Seller, que no exemplo, são os
únicos necessários na Island.

Assim, no momento de hidratação, o JSON que a Island irá carregar não será tão
grande.

# Reduzindo o escopo de uma ilha

Uma ilha e seus componentes serão todos hidratados do lado do cliente para poderem operar. Isto significa que, para todos os elementos definidos da ilha, eles serão recursivamente hidratados.

É possível reduzir o escopo da ilha, fazendo com que, qualquer elemento interno, seja passado como `children` da ilha.

> ❌ Abordagem inadequada

No exemplo abaixo, criamos uma ilha que interage com o `localStorage` para definir um título para uma galeria de itens. No exemplo abaixo, tanto os props de gallery serão inseridos para hidratar o `TitleContainer`, como serão também inseridos para poder hidratar o `Gallery`.

```tsx
import { computed } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import type { GalleryProps } from "../components/Gallery.tsx";
import { Gallery } from "../components/Gallery.tsx";

export default function TitleContainer(
  { galleryProps }: { galleryProps: GalleryProps },
) {
  const title = computed(() => {
    IS_BROWSER ? localStorage.getItem("title") : "Loading...";
  });

  return (
    <div>
      <h1>{title}</h1>
      <Gallery {...galleryProps}/>
    </div>
  );
}
```

> ✅ Abordagem correta

Se, no entanto, o `Gallery` for repassado como children para a ilha, ele será renderizado, serializado e não será hidratado! Para o `TitleContainer`, o `children` é um html pronto para ser exibido, e, portanto, não é uma ilha em si.

```tsx
import { computed } from "@preact/signals";
import type { ComponentChildren } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function TitleContainer(
  { children }: { children: ComponentChildren },
) {
  const title = computed(() => {
    IS_BROWSER ? localStorage.getItem("title") : "Loading...";
  });

  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
```

Uso do title container (em uma section, por exemplo):

```tsx
//...
<TitleContainer>
    <Gallery {...galleryProps}>
</TitleContainer>
//...
```
