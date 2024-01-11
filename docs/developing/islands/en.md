---
description: Client-side Interactivity.
since: 1.0.0
---

One of the reasons deco is fast is our edge first approach to creating websites.
This means that all code you write runs on our servers instead of running on
slow, inconsitent user devices (browser). However, sometimes we need to provide
extra interactivity to our websites, like adding `onClick`, `useState` or
`useEffect` event handlers. In this guide you will learn how to create
components that run on the browser. Make sure to read our performance tips
before creating any JavaScript on the browser to avoid common pitfails with
client-side JavaScript

# Summary

1. Making components interactive
2. Islands usage limitations
3. Sharing state among islands.
4. Considerations and tips

# Making components interactive

Suppose you have the following component. A counter that allows the user to
add/subtract to the displayed value.
<img width="320"  src="https://github.com/deco-sites/starting/assets/1753396/ffecce87-22e4-4165-8436-e46cf9681eb0" />

This component can be implemented with the following code:

```tsx
import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
```

Creating a file called `Counter.tsx` and placing it into the `islands` folder
gives us the following result on the screen:

![Jul-13-2023 10-38-29](https://github.com/deco-sites/starting/assets/1753396/9d4cda22-f302-4b8e-a98e-d5c9dd4af596)

This is called an `island`!

Although adding islands to your project seems tempting, keep in mind that
islands slow down websites and harm [TBT metric](https://web.dev/tbt/), so
before moving any component to the `island` folder, make sure that your final
interactivity:

- Isn't achieved through page navigation with links or form submissions...
- Isn't an interaction built purely with CSS...
- Requires manipulation of elements or the current page's state (e.g., using
  onClick, onChange, useEffect, another hook, or an event listener)

# Islands usage limitations

Islands are Preact components. This means they accept `props`. However, these
values must be one of:

- Primitive types `string`, `boolean`, `bigint`, and `null`
- Simple objects with `string` keys and serializable values
- Arrays of serializable values
- `Uint8Array`
- JSX Elements (ONLY as props.children)
- Preact Signals (if the signal value is serializable)
- Most numbers (`Infinity`, `-Infinity`, and `NaN` are converted to `null`)

Complex objects such as Date, functions, and custom classes are not accepted as
islands props.

# Using Signals Instead of State

`useState` requires working with a separate function for value updates. Preact
also uses [`Signals`](https://preactjs.com/guide/v10/signals/) for handling
state. A `signal` has a reference that holds a value, but it also has a `.value`
attribute that allows updating this value.

Within a component, if the state is only used locally, you can use the
`useSignal` hook to create these elements that can be used in the function body
or in the JSX returned, as in the example below.

```tsx
import { useSignal } from "@preact/signals";

export default function Counter() {
  const count = useSignal(0);

  return (
    <div>
      <button onClick={() => count.value--}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => count.value++}>
        +
      </button>
    </div>
  );
}
```

# Sharing state among islands.

In normal Preact development, sharing state between components is usually done
via the [Context](https://preactjs.com/guide/v10/context/) API. This works fine
for a full client-side application. However, since we are using islands
architecture, sharing state among islands require a new approach.

Signals are also a great way of sharing state between islands, since one can
publish and subscribe for change events in a concise API.

To use signals,

```tsx
import { signal } from "@preact/signals";
```

Now, use the global scope to create, mutate and subscribe to a signal:

```tsx
import { signal } from "@preact/signals";

const count = signal(0);

// Read a signal’s value by accessing .value:
console.log(count.value); // 0

// Update a signal’s value:
count.value += 1;

// The signal's value has changed:
console.log(count.value); // 1
```

To define side-effects over signal changes, use the `effect`, `batch`,
`computed`, or `useComputed` operations. Refer to the
[signals documentation](https://preactjs.com/guide/v10/signals/) for more
details. Also, take a look at
[sharing state between islands](https://fresh.deno.dev/docs/examples/sharing-state-between-islands).

> Note that sharing state via the `Context` API will NOT work, since the context
> will be outside the islands, and thus, only available on the server.

# Considerations and tips

Making a component an island will at least double its size in bytes. The server
renders the HTML for this element and sends it to the browser, but it also sends
essentially the same HTML plus the JS to be injected on the client side.
Therefore, try to create only the necessary islands, as they make the rendering
process more resource-intensive.

Futher read:

- [Introduction to the Islands architecture - EN](https://deno.com/blog/intro-to-islands)
