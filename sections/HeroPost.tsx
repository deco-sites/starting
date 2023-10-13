import { Post } from "deco-sites/starting/components/utils/Blog.ts";
import FeaturedPost from "deco-sites/starting/components/blog/FeaturedPost.tsx";

export default function HeroPost(post: Post) {
  return <FeaturedPost {...post} />;
}
