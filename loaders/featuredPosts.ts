import {
  getBlogPath,
  Post,
  PostList,
} from "deco-sites/starting/components/utils/Blog.ts";
import { PathObj } from "deco-sites/starting/sections/BlogPostHeader.tsx";

export type Props = {
  postList: PostList;
  page: PathObj;
  maxPosts?: number;
};

/**
 * @title Featured Posts
 */
const loader = ({ postList, page, maxPosts }: Props): Post[] => {
  const { posts } = postList;
  const { url } = page;

  const locale = url.split("/")[1];
  const post = posts.find((x) => getBlogPath(x.path, locale) === url);

  if (post) {
    const tags = post.tags || [];
    posts.sort(
      (a, b) => countMatchingTags(b, tags) - countMatchingTags(a, tags),
    );
  }

  return maxPosts ? posts.slice(0, maxPosts) : posts;
};

/**
 * Count the number of matching tags in an array.
 */
function countMatchingTags(post: Post, tagsToMatch: string[]): number {
  const postTags = post.tags || [];
  return postTags.filter((tag) => tagsToMatch.includes(tag)).length;
}

export default loader;
