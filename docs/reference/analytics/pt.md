---
description: TODO
since: 1.0.0
---

## Enviando eventos para o dataLayer

O `dataLayer` é a camada de dados utilizada pelo Google Tag Manager ou Google
Tag (utilizado pelo Google Analytics) para gerenciar os eventos dos pixels que
estão configurados na tag.

Em um projeto deco.cx existe uma
[sdk/analytics.ts](https://github.com/deco-sites/fashion/blob/main/sdk/analytics.tsx)
que contem a função **sendEvents**, que recebe um objeto do tipo
[AnalyticsEvent](https://github.com/deco-cx/apps/blob/3e337b6b2996d7ecd72db34174896638c92f8811/commerce/types.ts#L754)
e adiciona o dado no dataLayer. Neste mesmo arquivo, também contem 2
componentes, que recebe uma propriedade `event` do tipo AnalyticsEvent e envia o
evento para o dataLayer. O **SendEventOnLoad** dispara o evento quando ocorrer o
evento de `load` do navegador, ele é útil para enviar os eventos, cujo nome tem
padrão `view_*`. Já o **SendEventOnClick** dispara o evento quando o elemento
for clicado.

Exemplos:

1. Enviando evento de `add_to_cart` quando o usuário clicar no botão de
   adicionar produto ao Carrinho. Este componente deve ser utilizado dentro de
   uma Island.

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
    addSkuToCart({ sku, quantity: 1 }); // function that call api to add sku
    sendEvent({
      name: "add_to_cart",
      params: {
        currency,
        value: price,
        items: [{
          item_id: id,
          quantity: 1,
          price: price + (discount ?? 0),
          discout,
          name,
        }],
      },
    });
  };

  return <button onClick={handleClick}>Add to cart</button>;
}
```

2. Enviando evento de `view_item` na página de produto ao carregar a página,
   utilizando SendEventOnLoad.

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

3. Enviando evento de `select_item` ao clicar num link de produto, utilizando
   SendEventOnClick. Utilizar o SendEventOnClick é útil quando o componente é
   renderizado no servidor.

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
          },
        }}
      />
    </>
  );
}
```

## Customizando função de sendEvents

É possível extender a função `sendEvents` para disparar eventos para outras
camadas de dados diferente do `dataLayer`. No arquivo `sdk/analytics.tsx` do seu
projeto deco, você pode customizar a função `sendEvent` adicionando novos
integrações.

Exemplo:

```diff
export const sendEvent = <E extends AnalyticsEvent>(event: E) => {
  if (typeof globalThis.windowDECO_SITES_STD?.sendAnalyticsEvent !== "function") {
    console.info(
      "Cannot find Analytics section in your page. Press `.` to add Analytics and supress this warning",
    );

    return;
  }
+
+ if (!globalThis.windowgtag) {
+   globalThis.windowgtag = function () {
+   globalThis.windowdataLayer.push(arguments);
+ };
+ }
+
  globalThis.windowDECO_SITES_STD.sendAnalyticsEvent(event);
+ globalThis.windowgtag("event", event.name, event.params)
};
```

## Integrando dado do carrinho com o tipo AnalyticsItem

Para integrar um novo modelo de dados de carrinho, adicione um mapeador de dados
no hook de `useCart.ts` da plataforma que está implementando. Exemplo do
[VTEX useCart](https://github.com/deco-cx/apps/blob/3e337b6b2996d7ecd72db34174896638c92f8811/vtex/hooks/useCart.ts#L1).
