// Copied from https://github.com/denoland/fresh/blob/744a10e5911df38bff779686c86ca10fb4589dfe/www/utils/markdown.ts

export * as gfm from "https://deno.land/x/gfm@0.6.0/mod.ts";
import "https://esm.sh/prismjs@1.27.0/components/prism-jsx.js?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-typescript.js?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-tsx.js?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-diff.js?no-check";

export { extract as frontMatter } from "std/front_matter/any.ts";
