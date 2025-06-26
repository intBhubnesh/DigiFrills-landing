import { useCallback } from "react";

type ScrollOptions = {
  offset?: number;
  duration?: number;
};

export const useSmoothScroll = () => {
  const scrollTo = useCallback(
    (target: string, options: ScrollOptions = {}) => {
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.scrollTo(target, {
          offset: options.offset ?? 0,
          duration: options.duration ?? 1.2,
        });
      } else {
        const element = document.getElementById(target.replace("#", ""));
        if (element) {
          const offsetTop = element.offsetTop - (options.offset ?? 0);
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    },
    []
  );

  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return { scrollTo, scrollToTop };
};
