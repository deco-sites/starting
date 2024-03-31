import { Post, SupportedLocales } from "site/components/utils/Blog.ts";
import { getAspectRatio } from "site/sdk/utils.ts";
import Image from "deco-sites/std/components/Image.tsx";

const IMAGE_WIDTH = 360;

export function BlogPostCard({
  locale = "en",
  ...props
}: Post & { locale?: SupportedLocales }) {
  return (
    <a href={props.path} class="group duration-200 border-[2px] border-[#FFFFFF26] bg-[#FFFFFF0D] rounded-[22px] backdrop-filter backdrop-blur-24">
      <div class="flex flex-col w-full text-white">
        <div class="overflow-hidden rounded-lg">
          <Image
            src={props.img}
            class="w-full aspect-[4/3] transition-transform duration-300 transform group-hover:scale-105 object-cover"
            sizes="(max-width: 360px) 100vw, 50vw"
            width={IMAGE_WIDTH}
            height={getAspectRatio(IMAGE_WIDTH, 4 / 3)}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            preload
          />
        </div>
        <div class="flex flex-col gap-4 p-8">
          <h1 class="text-xl font-semi-medium leading-[130%] hover:text-[#4ADE80] tracking-[-0.3px]">
            {props.body[locale]?.title}
          </h1>
          <div class="text-base leading-[1.5] leading-[120%] tracking-[-0.4px]">
            {props.body[locale]?.descr}
          </div>
          <div class="text-sm font-light">
            <div class="flex gap-2">
              <span>{props.date}</span>
              <span>•</span>
              <span>{props.author}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
