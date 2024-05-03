import { Head } from "$fresh/runtime.ts";
import { LoaderReturnType } from "deco/types.ts";
import { MDFileContent } from "site/components/ui/Types.tsx";

import { frontMatter, gfm } from "site/components/utils/markdown.ts";

interface FrontMatterContent {
  body: string;
  attrs: Record<string, unknown>;
}

interface MDContent {
  content: FrontMatterContent;
}

function getTitle(content: string): string | undefined {
  return content.split("\n").find((x) => x.startsWith("# "))?.trim();
}

export default function DocsPage(
  props: { data: LoaderReturnType<MDFileContent> },
) {
  let description;
  const frontMatterContent = frontMatter(props.data.content);
  const { body, attrs } = frontMatterContent;
  if (attrs?.description) {
    description = String(attrs.description);
  }
  return (
    <>
      <Head>
        <title>
          {props.data.title
            ? `${props.data.title} | deco.cx docs`
            : "deco.cx docs"}
        </title>
        <link rel="stylesheet" href={`/gfm.css`} />
        {description && <meta name="description" content={description} />}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* latin-ext */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/albertsans/v1/i7dOIFdwYjGaAMFtZd_QA1ZVYFeQGQyUV3U.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/albertsans/v1/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/albertsans/v1/i7dOIFdwYjGaAMFtZd_QA1ZVYFeQGQyUV3U.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/albertsans/v1/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
      `,
          }}
        >
        </style>
      </Head>
      <div class="flex flex-col min-h-screen">
        <div class="flex-1 flex flex-col gap-6 px-4">
          {props.data.title && (
            <h1 class="text-white text-[40px] font-semibold leading-[48px]">
              {props.data.title}
            </h1>
          )}
          <div class="max-w-full lg:max-w-screen-lg flex gap-6">
            <Content content={frontMatterContent} />
          </div>
        </div>
      </div>
    </>
  );
}

function Content(props: MDContent) {
  const { body, attrs } = props.content;
  const _html = gfm.render(body, { allowIframes: true });
  const html = _html.replaceAll(
    /( href="https:\/\/(?!www.deco)).*?/g,
    ' target="_blank"$1',
  );

  return (
    <main class="py-2 overflow-hidden">
      {attrs.since && (
        <span class="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-2 rounded dark:bg-[#FFFFFF14] dark:text-[#02F67C]">
          Version: {attrs.since}
        </span>
      )}
      <div
        data-color-mode="dark" data-light-theme="light" data-dark-theme="dark"
        class="mt-8 markdown-body !text-[#F9FAFB] !bg-base-700"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
