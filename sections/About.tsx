import QuillText from "../components/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

export interface Props {
  mainText: HTML;
  secondText: string;
  placeholder: string;
  button: string;
  blackBlock: HTML;
  greenBlock: string;
}

export default function About({ mainText, secondText, placeholder, button, blackBlock, greenBlock }: Props) {
  return (
    <section class="flex flex-col bg-[#F3FFF9]">
      <div class="px-6 pt-[3.68rem] md:px-[3.03rem] md:pt-[7.5rem]">
        <QuillText class="font-sans font-bold not-italic text-[#202320] text-5xl md:text-9xl" html={mainText}/>
      </div>
      <div class="grid grid-cols-1 items-end gap-4 px-6 pt-[3.68rem] md:px-[3.03rem] md:py-[4rem] md:grid-cols-2">
        <p class="font-sans font-normal not-italic text-frame-515-rgba text-3xl">
         {secondText}
        </p>
        <div class="flex flex-row h-12 border-[1px] border-solid border-[#1F261F] md:w-3/4 md:justify-self-end">
          <input
            type="email"
            class="w-2/3 font-inter font-normal not-italic bg-input-rgba focus:outline-none placeholder-[#1F261F] pl-4"
            placeholder={placeholder}
          />
          <button class="px-2 text-center text-white bg-[#1F261F] rounded-l-full flex-grow w-1/3">
            {button}
          </button>
        </div>
      </div>
      <div class="grid grid-rows-2 gap-4 pt-[2.5rem] pb-[3.5rem] md:grid-rows-none md:grid-cols-3 md:gap-0">
        <div class="grid mr-6 bg-[#1F261F] rounded-r-full h-72 md:ml-[3.03rem] md:rounded-l-full">
              <QuillText class="px-6 md:pl-[5rem] pt-[4rem] w-3/4 md:w-full font-inter not-italic font-medium text-2xl text-white md:text-3xl" html={blackBlock}/>
        </div>
        <div class="ml-6 bg-[#02F67C] rounded-l-full h-72 md:mr-[3.03rem] md:col-span-2 md:rounded-l-none md:rounded-r-full">
            <p class="pl-[5rem] pt-[4rem] md:w-1/2 font-inter not-italic font-medium text-2xl text-[#1F261F] md:text-3xl">
              {greenBlock}
            </p>
        </div>
      </div>
    </section>
  );
}
