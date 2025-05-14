"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import Image from "next/image";
export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<Array<HTMLDivElement | null>>([]);

  // Initialize refs array
  useEffect(() => {
    servicesRef.current = servicesRef.current.slice(0, servicesData.length);
  }, []);

  // Handle scroll and update active index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      servicesRef.current.forEach((ref, index) => {
        if (!ref) return;

        const offsetTop = ref.getBoundingClientRect().top + window.scrollY;
        const offsetBottom = offsetTop + ref.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click on sidebar item
  const handleSidebarClick = (index: number) => {
    setActiveIndex(index);
    const targetRef = servicesRef.current[index];

    if (targetRef) {
      const offsetTop = targetRef.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - window.innerHeight / 3,
        behavior: "smooth",
      });
    }
  };

  const testimonialData = [
    {
      profile: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746911698/1723801405260_o8pgc0.jpg",
      testimonial: "Turned our rough ideas into a stunning website our users love!",
    },
    {
      profile: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746911836/1737181719368_zztdhm.jpg",
      testimonial: "They understood our vision better than we did. 10/10 would recommend!",
    },
    {
      profile: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746912344/1517021278290_zm1bk8.jpg",
      testimonial: "From strategy to execution, every detail was on point!",
    },
    {
      profile: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746912615/1516269349989_tasdep.jpg",
      testimonial: "Our brand went from a whisper to a roar. Getting noticed like never before!",
    },
    {
      profile: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746913149/Rectangle_4312_ivfohg.png",
      testimonial: "Attention to detail, quick responses, and innovative ideas were top-notch!",
    },
    {
      profile: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746913650/1733584220094_dgvvaq.jpg",
      testimonial: "Our online presence went from zero to hero in no time!",
    },
  ];
  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-24 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Top Icon and Heading */}
        <div className="flex flex-col items-center space-y-4 mb-16 text-center">
        <div className="flex justify-center bg-[#F5F7F9] rounded-full w-fit pr-4 lg:justify-start items-center gap-2 mb-2">
            <div className="size-[32px]   rounded-full flex items-center justify-center p-[9px]"
            style={{
                background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
            }}
            >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.2112 7.81994L12.5112 12.2799C12.2012 12.4599 11.8112 12.4599 11.4912 12.2799L3.79119 7.81994C3.24119 7.49994 3.10119 6.74994 3.52119 6.27994C3.81119 5.94994 4.14119 5.67994 4.49119 5.48994L9.91119 2.48994C11.0712 1.83994 12.9512 1.83994 14.1112 2.48994L19.5312 5.48994C19.8812 5.67994 20.2112 5.95994 20.5012 6.27994C20.9012 6.74994 20.7612 7.49994 20.2112 7.81994Z" fill="white"/>
  <path d="M11.431 14.14V20.96C11.431 21.72 10.661 22.22 9.98096 21.89C7.92096 20.88 4.45096 18.99 4.45096 18.99C3.23096 18.3 2.23096 16.56 2.23096 15.13V9.97C2.23096 9.18 3.06096 8.68 3.74096 9.07L10.931 13.24C11.231 13.43 11.431 13.77 11.431 14.14Z" fill="white"/>
  <path d="M12.5708 14.14V20.96C12.5708 21.72 13.3408 22.22 14.0208 21.89C16.0808 20.88 19.5508 18.99 19.5508 18.99C20.7708 18.3 21.7708 16.56 21.7708 15.13V9.97C21.7708 9.18 20.9408 8.68 20.2608 9.07L13.0708 13.24C12.7708 13.43 12.5708 13.77 12.5708 14.14Z" fill="white"/>
