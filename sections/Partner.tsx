import type { Image } from "deco-sites/std/components/types.ts";

export interface Props {
  mainText: string;
  imgFirstLine: Image[];
  imgSecondLine: Image[];
  imgThirdLine: Image[];
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  button: string;
}

function ImageLines(images) {
  const len = images.length;
  const maxWidth = 1536;
  const factor = 3;
  const imageWidth = 150;
  const repeat = Math.round((maxWidth*factor)/(len*imageWidth));

  let aux = 0;
  let html = '';

  while (aux < repeat) {
    images.forEach((image) => {
      html += `<img src=${image} alt="" />`
    });

    aux += 1;
  }

  return html;
  
}

export default function Partner({mainText, imgFirstLine, imgSecondLine, imgThirdLine, col1, col2, col3, col4, button}: Props) {
  return (
    <section class="bg-[#053535]">
      <div class="flex flex-col  pt-4 pb-12 md:pb-32 max-w-screen-2xl m-auto">
      <div class="grid grid-cols-1 px-3 pb-12 gap-10 md:px-[7rem] md:grid-cols-2">
        <div class="relative md:order-2 w-full h-full grid">
          <div
            class="block absolute w-full h-full md:hidden z-0"
            style="background: radial-gradient(15% 50% at 80% 50%, rgba(89, 255, 210, 0.8) 0%, rgba(37, 50, 38, 0) 100%);"
          >
          </div>
          <div
            class="hidden md:block md:absolute md:w-full md:h-full z-0"
            style="background: radial-gradient(20% 50% at 50% 50%, rgba(89, 255, 210, 0.8) 0%, rgba(37, 50, 38, 0) 100%); transform: rotate(-45deg)"
          >
          </div>
          <div
            class="h-20 w-20 mr-8 my-6 bg-green-500 rounded-full justify-self-end self-center md:justify-self-center md:mr-0 z-10"
            style="background: conic-gradient(from 90deg at 14.13% 50%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg);"
          >
          </div>
        </div>
        <p class="font-sans not-italic font-bold text-white text-[56px] md:text-[128.94px] leading-[45px] md:leading-[105.5px] tracking-[-1%] md:order-1">
          {mainText}
        </p>
      </div>
      <div class="overflow-hidden">
        <div class="flex flex-row flex-nowrap w-full animate-walk items-center gap-4" dangerouslySetInnerHTML={{ __html: ImageLines(imgFirstLine) }}>
        </div>
        <div class="flex flex-row flex-nowrap w-full animate-walk items-center gap-4" style="animation-delay: 300ms" dangerouslySetInnerHTML={{ __html: ImageLines(imgSecondLine) }}>
        </div>
        <div class="flex flex-row flex-nowrap w-full animate-walk items-center gap-4" style="animation-delay: 600ms" dangerouslySetInnerHTML={{ __html: ImageLines(imgThirdLine) }}>
        </div>
      </div>
      <div class="mx-6 mt-12 pt-8 grid grid-cols-1 gap-8 border-t border-t-[1px] border-white-opacity items-end md:mx-[7rem] md:grid-cols-4">
        <div class="border-b border-b-1 border-white pb-2">
          <p class="font-sans not-italic font-normal text-[22px] leading-[24px] text-white opacity-[67%]">
            {col1}
          </p>
        </div>
        <div class="border-b border-b-1 border-white pb-2">
          <p class="font-sans not-italic font-normal text-[22px] leading-[24px] text-white opacity-[67%]">
            {col2}
          </p>
        </div>
        <div class="border-b border-b-1 border-white pb-2">
          <p class="font-sans not-italic font-normal text-[22px] leading-[24px] text-white opacity-[67%]">
            {col3}
          </p>
        </div>
        <div class="border-b border-b-1 border-white pb-2">
          <p class="font-sans not-italic font-normal text-[22px] leading-[24px] text-white opacity-[67%]">
            {col4}
          </p>
        </div>
      </div>
      <div class="hidden pt-12 md:flex md:flex-row md:justify-center">
        <div class="bg-[#06E474]">
          <a href="#delight" class="grid px-20 py-3.5 text-[#161A16] font-inter font-normal not-italic rounded-sm text-[16px] leading-[19.36px] hover:bg-mytheme-10">
              {button}
          </a>
        </div>
        
      </div>
      </div>
    </section>
  );
}
