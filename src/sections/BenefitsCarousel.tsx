

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Main Carousel Component
export default function Services() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0); // Keeps track of current first visible card
  const [direction, setDirection] = useState(0); // Controls animation direction
  const [windowWidth, setWindowWidth] = useState(0); // Used to determine screen size for responsiveness

  // Your carousel cards
  const services = [
    {
      title: "We take care of generating leads while you focus on doing what you love—running your business!",
      image: "https://framerusercontent.com/images/hCD6D5Rkj2t7yJ5phygJnWiNA.png?scale-down-to=512",
    },
    {
      title: "Every solution is tailored to fit your unique business needs—no cookie-cutter strategies here!",
      image: "https://framerusercontent.com/images/vPt7rITwSUuNbMNluhQlsMgHw.png?scale-down-to=512",
    },
    {
      title: "Your brand stays visible 24/7 with our automated marketing strategies.",
      image: "https://framerusercontent.com/images/UGvdxe7Aj1RKhNfIBNhu2TxP3Q.png?scale-down-to=512",
    },
    {
      title: "Get big agency results without breaking the bank.",
      image: "https://framerusercontent.com/images/v0uSaGJ87hQIe1F8McNjkWHEMP4.png?scale-down-to=512",
    },
    {
      title: "Our team comes up with out-of-the-box ideas to make your brand stand out.",
      image: "https://framerusercontent.com/images/cTOirpmfY27Ikje3mCZb98lyXs.png?scale-down-to=512",
    },
  ];

  // Get screen width on mount & resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show different no. of cards based on screen width
  const getVisibleCards = () => {
    if (windowWidth < 640) return 1; // Mobile: 1 card
    if (windowWidth < 1024) return 2; // Tablet: 2 cards
    return 4; // Desktop: 3.5 cards (using 4 for smooth scroll)
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const visibleCount = getVisibleCards();

  const visibleServices = Array.from({ length: visibleCount }, (_, i) =>
    services[(currentServiceIndex + i) % services.length]
  );

  // Animation variants for sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <section className="w-full max-w-[1280px] px-5 py-[100px] bg-white mx-auto">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* --- Title Section --- */}
        <div className="mb-10 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-2">
            {/* Small icon */}
            <div className="w-[29px] h-[29px] bg-gray-900 rounded-full flex items-center justify-center p-[9px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
            <span className="text-[#0F0F0F] text-[15px] font-inter font-semibold">Benefits</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[#0F0F0F] text-[32px] sm:text-[48px] font-inter font-bold leading-tight max-w-[590px] mx-auto lg:mx-0">
            See why partnering with us is the smartest move.
          </h2>
        </div>

        {/* --- Carousel Section --- */}
        <div className="relative w-full h-[534px] py-[54px] mx-auto">
          
          {/* Navigation Buttons (mobile/tablet) */}
          <div className="flex sm:hidden justify-between absolute top-[50%] left-0 right-0 px-4 z-10">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handlePrev}
              className="w-[45px] h-[45px] bg-orange-500 text-white rounded-[15px] flex items-center justify-center shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleNext}
              className="w-[45px] h-[45px] bg-orange-500 text-white rounded-[15px] flex items-center justify-center shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Navigation Buttons (desktop only) */}
          <div className="hidden sm:flex absolute right-0 top-0 gap-4 mr-[45px]">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleNext}
              className="w-[45px] h-[45px] bg-orange-500 text-white rounded-[15px] flex items-center justify-center shadow-md mt-[-10px]"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handlePrev}
              className="w-[45px] h-[45px] bg-orange-500 text-white rounded-[15px] flex items-center justify-center shadow-md mt-[-10px]"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* --- Cards Container --- */}
          <div className="absolute w-full overflow-hidden mx-auto rounded-2xl">
            <div className="flex gap-[20px] transition-transform duration-500">
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                {visibleServices.map((service, index) => (
                  <motion.div
                    key={`${currentServiceIndex}-${index}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="w-[335.775px] min-w-[335.775px] h-[480px] bg-[#F5F7F9] rounded-2xl pt-[40px] px-[40px] hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4">
                      <h3 className="text-[#0F0F0F] text-[20px] font-semibold font-inter">
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-full h-[274px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={255.71}
                        height={274}
                        className="object-cover mix-blend-multiply"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

