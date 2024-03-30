import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  title: string;
  image: LiveImage;
  alt: string;
  tags: Array<Tags>;
  cards?: Array<Card>;
  lazyload?: false | true;
}

export interface Tags {
  label: string;
  href: string;
}

export interface Card {
  href: string;
  image: LiveImage;
  alt: string;
  label: string;
  /** @format textarea */
  description: string;
}

export default function HowCanWeHelp(props: Props) {
  return (
    <div class="h-full flex flex-col gap-[40px]">
      <div class="flex flex-col lg:items-end items-center justify-end max-w-[1200px] mx-auto w-full lg:gap-0 gap-[30px]">
        <div class="flex items-end w-full relative z-10 lg:pt-[70px]">
          <div class="flex flex-col gap-[32px] lg:pb-[40px] lg:pt-0 lg:pb-0 pt-[48px] lg:pb-[40px] w-full">
            <div class="flex flex-col gap-[32px] lg:px-0 px-[24px]">
              <h1 class="lg:text-[64px] text-[43px] font-semibold text-[#113032] leading-[48px] tracking-[-1.6px]">
                {props.title}
              </h1>
              <div class="flex items-center">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  class="lg:max-w-[480px] w-full py-[16px] pr-[16px] pl-[48px] rounded-[52px] border border-[#D4DBD7] placeholder-[#66736C] text-[15px] relative focus:outline-none"
                />
                <Icon
                  id="MagnifyingGlass"
                  size={20}
                  strokeWidth={0.01}
                  class="absolute ml-[16px] w-5 h-5 p-[1.67px] fill-current text-[#66736C] focus:outline-none"
                />
              </div>
            </div>
            {!!props.tags.length && (
              <ul class="flex gap-2 overflow-x-auto overflow-y-hidden lg:pl-0 pl-[24px] hidden-scroll">
                {props.tags.map(({ label, href }) => (
                  <li>
                    <a
                      target="_blank"
                      href={href}
                      aria-label={label}
                      class="flex items-center no-underline px-2 py-1 h-[24px] bg-[#161616] text-[#F4F4F4] rounded-[20px] whitespace-nowrap text-[13px] font-semibold leading-[20px] cursor-pointer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <figure class="bg-[#E0FFEF] w-full h-[300px] rounded-r-[400px] md:mr-0 mr-[48px] lg:absolute relative z-0 flex items-end justify-end overflow-hidden">
          <Image
            fetchPriority={props.lazyload ? "low" : "high"}
            preload={false}
            loading={props.lazyload ? "lazy" : "eager"}
            decoding="sync"
            src={props.image}
            class="md:max-w-[464.87px] md:max-h-[300px] min-h-[225.98px] max-w-none md:mr-[58.72px] mr-[34.35px]"
            width={464.87}
            height={300}
            alt={props.image}
          />
        </figure>
      </div>
      {!!props?.cards?.length && (
        <div class="grid grid-cols-2 grid-flow-row auto-rows-fr max-w-[1200px] mx-auto lg:gap-[32px] gap-[16px] lg:px-0 px-[16px]">
          {props.cards.map((
            { href, image, alt, label, description },
          ) => (
            <a
              target="_blank"
              href={href}
              aria-label={label}
              class="flex flex-col bg-[#0A2121] lg:p-[40px] p-[16px] rounded-[16px] md:max-w-[584px] h-full"
            >
              <Image
                fetchPriority={props.lazyload ? "low" : "high"}
                preload={false}
                loading={props.lazyload ? "lazy" : "eager"}
                decoding="sync"
                src={image}
                class="object-cover lg:w-10 lg:h-10 w-[24px] h-[24px] lg:mb-[24px] mb-[16px]"
                width={40}
                height={40}
                alt={alt}
              />
              <h2 class="text-[#FFFFFF] lg:text-[28px] text-[24px] leading-[32px] tracking-[-0.8px] font-semibold lg:mb-[16px]">
                {label}
              </h2>
              <p class="text-[#FFFFFF] text-[15px] font-normal leading-[20px]">
                {description}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
