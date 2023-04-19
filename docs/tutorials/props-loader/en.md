---
description: Learn how to use the props loader to better separate data fetching from passing through props
since: 1.0.0
---

## Suggested reading

- [Tech Stack](/docs/en/introduction/tech-stack)
- [Core Concepts: Sections](/docs/en/concepts/section)
- [Loading data from APIs](/docs/en/tutorials/data-fetching)

Loaders are used to add dynamism to sections by providing them data from APIs.
To do this, the loader needs to receive both properties that serve to fetch and
"passing" properties. Passing properties are properties that the loader receives
but that actually just make a direct "pass" to the component, without any use by
the loader itself.

Let's take the loader below as an example:

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

Note that the `title` property is a passing property, being only passed on to
the `DogFacts` component.

In this tutorial, we will learn how to create a loader only for selected fields
and make the passing properties opaque to the loader, allowing for better
separation between data loading and passing of properties.

## Using the props loader

The `live.ts` allows our loader function to have two main formats:

1. A function that loads all properties of the desired Section.
2. A properties map that has a function for each property type.

Let's do a simple refact from the previous component using the `PropsLoader`,
for that, first we will create a new function called dogFacts that will only
return our `DogFacts[]`.

```ts
export interface LoadProps {
  title: string;
  numberOfFacts?: number;
}

async function dogFacts(
  _req: Request,
  { state: { $live: { numberOfFacts } } }: LoaderContext<LoadProps>,
): Promise<string[]> {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return facts;
}
```

Note that, even though we are receiving `title` as a parameter, we are not using
it. Now, let's:

1. Import `PropsLoader` from $live.
2. change our `loader` function to be a map that contains the property we want
   to load

```ts
import { PropsLoader } from "$live/mod.ts";
import type { LoaderContext } from "$live/types.ts";

// Props type that will be configured in deco.cx's Admin
export interface LoadProps {
  title: string;
  numberOfFacts?: number;
}

async function dogFacts(
  _req: Request,
  { state: { $live: { numberOfFacts } } }: LoaderContext<LoadProps>,
): Promise<string[]> {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return facts;
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

export const loader: PropsLoader<
  Props,
  LoadProps
> = {
  dogFacts,
};
```

> The `PropsLoader<SectionProps, LoaderProps>` always has the signature in this
> format where the first parameter is the SectionProps and the second is the
> LoaderProps.

There you go! Now our section receives the same properties that were defined in
our LoadProps without losing the ability to dynamically load data!

## Further reading

Now that we can separate our property loading from our pass-through properties,
how about creating a universal component? Read more about it in the links below.

- [Universal Components](/docs/en/tutorials/universal-components)
- [Core Concepts: Loaders](/docs/en/concepts/loader)
