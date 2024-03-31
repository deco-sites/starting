import { useId } from "preact/hooks";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import SliderControllerJS from "site/islands/SliderJS.tsx";
import { getAspectRatio } from "site/sdk/utils.ts";
import {
  getBlogPath,
  Post,
  SupportedLocales,
} from "site/components/utils/Blog.ts";

const IMAGE_WIDTH = 360;

export interface Props {
  bottomPadding?: string;
  cards: Post[];
  locale?: SupportedLocales;
}

export default function Carousel({
  bottomPadding,
  cards,
  locale = "en",
}: Props) {
  const id = useId();

  return (
    <section
      class="bg-black"
      style={{ paddingBottom: bottomPadding }}
      id={id}
    >
      <div class="relative px-6 md:px-[7rem] max-w-screen-2xl m-auto py-28">
        <Slider
          class="relative gap-6 col-span-full row-start-2 row-end-5 auto-rows-fr hidden-scroll"
          itemClass="h-full"
          snap="opacity-50 disabled:opacity-100 focus:outline-none h-full"
        >
          {cards.map((card) => {
            return (
              <a
                href={getBlogPath(card.path, locale)}
                class="rounded-[8px] flex w-[402.66px] h-full"
              >
                <article class="rounded-[8px] border-[1px] border-[2px] border-[#FFFFFF26] bg-[#FFFFFF0D] overflow-hidden backdrop-filter backdrop-blur-22">
                  <div>
                    <Image
                      src={card.img}
                      fetchPriority={"low"}
                      class="w-full aspect-[16/9] object-cover"
                      preload={false}
                      loading={"lazy"}
                      width={IMAGE_WIDTH}
                      height={getAspectRatio(IMAGE_WIDTH, 16 / 9)}
                    />
                  </div>
                  <div class="flex flex-col gap-4 justify-between p-8 rounded-[8px] h-[47%]">
                    <div class="flex flex-col gap-4">
                      <div class="flex flex-row gap-2">
                        {card.tags?.map((tag) => (
                          <p class="bg-black text-white px-3 w-[fit-content] font-normal not-italic text-[14px] z-10 rounded-[26px] flex items-center">
                            {tag}
                          </p>
                        ))}
                      </div>
                      <h1 class="font-normal not-italic text-left text-[20px] text-white opacity-[80%]leading-[1.18]">
                        {card.body[locale]?.title}
                      </h1>
                      <div class="text-base text-white leading-[1.5] line-clamp-2 overflow-ellipsis text-left">
                        {card.body[locale]?.descr}
                      </div>
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-left">
                        {card.date} • {card.author}
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
