---
description: |
   deco.cx is a website builder that allows you to create, personalize and deploy websites with ease. With a focus on personalization, you can create experiments, segment content by audience and more.
---

[deco.cx](https://deco.cx) is a modern web development platform that offers a
simple and efficient tech stack combined with powerful features to create
blazingly fast websites.

What sets _deco.cx_ apart is its **personalization** features and how easy it is
to **manage content without code changes**. deco.cx also makes it **easy for
developers** to code UI components and behavior using a **simple web stack**
with [Preact](https://preactjs.com/), [Tailwind](https://tailwindcss.com) and
[Deno](https://deno.land/). We are the platform to create headless commerce
experiences.

<!-- ![deco admin](https://github.com/deco-cx/apps/assets/882438/5a497330-93e5-497d-a572-fde44421d6ac) -->

## How it works

When you create a site in _deco.cx_, it's automatically **deployed on the edge
in 12 regions world-wide** on [Deno Deploy](https://deno.com). This means your
pages are served close to users, ensuring lightning-fast performance.
Additionally, we provide you with a Github repository where you can manage your
code and collaborate with others on your team. With _deco.cx_, you can focus on
building your site **without worrying** about deployment or repository
management.

One of _deco_'s unique capabilities is the ability for developers to declare how
UI components and functions can be configured, which then become **forms that
can be easily edited** by business users. deco's personalization engine offers a
range of features on top of this customization, unlocking new opportunities for
businesses to **tailor their content to individual users.**

_deco.cx_ sites and stores have stellar performance thanks to a combination of
edge deployment, server-side rendering, and server-side navigation. As a result,
our typical sites score above 90 on Google's Lighthouse scores, which translates
to better SEO and higher conversion rates.

Whether you're a developer, marketer, or business owner, _deco.cx_ offers an
innovative and accessible way to create and manage websites and online stores.
Developers handle the code part, but they make it easy for business users to
edit text and images without needing to write any code themselves.

<!--
## Code example

This is what a _deco.cx_'s [Section](/docs/en/concepts/section) looks like:

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

By only exporting the `interface Props`, it's now possible to configure this
Section in _deco.cx_'s Admin and add it to your site's pages.
-->
