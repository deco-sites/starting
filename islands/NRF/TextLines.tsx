import { useEffect } from "preact/hooks";
import { animate, AnimationControls, scroll } from "motion";

export interface Props {
  lines: string[];
}

function TextLines({ lines }: Props) {
  useEffect(() => {
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
  }, []);

  return (
    <div id="section" class="bg-black h-[2000px] relative">
      <div
        id="inner"
        class="sticky h-screen top-0 flex items-center justify-center
      lg:max-w-6xl mx-auto text-white text-[64px] font-semibold leading-[100%]"
      >
        <div>
          {lines.map((line) => (
            <>
              <p class="inline text-zinc-900">{line}</p>{" "}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextLines;
