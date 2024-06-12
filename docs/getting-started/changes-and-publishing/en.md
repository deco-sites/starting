---
description: Learn how to restore previous versions of your website
since: 1.0.0
---

It's very important to have control and autonomy to manage your pages and blocks and to have the ability to make and undo changes easily if needed. With that in mind, _deco.cx_ allows you to create and manage **environments**.

## See Changes and Publish

When you first create and save your site, you will be in the staging environment, which will hold the changes you make but will not affect the site in production unless you publish these changes.

![Staging environment](/docs/getting-started/changing-and-publishing/staging-env.png)

Let's take a look at the changes we made in this environment. Click the dropdown menu and then select the staging option. You will see this page, showing what was changed compared to the site in production. In our case, we added a new page with a few sections on it.

![Environment Changes](/docs/getting-started/changing-and-publishing/env-changes.png)

From here, we can publish our changes to production by clicking the "Publish now" button or the "Publish" button next to the environment dropdown.

## Create Environments

Besides the staging environment, we can create additional environments. This is useful for isolating different work from different users, so each one can create their own environment and work within it without affecting others or the live site.

To create a new environment, click the "View all" link in the environment dropdown or click the Releases tab.

![Access Releases Page](/docs/getting-started/changing-and-publishing/open-releases-tab.png)

This will open the Releases Page, where you can click the "New environment" button.

![New Environment button](/docs/getting-started/changing-and-publishing/new-env-btn.png)

Choose a name for your environment and select the Web option for the host. We will discuss the [localhost option](/docs/getting-started/developing/setup) later.

![New environment Form](/docs/getting-started/changing-and-publishing/creating-new-env.png)

That's it! Now you have your own environment and isolated workspace to make changes to your site, and when you're ready to ship, you can publish just like you did with the staging environment.

![New environment Created](/docs/getting-started/changing-and-publishing/env-created.png)