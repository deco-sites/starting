import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { animate } from "motion";
import Icon from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Tab {
  title: string;
  description: string;
  icon: ImageWidget;
  image: ImageWidget;
  label?: {
    name?: string;
    /** @format color-input */
    color?: string;
  };
}

export interface Props {
  tabs?: Tab[];
}

export const ShowcaseEditorAccordion = ({ tabs }: Props) => {
  const itemVisible = useSignal(0);
  const len = tabs?.length;
  const len2 = 5 * ((len ?? 0) - 1);

  return (
    <>
      <ul class="flex flex-col w-full relative z-30">
        {tabs?.map((tab, index) => (
          <li
            className={`flex flex-col items-start w-[calc((100%/${len})-${len2}px)] max-h-[582px] list-none rounded-[16px] mb-2 p-6 ${
              itemVisible.value == index
                ? "bg-[#0D1717]"
                : "bg-[#070D0D] hover:cursor-pointer hover:opacity-75 transition-opacity duration-300"
            } text-black`}
            onClick={() => (itemVisible.value = index)}
          >
            <div
              className={`flex items-center w-full gap-4`}
            >
              <Image
                src={tab.icon}
                alt={tab.title}
                width={24}
                height={24}
              />
              <h3 className="text-white text-[18px] leading-relaxed font-semibold leading-[120%] tracking-[-0.36px]">
                {tab.title}
              </h3>
              {tab.label?.name &&
                (
                  <span
                    class="px-2 py-1 flex items-center justify-center rounded-[53px] text-[10px] leading-[120%] text-[#0D1717]"
                    style={{ backgroundColor: tab.label?.color }}
                  >
                    {tab.label?.name}
                  </span>
                )}
            </div>
            <div
              className={`grid 
  overflow-hidden transition-all duration-700 ease-in-out gap-6 ${
                itemVisible.value === index
                  ? "max-[1263px]:grid-rows-[1fr] opacity-100 pt-4"
                  : "max-[1263px]:grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden space-y-6">
                <p className="text-white text-[14px] leading-[150%]">
                  {tab.description}
                </p>
                <Image
                  src={tab.image}
                  alt={tab.title}
                  width={672}
                  height={449}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
