import type { ImageWidget } from "apps/admin/widgets.ts";
import { ComponentChildren, Fragment } from "preact";
import { BlogPost } from "apps/blog/types.ts";

export interface CTA {
  text?: string;
}

/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Props {
  cta?: CTA;
  posts?: BlogPost[] | null;
  pagination?: {
    /**
     * @title First page
     * @description Leave it as 0 to start from the first page
     */
    page?: number;
    /** @title items per page */
    perPage?: number;
  };
}

function Container({ children }: { children: ComponentChildren }) {
  return (
    <div class="container lg:mx-auto lg:pb-14 lg:pt-0 mx-2 py-12 text-sm">
      <div class="space-y-8">{children}</div>
    </div>
  );
}

export default function GlossaryPostList({
  posts,
  pagination: {
    page = 0,
    perPage = 6,
  } = {},
}: Props) {
  const from = perPage * page;
  const to = perPage * (page + 1);

  const ContainerComponent = page === 0 ? Container : Fragment;
  const usedFirstLetters = new Set();

  posts?.sort((a, b) => {
    const titleA = a?.title?.toLowerCase().trim();
    const titleB = b?.title?.toLowerCase().trim();
    return titleA?.localeCompare(titleB);
  });

  posts?.forEach((post) => {
    const title = post?.title;
    const firstLetter = title?.charAt(0)?.toUpperCase();
    if (/[A-Za-z]/.test(firstLetter)) {
      usedFirstLetters.add(firstLetter);
    }
  });

  function getFirstLetter(title: string) {
    return title?.charAt(0)?.toUpperCase();
  }

  let currentLetter = "";
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <section class="bg-black flex justify-center mb-20">
      <ContainerComponent>
        <div class="bg-black">
          <div class="hidden md:flex justify-center mb-16">
            {alphabet.map((letter) => {
              const isUsed = Array.from(usedFirstLetters).includes(letter);
              return (
                <a
                  class={`h-10 w-10 flex justify-center items-center ${
                    isUsed
                      ? "font-bold text-white hover:text-[#02F67C]"
                      : "text-[#9499AD] cursor-default"
                  }`}
                  href={isUsed ? `#${letter}` : undefined}
                >
                  {letter}
                </a>
              );
            })}
          </div>

          <div class="flex gap-10">
            <div class="flex-col hidden md:flex min-w-[240px]">
              <a href="/glossary" class="text-[#02F67C] hover:font-semibold">
                All glossary terms
              </a>
              {posts?.slice(from, to).map((post) => {
                const title = post?.title;
                const letter = getFirstLetter(title?.trim());
                if (letter !== currentLetter) {
                  currentLetter = letter;
                  return (
                    <div key={title} class="flex flex-col">
                      <div class="w-10 h-[1px] bg-white my-4"></div>
                      <a
                        href={`/glossary/${post?.slug}`}
                        class=" overflow-hidden  text-white hover:text-[#02F67C]"
                      >
                        {title}
                      </a>
                    </div>
                  );
                } else {
                  return (
                    <a
                      key={title}
                      href={`/glossary/${post?.slug}`}
                      class="overflow-hidden  text-white hover:text-[#02F67C]"
                    >
                      {title}
                    </a>
                  );
                }
              })}
            </div>
            <div class="gap-8 grid grid-cols-1 w-full">
              {posts?.slice(from, to).map((post) => {
                const title = post?.title;
                const letter = getFirstLetter(title?.trim());
                if (letter !== currentLetter) {
                  currentLetter = letter;
                  return (
                    <>
                      {title && (
                        <div key={title} class="max-w-[640px] w-full">
                          <div class="flex flex-col gap-2 mb-6">
                            <span
                              id={currentLetter?.toUpperCase()}
                              class="text-[#02F67C]"
                            >
                              {letter}
                            </span>
                            <div class="w-full h-[1px] bg-[#02F67C]"></div>
                          </div>
                          <a
                            href={`/glossary/${post?.slug}`}
                            class=" overflow-hidden"
                          >
                            <div class="p-6 space-y-4 bg-[#FFFFFF0D] border border-[#FFFFFF26] rounded-[20px]">
                              <div class="space-y-2">
                                <h3 class="text-2xl font-bold text-white">
                                  {title}
                                </h3>
                                <p class="text-white">{post?.excerpt}</p>
                              </div>
                              <div class="flex flex-wrap gap-2">
                                <span class="text-white">Read more</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      )}
                    </>
                  );
                } else {
                  return (
                    <>
                      {title && (
                        <a
                          key={title}
                          href={`/glossary/${post?.slug}`}
                          class="overflow-hidden max-w-[608px] w-full bg-[#FFFFFF0D] border border-[#FFFFFF26] rounded-[20px]"
                        >
                          <div class="p-6 space-y-4">
                            <div class="space-y-2">
                              <h3 class="text-2xl font-bold text-white">
                                {title}
                              </h3>
                              <p class="text-white">{post?.excerpt}</p>
                            </div>
                            <div class="flex flex-wrap gap-2">
                              <span class="text-white">Read more</span>
                            </div>
                          </div>
                        </a>
                      )}
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
}
