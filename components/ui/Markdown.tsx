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
  const body = marky(post.data, transformedParsers);
  return (
    <div
      class="markdown-body prose max-w-none text-[#F9FAFB] tracking-[-0.16px]"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
