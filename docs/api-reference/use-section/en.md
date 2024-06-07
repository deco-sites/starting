---
description: useSection API reference
---

The `useSection` hook in deco.cx is a powerful tool designed to automatically
generate links for updating and rendering sections. With this hook you can use
HTMX or Fresh's Partials to render specific section states. Below is a detailed
explanation of its usage, parameters, and examples.

## Importing the useSection Hook

To use the useSection hook, you need to import it from the
deco/hooks/useSection.ts file:

```tsx
import { useSection } from "deco/hooks/useSection.ts";
```

## Parameters

The useSection hook accepts an options object with the following properties:

1. props: An object containing the section props to override. This allows you to
   specify new values for props that will be used to render the section. Keep in
   mind that props are merged with those from the current section instance.
2. href: A string representing the new URL to evaluate this section. This URL
   will be used for the `Request` parameter on all loaders/actions this section
   may depend on.

## Return Value

The useSection hook returns a URL string of the section with the props partially
applied

## Example Usage

Let's build a component that print an integer and allow us to see the next
integer. Here's a print

![1234](https://github.com/deco-cx/community/assets/1753396/f4abdeaf-9801-4f4a-8f57-2f3eaa22804e)

This component can be built with the following code:

```tsx
import { useSection } from "deco/hooks/useSection.ts";

export default function Section({ count = 0 }: { count: number }) {
  return (
    <div class="flex items-center justify-center gap-4">
      <span>{count}</span>
      <a href={useSection({ props: { count: count + 1 } })}>See next integer</a>
    </div>
  );
}
```

Where useSection returns a link for the next integer.

## Warnings

1. URL Size Limits: Be mindful of the URL size limits when passing props to
   useSection. Try to keep payloads small and use lightweight data types like
   booleans and IDs.
2. Security: Ensure that any sensitive data passed as props is properly secured
   and does not expose vulnerabilities through the URL.
