---
description: Sending only necessary data to client
since: 1.0.0
---

When loading data from external APIs using [Loaders](/docs/pt/concepts/loader) and sending them to the [Section](/docs/pt/concepts/section), it is possible that the size of the _payload_ may negatively impact the site's performance. The impact occurs both in the initial loading time and in the [hydration](https://blog.saeloun.com/2021/12/16/hydration/), where the page is "initialized" in the browser to make it interactive (using `useEffect`, `useSignal`, etc.). You can visualize the size of the final JSON in the **Performance** tab in the CMS deco.

![288067513-db3a14e1-c0ac-47f8-83b9-afc8db60de71](https://github.com/deco-sites/starting/assets/76822093/ec005f5d-4169-4e89-acd0-8c06baf3c80d)

When the JSON size exceeds ~500kb, it's likely that the UI doesn't need the complete data but rather some portion of it, or a computation based on other values. To reduce this size and improve page performance, it's possible to **filter the data** directly in the Loader, passing only what is necessary to the UI.

## Data Flow

- Initiate the request for necessary information using props.

- Use a loader to fetch the desired data. In some situations, it might return a large amount of data, for example, when requesting related products from [VTEX](https://www.deco.cx/docs/en/composable-apis/vtex). Be aware that it might return more data than necessary.

- Transmit only the processed data to the JSX component, thereby reducing unnecessary load on the client.

## Example Code

Implementation example of a [Loader](docs/en/developing/fetching-data):

```tsx
import type { SectionProps } from "deco/mod.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
  numberOfFacts?: number;
}

export async function loader(
  { numberOfFacts, title }: Props,
  _req: Request,
) {
  const { facts: dogFacts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return { dogFacts, title };
}

export default function DogFacts(
  { title, dogFacts }: SectionProps<typeof loader>,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
```

## Benefits
- Significant reduction in the size of transmitted JSON.
- Noticeable improvement in page performance, especially in terms of loading.

By implementing this data preprocessing process, it is possible to optimize page performance, ensuring that only crucial information is sent and processed, providing a more streamlined performance for the user.
