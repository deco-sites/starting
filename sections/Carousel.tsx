import { useId } from "preact/hooks";
import type { Image } from "$live/std/ui/types/Image.ts";
import Slider from "../components/Slider.tsx";
import SliderControllerJS from "../islands/SliderJS.tsx";

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
                <article class="rounded border-[1px] border-solid border-border-black-opacity bg-white overflow-hidden">
                  <p class="absolute px-3 pt-4 font-inter font-normal not-italic text-base text-white z-10" style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);">
                    {card.title}
                  </p>
                  <img src={card.image} alt="" class="w-full"/>
                  <div class="relative">
                    <img src={card.author} alt="" class="rounded-full absolute px-3 bottom-[-1.5rem]"/>
                  </div>
                  <p class="px-3 font-inter font-normal py-8 not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
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
