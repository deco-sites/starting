import { useSignal } from "@preact/signals";
import { SectionLibrary } from "deco-sites/starting/components/nrf/hero/SectionLibrary.tsx";
import { NoCodeEditor } from "deco-sites/starting/components/nrf/hero/NoCodeEditor.tsx";
import { FullCodeEditor } from "deco-sites/starting/components/nrf/hero/FullCodeEditor.tsx";
import { WebAnalytics } from "deco-sites/starting/components/nrf/hero/WebAnalytics.tsx";
import { Monitoring } from "deco-sites/starting/components/nrf/hero/Monitoring.tsx";

const TABS = [
  "Section Library",
  "No Code Editor",
  "Full Code Editor",
  "Web Analytics",
  "Monitoring",
];

const PANELS = [
  SectionLibrary,
  NoCodeEditor,
  FullCodeEditor,
  WebAnalytics,
  Monitoring,
];

export const HeroEditorTabbed = () => {
  const selectedTab = useSignal(0);
  return (
    <div class="lg:w-full lg:max-w-6xl py-4 lg:py-2 p-2 bg-white/5 border border-white/5 rounded-lg lg:rounded-3xl space-y-2 mx-2 lg:mx-0 z-40 backdrop-blur-xl">
      <div class="flex justify-center gap-x-8 gap-2 text-white flex-wrap items-center">
        {TABS.map((tab, index) => (
          <button
            onClick={() => {
              selectedTab.value = index;
              console.log(selectedTab.value);
            }}
            class={`text-[12px] lg:text-[18px] py-2 font-medium border-b ${
              index === selectedTab.value
                ? "text-[#02F67C] border-[#02F67C]"
                : "text-white border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{PANELS[selectedTab.value]()} </div>
    </div>
  );
};
