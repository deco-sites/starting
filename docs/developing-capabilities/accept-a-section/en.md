---
description: Accepting Other Sections as Parameters in Your Section
since: 1.0.0
---

# Accepting Other Sections as Parameters in Your Section

In deco, you can create powerful and flexible
[Sections](/docs/en/concepts/section) by accepting other sections as parameters.
This allows you to build modular and composable components that can be easily
customized and reused in different contexts.

## Overview

When creating a Section that accepts other sections as parameters, you define an
interface for the props of your Section component. This interface includes a
property which is of type `Section`. The `Section` type is a generic type that
represents any other section in deco.

## Implementation

To create a Section that accepts other Sections as parameters, follow these
steps:

1. Import the `Section` type from `deco/blocks/section.ts`.

2. Define an interface for the props of your section component. Include a
   property called `myProp`, which is of type `Section`.

```tsx
// MySection.tsx

import { Section } from "deco/blocks/section.ts";

export interface Props {
  myProp: Section;
}

export default function MySection({ myProp: { Component, props } }: Props) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}
```

3. Inside your section component, access the `Component` and `props` properties
   from the `myProp` prop. The `Component` property represents the component
   function of the section passed as a parameter, and the `props` property
   contains the props of that section.

## Example

Let's say you have a section called `ProductCardSection` that renders a product
card based on certain props:

```tsx
// ProductCardSection.tsx

export interface Props {
  title: string;
  price: number;
  imageUrl: string;
}

export default function ProductCardSection({ title, price, imageUrl }: Props) {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
```

Now, you want to create a higher-order section called `ProductContainerSection`,
which accepts a `ProductCardSection` as a parameter and wraps it in a container:

```tsx
// ProductContainerSection.tsx

import { Section } from "deco/blocks/section.ts";

export interface Props {
  myProp: Section;
}

export default function ProductContainerSection(
  { myProp: { Component, props } }: Props,
) {
  return (
    <div className="flex gap-4">
      <Component {...props} />
    </div>
  );
}
```

With this setup, you can now use `ProductContainerSection` to wrap any other
section, including the `ProductCardSection`, and add a container around it.

Now, let's say you want restrict your section to `ProductCard` because you have
a lot of sections in your site but only that one should fit in that place, you
can do the following:

```tsx
// ProductCardSection.tsx

import { JSX } from "preact";

// Define a named type, for example, "ProductCard," pointing to `JSX.Element`
export type ProductCard = JSX.Element;

// Define the props interface
export interface Props {
  title: string;
  price: number;
  imageUrl: string;
}

// Implement the section and specify the return type as "ProductCard"
export default function ProductCardSection(
  { title, price, imageUrl }: Props,
): ProductCard {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
```

Now, you can depend directly on `ProductCard`:

```tsx
// ProductContainerSection.tsx

import { Section } from "deco/blocks/section.ts";
import { ProductCard } from "./ProductCardSection.tsx";

// Specify the prop interface with `Section<ProductCard>`
export interface Props {
  myProp: Section<ProductCard>;
}

// Implement the section
export default function ProductContainerSection(
  { myProp: { Component, props } }: Props,
) {
  return (
    <div className="flex gap-4">
      <Component {...props} />
    </div>
  );
}
```

This ensures consistency and reinforces the concept of a named type, making it
easier for developers to and business users constrain their sections as they
wish!

## Note

With the ability to accept other sections as parameters, you can create highly
modular and customizable sections that adapt to different use cases and make
your Live.ts applications even more powerful and flexible. Happy coding! 🧩🚀
