import { Post } from "site/components/utils/Blog.ts";
import FeaturedPost from "site/components/blog/FeaturedPost.tsx";

export default function HeroPost(post: Post) {
  return <FeaturedPost {...post} />;
}
