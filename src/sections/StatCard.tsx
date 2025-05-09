"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  endValue: number;
  suffix: string;
  title: string;
  description: string;
}

export const StatCard = ({
  endValue,
  suffix,
  title,
  description,
}: StatCardProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Watch element intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate number on visibility
  useEffect(() => {
    if (isInView) {
      animate(count, endValue, {
        duration: 2,
        ease: "easeOut",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, endValue]); // `count` is a stable motion value, safe to ignore

  return (
    <div className="text-left font-[inter]">
    <div
      ref={ref}
      className="bg-white p-4 rounded-4xl border border-dashed border-gray-400 transition-all"
    >
      <div className="text-6xl  font-semibold text-black font-[inter] inline-flex items-center justify-start w-full">
        <motion.div className="text-[#0F0F0F] font-[inter] text-[74px] font-normal leading-[74px] tracking-[-6.66px] ">{rounded}</motion.div>
        <div className="inline-flex bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3] bg-clip-text text-transparent">{suffix}</div>
      </div>
      <h3 className="text-xl mb-2 text-[#0F0F0F] font-[inter] text-[20px] font-medium leading-[28px] tracking-[-0.6px]">{title}</h3>
      </div>
      <p className="text-[#0F0F0F] font-[inter] text-[15px] font-medium leading-[22.5px] tracking-[-0.45px] opacity-80 text-justify">
        {description}
      </p>
    </div>
  );
};
