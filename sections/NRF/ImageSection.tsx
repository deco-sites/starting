import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  title: string;
  description: string;
  image: ImageWidget;
  placement: "left" | "right";
  cta: {
    href: string;
    text: string;
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
  cta,
}: Props) {
  return (
    <div class="bg-black w-full">
      <div
        class={`flex xl:container xl:mx-auto py-12 lg:py-28 mx-5 md:mx-10 ${PLACEMENT[placement]} gap-12 md:gap-20 text-left items-center`}
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
          <p class="text-white text-[40px] leading-[110%] font-semibold">{title}</p>
          <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
            {description}
          </p>
          {cta && (
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
