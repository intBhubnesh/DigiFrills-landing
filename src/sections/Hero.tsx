"use client";

import { motion, stagger, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "@mui/icons-material";
import { StatCard } from "./StatCard";

const Hero = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const { ref: mediaRef, inView: mediaInView } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [headingRef, headingInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Text animation on load
  useEffect(() => {
    if (heroTextRef.current) {
      animate(
        heroTextRef.current.querySelectorAll(".hero-text"),
        { opacity: 1, y: 0 },
        { delay: stagger(0.1), duration: 0.8 }
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLVideoElement>) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={heroTextRef}
      className="relative w-full flex flex-col items-center text-center px-6 lg:px-12 py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-16 text-left">
        {/* Headline with fade-in */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black max-w-4xl"
        >
          Big ideas, smart strategies, <br />
          and endless creativity to <br />
          supercharge <span className="text-black">⚡</span> your brand!
        </motion.h1>

        {/* Subtext with delay */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          className="hero-text text-gray-600 text-lg md:text-xl mt-4 max-w-2xl"
        >
          Your go-to agency for designs that inspire and strategies that
          deliver. We turn ideas into lasting impressions.
        </motion.p>

        {/* CTA Button with hover animation */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="hero-text bg-black text-white px-6 py-2 rounded-full shadow-lg mt-6"
        >
          Get Template
        </motion.button>

        {/* Reviews with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          className="hero-text flex items-center space-x-2 mt-6 text-gray-700"
        >
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fontSize="small"
                className={i === 4 ? "opacity-75" : ""}
              />
            ))}
          </div>
          <p className="text-gray-600 font-medium">
            Over 200+ Five Star Reviews
          </p>
        </motion.div>
      </div>

      {/* Media Section */}
      <div ref={mediaRef} className="w-full max-w-7xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
          {/* Left Image */}
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={
              mediaInView ? { x: "-110%", opacity: 0 } : { x: 0, opacity: 1 }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[400px] md:h-[500px] w-full relative"
          >
            <Image
              src="https://framerusercontent.com/images/IFY0RoqssWJA9ANeSyRcZCmZg.jpg?scale-down-to=1024"
              alt="Left Image"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </motion.div>

          {/* Center Video */}
          <motion.div
            initial={{ width: "100%", height: "400px", position: "relative" }}
            animate={
              mediaInView
                ? {
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 20,
                    borderRadius: 0,
                  }
                : {
                    width: "100%",
                    height: "400px",
                    position: "relative",
                  }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="overflow-hidden shadow-xl flex justify-center items-center bg-black"
          >
            <video
              className="w-full h-full object-cover cursor-none"
              src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onMouseMove={handleMouseMove}
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={
              mediaInView ? { x: "110%", opacity: 0 } : { x: 0, opacity: 1 }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[400px] md:h-[500px] w-full relative"
          >
            <Image
              src="https://framerusercontent.com/images/PDDdZBn0j0Udoh6FeuU6U8nJ8.jpg?scale-down-to=1024"
              alt="Right Image"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Custom Cursor */}
      {hover && (
        <motion.div
          className="fixed z-50 pointer-events-none flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            transform: "translate(-50%, -50%)",
          }}
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

      {/* Stats Section with blur animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto mt-24 px-6 lg:px-16"
      >
        <motion.h2
          ref={headingRef}
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={
            headingInView
              ? {
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }
              : {}
          }
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-[rgb(241,85,51)]">Building</span>
          <span className="text-black"> brands, </span>
          <span className="text-[rgb(241,85,51)]">boosting</span>
          <span className="text-black"> businesses, and </span>
          <br />
          <span className="text-[rgb(241,85,51)]">redefining</span>
          <span className="text-black"> possibilities.</span>
          <span className="text-black mt-2 inline-block">Let&apos;s</span>
          <br />
          <span className="text-black mt-2 inline-block">
            grow your brand together.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            endValue={250}
            suffix="+"
            title="Projects Delivered"
            description="We've successfully completed over 250 projects—and we're just getting started!"
          />

          <StatCard
            endValue={70}
            suffix="%"
            title="Business Growth"
            description="Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
          />

          <StatCard
            endValue={500}
            suffix="+"
            title="Happy Clients"
            description="More than 500 satisfied clients trust us to bring their ideas to life."
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
