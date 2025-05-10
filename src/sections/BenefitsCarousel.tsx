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
      title: "We build modern AI & ML-ready apps that scale effortlessly.",
      image: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746812754/undefined_stljfe.png",
    },
    {
      title: "Fast deployment: launch your app in 2 weeks or less.",
      image: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746813396/launch_start_up_rocket_transportation_man_wja2gl.png",
    },
    {
      title: "Ensure 24/7 uptime with reliable and secure architectures.",
      image: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746813464/undefined_4_stm9gn.png",
    },
    {
      title: "Cut costs with clean, efficient, and reduced code solutions.",
      image: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746813605/undefined_5_demx2d.png",
    },
    {
      title: "Creative, tailored solutions to solve your unique challenges.",
      image: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746813683/customize_paint_brush_art_woman_xpwyfx.png",
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
    setCurrentServiceIndex(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };

  const visibleCount = getVisibleCards();
  const visibleServices = Array.from(
    { length: visibleCount },
    (_, i) => services[(currentServiceIndex + i) % services.length]
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
    <section className="w-full max-w-[1200px] px-5 py-[100px] bg-white mx-auto">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* --- Title Section --- */}
        <div className=" text-center lg:text-left">
          <div className="flex justify-center bg-[#F5F7F9] rounded-full w-fit pr-4 lg:justify-start items-center gap-2 mb-2">
            <div className="size-[32px]   rounded-full flex items-center justify-center p-[9px]"
            style={{
                background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
            }}
            >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.73 3.51001L15.49 7.03001C15.73 7.52002 16.37 7.99001 16.91 8.08001L20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.02003 21.35C5.88003 22.62 4.58003 21.67 5.14003 19.25L5.85003 16.18C5.98003 15.6 5.75003 14.79 5.33003 14.37L2.85003 11.89C1.39003 10.43 1.86003 8.95001 3.90003 8.61001L7.09003 8.08001C7.62003 7.99001 8.26003 7.52002 8.50003 7.03001L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z" fill="white"/>
</svg>
            </div>
            <span className="section-tag">Benefits</span>
          </div>
          <h2 className="section-heading max-w-[590px] mx-auto lg:mx-0">
            See why partnering with us is the smartest move.
          </h2>
        </div>

        {/* --- Carousel Section --- */}
        <div className="relative w-full  h-[534px]  mx-auto">
          {/* --- Responsive Navigation Buttons --- */}
          <div className="custom-nav-buttons  z-10 flex w-full my-5 gap-4 transition-all duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-[45px] h-[45px] text-white rounded-[15px] flex items-center justify-center shadow-md"
              style={{
                background: "linear-gradient(135deg, #444 11.5%, #000 100%)"
                              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-[45px] h-[45px] text-white rounded-[15px] flex items-center justify-center shadow-md"
              style={{
                background: "linear-gradient(135deg, #444 11.5%, #000 100%)"
                              }}
            >
              <ChevronRight className="ml-1 w-6 h-6" />
            </motion.button>
          </div>

          {/* --- Cards Container --- */}
          <div className="absolute w-full overflow-hidden mx-auto rounded-2xl">
            <div className="flex gap-[20px] transition-transform duration-500">
              <AnimatePresence
                initial={false}
                mode="popLayout"
                custom={direction}
              >
                       {visibleServices.map((service, index) => (
                  <motion.div
                  key={`${currentServiceIndex}-${index}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                    className="
                      w-full
                      min-w-0
                      min-h-[420px]
                      bg-[#F5F7F9]
                      rounded-2xl
                      pt-[40px]
                      px-[40px]
                      transition-all
                      duration-300
                      sm:min-w-[calc(50%-10px)]
                      lg:min-w-[335.775px]
                      lg:max-w-[335.775px]
                      flex flex-col
                      relative
                      group
                    "
                  >
                    <div className="mb-4 min-h-[96px] flex items-start">
                      <h3 className=" benifit-text">
                        {service.title}
                      </h3>
                    </div>
                    <div className="absolute -bottom-[80px] bg-white rounded-3xl flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-8 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={255.71}
                        height={274}
                        className="object-contain mix-blend-multiply rounded-3xl"
                      />
                    </div>
                    <div
                      className="absolute -bottom-[80px] w-[255.71px] h-[274px] -rotate-12 right-14 -z-10 rounded-3xl flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-8 group-hover:-rotate-6 overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #444 -31.5%, #000 100%)"
                      }}
                    >
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
