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
    <div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
    >
      <div className="text-5xl font-bold text-black mb-2">
        <motion.span>{rounded}</motion.span>
        <span className="text-[rgb(241,85,51)]">{suffix}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
