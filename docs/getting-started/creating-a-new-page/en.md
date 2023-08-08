---
description: Create pages on deco.cx with no need to code
since: 1.0.0
---

You should be familiar with the core concepts of [Blocks](/docs/pt/concepts/blocks) and [Section](/docs/pt/concepts/sections), and now let's understand how to tie those together and create pages in a deco.cx site.

**Pages** have a dedicated section in deco.cx's Admin and you can access it via the top menu.

<img width="1001" alt="image" src="https://github.com/deco-cx/deco/assets/18706156/e93a3277-c9a4-4abf-b9d7-dd2c716d3d54">

In this page, you see all the pages published on the site, alongside the path which they're accessible to your users.

## Create a new page

To create a new page on your site, **click on the Create button in the top right of the page list**. It'll open a form with the following fields:

- **Name:** meaningful name to understand what that page represents. Doesn't impact page's UI or metadata.
- **Path:** represents the URL which that page will be accesible for your users. It can be static (e.g: `/posts`) or dynamic (e.g: `/posts/:slug`, `/search/*`), following [URLPattern](http://mdn.io/urlpattern) schema.
- **Template** (optional): copy sections from a page that already exists. 

You'll be redirected to the page editor after the page is created. Now it's possible to edit and add new Sections available in your site and setup the page just as you want it.

To add a new Section to the page, click on **Add Page Section** button in the editor and check all the available options.

> If you want to develop/code a new Section, check our [Developing Guide](/docs/en/developing/setup).

## Publishing

After you're finished, click on **Save** to create a new revision and then **Publish** to publish the newly created page.

If the page has been published before, the Publish modal will offer you the option to A/B test the new revision.

## Variants

Beside A/B testing, which randomizes which users see the new content, it's possible to segment and personalize content in deco.cx using other factors like user's location, device and mode. Read more about Variants [here](/docs/en/getting-started/variants).