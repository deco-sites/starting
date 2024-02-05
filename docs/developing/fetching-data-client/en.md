---
description: Learn how to invoke a function through API.
since: 1.0.0
---

## Suggested reading

- [Core Concepts: Loaders](/docs/en/concepts/loader)
- [Core Concepts: Actions](/docs/en/concepts/action)

Client-side function invocation is a powerful feature of live.ts that allows you
to fetch data or mutate directly from your functions without sending JavaScript
to the browser. This feature ensures that your data fetching or mutation is
unique across your repository and helps reduce latency on the client-side.

To get started with client-side function invocation, follow these steps:

1. Import `invoke` from `runtime.ts`

2. Now you can issue invocations using the `invoke` function. For
   example, to fetch data from a function, you would use the following code:

> Can't find this file?
> [Try this one](https://github.com/deco-sites/storefront/blob/main/runtime.ts)

```ts
import { invoke } from "../runtime.ts";
import { useCallback } from "preact/hooks";

export default function MyIsland() {

  const fetchData = useCallback(() => {
    const data = await invoke.app.loaders.myLoader({/* your function input props */});
  }, [])

  return <div>
    {...}
    <button onClick={fetchData}>Load</button>
  </div>
}
```

Here, the `invoke` function takes an object with a `key` property that specifies
the path to your function and a props property that contains your function input
props. When you call `invoke`, live.ts will invoke your function as it
does for rendering sections and return it to you as a JavaScript object.

You can also batch requests by passing an object with multiple keys, each
representing a desired invocation. For example:

```ts
const { data1, data2 } = await invoke({
  data1: invoke.app.loaders.myLoader({/* your function input props */}),
  data2: invoke.app.loaders.myLoader2({/* your function input props */}),
});
```

With these steps, you can now start using client-side functions invocation in
your Live.ts application, happy coding!
