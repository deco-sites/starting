import { asset, Head } from "$fresh/runtime.ts";
import { Context } from "@deco/deco";
export const STYLE_PATH = "/styles.css";
export const FONT_ARGENT = "/fonts/ArgentPixelCF-Regular.woff2";
export const FONT_ALBERT = "/fonts/font_albert.woff2";
export const getStyleSrc = async () => {
  const revision = await Context.active().release?.revision();
  return asset(`${STYLE_PATH}?revision=${revision}`);
};
export default function GlobalTags() {
  const fontAlbertHref = asset(FONT_ALBERT);
  const fontArgentHref = asset(FONT_ARGENT);
  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
                body {
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                }
                @font-face {
                  font-family: 'argent-pixel';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url(${fontArgentHref}) format('woff2');
                }
                /* latin */
                @font-face {
                    font-family: 'Albert Sans';
                    font-style: swap;
                    font-weight: 400;
                    font-display: swap;
                    src: url(${fontAlbertHref}) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin */
                @font-face {
                    font-family: 'Albert Sans';
                    font-style: swap;
                    font-weight: 500;
                    font-display: swap;
                    src: url(${fontAlbertHref}) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin */
                @font-face {
                    font-family: 'Albert Sans';
                    font-style: swap;
                    font-weight: 600;
                    font-display: swap;
                    src: url(${fontAlbertHref}) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin */
                @font-face {
                    font-family: 'Albert Sans';
                    font-style: swap;
                    font-weight: 700;
                    font-display: swap;
                    src: url(${fontAlbertHref}) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }

                .hero-container {
                  perspective: 1000px;
                  position: relative;
                }

                .hero-inner {
                  transform-style: preserve-3d;
                  transform-origin: top center;
                  z-index: 1;
                }

                .item {
                  opacity: 0;
                  transform: translateY(100px);
                }

                .grecaptcha-badge {
                  z-index: 10 !important;
                }                
            `,
          }}
        >
        </style>
      </Head>
    </>
  );
}
