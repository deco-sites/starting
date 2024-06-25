export interface CTA {
  href: string;
  text: string;
}

export interface Props {
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
}

export default function TextHero({
  pixelTitle = "Professional Web Dev",
  title = "Made Easy & Fun",
  subTitle,
  ctas = [
    {
      href: "https://admin.deco.cx/spaces/new",
      text: "Try for Free",
    },
  ],
}: Props) {
  return (
    <div>
      <div class="deco-background"></div>
      <div
        class={`lg:mx-auto z-20 lg:max-w-[1440px] relative z-20 px-6 py-12 lg:py-40 lg:px-0 flex flex-col gap-8 justify-center items-center`}
      >
        <div class="leading-none">
          {pixelTitle &&
            (
              <h2
                class="font-[argent-pixel] text-[32px] lg:text-[72px] leading-[38px] md:leading-[100%] lg:leading-[80px] font-medium text-center"
                dangerouslySetInnerHTML={{
                  __html: pixelTitle,
                }}
              >
              </h2>
            )}
          {title &&
            (
              <h2
                class="font-albert-sans text-[32px] lg:text-[72px] leading-[38px] md:leading-[100%] lg:leading-[80px] font-medium text-center text-white"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </h2>
            )}
        </div>
        {subTitle &&
          (
            <h3
              class="font-albert-sans mx-11 inline-block text-[16px] lg:text-[20px] leading-7 text-center leading-[150%] text-[#949E9E] max-w-lg md:max-w-none"
              dangerouslySetInnerHTML={{
                __html: subTitle,
              }}
            >
            </h3>
          )}
        <div class="flex flex-row gap-4 justify-center items-center w-full md:w-auto">
          {ctas?.map((cta) => (
            <a
              href={cta.href}
              class={`w-full hover:shadow-[0_0_40px_0_rgba(2,246,124,0.3)] md:w-auto transition-all duration-300 ease-out border-[#02F67C] border-2 text-base text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] md:text-lg px-8 py-2 md:px-6 lg:py-4 font-extrabold flex text-center justify-center p-3 rounded-[10px] font-bold flex items-center justify-center`}
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
