---
description: Learn how to configure deco connection with any VTEX account.
---

## Video version

To watch the content of this article, click
[here](https://www.loom.com/share/9fee00a691dd44cfb35d1e2680719e5e)

This guide shows you how to create and configure a website on
[**deco.cx**](http://deco.cx) for a _storefront_ that reads platform data from
ecommerce [VTEX](https://vtex.com/ "https://vtex.com/").

## Prerequisites

- Access to
  [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
- An `accountName` VTEX
  [(help)](https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC "https://help.vtex.com/tutorial/what-is-an-account -name--i0mIGLcg3QyEy8OCicEoC").

[**deco.cx**](http://deco.cx) is made especially for creating high performance
commerce experiences, and in this guide we will teach you how to give the first
steps to set up a _deco_ site that reads data from a VTEX account.

## Creating the website

To proceed, follow the steps in the guide [[Documentation deco/Guides: Get
started use Live]] and **select the Deco Commerce template in site creation.**

<img width="586" alt="Creating a website in deco.cx" src="https://user-images.githubusercontent.com/18706156/224514991-0e882420-00a8-4272-a2d0-71f73ac77d23.png">

Complete all the steps in the guide, finally **cloning the site repository newly
created locally.**

After that, you should have a _deco_ storefront created and you should be
running the site locally on your machine.

## Setting the account name

The **Deco Commerce** template already has an automatic connection with VTEX,
however a test account (`bravtexfashionstore`) is used which must be replaced
with the account you intend to develop the store with. that will be useful for
setting up shelves with actual products from the store being developed and also
ensure that the product page and Minicart work correctly.

To make this change, follow these steps:

1. Access your site's administrative panel at
   [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").

2. Go to **Library.**

3. In the **Global Sections** group, select the item **vtexconfig.global.tsx.**

4. In Account, change `bravtexfashionstore` by the desired account name.

5. Click on **Save Draft**

<img width="486" alt="Configuração da VTEX dentro do admin da deco.cx" src="https://user-images.githubusercontent.com/18706156/224514994-d5edd89b-705c-42e6-952e-3db3f9d5de2e.png">

If necessary, also change settings such as the sales channel (_sales channel)_
and the language of the store.

To test the changes, go back to the list of Sections in the Library and select
the **ProductShelf.** This Section can be configured to search for products in
VTEX with a given configuration. Click the pen icon (✏️) and edit the field
**Query** for some keyword related to the account catalog you configured (eg if
it's a furniture store, type _"table")._

<img width="1440" alt="Editor da deco.cx com uma página de ProductShelf" src="https://user-images.githubusercontent.com/18706156/224514990-0e41dba8-96b8-475b-9744-48706d2de623.png">

> If you have not yet configured an integration with VTEX, click on the arrows
> 🔁 or **"Add Integration"** and select the option **vtexProductList** and
> configure the integration by adding a value to the fields **Query** and
> **Count**

When clicking on a product, it is also expected that its detail page (PDP)
render correctly according to the selected product. Now you can use the Sections
and Functions already included in your project to display configured account
products.

## Didn't work?

If you made changes to the VTEX global configuration, changed `ProductShelf`'s
query to a term relevant to the configured account but still no product was
returned it is possible that the VTEX Intelligent Search (IS) **is not installed
on the account**. If you have VTEX Admin access, learn how to
[install VTEX IS](/docs/en/tutorials/installing-vtex-is).

However, there is no problem: **it is possible to connect to VTEX using the
traditional search APIs**. Possibly some features of
[Fashion starter](https://github.com/deco-sites/fashion) like _autocomplete_
search will not work, but the main features of the store will.

To use these APIs, just **change the Loaders** used for the `vtexLegacy...`
version. Follow the steps below to change this setting for the entire site:

1. In _deco.cx_ Admin, access the **Pages** section.
2. Select the **Home** Page that is **Published** (that is, it is the home used
   in production.)
3. Select Section `ProductShelf`.
4. In the `Products` prop, click on the arrow icon to change the Loader and
   select the `vtexLegacyProductList.ts`.
5. Click on the edit icon, next to Loader, and fill in the required `props`
   `query` and `count`.
6. Click Save.
7. Now, click on **Publish**.

<img width="1310" alt="image" src="https://user-images.githubusercontent.com/18706156/226076534-1e768d7d-830c-4f35-89ef-bc43445539f7.png">

_Selecting Loader `vtexProductList.ts` for Shelf_

Follow the same steps for the other published Pages of the Site to ensure that
the navigation flow will work correctly using legacy VTEX APIs. Here are the
Pages and Sections respectively that need to be changed.

- **Categories** `(/*)` and **Search Page** `(/s)`: `SearchControls` and
  `ProductGallery`.
- **Product Page** `(/:slug/p)`: `ProductDetails` and `ProductShelf`.

> Don't forget to Save **and Publish** the changes.

> For Pages with two Sections that need Loaders, it is possible to select
> **Loaders already configured** so as not to burden the loading of the Page.

## Configuring checkout

Currently, we use the
[same strategy VTEX FastStore uses](https://www.faststore.dev/how-to-guides/platform-integration/vtex/integrating-vtex-checkout "https://www.faststore.dev/how- to-guides/platform-integration/vtex/integrating-vtex-checkout")
to integrate with VTEX Checkout, so **a domain is required secondary that is
linked to the VTEX account.** By clicking the **Finish button Purchase** on the
Minicart on the _deco_ site, the user is redirected to
`https://{dominioConfigurado}/checkout?orderFormId=(…)` and manages to finish
the flow normally.

It is likely that the account you set up above already has a public domain that
is being used, and it is possible to use it in the construction stage of the
store. With that domain in hand, follow these steps:

1. Open the `Cart.tsx` file and replace the string
   [`https://bravtexfashionstore.vtexcommercestable.com.br`](https://bravtexfashionstore.vtexcommercestable.com.br)
   by the chosen domain of the store.

2. Open the `routes/api/[...catchall].tsx` file and replace the string
   [`bravtexfashionstore`](https://bravtexfashionstore.vtexcommercestable.com.br)
   by the **account name** used in the previous session

## Finding accountName and salesChannel

If you have access to a public VTEX store URL but need to find out
`accountName`, `salesChannel` and `defaultLocale` to configure the integration
in _deco.cx_, follow these steps:

**accountName**

1. Access the store URL.
2. Right-click and select **Inspect**.
3. With _Dev Tools_ open, type _Ctrl + F_ to open the search within the HTML.
4. Search for `vtexassets` or `vteximg` (depending on the store's current CMS).
5. The `accountName` will be in URLs in the format:
   `{accountName}.vtexassets.com` or `{accountName}.vteximg.com.br`.

![Example at www.mash.com.br store](https://user-images.githubusercontent.com/18706156/226031270-83a1888d-cde8-445e-84be-52d58a55e3c4.png)

**salesChannel** and **defaultLocale**

1. With _Dev Tools_ open, go to **Application** or **Storage**.
2. On the left side, select the **Cookies** item and select the store's URL.
3. Look for Cookie `vtex_segment` and **copy its value,** which starts with
   `ey`.
4. Go to the https://jwt.io website and paste the value.
5. Check the returned JSON. The `channel` field brings the `salesChannel` value
   and the `cultureInfo` field brings the `defaultLocale`.

> In most cases the `salesChannel` is 1

<img width="1281" alt="image" src="https://user-images.githubusercontent.com/18706156/226075931-6ffe568e-a6c9-4850-ad88-2a02f7a9f5f0.png">

_Example of a parsed vtex_segment._
