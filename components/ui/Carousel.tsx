import { useId } from "preact/hooks";
import type { Image } from "deco-sites/std/components/types.ts";
import Slider from "deco-sites/starting/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/starting/islands/SliderJS.tsx";

export interface Props {
  cards: Array<{ title: string; text: string; image: Image; author: Image; url: string }>;
}

export default function Carousel({cards}: Props) {
  const id = useId();

  return (
    <section class="md:bg-white-green" id={id}>
      <div class="relative px-3 md:px-[7rem] max-w-screen-2xl m-auto">
        <Slider
          class="relative gap-6 col-span-full row-start-2 row-end-5 hidden-scroll"
          snap="opacity-50 disabled:opacity-100 focus:outline-none"
          >
          {cards?.map((card) => {
            return (
              <a href={card.url} target="_blank">
                <article class="rounded-[8px] border-[1px] border-solid border-border-black-opacity bg-white overflow-hidden">
                  <p class="bg-black text-white absolute px-2 m-5 font-normal not-italic text-[14px] z-10 rounded-[26px]" >
                    {card.title}
                  </p>
                  <img src={card.image} alt="" class="w-full"/>
                  <div class="relative">
                    <img src={card.author} alt="" class="rounded-full absolute px-3 bottom-[-1.5rem]"/>
                  </div>
                  <p class="px-3 font-normal py-8 not-italic text-left text-[20px] text-black opacity-[80%] self-center justify-self-center">
                    {card.text}
                  </p>
              </article>
              </a>
            )
          })}
        </Slider>
        <div class="flex flex-row justify-end gap-2 pt-6 pb-12 md:pt-0 md:pb-0 md:py-0">
          <button class="rounded-full p-3 bg-black focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:left-[6rem] md:top-[40%]" data-slide="prev" aria-label="Previous item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button class="rounded-full p-3 bg-black focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:top-[40%] right-[6rem]" data-slide="next" aria-label="Next item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          </button>
        </div>
      </div>
      <SliderControllerJS rootId={id} />
    </section>
  );
}
