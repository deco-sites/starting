import Image from "deco-sites/std/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  trackID?: string;
  href: string;
  text: string;
}

export interface Props {
  alert?: {
    image?: ImageWidget;
    text?: string;
    mobileText?: string;
    href?: string;
    readMoreText?: string;
  };
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  pixelTitle?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  subTitle?: string;
  ctas?: CTA[];
  showRadial?: boolean;
  shouldAddPaddingTopAndBottom?: boolean;
  banner?: ImageWidget;
}

export default function HeroBanner({
  alert,
  pixelTitle = "Professional Web Dev",
  title = "Made Easy & Fun",
  subTitle,
  ctas = [
    {
      href: "#",
      text: "Try for Free",
    },
  ],
  showRadial = true,
  shouldAddPaddingTopAndBottom = true,
  banner,
}: Props) {
  return (
    <div class="relative overflow-hidden">
      {/* <div class="deco-background"></div> */}
      {showRadial && (
        <div
          class="absolute z-10 h-[1200px] md:h-[1400px] w-[100vw] translate-y-[35%] bottom-[-200px] md:bottom-[-150px] lg:bottom-[-100px]"
          style="background: radial-gradient(circle, rgba(2,246,124,.4) 0%, rgba(255,255,255,0) 60%);"
        ></div>
      )}
      <div
        class={`lg:mx-auto z-20 lg:max-w-[1440px] ${
          shouldAddPaddingTopAndBottom && "mt-20 lg:mt-40"
        } relative z-20 px-4 lg:px-0 flex flex-col gap-8 justify-center items-center`}
      >
        {alert?.text && (
          <a
            href={alert.href}
            style={{
              boxShadow: "0px 0px 40px 0px rgba(2, 246, 124, 0.15)",
              background: "rgba(2, 246, 124, 0.05)",
              border: "1px solid rgba(2, 246, 124, 0.15)",
            }}
            target={alert.href?.includes("http") ? "_blank" : "_self"}
            class="font-albert-sans mx-6 lg:mx-0 flex items-center text-[14px] gap-4 rounded-lg bg-white/5 border border-white/[.15] backdrop-blur-xl py-2 px-4 z-10 text-white hover:scale-[1.05] transition-all duration-300 ease-out cursor-pointer"
          >
            {alert.image && (
              <img
                class="w-5 h-5"
                src={alert.image}
                alt="icon"
                width={20}
                height={20}
              />
            )}
            <p class="hidden lg:flex gap-[16px]">
              {alert.text}
              {alert.readMoreText && (
                <>
                  <span class="text-[#616B6B]">|</span>
                  <span class="text-[#616B6B]">{alert.readMoreText}</span>
                </>
              )}
            </p>
            <p class="text-sm flex gap-[16px] lg:hidden">
              {alert.mobileText || alert.text}
              {alert.readMoreText && (
                <>
                  <span class="text-[#616B6B]">|</span>
                  <span class="text-[#616B6B]">{alert.readMoreText}</span>
                </>
              )}
            </p>
            <svg
              class="h-5 w-5 hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7441 4.41083C11.0695 4.08539 11.5971 4.08539 11.9226 4.41083L16.9226 9.41083C17.248 9.73626 17.248 10.2639 16.9226 10.5893L11.9226 15.5893C11.5971 15.9148 11.0695 15.9148 10.7441 15.5893C10.4186 15.2639 10.4186 14.7363 10.7441 14.4108L14.3215 10.8334H4.66666C4.20642 10.8334 3.83333 10.4603 3.83333 10.0001C3.83333 9.53984 4.20642 9.16675 4.66666 9.16675H14.3215L10.7441 5.58934C10.4186 5.2639 10.4186 4.73626 10.7441 4.41083Z"
                fill="#616B6B"
              />
            </svg>
          </a>
        )}
        <div class="leading-none">
          {pixelTitle && (
            <h1
              class="font-[argent-pixel] text-[32px] md:text-[64px] lg:text-[72px] leading-[38px] md:leading-[100%] lg:leading-[80px] font-medium text-center"
              dangerouslySetInnerHTML={{
                __html: pixelTitle,
              }}
            ></h1>
          )}
          {title && (
            <h1
              class="font-albert-sans text-[32px] md:text-[64px] lg:text-[72px] leading-[38px] md:leading-[100%] lg:leading-[80px] font-medium text-center text-white"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></h1>
          )}
        </div>
        {subTitle && (
          <h2
            class="font-albert-sans mx-11 inline-block text-[16px] lg:text-[20px] leading-7 text-center leading-[150%] text-[#949E9E] max-w-lg md:max-w-none"
            dangerouslySetInnerHTML={{
              __html: subTitle,
            }}
          ></h2>
        )}
        <div class="flex flex-row gap-4 justify-center items-center w-full md:w-auto">
          {ctas?.map((cta) => (
            <a
              id={cta.trackID}
              href={cta.href}
              class={`hover:shadow-[0_0_40px_0_rgba(2,246,124,0.3)] w-auto transition-all duration-300 ease-out border-[#02F67C] border-2 text-base text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] md:text-lg px-8 py-2 md:px-6 lg:py-4 font-extrabold flex text-center justify-center p-3 rounded-[10px] font-bold flex items-center justify-center`}
              target={cta.href.includes("http") ? "_blank" : "_self"}
            >
              {cta.text}
            </a>
          ))}
        </div>
        {banner && (
          <Image
            src={banner}
            class="max-w-[1300px] w-full h-fit"
            loading="eager"
            preload
            width={1300}
            height={500}
          />
        )}
      </div>
    </div>
  );
}
