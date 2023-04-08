import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx"

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  theme: 'ligth' | 'dark'
  mainText: string
  descriptionText: string;
  buttonCta1: {
    buttonName: string
    href: string
  }
  buttonCta2: {
    buttonName: string
    href: string
  }

  miniBanner: bannerProps
}

export interface bannerProps{
  titleText:string,
  imgLogoSrc: LiveImage,
  imgLogoAlt: string,
  bannerTopImage: LiveImage,
  altBannerTopImage: string,
  bannerBottomImage: LiveImage,
  altBannerBottomImage: string,
}

export default function MainBanner({theme, mainText, descriptionText, buttonCta1, buttonCta2, miniBanner}: Props) {

  const themeIsLigth = theme === 'ligth' ? true : false

  return (
    <div class="flex flex-col bg-[#F3FFF9] mb-10 md:mb-0">
      <div class="max-w-screen-2xl m-auto">
        <div class="px-4 pt-24 pb-8 md:(px-[2rem] pt-[11rem])">
          <h1 class="flex flex-row justify-start items-end font-sans font-bold not-italic text-dark-green text-[56px] leading-[3rem] md:( flex-row text-[92px] leading-[6rem] items-start )">
              <span class="w-[100%] lg:(w-[70%])">{mainText}</span>
              <span class="overflow-y-clip  -left-[40px] top-[20px] w-[30%] h-[80px] flex justify-start items-center relative text-center lg:(left-0 top-0 w-[20%])">
                <span style="color: #2FD180" class="absolute animate-switcherText10">10%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText20">20%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText30">30%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText40">40%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText50">50%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText60">60%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText70">70%</span>
              </span>
        </h1>
        </div>
        <div class="flex p-4 flex-col gap-20 justify-center items-center lg:(flex-row p-8)">
        <div class="flex flex-col gap-[2rem] lg:(w-[46%] items-center)">
          <p class="font-sans font-normal not-italic text-frame-515-rgba text-[32px] leading-[2rem]">
          {descriptionText}
          </p>
          <div id="buttons-wrapper" class="w-full flex flex-col gap-4">
            <button class="w-full group flex lg:justify-start justify-center items-center gap-[10px] rounded p-[14px] border-1 border-dark-green bg-dark-green">
              <a class={"text-[16px] font-medium" + " " + themeIsLigth ? "text-white":"text-dark-green"} href={buttonCta1?.href}>{buttonCta1?.buttonName}</a>
              <Icon class="hidden transition lg:group-hover:block" id={ themeIsLigth ? "WhiteArrow" : "GreenArrow" } width={15} height={15} strokeWidth={"1"}/>
            </button>
            <button class="w-full group flex lg:justify-start justify-center items-center gap-[10px] rounded p-[14px] border-1 border-dark-green">
              <a class={"text-[16px] font-medium" + " " + themeIsLigth ? "text-dark-green" : "text-white"} href={buttonCta2?.href}>{buttonCta2?.buttonName}</a>
              <Icon class="hidden transition lg:group-hover:block" id="GreenArrow" width={15} height={15} strokeWidth={"1"} />
            </button>
          </div>
        </div>
        
        <div class="w-[350px] h-80 lg:(w-[80%] h-[300px]) flex relative -left-[33px] bg-dark-green rounded-r-full">
            <div>{miniBanner?.titleText}</div>
            <div class="w-full relative">
              <Image 
                src={miniBanner?.imgLogoSrc}
                width={450}
                alt={miniBanner?.imgLogoAlt}
                title={miniBanner?.imgLogoAlt}
              />
              <Image 
                src={miniBanner?.imgLogoSrc}
                width={450}
                alt={miniBanner?.imgLogoAlt}
                title={miniBanner?.imgLogoAlt}
              />
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}