import { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";
import {
  PostBody,
  PostList,
} from "deco-sites/starting/components/utils/Blog.ts";

export type Props = {
  list: PostList;
  slug: RequestURLParam;
};

const blogPostMarkdownLoader = ({ list, slug }: Props): PostBody => {
  const post = list.posts.find((post) => post.path === slug);
  return { data: post?.content || "" };
};

export default blogPostMarkdownLoader;
