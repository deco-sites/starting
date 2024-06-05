export interface CTA {
    trackID?: string;
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
    showRadialOnTop?: boolean;
    shouldAddPaddingTopAndBottom?: boolean;
}

export default function Hero({
    pixelTitle = "Professional Web Dev",
    title = "Made Easy & Fun",
    subTitle,
    ctas = [
        {
            href: '#',
            text: 'Try for Free',
        }
    ],
    showRadialOnTop = true,
    shouldAddPaddingTopAndBottom = true,
}: Props) {
  return (
    <div>
        <div class="deco-background"></div>
        {   showRadialOnTop &&
            <div class="h-[200vh] z-10 w-[100vw] md:w-[100vw] absolute top-[-130%] lg:w-[100vw] lg:top-[-150%]" style="background: radial-gradient(circle, rgba(2,246,124,.4) 0%, rgba(255,255,255,0) 60%);"></div>
        }
        <div class={`lg:mx-auto z-20 lg:max-w-[1440px] ${
            shouldAddPaddingTopAndBottom &&
            "mt-20 lg:mt-40"
        } relative z-20 px-4 py-14 lg:px-0 flex flex-col gap-8 justify-center items-center`}>
            <div class="leading-none">
                {
                    pixelTitle &&
                    <h1 class="font-[argent-pixel] text-[32px] md:text-[64px] lg:text-[80px] leading-[38px] md:leading-[100%] lg:leading-[80px] font-medium text-center" dangerouslySetInnerHTML={{
                        __html: pixelTitle
                    }}></h1>
                }
                {
                    title &&
                    <h1 class="font-albert-sans text-[32px] md:text-[64px] lg:text-[80px] leading-[38px] md:leading-[100%] lg:leading-[80px] font-medium text-center text-white" dangerouslySetInnerHTML={{
                        __html: title
                    }}></h1>
                }
            </div>
            {
                subTitle &&
                <h2 class="font-albert-sans mx-11 inline-block text-[16px] lg:text-[20px] leading-7 text-center leading-[150%] text-[#949E9E] max-w-lg md:max-w-none" dangerouslySetInnerHTML={{
                    __html: subTitle
                }}></h2>
            }
            <div class="flex flex-row gap-4 justify-center items-center w-full md:w-auto">
                {
                    ctas?.map(cta => (
                    <a 
                        id={cta.trackID}
                        href={cta.href}
                        class={`hover:from-[#02F67C] hover:to-[#06E474] w-full md:w-auto transition-all duration-300 ease-out hover:shadow-hero text-base text-[#0A2121] bg-[#02F67C] md:text-lg px-8 py-2 md:px-6 lg:py-4 font-extrabold flex text-center justify-center p-3 rounded-[10px] font-bold flex items-center justify-center`}
                        target={cta.href.includes("http") ? "_blank" : "_self"}
                    >
                        {cta.text}
                    </a>
                    ))
                }
            </div>
        </div>
    </div>
  );
}
