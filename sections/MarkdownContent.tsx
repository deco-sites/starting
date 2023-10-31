import { Head } from "$fresh/runtime.ts";
import { LoaderReturnType } from "deco/types.ts";
import { MDFileContent } from "deco-sites/starting/components/ui/Types.tsx";

import {
  frontMatter,
  gfm,
} from "deco-sites/starting/components/utils/markdown.ts";

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
        <div class="flex-1">
          <div class="mx-auto max-w-screen-lg px-4 flex gap-6">
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
    <main class="py-6 overflow-hidden">
      {attrs.since && (
        <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Version: {attrs.since}
        </span>
      )}
      <div
        class="mt-6 markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
