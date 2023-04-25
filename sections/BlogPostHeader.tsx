import { LoaderReturnType } from "$live/types.ts";
import {
  getBlogPath,
  PostList,
} from "deco-sites/starting/components/utils/Blog.ts";

export type PathObj = {
  url: string;
};

export type PropNull = {
  ignoreProp?: string;
};

export type Props = {
  postList: LoaderReturnType<PostList>;
  page: LoaderReturnType<PathObj>;
};

export default function BlogPostHeader(props: Props) {
  const url = props.page.url;
  const postsList = props.postList;
  const post = postsList.posts.filter((x) => getBlogPath(x.path) === url)[0];

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <section class="max-w-4xl w-full px-8 md:px-0 mx-auto pt-16">
      <div class="mb-8 sm:mb-11 mt-10 sm:mt-16">
        <a
          class="group flex items-center cursor-pointer text-subdued"
          href="/pt/blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span class="ml-4 group-hover:underline">
            Voltar para o blog
          </span>
        </a>
      </div>
      <div class="w-full flex flex-col gap-4">
        <h1 class="text-5xl text-5xl leading-[1.1">
          {post.title}
        </h1>
        <div class="text-3xl leading-[1.18] text-[#66736C]">
          {post.descr}
        </div>
        <div class="text-[#66736C]">
          <span class="mr-5">{post.date}</span>
          <span>{post.author}</span>
        </div>
      </div>
    </section>
  );
}
