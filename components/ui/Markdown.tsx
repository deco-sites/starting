import { marky } from "https://deno.land/x/marky@v1.1.6/mod.ts";
import defaultParsers from "https://deno.land/x/marky@v1.1.6/parsers.ts";
import { LoaderReturnType } from "deco/types.ts";
import { PostBody } from "../utils/Blog.ts";

export type Props = {
  post: LoaderReturnType<PostBody>;
};

export function linkAndImage(block: string): string {
  const matches = block.match(/\[(.*?)\]\((.*?)\)/g);

  if (matches) {
    for (const match of matches) {
      const isImage = block[block.indexOf(match) - 1] === "!";
      const label = match.substring(match.indexOf("[") + 1, match.indexOf("]"));
      const href = match.substring(match.indexOf("(") + 1, match.indexOf(")"));

      if (isImage) {
        const urlDeco = `/live/invoke/deco-sites/std/loaders/x/image.ts?src=${
          encodeURIComponent(href)
        }&fit=contain&width=1080 720w, /live/invoke/deco-sites/std/loaders/x/image.ts?src=${
          encodeURIComponent(href)
        }&fit=contain&width=2160 1440w`;
        block = block.replace(
          "!" + match,
          `<img src="${href}" alt="${label}" decoding="async" loading="lazy" srcset=${urlDeco}">`,
        );
      } else {
        block = block.replace(match, `<a href="${href}">${label}</a>`);
      }
    }
  }

  return block;
}

export default function Markdown({ post }: Props) {
  const transformedParsers = [];
  for (const { matcher, renderers } of defaultParsers) {
    transformedParsers.push({
      matcher,
      renderers: renderers.map((render) => {
        if (render.name === "linkAndImage") {
          return linkAndImage;
        }
        return render;
      }),
    });
  }
  let body = marky(post.data, transformedParsers);
  body = body.replace(/<h2/g, '<h2 class="text-[#F9FAFB] my-8"');
  body = body.replace(/<h3/g, '<h3 class="text-[#F9FAFB]"');
  body = body.replace(/<h4/g, '<h4 class="text-[#F9FAFB]"');
  body = body.replace(/<hr/g, '<hr class="border border-[#FFFFFF26]"');
  body = body.replace(
    /<code/g,
    '<code class="text-[#F9FAFB] bg-[#FFFFFF0D] backdrop-filter backdrop-blur-24 py-0.5"',
  );
  body = body.replace(
    /<pre/g,
    '<pre class="border-2 border-[#FFFFFF26] bg-[#FFFFFF0D] rounded backdrop-filter backdrop-blur-24 p-4"',
  );
  body = body.replace(/<ul/g, '<ul class="marker:text-green-500"');

  return (
    <div
      class="markdown-body prose max-w-none text-[#F9FAFB] tracking-[-0.16px]"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
