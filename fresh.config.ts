import { defineConfig } from "$fresh/server.ts";
import { plugins } from "deco/plugins/deco.ts";
import decoManifest from "./manifest.gen.ts";

export default defineConfig({
  plugins: [
    ...plugins({
      manifest: decoManifest,
    }),
  ],
});
