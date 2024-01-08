import { useEffect, useState } from "preact/hooks";
import { animate, scroll } from "motion";

export interface Props {
  lines: string[];
  animateOnScroll?: boolean;
}

const CursorFollower = () => {
  // State for cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Event handler for mouse movement
  const handleMouseMove = (e: any) => {
    // Calculate the position of the cursor relative to the viewport
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;

    setPosition({ x, y });
  };

  // Effect for attaching and cleaning up the global event listener
  useEffect(() => {
    // Attach the event listener when the component mounts
    self.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      self.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty array means the effect runs once on mount and cleanup on unmount

  // Destructure the position state
  const { x, y } = position;

  // Apply the transform based on cursor position
  const transform = `translate3d(${x}vw, ${y}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

  return (
    <div
      className="cursor-glow"
      style={{
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        transform: transform,
      }}
    >
    </div>
  );
};



function TextLines({ lines, animateOnScroll }: Props) {
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
        const currHighlighted = Math.floor(y.progress * paragraphs.length);
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
      class={`bg-black relative ${animateOnScroll ? "h-[2000px]" : "h-screen"}`}
    >
      <div
        id="inner"
        class="sticky h-screen top-0 flex items-center justify-center mx-[24px] lg:mx-auto
      lg:max-w-6xl text-white text-[32px] lg:text-[64px] font-semibold leading-[100%] tracking-[-1.28px]"
      >
        <div>
          {words.map((word) => (
            <>
              <p
                class={`inline ${
                  animateOnScroll ? "text-zinc-600" : "text-white"
                }`}
              >
                {word}
              </p>{" "}
            </>
          ))}
        </div>
      </div>
      <CursorFollower />
    </div>
  );
}

export default TextLines;
