import { useEffect, useState } from "react";
import "./App.css";

const GRID_SIZE = 20;
const SPEED = 150;

const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

function randomFood(snake) {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
  return food;
}

export default function App() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(randomFood(INITIAL_SNAKE));
  const [gameOver, setGameOver] = useState(false);

  // 🎮 Game loop
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];

        let newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y,
        };

        // 🌀 Wrap around edges
        if (newHead.x < 0) newHead.x = GRID_SIZE - 1;
        if (newHead.y < 0) newHead.y = GRID_SIZE - 1;
        if (newHead.x >= GRID_SIZE) newHead.x = 0;
        if (newHead.y >= GRID_SIZE) newHead.y = 0;

        // ☠️ Self collision
        if (prev.some((p) => p.x === newHead.x && p.y === newHead.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [newHead, ...prev];

        // 🍎 Eat food
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(randomFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(interval);
  }, [direction, food, gameOver]);

  // ⌨️ Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;

      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameOver]);

  // 🔄 Restart
  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(randomFood(INITIAL_SNAKE));
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>🐍 Snake Game</h1>
      <p>Score: {snake.length - 1}</p>

      {gameOver && (
        <div className="game-over">
          <h2>Game Over ☠️</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}

      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)`,
        }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);

          const isSnake = snake.some(
            (s) => s.x === x && s.y === y
          );
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={i}
              className={`cell ${
                isSnake ? "snake" : isFood ? "food" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
