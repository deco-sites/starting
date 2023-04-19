---
description: Learn how to load data with deco.cx using Loaders and Sections, allowing business users to customize data fetching.
since: 1.0.0
---

## Suggested reading

- [Tech Stack](/docs/en/introduction/tech-stack)
- [Core Concepts: Sections](/docs/en/concepts/section)

Fetching data is a common requirement when building websites or applications.
_deco.cx_ provides a data-fetching solution that loads data **on the
server-side** and is flexible enough to allow business users to customize how
data is fetched, just how they can configure Section's `props`.

In this tutorial you'll learn how to fetch data from an external API and feed
that into a Section using [Loaders](/docs/en/concepts/loader).

## What we'll build

The example use-case we'll follow is simple, but it has a lot of complexities we
have on data fetching:

- Fetch dog facts data from the [Dog API](https://dogapi.dog/) **allowing the
  user to configure how many facts are being fetched** on _deco.cx_'s Admin.
- Render those facts in a Section.

<img width="1512" alt="Section rendering data fetched from API" src="https://user-images.githubusercontent.com/18706156/225758802-7277e774-921d-46e5-b384-bc9245b8eef1.png">

_Preview of DogFacts Section showing data returned from API_

<img width="941" alt="Data returned from the Dog Facts API" src="https://user-images.githubusercontent.com/18706156/225752374-0882d0ec-966b-4074-a49d-d18ffc17d8b9.png">

_Data returned from the Dog Facts API being called elsewhere_

## Creating the Section

If we make an HTTP request to the Dog Fact API, we will see that it returns a
JSON in the following format:

> Open in your browser: https://dogapi.dog/api/facts?number=1

```json
{
  "facts": [
    "The Labrador is so popular, in 2006 there were approximately 3-5 times more Labs as there were German Shepherds or Golden Retrievers."
  ],
  "success": true
}
```

Note that the only thing we care about is the "facts" property. Therefore, we
will create a section that is prepared to receive these facts and render them in
any way we want.

To do this, we will create a type called DogFact that contains only one property
called fact, which is the string represented by the message.

Let's see this in action by creating a new section:

1. Create the DogFacts.tsx section in the sections/ folder of your project.
2. Paste the following code:

```tsx
export interface DogFact {
  fact: string;
}

export interface Props {
  title: string;
  dogFacts: string[];
}

export default function DogFacts({ title, dogFacts }: Props) {
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

> At this point, we can run `deno task start` and check in our admin that this
> component can already be used with static data, which doesn't make much sense
> for our use case.

## Creating the Loader and testing the Section

Loaders allow you to define how data is fetched and transformed before it is
passed on to a Section. They are **regular Typescript functions** that can use
_async_ functions like `fetch`. Loaders can be "plugged" into a Section via one
the Section's `props`, and that happens based on the **return type of the
Loader**.

1. Define what will be the input `Props` of your loader.
2. Export a function called `loader` in the same file as your Section.

```ts
import type { LoaderContext } from "$live/types.ts";
import type { SectionProps } from "$live/mod.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
  numberOfFacts?: number;
}

export async function loader(
  _req: Request,
  { state: { $live: { numberOfFacts, title } } }: LoaderContext<Props>,
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

3. Run `deno task start` if you haven't already done so.
4. Assuming that `deno task start` is running, go to `https://deco.cx/admin` and
   select your Site.
5. Make sure that `localhost:8000` is selected in the Environment Selector in
   the upper right corner of the Admin.
6. Go to `Library` and search for DogFacts in the left sidebar.
7. Configure the props of the selected Loader (numberOfFacts) with a desired
   number (e.g., 4).

Now, let's see it working hooking it up with a Section.

<img width="1510" alt="Library showing the DogFacts Section rendering data fetched from the API" src="https://user-images.githubusercontent.com/5839364/230696322-33137a3f-052b-416b-880a-19fcbf091908.png">

_Library showing the DogFacts Section rendering data fetched from the API_

> It's also possible to create a new `prop` loaded from a new loader in an
> existing Section.

**That's it!** Now you've built a Section that displays data fetched from an
external API using a Loader, making it all configurable by business users as
desired. We recommend exporting filters and sort options in Loader's `props` to
make it more reusable in _deco.cx_'s Admin.

## Further reading

Loaders are powerful components for handling dynamic data and solve most of the
requirements when dealing with data coming from APIs. The deco.cx platform
solves a myriad of other use cases related to dynamic data that we can use,
check the following links to understand how to use them.

- [Props Loader](/docs/en/tutorials/props-loader)
- [Universal Components](/docs/en/tutorials/universal-components)
- [Core Concepts: Loaders](/docs/en/concepts/loader)
