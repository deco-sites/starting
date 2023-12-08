---
description: Learn how to integrate Deco with the Shopify e-commerce platform.
---

This article guides you through creating and configuring a website on
[**deco.cx**](http://deco.cx) for an online store using data from the Shopify
e-commerce platform [Shopify](https://www.shopify.com/).

# Table of Contents

1. Prerequisites
1. Creating the Website
1. Connecting to Shopify

# Prerequisites

- A website on Deco. Create one for free at
  [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
- An account on Shopify.

# Creating the Website

If you already have a website on deco.cx, proceed to the next section.
Otherwise, follow the steps in this
[guide](/docs/pt-br/getting-started/creating-a-site) to create one.

> Ensure that your site is created based on the **Store Shopify** template
> below:

<img width="386" alt="Creating the Website on deco.cx" src="https://github.com/deco-cx/apps/assets/76620866/0fadbdad-a892-4a9c-bd1a-a0ed9d09bfee">

# Connecting to Shopify

To connect to your Shopify account:

1. Access the admin panel of your site at
   [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. In the top bar, select _blocks_.
3. Choose the _Apps_ tab.
4. Select the **shopify.ts** App and click on the shopify block. You will see
   something like:
   <img width="480" alt="image" src="https://github.com/deco-sites/starting/assets/76620866/a4127f6a-9d8f-4d27-b639-3a30db761e44">

5. Change the account configuration from `gimenesdevstore` to your Shopify
   account name. The account name is necessarily what's in your public URL, for
   example: `gimenesdevstore.myshopify.com`.
6. Set the Storefront Access Token with all permissions
   [(help)](https://help.withkoji.com/en/articles/6619709-how-to-find-your-shopify-storefront-api-access-token).
7. Set the Admin Access Token only with the permissions you want (the process is
   the same as the Storefront token).
8. Click on `Save` and then `Publish`.

🎉 Congratulations, you have set up the integration with Shopify. To ensure the
integration is working correctly, continue reading and create a reusable
collection block.

# Adding Your Collections to Your Website

After the Shopify setup is complete, try adding a shelf to your website.

1. Access the admin panel of your site at
   [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. In the top bar, select _blocks_ and then _sections_.
3. Select the `/Products/ProductShelf.tsx` block and click on the `+` button.
   <img width="480" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/a2bfe995-daf1-4ef7-8957-2bc55712ec87">

4. In the `products` field, select the Shopify integration.
   <img width="334" alt="image" src="https://github.com/deco-sites/starting/assets/76620866/9dac417e-fbf7-4fd2-b474-6dd463c5887a">

5. Fill in the `query` field with a search term, for example, "t-shirt.".
6. Fill in the `count` attribute with the number of products to display, let's
   say 4.
   <img width="349" alt="image" src="https://github.com/deco-sites/starting/assets/76620866/648b7b2a-94ca-49c0-bf72-ce7afa683282">

7. Now, in the top right corner, click on `Create` and give it a name, for
   example, `Collection 139`.
   <img width="577" alt="image" src="https://github.com/deco-sites/starting/assets/1753396/97720584-3206-4457-8972-a719323962c4">

8. In the top right corner, click on `Publish`.
9. Now you can drag and drop the `Collection 139` block onto any page.
   <img width="1504" alt="image" src="https://github.com/deco-sites/starting/assets/76620866/114aa43e-f727-45db-99e2-b7f4b7d6c7a1">
