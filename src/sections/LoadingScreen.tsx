"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Suspense } from "react";

// NavigationHandler component with proper TypeScript types
interface NavigationHandlerProps {
  onNavigate: () => void;
}

const NavigationHandler: React.FC<NavigationHandlerProps> = ({
  onNavigate,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = () => {
        onNavigate();
      };

      window.addEventListener("popstate", handleRouteChange);
      return () => window.removeEventListener("popstate", handleRouteChange);
    }
  }, [onNavigate]);

  return null;
};

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  // References for cleanup with proper TypeScript types
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Show logo with delay
  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true);
    }, 300);
  }, []);

  // Cleanup function to prevent memory leaks
  const cleanupTimers = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
  };

  // Memoize the simulateProgress function
  const simulateProgress = useCallback(() => {
    // Clean up any existing timers first
    cleanupTimers();

    // Create new progress interval
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (progressIntervalRef.current)
            clearInterval(progressIntervalRef.current);

          // Hide loading screen after progress completes
          hideTimeoutRef.current = setTimeout(() => setIsLoading(false), 600);

          return 100;
        }
        const increment = (100 - prev) * 0.1;
        return prev + Math.max(1, Math.floor(increment));
      });
    }, 100);

    // Safety timeout in case something goes wrong
    safetyTimeoutRef.current = setTimeout(() => {
      cleanupTimers();
      setIsLoading(false);
    }, 5000);
  }, []);

  // Initial load handler
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleLoad = () => simulateProgress();
      window.addEventListener("load", handleLoad);

      if (document.readyState === "complete") {
        simulateProgress();
      }

      return () => window.removeEventListener("load", handleLoad);
    }
  }, [simulateProgress]);

  const handleNavigation = useCallback(() => {
    setIsLoading(true);
    setProgress(0);
    setShowLogo(false);

    // Show logo again after a brief delay
    setTimeout(() => {
      setShowLogo(true);
    }, 100);

    simulateProgress();
  }, [simulateProgress]);

  // Cleanup on unmount
  useEffect(() => {
    return () => cleanupTimers();
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black">
        {/* Company Logo */}
        <div
          className={`relative transition-all duration-1000 ease-out transform ${
            showLogo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-7xl md:text-8xl font-bold relative text-center">
            <span className="text-white">Digi</span>
            <span className="text-blue-500">Frills</span>

            {/* Loading bar below the logo */}
            <div className="absolute -bottom-6 left-0 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <NavigationHandler onNavigate={handleNavigation} />
      </Suspense>
    </>
  );
}
