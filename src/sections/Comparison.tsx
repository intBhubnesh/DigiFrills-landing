"use client";

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
import { IoBulb } from "react-icons/io5";
import { PiGraph } from "react-icons/pi";
import Image from "next/image";

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
    { text: "Bold Ideas", icon: IoBulb },
    { text: "Real ROI", icon: PiGraph },
    { text: "Long-Term Partners", icon: FaHandshake },
    { text: "Transparent Pricing", icon: FaTags },
    { text: "Innovative Tools", icon: FaTools },
    { text: "Full-Service Experts", icon: FaUserTie },
    { text: "Proactive Strategies", icon: FaCrown },
    { text: "Passion & Care", icon: FaHeart },
  ];

  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="relative inline-flex items-center bg-gray-100 px-4 py-1 rounded-full pl-12">
            {/* Icon positioned absolutely inside and above */}
            <div className="absolute left-2 top-1/4 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
              <Image
                src="/Background.svg"
                alt="Comparison icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="section-tag leading-none">Our differences</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          While others copy and paste,
          <br />
          we innovate and elevate.
          <br />
          Your brand gets the VIP treatment it truly deserves.
        </h2>
        {/* Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">
          {/* Others Column */}
          <div className="bg-gray-50 p-6 space-y-4">
            <h3 className="text-xl font-bold text-center mb-4">Others</h3>
            {others.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 text-gray-700"
              >
                <FaSadTear className="text-gray-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Agent-G Column */}
          <div className="bg-black text-white p-6 space-y-4">
            <h3 className="text-xl font-bold text-center mb-4 text-red-500">
              Agent-G
            </h3>
            {agentG.map(({ text, icon: Icon }, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <Icon className="text-red-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
