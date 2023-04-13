import QuillText from "./QuillText.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx"

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: {
    imageDesktop: {src: LiveImage},
    imageMobile: {src: LiveImage}
  },
  imageEffect: LiveImage,
  mainText: string;
  secondText: string;
}

export default function Integration({mainText, secondText, image, imageEffect}: Props) {
  return (
    <section class="bg-dark-green h-[150vw] md:h-auto">
      <div class="relative flex flex-col md:flex-row md:px-[7rem] pt-4 pb-12 md:pb-32 max-w-screen-2xl m-auto">
        <div class="w-full z-10">
          <Picture class="w-full md:w-1/2 block" preload={false}>
            <Source
              media="(max-width: 767px)"
              fetchPriority={"low"}
              src={image.imageMobile.src}
              width={637}
              height={657}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"low"}
              src={image.imageDesktop.src}
              width={"auto"}
              height={"auto"}
            />
            <img
              class="object-cover w-full sm:h-full"
              loading="lazy"
              src={image.imageDesktop.src}
              alt="Integrate with everything"
            />
          </Picture>
        </div>
        <div class="absolute top-[74vw] flex flex-col px-6 gap-10 md:(left-[39%] top-[41%] max-w-[760px])">
          <Picture class="block absolute max-w-full top-[-130px] left-[10px] md:(top-[-300px] left-[-350px])" preload={false}>
            <Source
              media="(max-width: 767px)"
              fetchPriority={"low"}
              src={imageEffect}
              width={300}
              height={300}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"low"}
              src={imageEffect}
              width={400}
              height={400}
            />
            <img
              class="object-cover w-full sm:h-full"
              loading="lazy"
              src={imageEffect}
              alt="Image Effect"
            />
          </Picture>
          <p class='font-sans not-italic font-bold text-white text-[56px] leading-[64px] tracking-[-1%] z-10 md:(text-[8vw] leading-[75.5px]) xl:(text-[112px] leading-[105.5px])' dangerouslySetInnerHTML={{ __html: mainText }}></p>
          <p class="font-sans not-italic font-normal text-[20px] md:text-[2vw] xl:text-[24px] leading-[30px] text-white opacity-[67%] z-10">
            {secondText}
          </p>
        </div>
      </div>
    </section>
  );
}
