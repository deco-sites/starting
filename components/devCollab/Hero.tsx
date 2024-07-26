import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "deco-sites/std/components/Image.tsx";

/**
 * @title {{{text}}}
 */
export interface CTA {
  trackID?: string;
  href: string;
  text: string;
}

export interface Props {
  background?: ImageWidget;
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  subTitle?: string;
  ctas?: CTA[];
}

export default function Hero({
  background,
  title = "Made Easy & Fun",
  subTitle,
  ctas = [
    {
      href: "#",
      text: "Try for Free",
    },
  ],
}: Props) {
  return (
    <div class="relative z-10 mx-0 md:mx-4 mt-28 mb-12">
      <div class="flex flex-col items-center justify-center gap-8 h-[675px]">
        {background && (
          <Image src={background} width={400} height={600} class="absolute top-0 max-w-[1280px] w-full h-full object-cover rounded-3xl" />
        )}
        <div class="flex flex-col items-center gap-4 leading-none z-20">
          {title && (
            <h1
              class="font-albert-sans text-[32px] md:text-[64px] lg:text-[80px] leading-[38px] md:leading-[100%] lg:leading-[80px] font-medium text-center text-white"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></h1>
          )}
          {subTitle && (
            <h2
              class="font-albert-sans mx-11 inline-block text-[16px] lg:text-[20px] leading-7 text-center leading-[150%] text-white max-w-lg md:max-w-2xl"
              dangerouslySetInnerHTML={{
                __html: subTitle,
              }}
            ></h2>
          )}
        </div>
        <div class="flex flex-row gap-4 justify-center items-center w-full md:w-auto z-20">
          {ctas?.map((cta) => (
            <a
              id={cta.trackID}
              href={cta.href}
              class={`w-auto transition-all duration-300 ease-out border-[#02F67C] border-2 text-base text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] md:text-lg px-8 py-2 md:px-6 lg:py-4 font-extrabold flex text-center justify-center p-3 rounded-[10px] font-bold flex items-center`}
              target={cta.href.includes("http") ? "_blank" : "_self"}
            >
              {cta.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
