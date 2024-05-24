import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { animate } from "motion";
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
  position?: "left" | "right";
}

export const ShowcaseEditorTabbed = ({ tabs, position = "left" }: Props) => {
  const selectedTab = useSignal(0);

  useEffect(() => {
    if (tabs && tabs.length > 0) {
      const animationWidth = animate(
        `#tab-${selectedTab.value}`,
        { width: "100%" },
        { duration: 10, easing: "linear" },
      );

      const tabElements = document.querySelectorAll("[id^='tab-']");
      tabElements.forEach((element, index) => {
        if (index !== selectedTab.value) {
          animate(element, { width: "0%" }, { duration: 0 });
        }
      });

      const interval = setInterval(() => {
        selectedTab.value = (selectedTab.value + 1) % tabs.length;
      }, 5000);
      return () => {
        animationWidth.stop();
        clearInterval(interval);
      };
    }
  }, [tabs, selectedTab.value]);

  return (
    <div
      class={`flex ${
        position === "left" ? "" : "flex-row-reverse "
      }lg:w-full lg:max-w-[1440px] lg:px-[120px] rounded-lg lg:rounded-3xl mx-2 gap-8 lg:mx-0 z-40 backdrop-blur-xl`}
    >
      <div class="flex flex-col w-[48%] justify-center h-full gap-x-8 gap-2 text-white flex-wrap">
        {tabs &&
          tabs.map((tab, index) => (
            <div
              class={`flex flex-col p-6 rounded-[16px] justify-center items-start ${
                index === selectedTab.value
                  ? "bg-[#0D1717]"
                  : "text-zinc-600 border-transparent"
              }`}
            >
              <button
                onClick={() => {
                  selectedTab.value = index;
                }}
                class={`w-full flex gap-4 text-[12px] items-center lg:text-[18px] leading-[135%] tracking-[-0.36px] pb-4 text-left font-medium border-b duration-200 transition-colors ${
                  index === selectedTab.value
                    ? "text-[#02F67C]"
                    : "text-zinc-600 border-transparent"
                }`}
              >
                <Image
                  src={tab.icon}
                  alt={tab.title}
                  width={24}
                  height={24}
                  preload={index === 0 ? true : false}
                />
                {tab.title}
                {tab.label?.name &&
                  (
                    <span
                      class="px-2 py-1 flex items-center justify-center rounded-[53px] text-xs font-semibold leading-[120%] text-[#0D1717]"
                      style={{ backgroundColor: tab.label?.color }}
                    >
                      {tab.label?.name}
                    </span>
                  )}
              </button>
              <div id={`tab-${index}`} class="h-[1px] bg-[#02F67C] w-0"></div>
            </div>
          ))}
      </div>
      <div>
        {tabs &&
          tabs.map((tab, index) => (
            <div
              class={`flex justify-center items-center ${
                index !== selectedTab.value ? "hidden" : ""
              }`}
            >
              <Image
                src={tab.image}
                alt={tab.title}
                width={1134}
                height={746}
                preload={index === 0 ? true : false}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
