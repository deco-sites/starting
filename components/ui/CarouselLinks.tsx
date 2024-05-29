import { useId } from "preact/hooks";
import Image from "deco-sites/std/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import SliderFocus from "site/components/ui/SliderFocus.tsx";
import SliderControllerJS from "site/islands/SliderJS.tsx";
import { getAspectRatio } from "site/sdk/utils.ts";

const IMAGE_WIDTH = 320;

export interface Post {
  img?: ImageWidget;
  label?: string;
  description?: string;
  href?: string;
}

export interface Props {
  bottomPadding?: string;
  cards: Post[];
}

export default function CarouselLinks({
  bottomPadding,
  cards,
}: Props) {
  const id = useId();

  return (
    <section
      class="bg-black"
      style={{ paddingBottom: bottomPadding }}
      id={id}
    >
      
      <div class="relative px-6 md:px-[7rem] max-w-screen-2xl m-auto py-28 z-10">
        <div className="before:absolute before:inset-y-0 before:left-0 before:w-64 before:bg-gradient-to-l before:from-black/0 before:to-[#030806] before:z-20">
        </div>
        <div className="after:absolute after:inset-y-0 after:right-0 after:w-64 after:bg-gradient-to-r after:from-black/0 after:to-[#030806] after:z-20">
        </div>
        <SliderFocus
          class="relative gap-4 carousel carousel-center col-span-full row-start-2 row-end-5 auto-rows-fr hidden-scroll"
          itemClass="h-full"
          snap="opacity-50 disabled:opacity-100 focus:outline-none h-full"
        >
          {cards.map((card) => {
            return (
              <a
                href={card.href}
                class="group rounded-[8px] flex w-[320px] h-full"
              >
                <article class="flex flex-col gap-6 overflow-hidden backdrop-filter backdrop-blur-22">
                  <div class="rounded-[8px]">
                    <Image
                      src={card.img as string}
                      fetchPriority={"low"}
                      class="w-full aspect-[16/9] object-cover"
                      preload={false}
                      loading={"lazy"}
                      width={IMAGE_WIDTH}
                      height={getAspectRatio(IMAGE_WIDTH, 16 / 9)}
                    />
                  </div>
                  <div class="flex flex-col gap-4 justify-between rounded-[8px] h-[47%]">
                    <div class="flex flex-col gap-4">
                      <h5 class="font-medium not-italic text-left text-[14.5px] lg:text-[24px] text-white opacity-[80%]leading-[1.18] group-hover:text-[#4ADE80]">
                        {card.label}
                      </h5>
                        <div class="text-[9.66px] lg:text-[16px] text-[#9CA3AF] leading-[1.5] line-clamp-2 overflow-ellipsis text-left">
                        {card.description}
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            );
          })}
        </SliderFocus>
        <div class="flex flex-row justify-end gap-2 pt-6 pb-12 md:pt-0 md:pb-0 md:py-0">
          <button
            class="rounded-full p-3 bg-[#02F67C] focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:left-[6rem] md:top-[40%] z-40"
            data-slide="prev"
            aria-label="Previous item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
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
            class="rounded-full p-3 bg-[#02F67C] focus:outline-none flex items-center justify-center border-none border-0 md:absolute md:top-[40%] right-[6rem] z-40"
            data-slide="next"
            aria-label="Next item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
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
