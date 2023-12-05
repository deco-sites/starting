---
description: Learn how to restore previous versions of your website
since: 1.0.0
---

# Revisions

It's very important to have control and autonomy to manage your pages and blocks and have the ability to make and undo changes easily if needed. With that in mind, _deco.cx_ allows you to access the history of all versions of pages and blocks. This way, when editing a page or block on your site, you can click on the `Revisions` tab to find out when and by which team member a change was made.

## Step by Step

1. Once you are logged into the Deco admin, you can access the website you want to work on.

2. Access the page or block you want to work on. For instance (remember to replace `$sitename` with your site's name):
   - If you want to access the `Page Listing`, go to <https://admin.deco.cx/sites/$sitename/pages>
   - If you want to access the `Section Listing`, go to <https://admin.deco.cx/sites/$sitename/sections>
   - There are other blocks that can be configured and accessed through the block listing at <https://admin.deco.cx/sites/$sitename/library>

3. On the right sidebar of the screen, you can see the page properties and a navigation bar with tabs such as `Form`, `JSON`, and `Revisions` (`↻`).

   ![Revisions](https://github.com/deco-cx/apps/assets/882438/86b9b319-e314-4928-ac84-db415358ed28)

4. By clicking on the `Revisions` tab (`↻`), you can access a list of versions for that page (or block) and who was responsible for making them. You can also load the data from a version to use as a basis for the current edit.

   > To restore an old version, simply select the version to be restored and click `Publish`.

5. When you make changes to any page or block, you need to click `Publish`, otherwise the changes made will be lost.

6. After that, a new revision will be published with the changes you just saved.

When you publish a version, it is live! If you need to create a version just to test a page or component, or if it needs gradual and constant work, you can save a draft. A draft is a variant that will never be used to fulfill any user request.

![Create Draft](https://github.com/deco-cx/apps/assets/882438/c8667427-e2cb-4296-a976-8b9de3ab4ef4)

If you are satisfied with the work, the draft can replace or take on the role of the original variant (including the default variant).

![Promote Draft](https://github.com/deco-cx/apps/assets/882438/5da5cd0a-7212-424a-abd1-c91e54938dca)

So, remember:

- the latest version is always live and represents the current state of that element or page in production
- a draft is only a variant that is never used to fulfill requests on the site (but can be promoted to do so if the user desires)

# Releases

`Releases` holds the history of all published versions of your site and allows you to quickly restore to previous versions if needed. To access the list of published versions, click on the `Releases` tab on the top bar of your site's homepage.

## Step by Step

1. When you access the `Releases` tab on the top bar, you can see a list of releases on the screen, but only one of them is published.
2. Once you publish a revision of any page or block, a new release will be generated. Therefore, when you access the `Releases` tab after some published modification, you will be able to see the new published version of the release listed along with the others.

   ![Releases](https://github.com/deco-cx/apps/assets/882438/719d710a-61a0-4aaf-b253-556b4195f3e0)

3. If you prefer to republish a version of the previously published release, different from the current release, you can click on `...` and then click `Publish` to restore the chosen version.