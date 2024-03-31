import { LoaderReturnType } from "deco/types.ts";
import {
  getBlogPath,
  PostList,
  SupportedLocales,
} from "site/components/utils/Blog.ts";
import { BlogPostCard } from "site/components/blog/PostCard.tsx";
import FeaturedPost from "site/components/blog/FeaturedPost.tsx";

export type Props = {
  postList: LoaderReturnType<PostList>;
  locale?: SupportedLocales;
};

export default function MarkdownContainer(props: Props) {
  const postsList = props.postList;
  const highlightPost = postsList.posts[0];
  const normalPosts = postsList.posts.filter(
    (post) => postsList.posts.indexOf(post) != 0,
  );

  return (
    <section class="pt-24 md:pt-40 px-8 lg:px-16 mx-auto container bg-black">
      <FeaturedPost
        {...highlightPost}
        path={getBlogPath(highlightPost.path, props.locale)}
        locale={props.locale}
      />
      <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-y-20 lg:gap-x-11 py-20">
        {normalPosts.map((post) => (
          <BlogPostCard
            {...post}
            path={getBlogPath(post.path, props.locale)}
            locale={props.locale}
          />
        ))}
        <style
          dangerouslySetInnerHTML={{ __html: `body{background-color: white;}` }}
        >
        </style>
      </div>
    </section>
  );
}
