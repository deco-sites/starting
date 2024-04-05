import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

/** @title {{{title}}} - {{{href}}} */

export interface Props {
  Banner?: {
    bannerHero?: DecoImage;
    bannerHeroMobile?: DecoImage;
    titleImg?: string;
  };
  headline?: string;
  headlineSubtitle?: string;
  ctaButtons?: {
    titleGreenButton?: string;
    hrefGreenButton?: string;
    titleWhiteButton?: string;
    hrefWhiteButton?: string;
  };
}

export default function Hero({
  Banner = {
    bannerHero: "",
    bannerHeroMobile: "",
    titleImg: "Escolha uma Imagem",
  },
  headline = "Live Projects",
  headlineSubtitle =
    "Com mais de 100 implementações bem-sucedidas só no Brasil, a deco.cx é a plataforma de Frontend que você precisa para levar seu site ao próximo nível. Seja B2B ou B2C, nossa solução é comprovada no mercado para oferecer uma experiência de compra excepcional!",
  ctaButtons = {
    titleGreenButton: "Agende uma demo",
    hrefGreenButton: "",
    titleWhiteButton: "Customer Stories",
    hrefWhiteButton: "",
  },
}: Props) {
  return (
    <section class="bg-[#010101]">
    <div className="flex items-center mx-8 py-12 md:mx-auto md:px-14 md:py-16 lg:px-16 gap-16 lg:py-20 lg:max-w-[1440px] xl:px-16 !pt-[115px] lg:!pt-[150px]">
      <div class="flex flex-col gap-8 items-start justify-between self-sttretch font-albert-sans lg:gap-8 xl:gap-12 md:flex-row lg:container lg:max-w-[1440px] text-xl md:text-base">
        <div class="flex flex-col gap-8 md:gap-12 md:w-[100%] md:max-w-[481px] lg:w-[44.2%] items-start">
          <div className="flex flex-col w-full gap-8 md:gap-6">
              <h1 class="text-white font-semibold text-[56px] leading-[46px] tracking-[-0.56px] md:text-5xl xl:text-[5rem] xl:leading-[80px] md:tracking-[-3%]">
              {headline}
            </h1>
            <h2 class="text-[#A1A1AA] font-normal text-[22px] md:text-[18px] lg:text-[1.5rem] leading-[1.8rem]">
              {headlineSubtitle}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-6">
            <a
              href={ctaButtons.hrefGreenButton}
              aria-label={ctaButtons.titleGreenButton}
              class="flex text-[1.25rem] bg-[#02F67C] py-4 px-6 h-[53px] font-medium text-[#113032] rounded-full items-center justify-center text-center hover:opacity-75"
            >
              {ctaButtons.titleGreenButton}
            </a>
            <a
              href={ctaButtons.hrefWhiteButton}
              aria-label={ctaButtons.titleWhiteButton}
              class="flex text-[1.25rem] bg-[#113032] py-4 px-6 h-[53px] font-medium text-white rounded-full items-center justify-center text-center hover:opacity-75"
            >
              {ctaButtons.titleWhiteButton}
            </a>
          </div>
        </div>
        <div class="flex relative w-full md:w-[100%] lg:max-w-[640px] lg:w-[48.7%] h-full rounded-[4px]">
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
          dangerouslySetInnerHTML={{ __html: `body{background-color: white;}` }}
        >
        </style>
      </div>
    </div>
    </section>
  );
}
