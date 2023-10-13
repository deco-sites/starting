import { LoaderReturnType } from "deco/mod.ts";
import {
  getBlogPath,
  Post,
  PostList,
} from "deco-sites/starting/components/utils/Blog.ts";
import { PathObj } from "deco-sites/starting/sections/BlogPostHeader.tsx";

export type Props = {
  postList: PostList;
  page: LoaderReturnType<PathObj>;
};

/**
 * @title Post Details Loader
 */
const loader = ({ postList, page }: Props): Post => {
  const { posts } = postList;
  const { url } = page;
  const locale = url.split("/")[1];

  const post = posts.find((x) => getBlogPath(x.path, locale) === url);

  if (!post) {
    throw new Error(`Post not found: ${url}`);
  }

  return post;
};

export default loader;
