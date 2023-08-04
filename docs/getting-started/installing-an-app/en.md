---
description: Installing Apps
since: 1.23.3
---

# Prerequisites

- You must have a Deco site with the desired App already available in the Apps directory by following the [making an app installable tutorial](/docs/en/developing/making-an-app-installable).

## Step 1: Log in to Deco Admin

First, log in to your Deco Admin account by navigating to [https://deco.cx/admin](https://deco.cx/admin).

## Step 2: Choose Your Target Site

Once you are logged in, choose the target site where you want to install the App. After selecting the site, you will be directed to the site home.

## Step 3: Open the Middleware URL

In the site home, open the following URL in your browser:

```
https://deco.cx/admin/sites/$SITE/blocks/.%2Froutes%2F_middleware.ts
```

Replace `$SITE` in the URL with the actual name of your site.

## Step 4: Access "Manifest" and Choose "Installed Apps"

After opening the URL, you will be directed to a page that shows your site's middleware. Access the "Manifest" section, and if "Installed Apps" is not chosen yet, select it from the options.
<img width="1512" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/db1c43c6-8bac-4413-94ed-320974b6c24f">

## Step 5: Add the App

Click on the "Add Apps" button to install the desired App on your site. A list of available Apps will be displayed.

## Step 6: Choose Your Desired App and Configure the State

Choose the App you want to install from the list. You will be prompted to fulfill the required state of the App. This may include providing certain configurations or parameters to customize the App's behavior within your site.

<img width="1512" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/ef02574e-5670-4c20-87d6-c0f0efd5122c">

## Step 7: Save and Publish

After configuring the state of the App, click on "Save and Publish" to apply the changes and install the App on your site.

## Step 8: Explore the Installed Blocks

Once the App is installed, you will be able to see all the blocks and components that the App includes. These blocks can be used to enhance your Deco site with the additional functionalities provided by the installed App.

Congratulations! You have successfully installed an App using Deco Admin. Enjoy exploring the new capabilities and features that the installed App brings to your Deco site. If needed, you can further customize the installed App or explore other available Apps to further expand the functionalities of your Deco projects. Happy managing and enhancing your Deco sites! 🚀
