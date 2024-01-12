---
description: Sending only necessary data to client
since: 1.0.0
---

When loading data from external APIs using [Loaders](/docs/en/concepts/loader)
and sending them to the [Section](/docs/en/concepts/section), it's possible that
the size of the payload may negatively impact the site's performance. The impact
occurs both in the initial loading time and in the
[hydration](https://blog.saeloun.com/2021/12/16/hydration/), where the page is
"initialized" in the browser to make it interactive (using `useEffect`,
`useSignal`, etc.). It's possible to visualize the size of the final JSON
through the **Performance** tab in the CMS deco.

![288067513-db3a14e1-c0ac-47f8-83b9-afc8db60de71](https://github.com/deco-sites/starting/assets/76822093/ec005f5d-4169-4e89-acd0-8c06baf3c80d)

When the JSON size exceeds ~500kb, it's likely that the UI doesn't need the
complete data but rather some part of it (or a computation based on other
values). To reduce this size and improve page performance, it's possible to
**filter the data** still on the loader to ensure that only the necessary data
is passed to the UI.

## Example Code - 1

In this first example, we will show how to avoid sending too much data to an
Island.

Let's say there's a component called ProductCard, which receives the entire JSON
of a product.

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

It's possible that this BuyButton may need some product information to be able
to add it to the cart.

Here is where we should be careful about the amount of data sent to the Island.

For example, it's quite possible that the buy button doesn't need to receive
image data.

The ideal approach is to send only the necessary data.

❌ Wrong Approach:

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

✅ Correct Approach:

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

The correct approach sends only the ID and Seller data, which in this example
are the only ones needed in the Island.

Thus, during hydration, the JSON that the Island will load won't be as large.

## Example Code - 2

In this example, we will show how to avoid sending a very large piece of data to
a section.

Let's say we have an inline loader to fetch product colors and return them in a
section.

```tsx
export default function Colors({ colors }) {
  return colors.map((color) => <span>{color}</span>);
}

export const loader = async () => {
  const colors = await fetch("/product/colors").then((r) => r.json());

  return colors;
};
```

This component seems correct, right?

However, after an investigation, we found that the returned data also included
product images.

Example of the API response:

```tsx
colors = [
  {
    "color": "red"
    "images": [...]
  },
  {
    "color": "green"
    "images": [...]
  },
  {
    "color": "orange"
    "images": [...]
  },
}]
```

The image data in this response will not be used in the section, so we don't
need to send it.

We can filter it like this:

```tsx
export default function Colors({ colors }) {
  return colors.map((color) => <span>{color}</span>);
}

export const loader = async () => {
  const result = await fetch("/product/colors").then((r) => r.json());
  const colors = result.map((item) => item.color);
  return colors;
};
```

This way, only the data that is used will be sent, avoiding unnecessary
overload.

## Benefits

- Significant reduction in the size of transmitted JSON.
- Noticeable improvement in page performance, especially in terms of loading.

By implementing this data preprocessing process, it is possible to optimize page
performance, ensuring that only crucial information is sent and processed,
providing a more streamlined performance for the user.
