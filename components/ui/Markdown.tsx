import { marky } from "https://deno.land/x/marky@v1.1.6/mod.ts";
import { LoaderReturnType } from "$live/types.ts";
import { PostBody } from "../utils/Blog.ts";

export type Props = {
  post: LoaderReturnType<PostBody>;
};

export default function Markdown({ post }: Props) {
  const body = marky(post.data);
  console.log('oi', body)
  return (
    <div
      class="markdown-body prose max-w-none"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
