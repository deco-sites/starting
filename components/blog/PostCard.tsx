import { Post } from "deco-sites/starting/components/utils/Blog.ts";
import { getAspectRatio } from "deco-sites/starting/sdk/utils.ts";
import Image from "deco-sites/std/components/Image.tsx";

const IMAGE_WIDTH = 360;

export function BlogPostCard(props: Post) {
  return (
    <a href={props.path} class="group mx-auto duration-200">
      <div class="flex flex-col w-full text-deco-dark-green mb-10 sm:mb-20">
        <div class="overflow-hidden rounded-lg ">
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
        <div class="mt-6 flex flex-col gap-2">
          <h1 class="text-xl font-medium leading-[1.18]">{props.title}</h1>
          <div class="text-base text-[#66736C] leading-[1.5]">
            {props.descr}
          </div>
          <div class="text-sm font-light text-[#66736C]">
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
