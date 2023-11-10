---
description: TODO
since: 1.0.0
---

## Sending events to the dataLayer

The dataLayer is the data layer used by Google Tag Manager or Google Tag (used by Google Analytics) to manage pixel events configured in the tag.

In a deco.cx project, there is an sdk/analytics.ts file that contains the sendEvent function, which takes an object of type AnalyticsEvent and adds the data to the dataLayer. This file also contains two components that receive an event property of type AnalyticsEvent and send the event to the dataLayer.
The SendEventOnLoad component triggers the event when the browser's load event occurs. It is useful for sending events with names following the view_* pattern. The SendEventOnClick component triggers the event when the element is clicked.

Examples:

1. Sending an `add_to_cart` event when the user clicks on the "Add to Cart" button. This component should be used within an Island component.

```tsx
import { sendEvent } from "$store/sdk/analytics.tsx";

interface Props {
  name: string;
  sku: string;
  id: string;
  price: number;
  discount?: number;
  currency: string;
}

function AddToCart({ name, sku, id, price, discount, currency }: Props) {
  const handleClick = () => {
    addSkuToCart({ sku, quantity: 1 }); // function that calls API to add SKU
    sendEvent({
      name: "add_to_cart",
      params: {
        currency,
        value: price,
        items: [{
          item_id: id,
          quantity: 1,
          price: price + (discount ?? 0),
          discount,
          name,
        }],
      },
    });
  };

  return <button onClick={handleClick}>Add to cart</button>;
}
```

2. Sending a `view_item` event on the product page when it loads, using SendEventOnLoad.

```tsx
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { SendEventOnLoad } from "$store/sdk/analytics.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";

interface Props {
  product: Product;
  currency: string;
}

function ProductDetails({ product, currency }: Props) {
  const { price, listPrice } = useOffer(product.offers);

  return (
    <>
      <ProductInfo product={product} />
      <SendEventOnLoad
        event={{
          name: "view_item",
          params: {
            currency,
            value: price,
            items: [mapProductToAnalyticsItem({ product, price, listPrice })],
          },
        }}
      />
    </>
  );
}
```

3. Sending a `select_item` event when clicking on a product link, using SendEventOnClick. Using SendEventOnClick is useful when the component is rendered on the server.

```tsx
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { SendEventOnClick } from "$store/sdk/analytics.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";

interface Props {
  product: Product;
  itemListId?: string;
  itemListName?: string;
}

function ProductCard({ product, itemListName, itemListId }: Props) {
  const { price, listPrice } = useOffer(product.offers);

  return (
    <>
      <a id={product.productID} href={product.url}>
        <img src={product.images[0]} />
        <span>{product.name}</span>
      </a>
      <SendEventOnClick
        id={product.productID}
        event={{
          name: "select_item",
          params: {
            item_list_name: itemListName,
            item_list_id: itemListId,
            items: [
              mapProductToAnalyticsItem({
                product,
                price,
                listPrice,
              }),
            ],
          },
        }}
      />
    </>
  );
}
```

## Customizing the sendEvents function

It is possible to extend the `sendEvents` function to trigger events for other data layers besides the `dataLayer`.
In the `sdk/analytics.tsx` file of your deco project, you can customize the `sendEvent` function by adding new integrations.

Example:

```diff
export const sendEvent = <E extends AnalyticsEvent>(event: E) => {
  if (typeof window.DECO_SITES_STD?.sendAnalyticsEvent !== "function") {
    console.info(
      "Cannot find Analytics section in your page. Press `.` to add Analytics and suppress this warning",
    );

    return;
  }
+
+ if (!window.gtag) {
+   window.gtag = function () {
+   window.dataLayer.push(arguments);
+ };
+ }
+
  window.DECO_SITES_STD.sendAnalyticsEvent(event);
+ window.gtag("event", event.name, event.params)
};

```

## Integrating cart data with the AnalyticsItem type

To integrate a new cart data model, add a data mapper in the `useCart.ts` hook of the platform you are implementing.
Example from the [VTEX useCart](https://github.com/deco-cx/apps/blob/3e337b6b2996d7ecd72db34174896638c92f8811/vtex/hooks/useCart.ts#L1).