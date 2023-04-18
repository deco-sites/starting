---
description: A Page in deco.cx is a unit of content, consisting of configured UI Section and a URL for which that Page will be rendered
---

A **Page** is the fundamental building block of a _deco.cx_ Site, which will
commonly have many Pages. Each Page consists of **one or more configured
[Sections](/docs/en/concepts/section)**, which can be thought of as modular
components that make up the Page's content. A Page will also be **associated
with a URL path** that, when visited, should render such Page. This path can be
a static one like `/about` or something dynamic like `/products/:slug`, that
will match multiple URLs with a dynmic parameter following the
[URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API).

<img width="1512" alt="image" src="https://user-images.githubusercontent.com/18706156/225141097-0538f723-6e5f-4a85-ba41-03fa145c87bc.png">

<!-- TODO: Atualizar depois na nova engine -->

Pages can be either be **Published** or **Draft**, which will impact the
visibility of its content.

- **Published**: The Page is publicly visible and will be rendered if some user
  access it's path on the Site.
- **Draft**: The Page can only be accessed with a specific URL param `?pageId`.

**All changes in Published pages automatically create a new Draft Page**. This
makes sure that no erroneous changes will impact the production traffic of a
Site.

After that, it's possible to publish a Draft Page clicking on the **Publish**
button in the Admin.
