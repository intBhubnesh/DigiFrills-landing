
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const servicesData = [
  {
    title: "Web Design and Development",
    description:
      "Your website is like your digital handshake—it’s the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    tags: ["UI/UX", "HTML/CSS", "React", "SEO"],
  },
  {
    title: "Digital Marketing",
    description:
      "Let’s face it, the internet is a noisy place. But with our Digital Marketing services, you won’t just stand out—you’ll shine. We’ll help you show up where your customers are hanging out, whether that’s Google, Instagram, or somewhere in between. Think of us as your online hype team, always finding clever ways to boost your visibility and drive those sweet, sweet clicks.",
    tags: ["SEO", "PPC", "Email", "Content"],
  },
  {
    title: "Branding & Creative Services",
    description:
      "Your brand is so much more than a logo—it’s your story, your personality, and your promise to customers. Our Branding & Creative Services bring your identity to life in a way that’s bold, beautiful, and 100% you. We’ll help you stand out, stick in people’s minds, and make your competitors go, “Whoa, that’s cool.”",
    tags: ["Logo", "Colors", "Typography", "Storytelling"],
  },
  {
    title: "App Design & Development",
    description:
      "Got a brilliant app idea? Let’s make it a reality! Whether it’s a mobile game, a productivity tool, or the next big social platform, we’ll build something that’s smooth, sleek, and downright addictive. Our apps are made with love (and a whole lot of coding).",
    tags: ["iOS", "Android", "React Native", "Flutter"],
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = rightRef.current?.querySelectorAll(".service-card");
      if (!cards) return;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 250) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white px-[40px] py-[100px] w-full max-w-[1200px] mx-auto">
      {/* Top Icon and Heading */}
      <div className="flex flex-col items-center space-y-4 w-full sm:max-w-[800px] mx-auto mb-[60px] max-w-full overflow-hidden">
  <div className="flex justify-center sm:justify-start w-[133.8px] h-[33px] items-center gap-2 mb-2 rounded-[20px] bg-[#f5f7f9]">
    <div className="w-[29px] h-[29px] bg-gray-900 rounded-full flex items-center justify-center p-[9px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="14" height="14" fill="white">
        <path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z" />
      </svg>
    </div>
    <span className="text-[#0F0F0F] text-[15px] font-inter font-semibold">Our Services</span>
  </div>
  <h2 className="text-[#0f0f0f] font-semibold text-center leading-tight w-full sm:max-w-[760px] h-auto text-[45px] xs:text-[30px]">
    Services designed to help your brand shine brighter.
  </h2>
</div>


      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-[40px] w-full">


        {/* Left Sticky Column (Visible only on lg and above) */}
        <div className="w-full lg:w-[350px] sticky top-[100px] space-y-6 h-fit hidden lg:block">

          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex items-center px-[5px] py-[4px] gap-2 transition-all duration-300 ${
                activeIndex === index
                  ? "text-orange-500 font-semibold"
                  : "text-[#0f0f0f]"
              }`}
            >
              <motion.svg
                width={18}
                height={18}
                className="text-orange-500"
                initial={{ opacity: 0, x: -10 }}
                animate={
                  activeIndex === index
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.3 }}
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z" />
              </motion.svg>
              <span className="text-[18px] font-[inter]">{service.title}</span>
            </div>
          ))}
        </div>

        {/* Right Scrollable Cards */}
        <div ref={rightRef} className="w-full lg:w-[820px] space-y-[40px] min-w-0">

          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-card w-full h-[388.5px] bg-[#f5f7f9] p-[10px] rounded-[20px]"
            >
              {/* Upper Section */}
              <div className="bg-transparent w-full h-[256.5px] p-[20px] space-y-[20px]">
                <div className="space-y-[12px] w-full">
                  <h2 className="text-[26px] font-semibold text-[#0f0f0f]">
                    <b>{service.title}</b>
                  </h2>
                  <p className="text-[15px] text-[#0f0f0f]">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-[12px]">
  {service.tags.map((tag, i) => (
    <div
      key={i}
      className="flex items-center gap-[8px] px-[8px] py-[2px] border border-[#00000033] rounded-full"
      style={{ width: "126.23px", height: "26.5px" }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 256 256"
        fill="currentColor"
      >
        <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z" />
      </svg>
      <span className="text-[15px] text-[#0f0f0f]">{tag}</span>
    </div>
  ))}
</div>

              </div>

              {/* Lower Section */}
              <div className="bg-white w-full h-[82px] flex items-center justify-between px-[20px] rounded-[30px] group">
                <span className="text-[20px] text-[#0f0f0f]">View Details</span>
                <div className="w-[42px] h-[42px] flex items-center justify-center bg-transparent rounded-[13px] transition-all duration-300 group-hover:bg-orange-500">
                  <svg
                    width="22.63"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="transition-all duration-300 group-hover:fill-white group-hover:stroke-white"
                  >
                    <path
                      d="M12 5v14m-7-7h14"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}