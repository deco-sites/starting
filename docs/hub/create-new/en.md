---
description: Integrate external services into deco.cx using apps
since: 1.0.0
---

## Prerequisites

- Having created and developed a deco.cx site.
- [Concepts: App](/docs/en/concepts/app)

## Objectives

In this tutorial, you'll learn how to integrate new services into deco.cx by **creating a new app** on Deco Hub. We'll use a mock search provider for ecommerce as an example, but you can use apps for several use cases, like:

- Review providers _(e.g: PowerReviews, Opiniões Verificadas)_.
- External CMSes _(e.g: Wordpress, Sanity)_
- UI widgets _(e.g: SizeBay, chatbots)_

## Forking the deco-cx/apps repository

The first step to develop an app is to **fork the [deco-cx/apps](https://github.com/deco-cx/apps)**. You can do it inside Github by accessing the repo link.

<img width="1092" alt="Forking deco-cx apps repository" src="https://github.com/deco-cx/apps/assets/18706156/cea1d418-f67e-4943-8358-d43357f95a7d">

After forking it, you'll have your own version of `deco-cx/apps`, usually hosted in your personal organization (`{yourusername}/apps`). All the changes will be made to this version and then, after completion, you'll **submit a Pull Request** to the original repository.

If you have questions about this flow, read about [contributing to open-source](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

## Structure

In the root folder of the repo, you'll see a lot of folder. Each one of those represent an app. It's recommended that you take a look into those examples so you can better understand the app composition.

![List of apps in deco-cx/apps](https://github.com/deco-cx/apps/assets/18706156/d6d0c90e-c348-4ca7-9d59-8c44aef522d2)

## The example use case

To better illustrate the app's capabilities and also demonstrate how to convert ecommerce data, we will build an app called `random-products` and it'll simulate an external search provider, but getting random data from [Random Data API](https://random-data-api.com/). We will use the `https://random-data-api.com/api/v2/beers?size=4` endpoint which returns a list of beers, and will complement with mocked information (like the product's image and price).

We'll create a `productList.ts` loader which can be used in deco.cx's Product Shelves and other components that require `Product[] | null`.

## Creating an app

It's important to first understand what you want to accomplish. If you want to **extend an existing application, you don't need to create a new app,** just create/update files inside the app that already exists. Since we want to create an integration with a new service, let's create an app:

1. Inside the `apps` root folder, run `deno task new random-product`.
2. Open the code in your IDE and verify that a `random-product` folder was created.

## mod.ts

The `mod.ts` is the entrypoint of the application, and it **defines the configuration type for the app**. The most common usecase for this is to declare metadata that is important to all of the app's capabilities, like **API Keys, account names, language**. You can check the example in `typesense/mod.ts`. These values will be **filled by the end user whenever they want to install the app.**

Since our API (Random Data) doesn't require any specific authentication key, let's include only one prop for the root endpoint (in this case, it needs to be filled with `https://random-data-api.com`).

```tsx
export type Props = {
  /** @description Use https://random-data-api.com if not specified*/
  rootEndpoint: string;
};
```

> Tip: You can use any of the [Utility Types](/docs/en/reference/utility-types) that you already know.

It's also in this file that you can make clients/services available to the app's loaders and actions, in order to simplify REST/GraphQL calls. Let's check how to use this feature.

## Creating the HTTP client

Most of the integrations will require making requests to an external API via REST or GraphQL. In order to provide a better Developer Experience, we provide a `createHTTPClient` and `createGraphqlClient` that can be used to call external endpoints with type-safety. You can see an example of this in `wake/mod.ts`.

> deco.cx automatically generates typing definitions for OpenAPI specifications. Just drop the JSON export for the api in `*.openapi.json` file and run `deno task start`. You can see an example in the `wake` app.

Let's model the API we're targeting in a `api-typings.d.ts` file in the app. To quickly generate the response's type, use [QuickType](https://app.quicktype.io/). The end result looks like this:

```ts
export interface Beer {
  id:      number;
  uid:     string;
  brand:   string;
  name:    string;
  style:   string;
  hop:     string;
  yeast:   string;
  malts:   string;
  ibu:     string;
  alcohol: string;
  blg:     string;
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

Now, let's return to our `mod.ts` and properly create the client using the typing definition we've just created. After adjusting the types, the file will look like this:

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
      'content-type': 'application/json'
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

You can check other client example in `vtex/mod.ts`, using both HTTP and GraphQL.

## Creating productList loader

Since our goal is to return product data that can be used in a Product Shelf UI, let's create a [Loader](/docs/en/concepts/loader) that does just that. In this loader, we will:

1. Declare the props that users will fill in deco's admin.
2. Call the Random Data API using the `randomApi` client.
3. Transform the data returned from the API into deco's `Product` type.

The 3rd step (transforming the data) is quite iterative, so **it's better to have the loader working first** and then work on the transformation. So, follow these steps:

1. Create a `loaders` folder inside of the `random-product` app folder.
2. Create a `productList.ts` file.
3. Paste the following boilerplate:

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

  const beers = await randomApi["GET /api/v2/beers"]({ size: count }).then((r) =>
    r.json()
  );

  console.log({ beers })

  const products = await Promise.resolve([]);

  return products ?? [];
};

export default loader;
```

Now that the loader is created (returning only an empty array for noew), let's connect it with a deco site and see it working in the Admin.

## Testing our app locally

In order to test our loader, we need to install the app in a deco site. And, to make the `random-product` app installable, we first need to include it in Deco Hub (which itself is an app) and "build" our application. To do that:

1. Create a `random-product.ts` file inside `decohub/apps`.
2. Paste the following line:

`export { default } from "../../random-product/mod.ts";`

3. Run `deno task start` in the `apps` root folder _(not `apps/deco-hub/apps`, but `apps`_.)

After this, the manifests will be generated and the apps will be ready. If anything is not right, the process will let you know.

Now, to test our app, let's use a deco site we have available and **link it locally** so we can check that everything is working fine. I'll use [`storefront`](https://github.com/deco-sites/storefront) but you can use any other site that have `decohub.ts` installed. If you don't have a site yet, create a new one and select `storefront-vtex` as a template.

1. Place the site's repository in the same folder as the `apps` repo you've been working with.
2. Open the site's code and then open the `import_map.json` file.
3. Replace the value of the `"apps"` entry to `"../apps/`.
4. Run `deno task start` in the site's root folder.

If everything is ok, the site should be running and accessible via <http://localhost:8000>.

Let's go to deco's admin for this site to finish our setup.

1. Access <http://localhost:8000>.
2. Press `.` on your keyboard to be redirected to the CMS.
3. Click on `Block` to go to the Blocks page in Admin.
4. In the top right, change the environment to `http://localhost:8000`.
5. In the `Apps` tab, search for `random-product.ts`. You should see a row representing the app that was just created. Refresh the page otherwise.
6. Click on the `+` button to start instaling that app.
7. Fill `https://random-data-api.com` in the `Root Endpoint` field.
8. Click on `Save` and give it a meaningful name _(e.g: `random-product-app`)_.
9. After having saved the block, click on `Publish`.

Now, the app is installed in that site. This means that our `productList.ts` loader should be available to use. Let's check:

1. Go back to the `Blocks` page.
2. Select the `Loaders` tab.
3. Search for `productList` and select the one that is from `random-product`.
4. Fill the `Count` with a number like `4`.
5. You should see an empty response (because the loader is returning []) but the list of beers should be logged in the server's console.

<img width="1512" alt="Running a loader in deco.cx" src="https://github.com/deco-cx/apps/assets/18706156/89219299-f25c-4de0-a7b2-3d0b4b9f3bb6">

<img width="1509" alt="Console of the running loader" src="https://github.com/deco-cx/apps/assets/18706156/f8e79159-3c37-4864-a972-6a90489889ef">

## Transforming the data
