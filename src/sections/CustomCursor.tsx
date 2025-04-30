import React, { useEffect, useState, RefObject } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  videoRef: RefObject<HTMLDivElement | null>;
}

const CustomCursor = ({ videoRef }: CustomCursorProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // Function to check if cursor is over video
    const checkIfInVideo = (mouseX: number, mouseY: number) => {
      const bounds = videoRef.current?.getBoundingClientRect();
      if (bounds) {
        return (
          mouseX >= bounds.left &&
          mouseX <= bounds.right &&
          mouseY >= bounds.top &&
          mouseY <= bounds.bottom
        );
      }
      return false;
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setHover(checkIfInVideo(e.clientX, e.clientY));
    };

    // Handle scroll events which could change video position
    const handleScroll = () => {
      const { x, y } = cursorPosition;
      setHover(checkIfInVideo(x, y));
    };

    // Handle mouse entering the video
    const handleMouseEnter = () => {
      setHover(true);
    };

    // Handle mouse leaving the video
    const handleMouseLeave = () => {
      setHover(false);
    };

    // Add all event listeners
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Add direct event listeners to the video element
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("mouseenter", handleMouseEnter);
      videoElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (videoElement) {
        videoElement.removeEventListener("mouseenter", handleMouseEnter);
        videoElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [videoRef, cursorPosition]);

  return (
    <>
      {hover && (
        <motion.div
          className="fixed z-50 pointer-events-none flex items-center justify-center"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ scale: { duration: 0.2 } }}
        >
          <div className="w-16 h-16 rounded-full bg-black/90 backdrop-blur-sm shadow-xl flex items-center justify-center relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 border-2 border-orange-500 rounded-full border-t-transparent"
            />
            <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-orange-500" />
            <span className="absolute -right-28 text-black font-semibold text-sm whitespace-nowrap">
              PLAY SHOWREEL
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
