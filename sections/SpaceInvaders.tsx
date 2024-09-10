import { useEffect, useRef, useState } from 'preact/hooks';

interface Props {
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  spaceshipColor?: string;
  /**
   * @format color-input
   */
  enemyColor?: string;
  /**
   * @format color-input
   */
  bulletColor?: string;
}

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function SpaceInvaders({
  backgroundColor = '#000000',
  spaceshipColor = '#00ff00',
  enemyColor = '#ff0000',
  bulletColor = '#ffffff'
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [spaceship, setSpaceship] = useState<GameObject>({ x: 0, y: 0, width: 50, height: 30 });
  const [enemies, setEnemies] = useState<GameObject[]>([]);
  const [bullets, setBullets] = useState<GameObject[]>([]);
  const [gameLoop, setGameLoop] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initGame = () => {
      setSpaceship({ x: canvas.width / 2 - 25, y: canvas.height - 50, width: 50, height: 30 });
      setEnemies(createEnemies());
    };

    const createEnemies = () => {
      const newEnemies: GameObject[] = [];
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
          newEnemies.push({
            x: i * 100 + 50,
            y: j * 50 + 50,
            width: 40,
            height: 40
          });
        }
      }
      return newEnemies;
    };

    const drawGame = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = spaceshipColor;
      ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);

      enemies.forEach(enemy => {
        ctx.fillStyle = enemyColor;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
      });

      bullets.forEach(bullet => {
        ctx.fillStyle = bulletColor;
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
      });
    };

    const updateGame = () => {
      setBullets(prevBullets =>
        prevBullets
          .map(bullet => ({ ...bullet, y: bullet.y - 5 }))
          .filter(bullet => bullet.y > 0)
      );

      setEnemies(prevEnemies =>
        prevEnemies.filter(enemy =>
          !bullets.some(bullet =>
            bullet.x < enemy.x + enemy.width &&
            bullet.x + bullet.width > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y + bullet.height > enemy.y
          )
        )
      );
    };

    const gameLoopFunc = () => {
      updateGame();
      drawGame();
    };

    initGame();
    const loop = setInterval(gameLoopFunc, 1000 / 60);
    setGameLoop(loop);

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          setSpaceship(prev => ({ ...prev, x: Math.max(0, prev.x - 10) }));
          break;
        case 'ArrowRight':
          setSpaceship(prev => ({ ...prev, x: Math.min(canvas.width - prev.width, prev.x + 10) }));
          break;
        case ' ':
          setBullets(prev => [...prev, { x: spaceship.x + spaceship.width / 2 - 2, y: spaceship.y, width: 4, height: 10 }]);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (gameLoop) clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [spaceship, enemies, bullets, backgroundColor, spaceshipColor, enemyColor, bulletColor]);

  return (
    <div class="flex justify-center items-center h-screen bg-gray-900">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        class="border-4 border-white"
      />
    </div>
  );
}