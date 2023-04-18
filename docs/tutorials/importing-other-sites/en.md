---
description: Learn how to import Sections and Loaders from other deco.cx's Sites
---

As an agency or team that is responsible multiple sites, you're likely always on
the lookout for ways to streamline your website building process while still
delivering high-quality results. One way to achieve this is by **importing
[Sections](/docs/en/concepts/section) and [Loaders](/docs/en/concepts/loader)**
from other sites in your deco.cx projects. Not only can this save you time and
effort, but it can also allow you to offer more customized solutions to your
clients while still working efficiently.

The way this work is straight-forward: A deco.cx Site can depend on another Site
and **automatically have its Sections and Loaders available to be used.**

## How to import another site

The [Fashion starter](https://github.com/deco-sites/fashion) is an example of a
_deco.cx_'s Site that imports Sections and Loaders from other Site
(https://github.com/deco-sites/std). Let's use that as an example.

1. Make sure that the Site you want to import **is available on Github**.
   (_e.g_: `deco-sites/std`)
2. Open your Site's folder and go to `import_map.json`.
3. Add the following entry:
   `"deco-sites/std/": "https://denopkg.com/deco-sites/std@0.1.4/",`
4. Go to `dev.ts`, import the Site's manifest and pass it as a param to
   `imports` in the `dev` function call:

```ts
// Other imports ...

import decoStdManifest from "deco-sites/std/fresh.gen.ts";

await dev(import.meta.url, "./main.ts", {
  imports: {
    // Other imports ...
    "deco-sites/std": decoStdManifest,
  },
});
```

5. Run `deno task start` and go to _deco.cx_'s Admin.
6. **That's it!** Now you can use Sections and Loaders from `deco-sites/std` in
   your Site.

> You can check Fashion's `dev.ts` source code
> [here](https://github.com/deco-sites/fashion/blob/349f0a56c9e9a376c89d2ddf9c45d1513fb53112/dev.ts)

![Showing Imported Sections when adding new Section on deco](https://user-images.githubusercontent.com/18706156/225990468-74ce1f95-60e3-4b12-81d5-f7ab5a95a702.png)
_Imported Sections are now available to be added in Site's Pages_
