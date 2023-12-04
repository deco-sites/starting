---
description: TODO
since: 1.0.0
---

In some situations, when using [loaders](http://localhost:8000/docs/en/concepts/loader) to fetch data, an excessive amount of information may be received, negatively impacting page performance. This is evidenced by the significant size of the JSON transmitted to the client.

![287814343-44b8fc59-2c25-4a55-bbe3-16810d5501a6](https://github.com/deco-sites/starting/assets/76822093/ab2d2212-1e3e-487d-ad6a-3eb225f9b15b)

To mitigate this issue, we propose implementing a client-side data preprocessing process, ensuring that only necessary information is transmitted and used in the markup/UI.

## Data Flow

1. Data Request: Initiate the normal data flow by requesting the necessary information through props.

2. Data Loader: Use a loader to fetch the desired data. In some scenarios, the loader may return a substantial amount of data, for instance, when fetching related products from [VTEX](https://www.deco.cx/docs/en/composable-apis/vtex). However, it's essential to note that there are instances where the loader might return more data than necessary for the specific operation.

3. Inline Preprocessing: Introduce an inline data preprocessing mechanism. This component will receive the same props as the loader and process the data to transmit only essential information, optimizing performance.

4. Delivery to Component: Transmit only the processed data to the JSX component, thus reducing unnecessary load on the client.

## Example Code

This is the implementation of the `storefront/loaders/Layouts/ProductCard.tsx`:

```tsx
import ProductCard, { Layout } from "$store/components/product/ProductCard.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";

interface Props {
  /** @title Product Card layout props */
  layout: Layout;
}

/** @title Product Card Layout */
const loader = ({ layout }: Props): Layout => layout;

export const Preview = (props: Props) => {
  const { layout } = props;

  return (
    <div class="h-full w-full grid place-items-center">
      <div class="max-w-xs">
        <ProductCard
          layout={layout}
          platform={usePlatform()}
          product={{
            "@type": "Product",
            "category": "Masculino>Camisetas Gola Lisa",
            "productID": "165",
            "url": "",
            "name": "Product Test",
            "description": "Product Description",
            "brand": {
              "@type": "Brand",
              "@id": "2000000",
              "name": "deco.cx",
            },
            "inProductGroupWithID": "33",
            "sku": "165",
            "gtin": "789456123003305",
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "TAMANHO",
                "value": "GG",
                "valueReference": "SPECIFICATION",
              },
            ],
            "isVariantOf": {
              "@type": "ProductGroup",
              "productGroupID": "33",
              "hasVariant": [],
              "name": "Camiseta Masculina Gola Lisa Olive",
              "additionalProperty": [],
            },
            "image": [
              {
                "@type": "ImageObject",
                "alternateName": "test",
                "url":
                  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/b9e0a819-6a75-47af-84fe-90b44fecda5f",
              },
              {
                "@type": "ImageObject",
                "alternateName": "test",
                "url":
                  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/b9e0a819-6a75-47af-84fe-90b44fecda5f",
              },
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "BRL",
              "highPrice": 69.3,
              "lowPrice": 69.3,
              "offerCount": 1,
              "offers": [
                {
                  "@type": "Offer",
                  "price": 69.3,
                  "seller": "1",
                  "priceValidUntil": "2024-09-04T13:03:31Z",
                  "inventoryLevel": { "value": 10000 },
                  "teasers": [],
                  "priceSpecification": [
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/ListPrice",
                      "price": 179,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "price": 69.3,
                    },
                  ],
                  "availability": "https://schema.org/InStock",
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default loader;
```

## Benefits
- Significant reduction in the size of transmitted JSON.
- Noticeable improvement in page performance, especially in terms of loading.

By implementing this data preprocessing process, it is possible to optimize page performance, ensuring that only crucial information is sent and processed, providing a more streamlined performance for the user.
