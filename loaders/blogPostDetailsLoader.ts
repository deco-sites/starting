import {
  getBlogPath,
  Post,
  PostList,
} from "site/components/utils/Blog.ts";
import { PathObj } from "site/sections/BlogPostHeader.tsx";

export type Props = {
  postList: PostList;
  page: PathObj;
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
