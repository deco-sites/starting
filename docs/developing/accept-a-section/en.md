---
description: Accepting Other Sections as Parameters in Your Section
since: 1.0.0
---

# Accepting Other Sections as Parameters in Your Section

In deco, you can create powerful and flexible [Sections](/docs/en/concepts/section) by accepting other sections as parameters. This allows you to build modular and composable components that can be easily customized and reused in different contexts.

## Overview

When creating a Section that accepts other sections as parameters, you define an interface for the props of your Section component. This interface includes a property called `Section`, which is of type `Section`. The `Section` type is a generic type that represents any other section in deco.

## Implementation

To create a Section that accepts other Sections as parameters, follow these steps:

1. Import the `Section` type from `$live/blocks/section.ts`.

2. Define an interface for the props of your section component. Include a property called `section`, which is of type `Section`.

```tsx
// MySection.tsx

import { Section } from "$live/blocks/section.ts";

export interface Props {
  section: Section;
}

export default function MySection({ section: { Component, props } }: Props) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}
```

3. Inside your section component, access the `Component` and `props` properties from the `section` prop. The `Component` property represents the component function of the section passed as a parameter, and the `props` property contains the props of that section.

## Example

Let's say you have a section called `ProductCardSection` that renders a product card based on certain props:

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

Now, you want to create a higher-order section called `ProductContainerSection`, which accepts a `ProductCardSection` as a parameter and wraps it in a container:

```tsx
// ProductContainerSection.tsx

import { Section } from "$live/blocks/section.ts";

export interface Props {
  section: Section;
}

export default function ProductContainerSection({ section: { Component, props } }: Props) {
  return (
    <div className="product-container">
      <Component {...props} />
    </div>
  );
}
```

With this setup, you can now use `ProductContainerSection` to wrap any other section, including the `ProductCardSection`, and add a container around it.

```tsx
import ProductCardSection from "./ProductCardSection.tsx";
import ProductContainerSection from "./ProductContainerSection.tsx";

// Usage in your app
const productProps = { title: "Product A", price: 29.99, imageUrl: "/product-a.jpg" };

<MySection section={ProductContainerSection} props={productProps} />
```

In this example, we pass `ProductCardSection` as a parameter to `ProductContainerSection` and provide the necessary props for `ProductCardSection`. The result will be a product card wrapped inside a container, all achieved through the composability of sections.

## Note

With the ability to accept other sections as parameters, you can create highly modular and customizable sections that adapt to different use cases and make your Live.ts applications even more powerful and flexible. Happy coding! 🧩🚀
