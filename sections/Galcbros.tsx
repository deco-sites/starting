import { useEffect, useRef, useState } from "preact/hooks";

interface Props {
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  characterColor?: string;
  /**
   * @format color-input
   */
  obstacleColor?: string;
  /**
   * @format color-input
   */
  groundColor?: string;
}

export default function MarioBrosGame({
  backgroundColor = "#87CEEB",
  characterColor = "#FF0000",
  obstacleColor = "#8B4513",
  groundColor = "#228B22",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [character, setCharacter] = useState({ x: 50, y: 200, vy: 0 });
  const [obstacles, setObstacles] = useState<
    { x: number; y: number; width: number; height: number }[]
  >([]);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gravity = 0.5;
    const jumpStrength = -10;
    const characterWidth = 30;
    const characterHeight = 50;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          setCharacter((prev) => ({ ...prev, x: Math.max(0, prev.x - 5) }));
          break;
        case "ArrowRight":
          setCharacter((prev) => ({
            ...prev,
            x: Math.min(canvas.width - characterWidth, prev.x + 5),
          }));
          break;
        case " ":
          if (!isJumping) {
            setCharacter((prev) => ({ ...prev, vy: jumpStrength }));
            setIsJumping(true);
          }
          break;
      }
    };

    globalThis.window.addEventListener("keydown", handleKeyDown);

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = groundColor;
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

      // Draw character
      ctx.fillStyle = characterColor;
      ctx.fillRect(character.x, character.y, characterWidth, characterHeight);

      // Draw obstacles
      ctx.fillStyle = obstacleColor;
      obstacles.forEach((obstacle) => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });

      // Update character position
      setCharacter((prev) => {
        let newY = prev.y + prev.vy;
        let newVy = prev.vy + gravity;

        if (newY > canvas.height - 50 - characterHeight) {
          newY = canvas.height - 50 - characterHeight;
          newVy = 0;
          setIsJumping(false);
        }

        return { ...prev, y: newY, vy: newVy };
      });

      // Move obstacles
      setObstacles((prev) =>
        prev.map((obstacle) => ({ ...obstacle, x: obstacle.x - 2 }))
          .filter((obstacle) => obstacle.x + obstacle.width > 0)
      );

      // Spawn new obstacles
      if (Math.random() < 0.02) {
        setObstacles((prev) => [...prev, {
          x: canvas.width,
          y: canvas.height - 50 - Math.random() * 50,
          width: 30,
          height: 30 + Math.random() * 20,
        }]);
      }

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      globalThis.window.removeEventListener("keydown", handleKeyDown);
    };
  }, [backgroundColor, characterColor, obstacleColor, groundColor]);

  return (
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        class="border-4 border-gray-800 rounded-lg shadow-lg"
      />
    </div>
  );
}
