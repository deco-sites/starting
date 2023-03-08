import QuillText from "../components/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

export interface Props {
  mainText: HTML;
  secondText: string;
}

export default function Integration({mainText, secondText}: Props) {
  return (
    <section class="bg-[#053535] pt-4 pb-12 md:pb-32">
      <div class="flex flex-col px-6 gap-10 md:px-[7rem]">
        <QuillText class='font-sans not-italic font-bold text-5xl text-white md:text-9xl' html={mainText}/>
        <p class="font-sans not-italic font-normal text-3xl text-white opacity-[67%] md:text-2xl md:w-3/5">
          {secondText}
        </p>
      </div>
    </section>
  );
}
