---
description: Create pages on deco.cx with no need to code
---

Now we will create a new page to your site. The process is very simple:

## 1. Access the Pages tab

**Pages** have a dedicated space in deco.cx's Admin and you can access it via
the side bar.

![Pages space](/docs/getting-started/creating-a-new-page/pages-space.png)

On this page, you can see all the pages published on the site, along with the
paths through which they are accessible to your users.

Here you can click on the "Create new page" button to create a page.

> Alternatively, you can click on the "Create page" button at the Site Home or
> type `/new page` on the command bar located on the top center of the Admin
> page.

## 2. Give the page a name and a path

Fill out the form with the following information:

- **Name:** meaningful name to understand what that page represents. Doesn't
  impact page's UI or metadata.
- **Path:** represents the URL which that page will be accesible to your users.
  It can be static (e.g: `/posts`) or dynamic (e.g: `/posts/:slug`,
  `/search/*`), following [URLPattern](http://mdn.io/urlpattern) schema.
- **Template** (optional): copy a structure from a page that already exists.

Here we will create a blank page.

![Creating a new page](/docs/getting-started/creating-a-new-page/new-page.png)

## 3. Edit the page content

Now you can edit and add new components available on your site and set up the
page just as you want it.

To add a new component to the page, click on the Add Sections button in the
editor and explore all the available options. Sections are UI components (small
parts of the site) that can receive props and can be edited through a form in
the Admin.

![Adding a section](/docs/getting-started/creating-a-new-page/add-section.png)

> If you want to develop/code a new Section, check our
> [Developing Guide](/docs/en/developing/setup).

Here, we will select the Hero section.

![Hero section](/docs/getting-started/creating-a-new-page/hero.png)

After the selection, we can see the form where we can edit its properties. These
properties are obtained from the TypeScript props of that section.

![Section Form](/docs/getting-started/creating-a-new-page/section-form.png)

> Note: The example you see above is of a reusable block, which is a global
> resource that can be used by other pages. This is why you cannot edit this
> section unless you detach it to change only on that page or edit it in a new
> space (which will affect all pages that use it).

Let's detach the section to edit its properties for that page. We will change
the Title in the Title property. As you make changes, the preview will update in
real-time to show you how the section will look with the new property values.

![Changing Section](/docs/getting-started/creating-a-new-page/changing-section.png)

Each component may have different properties that can be customized. These
properties are defined in the code of the section and can be accessed through
the props object.
