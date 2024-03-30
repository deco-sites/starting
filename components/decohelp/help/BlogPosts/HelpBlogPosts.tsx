import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "site/components/decohelp/help/BlogPosts/Slider.tsx";
import SliderControllerJS from "site/islands/SliderJS.tsx";

export interface Props {
  cards: Array<{
    title: string;
    image: LiveImage;
    altImage: string;
    url: string;
    avatar: LiveImage;
    altAvatar: string;
    writtenByLabel: string;
    /**
     * @format textarea
     */
    label: string;
  }>;
}

export default function BlogPosts({ cards }: Props) {
  const id = useId();
  return (
    <section
      class="lg:bg-white-green-half-desktop bg-white-green-half-mobile lg:pb-[80.33px] pb-0"
      id={id}
    >
      <div class="relative 2xl:mr-[calc((100%-1200px)/2)] xl:ml-[calc((100%-1200px)/2)] lg:ml-[24px] mx-0">
        <Slider
          class="relative gap-6 col-span-full row-start-2 row-end-5 hidden-scroll"
          snap="opacity-50 disabled:opacity-100 focus:outline-none"
        >
          {cards?.map((card) => {
            return (
              <a href={card.url} target="_blank" class="rounded-[8px]">
                <article class="rounded-[8px] border-[1px] border-solid border-border-black-opacity bg-white overflow-hidden h-full">
                  <div class="relative">
                    <p class="bg-black text-white m-[24px] px-3 py-1 w-[fit-content] font-normal not-italic text-[14px] z-10 rounded-[26px] flex items-center absolute">
                      {card.title}
                    </p>
                    <figure>
                      <Image
                        src={card.image}
                        fetchPriority={"low"}
                        class="w-full max-h-[271px] object-cover"
                        preload={false}
                        loading={"lazy"}
                        width={359}
                        height={271}
                        alt={card.altImage}
                      />
                    </figure>
                  </div>
                  <div class="py-8 px-6 rounded-[8px] h-[47%]">
                    <div class="flex flex-col justify-between gap-2">
                      <figure class="rounded-full absolute bottom-[130px]">
                        <Image
                          src={card.avatar || ""}
                          fetchPriority={"high"}
                          class="w-[56px] h-[56px] max-w-none"
                          preload={false}
                          loading={"eager"}
                          width={56}
                          height={56}
                          alt={card.altAvatar}
                        />
                      </figure>
                      <p class="text-black text-opacity-60 text-base font-normal leading-[30px] text-left">
                        {card.writtenByLabel}
                      </p>
                      <p class="text-black text-opacity-80 text-[22px] font-normal leading-7 text-left">
                        {card.label}
                      </p>
                    </div>
                  </div>
                </article>
              </a>
            );
          })}
        </Slider>
        <div class="flex flex-row justify-end gap-2 pt-6 pb-[45px] lg:pt-0 lg:pb-0 lg:py-0 lg:pr-0 pr-[45px]">
          <button
            class="rounded-full p-3 bg-black focus:outline-none flex items-center justify-center border-none border-0 lg:absolute lg:top-[40%] md:left-[-1rem]"
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
            class="rounded-full p-3 bg-black focus:outline-none flex items-center justify-center border-none border-0 lg:absolute lg:top-[40%] 2xl:right-[3.5rem] sm:right-[10.625rem]"
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
