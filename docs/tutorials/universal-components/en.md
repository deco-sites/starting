---
description: Learn how to build components once and reuse them everywhere
since: 1.0.0
---

Universal components are components that are not dependent on a specific data
_source_ to determine its behavior. The only thing that they what matters is the
`shape` of the data, this usually happens when the component is made to be used
in several different places (there is even a possibility between using it
between different sites) without having to read from some API specific, i.e.
without any external dependencies (a.k.a implicit dependency).

An example of a universal component is the
[Fashion Store ProductShelf](https://github.com/deco-sites/fashion/blob/main/components/product/ProductShelf.tsx#L15),
let's take a look at it;

```tsx
export interface props {
  title: string;
  products: Product[] | null;
  itemsPerPage?: number;
}

function ProductShelf({
  title,
  products,
}: props) {
  // ...implementation
}
```

Note that although the ProductShelf depends on a "Product" list to work, it does
not depend on what is the source of the data that will provide this information.
This is only possible because the `Product` type is a type created by a central
entity on `schema.org`. Another possible way of thinking about our ProductShelf
would be to write an [Inline Loader](/docs/en/tutorials/data-fetching) and make
this inline loader read the API data of an e-commerce in specific (e.g Shopify)
and only then render the ProductShelf.

This is totally possible and doable, however, it should be noted that when this
is done, our business user loses the possibility of, for example, switch
datasource from Shopify to VTEX, which is a very powerful to avoid lock-in on a
specific platform. In that sense, one universal component causes dependencies on
types to be inverted, while instead of the component depending on the API,
actually the component only depends on the data `format` and allows `loaders` to
be implemented in order to return this type in common, making it possible to
choose the data loader when configuring component properties in the Admin
Editor.

<img width="699" alt="image" src="https://user-images.githubusercontent.com/5839364/230793613-5671c042-99ef-469e-be5c-6503be3b6889.png">

In fact, our ProductShelf has at least four distinct implementations for read
products from APIs and even different e-commerce platforms, they are:
[VNDAProductList](https://github.com/deco-sites/std/blob/c99ccad64e350b4e4775f98232394486e18b4715/functions/vndaProductList.ts#L1),
[VTEXProductList](https://github.com/deco-sites/std/blob/c99ccad64e350b4e4775f98232394486e18b4715/functions/vtexProductList.ts#L1),
[VTEXLegacyProductList](https://github.com/deco-sites/std/blob/c99ccad64e350b4e4775f98232394486e18b4715/functions/vtexLegacyProductList.ts#L1),
It is
[ShopifyProductList](https://github.com/deco-sites/std/blob/c99ccad64e350b4e4775f98232394486e18b4715/functions/shopifyProductList.ts#L1)

This makes Universal Components something that has value and usability. very
large compared to components that depend on data from APIs!

## Further reading

Universal components make interoperability possible! Read more information on
how to create type loaders in our documentation

- [Props Loader](/docs/en/tutorials/props-loader)
- [Core Concepts: Loaders](/docs/en/concepts/loader)
