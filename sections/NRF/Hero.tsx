import { HeroEditorTabbed } from "deco-sites/starting/islands/NRF/HeroEditorTabbed.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface CTA {
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}
export interface Props {
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subtitle?: string;
  cta?: CTA[];
  alert?: {
    image?: ImageWidget;
    text?: string;
    href?: string;
  };
}

export default function Hero({ title, subtitle, cta, alert }: Props) {
  return (
    <div
      id="hero"
      class="relative bg-black min-h-screen space-y-16 lg:space-y-20"
    >
      <div class="mt-36 lg:mt-48 max-w-fit mx-auto flex flex-col items-center gap-16 lg:gap-20">
        {alert?.text && (
          <div class="rounded-[56px] border border-white/15 bg-white/5 py-2 px-4">
            {alert.text}
          </div>
        )}
        <div class="flex flex-col items-center gap-6 lg:gap-12">
          <div
            class="mx-6 lg:mx-0 inline-block text-[36px] lg:text-[104px] text-center leading-[110%] lg:leading-[100%] font-medium text-white max-w-lg lg:max-w-none"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></div>
          {subtitle && (
            <div
              class="mx-11 inline-block lg:text-[26px] text-center leading-[150%] text-gray-400 max-w-lg lg:max-w-none"
              dangerouslySetInnerHTML={{
                __html: subtitle,
              }}
            ></div>
          )}
          {cta &&
            cta?.map((item) => (
              <a
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class="group relative relative overflow-hidden rounded-full bg-[#02F67C] px-6 py-2 lg:px-8 lg:py-3 text-black transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#02F67C] hover:to-[#06E474] hover:shadow-hero"
              >
                <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white font-medium lg:text-[24px] opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                <span class="relative">{item?.text}</span>
              </a>
            ))}
        </div>
      </div>
      <div class="mx-auto flex flex-col items-center">
        <HeroEditorTabbed />
      </div>
      {/* <div class="ellipse-1 hidden lg:block" />
      <div class="ellipse-2 hidden lg:block" /> */}
    </div>
  );
}
