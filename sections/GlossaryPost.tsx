import { BlogPost } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import GlossaryItem from "site/components/Glossary/GlossaryItem.tsx";

/**
 * @title {{{text}}}
 */
export interface CTA {
  icon: AvailableIcons;
  text: string;
  link: string;
}

/**
 * @title {{{title}}}
 */
export interface Disclaimer {
  title: string;
  /**
   * @format rich-text
   */
  subtitle?: string;
}

interface Props {
  /**
   * @description The description of name.
   */
  slug: RequestURLParam;
  posts?: BlogPost[] | null;
  CTA: CTA;
  disclaimer?: Disclaimer;
}

const PARAGRAPH_STYLES = "[&_p]:leading-[150%] [&_*]:mb-4 text-white";
const HEADING_STYLES =
  "[&>h1]:text-4xl [&>h1]:my-6 [&>h1]:font-bold [&>h2]:text-3xl [&>h2]:my-6 [&>h2]:font-bold [&>h1]:text-2xl [&>h1]:my-6 [&>h1]:font-bold [&>h4]:text-xl [&>h4]:my-6 [&>h4]:font-bold [&>h5]:text-lg [&>h5]:my-6 [&>h5]:font-bold [&>h6]:text-white [&>h6]:my-6 [&>h6]:font-bold";
const CODE_BLOCK_STYLES =
  "[&>pre]:bg-gray-100 [&>pre]:text-white [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:border [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>code]:block [&>code]:w-full";
const IMAGE_STYLES = "[&_img]:rounded-2xl [&_img]:w-full [&_img]:my-12";
const BLOCKQUOTE_STYLES =
  "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-black [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:pl-6";

const CONTENT_STYLES = ` ${PARAGRAPH_STYLES} ${HEADING_STYLES} ${CODE_BLOCK_STYLES} ${IMAGE_STYLES} ${BLOCKQUOTE_STYLES}`;

const DEFAULT_AVATAR =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e";

const DEFAULT_PROPS: BlogPost = {
  title: "Blog title heading will go here",
  excerpt: "Excerpt goes here",
  authors: [
    {
      name: "Full name",
      email: "author@deco.cx",
      avatar: DEFAULT_AVATAR,
    },
  ],
  categories: [],
  date: "2022-01-01",
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  slug: "blog-post",
  content:
    '<h1>Heading 1</h1><p>This is a paragraph under <strong>Heading 1</strong>. It can contain <em>italic</em> text, <strong>bold</strong> text, and even <code>code snippets</code>.</p><h2>Introduction</h2><p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p><p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p><h2>Heading 2</h2><p>More text can be placed here. This section is under <strong>Heading 2</strong>.</p><h3>Heading 3 with Code Block</h3><p>This is an example of a code block:</p><pre><code>// This is a code block console.log("Hello, World!");</code></pre><h4>Heading 4 with Image</h4><p>Below is an image:</p><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9" alt="Description of Image"><p><strong>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</strong></p><p>Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.</p><blockquote>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</blockquote><p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.<h2>Conclusion</h2><p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p><p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p><p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>',
};

export function NextPost({
  type,
  title,
  href,
}: {
  type: "prev" | "next";
  title?: string | null;
  href?: string | null;
}) {
  const styles = {
    prev: {
      container: "md:flex-row items-start",
      icon: "rotate-180",
      info: undefined,
    },
    next: {
      container: "md:flex-row-reverse items-end",
      icon: undefined,
      info: "items-end",
    },
  };

  return (
    <a
      href={`/glossary/${href}`}
      class={`group flex gap-2 md:gap-6 flex-col-reverse ${styles[type].container} md:items-center`}
    >
      <div class="p-4 rounded-lg text-white border border-[#162121] group-hover:border-[#FFFFFF40] bg-[#0D1717] transition duration-300">
        <Icon id="ArrowRight" size={16} class={`${styles[type].icon}`} />
      </div>
      <div class={`flex flex-col gap-1 text-white ${styles[type].info}`}>
        <span class="text-sm opacity-50">Next</span>
        <span class="font-medium">{title}</span>
      </div>
    </a>
  );
}

