"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg",
  "https://framerusercontent.com/images/3Y1x3Iz9CnzoCeLjfRflZMOiF0.svg",
  "https://framerusercontent.com/images/duZwjP73YzY6931zuqasWWfWDZY.svg",
  "https://framerusercontent.com/images/6o730eaCLvIkG9j6FFRCYHSzNzc.svg",
  "https://framerusercontent.com/images/oeigtHFhM0qf1CThkR9gRSymB0.svg",
  "https://framerusercontent.com/images/g4yFX4nEgsyfKUkcJSsYZdlgCJM.svg",
  "https://framerusercontent.com/images/mGAxAGDBjt0JHg8MI0F9P9FkW0g.svg",
  "https://framerusercontent.com/images/vEfUDWPkZSWQLY8lC44HeDu6Ic.svg",
  "https://framerusercontent.com/images/uTkuLOi3ZjuJHBQNS9i0C4T7A.svg",
  "https://framerusercontent.com/images/8LtSXMmNjpVaruiiqMNkdJXfkg.svg",
];

const fadeInVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function GrowTogetherSection() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRows = () => {
    if (windowWidth < 750) {
      // Mobile: 4 + 4 + 2 (all centered)
      return [logos.slice(0, 4), logos.slice(4, 8), logos.slice(8, 10)];
    } else if (windowWidth < 1025) {
      // Tablet (750px-1023px): 8 + 2 (both centered)
      return [logos.slice(0, 8), logos.slice(8, 10)];
    } else {
      // Desktop (1024px+): 5 + 5 (both centered)
      return [logos.slice(0, 5), logos.slice(5, 10)];
    }
  };

  const rows = getRows();

  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl"
      >
        We don&apos;t just work together—we{" "}
        <span className="text-[#0260EB]">grow</span> together.
      </motion.h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Service designed to help your brand shine brighter.
      </p>

      <div className="mt-12 w-full max-w-6xl mx-auto space-y-8">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-wrap justify-center gap-4 ${
              windowWidth >= 750 && windowWidth < 1024 ? "gap-4" : "md:gap-6"
            }`}
          >
            {row.map((logo, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className={`
                  bg-gray-100 rounded-2xl md:rounded-3xl flex items-center justify-center
                  ${
                    windowWidth < 750
                      ? "w-16 h-16 p-4"
                      : windowWidth < 1024
                      ? "w-18 h-18 p-4"
                      : "w-24 h-24 p-6"
                  }
                `}
              >
                <Image
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  priority={i < 3}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
