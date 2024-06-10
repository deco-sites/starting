---
description: Integrar serviços externos em deco.cx usando apps
since: 1.0.0
---

## Pré-requisitos

- Criei e desenvolvi um site deco.cx.
- [Conceitos: App](/docs/en/concepts/app)

## Objetivos

Neste tutorial, você aprenderá como integrar novos serviços na deco.cx **criando
um app** no Deco Hub. Usaremos uma API externa (RandomData) como exemplo, mas
você pode usar apps para diversos casos de uso, como:

- Provedores de avaliações _(ex.: PowerReviews, Opiniões Verificadas)_.
- CMSes externos _(por exemplo: Wordpress, Sanity)_
- Widgets de UI _(por exemplo: SizeBay, chatbots)_

## Forkando o repositório deco-cx/apps

A primeira etapa para desenvolver um app é **forkar o
[deco-cx/apps](https://github.com/deco-cx/apps)**. Você pode fazer isso dentro
do Github acessando o link do repo.

<img width="1092" alt="Repositório de apps Forking deco-cx" src="https://github.com/deco-cx/apps/assets/18706156/cea1d418-f67e-4943-8358-d43357f95a7d">

Depois de forká-lo, você terá sua própria versão de `deco-cx/apps`, geralmente
hospedada em sua organização pessoal (`{seunomedeusuário}/apps`). Este
repositório será usado para desenvolver o app e, após terminar, você **enviará
um Pull Request** para o repositório original.

Se você tiver dúvidas sobre esse fluxo, leia sobre
[contribuir para o código aberto](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

## Estrutura

Na pasta raiz do repositório, você verá várias pastas. Cada uma delas representa
um app. É recomendável que você dê uma olhada nesses exemplos para entender
melhor.

![Lista de apps em deco-cx/apps](https://github.com/deco-cx/apps/assets/18706156/d6d0c90e-c348-4ca7-9d59-8c44aef522d2)

## O exemplo de caso de uso

Para ilustrar melhor os recursos do app e também demonstrar como converter dados
de ecommerce, construiremos um app chamado `random-products` e ele simulará um
provedor de busca externo, mas obtendo dados aleatórios da
[Random Data API](https://random-data-api.com/). Usaremos o endpoint
`https://random-data-api.com/api/v2/beers?size=4` que retorna uma lista de
cervejas e complementará com informações simuladas (como imagem e preço do
produto).

Criaremos um loader `productList.ts` que pode ser usado nas shelves de produtos
e outros componentes que requerem `Product[] | null` na deco.cx.

## Criando um app

É importante primeiro entender o que você deseja realizar. Se você deseja
**estender um app existente, não precisa criar um novo app,** apenas
crie/atualize arquivos dentro do app que já existe. Como queremos criar uma
integração com um novo serviço, vamos criar um app:

1. Dentro da pasta raiz `apps`, execute `deno task new random-product`.
2. Abra o código em seu IDE e verifique se uma pasta `random-product` foi
   criada.

## mod.ts

O `mod.ts` é o ponto de entrada do app e **define o tipo de configuração do
app**. O caso de uso mais comum para isso é declarar metadados que são
importantes para todos os recursos do app, como **Chaves de API, nomes de
contas, idioma**. Você pode verificar o exemplo em `typesense/mod.ts`. Esses
valores serão **preenchidos pelo usuário final sempre que desejar instalar o
app.**

Como nossa API (Random Data) não requer nenhuma chave de autenticação
específica, vamos incluir apenas uma propriedade para o endpoint raiz (neste
caso, ela precisa ser preenchida com `https://random-data-api.com`) .

```tsx
tipo de exportação Adereços = {
   /** @description Use https://random-data-api.com se não for especificado*/
   rootEndpoint: string;
};
```

> Dica: você pode usar qualquer um dos
> [Tipos utilitários](/docs/pt/reference/utility-types) que você já conhece.

É também neste arquivo que você pode disponibilizar clientes/serviços para os
carregadores e ações do app, a fim de simplificar as chamadas REST/GraphQL.
Vamos verificar como usar esse recurso.

## Criando o cliente HTTP

A maioria das integrações exigirá solicitações a uma API externa via REST ou
GraphQL. Para fornecer uma melhor experiência ao desenvolvedor, fornecemos
`createHTTPClient` e `createGraphqlClient` que podem ser usados para chamar
endpoints externos com segurança de tipo. Você pode ver um exemplo disso em
`wake/mod.ts`.

> deco.cx gera automaticamente definições de digitação para especificações
> OpenAPI. Basta soltar a exportação JSON para a API no arquivo `*.openapi.json`
> e executar `deno task start`. Você pode ver um exemplo no app `wake`.

Vamos modelar a API que pretendemos em um arquivo `api-typings.d.ts` no app.
Para gerar rapidamente o tipo de resposta, use
[QuickType](https://app.quicktype.io/). O resultado final é assim:

```ts
export interface Beer {
  id: number;
  uid: string;
  brand: string;
  name: string;
  style: string;
  hop: string;
  yeast: string;
  malts: string;
  ibu: string;
  alcohol: string;
  blg: string;
}

export interface RandomDataApi {
  /**
   * Random beers
   */
  "GET /api/v2/beers": {
    response: Beer[];
    searchParams: {
      size?: number;
    };
  };
}
```

Agora, vamos retornar ao nosso `mod.ts` e criar corretamente o cliente usando a
definição de tipos que acabamos de criar. O arquivo ficará assim:

```ts
import type { App, AppContext as AC } from "deco/mod.ts";
import manifest, { Manifest } from "./manifest.gen.ts";
import { createHttpClient } from "../utils/http.ts";
import { fetchSafe } from "../utils/fetch.ts";
import type { RandomDataApi } from "./api-typings.d.ts";

export type Props = {
  /** @description Use https://random-data-api.com if not specified */
  rootEndpoint: string;
};

/**
 * @title random-product
 */
export default function App(
  { rootEndpoint }: Props,
) {
  const randomApi = createHttpClient<RandomDataApi>({
    base: `${rootEndpoint}`,
    headers: new Headers({
      "content-type": "application/json",
    }),
    fetcher: fetchSafe,
  });

  const state = {
    randomApi,
  };

  const app: App<Manifest, typeof state> = {
    manifest,
    state,
  };
  return app;
}

export type AppContext = AC<ReturnType<typeof App>>;
```

Você pode verificar outro exemplo de cliente em `vtex/mod.ts`, usando HTTP e
GraphQL.

## Criando o loader productList

Como nosso objetivo é retornar dados de produtos que possam ser usados em uma UI
da prateleira de produtos, vamos criar um [Loader](/docs/pt/concepts/loader) que
faz exatamente isso. Neste loader, iremos:

1. Declarar as _props_ que os usuários irão preencher no Admin da deco.
2. Chamar a API Random Data usando o cliente `randomApi`.
3. Transformar os dados retornados da API no tipo `Product` da deco.

A terceira etapa (transformar os dados) é bastante iterativa, então **é melhor
ter o loader funcionando primeiro** e depois trabalhar na transformação. Então,
siga estas etapas:

1. Crie uma pasta `loaders` dentro da pasta do app `random-product`.
2. Crie um arquivo `productList.ts`.
3. Cole o seguinte código:

```ts
import type { Product } from "../../commerce/types.ts";
import { AppContext } from "../mod.ts";

export interface Props {
  /** @description total number of items to display */
  count: number;
}

/**
 * @title Random Products
 */
const loader = async (
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<Product[] | null> => {
  const { randomApi } = ctx;

  const count = props.count ?? 12;

  const beers = await randomApi["GET /api/v2/beers"]({ size: count }).then((
    r,
  ) => r.json());

  console.log({ beers });

  const products = await Promise.resolve([]);

  return products ?? [];
};

export default loader;
```

Agora que o loader foi criado (retornando apenas um array vazio por agora),
vamos conectá-lo a um site deco e vê-lo funcionando no Admin.

## Testando nosso app localmente

Para testar nosso loader, precisamos instalar o app em um site deco. E, para
tornar o app `random-product` instalável, primeiro precisamos incluí-lo no Deco
Hub (que em si é um app) e "construir" nosso app. Para fazer isso:

1. Crie um arquivo `random-product.ts` dentro de `decohub/apps`.
2. Cole a seguinte linha:

`export { default } from "../../random-product/mod.ts";`

3. Execute `deno task start` na pasta raiz `apps` _(não `apps/deco-hub/apps`,
   mas `apps`_.)

Depois disso, os manifestos serão gerados e os apps estarão prontos. Se algo não
estiver certo, o processo irá informá-lo.

Agora, para testar nosso app, vamos usar um site deco que temos disponível e
**vinculá-lo localmente** para verificar se tudo está funcionando bem. Usarei
[`storefront`](https://github.com/deco-sites/storefront) mas você pode usar
qualquer outro site que tenha `decohub.ts` instalado. Se você ainda não tem um
site, crie um novo e selecione `storefront-vtex` como template.

1. Coloque o repositório do site na mesma pasta do repositório `apps` com o qual
   você está trabalhando.
2. Abra o código do site e depois abra o arquivo `deno.json`.
3. Substitua o valor da entrada `"apps/"` por `"../apps/"` em `imports`.
4. Execute `deno task start` na pasta raiz do site.

Se tudo estiver bem, o site deverá estar funcionando e acessível via
`http://localhost:8000`.

Vamos ao Admin da deco deste site para finalizar nossa configuração.

<!-- Update this after our new apps installation process  -->

1. Acesse `http://localhost:8000`.
2. Pressione `.` no teclado para ser redirecionado para o CMS.
3. No menu superior, clique em `Apps`.
4. Altere o ambiente para `http://localhost:8000`.
5. Pesquise `random-product.ts`. Você deverá ver uma linha representando o app
   que acabou de ser criado. Atualize a página caso contrário.
6. Clique no botão `+` para iniciar a instalação desse app.
7. Preencha `https://random-data-api.com` no campo `Root Endpoint`.
8. Clique em `Salvar` e dê um nome significativo _(por exemplo:
   `app-random-product`)_.
9. Após salvar o bloco, clique em `Publicar`.

Agora, o app está instalado nesse site. Isso significa que nosso loader
`productList.ts` deve estar disponível para uso. Vamos checar:

1. Vá para a página `Blocos`.
2. Selecione a aba `Loaders`.
3. Pesquise `productList` e selecione aquele que pertence a `random-product`.
4. Preencha `Count` com um número como `4`.
5. Você deverá ver uma resposta vazia (porque o loader está retornando []), mas
   a lista de cervejas devem ser registradas no console do servidor.

<img width="1512" alt="Executando um carregador em deco.cx" src="https://github.com/deco-cx/apps/assets/18706156/89219299-f25c-4de0-a7b2-3d0b4b9f3bb6">

<img width="1509" alt="Console do carregador em execução" src="https://github.com/deco-cx/apps/assets/18706156/f8e79159-3c37-4864-a972-6a90489889ef">

Ok, agora o carregador está em execução e registrando dados provenientes da API
Random Data.

## Transformando os dados

Nosso objetivo com este carregador é alimentar componentes de UI que exibem
produtos (como a prateleira de produtos) e, para fazer isso, precisamos
transformar nossos dados no tipo esperado para essas seções.

deco.cx usa o tipo de dados [Schema.org](https://schema.org/Product) em seus
componentes para que a comunidade possa usar o mesmo código para se conectar com
diferentes plataformas de comércio eletrônico. Por causa disso, **precisamos
transformar os dados dentro do nosso carregador** para corresponder ao mesmo
tipo.

<img width="1013" alt="image" src="https://github.com/deco-sites/std/assets/18706156/27c54c61-60ab-430c-bca4-8de6c6669b5b">

Vamos criar um arquivo `utils/transform.ts` em nosso app que conterá a função de
transformação do tipo de entrada (`Beer`) para o tipo de saída (`Product`).
Vamos começar com este trecho:

```ts
import type { Product } from "../../commerce/types.ts";
import { DEFAULT_IMAGE } from "../../commerce/utils/constants.ts";
import { Beer } from "../api-typings.d.ts";

export const toProduct = (
  beer: Beer,
  url: URL,
): Product => {
  // @ts-expect-error: Still a work in progress
  return {};
};
```

Este tutorial inclui apenas o loader de lista de produtos, mas se você estiver
integrando uma plataforma de ecommerce completamente nova, você também precisará
transformar os dados relacionados a SEO e filtros de pesquisa.

Vamos chamar esta função dentro do loader `productList`, mapeando os dados sobre
esta função:

```ts
import { toProduct } from "../utils/transform.ts"
// ...

  const products = beers.map((beer) => toProduct(beer, new URL(req.url)));

  return products ?? [];
};
```

A função `toProduct` não está fazendo nada no momento, mas está conectada ao
loader. De agora em diante, precisamos **entender os dados e criar os
mapeamentos**. Esta é uma etapa muito iterativa e recomendo que você faça isso
já testando com uma seção de UI. Vamos visualizar um `ProductShelf` no Admin do
deco conectado ao nosso loader e ver onde ele cai.

<img width="1512" alt="Erro Não é possível ler propriedades de indefinido (lendo 'url') visualizando uma prateleira de produto" src="https://github.com/deco-sites/storefront/assets/18706156/cc77d386- ff4a-4ee7-955a-4493c009834d">

Você deverá ver alguns erros porque a Section acessa algumas propriedades que
ainda não estamos passando (como a acima), mas ver isso pode ser útil, pois leva
ao que precisa ser resolvido na função de transformação.

Como estamos usando uma API simulada que não fornece muitos dados, teremos que
deixar "mockados" alguns valores. Esta é a função de mapeamento final que
criamos:

```ts
export const toProduct = (
  beer: Beer,
  url: URL,
): Product => {
  return {
    "@type": "Product",
    productID: beer.uid,
    url: `${url.origin}/beers/${beer.uid}`,
    name: beer.name,
    description: beer.style,
    sku: `${beer.id}`,
    brand: { "@type": "Brand", name: beer.brand },
    additionalProperty: [{
      "@type": "PropertyValue",
      name: "hop",
      value: beer.hop,
    }],
    image: [DEFAULT_IMAGE],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      highPrice: 100,
      lowPrice: 100,
      offerCount: 1,
      offers: [{
        "@type": "Offer",
        price: 100,
        availability: "https://schema.org/InStock",
        inventoryLevel: { value: 10 },
        priceSpecification: [{
          "@type": "UnitPriceSpecification",
          priceType: "https://schema.org/SalePrice",
          price: 100,
        }],
      }],
    },
  };
};
```

Depois de salvar o código e verificar novamente o ProductShelf, devemos ver o
seguinte:

<img width="1508" alt="image" src="https://github.com/deco-sites/std/assets/18706156/8b9e2fb6-f6a8-45f1-89ec-ea9e57b450f5">

E é isso! O loader Random Product `productList` está funcionando e já pode ser
integrado às Sections de UI da deco.

Estamos usando dados de exemplo que não representam o que normalmente é
retornado pelos provedores de busca e ecommerce. **Em um cenário real, é
importante mapear corretamente os dados baseado nos tipos do schema.org.**

## Lançando

Agora que o app já está incluído no deco hub, **crie um Pull Request** e
envie-nos para [nosso servidor no Discord](https://deco.cx/discord) (canal
`#deco-prs`).
