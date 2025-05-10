"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Suspense } from "react";

// NavigationHandler component with proper TypeScript types
interface NavigationHandlerProps {
  onNavigate: () => void;
}

const NavigationHandler: React.FC<NavigationHandlerProps> = ({ onNavigate }) => {
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
  const [textFill, setTextFill] = useState(0);
  const [lettersFilled, setLettersFilled] = useState(0);
  const particlesRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);

  const text = "DigiFrills";
  const totalLetters = text.length;

  // Create animated background circles
  useEffect(() => {
    if (circlesRef.current && isLoading) {
      const circlesContainer = circlesRef.current;
      const circleCount = 8;

      // Clear any existing circles
      circlesContainer.innerHTML = '';

      // Create gradient circles
      for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        const size = Math.random() * 300 + 100; // Random size between 100-400px
        const blurAmount = Math.random() * 70 + 30; // Random blur between 30-100px
        const opacity = Math.random() * 0.15 + 0.05; // Random opacity between 0.05-0.2

        // Random gradient colors
        const colors = [
          ['#0260EB', '#5C9DFF'], // Blue gradient
          ['#444', '#666'],       // Gray gradient
          ['#0260EB', '#444'],    // Blue-gray gradient
          ['#222', '#444']        // Dark gradient
        ];
        const colorSet = colors[Math.floor(Math.random() * colors.length)];

        // Set circle styles
        circle.style.position = 'absolute';
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.borderRadius = '50%';
        circle.style.background = `radial-gradient(circle, ${colorSet[0]} 0%, ${colorSet[1]} 100%)`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.transform = 'translate(-50%, -50%) scale(0)';
        circle.style.opacity = '0';
        circle.style.filter = `blur(${blurAmount}px)`;
        circle.style.transition = `transform ${Math.random() * 3 + 2}s ease-out, opacity ${Math.random() * 2 + 1}s ease-out`;

        // Add to container
        circlesContainer.appendChild(circle);

        // Animate circles with delay
        setTimeout(() => {
          circle.style.transform = 'translate(-50%, -50%) scale(1)';
          circle.style.opacity = opacity.toString();

          // Add continuous floating animation
          circle.style.animation = `float ${Math.random() * 15 + 10}s ease-in-out ${Math.random() * 5}s infinite`;
        }, Math.random() * 1000);
      }
    }
  }, [isLoading]);

  // Create particles on mount
  useEffect(() => {
    if (particlesRef.current && isLoading) {
      const particlesContainer = particlesRef.current;
      const particleCount = 40;

      // Clear any existing particles
      particlesContainer.innerHTML = '';

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2; // Random size between 2-8px

        // Set particle styles
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.transform = 'scale(0)';
        particle.style.opacity = '0';
        particle.style.transition = `transform ${Math.random() * 2 + 1}s ease-out, opacity ${Math.random() * 2 + 1}s ease-out`;

        // Add to container
        particlesContainer.appendChild(particle);

        // Animate particles with delay
        setTimeout(() => {
          particle.style.transform = 'scale(1)';
          particle.style.opacity = '0.6';

          // Add floating animation
          particle.style.animation = `floatParticle ${Math.random() * 8 + 4}s ease-in-out ${Math.random() * 2}s infinite`;
        }, Math.random() * 1000);
      }
    }
  }, [isLoading]);

  // Advanced text animation
  useEffect(() => {
    let letterInterval: NodeJS.Timeout | null = null;
    let completeTextInterval: NodeJS.Timeout | null = null;

    // Show logo with delay
    setTimeout(() => {
      setShowLogo(true);

      // Initialize letter-by-letter animation
      letterInterval = setInterval(() => {
        setLettersFilled(prev => {
          if (prev >= totalLetters) {
            if (letterInterval) clearInterval(letterInterval);

            // After all letters are revealed, start the horizontal fill animation
            completeTextInterval = setInterval(() => {
              setTextFill(prev => {
                if (prev >= 100) {
                  if (completeTextInterval) clearInterval(completeTextInterval);
                  return 100;
                }
                // Smoother, accelerating fill
                const increment = prev < 30 ? 0.8 : prev < 60 ? 1.2 : 1.6;
                return Math.min(100, prev + increment);
              });
            }, 20);

            return totalLetters;
          }
          return prev + 1;
        });
      }, 120); // Time between letter reveals
    }, 300);

    return () => {
      if (letterInterval) clearInterval(letterInterval);
      if (completeTextInterval) clearInterval(completeTextInterval);
    };
  }, [isLoading, totalLetters]);

  // References for cleanup with proper TypeScript types
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const checkFillIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup function to prevent memory leaks
  const cleanupTimers = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (checkFillIntervalRef.current) clearInterval(checkFillIntervalRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
  };

  // Memoize the simulateProgress function
  const simulateProgress = useCallback((targetProgress: number) => {
    // Clean up any existing timers first
    cleanupTimers();

    // Create new progress interval
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

          if (targetProgress === 100) {
            // Make sure text fill completes before hiding the loading screen
            if (textFill >= 100 && lettersFilled >= totalLetters) {
              hideTimeoutRef.current = setTimeout(() => setIsLoading(false), 600);
            } else {
              // Wait for text animations to complete
              checkFillIntervalRef.current = setInterval(() => {
                if (textFill >= 100 && lettersFilled >= totalLetters) {
                  if (checkFillIntervalRef.current) clearInterval(checkFillIntervalRef.current);
                  hideTimeoutRef.current = setTimeout(() => setIsLoading(false), 600);
                }
              }, 100);

              // Safety timeout in case something goes wrong
              safetyTimeoutRef.current = setTimeout(() => {
                cleanupTimers();
                setIsLoading(false);
              }, 5000);
            }
          }
          return targetProgress;
        }
        const increment = (targetProgress - prev) * 0.1;
        return prev + Math.max(1, Math.floor(increment));
      });
    }, 100);

    // Return cleanup function
    return () => cleanupTimers();
  }, [textFill, lettersFilled, totalLetters]);

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
  }, [simulateProgress]);

  const handleNavigation = useCallback(() => {
    setIsLoading(true);
    setProgress(0);
    setShowLogo(false);
    setTextFill(0);
    setLettersFilled(0);
    simulateProgress(100);
  }, [simulateProgress]);

  if (!isLoading) return null;

  return (
    <>
      <div
        className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #111 -31.5%, #000 100%)"
        }}
      >
        {/* Animated background circles */}
        <div ref={circlesRef} className="absolute inset-0 pointer-events-none"></div>

        {/* Particles container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

        {/* Animated logo with advanced text fill animation */}
        <div
          className={`relative transition-all duration-1000 ease-out transform ${
            showLogo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-white text-7xl md:text-8xl font-bold relative">
            {/* Letter-by-letter reveal animation */}
            <div className="relative text-center">
              {/* Static background text (dimmed) */}
              <div className="relative opacity-20">
                <span>Digi</span>
                <span style={{ color: "#0260EB" }}>Frills</span>
              </div>

              {/* Letter-by-letter reveal layer */}
              <div className="absolute top-0 left-0 flex overflow-hidden whitespace-nowrap">
                {Array.from("DigiFrills").map((letter, index) => {
                  const isBlue = index >= 4; // "Frills" in blue
                  return (
                    <div
                      key={index}
                      ref={(el: HTMLDivElement | null) => { lettersRef.current[index] = el }}
                      className="relative overflow-hidden transition-all duration-300"
                      style={{
                        color: isBlue ? "#0260EB" : "white",
                        opacity: index < lettersFilled ? 1 : 0,
                        transform: index < lettersFilled ? "translateY(0)" : "translateY(20px)",
                        transition: `opacity 0.3s ease-out, transform 0.5s ease-out`
                      }}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>

              {/* Horizontal shine effect */}
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
              >
                <div
                  className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  style={{
                    left: `${textFill - 10}%`,
                    transition: 'left 0.1s linear',
                    filter: 'blur(8px)'
                  }}
                ></div>
              </div>
            </div>

            {/* Animated underline */}
            <div
              className="absolute -bottom-3 left-0 h-2 transition-all duration-1000 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #0260EB 0%, #5C9DFF 100%)"
              }}
            ></div>
          </div>
        </div>

        {/* Enhanced loading bar */}
        <div className="relative w-80 h-1 bg-gray-800/30 rounded-full overflow-hidden mt-12">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #0260EB 0%, #5C9DFF 100%)"
            }}
          />

          {/* Enhanced glow effect */}
          <div
            className="absolute top-0 bottom-0 w-32 bg-white opacity-30 filter blur-md"
            style={{
              left: `${progress - 10}%`,
              transition: "left 0.3s ease-out"
            }}
          ></div>
        </div>


      </div>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(0.5); opacity: 0.5; }
          50% { transform: scale(1); opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translate(calc(-50% + 30px), calc(-50% + 30px)) scale(1); }
          25% { transform: translate(calc(-50% - 30px), calc(-50% + 10px)) scale(0.9); }
          50% { transform: translate(calc(-50% - 20px), calc(-50% - 30px)) scale(1.1); }
          75% { transform: translate(calc(-50% + 10px), calc(-50% - 10px)) scale(0.95); }
        }

        @keyframes floatParticle {
          0%, 100% { transform: translate(5px, 5px) scale(1); opacity: 0.6; }
          50% { transform: translate(-5px, -5px) scale(0.8); opacity: 0.8; }
        }

        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>

      <Suspense fallback={null}>
        <NavigationHandler onNavigate={handleNavigation} />
      </Suspense>
    </>
  );
}
