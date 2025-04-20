"use client";

import { motion, AnimatePresence } from "framer-motion";
// import { section } from "framer-motion/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Services() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    if (windowWidth <= 807) return 1;
    if (windowWidth < 1024) return 2;
    return 4;
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
            <div className="w-[29px] h-[29px] bg-gray-900 rounded-full flex items-center justify-center p-[9px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
              <path d="M10.4414 3.91001C10.3881 3.74557 10.2872 3.60064 10.1516 3.49355C10.0159 3.38647 9.85146 3.32205 9.67914 3.30845L7.24754 3.11208L6.3091 0.8429C6.24315 0.682523 6.13102 0.545364 5.98696 0.448839C5.8429 0.352315 5.67341 0.300781 5.5 0.300781C5.32659 0.300781 5.15709 0.352315 5.01303 0.448839C4.86897 0.545364 4.75685 0.682523 4.6909 0.8429L3.75332 3.11251L1.32172 3.30845C1.14908 3.32268 0.984498 3.38763 0.84866 3.49512C0.712822 3.60262 0.611786 3.74786 0.558248 3.91261C0.504711 4.07735 0.501061 4.25425 0.547757 4.42106C0.594453 4.58787 0.689412 4.73716 0.820701 4.85017L2.67609 6.45032L2.1089 8.84368C2.06754 9.01242 2.07732 9.18966 2.13702 9.35282C2.19671 9.51598 2.30361 9.65769 2.44411 9.75989C2.58461 9.8621 2.75234 9.92018 2.92596 9.92674C3.09957 9.9333 3.27121 9.88804 3.41902 9.79673L5.5 8.51583L7.58097 9.79673C7.72874 9.88743 7.9001 9.93224 8.07335 9.9255C8.2466 9.91877 8.41396 9.86077 8.55424 9.75887C8.69451 9.65696 8.8014 9.51573 8.86136 9.35304C8.92133 9.19036 8.93167 9.01354 8.89109 8.84497L8.3239 6.45161L10.1793 4.85145C10.3114 4.73817 10.4068 4.5882 10.4535 4.42058C10.5001 4.25295 10.4959 4.07524 10.4414 3.91001ZM7.4134 5.87368C7.34185 5.93536 7.28863 6.01551 7.25953 6.10538C7.23043 6.19525 7.22658 6.29138 7.2484 6.38329L7.80226 8.72251L5.77027 7.47298C5.689 7.42295 5.59543 7.39647 5.5 7.39647C5.40456 7.39647 5.311 7.42295 5.22972 7.47298L3.19773 8.72251L3.7516 6.38501C3.77341 6.2931 3.76956 6.19697 3.74047 6.1071C3.71137 6.01723 3.65814 5.93708 3.5866 5.8754L1.77031 4.30704L4.15078 4.11497C4.24551 4.10736 4.33629 4.07372 4.4131 4.01776C4.48992 3.9618 4.54977 3.8857 4.58605 3.79786L5.5 1.58497L6.41394 3.79786C6.45023 3.8857 6.51008 3.9618 6.58689 4.01776C6.6637 4.07372 6.75449 4.10736 6.84922 4.11497L9.22968 4.30704L7.4134 5.87368Z" fill="white"/>
            </svg>
            </div>
            <span className="text-[#0F0F0F] text-[15px] font-inter font-semibold">Benefits</span>
          </div>
          <h2 className="text-[#0F0F0F] text-[32px] sm:text-[48px] font-inter font-bold leading-tight max-w-[590px] mx-auto lg:mx-0">
            See why partnering with us is the smartest move.
          </h2>
        </div>

        {/* --- Carousel Section --- */}
        <div className="relative w-full h-[534px] py-[54px] mx-auto">

          {/* --- Responsive Navigation Buttons --- */}
          <div className="custom-nav-buttons absolute z-10 flex gap-4 transition-all duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-[45px] h-[45px] bg-orange-500 text-white rounded-[15px] flex items-center justify-center shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-[45px] h-[45px] bg-orange-500 text-white rounded-[15px] flex items-center justify-center shadow-md"
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
                    className="
                      w-full
                      min-w-0
                      min-h-[480px]
                      bg-[#F5F7F9]
                      rounded-2xl
                      pt-[40px]
                      px-[40px]
                      hover:shadow-lg
                      transition-shadow
                      sm:min-w-[calc(50%-10px)] 
                      lg:min-w-[335.775px] 
                      lg:max-w-[335.775px]
                      flex flex-col
                    "
                  >
                    <div className="mb-4 min-h-[96px] flex items-start">
                      <h3 className="text-[#0F0F0F] text-[20px] font-semibold font-inter">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={255.71}
                        height={274}
                        className="object-contain mix-blend-multiply"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Custom responsive nav button styling */}
      <style jsx>{`
        .custom-nav-buttons {
          top: 50%;
          left: 0;
          right: 0;
          justify-content: space-between;
          padding: 0 16px;
          transform: translateY(-50%);
        }

        @media (min-width: 808px) {
          .custom-nav-buttons {
            top: 0;
            left: auto;
            right: 45px;
            transform: none;
            justify-content: flex-end;
          }
        }
      `}</style>
    </section>
  );
}
