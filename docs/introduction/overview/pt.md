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
**[Twind](https://twind.style/)** e **[Deno](https://deno.land/)**. Somos a
plataforma para criar experiências _headless commerce_.

![https://user-images.githubusercontent.com/18706156/224878795-66bc06b8-10bf-4285-9833-d375137e8914.png](https://user-images.githubusercontent.com/18706156/224878795-66bc06b8-10bf-4285-9833-d375137e8914.png)

Quando você cria um site na _deco.cx_, ele é automaticamente **deployado na
_edge_ em 34 regiões em todo o mundo** no [Deno Deploy](https://deno.com/). Isso
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
import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  products: Product[];
}

function ProductShelf({
  title,
  products,
}: Props) {
  return (
    <Container class="flex flex-col items-center gap-10 py-10">
      {title && (
        <h2>
          <Text variant="heading-2">{title}</Text>
        </h2>
      )}
      <Slider class="gap-6">
        {products?.map((product, index) => {
          const ml = index === 0 ? "ml-6 sm:ml-0" : "";
          const mr = index === products.length - 1 ? "mr-6 sm:mr-0" : "";

          return (
            <div
              class={`min-w-[220px] max-w-[220px] sm:min-w-[287px] sm:max-w-[287px] ${ml} ${mr}`}
            >
              <ProductCard key={index} product={product} />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
}

export default ProductShelf;
```

Exportando apenas a `interface Props`, agora é possível configurar esta
_Section_ no Admin da _deco.cx_ e adicioná-la às páginas do seu site.
