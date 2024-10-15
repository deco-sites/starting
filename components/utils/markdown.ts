// Copied from https://github.com/denoland/fresh/blob/744a10e5911df38bff779686c86ca10fb4589dfe/www/utils/markdown.ts

export * as gfm from "jsr:@deno/gfm@0.9.0";

// Add support for TypeScript, Bash, and Rust.
import "npm:prismjs@1.29.0/components/prism-diff.js";
import "npm:prismjs@1.29.0/components/prism-jsx.js";
import "npm:prismjs@1.29.0/components/prism-tsx.js";
import "npm:prismjs@1.29.0/components/prism-typescript.js";

export { extract as frontMatter } from "std/front_matter/any.ts";
