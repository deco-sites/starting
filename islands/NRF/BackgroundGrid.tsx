import { useEffect } from "preact/hooks";

export const CursorFollower = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursorGlowElement = document.querySelector('.cursor-glow') as HTMLElement;
      const x = ((e.clientX - 80) / self.innerWidth) * 100;
      const y = ((e.clientY - 80) / self.innerHeight) * 100;
      const transform = `translate3d(${x}vw, ${y}vh, 0)`;

      requestAnimationFrame(() => {
        if (cursorGlowElement) {
          cursorGlowElement.style.transform = transform;
        }
      });
    };

    self.addEventListener("mousemove", handleMouseMove);

    return () => {
      self.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out", // Smooth transition for the transform
      }}
    ></div>
  );
};
