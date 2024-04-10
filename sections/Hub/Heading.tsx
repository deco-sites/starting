import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

/** @title {{{title}}} - {{{href}}} */

export interface Props {
  Banner?: {
    bannerHero?: DecoImage;
    bannerHeroMobile?: DecoImage;
    titleImg?: string;
  };
  /**
   * @format html
   */
  headline?: string;
  headlineSubtitle?: string;
}

const DEFAULT_TITLE =
  "<p class=''><span style='background: var(--gradient-1, linear-gradient(93deg, #02F67C 44.7%, #3FB67B 118.6%)); background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;' class=''>High-performance</span> ecommerce resources.</p>";

export default function Hero({
  Banner = {
    bannerHero: "",
    bannerHeroMobile: "",
    titleImg: "Escolha uma Imagem",
  },
  headline = DEFAULT_TITLE,
  headlineSubtitle =
    "Connect to any platform or third party service, deploy in one click.",
}: Props) {
  return (
    <section class="bg-[#010101]">
      <div className="flex items-center mx-8 py-12 md:mx-auto md:px-14 md:py-16 lg:px-16 gap-16 lg:py-20 lg:max-w-[1440px] xl:px-16 !pt-[115px] lg:!pt-[150px]">
        <div class="flex flex-col gap-8 items-center justify-between self-sttretch font-albert-sans lg:gap-8 xl:gap-12 md:flex-row lg:container lg:max-w-[1440px] text-xl md:text-base">
          <div class="flex flex-col gap-8 md:gap-12 md:w-[100%] md:max-w-[481px] lg:w-[44.2%] items-start">
            <div className="flex flex-col w-full gap-8 md:gap-6">
              <h1
                class="text-white font-medium text-[56px] leading-[46px] tracking-[-0.56px] md:text-5xl xl:text-[5rem] xl:leading-[80px] md:tracking-[-2.4px]"
                dangerouslySetInnerHTML={{ __html: headline }}
              />
              <h2 class="text-[#A1A1AA] font-normal text-[22px] md:text-[18px] lg:text-[1.5rem] leading-[2.25rem] text-[#A1A1AA]">
                {headlineSubtitle}
              </h2>
            </div>
          </div>
          <div class="flex relative w-full lg:max-w-[751px] h-full rounded-[4px] lg:px-10 lg:py-6">
            <div className="flex md:w-full md:pb-0 md:h-full shadow-md">
              <picture preload="true">
                <source
                  media="(max-width: 760px)"
                  srcSet={Banner.bannerHeroMobile}
                  className="rounded-[4px]"
                />
                <img
                  className="md:h-full md:w-full rounded-[4px] object-cover"
                  alt={Banner.titleImg}
                  src={Banner.bannerHero}
                />
              </picture>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: `body{background-color: white;}`,
            }}
          >
          </style>
        </div>
      </div>
    </section>
  );
}
