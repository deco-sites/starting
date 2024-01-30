import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { animate } from "motion";
import Image from "apps/website/components/Image.tsx";

export interface Tab {
  title: string;
  image: ImageWidget;
}

export interface Props {
  tabs?: Tab[];
}

export const HeroEditorTabbed = ({ tabs }: Props) => {
  const selectedTab = useSignal(0);

  useEffect(() => {
    if (tabs && tabs.length > 0) {
      const animationWidth = animate(
        `#tab-${selectedTab.value}`,
        { width: "100%" },
        { duration: 5, easing: "linear" },
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
    <div class="lg:w-full lg:max-w-6xl py-4 lg:py-2 p-2 bg-white/5 border border-white/5 rounded-lg lg:rounded-3xl space-y-2 mx-2 lg:mx-0 z-40 backdrop-blur-xl">
      <div class="flex justify-center gap-x-8 gap-2 text-white flex-wrap items-center">
        {tabs &&
          tabs.map((tab, index) => (
            <div>
              <button
                onClick={() => {
                  selectedTab.value = index;
                }}
                class={`text-[12px] lg:text-[18px] py-2 font-medium border-b duration-200 transition-colors ${
                  index === selectedTab.value
                    ? "text-[#02F67C] border-zinc-700"
                    : "text-zinc-600 border-transparent"
                }`}
              >
                {tab.title}
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
                loading={index === 0 ? "eager" : "lazy"}
                preload={index === 0 ? true : false}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
