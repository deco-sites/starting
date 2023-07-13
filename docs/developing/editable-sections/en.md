---
description: Making Sections editable
since: 1.0.0
---

# Summary
1. Introduction to Sections (dev)
2. First modification and environment selection
3. Summary: Modifying and testing a \`section\`

# Introduction to Sections (dev)

A Section represents a configurable UI element for a deco Site. Now, it is necessary to understand what this represents in terms of development.

A Section is a `tsx` code inside the `sections` folder and it:

- is a [Preact](https://preactjs.com/) component
- has serializable properties
- exports the type of its properties

A Preact component is a function exported by default (`export default`) that receives properties, returns JSX, and is invoked on each rendering of the defined element. As an example, open the `sections/Intro.tsx` file from the ecommerce template in VSCode. This file is also accessible [on the deco GitHub](https://github.com/deco-sites/start/blob/main/sections/Intro.tsx).

The code of this element is written in HTML with JS, as shown in the example below.

```tsx
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  /** @description: Ex: "Software Engineer" */
  headline: string;
  /** @title Upload your photo */
  picture?: DecoImage;
  introduction: HTML;
  links?: Array<Link>;
}

export default function Intro({
  headline,
  picture,
  introduction,
  links,
}: Props) {
  return (
    <header class="pt-20 pb-32 flex justify-center items-center">
      <div class="flex flex-col gap-2 text-3xl">
        <h1 class="font-bold text-4xl">{headline}</h1>
        <img
          class="object-cover w-24 h-24 rounded-full"
          src={picture}
          alt={headline}
        />
        <HTMLRenderer html={introduction} />
        {!!links?.length && (
          <ul>
            {links.map(({ href, title }) => (
              <a href={href} aria-label={title}>
                <li>{title}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
```

Observe the exported types in this file. These same types are accessible in the Admin when creating an Intro block. In the Admin, select the **Library**, the `Intro` block, and choose the option to create a block to view the same properties in an editing form.

```tsx
/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  /** @description: Ex: "Software Engineer" */
  headline: string;
  /** @title Upload your photo */
  picture?: DecoImage;
  introduction: HTML;
  links?: Array<Link>;
}
```
_Section and its properties types_

![Editing properties of the Intro Section](https://github.com/deco-sites/start/assets/882438/ad261083-b924-4737-917f-f01548385a0c)

A deco project uses the type of a component's properties to automatically generate the block editing form in the Admin. In the following figure, you can see how the Admin knows the information to be placed in the form. To do this, the Admin contacts the live Site to retrieve the property data of the Sections in that project. On the other hand, the code on a Site comes from GitHub, the same one the developer uses.

![Structure of Site data access](https://github.com/deco-sites/starting/assets/882438/dcc4d63a-bbb2-4f81-909a-054eef048a53)

# First modification and environment selection

Run the project locally (`deno task start`) and modify the code of the `Intro` to receive a new optional property, the `highlight` of a link. To do this, modify the `Link` type and the JSX code of the component, remembering to save the file after the modification.

```tsx
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
  hightlight?: boolean;
}

export interface Props {
  /** @description: Ex: "Software Engineer" */
  headline: string;
  /** @title Upload your photo */
  picture?: DecoImage;
  introduction: HTML;
  links?: Array<Link>;
}

export default function Intro({
  headline,
  picture,
  introduction,
  links,
}: Props) {
  return (
    <header class="pt-20 pb-32 flex justify-center items-center">
      <div class="flex flex-col gap-2 text-3xl">
        <h1 class="font-bold text-4xl">{headline}</h1>
        <img
          class="object-cover w-24 h-24 rounded-full"
          src={picture}
          alt={headline}
        />
        <HTMLRenderer html={introduction} />
        {!!links?.length && (
          <ul>
            {links.map(({ href, title, hightlight }) => (
              <a href={href} aria-label={title}>
                <li class={`${hightlight ? "font-black" : ""}`}>{title}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
```
_Altering the Link type and JSX with the new `highlight` property_

When making this modification locally, it does not affect or impact the live Site. However, with the project running locally (`deno task start`), it is possible to see this modification in the Admin itself. For this, it is important to go to the environment selector and choose `localhost:8000` as the reference.

![Changing the environment](https://github.com/deco-sites/starting/assets/882438/6154427b-86b3-4569-87af-c5c21f7b7520)

By pointing to `localhost`, the admin now queries the locally running version to detect the available properties and `sections`.

To allow others to see the modification, it is necessary to commit and push the changes. The `main` branch contains the code that is displayed on the default domain of the Site, but it is possible to view other branches of the repository by selecting the desired branch in the environment selector.

# Summary: Modifying and testing a `section`

In summary, to test modifications on the Section `FAQ.tsx`:

1. Run `deno task start` in the Terminal. _(You don't need to run it again
   if it's already running)_

2. Make local modifications to the file `sections/Intro.tsx`.

3. Access the Admin of _deco.cx_ at https://deco.cx/admin, select your Site, and go
   to the `Library`.

4. Make sure that `localhost:8000` is selected in the Environment Selector in the upper-right corner of the page.

5. Look for `Intro.tsx` among the blocks.

6. **Ready!** Now you can configure `props` for that Section and see how it is being rendered. The preview will automatically update if you modify the code of the Section locally.

Remember to save your file. If there are any typing or transformation errors, they will be signaled in the command line or in VSCode. When you are comfortable with the modifications, submit the modified file to the GitHub repository.