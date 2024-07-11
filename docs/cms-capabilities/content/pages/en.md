---
description: Learn how to create pages on deco.cx without needing code
since: 2.0
---

# Pages

You should be familiar with the basic concepts of [Blocks](/docs/en/concepts/blocks) and [Sections](/docs/en/concepts/sections) and we will understand how to use them to create pages on a deco.cx website.

The listing of pages on a website can be accessed in the sidebar under `Content > Pages`.

<img width="640" alt="Page listing" src="/docs/cms-capabilities/pages/pages1.png">

A **Page** is a fundamental building block in creating a deco.cx website, which typically consists of multiple pages. Each page consists of:

- **one or more [Sections](/docs/en/concepts/section)** configured, which can be considered as modular components that make up the content of the page.
- **a name:** a meaningful name to understand what this page represents. It does not affect the user interface or page metadata, only displayed in the page listing in the admin.
- **a path:** represents the URL that page will be accessible to your users. It can be static (e.g., `/posts`) or dynamic (e.g., `/posts/:slug`, `/search/*`), following the [URLPattern](http://mdn.io/urlpattern) scheme.

## Creating a new page

Click on **Pages** in the top menu and you will be able to see all the published pages on the website, along with the path they are accessible to your users.

You can duplicate or delete pages using the extra actions in the page listing (3-dot icon):

<img width="640" alt="Extra actions" src="/docs/cms-capabilities/pages/pages2.png">

To create a new page on your website, **click on the Create button in the top right corner of the page list**. A form will open with the fields: **name**, **path**, and **template**. Template allows you to create a page based on the content of another page (optional field).

Once created, you will be redirected to the page editor. Now you can edit and add new Sections available on your website and configure the page the way you want.

## Editing a page

To add a new Section to the page, click on the **Add Sections** button in the editor and check all the available options.

<img width="320" alt="Add a new section" src="/docs/cms-capabilities/pages/pages3.png">

When adding a new section, you can select sections that are either global or local (obtained from the library). There is a difference between them:
- A global section has already been configured and can be used by one or more pages. Changing the properties of a global section will reflect that change in all the pages that use it.
- A local section will be configured within the page and only exists with that configuration on that page (not shared among other pages).

<img width="640" alt="Section library" src="/docs/cms-capabilities/pages/pages4.png">

When selecting a section, you can define its properties. Some of the properties may require selecting an image, text, item selection, or even a **loader**. A **loader** is an entity that loads data and can receive configurations (by selecting a loader from the library) or already be configured (saved loaders).

<img width="640" alt="Section library" src="/docs/cms-capabilities/pages/pages4-1.png">

Additionally, you can vary a section by selecting the flag icon (🏳️).

## Varying a Section

A variant allows the section to have a different configuration when a certain condition (**matcher**) is satisfied. This condition can be something previously configured (from a saved **matcher**) or you can configure it based on an element from the matcher library.

<img width="320" alt="Matcher library" src="/docs/cms-capabilities/pages/pages4-2.png">

It is quite common to create variants especially for limited-time campaigns or events. For this, a strategy is to configure a date and time matcher.

<img width="320" alt="Condition configuration" src="/docs/cms-capabilities/pages/pages4-3.png">

The "default" variant represents the page to be displayed when no matcher is satisfied.

> **Important**: Matchers are tested in the order they are placed, from the first (top) to the last (default). When a matcher is satisfied, it is immediately executed and no other subsequent conditions are tested, regardless of any other matcher that may satisfy the configured condition.

## Publishing changes

The page will be updated with every edit made. These changes are specific to the environment you are working on (initially, staging). A change in the environment is not reflected in the production environment until that change is published.

<img width="320" alt="Environment and publishing" src="/docs/cms-capabilities/pages/pages5.png">

## Varying a page (segmenting pages)

A variant allows you to create a different view of a page based on specific conditions. A variant can be added by clicking on the flag symbol (🏳️).

<img width="320" alt="Creating a variant" src="/docs/cms-capabilities/pages/pages6.png">

Add a "**Matcher**" that represents a rule to be tested to evaluate which sections will be served. In our example, we selected a local matcher to select a device type and specifically the desktop.

<img width="320" alt="Creating a variant" src="/docs/cms-capabilities/pages/pages7.png">

The variant is created with all the sections copied from the original page. Each variant can have sections edited independently. Click on the created variant and modify the sections as desired. The "default" variant represents the page to be displayed when no matcher is satisfied.

> **Important**: Matchers are tested in the order they are placed, from the first (top) to the last (default). When a matcher is satisfied, it is immediately executed and no other subsequent conditions are tested, regardless of any other matcher that may satisfy the configured condition.
