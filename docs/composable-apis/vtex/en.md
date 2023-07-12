---
description: Learn how to integrate deco with VTEX ecommerce platform.
---

This article guides you on creating and configuring a website at  [**deco.cx**](http://deco.cx) for a _storefront_ using data from [VTEX](https://vtex.com/ "https://vtex.com/") ecommerce platform.

> TL;DR: 

> **Video**: To watch the content of this article, click
[here](https://www.loom.com/share/9fee00a691dd44cfb35d1e2680719e5e)


## Prerequisites

- A deco webiste. Create one for free at
  [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
- A VTEX account [(help)](https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC).


## Creating the website

In case you already have a website at deco.cx, advance to the next section. Follow the steps in this [guide](/docs/en/getting-started/creating-a-site) otherwise. 

> Make sure your site was created based on the **Deco Commerce** template below

<img width="586" alt="Creating a website in deco.cx" src="https://user-images.githubusercontent.com/18706156/224514991-0e882420-00a8-4272-a2d0-71f73ac77d23.png">

## Setting up the `Public store URL`
*Deco commerce* template currently proxies VTEX's own *checkout* and *my-account* services. This means that your final user will NOT be redirected to any other domain when checking out. For instance, let's say, before any migration to deco, your store is hosted on `www.mystore.com` and the checkout url is `https://www.mystore.com/checkout`. After migrating to deco, your store will continue being served on `www.mystore.com` and your checkout url will still be `https://www.mystore.com/checkout`. 

Currently, VTEX does not expose its UI services through a public URL on the internet. For this reason, we need a secondary URL for enabling proxying *checkout* and *my-account* services. Following our example above, create a new subdomain, let's say `proxy.mystore.com` and point it to VTEX following this [guide](https://help.vtex.com/tutorial/configuring-domains-in-account-management--tutorials_2450). After that, the `proxy.mystore.com` will be the `Public store URL` required on the next step

## Connecting to VTEX
To connect to your VTEX account:

1. Access your site's administrative panel at [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. On the topbar, select *blocks*
3. Choose the *Accounts* tab
4. Select the **vtex.ts** block and click on the configVTEX block. You should see something like: 
TODO: add image

5. Change the account configuration from `bravtexfashionstore` to your VTEX [account name](https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC)
6. Set the `Public store URL`.
7. Click on `Save` and then `Publish`. 

🎉 Congratulations, you have setup the VTEX integration. To test the integration is working correctly, try creating a [#collection shelf]

The final architecture of the setup is:

TODO: add architecture image

## Adding your collections to your website.
After the VTEX setup is complete, try adding a shelf to your webiste. 

1. Access your site's administrative panel at [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. On the topbar, select *blocks*
3. Select the block `/Products/ProductShelf.tsx` and click on the `+` button 
4. On the `products` field, select any VTEX integration (legacy or Intelligent Search).
5. Fill the `Collection ID` with a valid collection, e.g. 139
6. Fill the `count` attribute with the number of products to display, let's say 6.
7. Now, on the top right corner, click on `Create` and name it, e.g. `Collection 139`
8. On the top right corner click on `Publish`. 
9. You can now drag&drop the block `Collection 139` in any page.

### Troubleshooting
Common issues when connecting to VTEX arises from:

1. VTEX Intelligent Search (IS) **is not installed on the account**
If you are not sure IS is installed in your account, please use the traditional (VTEX Catalog) loaders. Beware some features of [Fashion starter](https://github.com/deco-sites/fashion) like _autocomplete_ depend on Intelligent Search. 

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
