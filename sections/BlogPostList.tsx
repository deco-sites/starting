import { LoaderReturnType } from "$live/types.ts";
import {
  getBlogPath,
  PostList,
} from "deco-sites/starting/components/utils/Blog.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HeroPost from "../sections/HeroPost.tsx";

export type Props = {
  postList: LoaderReturnType<PostList>;
};

export default function MarkdownContainer(props: Props) {
  const postsList = props.postList;
  const highlightPost = postsList.posts[0];
  const normalPosts = postsList.posts.filter((post) =>
    postsList.posts.indexOf(post) != 0
  );

  return (
    <section class="pt-24 md:pt-40 px-5 mx-auto container">
      {/* <HeroPost /> */}
      <HeroPost
        title={highlightPost.title}
        description={highlightPost.descr}
        date={highlightPost.date}
        readTime={highlightPost.readTime} // You need to calculate or get this value from your data
        authorName={highlightPost.author}
        authorAvatar={highlightPost.authorAvatar}
        blogThumbnail={highlightPost.img}
        blogLink={getBlogPath(highlightPost.path)}
      />

      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {normalPosts.map((post) => (
          <a
            href={getBlogPath(post.path)}
            class="group mx-auto md:hover:scale-105 duration-200"
          >
            <div class="w-full text-deco-dark-green mb-10 sm:mb-20">
              <Image
                src={post.img}
                sizes="(max-width: 432px) 100vw, 50vw"
                width={432}
                height={344}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                preload
              />
              <div class="mt-6 flex flex-col gap-2">
                <h1 class="text-3xl leading-[1.18]">
                  {post.title}
                </h1>
                <div class="text-xl leading-[1.5] text-[#66736C]">
                  {post.descr}
                </div>
                <div class="leading-[1.8] text-[#66736C]">
                  <span class="mr-5">{post.date}</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
