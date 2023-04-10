import Slider from "deco-sites/starting/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/starting/components/ui/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { ImageObject } from "deco-sites/std/commerce/types.ts";

interface Dots {
  images: LiveImage[];
}

export interface PersonDepoiment {
  /** @description image of person*/
  avatar: LiveImage;
  /** @description alt text image */
  alt?: string;
  /** @description depoiment in text */
  depoiment: string;
  /** @description depoiment signature*/
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
      <div class="flex flex-row justify-end gap-2 pt-6 pb-12 md:pt-0 md:pb-0 md:py-0">
        <button
          class="rounded-full p-3 bg-white focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:left-[6rem] md:top-[40%]"
          data-slide="prev"
          aria-label="Previous item"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 11 19"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
            style="transform:rotateY(180deg)"
          >
            <path d="M1 1.57812L9.56198 8.78821C10.0463 9.19606 10.0345 9.94566 9.53749 10.338L1 17.0781" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <button
          class="rounded-full p-3 bg-white focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:top-[40%] right-[6rem]"
          data-slide="next"
          aria-label="Next item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 11 19"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path d="M1 1.57812L9.56198 8.78821C10.0463 9.19606 10.0345 9.94566 9.53749 10.338L1 17.0781" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
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
  const thumbsSliderId = '1231231';

  const images = depoiments.map(depoiment => depoiment.avatar) ?? [];

  return (
    <>
    
    <div
      id={thumbsSliderId}
      class="block bg-dark-green relative max-w-screen-2xl m-auto"
    >

      <Dots images={images}/>
        <Slider
          itemClass="min-h-[unset] last:mr-14"
          class="relative gap-14 row-start-1 p-0"
          snap="snap-center"
        >
          {depoiments?.map((item) => {
              return(
                <div class="h-[200px]">
                  <div key={item?.signature} class="flex flex-col justify-center items-center w-screen">
                    {/* <img src={depoiment?.avatar} alt={depoiment?.alt} /> */}
                    <p class="font-sans text-[white] text-[20px] p-4 lg:( px-24 text-[40px])">
                      {item?.depoiment}
                    </p>
                    <span class="text-[#02F67C] text-[16px]">
                        {item?.signature}
                    </span>
                  </div>
                </div>
              )
          })}
        </Slider>
      <Controls />

      <SliderControllerJS rootId={thumbsSliderId} />

    </div>

    
    
    </>
  );
}
