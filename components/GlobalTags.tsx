import { asset, Head } from "$fresh/runtime.ts";
import { Context } from "deco/deco.ts";

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
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="deco.cx"
          data-api="https://plausible.io/api/event"
          src={asset("/plausible_script.js")}
        />

        {/* PostHog Script -> We are testing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        posthog.init('phc_29fV7pvGvR8pAeCQNB4mQK1qInVgsVzqILafrwurd39', {api_host: 'https://app.posthog.com'})
      `,
          }}
        >
        </script>

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
