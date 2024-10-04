import { Head } from "$fresh/runtime.ts";
import { LoaderReturnType } from "$live/types.ts";
import { MDFileContent } from "site/components/ui/Types.tsx";
import MarkdownContent from "site/sections/MarkdownContent.tsx";
import { type Section } from "@deco/deco/blocks";
/** @title {{{path}}} */
export interface CustomizableContent {
  path: string;
  content?: Section[];
}
export interface Props {
  data: LoaderReturnType<MDFileContent>;
  customizable?: CustomizableContent[];
}
interface SectionProps extends Props {
  url: string;
}
export const loader = (props: Props, req: Request): SectionProps => {
  return {
    ...props,
    url: req.url,
  };
};
export default function CustomizableMarkdownContent(props: SectionProps) {
  let matchCustom = undefined;
  if (props.customizable) {
    matchCustom = [...props.customizable].sort((x, y) => {
      const dirs = y.path.split("/").length - x.path.split("/").length;
      if (dirs != 0) {
        return dirs;
      }
      return y.path.length - x.path.length;
    }).find((x) => props.url.endsWith(x.path));
  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href={`/docs.css`} />
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
      {matchCustom?.content
        ? matchCustom.content.map((c) => (
          <c.Component {...c.props} mdContent={props.data} />
        ))
        : <MarkdownContent data={{ ...props.data }} />}
    </>
  );
}
