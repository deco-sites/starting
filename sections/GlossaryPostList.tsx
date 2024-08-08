import type { ImageWidget } from "apps/admin/widgets.ts";
import { BlogPost } from "apps/blog/types.ts";
import Icon from "site/components/ui/Icon.tsx";

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
}

function GlossaryItem({ title, link }: { title: string; link: string }) {
  return (
    <a
      href={link}
      class="flex items-center justify-between w-full md:w-60 py-2 px-4 gap-2 text-[#C9CFCF] hover:text-[#02F67C] hover:bg-[#0D171790] rounded-lg transition duration-300"
    >
      <span class="text-lg">{title}</span>
      <Icon id="right-arrow" size={12} />
    </a>
  );
}

export default function GlossaryPostList({ posts }: Props) {
  posts?.sort((a, b) => {
    const titleA = a?.title?.toLowerCase().trim();
    const titleB = b?.title?.toLowerCase().trim();
    return titleA?.localeCompare(titleB);
  });

  function getFirstLetter(title: string) {
    return title?.charAt(0)?.toUpperCase();
  }

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  ); // Create list of characters

  const filteredPosts = Object.fromEntries(
    alphabet.map((char) => [
      char,
      posts?.filter((post) => getFirstLetter(post?.title) === char),
    ])
  );

  return (
    <section class="bg-black flex justify-center mb-20">
      <div class="flex flex-col bg-black items-center w-full px-2">
        <div class="flex overflow-scroll hidden-scroll mb-16 max-w-full w-fit">
          {alphabet.map((letter) => {
            return (
              <a
                class={`min-h-9 min-w-9 flex justify-center font-bold border border-transparent items-center transition duration-300 ${
                  filteredPosts[letter]?.length
                    ? "font-bold text-white hover:border-[#02F67C40] hover:bg-[#02F67C30] rounded-lg"
                    : "text-[#9499AD] cursor-default"
                }`}
                href={filteredPosts[letter]?.length ? `#${letter}` : undefined}
              >
                {letter}
              </a>
            );
          })}
        </div>
        <div class="flex flex-col gap-8 w-full max-w-[900px]">
          {Object.entries(filteredPosts)
            .filter(([, postList]) => postList && postList.length > 0)
            .map(([char, currentPosts]) => (
              <div class="flex flex-col md:flex-row gap-2">
                <h2
                  id={char}
                  class="grow font-bold text-6xl p-2 pt-12 text-white"
                >
                  {char}
                </h2>
                <div class="grid gap-4 grid-cols-1 md:grid-cols-2 w-full md:w-fit">
                  {currentPosts?.map((post) => (
                    <GlossaryItem
                      title={post?.title}
                      link={`/glossary/${post?.slug}`}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
