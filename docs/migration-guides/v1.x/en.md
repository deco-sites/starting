---
description: |
   Migrate from live.ts v0.x to live.ts v1.x
---

## tl;dr;

Want to script the tutorial? Run the command below to automatically migrate your
site, and let us know if you find any issues!

```sh
deno run -A https://denopkg.com/deco-cx/live@1.0.0/scripts/upgrade.ts
```

Want to see some code? Check our fashion migration
[pull request](https://github.com/deco-sites/fashion/pull/123).

Stay up-to-date with all the details of this release by checking out our
[release announcement blog post](https://www.deco.cx/blog/live.ts-1.x.md).

If you're using live.ts v0.x and want to migrate to v1.x, here's what you need
to do:

# Upgrade live.ts version

Firstly, upgrade the live.ts version in your import_map.json file from 0.x to
1.x. You may also need to update the std package, which already uses live.ts
v1.x.

The diff should look something like this:

```diff
{
  "imports": {
    "$store/": "./",
-   "$live/": "https://deno.land/x/live@0.11.2/",
+   "$live/": "https://deno.land/x/live@1.x/",
-   "deco-sites/std/": "https://denopkg.com/deco-sites/std@0.2.1/",
+   "deco-sites/std/": "https://denopkg.com/deco-sites/std@1.x/",
    "partytown/": "https://deno.land/x/partytown@0.2.1/",
    "$fresh/": "https://deno.land/x/fresh@1.1.3/",
    "preact": "https://esm.sh/preact@10.11.0",
    "preact/": "https://esm.sh/preact@10.11.0/",
    "preact-render-to-string": "https://esm.sh/*preact-render-to-string@5.2.4",
    "@preact/signals": "https://esm.sh/*@preact/signals@1.0.3",
    "@preact/signals-core": "https://esm.sh/*@preact/signals-core@1.0.1",
    "twind": "https://esm.sh/v96/twind@0.16.17",
    "twind/": "https://esm.sh/v96/twind@0.16.17/",
    "std/": "https://deno.land/std@0.162.0/",
    "prefetch": "https://deno.land/x/prefetch@0.0.6/mod.ts"
  }
}
```

After updating the file, run deno task start to ensure that the dependencies are
installed. You may encounter errors, but they will be fixed in the next section.

```sh
deno task start
```

You should see some errors but don't worry they will be fixed soon in the next
section.

# Site JSON

Instead of defining the siteId inside the `./routes/_middleware.ts` file you
should create a new json in your root project directory named `site.json`, with
the following content:

```json
{
  "siteId": YOUR_SITE_ID
}
```

> Replace `YOUR_SITE_ID` with your siteId

# Change imports

Now that the live.ts version has been upgraded, change the imports to point to
the new `live.gen.ts` manifest instead of the old `fresh.gen.ts` manifest.

1. Remove the old `fresh.gen.ts` from your repository.
2. Use the new `live.gen.ts` in your main.ts

```diff
#!/usr/bin/env -S deno run -A --watch=static/
import dev from "$live/dev.ts";
-import liveManifest from "$live/fresh.gen.ts";
-import liveStdManifest from "deco-sites/std/fresh.gen.ts";
+import liveManifest from "$live/live.gen.ts";
+import liveStdManifest from "deco-sites/std/live.gen.ts";

await dev(import.meta.url, "./main.ts", {
  imports: {
    "$live": liveManifest,
    "deco-sites/std": liveStdManifest,
  },
});
```

Also,

1. change the importing reference in `main.ts` from `./fresh.gen.ts` to
   `./live.gen.ts`
2. add a new import `$live` from `$live/mod.ts` passing the manifest through it
3. import the `site.json` file and pass as a parameter to `$live` function.

```diff
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

-import manifest from "./fresh.gen.ts";
+import manifest from "./live.gen.ts";
+import { $live } from "$live/mod.ts";
import { start } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import prefetchPlugin from "prefetch";
import partytownPlugin from "partytown/mod.ts";
+import site from "./site.js" assert { type : "json" };

-await start(manifest, {
+await start($live(manifest, site), {
  plugins: [
    partytownPlugin(),
    prefetchPlugin(),
    twindPlugin({
      ...twindConfig,
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
    }),
  ],
});
```

Let's try it again,

```sh
deno task start
```

Notice that a new entry might be appeared in your `import_map.json` file that
maps to your repository to your local directory that's the `namespace` of your
package, we now have a new concept called package `namespace`. The package
`namespace` is nothing more than the name of the org+repo in the github. So for
example, the repository `deco-sites/fashion` has the same namespace as its
repository `deco-sites/fashion`.

> See our documentation for further details.

```diff
{
  "imports": {
+   "deco-sites/fashion/": "./",
    "$store/": "./",
    "$live/": "../live/",
    "deco-sites/std/": "https://denopkg.com/deco-sites/std@8eb7468440d77a1d8a32e71d81eb7f6ad976622a/",
    "partytown/": "https://deno.land/x/partytown@0.2.1/",
    "$fresh/": "https://deno.land/x/fresh@1.1.3/",
    "preact": "https://esm.sh/preact@10.11.0",
    "preact/": "https://esm.sh/preact@10.11.0/",
    "preact-render-to-string": "https://esm.sh/*preact-render-to-string@5.2.4",
    "@preact/signals": "https://esm.sh/*@preact/signals@1.0.3",
    "@preact/signals-core": "https://esm.sh/*@preact/signals-core@1.0.1",
    "twind": "https://esm.sh/v96/twind@0.16.17",
    "twind/": "https://esm.sh/v96/twind@0.16.17/",
    "std/": "https://deno.land/std@0.162.0/",
    "prefetch": "https://deno.land/x/prefetch@0.0.6/mod.ts"
  }
}
```

Going forward you should see errors related to importing files that doesn't
exist on the new version, so let's remove them out in the next section.

# Removing unnecessary routes

Our routes are now automatically added by the live.ts dev function, which means
that you can completely remove the `./routes/_middleware.ts` and the
`./routes/[...catchall].tsx`. Notice that the old `LivePage.tsx` is no longer
available to be used as it was before.

As you navigate through your code, you should notice a new `schemas.gen.json`
file that is being used instead of inside the manifest itself. Additionally, you
should receive a success message that reads as follows:

```
Watcher Process started.
The manifest has been generated.
Githooks setup successfully: pre-commit
Listening on http://localhost:8000/
```

Now that you've successfully implemented live.ts v1.x, we hope you enjoy its
features and functionalities. Please don't hesitate to contact us if you
experience any unexpected issues!
