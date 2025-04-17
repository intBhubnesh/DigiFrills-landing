"use client";

import { motion } from "framer-motion";
import {
  FaSadTear,
  FaHandshake,
  FaTags,
  FaTools,
  FaUserTie,
  FaCrown,
  FaHeart,
} from "react-icons/fa";
import { BsFileEarmarkText } from "react-icons/bs";
import { IoMdBulb } from "react-icons/io";
import { PiGraphBold } from "react-icons/pi";

const Comparison = () => {
  const others = [
    "Generic Solutions",
    "Jargon Overload",
    "Boring Creativity",
    "Fluff Metrics",
    "One-Time Campaigners",
    "Hidden Costs",
    "Outdated Methods",
    "Limited Scope",
    "Reactive Tactics",
    "Just Another Client",
  ];

  const agentG = [
    { text: "Personalized Plans", icon: BsFileEarmarkText },
    { text: "Plain Talk", icon: BsFileEarmarkText },
    { text: "Bold Ideas", icon: IoMdBulb },
    { text: "Real ROI", icon: PiGraphBold },
    { text: "Long-Term Partners", icon: FaHandshake },
    { text: "Transparent Pricing", icon: FaTags },
    { text: "Innovative Tools", icon: FaTools },
    { text: "Full-Service Experts", icon: FaUserTie },
    { text: "Proactive Strategies", icon: FaCrown },
    { text: "Passion & Care", icon: FaHeart },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-4"
    >
      <div className="max-w-2xl mx-auto mt-10 space-y-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-1 rounded-full mx-auto mb-4">
            {/* Black circle with white scale icon */}
            <div className="bg-black rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 2h2v2.126a3.001 3.001 0 0 1 1.857 1.857h2.222l-2.694 6h-2.064A3.003 3.003 0 0 1 13 15.874V20h4v2H7v-2h4v-4.126A3.003 3.003 0 0 1 9.679 12H7.615l-2.694-6h2.222A3.001 3.001 0 0 1 9 4.126V2h2v2h2V2ZM6.5 8.618 7.885 12H5.115L6.5 8.618Zm11 0L18.885 12h-2.77L17.5 8.618ZM12 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Our differences
            </span>
          </div>

          {/* Heading Text */}
          <h2 className="section-heading  text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
            While others copy and paste,
            <br />
            we innovate and elevate.
            <br />
            Your brand gets the VIP treatment it truly deserves.
          </h2>
        </div>

        {/* Titles */}
        <div className="grid grid-cols-2 text-center text-2xl font-bold">
          <h2>Others</h2>
          <h2 className="text-red-500">Agent-G</h2>
        </div>

        {/* Single Box with 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg min-h-[500px]">
          {/* Others Column */}
          <div className="bg-gray-100 p-6 flex flex-col justify-between gap-y-4">
            {others.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 text-gray-700 text-base"
              >
                <FaSadTear className="text-lg" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Agent-G Column */}
          <div className="bg-black text-white p-6 flex flex-col justify-between gap-y-4">
            {agentG.map(({ text, icon: Icon }, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-base">
                <Icon className="text-red-500 text-lg" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Comparison;
