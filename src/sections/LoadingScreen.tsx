"use client";

import { useState, useEffect, useCallback } from "react";
import { Suspense } from "react";
import NavigationHandler from "./NavigationHandler";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize the simulateProgress function
  const simulateProgress = useCallback((targetProgress: number) => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          clearInterval(interval);
          if (targetProgress === 100) {
            setTimeout(() => setIsLoading(false), 300);
          }
          return targetProgress;
        }
        const increment = (targetProgress - prev) * 0.1;
        return prev + Math.max(1, Math.floor(increment));
      });
    }, 100);
  }, []); // Empty dependency array as it doesn't depend on any state

  // Initial load handler
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleLoad = () => simulateProgress(100);
      window.addEventListener("load", handleLoad);

      if (document.readyState === "complete") {
        simulateProgress(100);
      }

      return () => window.removeEventListener("load", handleLoad);
    }
  }, [simulateProgress]); // Added simulateProgress to dependencies

  const handleNavigation = useCallback(() => {
    setIsLoading(true);
    setProgress(0);
    simulateProgress(100);
  }, [simulateProgress]);

  if (!isLoading) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        <div className="text-white text-4xl font-bold mb-8">DigiFrills</div>
        <div className="w-64 h-2 bg-gray-700 rounded-full mb-4">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-white text-xl">{progress}%</div>
      </div>

      <Suspense fallback={null}>
        <NavigationHandler onNavigate={handleNavigation} />
      </Suspense>
    </>
  );
}
