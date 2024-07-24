
/** @title {{{pixelTitel}}} {{{title}}} */
export interface Props {
  /**
   * @format rich-text
   */
  pixelTitle?: string;
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format rich-text
   */
  subTitle?: string;
}

export default function Hero({ pixelTitle, title, subTitle }: Props) {
  return (
    <section class="bg-[#010101] flex flex-col items-center px-8 pt-36 pb-12">
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
    </section>
  );
}