</svg>
            </div>
            <span className="section-tag">Services</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl"
          >
            Services designed to help
            <br />
            your product shine brighter
          </motion.h2>
        </div>



        {/* Main Content */}
        <div className="flex md:flex-row flex-col gap-10 lg:gap-20">
          {/* Left Sidebar */}
          <div className="w-[400px] hidden lg:flex  flex-start flex-col sticky top-32 self-start  h-fit">
            {servicesData.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => handleSidebarClick(index)}
                className={`flex items-center justify-start text-nowrap  py-1 transition-all duration-300  ${
                  activeIndex !== index
                    ? "services-sidebar-default"
                    : "services-sidebar-active"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {activeIndex === index && (
                  <motion.svg
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M12.773 9.55759L7.14797 15.1826C7.0693 15.2613 6.96903 15.315 6.85986 15.3367C6.75069 15.3585 6.63752 15.3473 6.53468 15.3047C6.43184 15.2621 6.34396 15.1899 6.28216 15.0974C6.22036 15.0048 6.18741 14.8959 6.1875 14.7846V3.53462C6.18741 3.42331 6.22036 3.31447 6.28216 3.22188C6.34396 3.1293 6.43184 3.05713 6.53468 3.01452C6.63752 2.97191 6.75069 2.96077 6.85986 2.98251C6.96903 3.00425 7.0693 3.0579 7.14797 3.13665L12.773 8.76165C12.8253 8.81389 12.8668 8.87593 12.8951 8.94422C12.9234 9.01251 12.9379 9.0857 12.9379 9.15962C12.9379 9.23354 12.9234 9.30674 12.8951 9.37503C12.8668 9.44331 12.8253 9.50535 12.773 9.55759Z"
                      fill="#667DE7"
                    />
                  </motion.svg>
                )}
                {service.title}
              </motion.button>
            ))}
          </div>
          {/* Right Content */}
          <div className="w-full  space-y-12">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  servicesRef.current[index] = el;
                }}
                className="bg-[#F5F7F9]   p-2 rounded-[34px]  w-full"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="p-6 md:p-8 space-y-6">
                  <h3 className="services-heading">{service.title}</h3>
                  <p className="services-desc">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full services-tag border-[1.5px] border-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        viewport={{ once: true }}
                      >
                        {service.icon[i] && (
                          <Image
                          width={24}
                          height={24}
                            src={service.icon[i]}
                            alt="Icon"
                            className="w-4 h-4 mr-2"
                          />

                        )}
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <motion.div
                  className={`
                    p-6 flex rounded-4xl items-center justify-between  group cursor-pointer transition-all duration-300
                    ${
                      expandedIndex === index
                        ? "sticky top-20 z-20 shadow-xl"
                        : ""
                    }
                  `}
                  style={{
                    backgroundColor: expandedIndex === index ? "#000" : "#fff",
                  }}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  transition={{ backgroundColor: { duration: 0.3 } }}
                >
                  <p className={`services-details transition-all duration-300 ${expandedIndex === index ? "bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]" : "text-black"}`}>
                    View Details
                  </p>
                  <div
                    className={`
                      size-10 flex items-center justify-center rounded-xl transition-all duration-300
                      ${expandedIndex === index ? "bg-black" : "group-hover:bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]"}
                    `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`size-8 transition-all duration-300 ${expandedIndex === index ? "rotate-45 text-[#7988E7]" : ""}`}
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                    >
                      <path
                        d="M5.63245 12.0003C5.56675 12.0003 5.5017 11.9873 5.441 11.9622C5.3803 11.9371 5.32515 11.9002 5.2787 11.8538C5.23224 11.8073 5.19539 11.7521 5.17025 11.6914C5.14511 11.6308 5.13217 11.5657 5.13217 11.5C5.13217 11.4343 5.14511 11.3692 5.17025 11.3086C5.19539 11.2479 5.23224 11.1927 5.2787 11.1462C5.32515 11.0998 5.3803 11.0629 5.441 11.0378C5.5017 11.0127 5.56675 10.9997 5.63245 10.9997L11.4966 11.0002L11.4961 5.13604C11.4961 5.00336 11.5488 4.87611 11.6427 4.78229C11.7365 4.68847 11.8637 4.63576 11.9964 4.63576C12.1291 4.63576 12.2563 4.68847 12.3502 4.78229C12.444 4.87611 12.4967 5.00336 12.4967 5.13604L12.4962 11.0002L18.3604 10.9997C18.4931 10.9997 18.6203 11.0524 18.7141 11.1463C18.8079 11.2401 18.8606 11.3673 18.8606 11.5C18.8606 11.6327 18.8079 11.7599 18.7141 11.8537C18.6203 11.9476 18.4931 12.0003 18.3604 12.0003L12.4962 11.9998L12.4967 17.864C12.4967 17.9966 12.444 18.1239 12.3502 18.2177C12.2563 18.3115 12.1291 18.3642 11.9964 18.3642C11.8637 18.3642 11.7365 18.3115 11.6427 18.2177C11.5488 18.1239 11.4961 17.9966 11.4961 17.864L11.4966 11.9998L5.63245 12.0003Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </motion.div>
                {expandedIndex === index && (
                  <div className="p-6 pt-0 space-y-4">
                    <Image
                      src={service.image}
                      alt="service image"
                      width={200}
                      height={200}
                      className="rounded-4xl mt-5 w-full"
                    />

                    <div
                      className="flex flex-wrap gap-2"
                      dangerouslySetInnerHTML={{ __html: service.usecase }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* implement the ticker */}
      <div className="relative w-full mt-20 mb-10 overflow-hidden">
        {/* Left Gradient */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{
            background: "linear-gradient(to right, #fff 10%, transparent)",
          }}
        />
        {/* Right Gradient */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{
            background: "linear-gradient(to left, #fff 10%, transparent)",
          }}
        />

        <motion.div
          className="flex items-center gap-8 min-w-max"
          style={{ width: "fit-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...testimonialData, ...testimonialData].map(
            (testimonial, index) => (
              <div
                key={index}
                className="flex items-center gap-2 pr-4 py-1 rounded-2xl bg-[#f5f7f9] min-w-max"
              >
                <Image
                  src={testimonial.profile}
                  alt="Profile"
                  width={64} // or another value matching your "size-16"
                  height={64}
                  className="size-16 rounded-2xl"
                />

                <p className="testimonial-text">{testimonial.testimonial}</p>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
