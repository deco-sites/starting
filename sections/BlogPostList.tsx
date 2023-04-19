import { LoaderReturnType } from "$live/types.ts";
import {
  getBlogPath,
  PostList,
} from "deco-sites/starting/components/utils/Blog.ts";
import Image from "deco-sites/std/components/Image.tsx";

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
    <section class="pt-40 lg:max-w-[894px] mx-auto">
      <div>
        <a
          href={getBlogPath(highlightPost.path)}
          class="group w-full"
        >
          <div class="text-deco-dark-green mb-10 sm:mb-20">
            <Image
              src={highlightPost.img}
              sizes="(max-width: 894px) 100vw, 50vw"
              width={894}
              height={502}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              preload
            />
            <div class="mt-6 flex flex-col gap-4">
              <h1 class="text-5xl leading-[1.1]">
                {highlightPost.title}
              </h1>
              <div class="text-3xl leading-[1.18] text-[#66736C]">
                {highlightPost.descr}
              </div>
              <div class="text-xl leading-[1.5] text-[#66736C]">
                <span class="mr-5">{highlightPost.date}</span>
                <span>{highlightPost.author}</span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {normalPosts.map((post) => (
          <a href={getBlogPath(post.path)} class="group mx-auto">
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
