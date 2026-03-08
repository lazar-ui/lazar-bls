import React, { useCallback, useEffect, useRef } from "react";

import { useContainerSize } from "Hooks/useContainerSize";

import { playSound } from "../../utils/audio";
import { MAX_DELTA_TIME_MS, SOUND_DEBOUNCE_MS } from "./consts";
import { IVector } from "./models";
import { calculateVelocity } from "./utils/calculateVelocity";
import { getInitialPosition } from "./utils/getInitialPosition";
import { ISettings } from "Services/mind-swing";

import styles from "./styles.module.scss";

interface IProps {
  onHit?: () => void;
  settings: ISettings;
}

export const BouncingBall: React.FC<IProps> = (props) => {
  const {
    onHit,
    settings: {
      background,
      speed,
      size,
      color,
      trajectory,
      soundType,
      isRunning,
    },
  } = props;

  // Рефы
  const ballRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const containerSize = useContainerSize(containerRef);

  // Состояние физики
  const pos = useRef<IVector>({ x: 0, y: 0 });
  const vel = useRef<IVector>({ x: 0, y: 0 });
  const lastHitTime = useRef<number>(0);

  // Инициализация физики при изменении конфигурации
  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    vel.current = calculateVelocity(speed, rect, size, trajectory); // 'speed' из пропсов
    pos.current = getInitialPosition(rect, size);
  }, [containerSize.width, containerSize.height, speed, trajectory, size]);

  // Основной цикл анимации
  const animate = useCallback(() => {
    if (!ballRef.current || !containerRef.current) {
      return;
    }

    let lastTime = performance.now();

    const update = (time: number) => {
      const dt = Math.min(time - lastTime, MAX_DELTA_TIME_MS) / 1000; // dt в секундах
      lastTime = time;

      const rect = containerRef.current!.getBoundingClientRect();
      const maxX = Math.max(0, rect.width - size);
      const maxY = Math.max(0, rect.height - size);

      let { x, y } = pos.current;
      let { x: vx, y: vy } = vel.current;

      // Интеграция движения
      x += vx * dt;
      y += vy * dt;

      let hit = false;

      // Обработка столкновений
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

      // Дебаунс звука
      if (hit && time - lastHitTime.current > SOUND_DEBOUNCE_MS) {
        playSound(soundType);
        lastHitTime.current = time;

        if (onHit) {
          onHit();
        }
      }

      pos.current = { x, y };
      vel.current = { x: vx, y: vy };

      ballRef.current!.style.transform = `translate(${x}px, ${y}px)`;

      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);
  }, [onHit, size, soundType]);

  // Управление анимацией
  useEffect(() => {
    if (isRunning) {
      animate();
    } else {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isRunning, animate]);

  return (
    <div
      ref={containerRef}
      className={styles.root}
      style={{ backgroundColor: background }}
    >
      <div
        ref={ballRef}
        className={styles.ball}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />
    </div>
  );
};
