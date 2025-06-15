"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { StatCard } from "./StatCard";
import CustomCursor from "./CustomCursor";
import { getCalApi } from "@calcom/embed-react";

const Hero = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const { ref: mediaRef, inView: mediaInView } = useInView({
    threshold: 0.9,
    triggerOnce: false,
  });
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section
      ref={heroTextRef}
      className="relative w-full flex flex-col items-center text-center px-6 lg:px-12 py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
    >
      <CustomCursor videoRef={videoWrapperRef} />
      <div className="w-full max-w-6xl mx-auto pl-0 pr-6 lg:pl-0 lg:pr-16 text-center relative pt-12 lg:pt-0 gap-2 flex-col flex items-center">
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
          className="hero-message text-4xl md:text-5xl lg:text-6xl font-[inter] font-medium leading-tight tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]">
            Helping
          </span>
          <span className=""> Early-Stage </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]">
            Startups
          </span>
          <span className=""> & SaaS Founders</span>
          <span className=""> build</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]">
            {" "}
            MVPs{" "}
          </span>
          <span className="text-black inline-block">Quickly</span>
          <span className=""> & </span>
          <span className="text-black inline-block">Securely</span>
          <span className=""> in 2 Weeks or Less.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-text text-lg md:text-xl mt-6 max-w-[640px] text-[#0f0f0f] font-[inter] font-normal leading-[25.2px] tracking-[-0.18px] opacity-80"
        >
          Your go-to IT partner for scalable systems, AI integration, and
          machine learning solutions that future-proof your operations. We
          don&apos;t just solve problems — we build intelligent experiences.
        </motion.p>

        {/* Updated Button Container with Both Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 justify-center"
        >
          {/* Book a Call Button */}
          <motion.button
            whileHover={{
              backgroundColor: "#7988E7",
              scale: 1.05,
            }}
            style={{
              boxShadow:
                "0px 1.344px 0.537px -0.625px rgba(0, 0, 0, 0.09), 0px 3.185px 1.274px -1.25px rgba(0, 0, 0, 0.09), 0px 5.809px 2.324px -1.875px rgba(0, 0, 0, 0.08), 0px 9.658px 3.863px -2.5px rgba(0, 0, 0, 0.08), 0px 15.597px 6.239px -3.125px rgba(0, 0, 0, 0.07), 0px 25.531px 10.212px -3.75px rgba(0, 0, 0, 0.06), 0px 43.962px 17.585px -4.375px rgba(0, 0, 0, 0.04)",
            }}
            data-cal-link="prithviraj-panda-qtbcvw/30min"
            className="hero-text inline-flex w-fit bg-black text-white px-8 py-3 rounded-full shadow-lg font-inter text-lg font-medium leading-[22.5px] tracking-[-0.45px]"
          >
            Book a Call
          </motion.button>

          {/* Portfolio Button */}
          <motion.button
            whileHover={{
              backgroundColor: "#7988E7",
              scale: 1.05,
            }}
            style={{
              boxShadow:
                "0px 1.344px 0.537px -0.625px rgba(0, 0, 0, 0.09), 0px 3.185px 1.274px -1.25px rgba(0, 0, 0, 0.09), 0px 5.809px 2.324px -1.875px rgba(0, 0, 0, 0.08), 0px 9.658px 3.863px -2.5px rgba(0, 0, 0, 0.08), 0px 15.597px 6.239px -3.125px rgba(0, 0, 0, 0.07), 0px 25.531px 10.212px -3.75px rgba(0, 0, 0, 0.06), 0px 43.962px 17.585px -4.375px rgba(0, 0, 0, 0.04)",
            }}
            onClick={() => {
              const portfolioSection = document.getElementById("portfolio");
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hero-text inline-flex w-fit bg-black text-white px-8 py-3 rounded-full shadow-lg font-inter text-lg font-medium leading-[22.5px] tracking-[-0.45px]"
          >
            Projects
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-text flex items-center justify-center space-x-2 mt-6 text-gray-700"
        >
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Image
                src="/star.svg"
                alt="Star"
                key={i}
                width={25}
                height={24}
              />
            ))}
          </div>
          <p className="text-[#0F0F0F] font-inter text-[15px] font-medium leading-[22.5px] tracking-[-0.45px] opacity-60">
            Over 200+ Five Star Reviews
          </p>
        </motion.div>
      </div>

      {/* Media Section */}
      <div ref={mediaRef} className="relative w-full max-w-7xl mt-16 h-[500px]">
        <motion.div
          initial="initial"
          animate={mediaInView ? "expanded" : "initial"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full items-center relative z-10"
          variants={{
            initial: { gridTemplateColumns: "1fr 1fr 1fr" },
            expanded: { gridTemplateColumns: "0fr 1fr 0fr" },
          }}
          transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          style={{ display: "grid" }}
        >
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={
              mediaInView ? { x: "-100%", opacity: 1 } : { x: 0, opacity: 1 }
            }
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            className="h-full w-full relative overflow-hidden rounded-xl shadow-2xl"
          >
            <Image
              src="https://framerusercontent.com/images/IFY0RoqssWJA9ANeSyRcZCmZg.jpg?scale-down-to=1024"
              alt="Left Image"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.div
            ref={videoWrapperRef}
            initial={{ width: "100%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            className="h-full w-full relative overflow-hidden rounded-xl shadow-2xl bg-black"
          >
            <video
              className="w-full h-full object-cover cursor-none"
              src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </motion.div>

          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={
              mediaInView ? { x: "100%", opacity: 1 } : { x: 0, opacity: 1 }
            }
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            className="h-full w-full relative overflow-hidden rounded-xl shadow-2xl"
          >
            <Image
              src="https://framerusercontent.com/images/PDDdZBn0j0Udoh6FeuU6U8nJ8.jpg?scale-down-to=1024"
              alt="Right Image"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full  max-w-7xl mx-auto mt-60 px-6 lg:px-16"
      >
        {/* paste */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left text-4xl md:text-5xl lg:text-[65px] max-w-5xl text-gray font-[inter] font-medium leading-[65px] tracking-[-4px]"
        >
          Big ideas, smart strategies, <br />
          and endless creativity to <br />
          supercharge<span className="text-yellow-500 inline-block">⚡</span>
          your business !
        </motion.h1>
        <div className="grid mt-12 grid-cols-1 md:grid-cols-3 w-full gap-4">
          <StatCard
            endValue={25}
            suffix="+"
            title="Projects Delivered"
            description="We've successfully completed over 25 projects—and we're just getting started!"
          />
          <StatCard
            endValue={70}
            suffix="%"
            title="Business Growth"
            description="Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
          />
          <StatCard
            endValue={8}
            suffix="+"
            title="Happy Clients"
            description="More than 50 satisfied clients trust us to bring their ideas to life."
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