export default function GlossaryPost({ slug, posts, CTA, disclaimer }: Props) {
  const post = posts?.find((p) => p?.slug === slug);

  posts = posts?.filter((post) => post?.title);
  posts?.sort((a, b) => {
    const titleA = a?.title?.toLowerCase().trim();
    const titleB = b?.title?.toLowerCase().trim();
    return titleA?.localeCompare(titleB);
  });

  const { title, image, content, excerpt } = post || DEFAULT_PROPS;

  function getFirstLetter(title: string) {
    return title?.charAt(0).toUpperCase();
  }

  let nextLetterIndex = 0;
  posts?.forEach((post, index) => {
    if (getFirstLetter(post?.title) !== getFirstLetter(title)) return;

    if (
      index + 1 !== posts.length &&
      posts[index + 1] &&
      posts[index + 1].title
    ) {
      nextLetterIndex = index + 1;
    }
  });

  let nextPost = 0;
  posts?.forEach((post, index) => {
    if (post.title !== title) return;

    if (index !== posts.length - 1 && posts[index + 1].title) {
      nextPost = index + 1;
    }
  });

  let prevPost = 0;
  posts?.forEach((post, index) => {
    if (post.title !== title) return;

    if (index === 0) {
      prevPost = posts.length - 1;
    } else {
      prevPost = index - 1;
    }
  });

  return (
    <div class="flex flex-col gap-16 w-full container pt-36 pb-16 justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <a
          href={CTA.link}
          class="flex gap-2 items-center font-medium text-[#02F67C] hover:scale-105 transition duration-300"
        >
          <Icon id={CTA.icon} size={20} class="rotate-180" />
          <span>{CTA.text}</span>
        </a>
        <h1 className="text-5xl text-white font-[argent-pixel]">{title}</h1>
      </div>
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-4 justify-center">
        <div class="flex flex-col gap-1 mx-4 md:mx-2 min-w-[240px]">
          {posts
            ?.filter(
              (post) => getFirstLetter(post?.title) === getFirstLetter(title)
            )
            .map((post) => (
              <GlossaryItem
                title={post.title}
                disabled={post.title === title}
                link={`/glossary/${post.slug}`}
              />
            ))}
          <a
            class="flex justify-between w-full py-2 px-4 font-medium text-white hover:text-[#02F67C] border border-[#162121] bg-[#0D1717] rounded-lg transition duration-300"
            href={`/glossary/${posts && posts[nextLetterIndex].slug}`}
          >
            <span>
              Go to letter{" "}
              {posts && getFirstLetter(posts[nextLetterIndex].slug)}
            </span>
            <Icon id="ArrowRight" size={20} />
          </a>
        </div>
        <div className="w-full flex flex-col gap-8 container mx-auto px-4 md:px-0 lg:max-w-2xl lg:mx-0">
          <div class="pl-1 bg-[#02F67C] rounded-lg">
            <p class="text-white bg-[#0D1717] p-6 rounded-lg text-xl">
              {excerpt}
            </p>
          </div>
          {image && (
            <Image
              className="w-full object-cover aspect-video max-h-[600px] rounded-2xl"
              width={1066}
              src={image || ""}
            />
          )}
          <div
            class={CONTENT_STYLES}
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>

          <div class="flex flex-col gap-2 w-full border border-[#162121] bg-[#0D1717] rounded-xl text-white font-semibold p-6">
            <span class="text-xl">{disclaimer?.title}</span>
            {disclaimer?.subtitle && (
              <div
                class="text-sm opacity-60"
                dangerouslySetInnerHTML={{ __html: disclaimer?.subtitle }}
              />
            )}
          </div>
          <div class="flex justify-between w-full">
            <NextPost
              type="prev"
              title={posts && posts[prevPost].title}
              href={posts && posts[prevPost].slug}
            />
            <NextPost
              type="next"
              title={posts && posts[nextPost].title}
              href={posts && posts[nextPost].slug}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
