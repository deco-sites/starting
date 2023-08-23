import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subtitle: string;
  alt: string;
  desktop: LiveImage;
  mobile: LiveImage;
}

function Heading({ title, subtitle, desktop, mobile, alt }: Props) {
  return (
    <div class="relative bg-lightGreen">
      <div class="container pt-32 md:pt-[166px]">
        <div class="flex flex-col gap-8 md:flex-row">
          <div class="md:w-[84%] lg:w-[74%] xl:w-[74%] mx-4 md:mx-0">
            <h2 class="font-semibold text-[38px] lg:text-[43px] leading-tight lg:text-[42px] xl:text-[46px] 2xl:text-[67px] text-[#113032]">
              {title}
            </h2>
            <h4 class="text-[22px] font-medium text-[#113032] leading-tight lg:text-[22px] xl:text-[28px] mt-6">
              {subtitle}
            </h4>
          </div>
          <div
            class="h-[325px] sm:h-[340px] w-100vw md:w-[84%] lg:w-[84%] xl:w-[84%] bg-bgImage   z-50 pr-4"
            style="border-radius: 200px 0 0 200px; z-index: 10;"
          >
            <div class="z-40 mt-[18px] flex items-center justify-start md:my-2 md:ml-2 relative">
              <Picture class="lg:w-[600px]">
                <Source
                  src={mobile}
                  width={483}
                  height={280}
                />
                <Source
                  src={desktop}
                  width={660}
                  height={440}
                />
                <img
                  src={desktop}
                  alt={alt}
                  class="object-fill pl-2 pt-8 mb-4 sm:pt-8 sm:mb-4 sm:pr-0  md:object-fill md:mt-4 md:mr-4 lg:object-fill h-[256px] w-[393px] md:h-[256px] md:w-[393px] lg:h-[256px] xl:h-[256px] lg:w-[393px] md:absolute "
                />
              </Picture>
            </div>
          </div>
        </div>
      </div>
      <div
        class=" bg-bgImage  py-2 w-[28vw] md:w-[35vw] lg:w-[35vw] ml-4 md:pl-2  md:top-[166px] md:absolute md:right-0 hidden md:block h-[280px] md:h-[340px] lg:h-[340px] md:border md:border-tl-[100px] md:border-l-[100px] lg:border-l-[200px]"
        style="z-index: 0; border-radius: 100px 0 0 100px"
      >
      </div>
    </div>
  );
}

export default Heading;
