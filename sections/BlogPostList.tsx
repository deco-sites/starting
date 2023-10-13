import { LoaderReturnType } from "$live/types.ts";
import { PostList } from "deco-sites/starting/components/utils/Blog.ts";
import { BlogPostCard } from "deco-sites/starting/components/blog/PostCard.tsx";
import FeaturedPost from "deco-sites/starting/components/blog/FeaturedPost.tsx";

export type Props = {
  postList: LoaderReturnType<PostList>;
};

export default function MarkdownContainer(props: Props) {
  const postsList = props.postList;
  const highlightPost = postsList.posts[0];
  const normalPosts = postsList.posts.filter(
    (post) => postsList.posts.indexOf(post) != 0,
  );

  return (
    <section class="pt-24 md:pt-40 px-5 mx-auto container">
      <FeaturedPost {...highlightPost} />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-16 border-t py-16">
        {normalPosts.map((post) => <BlogPostCard {...post} />)}
      </div>
    </section>
  );
}
