---
description: Adding loading fallback for sections
since: 1.54.0
---

# Loading Fallback

## Overview

Loading fallbacks are a powerful concept available to be used since 1.54.0
version, to handle loading state of sections using data from third party APIs. 
They allow you to gracefully handle loading states and prevent the entire application from
hanging due to some third party API

In deco, creating a loading fallback is as simple as exporting a component
function named `LoadingFallback`.

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

## Example: Creating a Loading Fallback

To create a loading fallback, you can follow these steps:

- Pick your selected Section (e.g `ProductShelf.tsx`)
- Export a function named `LoadingFallback`.

```tsx
// ProductShelf.tsx
export interface Props {
    myProp: string;
}

export function LoadingFallback() {
  // Renderer spinners, skeletons and other placeholder
  return (
    <div>
      <h2>loading...</h2>
    </div>
  );
}

export default function ProductShelf(props: Props) {
    ...
}
```

If `ProductShelf` uses a data coming from a slow third party API, the `LoadingFallback` component will be rendered instead.
If no loading fallback is set, a default fallback will be rendered instead
