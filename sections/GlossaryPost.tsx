import { BlogPost } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";

interface Props {
  /**
   * @description The description of name.
   */
  slug: RequestURLParam;
  posts?: BlogPost[] | null;
}

const PARAGRAPH_STYLES = "[&_p]:leading-[150%] [&_*]:mb-4 text-white";
const HEADING_STYLES =
  "[&>h1]:text-4xl [&>h1]:my-6 [&>h1]:font-bold [&>h2]:text-3xl [&>h2]:my-6 [&>h2]:font-bold [&>h2]:text-[#02F67C] [&>h1]:text-2xl [&>h1]:text-[#02F67C] [&>h1]:my-6 [&>h1]:font-bold [&>h4]:text-xl [&>h4]:my-6 [&>h4]:font-bold [&>h5]:text-lg [&>h5]:my-6 [&>h5]:font-bold [&>h6]:text-white [&>h6]:my-6 [&>h6]:font-bold";
const CODE_BLOCK_STYLES =
  "[&>pre]:bg-gray-100 [&>pre]:text-white [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:border [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>code]:block [&>code]:w-full";
const IMAGE_STYLES = "[&_img]:rounded-2xl [&_img]:w-full [&_img]:my-12";
const BLOCKQUOTE_STYLES =
  "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-black [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:pl-6";

const CONTENT_STYLES =
  ` ${PARAGRAPH_STYLES} ${HEADING_STYLES} ${CODE_BLOCK_STYLES} ${IMAGE_STYLES} ${BLOCKQUOTE_STYLES}`;

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

