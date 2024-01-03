import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}

export interface Props {
  /**
   * @format html
   */
  title: string;
  description: string;
  image: ImageWidget;
  placement: "left" | "right";
  cta: CTA[];
}

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

export default function HeroFlats({
  title,
  description,
  image,
  placement,
  cta,
}: Props) {
  return (
    <div class="bg-black min-h-screen">
      <div class="mx-auto flex flex-col items-center gap-8">
        <div
          class={`flex w-full max-h-screen xl:container xl:mx-auto py-12 lg:py-28 mx-5 md:mx-10 ${
            PLACEMENT[placement]
          } gap-12 md:gap-20 text-left items-center`}
        >
          <img
            class="w-full lg:w-1/2 object-fit"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
          <div class="w-full lg:w-1/2 space-y-2 lg:space-y-4 lg:max-w-xl gap-4">
            <div
              class="inline-block text-[80px] text-left leading-[100%] font-medium text-white"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              {description}
            </p>
            <div class="flex flex-col lg:flex-row gap-4">
              {cta?.map((item) => (
                <a
                  class={`border-none rounded-full text-lg py-4 px-8 transition-colors duration-200 cursor-pointer ${
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
        </div>
      </div>
    </div>
  );
}
