import QuillText from "./QuillText.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  mainText: string;
  secondText: string;
}

export default function Integration({mainText, secondText}: Props) {
  return (
    <section class="bg-[#053535]">
      <div class="relative flex flex-col md:flex-row md:px-[7rem] pt-4 pb-12 md:pb-32 max-w-screen-2xl m-auto">
        <div class="w-full">
          <Picture class="w-1/2 block" preload={false}>
            <Source
              media="(max-width: 767px)"
              fetchPriority={"low"}
              src="/integrationSection/group_529_mob.png"
              width={"auto"}
              height={"auto"}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"low"}
              src="/integrationSection/group_529.png"
              width={"auto"}
              height={"auto"}
            />
            <img
              class="object-cover w-full sm:h-full"
              loading="lazy"
              src="/integrationSection/group_529.png"
              alt="Integrate with everything"
            />
          </Picture>
        </div>
        <div class="flex flex-col px-3 gap-10 md:(absolute left-[39%] top-[40%] max-w-[760px])">
          <p class='font-sans not-italic font-bold text-white text-[56px] md:text-[112px] leading-[45px] md:leading-[105.5px] tracking-[-1%]' dangerouslySetInnerHTML={{ __html: mainText }}></p>
          <p class="font-sans not-italic font-normal text-[24px] leading-[38px] text-white opacity-[67%]">
            {secondText}
          </p>
        </div>
      </div>
    </section>
  );
}
