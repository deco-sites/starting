import QuillText from "../components/ui/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

export interface Props {
  mainText: string;
  secondText: string;
}

export default function Integration({mainText, secondText}: Props) {
  return (
    <section class="bg-[#053535]">
      <div class="flex flex-col px-3 gap-10 md:px-[7rem]  pt-4 pb-12 md:pb-32 max-w-screen-2xl m-auto">
        <p class='font-sans not-italic font-bold text-white text-[56px] md:text-[128.94px] leading-[45px] md:leading-[105.5px] tracking[-1%]' dangerouslySetInnerHTML={{ __html: mainText }}></p>
        <p class="font-sans not-italic font-normal text-[32px] leading-[38px] text-white opacity-[67%] md:w-3/5">
          {secondText}
        </p>
      </div>
    </section>
  );
}
