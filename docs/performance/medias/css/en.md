---
description: Learn how to performatically use tailwind css tokens.
---

## TL;DR

Avoid using custom tokens like `h-[15px]` or `p-[3px]`. Opt for Tailwind tokens
such as `h-8` and `p-2` instead. Also, steer clear of specifying colors in your
tokens (e.g., `bg-[#fd429a]`). Instead, use theme colors for better
maintainability.

## Introduction

This guide explores best practices for achieving optimal front-end performance
with Tailwind CSS at Deco. We'll dive into the TailwindCSS generation process,
examine how inline tokens impact Web Vitals metrics, and establish simple rules
for maintaining a high-performance score.

### Understanding Tailwind CSS Build Process

Deco's framework allows seamless integration of TailwindCSS tokens within any
JSX component, applying styles without additional configuration. While this is
convenient for begginers, understanding the underlying process is crucial for
performance optimization.

Whenever changes are made to your website's code, the "Tailwind generation"
process scans all `.tsx` files in your codebase. Subsequently, it extracts CSS
tokens, merging them into a single `styles.css` file. This file is then served
to the browser, styling your components. This process repeats whenever code
changes occur.

However, the consequence is a larger-than-necessary `styles.css` file containing
styles for all components, impacting performance metrics. Consider a scenario
with a home page (`Home.tsx`) and a product page (`Product.tsx`):

```tsx
// Home.tsx
export default function Home() {
  return <div class="flex justify-center p-2">Foo</div>;
}

// Product.tsx
export default function Product() {
  return <div class="flex justify-center p-4">Bar</div>;
}
```

By triggering the "Tailwind generation" process we get the following
`styles.css`

```css
.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.p-2 {
  padding: 8px;
}

.p-4 {
  padding: 16px;
}
```

Even though `p-4` is not used in the home page, it's included in `styles.css`,
increasing CSS payload and affecting Web Vitals metrics (FCP).

In the previous example, both `flex` and `justify-center` tokens are re-used. In
big projects, this kind of class re-utilization tends to grow. Re-usability is
key for having a performatic tailwind project. However inline tokens may break
this trend. Examples of inline tokens include `p-[3px]`, `h-[4rem]`, and
`bg-[#fdb43a]`. These classes are unlikely to be reused loading to an increased
`styles.css` size and hindering Core Web Vitals.

To avoid inline syntax when replicating styles, follow a simple rule of thumb:
use nearby tokens. For instance:

- `p-[3px]` -> `p-2`
- `h-[4rem]` -> `p-8`
- `bg-[#fdb43a]` -> `bg-primary`

This greatly increases re-usability and improves overall website performance

### Real-world Example: 71% Reduction in CSS Payload

Applying these techniques to one of our projects resulted in a remarkable 71%
reduction in the final CSS payload. This not only improved Web Vitals scores but
also allowed for easy theming.

### Conclusion

Tailwind CSS is a potent tool for styling JSX components. By comprehending the
build process and optimizing your codebase, you can balance flexibility and
efficiency. Advocate for the use of pure Tailwind tokens and theme tokens,
fostering a more maintainable and performant application.

Happy coding with Tailwind CSS at Deco!
