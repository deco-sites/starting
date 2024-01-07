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
      <div class="max-w-fit mx-auto flex flex-col items-center gap-16 lg:gap-20">
        {alert?.text && (
          <div class="rounded-[56px] border border-white/15 bg-white/5 py-2 px-4">
            {alert.text}
          </div>
        )}
        <div class="flex flex-col items-center gap-4">
          <div
            class="mt-36 lg:mt-48 mx-6 lg:mx-0 inline-block text-[36px] lg:text-[104px] text-center leading-[120%] lg:leading-[100%] font-medium text-white max-w-lg lg:max-w-none"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          >
          </div>
          {subtitle &&
            (
              <div
                class="mx-11 inline-block lg:text-[24px] text-center leading-[150%] text-gray-400 max-w-lg lg:max-w-none"
                dangerouslySetInnerHTML={{
                  __html: subtitle,
                }}
              >
              </div>
            )}
          {cta &&
            cta?.map((item) => (
              <a
                href={item?.href}
                target={item?.href.startsWith("http") ? "_blank" : "_self"}
                class={`w-fit border-none rounded-full py-2 font-semibold px-6 transition-colors duration-200 cursor-pointer ${
                  item?.variant === "Reverse"
                    ? "border bg-[#113032] text-[#FFF]"
                    : "border bg-[#02F67C] text-[#113032]"
                }`}
              >
                {item?.text}
              </a>
            ))}
        </div>
      </div>
      <div class="mx-auto flex flex-col items-center">
        <HeroEditorTabbed />
      </div>
      <div class="ellipse-1 hidden lg:block" />
      <div class="ellipse-2 hidden lg:block" />
    </div>
  );
}
