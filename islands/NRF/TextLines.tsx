import { useEffect } from "preact/hooks";
import { animate, scroll } from "motion";

export interface Props {
  lines: string[];
  animateOnScroll?: boolean;
}

function TextLines({ lines, animateOnScroll }: Props) {
  useEffect(() => {
    if (animateOnScroll) {
      const section = document.querySelector("#section")!;
      const paragraphs = document.querySelectorAll("#section p");
      let lastHighlighted = 0;

      const handleScroll = ({ y }: { y: { progress: number } }) => {
        const currHighlighted = Math.floor(
          y.progress * (paragraphs.length + 1)
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

      scroll(handleScroll, { target: section, offset: ["0 0", "end end"] });
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
