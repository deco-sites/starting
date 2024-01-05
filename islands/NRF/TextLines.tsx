import { useEffect } from "preact/hooks";
import { animate, AnimationControls, scroll } from "motion";

export interface Props {
  lines: string[];
  animateOnScroll?: boolean;
}

function TextLines({ lines, animateOnScroll }: Props) {
  useEffect(() => {
    if (animateOnScroll) {
      const section = document.querySelector("#section")!;
      const paragraphs = document.querySelectorAll("#section p");
      let selectedParagraphIndex: number | null = null;

      scroll(
        ({ y }: { y: { progress: number } }) => {
          const index = Math.floor(y.progress * paragraphs.length);
          if (index !== selectedParagraphIndex && y.progress !== 0) {
            animate(paragraphs[selectedParagraphIndex!], { color: "#131313" });
            animate(paragraphs[index], { color: "white" });
            selectedParagraphIndex = index;
          } else if (y.progress === 0) {
            animate(paragraphs[selectedParagraphIndex!], { color: "#131313" });
            selectedParagraphIndex = null;
          }
        },
        {
          target: section,
          offset: ["0 0", "end end"],
        }
      );
    }
  }, []);

  return (
    <div
      id="section"
      class={`bg-black relative ${animateOnScroll ? "h-[2000px]" : "h-screen"}`}
    >
      <div
        id="inner"
        class="sticky h-screen top-0 flex items-center justify-center mx-[24px] lg:mx-auto
      lg:max-w-6xl text-white text-[32px] lg:text-[64px] font-semibold leading-[100%]"
      >
        <div>
          {lines.map((line) => (
            <>
              <p
                class={`inline ${
                  animateOnScroll ? "text-zinc-900" : "text-white"
                }`}
              >
                {line}
              </p>{" "}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextLines;
