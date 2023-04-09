import Slider from "deco-sites/starting/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/starting/components/ui/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PersonDepoiment {
  /** @description image of person*/
  // avatar?: LiveImage;
  /** @description alt text image */
  alt?: string;
  /** @description depoiment in text */
  depoiment?: string;
  /** @description depoiment signature*/
  signature?: string;
}

export interface Props {
  depoiments?: PersonDepoiment[];
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

export default function DepoimentsCarroussel(
  { depoiments, preload, interval }: Props,
) {
//   console.log(depoiments[0].depoiment)
  return (
    <div
      id="depoimentsCarrosel"
      class="bg-dark-green relative px-3 md:px-[7rem] max-w-screen-2xl m-auto"
    >
      <div>
        <img src="/avatars.png" alt="" />
      </div>
      <Slider
        itemClass="w-[400px] lg:(w-[1150px] h-[350px]) text-center"
        class="relative gap-14 row-start-1 p-0 lg:(pl-[80px] pr-24)  hidden-scroll"
        snap="opacity-50 disabled:opacity-100 relative focus:outline-none"
      >
        {depoiments?.map((item) => {
            return(
            <div key={item?.signature} class="">
                {/* <img src={depoiment?.avatar} alt={depoiment?.alt} /> */}
                <p class="font-sans text-white-79 text-[20px] p-4 lg:( px-24 text-[40px])">
                  {item?.depoiment}
                </p>
                <span class="text-primary text-[16px]">
                    {item?.signature}
                </span>
              </div>
            )
        })}
      </Slider>
      <Controls />

      <SliderControllerJS rootId="depoimentsCarrosel" interval={interval && interval * 1e3} />
    </div>
  );
}
