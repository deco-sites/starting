import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx"
import Slider from "deco-sites/starting/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/starting/islands/SliderJS.tsx";

export interface Props {
  cards: Array<{ 
    title: string; 
    text: string; 
    image: LiveImage; 
    author: string; 
    url: string;
    date: string;
    writtenByLabel: string;
  }>;
}

export default function Carousel({cards}: Props) {
  const id = useId();

  return (
    <section class="md:bg-white-green" id={id}>
      <div class="relative px-6 md:px-[7rem] max-w-screen-2xl m-auto">
        <Slider
          class="relative gap-6 col-span-full row-start-2 row-end-5 hidden-scroll"
          itemClass="min-h-[482px]"
          snap="opacity-50 disabled:opacity-100 focus:outline-none"
          >
          {cards?.map((card) => {
            return (
              <a href={card.url} target="_blank" class="rounded-[8px]">
                <article class="rounded-[8px] border-[1px] border-solid border-border-black-opacity bg-white overflow-hidden">
                  <Image 
                    src={card.image}
                    fetchPriority={"low"} 
                    class="w-auto"
                    preload={false} 
                    loading={'lazy'}
                    width={359}
                    height={240}
                  />
                  <div class="flex flex-col gap-4 py-8 px-6 rounded-[8px]">
                    <p class="bg-black text-white px-3 w-[fit-content] font-normal not-italic text-[14px] z-10 rounded-[26px] flex items-center" >
                      {card.title}
                    </p>
                    <p class="font-normal not-italic text-left text-[20px] text-black opacity-[80%] self-center justify-self-center">
                      {card.text}
                    </p>
                    <p class="text-[#66736C] text-left">
                      {card.author}
                    </p>
                    <p class="text-[#66736C] text-left">
                      {card.date}
                    </p>
                  </div>
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
