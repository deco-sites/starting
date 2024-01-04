import { WebAnalytics } from "deco-sites/starting/components/nrf/hero/WebAnalytics.tsx";

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
  return (
    <div id="hero" class="bg-black min-h-screen space-y-10">
      <div class="max-w-fit mx-auto flex flex-col items-center gap-8">
        <div
          class="mt-48 inline-block text-[104px] text-left leading-[100%] font-medium text-white"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></div>
      </div>
      <div class="mx-auto flex flex-col items-center">
        <div class="p-2 bg-white/5 border border-white/5 rounded-3xl space-y-2">
          <div class="flex justify-center gap-2 text-white">
            {TABS.map((tab) => (
              <div class="text-[14px] px-[18px] py-2 text-white/50">{tab}</div>
            ))}
          </div>
          <WebAnalytics />
        </div>
      </div>
    </div>
  );
}
