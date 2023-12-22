import { useEffect } from "preact/hooks";
import {
  animate,
  AnimationControls,
  scroll,
} from "https://esm.sh/motion@10.16.4";

function TextLines() {
  useEffect(() => {
    const section = document.querySelector("#section");
    const paragraphs = document.querySelectorAll("#section p");
    let selectedParagraphIndex: number | null = null;
    scroll(
      ({ y }: { y: { progress: number } }) => {
        const index = Math.floor(y.progress * paragraphs.length);
        if (index !== selectedParagraphIndex && y.progress !== 0) {
          animate(paragraphs[selectedParagraphIndex], { color: "#131313" });
          animate(paragraphs[index], { color: "white" });
          selectedParagraphIndex = index;
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
          <p class="inline text-[#131313]">
            From landing pages to enterprise ecommerce,{" "}
          </p>
          <p class="inline text-[#131313]">deco.cx is the frontend platform{" "}</p>
          <p class="inline text-[#131313]">
            that builds high-performance, budget friendly and fully personalized
            web experiences,{" "}
          </p>
          <p class="inline text-[#131313]">
            seamlessly integrated with any backend API.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextLines;
