import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export const CursorFollower = () => {
  const position = useSignal({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    position.value = { x, y };
  };

  useEffect(() => {
    self.addEventListener("mousemove", handleMouseMove);

    return () => {
      self.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { x, y } = position.value;

  const transform = `translate3d(${x}vw, ${y}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

  return (
    <div
      className="cursor-glow"
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
        transform: transform,
      }}
    ></div>
  );
};
