import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
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
  trackId?: "1" | "2" | "3" | "4" | "5";
  tabs?: Tab[];
  position?: "left" | "right";
}

export const ShowcaseEditorTabbed = (
  { tabs, position = "left", trackId }: Props,
) => {
  const selectedTab = useSignal(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement || !tabs || tabs.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationWidth = animate(
              `#tab-${trackId}-${selectedTab.value}`,
              { width: "100%" },
              { duration: 5, easing: "linear" },
            );

            const tabElements = document.querySelectorAll(
              "[id^='tab-" + trackId + "-']",
            );

            tabElements.forEach((element, index) => {
              if (index !== selectedTab.value) {
                animate(element, { width: "0%" }, { duration: 0 });
              }
            });

            const interval = setInterval(() => {
              selectedTab.value = (selectedTab.value + 1) % tabs.length;
            }, 5000);

            observer.unobserve(entry.target);

            return () => {
              animationWidth.stop();
              clearInterval(interval);
            };
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(containerElement);

    return () => observer.disconnect();
  }, [tabs, selectedTab.value]);

  return (
    <>
      <div
        ref={containerRef}
        class={`flex flex-row ${
          position === "left" ? "" : "flex-row-reverse "
        }lg:w-full lg:max-w-[1440px] rounded-lg lg:rounded-3xl mx-2 justify-center gap-8 lg:mx-0 z-40 backdrop-blur-xl`}
      >
        <div class="flex flex-col max-w-[410px] w-[36%] justify-center h-full gap-x-8 text-white flex-wrap">
          {tabs &&
            tabs.map((tab, index) => (
              <div
                class={`flex flex-col p-6 rounded-[16px] justify-center items-start transition-all duration-700 ${
                  index === selectedTab.value
                    ? "bg-[#0D1717]"
                    : "text-zinc-600 border-transparent hover:opacity-75"
                }`}
              >
                <button
                  onClick={() => {
                    selectedTab.value = index;
                  }}
                  class={`w-full flex flex-col gap-4 text-[12px] text-white items-center lg:text-[18px] leading-[135%] tracking-[-0.36px] text-left font-medium  ${
                    index === selectedTab.value ? "pb-4" : "border-transparent"
                  }`}
                >
                  <h3 class="flex gap-4 w-full">
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
                          class="px-2 py-1 flex items-center justify-center rounded-[53px] text-[10px] leading-[120%] text-[#0D1717]"
                          style={{ backgroundColor: tab.label?.color }}
                        >
                          {tab.label?.name}
                        </span>
                      )}
                  </h3>
                </button>
                <div
                  className={`grid 
  overflow-hidden transition-all duration-700 ease-in-out ${
                    selectedTab.value === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span
                    class={`font-normal text-[#9CA3AF] text-[14px] leading-[150%] overflow-hidden border-b border-[#616B6B] duration-300 transition-colors ${
                      index === selectedTab.value ? "pb-4" : ""
                    }`}
                  >
                    {tab.description}
                  </span>
                  <div
                    id={`tab-${trackId}-${index}`}
                    class="h-[1px] bg-[#02F67C] w-0"
                  >
                  </div>
                </div>
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
                  width={758}
                  height={507}
                  preload={index === 0 ? true : false}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
