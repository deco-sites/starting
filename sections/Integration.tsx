import QuillText from "../components/ui/QuillText.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  mainText: string;
  secondText: string;
}

export default function Integration({mainText, secondText}: Props) {
  return (
    <section class="bg-[#053535]">
      <div class="flex md:px-[7rem] pt-4 pb-12 md:pb-32 max-w-screen-2xl m-auto">
        <div>
          <Picture class="w-full" preload={false}>
            <Source
              media="(max-width: 767px)"
              fetchPriority={"low"}
              src="/integrationSection/group_529.png"
              width={360}
              height={600}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"low"}
              src="/integrationSection/group_529.png"
              width={640}
              height={660}
            />
            <img
              class="object-cover w-full sm:h-full"
              loading="lazy"
              src="/integrationSection/group_529.png"
              alt="Integrate with everything"
            />
          </Picture>
        </div>
        <div class="flex flex-col px-3 gap-10">
          <p class='font-sans not-italic font-bold text-white text-[56px] md:text-[128.94px] leading-[45px] md:leading-[105.5px] tracking-[-1%]' dangerouslySetInnerHTML={{ __html: mainText }}></p>
          <p class="font-sans not-italic font-normal text-[32px] leading-[38px] text-white opacity-[67%] md:w-3/5">
            {secondText}
          </p>
        </div>
      </div>
    </section>
  );
}
