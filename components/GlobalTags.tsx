import { asset, Head } from "$fresh/runtime.ts";

export default function GlobalTags() {
  return (
    <Head>
      <link href={asset("/tailwind.css")} rel="stylesheet" />
      {/* Plausible Analytics */}
      <script
        defer
        data-domain="deco.cx"
        data-api="https://plausible.io/api/event"
        src={asset("/plausible_script.js")}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
                body {
                    overflow-x: hidden;
                }
                /* latin */
                @font-face {
                    font-family: 'Albert Sans';
                    font-style: swap;
                    font-weight: 400;
                    font-display: display;
                    src: url(${
            asset("/fonts/font_albert.woff2")
          }) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin */
                @font-face {
                    font-family: 'Albert Sans';
                    font-style: swap;
                    font-weight: 500;
                    font-display: display;
                    src: url(${
            asset("/fonts/font_albert.woff2")
          }) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin */
                @font-face {
                    font-family: 'Albert Sans';
                    font-style: swap;
                    font-weight: 600;
                    font-display: display;
                    src: url(${
            asset("/fonts/font_albert.woff2")
          }) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin */
                @font-face {
                    font-family: 'Albert Sans';
                    font-style: swap;
                    font-weight: 700;
                    font-display: display;
                    src: url(${
            asset("/fonts/font_albert.woff2")
          }) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
            `,
        }}
      >
      </style>
    </Head>
  );
}