function SocialIcons() {
  return (
    <div class="flex gap-2">
      <a href="https://www.linkedin.com/company/deco-cx/" target="_blank">
        <div class="bg-gray-200 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6ZM3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM8 7C8.55228 7 9 7.44772 9 8V8.01C9 8.56228 8.55228 9.01 8 9.01C7.44772 9.01 7 8.56228 7 8.01V8C7 7.44772 7.44772 7 8 7ZM8 10C8.55228 10 9 10.4477 9 11V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V11C7 10.4477 7.44772 10 8 10ZM11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13C13 12.7348 13.1054 12.4804 13.2929 12.2929C13.4804 12.1054 13.7348 12 14 12C14.2652 12 14.5196 12.1054 14.7071 12.2929C14.8946 12.4804 15 12.7348 15 13V16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16V13C17 12.2043 16.6839 11.4413 16.1213 10.8787C15.5587 10.3161 14.7957 10 14 10C13.5483 10 13.1071 10.1019 12.7071 10.2929C12.5261 10.1119 12.2761 10 12 10C11.4477 10 11 10.4477 11 11V16Z"
              fill="#0D1717"
            />
          </svg>
        </div>
      </a>
      <a href="https://x.com/deco_frontend" target="_blank">
        <div class="bg-gray-200 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.2813 3.88046C19.3669 3.85681 19.4509 3.8338 19.5335 3.81116C20.2553 3.61344 20.8714 3.44467 21.5242 3.12947C21.7013 3.03362 21.9083 2.99044 22.1213 3.01648C22.6229 3.0778 23 3.50373 23 4.00909V4.01009C23 4.10197 22.9874 4.19193 22.9635 4.2779C22.7709 5.02901 22.2634 6.06107 21.8657 6.84155C21.7631 7.04312 21.6686 7.22587 21.582 7.39343C21.483 7.58491 21.3943 7.75655 21.3153 7.91374C21.257 8.02973 21.2129 8.12045 21.1819 8.1879C21.1741 9.48974 20.995 10.7851 20.6491 12.0407L20.6477 12.0455C19.4202 16.4152 16.2063 19.3464 12.313 20.4774L12.3128 20.4774C8.87678 21.4749 4.99799 20.773 1.52141 18.8781C1.11361 18.6559 0.91252 18.1821 1.03594 17.7344C1.15935 17.2866 1.57479 16.9828 2.03887 17.0008C3.44489 17.0556 4.69398 16.7025 5.9483 16.0587C4.65004 15.2564 3.71756 14.3214 3.07823 13.3113C2.19609 11.9176 1.91892 10.455 1.93178 9.15259C1.94456 7.85791 2.24326 6.70513 2.53085 5.88597C2.67562 5.47361 2.82025 5.13826 2.93053 4.9026C2.98576 4.78458 3.03263 4.69102 3.06695 4.62473C3.08411 4.59156 3.09816 4.56517 3.10858 4.54591L3.12143 4.52237L3.12569 4.51468L3.12726 4.51187L3.12791 4.51072C3.12819 4.51022 3.12845 4.50975 3.99998 5.00009L3.12845 4.50975C3.29607 4.21183 3.60425 4.02017 3.94558 4.00157C4.28691 3.98298 4.61409 4.14002 4.81308 4.41797C6.29883 6.49324 8.4944 7.76334 10.9997 7.97267C10.9882 5.8674 12.3126 4.05929 14.2693 3.32659C15.8935 2.7184 17.816 2.64792 19.2813 3.88046ZM4.30038 6.90635C4.10567 7.54242 3.94001 8.32911 3.93168 9.17234C3.92179 10.1741 4.13325 11.2385 4.76818 12.2417C5.40167 13.2426 6.50369 14.2569 8.39961 15.0834C8.73506 15.2297 8.96383 15.5474 8.99609 15.9119C9.02834 16.2765 8.85892 16.6295 8.55437 16.8323C7.60269 17.4663 6.62142 18.0205 5.56919 18.4106C7.72345 19.0399 9.8591 19.1071 11.755 18.5568M4.30038 6.90635C6.31387 8.94807 9.03713 10.0762 12.0255 9.99976C12.5677 9.9859 13 9.54242 13 9.00009V8.00009H13.0001L12.9999 7.98638C12.983 6.7552 13.7461 5.65812 14.9707 5.19959C16.3613 4.67887 17.5142 4.83127 18.2516 5.66332C18.5089 5.95368 18.9109 6.06901 19.283 5.9592C19.4912 5.89775 19.7105 5.83793 19.9378 5.77588C20.024 5.75235 20.1114 5.72851 20.1998 5.70413C20.1615 5.78038 20.1228 5.85696 20.0837 5.93363C19.995 6.10782 19.9024 6.28699 19.8143 6.45757C19.7077 6.66411 19.6075 6.85806 19.5285 7.01532C19.4538 7.16372 19.3839 7.307 19.331 7.42756C19.305 7.48688 19.2761 7.55664 19.2519 7.62764C19.2515 7.62887 19.251 7.63027 19.2505 7.63184C19.2362 7.67356 19.1809 7.83466 19.182 8.02763C19.1885 9.20312 19.0336 10.3739 18.7215 11.5073C17.6905 15.1741 15.0209 17.608 11.7552 18.5567"
              fill="#0D1717"
            />
          </svg>
        </div>
      </a>
      <a href="https://www.instagram.com/deco.cx/" target="_blank">
        <div class="rounded-full bg-gray-200 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.7574 3.75736C11.8826 2.63214 13.4087 2 15 2H18C18.5523 2 19 2.44772 19 3V7C19 7.55228 18.5523 8 18 8H15V9H18C18.3079 9 18.5987 9.14187 18.7882 9.38459C18.9777 9.6273 19.0448 9.94379 18.9701 10.2425L17.9701 14.2425C17.8589 14.6877 17.4589 15 17 15H15V21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21V15H7C6.44772 15 6 14.5523 6 14V10C6 9.44771 6.44772 9 7 9H9V8C9 6.4087 9.63214 4.88258 10.7574 3.75736ZM15 4C13.9391 4 12.9217 4.42143 12.1716 5.17157C11.4214 5.92172 11 6.93913 11 8V10C11 10.5523 10.5523 11 10 11H8V13H10C10.5523 13 11 13.4477 11 14V20H13V14C13 13.4477 13.4477 13 14 13H16.2192L16.7192 11H14C13.4477 11 13 10.5523 13 10V8C13 7.46957 13.2107 6.96086 13.5858 6.58579C13.9609 6.21071 14.4696 6 15 6H17V4H15Z"
              fill="#0D1717"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default function GlossaryPost({ slug, posts }: Props) {
  const post = posts?.find((p) => p?.slug === slug);

  posts?.sort((a, b) => {
    const titleA = a?.title?.toLowerCase().trim();
    const titleB = b?.title?.toLowerCase().trim();
    return titleA?.localeCompare(titleB);
  });

  const { title, image, content, excerpt } = post || DEFAULT_PROPS;

  let currentLetter = "";

  function getFirstLetter(title: string) {
    return title?.charAt(0).toUpperCase();
  }

  return (
    <div class="flex gap-10 w-full container mx-auto px-4 md:px-0 py-24 lg:py-0  lg:pb-28 lg:mt-44 justify-center">
      <div class="flex-col hidden md:flex min-w-[240px]">
        <a href="/glossary" class="text-white hover:text-[#02F67C]">
          All glossary terms
        </a>
        {posts?.map((post) => {
          const currentTitle = post?.title;
          const letter = getFirstLetter(currentTitle?.trim());
          if (letter !== currentLetter) {
            currentLetter = letter;
            return (
              <div key={currentTitle} class="flex flex-col">
                <div class="w-10 h-[1px] bg-white my-4"></div>
                <a
                  href={`/glossary/${post?.slug}`}
                  class={` overflow-hidden  ${
                    title === currentTitle ? "text-[#02F67C]" : "text-white"
                  } hover:text-[#02F67C]`}
                >
                  {currentTitle}
                </a>
              </div>
            );
          } else {
            return (
              <a
                key={currentTitle}
                href={`/glossary/${post?.slug}`}
                class={`overflow-hidden hover:text-[#02F67C] ${
                  title === currentTitle ? "text-[#02F67C]" : "text-white"
                }`}
              >
                {currentTitle}
              </a>
            );
          }
        })}
      </div>
      <div className="w-full flex flex-col gap-20 container mx-auto px-4 md:px-0 lg:max-w-2xl lg:mx-0">
        <div className="w-full flex flex-col gap-12 items-center justify-center">
          <h1 className="text-5xl font-bold text-[#02f67c]">{title}</h1>
          <p class="text-white text-xl text-center">{excerpt}</p>
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
        >
        </div>
        <div class="flex flex-col gap-10  w-full ">
          <div class="space-y-4">
            <p class="text-lg font-bold text-white">
              Follow us on social media
            </p>
            <div class="flex flex-col gap-8 md:flex-row justify-between">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
