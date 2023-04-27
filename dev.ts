#!/usr/bin/env -S deno run -A --watch=static/
import dev from "$live/dev.ts";
import liveManifest from "$live/live.gen.ts";
import liveStdManifest from "deco-sites/std/live.gen.ts";
import tailwindCSS from "deco-sites/std/tailwindv3.ts";
import tailwindConfig from "deco-sites/starting/tailwind.config.ts";
import typography from "npm:@tailwindcss/typography@0.5.9";

await tailwindCSS({ ...tailwindConfig, plugins: [typography] });

await dev(import.meta.url, "./main.ts", {
  imports: {
    "$live": liveManifest,
    "deco-sites/std": liveStdManifest,
  },
});
