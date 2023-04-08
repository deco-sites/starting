import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx"

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  switcherButton1:{
    name: string,
    href: string
  }
  switcherButton2:{
    name: string,
    href: string
  }
  /** @description Ativar thema dark para esta página */
  themeDark: boolean
  mainText: string
  descriptionText: string;
  activePercentualCarrosel?: boolean
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

export default function MainBanner({switcherButton1, switcherButton2, themeDark, mainText, descriptionText, activePercentualCarrosel, buttonCta1, buttonCta2, miniBanner}: Props) {

  const themeIsLigth = !themeDark

  return (
    <div class={(themeIsLigth ? " bg-[#F3FFF9]":"bg-dark-green-gradient") +" "+ "flex flex-col mb-0"}>
      <div class="max-w-screen-2xl m-auto">
        <div class="px-4 pt-24 pb-8 md:(px-[2rem] pt-[11rem])">
          
          <div id="switcehr-page" class={(themeIsLigth ? "bg-[#CDE5D9]" : "bg-primary-dark" ) + " " + "w-full flex p-2 gap-2  rounded-full border-2 border-white border-opacity-5 mb-10 lg:(w-1/3)"}>

            <a class={(themeIsLigth ? "bg-dark-green text-[#f3fff9ca]" : "bg-primary-dark text-[#f3fff9ca]" ) + " " + "w-1/2 flex justify-center items-center rounded-full p-[14px] hover:shadow-button-hover-shadow transition-all duration-500" } href={switcherButton1?.href}>
              {switcherButton1?.name}
            </a>
            
            <a class={(themeIsLigth ? "bg-[#CDE5D9] text-dark-green" : "bg-white text-dark-green border-2 border-dark-green") + " " + "w-1/2 flex justify-center items-center rounded-full p-[14px]shadow-button-shadow hover:shadow-button-hover-shadow transition-all duration-500" } href={switcherButton2?.href}>
              {switcherButton2?.name}
            </a>
          </div>

          <h1 class={(themeIsLigth ? "text-dark-green" : "text-white") +" "+ "flex flex-row justify-start items-end font-sans font-bold not-italic text-[56px] leading-[3rem] md:( flex-row text-[120px] leading-[6rem] items-start )"}>
              <span class="w-full">{mainText}</span>
              {
                activePercentualCarrosel ? <span class="overflow-y-clip  -left-[40px] top-[20px] w-[30%] h-[92px] flex justify-start items-center relative text-center lg:(left-0 top-0 w-[20%])">
                <span style="color: #2FD180" class="absolute animate-switcherText10">10%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText20">20%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText30">30%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText40">40%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText50">50%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText60">60%</span>
                <span style="color: #2FD180" class="absolute animate-switcherText70">70%</span>
              </span> : null
              }
        </h1>
        </div>
        <div class="flex p-4 flex-col gap-20 justify-center items-center lg:(flex-row p-8)">
        <div class="flex flex-col gap-[2rem] lg:(w-[46%] items-center)">
          <p class={(themeIsLigth ? "text-frame-515-rgba" : "text-[#f3fff9b0]") +" "+ "font-sans font-normal not-italic text-[32px] leading-[2rem]"}>
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