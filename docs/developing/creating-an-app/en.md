---
description: Developing an App
since: 1.24.0
---

# Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Deno](https://deno.land/)

## Step 1: Initializing the Deco App

To kickstart your Deco App development, run the following command in your terminal:

```bash
deno run -A -r https://deco.cx/init
```

This command will initialize a new Deco App project in your current directory. Choose a meaningful name for your app when prompted.

## Step 2: Navigate to Your Deco App Directory

After the initialization is complete, navigate to your Deco App directory using the following command:

```bash
cd $YOUR_APP_NAME
```

Replace `$YOUR_APP_NAME` with the name you chose for your Deco App during initialization.

## Step 3: Understanding the `mod.ts` File

Now, let's take a look at the `mod.ts` file in your Deco App:

```ts
import manifest, { name } from "./manifest.gen.ts";
import type { Manifest } from "./manifest.gen.ts";
export { name };
import type { App, AppContext as AC } from "../deps.ts";

export interface State {
  url: string;
}
export default function App(
  state: State,
): App<Manifest, State> {
  return {
    manifest,
    state,
  };
}

export type AppContext = AC<ReturnType<typeof App>>;
```

The `mod.ts` file is the heart of your Deco App and is written by the developer. In this file, you import the automatically generated `manifest` and define the `State` interface, which represents the properties of your app.
This is useful, for instance, to get API Keys for an specific services or to allow the user to manage global settings for the app.

The `App` function is exported and takes the `state` object as an argument, representing the state of your app. It then returns an object containing the `manifest` and the defined `state`. This function is crucial for your app to work correctly.

Lastly, the `AppContext` type is exported, representing the context of your app and allowing access to the properties defined in `mod.ts`.

## Step 4: Developing Your Deco App

Now that you understand the basic structure of your Deco App, you can start developing it. Feel free to add more components, such as sections, actions, workflows, or handlers, to enhance the functionality of your app.

## Step 5: Building Your Deco App

To see your Deco App in action, run the following command:

```bash
deno task start
```

This command will start your app and automatically generate the necessary files to make the app usable by any Deco site.

## Conclusion

Congratulations! You have successfully created and developed your own Deco App. You've learned about the `mod.ts` file, the heart of your app, which allows you to define the `manifest` and `state` of your app. Deco Apps provide a powerful way to bundle and share business capabilities, making it easier to maintain and scale your Deco projects. Enjoy coding and feel free to explore more Deco features to further enhance your apps! 🚀

## Further Reading

- [Making an App Installable](/docs/en/developing/installing-an-app)
