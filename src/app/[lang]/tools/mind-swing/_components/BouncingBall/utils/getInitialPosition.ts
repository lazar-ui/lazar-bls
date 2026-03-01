import { IVector } from "../models";

/**
 * Utility function to get initial position of the ball.
 * @param rect DOMRect of the container.
 * @param size Size of the ball.
 * @returns Initial position of the ball.
 */
export const getInitialPosition = (rect: DOMRect, size: number): IVector => ({
  x: Math.max(0, rect.width / 2 - size / 2),
  y: Math.max(0, rect.height / 2 - size / 2),
});
