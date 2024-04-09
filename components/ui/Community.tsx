import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "site/components/ui/Icon.tsx";
import type { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Props {
  /**
   * @format html
  */
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

const DEFAULT_TEXT = "<p class=''>Backed up by a community of<span style='color:#02F67C; background: var(--gradient-1, linear-gradient(93deg, #02F67C 44.7%, #3FB67B 118.6%)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;' class=''>1000+ members</span></p>"
export default function Community(
  {
    lazyload,
    blur1Background,
    blur2Background,
    peopleImage,
    mainText = DEFAULT_TEXT,
    secondText,
    labelFirstButton,
    hrefFirstButton,
    labelSecondButton,
    hrefSecondButton,
    iconSecondButton,
  }: Props,
) {
  return (
    <div class="bg-[#010101]">
    <section class="flex flex-col-reverse gap-20 lg:flex-row items-center justify-center lg:flex-row-reverse lg:gap-[75px] pt-28 pb-20 lg:py-28 lg:pt-40 px-6 md:px-16 max-w-screen-2xl mx-auto overflow-x-hidden overflow-y-hidden 2xl:overflow-x-unset 2xl:overflow-y-unset">
      <div class="flex flex-col gap-4 justify-center relative w-[90%] lg:w-[50%]">
        {/* <div class="relative w-full min-h-[380px] sm:min-h-[800px] lg:min-h-[821px] min-w-[100vw] lg:min-w-[100%]">
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
        </div> */}
        <Image
          fetchPriority={lazyload ? "low" : "high"}
          preload={lazyload ? false : true}
          loading={lazyload ? "lazy" : "eager"}
          class="md:w-[80vw] max-h-[540px] overflow-y-hidden w-full"
          width={612}
          height={540}
          src={peopleImage}
        />
        <span class="text-[#A1A1AA] font-normal lg:text-[1.25rem] leading-[150%]">Community members</span>
      </div>
      <div class="flex flex-col lg:w-[50%] gap-[24px]">
        <h2 class="text-[53px] lg:text-[70px] xl:text-[80px] text-white font-medium leading-[100%] tracking-[-2.4px]">
          {mainText}
        </h2>
        <p class="text-[16px] md:text-[24px] text-[#A1A1AA] leading-[150%]">
          {secondText}
        </p>
        <div class="flex flex-col lg:flex-row w-full gap-[16px]">
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
            class={`flex group justify-center items-center gap-2 rounded-full px-6 py-4 bg-[#02F67C]`}
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
            <span class="text-[16px] lg:text-[20px] font-medium leading-normal text-[#113032]">
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
    </div>
  );
}
