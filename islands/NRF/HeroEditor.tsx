import { HeroEditor } from "deco-sites/starting/components/nrf/editor/HeroEditor.tsx";
import { useEffect } from "preact/hooks";
import { animate, scroll, inView, timeline } from "motion";
import { HERO_ANIMATION_SEQUENCE } from "deco-sites/starting/animations/timelines/hero.ts";

export default function HeroEditorIsland() {
  useEffect(() => {
    scroll(
      ({ y }: { y: { progress: number } }) => {
        const rotation = Math.max(y.progress * 0.05 * 360);
        animate(
          ".hero-inner",
          { rotateX: -rotation },
          {
            duration: 0,
            allowWebkitAcceleration: true,
            easing: "linear",
          }
        );
      },
      {
        target: document.querySelector(".hero-container")!,
        offset: ["120% 1", "150% 1"],
      }
    );

    inView(
      "#hero-editor",
      () => {
        timeline(HERO_ANIMATION_SEQUENCE);
      },
      {
        margin: "0px 0px -500px 0px",
      }
    );
  }, []);

  return (
    <div class="hero-container duration-0">
      <HeroEditor class="overflow-hidden hero-inner w-fit mx-auto mt-8" />;
    </div>
  );
}
