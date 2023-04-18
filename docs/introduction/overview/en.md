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
with [Preact](https://preactjs.com/), [Twind](https://twind.style/) and
[Deno](https://deno.land/). We are the platform to create headless commerce
experiences.

<img width="1512" alt="image" src="https://user-images.githubusercontent.com/18706156/224878795-66bc06b8-10bf-4285-9833-d375137e8914.png">

When you create a site in _deco.cx_, it's automatically **deployed on the edge
in 34 regions world-wide** on [Deno Deploy](https://deno.com). This means your
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

## Code example

This is what a _deco.cx_'s [Section](/docs/en/concepts/section) looks like:

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

By only exporting the `interface Props`, it's now possible to configure this
Section in _deco.cx_'s Admin and add it to your site's pages.
