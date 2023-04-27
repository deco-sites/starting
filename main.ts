/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import manifest from "deco-sites/starting/live.gen.ts";
import { start } from "$fresh/server.ts";
import prefetchPlugin from "prefetch";
import partytownPlugin from "partytown/mod.ts";
import { $live } from "$live/mod.ts";
import site from "./site.json" assert { type: "json" };

await start($live(manifest, site), {
  plugins: [
    prefetchPlugin(),
    partytownPlugin(),
  ],
});
