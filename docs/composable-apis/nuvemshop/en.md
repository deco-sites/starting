---
description: Learn how to integrate Deco with the Nuvemshop e-commerce platform.
---

This article guides you through creating and configuring a website on
[**deco.cx**](https://deco.cx) for an online store using data from the Nuvemshop
e-commerce platform [Nuvemshop](https://www.nuvemshop.com.br/).

# Table of Contents

1. Prerequisites
1. Creating the Website
1. Connecting to Nuvemshop

# Prerequisites

- A website on Deco. Create one for free at
  [Deco Admin](https://admin.deco.cx/).
- An account on Nuvemshop.

# Creating the Website

If you already have a website on deco.cx, proceed to the next section.
Otherwise, follow the steps in this
[guide](/docs/pt-br/getting-started/creating-a-site) to create one.

> Ensure that your site is created based on the **Store Nuvemshop** template
> below:

<img width="386" alt="Creating the Website on deco.cx" src="https://github.com/deco-cx/apps/assets/76620866/f94bbf9a-e109-43a7-87ad-5ffd94c1701b">

# Connecting to Nuvemshop

To connect to your Nuvemshop account:

1. Access the admin panel of your site at [Deco Admin](https://admin.deco.cx/).
2. In the top bar, select _apps_.
3. Select the **Nuvemshop** App. You will se something like:
   <img width="480" alt="image" src="https://github.com/deco-cx/apps/assets/76620866/5a52d192-cb60-4f84-9be6-9dcc00a1056e">

4. Change the account configuration from
   `https://lojadolucis.lojavirtualnuvem.com.br` to your Nuvemshop Store public
   URL.

5. After that, you will se a button to get your Store Id and Access Token. Click
   on this button to be redirected to install the deco.cx App on the Nuvemshop
   panel.
   <img width="180" alt="image" src="https://github.com/deco-cx/apps/assets/76620866/761ccfa2-074f-40c7-a40d-0e7852ea1341">

6. You will see a Pop-up like this:
   <img width="250" alt="image" src="https://github.com/deco-cx/apps/assets/76620866/2dd205f5-8f76-42f0-b596-dea45ebaad0f">

7. Click on `Accept and start using`.

8. Finally, you will be redirected to a screen with the Store Id and Access
   Token:
   <img width="250" alt="image" src="https://github.com/deco-cx/apps/assets/76620866/56b33ede-5d5e-4ef5-a307-421bb0f06c7b">

9. Enter these details into the fields on the deco.cx Panel.

🎉 Congratulations, you have set up the integration with Nuvemshop. To ensure
that the integration is working correctly, continue reading and create a
reusable collection block.

# Adding Your Products to Your Website

After the Nuvemshop setup is complete, try adding a shelf to your website.

1. Access the admin panel of your site at [Deco Admin](https://admin.deco.cx/).
2. In the top bar, select _sections_.
3. Select the `ProductShelf` block and click on the `+` button.
   <img width="180" alt="image" src="https://github.com/deco-cx/apps/assets/76620866/cbd54a38-3caf-431f-aeaf-b8eb2548626e">

4. In the `products` field, select the Nuvemshop integration.
   <img width="234" alt="image" src="https://github.com/deco-cx/apps/assets/76620866/70bf9588-adea-41ee-b87f-ba62b986d057">

5. Fill in the `term` field with a search, for example, "chá".

6. Fill in the `limit` attribute with the number of products to display, let's
   say 4
   <img width="349" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/ac48586a-bf40-4551-bcfe-686a4f48149c">

7. Now, in the top right corner, click on `Create` and give it a name, for
   example, `Coleção 1`.
   <img width="577" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/42afa077-2260-4521-bced-ae7f26792838">

8. In the top right corner, click on `Publish`.
9. Now you can use the `Coleção 1` block on any page of your site.
   <img width="1504" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/083981f5-b9ad-4d7c-af6f-f6060df1a71b">
