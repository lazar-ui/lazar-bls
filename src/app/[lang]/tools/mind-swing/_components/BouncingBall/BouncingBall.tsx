import React, { useEffect, useRef } from "react";
import { IConfig } from "../../models";
import { playSound } from "../../utils/audio";

interface IProps extends IConfig {
  isRunning: boolean;
}

export const BouncingBall: React.FC<IProps> = (props) => {
  const { speed, size, color, trajectory, soundType, isRunning } = props;
  const ballRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const lastHitTime = useRef(0);

  // Initialize position and velocity
  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    pos.current = {
      x: Math.max(0, rect.width / 2 - size / 2),
      y: Math.max(0, rect.height / 2 - size / 2),
    };

    const v = speed * 1.5; // Base speed multiplier
    if (trajectory === "h") {
      vel.current = { x: v, y: 0 };
    } else if (trajectory === "v") {
      vel.current = { x: 0, y: v };
    } else if (trajectory === "d") {
      vel.current = { x: v, y: v };
    }
  }, [speed, trajectory, size]);

  useEffect(() => {
    if (!isRunning) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    let lastTime = performance.now();

    const update = (time: number) => {
      if (!ballRef.current || !containerRef.current) return;

      const dt = Math.min((time - lastTime) / 16.666, 3); // Cap dt to avoid huge jumps if tab is inactive
      lastTime = time;

      const rect = containerRef.current.getBoundingClientRect();
      const maxX = Math.max(0, rect.width - size);
      const maxY = Math.max(0, rect.height - size);

      let { x, y } = pos.current;
      let { x: vx, y: vy } = vel.current;

      x += vx * dt;
      y += vy * dt;

      let hit = false;

      if (x <= 0) {
        x = 0;
        vx = Math.abs(vx);
        hit = true;
      } else if (x >= maxX) {
        x = maxX;
        vx = -Math.abs(vx);
        hit = true;
      }

      if (y <= 0) {
        y = 0;
        vy = Math.abs(vy);
        hit = true;
      } else if (y >= maxY) {
        y = maxY;
        vy = -Math.abs(vy);
        hit = true;
      }

      // Debounce sound to prevent multiple triggers on corners
      if (hit && time - lastHitTime.current > 50) {
        playSound(soundType);
        lastHitTime.current = time;
      }

      pos.current = { x, y };
      vel.current = { x: vx, y: vy };

      ballRef.current.style.transform = `translate(${x}px, ${y}px)`;

      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isRunning, size, soundType]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-gray-950"
    >
      <div
        ref={ballRef}
        className="absolute rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] will-change-transform"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          transform: `translate(${pos.current.x}px, ${pos.current.y}px)`,
        }}
      />
    </div>
  );
};
