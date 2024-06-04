import { useId } from "preact/hooks";
import { useState } from "preact/hooks";
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
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  cards: Post[];
}

export default function CarouselLinks({
  bottomPadding,
  title =
    "Lorem ipsum dolor sit amet consectetur.<br>Lectus diam pellentesque sit velit.",
  cards,
}: Props) {
  const id = useId();
  // const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  // const handlePrevClick = () => {
  //   setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  //   document.getElementById(`card_${currentCardIndex - 1}`)?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //   });
  // };

  // const handleNextClick = () => {
  //   setCurrentCardIndex((prevIndex) =>
  //     Math.min(prevIndex + 1, cards.length - 1)
  //   );
  //   document.getElementById(`card_${currentCardIndex + 1}`)?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //   });
  // };

  return (
    <section
      class="flex flex-col relative px-6 py-16 lg:px-16 gap-8 lg:gap-12 max-w-[1440px] m-auto lg:py-36 z-10"
      style={{ paddingBottom: bottomPadding }}
      id={id}
    >
      {title && (
        <h2
          class="font-albert-sans text-lg lg:text-2xl font-medium text-white text-center leading-[115%] tracking-[-0.72px]"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
      )}
      <div class="relative">
        <div className="before:absolute before:inset-y-0 before:left-0 before:w-[10%] before:bg-gradient-to-l before:from-black/0 before:to-[#030806] before:z-20">
        </div>
        <div className="after:absolute after:inset-y-0 after:right-0 after:w-[10%] after:bg-gradient-to-r after:from-black/0 after:to-[#030806] after:z-20">
        </div>

        {/* Contêiner para os cards */}
        <div class="relative overflow-hidden">
          <div class="flex" style={{ justifyContent: "center" }}>
            <SliderFocus
              class="grid grid-flow-col sm:flex gap-[9.66px] sm:justify-center sm:gap-4 carousel-start"
              itemClass="h-full"
              snap="opacity-50 disabled:opacity-100 focus:outline-none h-full"
            >
              {cards.map((card, index) => (
                <a
                  id={`card_${index}`}
                  href={card.href}
                  class={`group block rounded-[8px] w-[75vw] sm:w-[193px] sm:flex-none lg:w-[320px] min-h-[230px] lg:min-h-[362px] h-full transition-all duration-300 sm:hover:w-[232px] lg:hover:w-[384px] 
                    `}
                >
                  <article class="flex flex-col gap-[14.49px] lg:gap-6 overflow-hidden backdrop-filter backdrop-blur-22 transition-all duration-300">
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
                    <div
                      class={`flex flex-col gap-4 justify-between rounded-[8px] h-[47%] transition-opacity duration-300
                        
                      `}
                    >
                      <div class="flex flex-col gap-[9.66px] lg:gap-4 overflow-hidden">
                        <h5 class="flex items-center gap-2 font-medium not-italic text-left text-[14.5px] leading-[115%] tracking-[-0.54px] lg:text-lg group-hover:lg:text-[24px] text-white justify-between">
                          {card.label}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            class="w-[14.56px] sm:w-6"
                          >
                            <path
                              d="M12 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V12M11 13L20 4M20 4H15M20 4V9"
                              stroke="#616B6B"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </h5>
                        <div class="text-[9.66px] lg:text-[12px] group-hover:lg:text-[16px] text-[#9CA3AF] leading-[1.5] line-clamp-2 overflow-ellipsis text-left">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </SliderFocus>
          </div>
        </div>

        {/* Botões de navegação */}
        <div class="flex flex-row justify-end">
          <button
            class="rounded-full p-1.5 lg:p-3 bg-[#02F67C] focus:outline-none flex items-center justify-center border-none border-0 absolute left-[0.5rem] sm:left-[1rem] lg:left-[6rem] top-[35%] sm:top-[30%] z-40"
            data-slide="prev"
            aria-label="Previous item"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="w-3 h-3 lg:w-6 lg:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            class="rounded-full p-1.5 lg:p-3 bg-[#02F67C] focus:outline-none flex items-center justify-center border-none border-0 absolute top-[35%] sm:top-[30%] right-[0.5rem] sm:right-[1rem] lg:right-[6rem] z-40"
            data-slide="next"
            aria-label="Next item"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="w-3 h-3 lg:w-6 lg:h-6"
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
      <SliderControllerJS rootId={id} infinite />
    </section>
  );
}
