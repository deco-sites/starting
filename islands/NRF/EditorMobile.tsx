import { useEffect } from "preact/hooks";
import { inView, timeline } from "motion";

import { ComponentLibrary } from "site/components/nrf/editor/ComponentLibrary.tsx";
import { RealtimeEditor } from "site/components/nrf/editor/RealtimeEditor.tsx";
import { DesignSystem } from "../../components/nrf/editor/DesignSystem.tsx";
import { FullCode } from "site/components/nrf/editor/FullCode.tsx";
import { AppsIntegrations } from "site/components/nrf/editor/AppsIntegrations.tsx";
import { Segmentation } from "site/components/nrf/editor/Segmentation.tsx";
import { ContentModeling } from "site/components/nrf/editor/ContentModeling.tsx";

import { Analytics } from "site/components/nrf/editor/Analytics.tsx";

import { EDITOR_TIMELINES } from "site/animations/timelines/editor.ts";

/**
 * @title {{{key}}}
 */
export interface EditorFeature {
  title: string;
  subtitle: string;
  key: string;
  id: string;
}

export interface Props {
  features: EditorFeature[];
}

const AnimationComponents = {
  "component-library": ComponentLibrary,
  "no-code-editing": RealtimeEditor,
  "design-system": DesignSystem,
  "full-code-editing": FullCode,
  "integrate-extend": AppsIntegrations,
  "multivariate-testing": Segmentation,
  monitoring: Analytics,
  "content-modeling": ContentModeling,
};

export default function Editor({ features }: Props) {
  useEffect(() => {
    inView(
      ".feature",
      ({ target }) => {
        const elements = Array.from(document.querySelectorAll(".feature"));
        const index = elements.indexOf(target);

        timeline(EDITOR_TIMELINES[target.id]);
      },
      { margin: "0px 0px -85% 0px" },
    );
  }, []);

  return (
    <div class="editor bg-black text-white py-32">
      <div class="flex flex-col items-center">
        {features.map(({ title, subtitle, id }, idx) => (
          <div
            id={id}
            class="feature flex flex-col items-center py-8 gap-10 z-10"
          >
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
              {AnimationComponents[id as keyof typeof AnimationComponents]({
                class: "w-full",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
