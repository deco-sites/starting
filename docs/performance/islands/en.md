---
description: Optimizing the use of islands
since: 1.0.0
---

### Summary

> An island is a component that is interactive and will be hydrated on the
> client side. The server sends all the data from the island's `props` for
> hydration, and the browser needs time to process and render these islands.
>
> Therefore, it is important to take some precautions when using islands:
>
> 1. Minimize the amount of props to be sent/used for an island
> 2. Make an island only what is necessary, remembering to use `children` for
>    internal elements that do not need hydration.

# Reducing the size of the props JSON sent to islands

When loading data from external APIs using [Loaders](/docs/en/concepts/loader)
and sending them to the [Section](/docs/en/concepts/section), it is possible
that the size of the payload negatively impacts the performance of the site. The
impact occurs both in the initial loading time and in the
[hydration](https://blog.saeloun.com/2021/12/16/hydration/), where the page is
"initialized" in the browser to make it interactive (using `useEffect`,
`useSignal`, etc...). You can view the size of the final JSON through the
**Performance** tab in the Deco CMS.

![288067513-db3a14e1-c0ac-47f8-83b9-afc8db60de71](https://github.com/deco-sites/starting/assets/76822093/ec005f5d-4169-4e89-acd0-8c06baf3c80d)

When the JSON size exceeds ~500kb, it is likely that the UI does not need the
complete data, but rather some part of it (or a computation based on other
values). To reduce this size and improve page performance, it is possible to
**filter the data** in the Loader so that only the necessary data is passed to
the UI.

## Reducing data sent to islands

In this first example, we will show how to avoid sending too much data to an
island. Let's say there is a component called ProductCard that receives the
entire JSON of a product.

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

In it, you want to include an
[Island](https://fresh.deno.dev/docs/concepts/islands) to create the buy button.

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

It is possible that this BuyButton needs some product information in order to
add it to the cart.

This is where we need to be careful about the amount of data sent to the Island.
For example, it is very likely that the buy button does not need to receive
image data.

The ideal approach is to send only the necessary data.

> ❌ Inappropriate approach

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

> ✅ Correct approach

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

The correct approach sends only the ID and Seller data, which in the example are
the only ones needed in the Island.

Thus, during hydration, the JSON that the Island will load will not be as large.

# Reducing the scope of an island

An island and its components will all be hydrated on the client side in order to
operate. This means that for all defined elements of the island, they will be
recursively hydrated.

It is possible to reduce the scope of the island by passing any internal
elements as `children` of the island.

> ❌ Inappropriate approach

In the example below, we create an island that interacts with `localStorage` to
set a title for a gallery of items. In the example below, both the gallery props
will be passed to hydrate the `TitleContainer` and will also be passed to
hydrate the `Gallery`.

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
      <Gallery {...galleryProps} />
    </div>
  );
}
```

> ✅ Correct approach

However, if the `Gallery` is passed as children to the island, it will be
rendered, serialized, and not hydrated! For the `TitleContainer`, the `children`
is pre-rendered HTML ready to be displayed, and therefore it is not an island
itself.

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
