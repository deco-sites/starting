---
description: Developing an App
since: 1.24.0
---

# Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Deno](https://deno.land/)

## Step 1: Initializing the deco App

To kickstart your deco App development, run the following command in your
terminal:

```bash
deno run -A -r https://deco.cx/init
```

This command will initialize a new deco App project in your current directory.
Choose a meaningful name for your app when prompted.

## Step 2: Navigate to Your deco App Directory

After the initialization is complete, navigate to your deco App directory using
the following command:

```bash
cd $YOUR_APP_NAME
```

Replace `$YOUR_APP_NAME` with the name you chose for your deco App during
initialization.

## Step 3: Understanding the `mod.ts` File

Now, let's take a look at the `mod.ts` file in your deco App:

```ts
import manifest from "./manifest.gen.ts";
import type { Manifest } from "./manifest.gen.ts";
import type { App, AppContext as AC } from "deco/mod.ts";

export interface State {
  url: string;
}
export type MyApp = App<Manifest, State>;
export default function App(
  state: State,
): MyApp {
  return {
    manifest,
    state,
  };
}

export type AppContext = AC<MyApp>;
```

The `mod.ts` file is the heart of your deco App and is written by the developer.
In this file, you import the automatically generated `manifest` and define the
`State` interface, which represents the properties of your app. This is useful,
for instance, to get API Keys for an specific services or to allow the user to
manage global settings for the app.

The `App` function is exported and takes the `state` object as an argument,
representing the state of your app. It then returns an object containing the
`manifest` and the defined `state`. This function is crucial for your app to
work correctly.

Lastly, the `AppContext` type is exported, representing the context of your app
and allowing access to the properties defined in `mod.ts`.

## Step 4: Developing Your deco App

Now that you understand the basic structure of your deco App, you can start
developing it. Feel free to add more components, such as sections, actions,
workflows, or handlers, to enhance the functionality of your app.

## Step 5: Building Your deco App

To see your deco App in action, run the following command:

```bash
deno task start
```

<img width="466" alt="image" src="https://github.com/site/assets/5839364/a0dfa130-91e0-4542-84e6-29d4539c7cff">

This command will start your app and automatically generate the necessary files
to make the app usable by any deco site.

## Conclusion

Congratulations! You have successfully created and developed your own deco App.
You've learned about the `mod.ts` file, the heart of your app, which allows you
to define the `manifest` and `state` of your app. Deco Apps provide a powerful
way to bundle and share business capabilities, making it easier to maintain and
scale your deco projects. Enjoy coding and feel free to explore more deco
features to further enhance your apps! 🚀

## Further Reading

- [Making an App Installable](/docs/en/developing/making-an-app-installable)
