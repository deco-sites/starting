import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  topics?: Array<Topic>;
}

export interface Topic {
  href: string;
  image: LiveImage;
  label: string;
  lazyload?: false | true;
}

export default function PopularTopics(props: Props) {
  return (
    <div class="max-w-[1200px] lg:mx-auto mx-6 lg:mt-[72px] mt-[80px]">
      <h2 class="text-zinc-900 text-[28px] font-semibold leading-loose lg:mb-[32px] mb-[24px]">
        {props.title}
      </h2>
      {!!props?.topics?.length && (
        <ul class="grid lg:grid-cols-5 grid-cols-2 grid-flow-row auto-rows-fr lg:gap-10 gap-2">
          {props.topics.map(({ lazyload, href, image, label }) => (
            <li>
              <a
                target="_blank"
                href={href}
                aria-label={label}
                class="flex items-center lg:p-10 p-4 bg-white rounded-2xl border border-neutral-300 lg:min-w-52 lg:min-h-[216px] min-h-[72px] w-full cursor-pointer"
              >
                <figure class="flex lg:flex-col items-center justify-center lg:gap-[24px] gap-2 w-full h-full">
                  <Image
                    fetchPriority={lazyload ? "low" : "high"}
                    preload={false}
                    loading={lazyload ? "lazy" : "eager"}
                    src={image}
                    width={40}
                    height={40}
                    class="lg:w-10 lg:h-10 w-6 h-6"
                    alt={label}
                  />
                  <figcaption class="text-center text-[#181B1B] lg:text-2xl text-[13px] font-normal leading-7 tracking-[-0.4px]">
                    {label}
                  </figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
