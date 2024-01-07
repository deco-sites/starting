import { useEffect } from "preact/hooks";
import { animate, scroll, inView, stagger, timeline } from "motion";
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
  id: string;
}

export interface Props {
  title: string;
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

export default function Editor({ title, features }: Props) {
  const currentFeature = useSignal<number | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isScrollingDown = true;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
    };

    self.addEventListener("scroll", handleScroll);

    const animateItems = (target: Element) => {
      animate(
        target.querySelectorAll(".item"),
        { opacity: 1, transform: "translateY(0px)" },
        { delay: stagger(0.1), duration: 1, easing: "ease-out" }
      );
    };

    scroll(
      ({ y }: { y: { progress: number } }) => {
        const elements = Array.from(document.querySelectorAll(".feature-text"));
        const index = Math.floor(y.progress * elements.length);
        const fractionPerElement = 1 / elements.length;

        const fraction =
          (y.progress - index * fractionPerElement) / fractionPerElement;

        animate(
          `#feature-progress-${index}`,
          {
            strokeDasharray: `${fraction}, 1`,
          },
          {
            duration: 0,
          }
        );
      },
      {
        target: document.querySelector(`.editor`)!,
      }
    );

    const animateFeature = (
      target: Element,
      index: number,
      isEntering: boolean
    ) => {
      const directionY = isScrollingDown
        ? isEntering
          ? "100px"
          : "-100px"
        : isEntering
        ? "-100px"
        : "100px";
      const opacityValue = isEntering ? 1 : 0;
      const colorValue = isEntering ? "white" : "#52525B";
      const scaleValue = isEntering ? "scale(1.1)" : "scale(1)";

      const transformStarting = isEntering
        ? `translateY(${directionY})`
        : "translateY(0px)";
      const transformEnding = isEntering
        ? "translateY(0px)"
        : `translateY(${directionY})`;

      animate(
        `#feature-image-${index}`,
        { opacity: opacityValue },
        { duration: 0.3 }
      );

      timeline(EDITOR_TIMELINES[index]);

      animate(
        `#feature-title-${index}`,
        { color: colorValue },
        { duration: 0.3 }
      );

      animate(
        `#feature-text-${index}`,
        {
          opacity: opacityValue,
          transform: [transformStarting, transformEnding],
        },
        { delay: 0.1, duration: 0.3 }
      );
    };

    inView(".editor", ({ target }) => animateItems(target), {
      margin: "0px 0px -100px 0px",
    });

    inView(
      ".feature-text",
      ({ target }) => {
        const elements = Array.from(document.querySelectorAll(".feature-text"));
        const index = elements.indexOf(target);

        animate(
          `#feature-progress-wrapper-${index}`,
          { opacity: 1 },
          { duration: 0.3 }
        );

        animate(`#feature-title-${index}`, { x: 0 }, { duration: 0.3 });

        animateFeature(target, index, true);

        return () => {
          animate(
            `#feature-progress-wrapper-${index}`,
            { opacity: 0 },
            { duration: 0.3 }
          );

          animate(`#feature-title-${index}`, { x: "-24px" }, { duration: 0.3 });
          animateFeature(target, index, false);
        };
      },
      { margin: "0px 0px -85% 0px" }
    );
  }, []);

  return (
    <div class="editor bg-black text-white py-32 z-0">
      <div class="flex flex-col items-center">
        <div class="relative w-full right-container ml-auto flex gap-20">
          <div class="hidden sticky h-screen top-0 lg:flex items-center justify-center">
            <ul class="flex flex-col gap-2 text-[#52525B] whitespace-nowrap">
              <li class="text-[#02F67C] text-[24px] font-medium mb-2">
                {title}
              </li>
              {features.map(({ key: section, id }, idx) => (
                <a class="flex items-center gap-2" href={`#${id}`}>
                  <div id={`feature-progress-wrapper-${idx}`} class="opacity-0">
                    <svg class="-rotate-90 h-4" viewBox="0 0 10 10" fill="none">
                      <circle
                        cx="5"
                        cy="5"
                        r="4.25"
                        stroke="#52525B"
                        stroke-width="2"
                      />
                      <circle
                        cx="5"
                        cy="5"
                        r="4.25"
                        pathLength="1"
                        stroke-width="2"
                        class="feature-progress"
                        id={`feature-progress-${idx}`}
                      />
                    </svg>
                  </div>
                  <li
                    class="text-sm -translate-x-[24px]"
                    id={`feature-title-${idx}`}
                    key={idx}
                  >
                    {section}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div class="hidden lg:block">
            <div class="flex flex-col gap-32 max-w-[344px]">
              {features.map(({ title, subtitle, id }, idx) => (
                <div
                  id={id}
                  class="feature-text flex-1 flex gap-20 min-h-screen items-center"
                >
                  <div
                    id={`feature-text-${idx}`}
                    class="opacity-0 max-w-[344px] flex flex-col h-screen items-center justify-center fixed top-0 gap-6 pointer-events-none"
                  >
                    <h2 class="text-5xl font-semibold">{title}</h2>
                    <p class="text-zinc-400">{subtitle}</p>
                  </div>
                </div>
              ))}
              <div class="h-[75vh]" />
            </div>
            <div class="flex flex-col gap-32 ml-auto">
              {features.map(({ id }, idx) => (
                <div
                  id={`feature-image-${idx}`}
                  class="opacity-0 feature-image fixed h-screen left-[calc(50%+1.5rem)] top-0  flex items-center justify-center pointer-events-none"
                >
                  {AnimationComponents[id as keyof typeof AnimationComponents]({
                    class: "editor-feature",
                    width: "1090",
                    height: "745",
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
