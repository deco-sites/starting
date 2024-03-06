---
description: deco.cx é um construtor de sites que permite criar, personalizar e implantar sites com facilidade. Com foco na personalização, você pode criar experimentos, segmentar conteúdo por público e muito mais.
---

A _deco.cx_ é uma plataforma moderna de desenvolvimento web que oferece uma
stack tecnológica simples e eficiente combinada com recursos poderosos para
criar sites ultrarrápidos.

O que diferencia a _deco.cx_ são seus recursos de **personalização** e o quão
fácil é **gerenciar o conteúdo sem alterações de código**. A _deco.cx_ também
torna fácil para os desenvolvedores codificar componentes e comportamentos de UI
usando uma **stack web simples** com **[Preact](https://preactjs.com/)**,
**[Tailwind](https://tailwindcss.com)** e **[Deno](https://deno.land/)**. Somos
a plataforma para criar experiências _headless commerce_.

![deco admin](https://github.com/deco-cx/apps/assets/882438/5a497330-93e5-497d-a572-fde44421d6ac)

Quando você cria um site na _deco.cx_, ele é automaticamente **deployado na
_edge_ em 12 regiões em todo o mundo** no [Deno Deploy](https://deno.com/). Isso
significa que suas páginas são servidas próximas aos seus usuários, garantindo
um desempenho ultrarrápido. Além disso, fornecemos um repositório do Github onde
você pode gerenciar seu código e colaborar com outras pessoas do seu time. Com a
_deco.cx_, você pode se concentrar em construir seu site **sem se preocupar**
com deploy ou gerenciamento de repositórios.

Uma das capacidades exclusivas da _deco.cx_ é a capacidade dos desenvolvedores
de facilmente declararem como os componentes de UI e as funções podem ser
configurados, o que então se torna **formulários que podem ser facilmente
editados** por usuários de negócios. O mecanismo de personalização da _deco.cx_
oferece uma variedade de recursos além dessa personalização, desbloqueando novas
oportunidades para marcas **criarem conteúdo exclusivo para cada audiência** e
**testar cada mudanca**.

Os sites e lojas da _deco.cx_ têm desempenho excepcional graças a uma combinação
de deploy na _edge_, renderização e navegação no servidor, além de contar com
**templates de alta qualidade** construídos pelo time da _deco.cx_. Como
resultado, nossos sites geralmente têm pontuações acima de 90 no scores do
[Lighthouse](https://web.dev/measure/), o que se traduz em melhor SEO e maiores
taxas de conversão.

<!-- TODO: Adicionar link para essa landing page que fala de performance -->

Seja você um desenvolvedor, um profissional de marketing ou uma proprietária de
empresa, a _deco.cx_ oferece uma maneira inovadora e acessível de criar e
gerenciar sites e lojas online. Os desenvolvedores e desenvolvedoras cuidam do
código, mas tornam fácil para os usuários de negócios editar textos e imagens
sem precisar escrever qualquer código.

## Exemplo de código

Este é o código de uma [Section](/docs/pt/concepts/section) `ProductShelf` na
_deco.cx_:

```tsx
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { Product } from "apps/commerce/types.ts";

export interface Props {
  products: Product[] | null;
  title?: string;
  description?: string;
  layout?: {
    headerAlignment?: "center" | "left";
    headerfontSize?: "Normal" | "Large";
  };
  cardLayout?: cardLayout;
}

function ProductShelf({
  products,
  title,
  description,
  layout,
  cardLayout,
}: Props) {
  const id = useId();
  const platform = usePlatform();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div class="w-full container  py-8 flex flex-col gap-12 lg:gap-16 lg:py-10">
      <Header
        title={title || ""}
        description={description || ""}
        fontSize={layout?.headerfontSize || "Large"}
        alignment={layout?.headerAlignment || "center"}
      />

      <div
        id={id}
        class="container grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {products?.map((product, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-[270px] sm:w-[292px] first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >
              <ProductCard
                product={product}
                itemListName={title}
                layout={cardLayout}
                platform={platform}
                index={index}
              />
            </Slider.Item>
          ))}
        </Slider>

        <>
          <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
            <Slider.PrevButton class="btn btn-circle btn-outline absolute right-1/2 bg-base-100">
              <Icon size={24} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
            <Slider.NextButton class="btn btn-circle btn-outline absolute left-1/2 bg-base-100">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>
        <SliderJS rootId={id} />
      </div>
    </div>
  );
}

export default ProductShelf;
```

Exportando apenas a `interface Props`, agora é possível configurar esta
_Section_ no Admin da _deco.cx_ e adicioná-la às páginas do seu site.
