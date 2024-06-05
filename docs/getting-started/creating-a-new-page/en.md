---
description: Create pages on deco.cx with no need to code
---

You should be familiar with the core concepts of
[Blocks](/docs/en/concepts/block) and [Section](/docs/en/concepts/section), and
now let's understand how to tie those together and create pages in a deco.cx
site.

**Pages** have a dedicated section in deco.cx's Admin and you can access it via
the top menu.

![Creating pages](/docs/creating-new-page/pages-menu.png)

In this page, you see all the pages published on the site, alongside the path
which they're accessible to your users.

## Create a new page

To create a new page on your site, **click on the Create button in the top right
of the page list**. It'll open a form with the following fields:

- **Name:** meaningful name to understand what that page represents. Doesn't
  impact page's UI or metadata.
- **Path:** represents the URL which that page will be accesible for your users.
  It can be static (e.g: `/posts`) or dynamic (e.g: `/posts/:slug`,
  `/search/*`), following [URLPattern](http://mdn.io/urlpattern) schema.
- **Template** (optional): copy sections from a page that already exists.

You'll be redirected to the page editor after the page is created. Now it's
possible to edit and add new Sections available in your site and setup the page
just as you want it.

To add a new Section to the page, click on **Add Sections** button in the editor
and check all the available options.

![Creating pages](/docs/creating-new-page/add-section.png)

> If you want to develop/code a new Section, check our
> [Developing Guide](/docs/en/developing/setup).

## Publishing

After you're finished, click on **Save** to create a new revision and then
**Publish** to publish the newly created page.

If the page has been published before, the Publish modal will offer you the
option to A/B test the new revision.

## Variants

Besides A/B testing, which randomizes which users see the new content, it's
possible to segment and personalize content in deco.cx using other factors like
user's location, device and more. [Read more about Variants here](/docs/en/getting-started/variants).
