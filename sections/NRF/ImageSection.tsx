import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  title: string;
  /**
   * @format textarea
   */
  description: string;
  image: ImageWidget;
  placement: "left" | "right";
  cta?: {
    href?: string;
    text?: string;
  };
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

export default function ImageSection({
  title,
  description,
  image,
  placement,
  disableSpacing,
  cta,
}: Props) {
  return (
    <div class="bg-black w-full">
      <div
        class={`flex lg:container lg:max-w-6xl lg:mx-auto mx-5 md:mx-10 ${
          PLACEMENT[placement]
        } gap-12 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-12 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        <img
          class="w-full lg:w-1/2 object-fit z-10"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image}
          alt={image}
          decoding="async"
          loading="lazy"
        />
        <div class="w-full lg:w-1/2 space-y-2 lg:space-y-4 lg:max-w-xl gap-4 z-10">
          <p class="text-white text-[40px] leading-[110%] font-semibold">
            {title}
          </p>
          <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
            {description}
          </p>
          {cta?.href && cta?.text && (
            <a
              class="pt-4 flex gap-2 border-none text-[#02F67C] transition-colors duration-200 cursor-pointer"
              href={cta.href}
            >
              <span>{cta.text}</span>
              <Icon
                id="ChevronRight"
                width={24}
                height={24}
                strokeWidth={"2"}
                class="text-[#02F67C]"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
