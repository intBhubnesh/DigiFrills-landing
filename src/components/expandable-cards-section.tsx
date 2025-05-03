"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "@/hooks/use-media-query";

type CardData = {
  number: string;
  title: string;
  description: string;
};

const cardData: CardData[] = [
  {
    number: "1",
    title: "Discover & Strategize",
    description:
      "We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a clear roadmap tailored to your needs.",
  },
  {
    number: "2",
    title: "Build & Launch",
    description:
      "Our creative team gets to work, blending innovation with strategy to design visuals, content, and assets that resonate with your brand. Every detail is refined to perfection.",
  },
  {
    number: "3",
    title: "Implement & Deploy",
    description:
      "We bring your vision to life with precision and care. Our development team ensures everything works flawlessly across all platforms and devices.",
  },
  {
    number: "4",
    title: "Refine & Grow",
    description:
      "We don't stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your brand keeps evolving and thriving in the digital landscape.",
  },
];

export default function ExpandableCardsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleCardClick = (index: number) => {
    if (activeCard === index) return;
    setActiveCard(index);
  };

  const handleHoverEnter = (index: number) => {
    if (isMobile || activeCard === index) return;
    gsap.to(numberRefs.current[index], {
      x: "-15%",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleHoverLeave = (index: number) => {
    if (isMobile || activeCard === index) return;
    gsap.to(numberRefs.current[index], {
      x: "35%",
      opacity: 0.8,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (isMobile) {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const isActive = activeCard === index;
        const baseSpacing = 60;

        gsap.to(card, {
          top: `${index * baseSpacing}px`,
          height: isActive ? "auto" : "60px",
          width: "100%",
          zIndex: isActive ? 50 : 40 - Math.abs(index - (activeCard || 0)),
          backgroundColor: isActive ? "#000" : "#f7f7f7",
          duration: 0.4,
          ease: "power2.out",
        });
      });
    } else {
      const totalWidth = 100;
      const cardWidth = 8;
      const activeCardWidth = 92;
      const totalWidthNeeded =
        (cardData.length - 1) * cardWidth + activeCardWidth;
      const scaleFactor = totalWidth / totalWidthNeeded;

      let position = 0;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const isActive = activeCard === index;
        const width = isActive
          ? activeCardWidth * scaleFactor
          : cardWidth * scaleFactor;

        gsap.to(card, {
          left: `${position}%`,
          width: `${width}%`,
          height: "500px",
          backgroundColor: isActive ? "#000" : "#f7f7f7",
          zIndex: isActive ? 50 : 40,
          duration: 0.4,
          ease: "power2.out",
        });

        position += width;

        if (!isActive) {
          gsap.set(numberRefs.current[index], {
            x: "35%",
            opacity: 0.8,
          });
        }
      });
    }
  }, [activeCard, isMobile]);

  return (
    <section className="w-full min-h-screen mx-auto px-4 py-16 bg-gray-50 overflow-hidden relative z-10">
      <div className="relative mx-auto h-[600px] max-w-6xl">
        {cardData.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleHoverEnter(index)}
              onMouseLeave={() => handleHoverLeave(index)}
              className={`absolute rounded-2xl cursor-pointer overflow-hidden shadow-lg transition-all duration-400 ${
                isActive ? "bg-black text-white" : "bg-[#f7f7f7] text-black"
              }`}
              style={{
                height: isMobile ? (isActive ? "auto" : "60px") : "500px",
                top: isMobile ? `${index * 60}px` : "50%",
                transform: isMobile ? "" : "translateY(-50%)",
                minHeight: isMobile && isActive ? "200px" : "",
                maxHeight: isMobile && isActive ? "70vh" : "",
                padding: "20px 24px",
              }}
            >
              {!isMobile && (
                <div className="flex flex-col h-full">
                  <div
                    className={`${
                      isActive ? "flex items-start" : ""
                    } overflow-visible`}
                  >
                    <span
                      ref={(el) => {
                        numberRefs.current[index] = el;
                      }}
                      className={`text-8xl font-bold leading-none ${
                        isActive ? "text-white" : "text-[#0260EB]"
                      }`}
                      style={{
                        position: "relative",
                        display: "inline-block",
                        left: "-8px",
                      }}
                    >
                      {card.number}
                    </span>
                    {isActive && (
                      <h3 className="ml-6 text-2xl font-bold mt-4">
                        {card.title}
                      </h3>
                    )}
                  </div>
                  {isActive && (
                    <div className="mt-auto mb-4">
                      <p className="text-lg">{card.description}</p>
                    </div>
                  )}
                </div>
              )}

              {isMobile && (
                <div className="flex flex-col">
                  <span
                    className={`text-5xl font-bold ${
                      !isActive ? "text-[#0260EB]" : "text-white"
                    }`}
                  >
                    {card.number}
                  </span>
                  {isActive && (
                    <>
                      <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
                      <p className="mt-4 text-base">{card.description}</p>
                    </>
                  )}
                  {!isActive && index > activeCard! && (
                    <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
