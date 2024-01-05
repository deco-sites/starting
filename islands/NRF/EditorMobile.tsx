import { useEffect } from "preact/hooks";
import { animate, inView, stagger, timeline } from "motion";
import { useSignal } from "@preact/signals";

import { ComponentLibrary } from "deco-sites/starting/components/nrf/editor/ComponentLibrary.tsx";
import { RealtimeEditor } from "deco-sites/starting/components/nrf/editor/RealtimeEditor.tsx";
import { DesignSystem } from "../../components/nrf/editor/DesignSystem.tsx";
import { FullCode } from "deco-sites/starting/components/nrf/editor/FullCode.tsx";
import { AppsIntegrations } from "deco-sites/starting/components/nrf/editor/AppsIntegrations.tsx";
import { Segmentation } from "deco-sites/starting/components/nrf/editor/Segmentation.tsx";
import { ContentModeling } from "deco-sites/starting/components/nrf/editor/ContentModeling.tsx";

import { Analytics } from "deco-sites/starting/components/nrf/editor/Analytics.tsx";

import { EDITOR_TIMELINES } from "deco-sites/starting/animations/timelines/editor.ts";

/**
 * @title {{{key}}}
 **/
export interface EditorFeature {
  title: string;
  subtitle: string;
  key: string;
}

export interface Props {
  features: EditorFeature[];
}

const svgs = [
  ComponentLibrary,
  RealtimeEditor,
  DesignSystem,
  FullCode,
  AppsIntegrations,
  Segmentation,
  Analytics,
  ContentModeling,
];

export default function Editor({ features }: Props) {
  useEffect(() => {
    inView(
      ".feature",
      ({ target }) => {
        const elements = Array.from(document.querySelectorAll(".feature"));
        const index = elements.indexOf(target);

        timeline(EDITOR_TIMELINES[index]);
      },
      { margin: "0px 0px -85% 0px" }
    );
  }, []);

  return (
    <div class="editor bg-black text-white py-32">
      <div class="flex flex-col items-center">
        {features.map(({ title, subtitle }, idx) => (
          <div class="feature flex flex-col items-center py-8 gap-10">
            <div class="space-y-4 mx-10">
              <p class="text-[#02F67C] text-[32px]">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <div id={`feature-${idx}`} class="space-y-6">
                <h2 class="text-[32px] font-semibold leading-[100%]">
                  {title}
                </h2>
                <p class="text-zinc-400 text-sm">{subtitle}</p>
              </div>
            </div>
            <div class="w-[93%]">
              {svgs[idx]({
                class: "w-full",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
