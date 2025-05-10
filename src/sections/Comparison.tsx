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
      <div className="text-center flex my-12 items-center justify-center">
      <div className="max-w-[1200px] w-full flex flex-col items-center justify-center px-[20px] gap-[5px]">
        {/* Section Heading */}
          <div className=" h-[33px] gap-1 rounded-[25px] bg-[#f5f7f9] flex justify-between items-center pt-[2px] pb-[2px] pr-[10px] pl-[2px]">
          <div className="size-[32px]   rounded-full inlie-flex items-center justify-center p-[9px]"
            style={{
                background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
            }}
            >

            </div>
            <div className="section-tag text-nowrap">
            Our Differences
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
            <h3 className="text-xl font-bold text-center mb-4 text-[#0260EB]">
              Agent-G
            </h3>
            {agentG.map(({ text, icon: Icon }, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <Icon className="text-[#0260EB]" />
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
