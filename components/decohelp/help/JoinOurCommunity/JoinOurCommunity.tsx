import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "site/components/ui/Icon.tsx";
import type { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Props {
  mainText: string;
  /**
   * @format textarea
   */
  secondText: string;
  labelButton: string;
  hrefButton: string;
  iconButton?: AvailableIcons;
  blur1Background: LiveImage;
  blur2Background: LiveImage;
  peopleImage: LiveImage;
  lazyload?: false | true;
}

export default function JoinOurCommunity(
  {
    lazyload,
    blur1Background,
    blur2Background,
    peopleImage,
    mainText,
    secondText,
    labelButton,
    hrefButton,
    iconButton,
  }: Props,
) {
  return (
    <section class="bg-[#F9FAFA] w-full my-[40px]">
      <div class="flex flex-col lg:flex-row items-center lg:justify-start justify-center lg:gap-[130.43px] lg:pt-[59px] lg:pt-0 sm:py-[40px] pb-[40px] lg:pb-[27.55px] px-6 md:px-[2rem] max-w-[1200px] mx-auto overflow-x-hidden overflow-y-hidden 2xl:overflow-x-unset 2xl:overflow-y-unset">
        <div class="flex justify-center relative lg:w-[41%] h-[110vw] md:h-auto min-h-[367px] lg:min-h-[325px] lg:mx-0 mx-[24px]">
          <div class="relative w-full max-h-[354px] lg:max-h-[325px] min-w-[100vw] lg:min-w-[100%]">
            <Image
              fetchPriority={lazyload ? "low" : "high"}
              preload={false}
              loading={lazyload ? "lazy" : "eager"}
              class="absolute top-[-70px] right-[-75px] animate-blur1 lg:w-[325px] lg:h-[325px]"
              width={325}
              height={325}
              src={blur1Background}
            />
            <Image
              fetchPriority={lazyload ? "low" : "high"}
              preload={false}
              loading={lazyload ? "lazy" : "eager"}
              class="absolute top-[70px] animate-blur2 lg:w-[325px] lg:h-[325px]"
              width={325}
              height={325}
              src={blur2Background}
            />
          </div>
          <Image
            fetchPriority={lazyload ? "low" : "high"}
            preload={false}
            loading={lazyload ? "lazy" : "eager"}
            class="md:w-[80vw] absolute overflow-y-hidden w-full h-full top-0"
            width={325}
            height={325}
            src={peopleImage}
          />
        </div>
        <div class="flex flex-col lg:w-[38.03%] gap-[16px]">
          <h2 class="lg:order-1 text-[40px] font-semibold leading-[48px] text-[#181A1A]">
            {mainText}
          </h2>
          <p class="text-[15px] font-normal leading-tight lg:order-2 text-[#181A1A]">
            {secondText}
          </p>
          <div class="flex flex-col lg:flex-row lg:order-3 w-full gap-[16px]">
            <a
              class={`flex group lg:w-[191px] lg:h-9 h-[53px] px-3 py-2 justify-center items-center gap-[10px] w-full rounded bg-[#161616] cursor-pointer`}
              href={hrefButton}
            >
              {iconButton &&
                (
                  <Icon
                    id={iconButton}
                    width={20}
                    height={20}
                    strokeWidth={"1"}
                  />
                )}
              <span class="text-[15px] whitespace-nowrap font-semibold leading-tight text-[#F4F4F4]">
                {labelButton}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
