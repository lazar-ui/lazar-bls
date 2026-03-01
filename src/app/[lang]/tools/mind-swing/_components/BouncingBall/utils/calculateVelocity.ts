import { IVector, TTrajectory } from "../models";
import { calculatePathLength } from "./calculatePathLength";
import { speedToFrequency } from "./speedToFrequency";

/**
 * Utility function to calculate velocity vector.
 * @param speed
 * @param rect
 * @param size
 * @param trajectory
 * @returns
 */
export const calculateVelocity = (
  speed: number,
  rect: DOMRect,
  size: number,
  trajectory: TTrajectory,
): IVector => {
  // Конвертируем скорость ползунка в частоту (Гц)
  const frequency = speedToFrequency(speed);

  // Рассчитываем длину пути
  const pathLength = calculatePathLength(rect, size, trajectory);

  // Скорость в пикселях/сек = частота × длина пути
  const baseSpeed = frequency * pathLength;

  switch (trajectory) {
    case "h":
      return { x: baseSpeed, y: 0 };
    case "v":
      return { x: 0, y: baseSpeed };
    case "d": {
      const width = rect.width - size;
      const height = rect.height - size;
      const diagonal = pathLength;
      return {
        x: (baseSpeed * width) / diagonal,
        y: (baseSpeed * height) / diagonal,
      };
    }
    default:
      return { x: 0, y: 0 };
  }
};
