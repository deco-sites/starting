---
description: Making Sections editable
since: 1.0.0
---

# Summary

1. Introduction to Sections (dev)
2. First modification and environment selection
3. Step-by-step: Modifying and testing a `section`

# Introduction to Sections (dev)

A Section represents a configurable UI element for a deco Site. Now, it is
necessary to understand what this represents for a developer.

A Section is a `tsx` code inside the `sections` folder. Also, a Section:

- is a [Preact](https://preactjs.com/) component
- has serializable properties
- exports its properties type

A Preact component is a function exported by default (`export default`) that
receives properties, returns JSX, and is invoked on each rendering of the
defined element. As an example, open the `sections/Hero.tsx` file from the
ecommerce template in VSCode. This file is also accessible
[on the deco GitHub](https://github.com/deco-sites/start/blob/main/sections/Hero.tsx).

The code of this element is written in HTML with JS, as shown in the example
below.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  title?: string;
  /** @format textarea */
  headline?: string;
  links?: Array<Link>;
}

export default function Hero({
  title = "deco.cx",
  logo = "/logo.svg",
  headline =
    "The digital experience platform that combines performance and personalization for the ultimate sales results.",
  links = [
    { title: "Official website", "href": "https://deco.cx/" },
    { title: "Linkedin", "href": "https://www.linkedin.com/company/deco-cx/" },
    { title: "Discord", "href": "https://deco.cx/discord" },
  ],
}: Props) {
  return (
    <header class="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-xl md:text-base">
      <div class="mb-10 md:mb-20">
        <img
          class="object-cover w-20"
          src={logo}
          alt={title}
        />
      </div>
      <div class="font-bold text-3xl lg:text-6xl leading-tight lg:leading-none xl:w-5/6">
        {headline}
      </div>
      {!!links?.length && (
        <ul class="mt-8 flex flex-col md:flex-row gap-2 md:gap-4">
          {links.map(({ href, title }) => (
            <li>
              <a target="_blank" href={href} aria-label={title} class="link">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
```

Observe the exported types in this file. These same types are accessible in the
Admin when creating an Hero block. In the Admin, select the **Sections**, the
`Hero` block, and choose the option to create a block to view the same
properties in an editing form.

![Create Block](https://github.com/deco-cx/apps/assets/882438/c7eee318-c6df-4ade-abd8-66390758aca7)

Block properties are identical to those found in the Admin form.

```tsx
/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  title?: string;
  /** @format textarea */
  headline?: string;
  links?: Array<Link>;
}
```

_Section and its properties types_

![Editing properties of the Hero Section](https://github.com/deco-cx/apps/assets/882438/b57f6fae-da58-4cc4-a5cc-aa99985cd442)

A deco project uses the type of a component's properties to automatically
generate the block editing form in the Admin. In the following figure, you can
see how the Admin knows the information to be placed in the form. To do this,
the Admin contacts the live Site to retrieve the property data of the Sections
in that project. On the other hand, the code on a Site comes from GitHub, the
same one the developer uses.

![Structure of Site data access](https://github.com/deco-sites/starting/assets/882438/dcc4d63a-bbb2-4f81-909a-054eef048a53)

# First modification and environment selection

Run the project locally (`deno task start`) and modify the code of the `Hero` to
receive a new optional property, the `highlight` of a link. To do this, modify
the `Link` type and the JSX code of the component, remembering to save the file
after the modification.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
  highlight?: boolean;
}

export interface Props {
  logo?: ImageWidget;
  title?: string;
  /** @format textarea */
  headline?: string;
  links?: Array<Link>;
}

export default function Hero({
  title = "deco.cx",
  logo = "/logo.svg",
  headline =
    "The digital experience platform that combines performance and personalization for the ultimate sales results.",
  links = [
    { title: "Official website", "href": "https://deco.cx/" },
    { title: "Linkedin", "href": "https://www.linkedin.com/company/deco-cx/" },
    { title: "Discord", "href": "https://deco.cx/discord" },
  ],
}: Props) {
  return (
    <header class="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-xl md:text-base">
      <div class="mb-10 md:mb-20">
        <img
          class="object-cover w-20"
          src={logo}
          alt={title}
        />
      </div>
      <div class="font-bold text-2xl lg:text-6xl leading-tight lg:leading-none xl:w-5/6">
        {headline}
      </div>
      {!!links?.length && (
        <ul class="mt-8 flex flex-col md:flex-row gap-2 md:gap-4">
            {links.map(({ href, title, highlight }) => (
              <a href={href} aria-label={title}>
                <li class={`${highlight ? "font-black" : ""}`}>{title}</li>
              </a>
            ))}
        </ul>
      )}
    </header>
  );
}
```

_Altering the Link type and JSX with the new `highlight` property_

When making this modification locally, it does not affect or impact the live
Site. However, with the project running locally (`deno task start`), it is
possible to see this modification in the Admin itself. For this, it is important
to go to the environment selector and choose `localhost:8000` as the reference.

![Changing the environment](https://github.com/deco-cx/apps/assets/882438/62efa5c1-f960-4d21-8ec8-2c8f729c1093)

By pointing to `localhost`, the admin now queries the locally running version to
detect the available properties and `sections`.

To allow others to see the modification, it is necessary to commit and push the
changes. The `main` branch contains the code that is displayed on the default
domain of the Site, but it is possible to view other branches of the repository
by selecting the desired branch in the environment selector.

# Step-by-step: Modifying and testing a `section`

In summary, to test modifications on the Section `Hero.tsx`:

1. Run `deno task start` in the Terminal. _(You don't need to run it again if
   it's already running)_

2. Make local modifications to the file `sections/Hero.tsx`.

3. Access the Admin of _deco.cx_ at https://deco.cx/admin, select your Site, and
   go to the `Sections`.

4. Make sure that `localhost:8000` is selected in the Environment Selector in
   the upper-right corner of the page.

5. Look for `Hero` among the blocks.

6. **Ready to go!** Now you can configure `props` for that Section and see how
   it is being rendered. The preview will automatically update if you modify the
   code of the Section locally.

Remember to save your file. If there are any typing or transformation errors,
they will be signaled in the command line or in VSCode. When you are comfortable
with the modifications, submit the modified file to the GitHub repository.
