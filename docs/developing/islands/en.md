---
description: Client-side interactivity.
since: 1.1.0
---

# Summary

1. Introduction to Islands
   - Islands limitations
   - Signals
2. Creating your first island
   - Adding a new component (`RandomDogFact.tsx`)
   - Considerations and tips
3. Troubleshooting

# Introduction to Islands
Islands are browser-interactive components within the Deno Fresh architecture.

By default, all Fresh components are server-rendered, and their HTML is sent to the browser without attached JS. However, there are times when some degree of interaction in the browser is necessary. For example, a user may need to interact with a button to display a counter:

```tsx
import { useSignal } from "@preact/signals";

export default function MyIsland() {
  const count = useSignal(0);

  return (
    <div>
      Counter is at {count}.{" "}
      <button onClick={() => (count.value += 1)}>+</button>
    </div>
  );
}
```
_Source: [Fresh documentation - EN](https://fresh.deno.dev/docs/concepts/islands)_

By default, Fresh will only generate the HTML for this code, excluding the onClick code for the button.

A component becomes an island when it is placed within the top-level `islands` folder or when it is imported (directly or indirectly) by a component within that directory. In islands, the HTML is still generated on the server but sent to the browser where it is "hydrated" with the JavaScript that makes it interactive.

Therefore, if you need to create user interaction that...

- Isn't achieved through page navigation with links or form submissions...
- Isn't an interaction built purely with CSS...
- Requires manipulation of elements or the current page's state
(e.g., using onClick, onChange, useEffect, another hook, or an event listener)

Then, you need to make use of islands.

## Islands usage limitations

An island can receive properties like any other component, as long as these properties are serializable. This means you can receive the following values:

- Primitive types `string`, `boolean`, `bigint`, and `null`
- Most numbers (`Infinity`, `-Infinity`, and `NaN` are converted to `null`)
- Simple objects with `string` keys and serializable values
- Arrays of serializable values
- `Uint8Array`
- JSX Elements (ONLY as props.children)
- Preact Signals (if the signal value is serializable)

Complex objects such as Date, functions, and custom classes are not accepted in islands props.

## Signals

In Preact, it's common to use signals for managing component state and control user interaction.

A signal:

- is created with an initial value (`const count = useSignal(0);`)
- is used by a component (`Counter is at {count}.{" "}`)
- triggers a re-render of components that use it when the signal is updated (`count.value += 1`)

To define side-effects over signal changes, use the `effect`, `batch`, `computed`, or `useComputed` operations. Refer to the [signals documentation](https://preactjs.com/guide/v10/signals/) for more details.

# Creating your first island

## Adding a new component (`RandomDogFact.tsx`)

1. Create a file named `RandomDogFact.tsx` in the `islands` folder

2. Open the `islands/RandomDogFact.tsx` file and add the following content:

```tsx
import { signal } from "@preact/signals";

export interface DogFact {
    fact: string;
  }
  
  export interface Props {
    title: string;
  }
  
  const getNewDogFact = async () => {
    const { facts: dogFacts } = (await fetch(
      `https://dogapi.dog/api/facts?number=1`,
    ).then((r) => r.json())) as { facts: string[] };
    if (dogFacts[0]) {
        dogFact.value = dogFacts[0];
    }
  }
  
  const dogFact = signal<string>("🐕");

  export default function RandomDogFact({ title }: Props) {
    return (
      <div onClick={getNewDogFact} class="p-4 cursor-pointer">
        <h1 class="font-bold">{title}</h1>
        <span>{dogFact}</span>
      </div>
    );
  }
```

3. Use the `<RandomDogFact>` element in a section. For example:

```tsx
import RandomDogFact from "deco-sites/fashion/islands/RandomDogFact.tsx";

// ...

function ProductGallery({ products, layout }: Props) {
  return (
    <div class="grid grid-cols-2 gap-2 items-center sm:grid-cols-4 sm:gap-10">
      <RandomDogFact title="Dog Fact" />
      {products?.map((product, index) => (
        <ProductCard product={product} preload={index === 0} layout={layout} />
      ))}
    </div>
  );
}
```

Being an island, the `RandomDogFact` element is rendered once on the server, but its HTML and JS (including its dependencies) are sent to the browser to have its JS enabled and executed again. If this island were not placed in the islands directory, it would not be clickable.

## Considerations and tips

Making a component an island will at least double its size in bytes. The server renders the HTML for this element and sends it to the browser, but it also sends essentially the same HTML plus the JS to be injected on the client side. Therefore, try to create only the necessary islands, as they make the rendering process more resource-intensive.

Also, refer to:

- [Introduction to the Islands architecture - EN](https://deno.com/blog/intro-to-islands)
- TODO RECIPES

# Troubleshooting

## Island has no interaction

The file must be in the `islands` directory. The file cannot be in any subdirectory within `islands`. Check if there are any errors in the `console` that prevented the hydration process.

## Island does not run and/or displays errors in the deno console.

All island initialization JavaScript code runs first on the server and then on the client. It's common to include code that only makes sense on the server (e.g., using `localStorage`, manipulating the DOM, making a request, etc.). You can use `IS_BROWSER` to determine that a code should only be executed on the client.

```tsx
import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function MyIsland() {
  let initalValue = 0;
  if (IS_BROWSER) {
    initalValue = localStorage.getItem("count");
  }
  const count = useSignal(initalValue);

  return (
    <div>
      Counter is at {count}.{" "}
      <button onClick={() => (count.value += 1)}>+</button>
    </div>
  );
}
```