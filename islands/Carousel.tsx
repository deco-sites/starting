import { useState } from "preact/hooks";
import type { Image } from "$live/std/ui/types/Image.ts";

export interface Props {
  images: Array<{ title: string; text: string; image: Image; author: Image; }>;
}


export default function Carousel(props: Props) {
  const [transition, setTranstion] = useState(0);
  return (
    <div>
        <div id="desktopCarousel" class={"flex flex-row gap-[2%] px-[4%] md:px-[7rem] group transition-[translate] ease-in-out duration-700 "+ "md:-translate-x-["+(28*transition)+"%]"+ " -translate-x-["+(94*transition)+"%]"}>
          {props.images.map((image, index) => {
            return (
              <div class={"flex flex-col md:w-[32%] z-0 w-[100%] flex-shrink-0 rounded transition-[opacity] ease-in-out "+(((index) >= (0 + transition) &&  (index) <= (2 + transition)) ? ' md:opacity-100' : ' md:opacity-50')+(((index) >= (0 + transition) &&  (index) <= (0 + transition)) ? ' opacity-100' : ' opacity-50')}>
                <div class="relative h-48 bg-gray-600">
                  <img src={image.image} alt="" class="absolute w-full h-full z-0" />
                  <p
                    class="absolute px-6 pt-4 font-inter font-normal not-italic text-base text-white z-10"
                    style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
                  >
                    {image.title}
                  </p>
                  <img src={image.author} alt="" class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6"/>
                </div>
                <div class="grid h-36 bg-white rounded border-[1px] border-solid border-border-black-opacity">
                  <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
                    {image.text}
                  </p>
                </div>
              </div>
            )
          })}
      </div>
      <div class="hidden md:grid absolute h-12 w-12 rounded-full bg-black -left-6  mx-6 md:mx-[7rem] top-[40%]">
          <button class="self-center justify-self-center" onClick={() => setTranstion(transition - 1)}>
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
        </div>
        <div class="hidden md:grid absolute h-12 w-12 rounded-full bg-black -right-6 mx-6 md:mx-[7rem] top-[40%]">
          <button class="self-center justify-self-center" onClick={() => setTranstion(transition + 1)}>
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
        <div class="flex flew-row justify-end gap-4 px-6 pt-6 md:hidden">
        <div class="grid h-12 w-12 rounded-full bg-black">
          <button class="self-center justify-self-center" onClick={() => setTranstion(transition - 1)}>
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
        </div>
        <div class="grid h-12 w-12 rounded-full bg-black">
          <button class="self-center justify-self-center" onClick={() => setTranstion(transition + 1)}>
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
    </div>
  );
}