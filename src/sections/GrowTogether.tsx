"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746845552/logo_1_clm9cs.svg",
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746845553/logo_3_j1nx7c.svg",
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746845553/logo_2_zuh3y0.svg",
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746846350/logo_5_brppds.svg",
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746845553/logo_4_fbsntg.svg",
  "https://framerusercontent.com/images/g4yFX4nEgsyfKUkcJSsYZdlgCJM.svg",
  "https://framerusercontent.com/images/mGAxAGDBjt0JHg8MI0F9P9FkW0g.svg",
  "https://framerusercontent.com/images/vEfUDWPkZSWQLY8lC44HeDu6Ic.svg",
  "https://framerusercontent.com/images/uTkuLOi3ZjuJHBQNS9i0C4T7A.svg",
  "https://framerusercontent.com/images/8LtSXMmNjpVaruiiqMNkdJXfkg.svg",
];
const logosActive = [
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746846559/logo_5_active_pckpdx.svg",
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746846558/logo_2_active_set4kx.svg",
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746846557/logo_1_active_zgze7z.svg",
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746846560/logo_3_active_vj90wt.svg",
  "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746846559/logo_4_active_fuasad.svg",
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
  const [activeLogoIndex, setActiveLogoIndex] = useState<number | null>(null);

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

  // Helper function to get the active logo URL
  const getActiveLogoUrl = (index: number) => {
    return logosActive[index] || logos[index];
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
        We don’t just work <br /> together—
        <span className="">we </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]">grow</span>
        <span className=""> together.</span>
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
                  transition-all duration-500 ease-in-out
                  ${activeLogoIndex === (rowIndex * row.length + i) ? 'shadow-lg transform -translate-y-1' : 'hover:shadow-md hover:transform hover:-translate-y-1'}
                  ${activeLogoIndex === (rowIndex * row.length + i) ? 'bg-gray-50' : 'hover:bg-gray-50'}
                  cursor-pointer
                  ${
                    windowWidth < 750
                      ? "w-16 h-16 p-4"
                      : windowWidth < 1024
                      ? "w-18 h-18 p-4"
                      : "w-24 h-24 p-6"
                  }
                `}
                onMouseEnter={() => setActiveLogoIndex(rowIndex * row.length + i)}
                onMouseLeave={() => setActiveLogoIndex(null)}
                onClick={() => {
                  // Toggle active state on click
                  setActiveLogoIndex(
                    activeLogoIndex === (rowIndex * row.length + i)
                      ? null
                      : (rowIndex * row.length + i)
                  );
                }}
              >
                <div className="relative w-full h-full group">
                  {/* Regular logo (shown when not active/hovered) */}
                  <Image
                    src={logo}
                    alt={`Logo ${i + 1}`}
                    width={80}
                    height={80}
                    className={`
                      object-contain w-full h-full
                      transition-all duration-500 ease-in-out
                      ${activeLogoIndex === (rowIndex * row.length + i) ? 'opacity-0 transform scale-95' : 'group-hover:opacity-0 group-hover:transform group-hover:scale-95'}
                      absolute inset-0
                    `}
                    priority={i < 3}
                  />

                  {/* Active logo (shown when active/hovered) */}
                  <Image
                    src={getActiveLogoUrl(logos.indexOf(logo))}
                    alt={`Logo ${i + 1} Active`}
                    width={80}
                    height={80}
                    className={`
                      object-contain w-full h-full
                      transition-all duration-500 ease-in-out
                      ${activeLogoIndex === (rowIndex * row.length + i) ? 'opacity-100 transform scale-105' : 'opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-105'}
                    `}
                    priority={i < 3}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
