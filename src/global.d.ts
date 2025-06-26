import type Lenis from "lenis";

export {};

declare global {
  interface Window {
    lenis?: Lenis;
    smoothScrollTo?: (
      target: string,
      options?: { offset?: number; duration?: number }
    ) => void;
    smoothScrollToTop?: () => void;
  }
}
