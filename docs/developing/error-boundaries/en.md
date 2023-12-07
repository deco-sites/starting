---
description: Adding error boundaries for sections
since: 1.21.4
---

# Error Boundaries

## Overview

Error boundaries are a powerful concept available to be used since 1.21.4
version, to handle errors that occur during the rendering of components. They
allow you to gracefully handle errors and prevent the entire application from
crashing due to an unhandled error.

In deco, creating an error boundary is as simple as exporting a component
function named `ErrorBoundary` that takes an object with two properties: `props`
and `error`. The `props` property contains the original component's props, and
the `error` property holds the error object that was thrown by the component.

The pre-requisites to make your component work with error boundaries is having
the following dependencies in versions higher or equal than below:

```json
{
  "imports": {
    "deco/": "https://denopkg.com/deco-cx/deco@1.21.4/",
    "$fresh/": "https://denopkg.com/deco-cx/fresh@1.3.2/",
    "preact": "https://esm.sh/preact@10.16.0",
    "preact/": "https://esm.sh/preact@10.16.0/",
    "preact-render-to-string": "https://esm.sh/*preact-render-to-string@6.2.0",
    "@preact/signals": "https://esm.sh/*@preact/signals@1.1.3",
    "@preact/signals-core": "https://esm.sh/@preact/signals-core@1.3.0"
  }
}
```

## Example: Creating an Error Boundary

To create an error boundary, you can follow these steps:

- Pick your selected Section (e.g `ProductShelf.tsx`)
- Export a function named `ErrorBoundary`, the function should accept an object
  with two properties: `props` and `error`.

```tsx
// ProductShelf.tsx

import { ErrorBoundaryParams } from "deco/types.ts";

export interface Props {
    myProp: string;
}
export function ErrorBoundary({ props, error }: ErrorBoundaryParams<Props>) {
  // Your error handling logic goes here
  // You can display an error message, log the error, or render a fallback UI
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default function ProductShelf(props: Props) {
    ...
}
```

In this example, the `ProductShelf` component is wrapped with the
`ErrorBoundary` component. If an error occurs during the rendering of
`ProductShelf`, the `ErrorBoundary` component will catch the error and display
the fallback UI specified in the `ErrorBoundary` function.

Remember to always use error boundaries judiciously and only wrap the components
that are prone to errors. Using error boundaries effectively can greatly improve
the stability and user experience of your applications.
