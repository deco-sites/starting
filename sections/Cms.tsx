export interface Props {
  firstTitle: string;
  secondTitle: string;
  textLeftFirstTitle: string;
  textRightFirstTitle: string;
  textLeftSecondTitle: string;
  textRightSecondTitle: string;
}

export default function Cms({firstTitle, secondTitle, textLeftFirstTitle, textRightFirstTitle, textLeftSecondTitle, textRightSecondTitle}: Props) {
  return (
    <section class="bg-[#F3FFF9] md:px-[2.03rem] md:py-12">
      <div class="flex flex-col pl-6 pt-8 bg-[#053535] md:px-[5rem] md:pt-[4rem] md:rounded-[2rem] overflow-hidden animate-backgound-color">
        <div class="grid grid-cols-2 pr-6 gap-6">
          <div class="relative">
            <p class="pb-4 font-inter not-italic font-medium text-2xl text-white md:text-3xl animate-opacity-first">
              {firstTitle}
            </p>
            <div class="absolute bg-[#F3FFF9] opacity-50 h-0.5 w-full bottom-0 mt-4"></div>
            <div class="absolute bg-[#00FF80] opacity-100 h-0.5 w-full bottom-0 mt-4 animate-time-line-first"></div>
          </div>
          <div class="relative">
            <p class="pb-4 font-inter not-italic font-medium text-2xl text-[#F3FFF9] opacity-50 md:text-3xl animate-opacity-second">
              {secondTitle}
            </p>
            <div class="absolute bg-[#F3FFF9] opacity-50 h-0.5 w-full bottom-0 mt-4"></div>
            <div class="absolute bg-[#00FF80] opacity-100 h-0.5 w-full bottom-0 mt-4 animate-time-line-second"></div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-1 pr-6 py-8 gap-12 md:grid-cols-2 items-center">
            <div>
              <p class="font-inter not-italic font-normal text-4xl text-[#F3FFF9] animate-text-first">
                {textLeftFirstTitle}
              </p>
              <p class="font-inter not-italic font-normal text-4xl text-[#F3FFF9] animate-text-second">
                {textLeftSecondTitle}
              </p>
            </div>
            <div class="md:pl-5">
              <p class="font-sans not-italic font-normal text-lg text-[#F3FFF9] animate-text-first">
                {textRightFirstTitle}
              </p>
              <p class="font-sans not-italic font-normal text-lg text-[#F3FFF9] animate-text-second">
                {textRightSecondTitle}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-[343px]">
          <div class="flex-shrink-0 md:block md:w-[95%] md:mx-auto h-[343px] bg-black md:rounded-t-lg md:z-0 overflow-hidden md:filter md:blur border-t border-l md:animate-cms-black" style="border-image: linear-gradient(90deg, rgba(45,195,120,1) 20%, rgba(255,255,255,0) 100%) 1;">
            <img src="/code_screen.png" class="h-full object-cover pl-4 pt-4"/>
          </div>
          <div class="flex-shrink-0 md:block h-[343px] bg-gray-200 md:rounded-t-lg md:z-10 overflow-hidden md:-translate-y-[15%] md:w-[95%] md:m-auto animate-cms-white-mobile md:animate-cms-white">
            <img src="/composer.png" class="h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}
