---
description: |
   A Section represents a configurable UI element for a deco.cx site.
---

Sections are **UI components built with [Preact](https://preactjs.com/)** that
can receive props configured by users on _deco.cx_'s Admin. The Section local
implementations live on the `sections/` folder in the Site's code, but it's also
possible to [import Sections](/docs/en/tutorials/importing-other-sites).

Some examples of Section for an ecommerce store would be:

- **ProductShelf.tsx:** displays a product shelf with image, title and price.
- **Header.tsx:** displays the standard header of the store, containing logo,
  menu categories and links for cart and login.
- **Banner.tsx:** displays image, text and some _Call to action_ for campaign or
  specific department.

## Interactivity

Note that Sections run on the **server-side only**, so state and lifecycle such
as `useState`, `useEffect` and callbacks such as `onClick`, `onInput` will not
work. In order for those to work you'll need to use
[interative Islands](https://fresh.deno.dev/docs/concepts/islands)

In _deco.cx_'s Admin, it's possible to interact with Sections in two places:

- **Library:** Allows developers to configure the properties of Sections and
  automatically see the generated UI. (Works similar to
  [Storybook](https://storybook.js.org/))
- **Pages:** Allows Section to be added to Page on the site, also being
  configurable.

## Further reading

- [Tutorial: Coding a new Section](/docs/en/tutorials/creating-a-section)
- [Recipe: Customizable Sections](/docs/en/recipes/customizable-sections)
