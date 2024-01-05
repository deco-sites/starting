import { WebAnalytics } from "deco-sites/starting/components/nrf/hero/WebAnalytics.tsx";
import { useSignal } from "@preact/signals";

export interface Props {
  /**
   * @format html
   */
  title: string;
}

const TABS = [
  "Section Library",
  "No Code Editor",
  "Full Code Editor",
  "Web Analytics",
  "Monitoring",
];

export default function Hero({ title }: Props) {

  const selectedTab = useSignal(0);

  return (
    <div id="hero" class="bg-black min-h-screen space-y-10">
      <div class="max-w-fit mx-auto flex flex-col items-center gap-8">
        <div
          class="mt-48 inline-block text-[48px] lg:text-[104px] text-left leading-[100%] font-medium text-white"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></div>
      </div>
      <div class="mx-auto flex flex-col items-center">
        <div class="lg:w-full lg:max-w-6xl py-4 lg:py-2 p-2 bg-white/5 border border-white/5 rounded-lg lg:rounded-3xl space-y-2 mx-2 lg:mx-0">
          <div class="flex justify-center gap-x-8 gap-2 lg:gap-x-2 text-white flex-wrap items-center">
            {TABS.map((tab, index) => (
              <button onClick={
                () => {
                  selectedTab.value = index;
                }
              } class={`text-[12px] lg:text-[18px] lg:px-[18px] py-2 font-medium ${index === selectedTab.value ? "text-[#02F67C] border-b border-[#02F67C]" : "text-white"}`}>{tab}</button>
            ))}
          </div>
          <div>
            <WebAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
}
