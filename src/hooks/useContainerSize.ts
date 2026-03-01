import { useEffect, useState } from "react";

/**
 * Hook for getting the size of a container.
 * Recalculates on resize.
 * Depends on ResizeObserver API.
 * @param containerRef ref to the container element.
 * @returns size of the container (height, width).
 */
export const useContainerSize = (
  containerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  return size;
};
