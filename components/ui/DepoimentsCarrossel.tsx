import Slider from "deco-sites/starting/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/starting/components/ui/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { ImageObject } from "deco-sites/std/commerce/types.ts";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

interface Dots {
  images: LiveImage[];
}

export interface PersonDepoiment {
  /** @description image of person*/
  avatar: LiveImage;
  /** @description alt text image */
  alt?: string;
  /** @description depoiment in text */
  /** @format textarea */
  depoiment: string;
  /** @description depoiment signature*/
  /** @format textarea */
  signature: string;
}

export interface Props {
  depoiments: PersonDepoiment[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Controls() {
  return (
    <>
      <div class="flex flex-row justify-end gap-2 pt-6 md:pb-12 md:pt-0 md:pb-0 md:py-0">
        <button
          class="rounded-full p-3 bg-dark-green md:bg-[#fff] focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:left-[1rem] md:top-[40%]"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon
            class="text-[#fff] md:text-[#000]"
            id="ChevronLeft"
            width={30}
            height={30}
            strokeWidth={"2"}
          />
        </button>
        <button
          class="rounded-full p-3 bg-dark-green md:bg-[#fff] focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:top-[40%] right-[1rem]"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon
            class="text-[#fff] md:text-[#000]"
            id="ChevronRight"
            width={30}
            height={30}
            strokeWidth={"2"}
          />
        </button>
      </div>
    </>
  );
}

function Dots({ images }: Dots) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }`,
        }}
      >
      </style>
      <ol class="flex items-center justify-center items-center z-10 min-w-[100px] md:z-0 md:mt-[30px] md:max-h-[373px] gap-[10px]">
        {images.map((_: LiveImage, index: number) => (
          <li class="lg:h-auto">
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="h-full w-[100px] rounded focus:outline-none group"
            >
              <Image
                style={{ aspectRatio: "432 / 432" }}
                src={_}
                alt={_}
                width={100}
                class="w-full rounded-full"
                height={100}
                // Preload LCP image for better web vitals
                loading={"lazy"}
              />
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default function DepoimentsCarroussel(
  { depoiments, preload, interval }: Props,
) {
  const thumbsSliderId = "1231231";

  const images = depoiments.map((depoiment) => depoiment.avatar) ?? [];

  return (
    <>
      <div
        id={thumbsSliderId}
        class="block px-6 md:px-[2rem] my-[3rem] relative"
      >
        {/* <Dots images={images}/> */}
        <Slider
          itemClass="max-h-[600px] w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] 2xl:w-[1536px]"
          class="max-w-screen-2xl overflow-x-hidden mx-auto relative bg-dark-green rounded-[48px] row-start-1 p-0"
          snap="snap-center"
        >
          {depoiments?.map((item) => {
            return (
              <div class="w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] 2xl:w-[1536px]">
                <div
                  key={item?.signature}
                  class="py-[50px] px-[25px] md:px-[50px] lg:px-[25px] flex flex-col justify-center items-center gap-[36px]"
                >
                  <Image
                    style={{ aspectRatio: "122 / 122" }}
                    src={item?.avatar}
                    alt={item?.avatar}
                    width={122}
                    class="rounded-full"
                    height={122}
                    // Preload LCP image for better web vitals
                    loading={"lazy"}
                  />
                  <p class="font-sans text-[white] text-[16px] leading-[1.4] md:p-4 lg:(px-24 text-3xl leading-[1.3])">
                    {item?.depoiment}
                  </p>
                  <span class="text-[#02F67C] text-[16px]">
                    {item?.signature}
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>

        <div class="max-w-screen-2xl mx-auto relative block md:top-[-200px] lg:top-[-250px]">
          <Controls />
        </div>

        <SliderControllerJS rootId={thumbsSliderId} />
      </div>
    </>
  );
}
