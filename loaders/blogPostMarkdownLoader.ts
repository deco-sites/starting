import { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import {
  PostBody,
  PostList,
} from "deco-sites/starting/components/utils/Blog.ts";

export type Props = {
  list: PostList;
  slug: RequestURLParam;
};

const blogPostMarkdownLoader = (
  { list, slug }: Props,
  req: Request,
): PostBody => {
  const url = new URL(req.url);
  const locale = url.pathname.split("/")[1] as "pt" | "en";

  const post = list.posts.find((post) => post.path === slug);
  return { data: post?.body[locale]?.content || "" };
};

export default blogPostMarkdownLoader;
