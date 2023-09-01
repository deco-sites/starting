import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import type { AvailableIcons } from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  mainText: string;
  secondText: string;
  labelFirstButton?: string;
  hrefFirstButton?: string;
  labelSecondButton: string;
  hrefSecondButton: string;
  iconSecondButton?: AvailableIcons;
  blur1Background: LiveImage;
  blur2Background: LiveImage;
  peopleImage: LiveImage;
  lazyload?: false | true;
}

export default function Community(
  {
    lazyload,
    blur1Background,
    blur2Background,
    peopleImage,
    mainText,
    secondText,
    labelFirstButton,
    hrefFirstButton,
    labelSecondButton,
    hrefSecondButton,
    iconSecondButton,
  }: Props,
) {
  return (
    <section class="flex flex-col items-center justify-center lg:flex-row-reverse lg:gap-[75px] bg-white pt-[63px] pb-[40px] lg:pb-0 px-6 md:px-[2rem] max-w-screen-2xl mx-auto overflow-x-hidden overflow-y-hidden 2xl:overflow-x-unset 2xl:overflow-y-unset">
      <div class="flex justify-center relative lg:w-[50%] h-[110vw] md:h-auto min-h-[380px] sm:min-h-[800px] lg:min-h-[821px]">
        <div class="relative w-full min-h-[380px] sm:min-h-[800px] lg:min-h-[821px] min-w-[100vw] lg:min-w-[100%]">
          <Image
            fetchPriority={lazyload ? "low" : "high"}
            preload={lazyload ? false : true}
            loading={lazyload ? "lazy" : "eager"}
            class="absolute top-[0] right-[-75px] animate-blur1 lg:w-[600px] lg:h-[600px] 2xl:w-[700px] 2xl:h-[700px]"
            width={400}
            height={400}
            src={blur1Background}
          />
          <Image
            fetchPriority={lazyload ? "low" : "high"}
            preload={lazyload ? false : true}
            loading={lazyload ? "lazy" : "eager"}
            class="absolute top-[140px] animate-blur2 lg:w-[600px] lg:h-[600px] 2xl:w-[700px] 2xl:h-[700px]"
            width={400}
            height={400}
            src={blur2Background}
          />
        </div>
        <Image
          fetchPriority={lazyload ? "low" : "high"}
          preload={lazyload ? false : true}
          loading={lazyload ? "lazy" : "eager"}
          class="md:w-[80vw] absolute overflow-y-hidden w-full top-0 mt-[10%] px-6 md:px-0"
          width={732}
          height={678}
          src={peopleImage}
        />
      </div>
      <div class="flex flex-col lg:w-[50%] gap-[24px] md:mt-[40px]">
        <h2 class="text-[56px] lg:order-1 lg:text-[70px] xl:text-[80px] text-[#1F261F] font-bold leading-[.95]">
          {mainText}
        </h2>
        <p class="text-[24px] md:text-[32px] lg:order-3 text-[#1f261f99] leading-[1.18]">
          {secondText}
        </p>
        <div class="flex flex-col lg:flex-row lg:order-2 w-full gap-[16px]">
          {labelFirstButton &&
            hrefFirstButton &&
            (
              <a
                class="w-full group flex lg:max-w-[300px] justify-center items-center gap-[10px] rounded p-[14px] border border-[#0A2121]"
                href={hrefFirstButton}
              >
                <span class="text-[16px] font-medium text-[#0A2121]">
                  {labelFirstButton}
                </span>
                <Icon
                  class="hidden transition lg:group-hover:block"
                  id="GreenArrow"
                  width={15}
                  height={15}
                  strokeWidth={"1"}
                />
              </a>
            )}
          <a
            class={`flex group lg:max-w-[300px] justify-center items-center gap-[10px] w-full rounded p-[14px] border border-[#0A2121] bg-[#0A2121]`}
            href={hrefSecondButton}
          >
            {iconSecondButton &&
              (
                <Icon
                  id={iconSecondButton}
                  width={21}
                  height={18}
                  strokeWidth={"1"}
                />
              )}
            <span class="text-[16px] font-medium text-[#fff]">
              {labelSecondButton}
            </span>
            <Icon
              class="hidden transition lg:group-hover:block"
              id="WhiteArrow"
              width={15}
              height={15}
              strokeWidth={"1"}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
