import { useEffect, useState } from "preact/hooks";
import { animate, scroll } from "motion";

export interface Props {
  lines: string[];
  /**
   * @description Speed ratio of the animation. Default is 1. Increase for sooner, decrease for later.
   */
  speedRatio?: number;
  animateOnScroll?: boolean;
}

function TextLines({ lines, speedRatio = 1, animateOnScroll }: Props) {
  const words = lines.join(" ").split(" ");

  useEffect(() => {
    if (animateOnScroll) {
      const section = document.querySelector("#section")!;
      const paragraphs = document.querySelectorAll("#section p");
      paragraphs.forEach((p) => {
        animate(p, { color: "#131313" });
      });
      let lastHighlighted = 0;

      const handleScroll = ({ y }: { y: { progress: number } }) => {
        const currHighlighted = Math.floor(
          y.progress * 2 * paragraphs.length
        );
        const direction = currHighlighted > lastHighlighted ? 1 : -1;
        const color = direction === 1 ? "white" : "#131313";

        for (
          let i = lastHighlighted;
          direction === 1 ? i < currHighlighted : i >= currHighlighted;
          i += direction
        ) {
          animate(paragraphs[i], { color });
        }

        lastHighlighted = currHighlighted;
      };

      scroll(handleScroll, { target: section, offset: ["0 0.8", "end end"] });
    }
  }, []);

  return (
    <div
      id="section"
      class={`bg-black relative z-10 ${
        animateOnScroll ? "py-20 lg:py-0 lg:h-[2000px]" : "lg:h-screen"
      }`}
    >
      <div
        id="inner"
        class="lg:sticky lg:h-screen top-0 flex items-center justify-center mx-[24px] lg:mx-auto
      lg:max-w-6xl text-white text-[32px] lg:text-[64px] font-semibold leading-[100%] tracking-[-1.28px] z-10"
      >
        <div>
          {words.map((word) => (
            <>
              <p
                class={`inline text-white`}
              >
                {word}
              </p>{" "}
            </>
          ))}
        </div>
      </div>
      {/* <CursorFollower /> */}
    </div>
  );
}

export default TextLines;
