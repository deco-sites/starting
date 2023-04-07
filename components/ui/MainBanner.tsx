import QuillText from "deco-sites/starting/components/ui/QuillText.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  mainLine1Text: string;
  mainLine2Text: string;
  descriptionText: string;
  button: string;
  blackBlock: HTML;
  greenBlock: string;
}

export default function MainBanner({ mainLine1Text, mainLine2Text, descriptionText, button, blackBlock, greenBlock }: Props) {
  return (
    <div class="flex flex-col bg-[#F3FFF9] mb-10 md:mb-0">
      <div class="max-w-screen-2xl m-auto">
        <div class="px-4 pt-[7rem] md:px-[2rem] md:pt-[11rem]">
          <h1 class="flex flex-col font-sans font-bold not-italic text-primary-dark text-[66px] md:text-[92px] leading-[6rem]">
            <span class="flex justify-start items-center">
              {mainLine1Text}
              <span class="overflow-y-hidden w-[184px] h-[80px] flex justify-center items-center relative text-center">
                <span style="color: #2FD180" class=" absolute animate-switcherText10">10%</span>
                <span style="color: #2FD180" class=" absolute animate-switcherText20">20%</span>
                <span style="color: #2FD180" class=" absolute animate-switcherText30">30%</span>
                <span style="color: #2FD180" class=" absolute animate-switcherText40">40%</span>
                <span style="color: #2FD180" class=" absolute animate-switcherText50">50%</span>
                <span style="color: #2FD180" class=" absolute animate-switcherText60">60%</span>
                <span style="color: #2FD180" class=" absolute animate-switcherText70">70%</span>
              </span>
            </span>
            
            <span>{mainLine2Text}</span>
        </h1>
        </div>
        <div class="grid grid-cols-1 items-center gap-[2rem] md:gap-[9rem] px-4 pt-[6rem] md:px-[2rem] md:pt-[4rem] md:pb-[5rem] md:grid-cols-2">
          <p class="font-sans font-normal not-italic text-frame-515-rgba text-[32px] leading-[38px]">
          {descriptionText}
          </p>
          <div class="bg-[#1F261F] rounded">
            <a href="#delight" class="grid bg-[#1F261F] h-16 w-full items-center text-center text-[#F3FFF9] rounded font-inter font-normal not-italic text-[20px] hover:bg-mytheme-10">
              {button}
            </a>
          </div>
        </div>
        

        <div class="md:flex pt-[2.5rem] md:gap-4">
          <div class="relative flex-none md:w-[30rem] grid bg-[#1F261F] rounded-r-full h-[19rem] mb-4 md:mb-0 mr-6 md:ml-[2rem] md:rounded-l-full overflow-hidden group">
              <QuillText class="pl-7 pr-16 md:pl-[5rem] pt-[3rem] md:w-full font-inter not-italic font-medium text-[22px] leading-[26.5px] text-white md:text-[32px] md:leading-[38.5px]" html={blackBlock}/>
              <div class="translate-y-[-105px] md:translate-y-[-110px] translate-x-[10px]">
                <img src="/mobile_group_1/Rectangle 768.png" alt="" class="absolute right-[230px] top-[140px] z-40 group-hover:translate-x-[20px] group-hover:translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 755.png" alt="" class="absolute right-[165px] top-[155px] z-20 group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 766.png" alt="" class="absolute right-[170px] top-[120px] z-20 group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Ellipse 90.png" alt="" class="absolute z-10 right-[200px] top-[120px] group-hover:-translate-y-[20px] group-hover:rotate-45 transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 765.png" alt="" class="absolute right-[165px] top-[125px] z-10 group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Ellipse 89.png" alt="" class="absolute right-[75px] top-[50px] z-20 group-hover:translate-x-[20px] group-hover:-translate-y-[25px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Ellipse 88.png" alt="" class="absolute right-[75px] top-[75px] z-10 group-hover:translate-x-[20px] group-hover:-translate-y-[25px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 763.png" alt="" class="absolute z-10 right-[70px] top-[70px] group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 761.png" alt="" class="absolute z-10 right-[135px] top-[140px] group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 760.png" alt="" class="absolute z-10 right-[90px] top-[127px] group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 764.png" alt="" class="absolute z-10 right-[35px] top-[80px] group-hover:translate-x-[20px] group-hover:-translate-y-[0px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 762.png" alt="" class="absolute z-20 right-[40px] top-[95px] group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 759.png" alt="" class="absolute z-10 right-[45px] top-[115px] group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <img src="/mobile_group_1/Rectangle 754.png" alt="" class="absolute right-0 top-[50px] group-hover:-translate-y-[20px] transition ease-in-out duration-700"/>
                <svg width="260" height="83" viewBox="0 0 260 83" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-[5px] top-[100px] z-30 group-hover:translate-y-[20px] transition ease-in-out duration-700" style="filter: blur(2px)">
                  <g filter="url(#filter0_b_650_44)">
                    <path d="M0.756064 52.9134C-0.404313 50.6434 0.826482 47.8817 3.29034 47.227L177.88 0.829077C179.701 0.3453 181.612 1.19709 182.469 2.87425L258.744 152.087C259.904 154.357 258.674 157.118 256.21 157.773L81.6197 204.171C79.7993 204.655 77.8881 203.803 77.0307 202.126L0.756064 52.9134Z" fill="#294729" fill-opacity="0.40"/>
                    <path d="M3.41876 47.7102L178.009 1.3123C179.602 0.888999 181.274 1.63431 182.024 3.10183L258.299 152.314C259.314 154.3 258.237 156.717 256.081 157.29L81.4913 203.688C79.8985 204.111 78.2261 203.366 77.4759 201.898L1.20127 52.6858C0.185937 50.6996 1.26289 48.2831 3.41876 47.7102Z" stroke="white" stroke-opacity="0.97"/>
                  </g>
                </svg>
              </div>
          </div>
          <div class="relative flex-auto bg-[#02F67C] rounded-l-full h-[19rem] ml-4 md:mr-[2rem] md:col-span-3 md:rounded-l-none md:rounded-r-full overflow-hidden group">
              <p class="ml-[5rem] md:ml-[4rem] pt-[3rem] w-[16rem] md:w-[20rem] font-inter not-italic font-medium text-[22px] leading-[26.5px] text-[#1F261F] md:text-[32px] md:leading-[38.5px]">
                {greenBlock}
              </p>
              <div class="py-6 absolute md:w-1/2 md:h-full md:right-0 md:top-0 group">
                <div class="grid grid-cols-6 gap-2 items-center justify-items-center h-full group">
                  <img src="/Rectangle_727.png" alt="" class="transform scale-50 rotate-45 translate-x-[45px] group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_730.png" alt="" class="transform scale-50 translate-x-[50px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_731.png" alt="" class="transform scale-50 translate-x-[40px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_728.png" alt="" class="transform scale-50 translate-x-[27px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_727.png" alt="" class="transform scale-50 rotate-45 translate-x-[45px] group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_730.png" alt="" class="transform scale-50 translate-x-[50px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_731.png" alt="" class="transform scale-50 translate-x-[40px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_728.png" alt="" class="transform scale-50 translate-x-[27px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_727.png" alt="" class="transform scale-50 rotate-45 translate-x-[45px] group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_730.png" alt="" class="transform scale-50 translate-x-[50px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_731.png" alt="" class="transform scale-50 translate-x-[40px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_728.png" alt="" class="transform scale-50 translate-x-[27px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_727.png" alt="" class="transform scale-50 rotate-45 translate-x-[45px] group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_730.png" alt="" class="transform scale-50 translate-x-[50px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_731.png" alt="" class="transform scale-50 translate-x-[40px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_728.png" alt="" class="transform scale-50 translate-x-[27px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_727.png" alt="" class="transform scale-50 rotate-45 translate-x-[45px] group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_730.png" alt="" class="transform scale-50 translate-x-[50px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_731.png" alt="" class="transform scale-50 translate-x-[40px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_728.png" alt="" class="transform scale-50 translate-x-[27px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_727.png" alt="" class="transform scale-50 rotate-45 translate-x-[45px] group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_730.png" alt="" class="transform scale-50 translate-x-[50px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_731.png" alt="" class="transform scale-50 translate-x-[40px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                  <img src="/Rectangle_728.png" alt="" class="transform scale-50 translate-x-[27px] group-hover:scale-100 group-hover:translate-x-0 transition ease-in-out duration-700"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}