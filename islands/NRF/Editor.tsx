import { BlankEditor } from "deco-sites/starting/components/nrf/editor/Blank.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { useEffect } from "preact/hooks";
import { animate, inView, stagger, timeline } from "motion";
import { useSignal } from "@preact/signals";

import { ComponentLibrary } from "deco-sites/starting/components/nrf/editor/ComponentLibrary.tsx";
import { RealtimeEditor, REALTIME_EDITOR_SEQUENCE } from "deco-sites/starting/components/nrf/editor/RealtimeEditor.tsx";
import { DesignSystem, DESIGN_SYSTEM_SEQUENCE} from "../../components/nrf/editor/DesignSystem.tsx";
import { FullCode } from "../../components/nrf/editor/FullCode.tsx";
import { AppsIntegrations } from "../../components/nrf/editor/AppsIntegrations.tsx";
import { Segmentation } from "../../components/nrf/editor/Segmentation.tsx";
import { Analytics } from "../../components/nrf/editor/Analytics.tsx";
import { DesignSystemCursor, DesignSystemCursorPath } from "deco-sites/starting/animations/assets/Cursors.tsx";

export interface EditorFeature {
  title: string;
  subtitle: string;
  image?: ImageWidget;
}

export interface Props {
  features: EditorFeature[];
}

const sections: string[] = [
  "Component Library",
  "No-code editing",
  "Natural Language",
  "Themes",
  "Code editing",
  "Integrate & Extend",
  // "Multivariate Testing",
];

const svgs = [
  ComponentLibrary,
  RealtimeEditor,
  DesignSystem,
  FullCode,
  AppsIntegrations,
  Segmentation,
  Analytics,
]

export default function Editor({ features }: Props) {
  const currentFeature = useSignal<number | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isScrollingDown = true;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const animateItems = (target: Element) => {
      animate(
        target.querySelectorAll(".item"),
        { opacity: 1, transform: "translateY(0px)" },
        { delay: stagger(0.1), duration: 1, easing: "ease-out" }
      );
    };

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

      timeline(DESIGN_SYSTEM_SEQUENCE)
      animate(
        `#feature-title-${index}`,
        { color: colorValue, transform: scaleValue },
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

        animateFeature(target, index, true);

        return () => {
          animateFeature(target, index, false);
        };
      },
      { margin: "0px 0px -85% 0px" }
    );
  }, []);

  // scroll(
  //   ({ y }) => {
  //     const initialWidth = 741;
  //     const finalWidth = 671;
  //     console.log(y.progress);
  //     const width =
  //       initialWidth +
  //       ((finalWidth - initialWidth) *
  //         Math.max(0, Math.min(100, y.progress))) /
  //         100;

  //     if (y.progress > 0 && y.progress < 1) {
  //       animate(
  //         "#blank-editor",
  //         {
  //           opacity: 1,
  //         },
  //         {
  //           duration: 0.1,
  //         }
  //       );
  //     } else {
  //       animate(
  //         "#blank-editor",
  //         {
  //           opacity: 0,
  //         },
  //         {
  //           duration: 0.1,
  //         }
  //       );
  //     }
  //     document
  //       .querySelector("#blank-editor")!
  //       .setAttribute("width", width.toString());
  //   },
  //   {
  //     target: document.querySelector("#blank-editor-container")!,
  //     offset: ["0.9 1", "200% 1"],
  //   }
  // );
  // }, []);

  return (
    <div class="editor bg-black text-white py-32">
      <div class="flex flex-col items-center">
        <div id="blank-editor-container" class="flex flex-col">
          <div class="space-y-10">
            <div class="space-y-2 item">
              <p class="text-5xl font-semibold">How it works</p>
              <p>Short Text of how it works.</p>
            </div>
            <BlankEditor class="item" />
          </div>
        </div>
        <div class="relative w-full right-container ml-auto flex gap-20">
          <div class="sticky h-screen top-0 flex items-center justify-center">
            <ul class="text-[#52525B] whitespace-nowrap space-y-2">
              <li class="text-[#02F67C]">How it Works</li>
              {sections.map((section, idx) => (
                <li id={`feature-title-${idx}`} key={idx}>
                  {section}
                </li>
              ))}
            </ul>
          </div>
          <div class="flex flex-col gap-32 max-w-[344px]">
            {features.map(({ title, subtitle }, idx) => (
              <div class="feature-text flex-1 flex gap-20 min-h-screen items-center">
                <div
                  id={`feature-text-${idx}`}
                  class="opacity-0 max-w-[344px] flex flex-col h-screen items-center justify-center fixed top-0 gap-6"
                >
                  <h2 class="text-5xl font-semibold">{title}</h2>
                  <p>{subtitle}</p>
                </div>
              </div>
            ))}
            <div class="h-[75vh]" />
          </div>
          <div class="flex flex-col gap-32 ml-auto">
            {svgs.map((Component, idx) => (
              <div
                id={`feature-image-${idx}`}
                class="opacity-0 feature-image fixed h-screen left-[calc(50%+3.75rem)] top-0  flex items-center justify-center"
              >
                <Component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
