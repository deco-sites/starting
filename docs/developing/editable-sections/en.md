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
[on the deco GitHub](https://github.com/deco-sites/storefront/blob/main/sections/Content/Hero.tsx).

The code of this element is written in HTML with JS, as shown in the example
below.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}

export interface Props {
  /**
   * @format html
   */
  title: string;
  description: string;
  image?: ImageWidget;
  placement: "left" | "right";
  cta: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Hero",
  description = "Your description here",
  image,
  placement,
  cta,
}: Props) {
  return (
    <div>
      <div class="mx-auto flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          {image && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}

          ...
          
        </div>
      </div>
    </div>
  );
}
```

Observe the exported types in this file. These same types are accessible in the
Admin when creating an Hero block. In the Admin, select the **Sections**, the
`Hero` block, and choose the option to create a block to view the same
properties in an editing form.
Block properties are identical to those found in the Admin form.

![Editing properties of the Hero Section](/docs/editable-section/section-props.png)

<!-- ![Create Block](https://github.com/deco-cx/apps/assets/882438/c7eee318-c6df-4ade-abd8-66390758aca7) -->


<!-- ```tsx
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
``` -->

_Section and its properties types_

<!-- ![Editing properties of the Hero Section](https://github.com/deco-cx/apps/assets/882438/b57f6fae-da58-4cc4-a5cc-aa99985cd442) -->

A deco project uses the type of a component's properties to automatically
generate the block editing form in the Admin. In the following figure, you can
see how the Admin knows the information to be placed in the form. To do this,
the Admin contacts the live Site to retrieve the property data of the Sections
in that project. On the other hand, the code on a Site comes from GitHub, the
same one the developer uses.

![Structure of Site data access](https://github.com/deco-sites/starting/assets/882438/dcc4d63a-bbb2-4f81-909a-054eef048a53)

# First modification and environment selection

Run the project locally and modify the code of the `Hero` to
receive a new optional property, the `highlight` of a CTA link. To do this, modify
the `CTA` type and the JSX code of the component, remembering to save the file
after the modification.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
  highlight: boolean;
}

export interface Props {
  /**
   * @format html
   */
  title: string;
  description: string;
  image?: ImageWidget;
  placement: "left" | "right";
  cta: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Hero",
  description = "Your description here",
  image,
  placement,
  cta,
}: Props) {
  return (
    <div>
      <div class="mx-auto flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          {image && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}

          ...

            <div class="flex flex-col items-center lg:items-start lg:flex-row gap-4">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`group relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out ${
                    item.variant === "Reverse"
                      ? "bg-secondary text-white"
                      : "bg-accent text-black"
                  }`}
                >
                  <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40">
                  </span>
                  /* change to highlight the text button */
                  <span class={`relative font-medium lg:text-[20px] ${item?.highlight ? "font-black" : ""}`}>
                    {item?.text}
                  </span>
                </a>
              ))}
            </div>

            ...
          
        </div>
      </div>
    </div>
  );
}
```

_Altering the Link type and JSX with the new `highlight` property_

When making this modification locally, it does not affect or impact the live
Site. However, with the project running locally, it is
possible to see this modification in the Admin itself. For this, you must 
follow the steps to [create a local environment visible to the Admin](developing/setup).

![Changing the environment](/docs/editable-section/choosing-environment.png)

By pointing to the environment you created, the admin now queries it to
detect the available properties and `sections`.

The
To allow others to see the modification, it is necessary to commit and push the
changes. The `main` branch contains the code that is displayed on the default
domain of the Site, but it is possible to view other branches of the repository
by selecting the desired branch in the environment selector.

# Step-by-step: Modifying and testing a `section`

In summary, to test modifications on the Section `Hero.tsx`:

1. Run `deno task start` in the Terminal. _(You don't need to run it again if
   it's already running)_

2. Make local modifications to the file `sections/Hero.tsx`.

3. Access the [Admin of _deco.cx_](https://deco.cx/admin), select your Site, and
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
