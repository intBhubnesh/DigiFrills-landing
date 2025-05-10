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
      <div className="text-center flex py-40 items-center justify-center">
      <div className="max-w-[1200px] w-full flex flex-col items-center justify-center px-[20px] gap-[5px]">
        {/* Section Heading */}
          <div className=" h-[33px] gap-1 rounded-[25px] bg-[#f5f7f9] flex justify-between items-center pt-[2px] pb-[2px] pr-[10px] pl-[2px]">
           <div className="size-[32px]   rounded-full flex items-center justify-center "
            style={{
                background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
            }}
            >
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
  <path d="M11.0874 5.70191L9.71244 2.26441C9.66695 2.15101 9.58268 2.05743 9.47463 2.00038C9.36658 1.94332 9.24178 1.9265 9.12248 1.95289L6.65564 2.49902V1.76855C6.65564 1.6318 6.60131 1.50065 6.50462 1.40395C6.40792 1.30725 6.27677 1.25293 6.14001 1.25293C6.00326 1.25293 5.87211 1.30725 5.77541 1.40395C5.67871 1.50065 5.62439 1.6318 5.62439 1.76855V2.72977L2.93455 3.32789C2.85265 3.34605 2.77643 3.38392 2.71249 3.4382C2.64854 3.49249 2.59881 3.56156 2.56759 3.63941L1.19259 7.07348C1.16775 7.13549 1.1552 7.20175 1.15564 7.26855C1.15564 7.78977 1.42205 8.23234 1.90544 8.51465C2.25417 8.70974 2.64668 8.81323 3.04626 8.81543C3.44585 8.81323 3.83836 8.70974 4.18708 8.51465C4.67048 8.23234 4.93689 7.78977 4.93689 7.26855C4.93688 7.2029 4.92434 7.13786 4.89994 7.07691L3.75009 4.20273L5.62439 3.78809V8.81543H5.10876C4.97201 8.81543 4.84086 8.86975 4.74416 8.96645C4.64746 9.06315 4.59314 9.1943 4.59314 9.33105C4.59314 9.46781 4.64746 9.59896 4.74416 9.69566C4.84086 9.79235 4.97201 9.84668 5.10876 9.84668H7.17126C7.30802 9.84668 7.43917 9.79235 7.53587 9.69566C7.63256 9.59896 7.68689 9.46781 7.68689 9.33105C7.68689 9.1943 7.63256 9.06315 7.53587 8.96645C7.43917 8.86975 7.30802 8.81543 7.17126 8.81543H6.65564V3.55734L8.39244 3.17062L7.38009 5.70148C7.35563 5.76256 7.34309 5.82776 7.34314 5.89355C7.34314 6.41477 7.60955 6.85734 8.09294 7.13965C8.44074 7.33709 8.83383 7.44088 9.23376 7.44088C9.6337 7.44088 10.0268 7.33709 10.3746 7.13965C10.858 6.85734 11.1244 6.41477 11.1244 5.89355C11.1244 5.8279 11.1118 5.76286 11.0874 5.70191ZM3.04626 7.78418C2.88685 7.78418 2.27283 7.70383 2.19505 7.34676L3.04626 5.21937L3.89748 7.34676C3.8197 7.70383 3.20568 7.78418 3.04626 7.78418ZM9.23376 6.40918C9.07435 6.40918 8.46033 6.32883 8.38255 5.97176L9.23376 3.84437L10.085 5.97176C10.0072 6.32883 9.39318 6.40918 9.23376 6.40918Z" fill="white"/>
</svg>
            </div>
            <div className="section-tag text-nowrap">
            Our Differences
            </div>
          </div>

        <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          While others copy and paste,
          <br />
          we innovate and elevate.
                  </h2>
        {/* Comparison Table */}
        <div className="flex flex-col   md:flex-row gap-0 rounded-2xl overflow-hidden shadow-lg">
          {/* Others Column */}
          <div className="bg-gray-50 p-6 w-sm space-y-4">
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
          <div className="text-white w-sm p-6 space-y-4" style={{ background: "linear-gradient(135deg, #444 -31.5%, #000 100%)" }}>
            <h3 className="text-xl font-bold text-center mb-4 text-[#0260EB]">
              DigiFrills
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
