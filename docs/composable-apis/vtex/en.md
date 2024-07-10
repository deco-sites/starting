---
description: Learn how to integrate deco with VTEX ecommerce platform.
---

This article guides you on creating and configuring a website at
[**deco.cx**](https://deco.cx) for a _storefront_ using data from
[VTEX](https://vtex.com/ "https://vtex.com/") ecommerce platform.

> TL;DR: To connect to VTEX you need to change `vtex` app configuration at
> `https://deco.cx/admin/sites/{site}/library?type=apps`

> **Video**:
> [Watch the content of this article here](https://www.loom.com/share/ff6dc0fdaa064ac5948133ed5b0b8463)

# Summary

1. Prerequisites
1. Creating the website
1. Setting up the `Public store URL`
1. Connecting to VTEX
1. Adding your collections to your website.
1. Troubleshooting

# Prerequisites

- A deco webiste. Create one for free at [Deco Admin](https://admin.deco.cx/).
- A VTEX account
  [(help)](https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC).

# Creating the website

In case you already have a website at deco.cx, advance to the next section.
Follow the steps in this [guide](/docs/en/getting-started/creating-a-site)
otherwise.

> Make sure your site was created based on the **Storefront-Vtex** template
> below

<img width="586" alt="Creating a website in deco.cx" src="https://github.com/deco-sites/storefront/assets/76822093/c39e1173-dbb9-4db5-adc3-041aaa8db94b">

# Setting up the `Public store URL`

_Deco commerce_ template currently proxies VTEX's own _checkout_ and
_my-account_ services. This means that your final user will NOT be redirected to
any other domain when checking out. For instance, let's say, before any
migration to deco, your store is hosted on `www.mystore.com` and the checkout
url is `https://www.mystore.com/checkout`. After migrating to deco, your store
will continue being served on `www.mystore.com` and your checkout url will still
be `https://www.mystore.com/checkout`.

Currently, VTEX does not expose its UI services through a public URL on the
internet. For this reason, we need a secondary URL for enabling proxying
_checkout_ and _my-account_ services. Following our example above, create a new
subdomain, let's say `proxy.mystore.com` and point it to VTEX following this
[guide](https://help.vtex.com/tutorial/configuring-domains-in-account-management--tutorials_2450).
After that, the `proxy.mystore.com` will be the `Public store URL` required on
the next step

The final architecture of the setup is:
<img width="1066" alt="image" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/bb7442a6-f0b0-4267-94a0-e104449b3213">

**Important:** When creating a secondary URL, you should add a
`<meta name="robots" content="noindex">` in the `<head>` after Go Live to avoid
unwanted indexing.

# Connecting to VTEX

To connect to your VTEX account:

1. Access your site's administrative panel at
   [Deco Admin](https://admin.deco.cx/).
2. On the topbar, select _blocks_
3. Choose the _Apps_ tab
4. Select the **vtex** app. You should see something like:
   <img width="580" alt="image" src="https://github.com/deco-sites/starting/assets/76620866/3a9fe86d-089a-41a6-84b5-d371a90a3a11">

5. Change the account configuration from `bravtexfashionstore` to your VTEX
   [account name](https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC)
6. Set the `Public store URL`.
7. Click on `Save` and then `Publish`.

🎉 Congratulations, you have setup the VTEX integration. To ensure the
integration is working properly, keep reading and create a reuseable collection
block.

# Adding your collections to your website.

After the VTEX setup is complete, try adding a shelf to your webiste.

1. Access your site's administrative panel at
   [Deco Admin](https://admin.deco.cx/).
2. On the topbar, select _blocks_
3. Select the block `/Products/ProductShelf.tsx` and click on the `+` button
   <img width="480" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/a2bfe995-daf1-4ef7-8957-2bc55712ec87">

4. On the `products` field, select any VTEX integration (legacy or Intelligent
   Search).
   <img width="434" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/9e084af6-db18-472e-92ac-7255bc4d9705">

5. Fill the `Collection ID` with a valid collection, e.g. 139
6. Fill the `count` attribute with the number of products to display, let's
   say 6.
   <img width="349" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/df0794a8-fbcc-4c74-915e-ba13e179e9a7">

7. Now, on the top right corner, click on `Create` and name it, e.g.
   `Collection 139`
   <img width="577" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/97720584-3206-4457-8972-a719323962c4">

8. On the top right corner click on `Publish`.
9. You can now drag&drop the block `Collection 139` in any page.
   <img width="1504" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/bfc74614-b44b-45a9-b1e6-2465e0149ac4">

# Troubleshooting

Common issues when connecting to VTEX arises from:

1. VTEX Intelligent Search (IS) **is not installed on the account** If you are
   not sure IS is installed in your account, please use the traditional (VTEX
   Catalog) loaders. Beware some features of
   [Fashion starter](https://github.com/deco-sites/fashion) like _autocomplete_
   depend on Intelligent Search.
2. Wrong salesChannel/defaultLocale setup. Setting up the wrong
   salesChannel/defaultLocale may lead to the wrong products/prices being
   displayed. To find the correct values:
   1. With _Dev Tools_ open, go to **Application** or **Storage**.
   1. On the left side, select the **Cookies** item and select the store's URL.
   1. Look for Cookie `vtex_segment` and **copy its value,**.
   1. Go to the [JWT website](https://jwt.io) and paste the value.
   1. Check the returned JSON. The `channel` field brings the `salesChannel`
      value and the `cultureInfo` field brings the `defaultLocale`.

   > In most cases the `salesChannel` is 1

   <img width="1281" alt="image" src="https://user-images.githubusercontent.com/18706156/226075931-6ffe568e-a6c9-4850-ad88-2a02f7a9f5f0.png">
3. Wrong accountName setup. To figure out the right accountName:
   1. Access your current store URL, e.g.: `https://www.mystore.com.br`.
   1. Right-click and select **Inspect**.
   1. With _Dev Tools_ open, type _Ctrl + F_ to open the search within the HTML.
   1. Search for `vtexassets` or `vteximg` (depending on the store's current
      CMS).
   1. The `accountName` will be in URLs in the format:
      `{accountName}.vtexassets.com` or `{accountName}.vteximg.com.br`.

   ![Example at www.mash.com.br store](https://user-images.githubusercontent.com/18706156/226031270-83a1888d-cde8-445e-84be-52d58a55e3c4.png)
