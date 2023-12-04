---
description: TODO
since: 1.0.0
---

Em algumas situações, ao utilizar [loaders](http://localhost:8000/docs/pt/concepts/loader) para obter dados, pode-se receber uma quantidade excessiva de informações, impactando negativamente o desempenho da página. Isso é evidenciado pelo tamanho significativo do JSON transmitido para o cliente.

![287813945-9ccd40a6-f41f-486f-a2b6-3f1efca0bfd1](https://github.com/deco-sites/starting/assets/76822093/bff19a56-bc1d-475b-b25d-f45fd1af713a)


Para mitigar esse problema, propomos a implementação de um processo de pré-processamento dos dados no lado do cliente, garantindo que apenas as informações necessárias sejam transmitidas e utilizadas no markup/UI.

## Fluxo de Dados

1. Solicitação de Dados: Inicie o fluxo normal de dados, solicitando as informações necessárias por meio de props.

2. Loader de Dados: Utilize um loader para obter os dados desejados. Em algumas situações, o loader pode retornar uma quantidade substancial de dados, por exemplo, ao solicitar produtos relacionados da [VTEX](https://www.deco.cx/docs/pt/composable-apis/vtex). No entanto, é importante observar que há momentos em que o loader pode retornar uma quantidade de dados maior do que o necessário para a operação em questão.

3. Pré-Processamento Inline: Introduza um mecanismo de pré-processamento de dados inline. Este componente receberá as mesmas props do loader e processará os dados de forma a transmitir apenas as informações essenciais, otimizando assim o desempenho.

4. Entrega ao Componente: Transmita apenas os dados processados para o componente JSX, reduzindo assim a carga desnecessária no cliente.

## Código de exemplo

Esta é a implementação do Loader `storefront/loaders/Layouts/ProductCard.tsx`:

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

## Benefícios
- Redução significativa no tamanho do JSON transmitido.
- Melhoria perceptível no desempenho da página, especialmente em termos de carregamento.

Ao implementar esse processo de pré-processamento de dados, é possível otimizar a performance da página, garantindo que apenas as informações cruciais sejam enviadas e processadas, proporcionando um desempenho mais otimizado para o usuário.
