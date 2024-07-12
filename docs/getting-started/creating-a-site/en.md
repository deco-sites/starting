---
description: |
   Step-by-step guide on how to create a site on Deco.cx.
---

This documentation will guide you through the process of creating and setting up your first site using Deco.cx. A Deco site is the primary asset for Deco users, serving as the hub for creating, editing, and managing their own space on the web.

## 1. Select a Template

Go to the [Deco Admin](https://admin.deco.cx/spaces/new) and select a template to start. In this example, we will choose the landing template, which has the structure and components common to landing pages.

![Choosing a template](/docs/getting-started/creating-site/choose-template.png)

## 2. Explore the Template

After selecting a template, you can explore its components in a shared view-only mode. This allows you to explore the admin settings and features of the template without making any changes.

![Edit a site](/docs/getting-started/creating-site/site-editor.png)

## 3. Save Your Site

To officially create your site from the template, click on the "Use this template" button in the top right corner of the admin page to claim ownership of the site.

![Save site to your team](/docs/getting-started/creating-site/save-site-btn.png)

### 3.1. Log into the Platform

### 3.2. Name Your Site and Choose a Team

You will be prompted to choose a name for your site and a team to save it to:

![Choosing a name and a team to save site](/docs/getting-started/creating-site/save-site.png)

If you do not have a team yet, one will be created with a name of your choice:

![Choosing a name and a team that you'll create](/docs/getting-started/creating-site/save-site-and-team.png)

Deco will configure your site according to the template you chose.

## 4. Finish Site Setup

You will be redirected to the site home page:

![Site Home](/docs/getting-started/creating-site/site-home.png)

From here, you have two options:
1. Run your site locally using your local development environment.
   - This gives you the power to modify your site by changing its code as well as using the Deco Admin.
2. Create a new environment to edit your site through only the Deco Admin.
   - Here you can make changes to your site without needing access to the site code.

### Option 1: Run Your Site Locally

To run your site locally, you need to:

1. Install Deno on your machine. You can follow the instructions on the [Deno website](https://deno.land/).
2. Clone the site repository:
   ```bash
   git clone git@github.com:deco-sites/maria-landing.git
   ```
3. Enter the repository folder and start the server:
   ```bash
   cd maria-landing
   DECO_ENV_NAME=localhost deno task start
   ```

Now, you can modify the code and see the changes in the Admin and vice-versa.

### Option 2: Create a New Environment

Environments are isolated workspaces where you can make changes to your site without affecting the live site. To create a new environment:

1. Click on the "New" button in the environment dropdown in the Admin.
   ![New Environment button](/docs/getting-started/creating-site/new-env-btn.png)
2. Choose a name and a host for your environment. Since we are not going to run the site locally, select the Web option for the host.
   ![New Environment Form](/docs/getting-started/creating-site/new-env-form.png)

You now have your own environment and isolated workspace to make changes to your site without needing to run its code.

## (Optional) 5. Deploy Your Site

If you want to deploy your site to a live environment using the Deco Hosting, you can do so by clicking the "Add Deco Hosting" button on the site home page or the "Go live" button in the environment dropdown.

<img src="/docs/getting-started/creating-site/go-live-btn.png" alt="Deploy site button" width="340"/>

Your site will be accessible through a public URL like `https://deco-sites-maria-landing.deno.dev/`.

This deployment will include 5,000 page views (shared across all team sites). If you need more page views, you can [upgrade your plan](https://deco.cx/en/pricing) in the Deco Admin.

Additionally, since you have your site's source code, you can deploy it to any other hosting service that supports Deno.

## 6. Congratulations! You've Created Your First Deco Site

That's it! Now you can edit your site as you wish. Don't forget to follow the next tutorials to discover more features and capabilities of Deco.cx.