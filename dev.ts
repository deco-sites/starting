import { build } from "@deco/dev/tailwind";
await build();

import "https://deno.land/x/dotenv@v3.2.2/load.ts";

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

// Generate manifest and boot server
await dev(import.meta.url, "./main.ts", config);

if (Deno.args.includes("build")) {
  Deno.exit(0);
}
