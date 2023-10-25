import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Info {
  title: string;
  icon: DecoImage;
}

export interface Props {
  bannerHero?: DecoImage;
  bannerHeroMobile?: DecoImage;
  titleImg?: string;
  headline?: string;
  headlineSubtitle?: string;
  infos?: Array<Info>;
  titleButtonCTA?: string;
  hrefButtonCTA?: string;
  titleButtonCTA2?: string;
  hrefButtonCTA2?: string;
}

export default function Hero({
  bannerHero = "",
  bannerHeroMobile = "",
  titleImg = "Escolha uma Imagem",
  headline = "Live Projects",
  headlineSubtitle =
    "Com mais de 100 implementações bem-sucedidas só no Brasil, a deco.cx é a plataforma de Frontend que você precisa para levar seu site ao próximo nível. Seja B2B ou B2C, nossa solução é comprovada no mercado para oferecer uma experiência de compra excepcional!",

  infos = [
    { title: "20 de Setembro de 2023", "icon": "/callendar.svg" },
    { title: "14h BRT", "icon": "/clock.svg" },
    { title: "200 lugares", "icon": "/capacity.svg" },
  ],

  titleButtonCTA = "Agende uma demo", 
  hrefButtonCTA = "",
  titleButtonCTA2 = "Customer Stories", 
  hrefButtonCTA2 = "",

}: Props) {
  return (
    <div className="flex items-center mx-8 py-10 md:mx-auto md:px-14 md:py-16 lg:px-16 gap-16 lg:py-20 lg:max-w-[1440px] xl:px-16">
      <div class="flex flex-col-reverse items-start justify-between self-sttretch font-albert-sans md:gap-4 lg:gap-6 xl:gap-12 md:flex-row lg:container lg:max-w-[1440px] text-xl md:text-base">
        <div class="flex flex-col gap-12 md:w-[46%] lg:max-w-[580px] items-start">
          <div className="flex flex-col w-full gap-6">
            <h1 class="text-h1-color font-bold text-3xl lg:text-5xl xl:text-6.5xl xl:leading-[105px] tracking-[-0.64px]">
              {headline}
            </h1>
            <h2 class="text-h2-color font-normal opacity-60 text-xl/9 lg:text-2xl xl:text-[22px] xl:leading-7">
              {headlineSubtitle}
            </h2>
          </div>
          <div className="flex flex-col w-full gap-4">
            <a
              href={hrefButtonCTA}
              aria-label={titleButtonCTA}
              class="hidden md:flex text-[16px] bg-[#02F67C] py-4 px-6 w-full h-[53px] font-medium text-h2-color rounded-[4px] items-center justify-center text-center hover:opacity-75"
            >
              {titleButtonCTA}
            </a>
            <a
              href={hrefButtonCTA2}
              aria-label={titleButtonCTA2}
              class="hidden md:flex text-[16px] py-4 px-6 w-full h-[53px] font-medium text-h2-color rounded-[4px] items-center justify-center text-center hover:opacity-75 border-[1px] border-black"
            >
              {titleButtonCTA2}
            </a>
          </div>
        </div>
        <div class="flex relative lg:w-full md:w-[50%] md:max-w-[640px] h-full bg-[#D9D9D9] rounded-[4px]">
          <div className="hidden md:flex pb-8 lg:w-full aspect-[16/11] md:pb-0 md:h-full">
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet={bannerHeroMobile}
                className="rounded-[20px]"
              />
              <img
                className="lg:h-full md:h-full lg:w-full rounded-[20px]"
                alt={titleImg}
                src={bannerHero}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
