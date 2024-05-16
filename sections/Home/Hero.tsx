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
}

export default function Hero({
    pixelTitle = "Professional Web Dev",
    title = "Made Easy & Fun",
    subTitle = "Find all the capabilities you might need to power anything (or everything). Use only what you need, pay only for what you use.",
    ctas = [
        {
            href: '#',
            text: 'Try for Free',
        }
    ],
    trustSignals = [
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/8bca99ef-0095-43e0-8abb-315ca2910968',
            title: 'Product Hunt',
            subTitle: '#1 Product of the Week'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/2dcb3c54-ff6f-4f9c-a9ae-573b4729f73b',
            title: 'Developer Tools',
            subTitle: '#1 Product of the Week'
        }
    ]
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-6xl relative z-10 px-4 py-14 lg:py-0 lg:px-0 lg:h-screen flex flex-col gap-10 justify-center items-center">
        <div class="leading-none">
            {
                pixelTitle &&
                <h1 class="font-albert-sans text-[50px] lg:text-[80px] font-medium text-white text-center" dangerouslySetInnerHTML={{
                    __html: pixelTitle
                }}></h1>
            }
            {
                title &&
                <h1 class="font-albert-sans text-[40px] lg:text-[80px] font-medium text-white text-center" dangerouslySetInnerHTML={{
                    __html: title
                }}></h1>
            }
        </div>
        {
            subTitle &&
            <h2 class="font-albert-sans mx-11 inline-block text-[40px] lg:text-[26px] text-center leading-[150%] text-gray-400 max-w-lg lg:max-w-none" dangerouslySetInnerHTML={{
                __html: subTitle
            }}></h2>
        }
        <div class="flex flex-row gap-4 justify-center items-center">
            {
                ctas?.map(cta => (
                <a 
                    href={cta.href}
                    class={`text-base text-[#0A2121] bg-[#02F67C] lg:text-lg px-8 py-4 font-extrabold flex uppercase text-center justify-center p-3 rounded-[10px] font-bold flex items-center justify-center`}
                    target={cta.href.includes("http") ? "_blank" : "_self"}
                  >
                    {cta.text}
                  </a>
                ))
            }
        </div>
        <div class="flex flex-row justify-center items-center">
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
                        <p class="font-albert-sans mx-11 inline-block text-sm text-center text-gray-400" dangerouslySetInnerHTML={{
                            __html: trustSignal.subTitle
                        }}></p>
                        <p class="font-albert-sans mx-11 inline-block text-lg text-center text-white" dangerouslySetInnerHTML={{
                            __html: trustSignal.title
                        }}></p>
                    </div>
                ))
            }
        </div>
    </div>
  );
}
