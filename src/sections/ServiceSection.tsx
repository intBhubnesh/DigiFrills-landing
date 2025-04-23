"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { servicesData } from "@/data/services";

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const servicesRef = useRef<Array<HTMLDivElement | null>>([])

  // Initialize refs array
  useEffect(() => {
    servicesRef.current = servicesRef.current.slice(0, servicesData.length)
  }, [])

  // Handle scroll and update active index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      servicesRef.current.forEach((ref, index) => {
        if (!ref) return

        const offsetTop = ref.getBoundingClientRect().top + window.scrollY
        const offsetBottom = offsetTop + ref.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveIndex(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle click on sidebar item
  const handleSidebarClick = (index: number) => {
    setActiveIndex(index)
    const targetRef = servicesRef.current[index]

    if (targetRef) {
      const offsetTop = targetRef.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: offsetTop - window.innerHeight / 3,
        behavior: "smooth",
      })
    }
  }

  const testimonialData = [
    {
        profile : 'https://framerusercontent.com/images/69AfOAuHYwAOuoUih5OD0cURM.jpg',
        testimonial : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },    {
        profile : 'https://framerusercontent.com/images/XiMyyNx8unIwYIKgfBrWE1AinY.jpg?scale-down-to=512',
        testimonial : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },    {
        profile : 'https://framerusercontent.com/images/cnLntcGAx8hue6HcvWIuDTGJERQ.jpg',
        testimonial : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },    {
        profile : 'https://framerusercontent.com/images/x12Fv3VOaCuprlQXViBbGALOKA4.jpg',
        testimonial : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },    {
        profile : 'https://framerusercontent.com/images/XiMyyNx8unIwYIKgfBrWE1AinY.jpg?scale-down-to=512',
        testimonial : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]
  return (
    <section id="services" ref={sectionRef} className="bg-white py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Icon and Heading */}
        <div className="flex flex-col items-center space-y-4 mb-16 text-center">
          <div className="flex items-center gap-2 pr-4 py-1 rounded-full bg-[#f5f7f9]">
            <div className="size-[32px] bg-gray-900 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="12" height="12" fill="white">
                <path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Our services</span>
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
            your brand shine brighter.
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
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              >
                { activeIndex === index
                    && (
                        <motion.svg
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                        xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path d="M12.773 9.55759L7.14797 15.1826C7.0693 15.2613 6.96903 15.315 6.85986 15.3367C6.75069 15.3585 6.63752 15.3473 6.53468 15.3047C6.43184 15.2621 6.34396 15.1899 6.28216 15.0974C6.22036 15.0048 6.18741 14.8959 6.1875 14.7846V3.53462C6.18741 3.42331 6.22036 3.31447 6.28216 3.22188C6.34396 3.1293 6.43184 3.05713 6.53468 3.01452C6.63752 2.97191 6.75069 2.96077 6.85986 2.98251C6.96903 3.00425 7.0693 3.0579 7.14797 3.13665L12.773 8.76165C12.8253 8.81389 12.8668 8.87593 12.8951 8.94422C12.9234 9.01251 12.9379 9.0857 12.9379 9.15962C12.9379 9.23354 12.9234 9.30674 12.8951 9.37503C12.8668 9.44331 12.8253 9.50535 12.773 9.55759Z" fill="#F15533"/>
</motion.svg>
                    )
                }
                {service.title}
              </motion.button>
            ))}
          </div>
          {/* Right Content */}
          <div className="w-full  space-y-12">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                ref={(el) => (servicesRef.current[index] = el)}
                className="bg-[#F5F7F9]   p-2 rounded-[34px]  w-full"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="p-6 md:p-8 space-y-6">
                  <h3 className="services-heading">{service.title}</h3>
                  <p className="services-desc">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4"    >
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
                          <img
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
                    ${expandedIndex === index ? "sticky top-20 z-20 shadow-xl" : ""}
                  `}
                  style={{
                    backgroundColor: expandedIndex === index ? "#000" : "#fff",
                  }}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  transition={{ backgroundColor: { duration: 0.3 } }}
                >
                  <p className={`services-details transition-all duration-300 ${expandedIndex === index ? "text-[#0260EB]/80" : "text-black"}`}>
                    View Details
                  </p>
                  <div
                    className={`
                      size-10 flex items-center justify-center rounded-xl transition-all duration-300
                      ${expandedIndex === index ? "bg-black" : "group-hover:bg-[#0260EB]"}
                    `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`size-8 transition-all duration-300 ${expandedIndex === index ? "rotate-45 text-[#0260EB]" : ""}`}
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                    >
                      <path d="M5.63245 12.0003C5.56675 12.0003 5.5017 11.9873 5.441 11.9622C5.3803 11.9371 5.32515 11.9002 5.2787 11.8538C5.23224 11.8073 5.19539 11.7521 5.17025 11.6914C5.14511 11.6308 5.13217 11.5657 5.13217 11.5C5.13217 11.4343 5.14511 11.3692 5.17025 11.3086C5.19539 11.2479 5.23224 11.1927 5.2787 11.1462C5.32515 11.0998 5.3803 11.0629 5.441 11.0378C5.5017 11.0127 5.56675 10.9997 5.63245 10.9997L11.4966 11.0002L11.4961 5.13604C11.4961 5.00336 11.5488 4.87611 11.6427 4.78229C11.7365 4.68847 11.8637 4.63576 11.9964 4.63576C12.1291 4.63576 12.2563 4.68847 12.3502 4.78229C12.444 4.87611 12.4967 5.00336 12.4967 5.13604L12.4962 11.0002L18.3604 10.9997C18.4931 10.9997 18.6203 11.0524 18.7141 11.1463C18.8079 11.2401 18.8606 11.3673 18.8606 11.5C18.8606 11.6327 18.8079 11.7599 18.7141 11.8537C18.6203 11.9476 18.4931 12.0003 18.3604 12.0003L12.4962 11.9998L12.4967 17.864C12.4967 17.9966 12.444 18.1239 12.3502 18.2177C12.2563 18.3115 12.1291 18.3642 11.9964 18.3642C11.8637 18.3642 11.7365 18.3115 11.6427 18.2177C11.5488 18.1239 11.4961 17.9966 11.4961 17.864L11.4966 11.9998L5.63245 12.0003Z" fill="currentColor"/>
                    </svg>
                  </div>
                </motion.div>
                {expandedIndex === index && (
                  <div className="p-6 pt-0 space-y-4">
                    <img src={service.image} alt="service image" className="rounded-4xl mt-5" />
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
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
             style={{background: "linear-gradient(to right, #fff 10%, transparent)"}} />
        {/* Right Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
             style={{background: "linear-gradient(to left, #fff 10%, transparent)"}} />

        <motion.div
          className="flex items-center gap-8 min-w-max"
          style={{ width: "fit-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }}
        >
          {[...testimonialData, ...testimonialData].map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center gap-2 pr-4 py-1 rounded-2xl bg-[#f5f7f9] min-w-max"
            >
              <img src={testimonial.profile} alt="Profile" className="size-16 rounded-2xl " />
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
