import React, { useEffect, useRef, useState } from "react";

type TScrollIntoViewOptions = boolean | ScrollIntoViewOptions;

type TUseScrollToReturn<T> = [
  React.RefObject<T | null>,
  React.Dispatch<React.SetStateAction<boolean>>,
];

/**
 * Hook for scrolling to a specific element.
 * @returns A tuple containing a ref to the element and a function to trigger scrolling.
 *
 * @example
 * const SomeComponent: React.FC = () => {
 *   // Use the hook to get a ref and a function to trigger scrolling
 *   const [scrollToRef, setShouldScrollTo] = useScrollTo();
 *
 *  return (
 *    <div>
 *     <div ref={scrollToRef}>Content to scroll to</div>
 *     <button onClick={() => setShouldScrollTo(true)}>Scroll to Content</button>
 *   </div>
 *  );
 * };
 */
export const useScrollTo = <T extends Element>(
  options: TScrollIntoViewOptions = { behavior: "smooth" },
): TUseScrollToReturn<T> => {
  const ref = useRef<T>(null);
  const [shouldScrollTo, setShouldScrollTo] = useState(false);

  useEffect(() => {
    if (ref.current && shouldScrollTo) {
      ref.current.scrollIntoView(options);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldScrollTo(false);
    }
  }, [options, shouldScrollTo]);

  return [ref, setShouldScrollTo];
};
