import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "deco-sites/starting/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/starting/islands/SliderJS.tsx";

const getAspectRatio = (width: number, aspectRatio: number) => width / aspectRatio;
const IMAGE_WIDTH = 360;

export interface Props {
  bottomPadding?: string;
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

export default function Carousel({ bottomPadding, cards }: Props) {
  const id = useId();

  return (
    <section
      class="md:bg-white-green mt-20"
      style={{ paddingBottom: bottomPadding }}
      id={id}
    >
      <div class="relative px-6 md:px-[7rem] max-w-screen-2xl m-auto">
        <Slider
          class="relative gap-6 col-span-full row-start-2 row-end-5 hidden-scroll"
          snap="opacity-50 disabled:opacity-100 focus:outline-none"
        >
          {cards?.map((card) => {
            return (
              <a href={card.url} target="_blank" class="rounded-[8px] block w-[420px]">
                <article class="rounded-[8px] border-[1px] border-solid border-border-black-opacity bg-white overflow-hidden h-[475px] md:h-[505px]">
                  <div>
                    <Image
                      src={card.image}
                      fetchPriority={"low"}
                      class="w-full aspect-[16/9]"
                      preload={false}
                      loading={"lazy"}
                      width={IMAGE_WIDTH}
                      height={getAspectRatio(IMAGE_WIDTH, 16/9)}
                    />
                  </div>
                  <div class="flex flex-col gap-4 justify-between py-8 px-6 rounded-[8px] h-[47%]">
                    <div class="flex flex-col gap-4">
                      <p class="bg-black text-white px-3 w-[fit-content] font-normal not-italic text-[14px] z-10 rounded-[26px] flex items-center">
                        {card.title}
                      </p>
                      <p class="font-normal not-italic text-left text-[20px] text-black opacity-[80%]">
                        {card.text}
                      </p>
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-[#66736C] text-left">
                        {card.writtenByLabel} {card.author}
                      </p>
                      <p class="text-[#66736C] text-left">
                        {card.date}
                      </p>
                    </div>
                  </div>
                </article>
              </a>
            );
          })}
        </Slider>
        <div class="flex flex-row justify-end gap-2 pt-6 pb-12 md:pt-0 md:pb-0 md:py-0">
          <button
            class="rounded-full p-3 bg-black focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:left-[6rem] md:top-[40%]"
            data-slide="prev"
            aria-label="Previous item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            class="rounded-full p-3 bg-black focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:top-[40%] right-[6rem]"
            data-slide="next"
            aria-label="Next item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <SliderControllerJS rootId={id} />
    </section>
  );
}
