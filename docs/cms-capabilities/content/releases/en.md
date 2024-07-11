---
description: Editing environments and site evolutions
since: 2.0
---

On the releases screen, it is possible to evaluate the different editing environments (environment) of the site, as well as the different publications (releases) made. Each editing environment offers a unique space for multiple users to make changes and send those changes to production (to the official site address).

<img width="640" alt="Releases and environments screen" src="/docs/cms-capabilites/releases/releases1.png">

When making any changes to the site, the environment selector indicates that there are changes made in the current environment. The `Staging` is the default environment and starts without any changes. This is indicated in the top right corner, in the environment selector. The name staging, without an associated number and in green, indicates that the current environment does not differ from the production environment.

<img width="640" alt="Releases and environments screen" src="/docs/cms-capabilites/releases/releases2.png">

To publish an environment, you need to go to the `publish` option. There, you will be able to review the changes made, as well as publish them to the production address. Note that each environment can make changes and modifications independently. Before publishing a change, or whenever necessary, the user will perform a `Rebase`.

The `rebase` process translates into incorporating the current state of the production environment into the current environment. Keep in mind the following usage tips about environments:

- To make a set of changes, do it in a separate environment. This allows you to see changes that are specific to that environment.
- For example, create a **home** environment for changes to the home page, or **header** for changes to the global header, or a **blackfriday** environment for specific event changes.
- If you want to test changes, but they will be discarded, create an environment like **draft** or **test**.
- When starting to work in an environment, and also before publishing changes, perform a **rebase** and test the page. This ensures that the current environment will have what is in production plus the changes made.

Let's give an example of changes in a scenario with two environments: `staging` and `matheus`. The following actions were performed:

<img width="640" alt="Releases and environments screen" src="/docs/cms-capabilites/releases/releases3.png">

1. One or two users made a total of two changes in the `staging` environment.
2. One user made a change in the `matheus` environment. At this point, both environments differ from each other and differ from the production environment.
3. A publication is made from the staging environment. At this point, the current state of the `staging` and production environments are the same.
4. In the `matheus` environment, a user performs a rebase. This way, the `matheus` environment incorporates the changes that were made from staging, but keeps the existing change.
5. Next, a publication is made from the `matheus` environment. At this point, the `matheus` environment and production have the same state.
6. Finally, `staging` performs a rebase, ensuring that all environments are in the same state.

# Environment (development environments)

TODO

An environment represents a workspace where a set of changes or modifications can be made and published. Every environment is shareable: multiple users can make changes in the same environment, so that all changes can be published at the same time.

The `Staging` is the default environment and starts without any changes. This is indicated in the top right corner, in the environment selector. The name staging, without an associated number and in green, indicates that the current environment does not differ from the production environment.

<img width="640" alt="Sections library" src="/docs/cms-capabilites/releases/releases1.png">

# Releases (evolutions)

It is very important to have control and autonomy to manage your pages and blocks and have the ability to easily make and undo changes if necessary. With that in mind, _deco.cx_ allows you to access the history of all versions of pages and blocks. Therefore, when editing a page or block on your site, you can click on the `Revisions` tab and find out when and why a change was made by a team member.

## Step by step

1. Once you are logged into the Deco admin, you can access the site you want to work on.

2. Access the page or block you want to work on. For example (remember to replace `$sitename` with the name of your site):
    - If you want to go to the `Page Listing`, access `https://admin.deco.cx/sites/$sitename/pages`
    - If you want to go to the `Sections Listing`, access `https://admin.deco.cx/sites/$sitename/sections`
    - There are other blocks that can be configured and can be accessed through the block listing at `https://admin.deco.cx/sites/$sitename/library`

3. In the right sidebar of the screen, you can see the properties of the page and a navigation bar with tabs like `Form`, `JSON`, and `Revisions` (`↻`).

    ![Revisions](https://github.com/deco-cx/apps/assets/882438/86b9b319-e314-4928-ac84-db415358ed28)

4. By clicking on the `Revisions` tab (`↻`), you can access a list of versions for that page (or block) and who made the changes. You can also load the data from a version to use as the base for the current edit.

    > To restore an old version, simply select the version to be restored and click on `Publish`.

5. When you make changes to any page or block, you need to click on `Publish`, otherwise the changes made will be lost.

6. After that, a new revision will be published with the changes you just saved.

When publishing a version, it is active and already used in production! If you need to create a version just to test a page or component, or if you need gradual and constant work, you can save a draft. A draft is a variant that will never be used to serve any user request.

![Create draft](https://github.com/deco-cx/apps/assets/882438/c8667427-e2cb-4296-a976-8b9de3ab4ef4)

If you are satisfied with the work, the draft can replace or take on the role of the original variant (including the default variant).

![Promote draft](https://github.com/deco-cx/apps/assets/882438/5da5cd0a-7212-424a-abd1-c91e54938dca)

So, remember:

- the latest version is always live and represents the current state of that element or page in production
- a draft is just a variant that is never used to serve requests on the site (but can be promoted to do so, if the user wishes)

# Releases

`Releases` contains the history of all published versions of your site and allows you to quickly restore to previous versions if needed. To access the list of published versions, click on the `Releases` tab in the top bar of your site's homepage.

## Step by step

1. When you access the `Releases` tab in the top bar, you can see a list of releases on the screen, but only one of them is published.
2. Once you publish a revision of any page or block, a new release will be generated. Therefore, when accessing the `Releases` tab after a published modification, you can see the newly published version of the release listed along with the others.

    ![Releases](https://github.com/deco-cx/apps/assets/882438/719d710a-61a0-4aaf-b253-556b4195f3e0)

3. If you prefer to republish a version from a previously published release, different from the current release, you can click on `...` and then click on `Publish` to restore the chosen version.

