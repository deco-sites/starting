import { HeroEditor } from "deco-sites/starting/components/nrf/editor/HeroEditor.tsx";
import { useEffect } from "preact/hooks";
import { animate, scroll } from "https://esm.sh/motion@10.16.4";

export default function HeroEditorIsland() {
  useEffect(() => {
    scroll(
      ({ y }: { y: { progress: number } }) => {
        console.log(y.progress);
        const rotation = Math.max(y.progress * 0.05 * 360);
        animate(".hero-inner", {
          rotateX: -rotation,
          duration: 0,
          allowWebkitAcceleration: true,
          easing: "linear",
        });
      },
      {
        target: document.querySelector(".hero-container"),
        offset: ["100% 1", "150% 1"],
      }
    );
  }, []);

  return (
    <div class="hero-container duration-0">
      <HeroEditor class="hero-inner mx-auto mt-8" />;
    </div>
  );
}
