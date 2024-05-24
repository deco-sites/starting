import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
    href: string;
    text: string;
}

export interface TrustSignal {
    image: ImageWidget
    title: string
    subTitle: string
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
    trustSignals?: TrustSignal[];
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
    trustSignals,
    showRadialOnTop = true,
    shouldAddPaddingTopAndBottom = true,
}: Props) {
  return (
    <>
        <div class="deco-background"></div>
        <div class={`lg:mx-auto lg:max-w-[1440px] ${
            shouldAddPaddingTopAndBottom &&
            "mt-[80px]"
        } relative z-10 px-4 py-14 lg:py-0 lg:px-0 lg:pt-40 lg:pb-28 flex flex-col gap-8 justify-center items-center`}>
            {   showRadialOnTop &&
                <div class="h-[200vh] w-[100vw] absolute top-[-150%] md:top-[-200%] lg:top-[-150%]" style="background: radial-gradient(circle, rgba(2,246,124,.4) 0%, rgba(255,255,255,0) 60%);"></div>
            }
            <div class="leading-none">
                {
                    pixelTitle &&
                    <h1 class="font-[argent-pixel] text-[32px] lg:text-[80px] leading-[38px] lg:leading-[80px] font-medium text-center" dangerouslySetInnerHTML={{
                        __html: pixelTitle
                    }}></h1>
                }
                {
                    title &&
                    <h1 class="font-albert-sans text-[32px] lg:text-[80px] leading-[38px] lg:leading-[80px] font-medium text-center" dangerouslySetInnerHTML={{
                        __html: title
                    }}></h1>
                }
            </div>
            {
                subTitle &&
                <h2 class="font-albert-sans mx-11 inline-block text-[16px] lg:text-[20px] leading-7 text-center leading-[150%] text-gray-400 max-w-lg lg:max-w-none" dangerouslySetInnerHTML={{
                    __html: subTitle
                }}></h2>
            }
            <div class="flex flex-row gap-4 justify-center items-center w-full lg:w-auto">
                {
                    ctas?.map(cta => (
                    <a 
                        href={cta.href}
                        class={`hover:from-[#02F67C] hover:to-[#06E474] w-full lg:w-auto transition-all duration-300 ease-out hover:shadow-hero text-base text-[#0A2121] bg-[#02F67C] lg:text-lg px-8 py-2 lg:py-4 font-extrabold flex text-center justify-center p-3 rounded-[10px] font-bold flex items-center justify-center`}
                        target={cta.href.includes("http") ? "_blank" : "_self"}
                    >
                        {cta.text}
                    </a>
                    ))
                }
            </div>
            {   
                trustSignals &&
                trustSignals.length > 0 &&
                <div class="flex flex-row justify-center items-center gap-6 pt-[22px]">
                    {
                        trustSignals.map(trustSignal => (
                            <div class="flex flex-col justify-center items-center">
                                <Image
                                    width={35}
                                    class="mb-1"
                                    src={trustSignal.image}
                                    alt={trustSignal.image}
                                    decoding="async"
                                    loading="lazy"
                                />
                                <p class="font-albert-sans inline-block text-xs text-center text-gray-400" dangerouslySetInnerHTML={{
                                    __html: trustSignal.title
                                }}></p>
                                <p class="font-albert-sans inline-block text-base text-center text-white" dangerouslySetInnerHTML={{
                                    __html: trustSignal.subTitle
                                }}></p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    </>
  );
}
