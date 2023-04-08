import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx"

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @description Ativar thema dark para esta página */
  themeDark: boolean
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
  linkedText: string,
  bannerTopImage: LiveImage,
  altBannerTopImage: string,
  bannerBottomImage: LiveImage,
  altBannerBottomImage: string,
}

export default function MainBanner({themeDark, mainText, descriptionText, buttonCta1, buttonCta2, miniBanner}: Props) {

  const themeIsLigth = !themeDark

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
            <button class={(themeIsLigth ? "bg-dark-green" : "bg-white" ) + " " + "w-full group flex lg:justify-start justify-center items-center gap-[10px] rounded p-[14px] border-1 border-dark-green" }>
 
              <a class={themeIsLigth ? "text-white" : "text-dark-green" + " " + "text-[16px] font-medium"} href=        {buttonCta1?.href}>
                {buttonCta1?.buttonName}
              </a>
              <Icon class="hidden transition lg:group-hover:block" id={ themeIsLigth ? "WhiteArrow" : "GreenArrow" } width={15} height={15} strokeWidth={"1"}/>
            </button>

            <button class={(themeIsLigth ? "bg-white" : "bg-dark-green") + " "+ "w-full group flex lg:justify-start justify-center items-center gap-[10px] rounded p-[14px] border-1 border-dark-green" }>

              <a class={(themeIsLigth ? "text-dark-green" : "text-white") + " " + "text-[16px] font-medium"} href={buttonCta2?.href}>
                {buttonCta2?.buttonName}
              </a>
              <Icon class="hidden transition lg:group-hover:block" id={ themeIsLigth ? "GreenArrow" : "WhiteArrow" } width={15} height={15} strokeWidth={"1"} />
            </button>

          </div>
        </div>
        
        <div class="w-[91vw] h-80 flex flex-col relative -left-[20px] overflow-hidden bg-dark-green rounded-r-full lg:(w-[80%] h-[300px] flex-row) group">
            <div class="flex justify-start items-center font-inter font-medium text-white lg:justify-center ">
              <h3 class="w-[80%] p-6 pt-8 text-[24px] lg:(w-full px-10 text-[32px])">{miniBanner?.titleText}</h3>
            </div>
            <div class="w-full relative rounded-r-full lg:(w-1/2)">

              <div id="mini-banners-art-montage" class="w-full flex justify-end items-center">
                <Image 
                  src={miniBanner?.bannerTopImage}
                  class="max-w-[600px] relative bottom-8 left-24 lg:(w-[597px] -bottom-6 left-56 group-hover:bottom-3  duration-300 ease-in) z-10"
                  width={350}
                  alt={miniBanner?.altBannerTopImage}
                  title={miniBanner?.altBannerTopImage}
                  preload
                  loading="eager"
                  decoding="sync"
                />
                <div class="absolute -bottom-4 -right-14 lg:(-bottom-16 -right-24) ">
                  <span class="w-[80px] block relative top-[65px] right-16 text-right text-white leading-4 font-normal text-[12px] lg:top-[108px]">{miniBanner?.linkedText}</span>
                  <Image 
                    src={miniBanner?.bannerBottomImage}
                    class="max-w-[500px] lg:(w-[476px])"
                    width={300}
                    alt={miniBanner?.altBannerBottomImage}
                    title={miniBanner?.altBannerBottomImage}
                    preload
                    loading="eager"
                    decoding="sync"
                  />
                 
                </div>
                
              </div>  
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}