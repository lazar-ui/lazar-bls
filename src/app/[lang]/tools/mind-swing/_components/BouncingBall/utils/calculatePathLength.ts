import { TTrajectory } from "../models";

/**
 * Calculates the path length based on the container's size and trajectory.
 * @param rect DOMRect of the container.
 * @param size Size of the ball.
 * @param trajectory Trajectory of the ball.
 * @returns Path length in pixels.
 */
export const calculatePathLength = (
  rect: DOMRect,
  size: number,
  trajectory: TTrajectory,
): number => {
  switch (trajectory) {
    // Horizontal trajectory.
    case "h":
      return rect.width - size;
    // Vertical trajectory.
    case "v":
      return rect.height - size;
    // Diagonal trajectory.
    case "d": {
      const width = rect.width - size;
      const height = rect.height - size;
      return Math.sqrt(width * width + height * height);
    }
    default:
      return 0;
  }
};
