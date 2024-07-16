---
description: Interactivity with HTMX
since: 1.0.0
---

This tutorial will guide you through integrating HTMX into your deco
project, enabling enhanced interactivity with minimal JavaScript.
We will build a counter as an example to see how deco.cx integrates
with HTMX.

## What is HTMX?

HTMX allows you to access modern browser features directly from HTML, 
making it easier to build interactive web applications with less 
JavaScript.

## Step 1: Adding HTMX to Your Project

First, you need to include the HTMX library in your project. 
You can do this by installing the app HTMX to your site in
the deco Admin.

![HTMX installation in the deco Admin](/docs/developing-guide/htmx/htmx-installation.png)

## Step 2: Making the Preact version of the Counter

Let's create a Preact component for the counter to see the 
difference compared to a HTMX version:

```tsx
import { useState } from "preact/hooks";

export default function Section() {
  const [count, setCount] = useState(0);

  return (
    <div class="container h-screen flex items-center justify-center gap-4">
      <button
        class="btn btn-sm btn-circle btn-outline no-animation"
        onClick={() => setCount(count - 1)}
      >
        <span>-</span>
      </button>
      <span>{count}</span>
      <button
        class="btn btn-sm btn-circle btn-outline no-animation"
        onClick={() => setCount(count + 1)}
      >
        <span>+</span>
      </button>
    </div>
  );
}
```

Here, we are using Preact's `useState` hook to manage the counter state 
and the `onClick` event to update the counter when the buttons are clicked.

## Step 3: Making the HTMX version of the Counter

In the HTMX version, we will no longer use the `useState` hook or the
`onClick` event. When using HTMX, we need to have one route for each UI
state of the site, so we will make a request to the server to update
the counter state.

That's when the [`useSection` hook](/docs/en/api-reference/use-section) 
comes in handy. This hook automatically creates routes for rendering your 
UI states without requiring developers to handle routing manually. 

Let's see what changes in the HTMX version:

```tsx
import { useSection } from "deco/hooks/useSection.ts";

export default function Section({ count = 0 }:{ count: number }) {
  return (
    <div class="container h-screen flex items-center justify-center gap-4">
      <button
        hx-get={useSection({ props: { count: count - 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-sm btn-circle btn-outline no-animation"
      >
        <span>-</span>
      </button>
      <span>{count}</span>
      <button
        hx-get={useSection({ props: { count: count + 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-sm btn-circle btn-outline no-animation"
      >
        <span>+</span>
      </button>
    </div>
  );
}
```

To update the state as mentioned before, we are using the hx-get 
attribute with the useSection hook. The hx-get attribute makes a GET 
request to the URL returned by the useSection hook. The response is 
new HTML with the updated UI state of the counter. The hx-target 
attribute defines the target element where the response will be 
inserted, in this case, the closest section element to the button. 
The hx-swap attribute defines how the response will be inserted, 
in this case, replacing the entire section element with the response.

To illustrate the difference between the Preact and HTMX versions,
let's use them both and see how they behave in the network tab of the
browser's developer tools.

While the Preact version updates the counter state locally, the HTMX
version makes a request to the server to update the counter state.

![HTMX request in the network tab](/docs/developing-guide/htmx/htmx-network.gif)

![Preact request in the network tab](/docs/developing-guide/htmx/preact-network.gif)

## Conclusion

HTMX is a powerful tool that can simplify the process of adding 
interactivity to your web applications. By using HTMX, you can reduce 
the amount of JavaScript you need to write and maintain, making your 
codebase cleaner and more manageable.

For more information, check out the [HTMX documentation](https://htmx.org/docs/) 
and [deco.cx documentation](https://deco.cx/docs/).
