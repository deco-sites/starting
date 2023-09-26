import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Info {
  title: string;
  icon: DecoImage;
}

export interface Button {
  title: string;
  href: string;
}

export interface Props {
  bannerHero?: DecoImage;
  bannerHeroMobile?: DecoImage;
  titleImg?: string;
  preHeadline?: string;
  headline?: string;
  headlineSubtitle?: string;
  infos?: Array<Info>;
  scrollButton?: Array<Button>;
}

export default function Hero({
  bannerHero = "",
  bannerHeroMobile = "",
  titleImg = "Escolha uma Imagem",
  preHeadline = "Webinar",
  headline = "Construa a sua landing page para a Black Friday em 5 minutos",
  headlineSubtitle =
    "Nesse webinar vamos te mostrar como é simples e rápido criar uma landing page +90 PageSpeed usando a deco.cx",

  infos = [
    { title: "20 de Setembro de 2023", "icon": "/callendar.svg" },
    { title: "14h BRT", "icon": "/clock.svg" },
    { title: "200 lugares", "icon": "/capacity.svg" },
  ],

  scrollButton = [
    { title: "Reserve seu lugar", "href": "#webinar_form" },
  ],
}: Props) {
  return (
    <div className="flex items-center mx-8 py-10 md:mx-auto md:px-14 md:py-16 lg:px-16 gap-16 lg:py-20 lg:max-w-[1440px] xl:px-16">
      <div class="flex flex-col-reverse items-start justify-between self-sttretch font-albert-sans md:gap-4 lg:gap-6 xl:gap-12 md:flex-row lg:container lg:max-w-[1440px] text-xl md:text-base">
        <div class="flex flex-col gap-8 md:w-[46%] lg:max-w-[561px] items-start">
          <div class="text-black opacity-60 leading-3">{preHeadline}</div>
          <h1 class="text-h1-color font-bold text-3xl lg:text-5xl xl:text-6.5xl leading-tight tracking-[-0.64px]">
            {headline}
          </h1>
          <h2 class="text-h2-color font-normal opacity-60 text-xl/9 lg:text-2xl xl:text-3.5xl leading-tight">
            {headlineSubtitle}
          </h2>
          {!!infos?.length && (
            <ul class="flex flex-col md:flex-col gap-2 md:gap-3">
              {infos.map(({ icon, title }) => (
                <li class="flex flex-row items-center gap-5">
                  <img
                    class="object-cover"
                    src={icon}
                    alt={title}
                  />
                  <p aria-label={title} class="align-middle">{title}</p>
                </li>
              ))}
            </ul>
          )}
          {scrollButton.map(({ href, title }) => (
            <a
              href={href}
              aria-label={title}
              class="hidden md:flex text-[16px] bg-[#02F67C] py-4 px-[22px] w-52 h-14 font-medium text-h2-color rounded-3xl items-center justify-center text-center gap-2 hover:opacity-75"
            >
              {title}
            </a>
          ))}
        </div>
        <div class="flex relative lg:w-full md:w-[50%] md:max-w-[583px] h-full">
          <div class="absolute w-[400px] top-[-21vh] left-[65vw] md:top-[-7vh] md:left-[80%] h-[400px] xl:w-[821px] xl:h-[821px] bg-gradient-to-br from-[#00FF80] to-[#D9D9D9] rounded-full transform -translate-x-1/2 blur-3xl z-[-999] opacity-70">
          </div>
          <div class="absolute w-[270px] bottom-[-39vh] left-[25vw] md:left-1/4  md:bottom-[-2vh] h-[270px] xl:w-[541px] xl:h-[541px] bg-gradient-to-r from-[#09BBB7B2] to-[#D9D9D9] rounded-full bottom-8 transform -translate-x-1/2 blur-3xl z-[-999] opacity-80">
          </div>
          <div className="hidden md:flex pb-8 lg:w-full aspect-[53/65] md:pb-0 xl:w-[583px] md:h-full">
            <picture>
              <source media="(max-width: 760px)" srcSet={bannerHeroMobile} className="rounded-[20px]"/>
              <img
                className="bg-[#053535] lg:h-full md:h-[94%] lg:w-full rounded-[20px]"
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
