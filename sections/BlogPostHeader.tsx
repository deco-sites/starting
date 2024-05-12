import { LoaderReturnType } from "deco/types.ts";
import {
  getBlogPath,
  PostList,
  SupportedLocales,
} from "site/components/utils/Blog.ts";

export type PathObj = {
  url: string;
};

export type PropNull = {
  ignoreProp?: string;
};

export type Props = {
  postList: LoaderReturnType<PostList>;
  page: LoaderReturnType<PathObj>;
  backToBlog?: string;
};

export default function BlogPostHeader(props: Props) {
  const url = props.page.url;
  const postsList = props.postList;
  const locale = url.split("/")[1] as SupportedLocales;
  const backToBlog = props.backToBlog || "Voltar para o blog";

  const post = postsList.posts.filter(
    (x) => getBlogPath(x.path, locale) === url,
  )[0];

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <section class="max-w-2xl w-full px-5 md:px-0 mx-auto pt-16">
      <div class="mb-8 sm:mb-11 mt-16">
        <a
          class="group flex items-center cursor-pointer text-[#F9FAFB]"
          href={`/${locale}/blog`}
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
          <span class="ml-4 group-hover:underline text-[#F9FAFB]">{backToBlog}</span>
        </a>
      </div>
      <div class="w-full flex flex-col gap-6">
        <h1 class="text-4xl md:text-5xl leading-[1.1] text-white font-semibold">
          {post.body[locale]?.title}
        </h1>
        <div class="text-2xl md:text-3xl leading-[1.18] text-white font-medium">
          {post.body[locale]?.descr}
        </div>
        <div class="flex text-white gap-2">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.author}</span>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{ __html: `body{background-color: black;}` }}
      >
      </style>
    </section>
  );
}
