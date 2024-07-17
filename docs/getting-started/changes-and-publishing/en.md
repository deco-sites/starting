---
description: Learn how to restore previous versions of your website
since: 1.0.0
---

It's very important to have control and autonomy to manage your pages and blocks
and to have the ability to make and undo changes easily if needed. With that in
mind, _deco.cx_ allows you to create and manage **environments**.

## See Changes and Publish

Let's take a look at the changes we made in this environment. Click the dropdown
menu and then select the staging option. You will see this page, showing what
was changed compared to the site in production. In our case, we added a new page
with a few sections on it. This difference is displayed via JSON, which
represents the site's state in a structured way.

![Environment Changes](/docs/getting-started/changing-and-publishing/env-changes.png)

From here, you can publish our changes to production by clicking the "Publish
now" button or the "Publish" button next to the environment dropdown.

### Rebasing Your Changes

When publishing with multiple environments, you may need to merge your changes
with those made in other environments. For example, if you are editing your site
in your new environment, `maria`, while a teammate is editing in the `staging`
environment, and your teammate publishes their changes, you will need to rebase
your environment to incorporate the new changes now in production.

In this scenario, instead of seeing the "Publish now" button on the Releases
page, you will see a "Rebase" button, as shown below.

![Rebase environment](/docs/getting-started/changing-and-publishing/rebase.png)

Click this button to incorporate the production changes into your environment.
After rebasing, you can publish your changes by clicking the "Publish now"
button.
