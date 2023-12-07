---
description: Um Loader na deco.cx é uma função que retorna os dados necessários para um Site.
since: 1.0.0
---

Um **Loader** em _deco.cx_ é uma função Typescript que retorna tipicamente os
dados necessários em uma [Section](/docs/pt/concepts/section). Essas funções são
executadas antes da renderização de cada página e seu principal objetivo é
**buscar dados de fontes externas**, transformá-los se necessário e
**fornecê-los às Seções do site que precisam.** Os Loaders podem ser usados para
buscar dados de APIs, bancos de dados ou qualquer outra fonte externa. As
implementações locais de Loaders vivem na pasta `/loaders` do seu projeto, porém
é possível [Instalar novas apps](/docs/pt/getting-started/installing-an-app) que
contém outros loaders.

Além de buscar dados, os Loaders na _deco.cx_ **também podem exportar um tipo de
Props Typescript**, o que permite que sejam configurados no
[Admin](https://deco.cx/admin) assim como as
[Sections](/docs/pt/concepts/section). Isso significa que os usuários de negócio
podem configurar detalhes sobre como o Loader irá operar, como **configurar
filtros** ou **passar parâmetros para APIs.** Ao tornar os Loaders configuráveis
dessa maneira, fica mais fácil gerenciar os dados que fluem para as Sections e
garantir que o Site esteja exibindo as informações corretas para os visitantes.

Outro benefício dos Loaders na _deco.cx_ é que **vários loaders podem retornar o
mesmo tipo de dados**. Isso permite que as [Sections](/docs/pt/concepts/section)
que recebem, por exemplo, um _array_ de Produtos canônico obtenham dados de
diferentes Loaders, dependendo da configuração do usuário. Isso significa que as
UIs podem ser reutilizadas em [Sites](/docs/pt/concepts/site) ou entre times,
facilitando o gerenciamento e a escala do seu projeto.

> Todas as Sections para lojas de _ecommerce_ criadas por _deco.cx_ na
> [Fashion](https://github.com/deco-sites/fashion) usam um tipo de Produt
> canônico e também cada Loader que se conecta às APIs dos _ecommerce
> providers_. Isso significa que você pode reutilizar a mesma UI para mostrar
> dados de diferentes locais, dependendo da configuração.

<img width="1259" alt="image" src="https://user-images.githubusercontent.com/18706156/224897214-a45b2731-5799-4007-8084-a8a772ddf5d2.png">

## Código de exemplo

Esta é a implementação do Loader `shopify/loaders/ProductList.ts`:

```tsx
import type { Product } from "../../commerce/types.ts";
import { AppContext } from "../../shopify/mod.ts";
import { ListProducts } from "../utils/storefront/queries.ts";
import {
  ListProductsQuery,
  ListProductsQueryVariables,
} from "../utils/storefront/storefront.graphql.gen.ts";
import { toProduct } from "../utils/transform.ts";

export interface Props {
  /** @description search term to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
}

/**
 * @title Shopify Integration
 * @description Product List loader
 */
const loader = async (
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<Product[] | null> => {
  const { storefront } = ctx;

  const count = props.count ?? 12;
  const query = props.query || "";

  const data = await storefront.query<
    ListProductsQuery,
    ListProductsQueryVariables
  >({
    variables: { first: count, query },
    ...ListProducts,
  });

  // Transform Shopify product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = data?.products.nodes.map((p) =>
    toProduct(p, p.variants.nodes[0], new URL(_req.url))
  );

  return products ?? [];
};

export default loader;
```

[Fonte](https://github.com/deco-cx/apps/blob/3e337b6b2996d7ecd72db34174896638c92f8811/shopify/loaders/ProductList.ts#L1)

## Leitura recomendada

- [Buscando dados de API](/docs/pt/develping/fetching-data)
- [Invocando um loader através da API](/docs/pt/developing/fetching-data-client)
