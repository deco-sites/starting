import { PostList } from "deco-sites/starting/components/utils/Blog.ts";

export type Props = {
  list: PostList;
};

/**
 * @title Inline Post List Loader
 */
const loader = ({ list }: Props): PostList => list;

export default loader;
