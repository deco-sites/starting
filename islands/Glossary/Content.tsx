import { Head } from "$fresh/runtime.ts";
import hljs from "hightlight.js";
import { useEffect, useRef } from "preact/hooks";

const PARAGRAPH_STYLES = "[&_p]:leading-[150%] [&_*]:mb-4 text-[#cdcdcd]";
const HEADING_STYLES =
  "[&>h1]:text-white [&>h1]:text-4xl [&>h1]:my-6 [&>h1]:font-bold [&>h2]:text-white [&>h2]:text-3xl [&>h2]:my-6 [&>h2]:font-bold [&>h1]:text-2xl [&>h1]:my-6 [&>h1]:font-bold [&>h3]:text-white [&>h3]:text-2xl [&>h3]:font-bold [&>h4]:text-xl [&>h4]:text-white [&>h4]:my-6 [&>h4]:font-bold [&>h5]:text-lg [&>h5]:text-white [&>h5]:my-6 [&>h5]:font-bold [&>h6]:text-white [&>h6]:my-6 [&>h6]:font-bold";
const CODE_BLOCK_STYLES =
  "[&>pre]:bg-gray-100 [&>pre]:text-white [&_code]:mb-0 [&>pre]:text-wrap [&>code]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:border-2 [&>pre]:border-[#ffffff26] [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>pre]:bg-transparent [&>code]:block [&>code]:w-full";
const IMAGE_STYLES = "[&_img]:rounded-2xl [&_img]:w-full [&_img]:my-12";
const BLOCKQUOTE_STYLES =
  "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-black [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:pl-6";

const CONTENT_STYLES = `code-container ${PARAGRAPH_STYLES} ${HEADING_STYLES} ${CODE_BLOCK_STYLES} ${IMAGE_STYLES} ${BLOCKQUOTE_STYLES}`;

export default function Content({ content }: { content: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = content;

      container.current.querySelectorAll("pre code").forEach((block) => {
        return hljs.highlightBlock(block);
      });
    }
  }, [content, container]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/highlight.js@11.8.0/styles/github-dark-dimmed.min.css"
        />
      </Head>
      <div
        class={CONTENT_STYLES}
        ref={container}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </>
  );
}
