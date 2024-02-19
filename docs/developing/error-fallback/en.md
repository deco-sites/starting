---
description: Adding error fallback for sections
since: 1.54.0
---

# Error Fallback

## Overview

Error fallbacks are a powerful concept available to be used since 1.54.0
version, to handle errors that occur during the rendering of components. They
allow you to gracefully handle errors and prevent the entire application from
crashing due to an unhandled error.

In deco, creating an error fallback is as simple as exporting a component
function named `ErrorFallback` that takes an object with the `error` property. 
The `error` property holds the error object that was thrown by the component.

The pre-requisites to make your component work is having
the following dependencies in versions higher or equal than below:

```json
{
  "imports": {
    "deco/": "https://denopkg.com/deco-cx/deco@1.54.0/",
    "$fresh/": "https://denopkg.com/deco-cx/fresh@1.3.2/",
    "preact": "https://esm.sh/preact@10.16.0",
    "preact/": "https://esm.sh/preact@10.16.0/",
    "preact-render-to-string": "https://esm.sh/*preact-render-to-string@6.2.0",
    "@preact/signals": "https://esm.sh/*@preact/signals@1.1.3",
    "@preact/signals-core": "https://esm.sh/@preact/signals-core@1.3.0"
  }
}
```

## Example: Creating an Error Fallback

To create an error fallback, you can follow these steps:

- Pick your selected Section (e.g `ProductShelf.tsx`)
- Export a function named `ErrorFallback`, the function should accept an object with the `error` property.

```tsx
// ProductShelf.tsx
export interface Props {
    myProp: string;
}

export function ErrorFallback({ error }: { error?: Error }) {
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

If an error occurs during the rendering of `ProductShelf`, the `ErrorFallback` component will be rendered instead.

Remember to always use error fallbacks judiciously and only wrap the components
that are prone to errors. Using error boundaries effectively can greatly improve
the stability and user experience of your applications.
If no error fallback is set, a default fallback will be rendered instead
