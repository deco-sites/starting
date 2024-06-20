---
description: useScript API reference
---

### Description

The `useScript` function is designed to help developers inline scripts into a web page with minimal payload. It receives a function and its arguments as parameters and returns the stringified, minified version of the function. This is particularly useful for inlining event handlers and other scripts directly into HTML, optimizing performance by reducing the amount of JavaScript sent over the network. It integrates seamlessly with the `hx-on:` handlers of HTMX.

### Importing

```typescript
import { useScript } from "deco/hooks/useScript.ts";
```

### Parameters

- **fn**: `Function`
  - The function to be stringified and minified.
  
- **args**: `...any[]`
  - The arguments to be passed to the function when it is called.

### Return Value

- **string**
  - A stringified, minified version of the function, ready to be inlined into HTML.

### Usage Examples

#### Example 1: Inline Script with `dangerouslySetInnerHTML`

In this example, `useScript` is used to inline a simple script that logs a message when the window loads.

```tsx
import { useScript } from "deco/hooks/useScript.ts";

const onLoad = () => {
  console.log("Window loaded");
};

function ExampleComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad) }}
      />
    </div>
  );
}

export default ExampleComponent;
```

#### Example 2: Inline Script with `hx-on` Attribute

In this example, `useScript` is used to create a minified event handler for an `hx-on:click` attribute that changes the text of a button when clicked.

```tsx
import { useScript } from "deco/hooks/useScript.ts";

const onClick = () => {
  event!.currentTarget.innerText = "Clicked!";
};

function ExampleButton() {
  return (
    <button hx-on:click={useScript(onClick)}>
      Click me
    </button>
  );
}

export default ExampleButton;
```

### Notes

- Ensure that the function you pass to `useScript` does not rely on external variables or closures that won't be available when the script is executed inline.
- When using with `hx-on:` handlers, make sure the minified function does not exceed any attribute length limits that might be imposed by browsers or HTML specifications.