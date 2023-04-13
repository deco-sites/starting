import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx"

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @description Ativar thema dark para esta página */
  themeDark: boolean;
  mainText: string;
  descriptionText: string;
  activePercentualCarrosel?: boolean;
  buttonCta1: {
    buttonName: string
    href: string
  };
  buttonCta2: {
    buttonName: string
    href: string
  };

  miniBanner: bannerProps;
}

export interface bannerProps{
  titleText:string,
  linkedText: string,
  bannerTopImage: LiveImage,
  altBannerTopImage: string,
  bannerBottomImage: LiveImage,
  altBannerBottomImage: string,
}


export default function MainBanner({ themeDark, mainText, descriptionText, activePercentualCarrosel, buttonCta1, buttonCta2, miniBanner}: Props) {

  const themeIsLigth = !themeDark

  return (
    <div class={(themeIsLigth ? " bg-[#F3FFF9]":"bg-dark-green-gradient") +" "+ "flex flex-col mb-0 pb-[5rem]"}>
      <div class="max-w-screen-2xl m-auto">
        <div class="max-w-[100vw] px-4 pt-24 pb-8 md:(px-[2rem] pt-36) 2xl:(max-w-[1280px])">

          <h1 class={(themeIsLigth ? "text-dark-green" : "text-white") +" "+ " inline-block font-sans w-full font-bold not-italic text-[13.2vw] leading-[3.5rem] md:(w-full max-w-[1280px] text-[112px] leading-[6.5rem])"}>
                {mainText}
                {
                activePercentualCarrosel ? <div class="overflow-y-clip h-[13vw] pt-0 absolute text-center inline-flex pl-3.5 md:(h-[90px] pt-0 mt-[-1.5rem]) xl:(h-[120px] pl-6 pt-6 w-auto)">
                <span style="color: #06E474" class="absolute animate-switcherText10">10%</span>
                <span style="color: #06E474" class="absolute animate-switcherText20">20%</span>
                <span style="color: #06E474" class="absolute animate-switcherText30">30%</span>
                <span style="color: #06E474" class="absolute animate-switcherText40">40%</span>
                <span style="color: #06E474" class="absolute animate-switcherText50">50%</span>
                <span style="color: #06E474" class="absolute animate-switcherText60">60%</span>
                <span style="color: #06E474" class="absolute animate-switcherText70">70%</span>
              </div> : null
            }  
          </h1>
        </div>
        <div class="flex p-4 flex-col gap-20 justify-center items-center lg:(flex-row p-8)">
        <div class="flex flex-col gap-[2rem] lg:(w-[46%] items-center)">
          <p class={(themeIsLigth ? "text-frame-515-rgba" : "text-[#f3fff9b0]") +" "+ "font-sans font-normal not-italic text-[32px] leading-[2rem]"}>
          {descriptionText}
          </p>
          <div id="buttons-wrapper" class="w-full flex flex-col gap-4 ">
            <button class={(themeIsLigth ? "bg-dark-green" : "bg-white" ) + " " + "w-full group flex justify-center items-center gap-[10px] rounded p-[14px] border-1 border-dark-green" }>
 
              <a class={themeIsLigth ? "text-white" : "text-dark-green" + " " + "text-[16px] font-medium"} href=        {buttonCta1?.href}>
                {buttonCta1?.buttonName}
              </a>
              <Icon class="hidden transition lg:group-hover:(block)" id={ themeIsLigth ? "WhiteArrow" : "GreenArrow" } width={15} height={15} strokeWidth={"1"}/>
            </button>

            <button class={(themeIsLigth ? "bg-white border-dark-green" : "bg-none border-white") + " "+ "w-full group flex justify-center items-center gap-[10px] rounded p-[14px] border-1" }>

              <a class={(themeIsLigth ? "text-dark-green" : "text-white") + " " + "text-[16px] font-medium"} href={buttonCta2?.href}>
                {buttonCta2?.buttonName}
              </a>
              <Icon class="hidden transition lg:group-hover:block" id={ themeIsLigth ? "GreenArrow" : "WhiteArrow" } width={15} height={15} strokeWidth={"1"} />
            </button>

          </div>
        </div>
        
        <div class={(themeIsLigth ? "bg-dark-green text-white" : "bg-primary text-dark-green") +" "+ "w-[91vw] h-80 flex flex-col relative -left-[20px] overflow-hidden rounded-r-full lg:(w-[80%] h-[300px] flex-row) group font-inter"}>
            <div class="flex justify-start items-center lg:justify-center">
              <h3 class="w-[80%] p-6 pt-8 text-[24px] font-medium leading-9 lg:(w-full px-10 text-[32px])">{miniBanner?.titleText}</h3>
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
                  <span class="w-[80px] block relative top-[65px] right-16 text-right leading-4 font-normal text-[12px] lg:top-[108px]">{miniBanner?.linkedText}</span>
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