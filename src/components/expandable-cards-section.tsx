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
      title: "Discover & Understand",
      description:
        "We start by exploring your business needs and goals. Through research and collaboration, we uncover key insights to guide the project’s direction.",
    },
    {
      number: "2",
      title: "Design & Plan",
      description:
        "We transform insights into actionable plans. Our team crafts clear strategies and designs tailored to your objectives and user expectations.",
    },
    {
      number: "3",
      title: "Develop & Implement",
      description:
        "We build and integrate solutions with precision, using the latest technology to ensure seamless functionality and a smooth user experience.",
    },
    {
      number: "4",
      title: "Deliver & Support",
      description:
        "We launch your solution and provide ongoing support. Our team ensures everything runs smoothly and adapts as your business grows.",
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
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto"
    });
  };

  const handleHoverLeave = (index: number) => {
    if (isMobile || activeCard === index) return;
    gsap.to(numberRefs.current[index], {
      x: "35%",
      opacity: 0.8,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto"
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
          background: isActive ? "linear-gradient(135deg, #444 -31.5%, #000 100%)" : "#f7f7f7",
          duration: 0.6,
          ease: "power3.inOut",
          overwrite: "auto"
        });
      });
    } else {
      const totalWidth = 90;
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
          duration: 0.6,
          ease: "power3.inOut",
          overwrite: "auto"
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
              className={`absolute rounded-2xl cursor-pointer overflow-hidden shadow-lg transition-all duration-700 ease-in-out ${
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
                        isActive ? "text-white" : "bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]"
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
                  <div className={`mt-auto mb-4 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    <p className="text-lg">{card.description}</p>
                  </div>
                </div>
              )}

              {isMobile && (
                <div className="flex flex-col">
                  <span
                    className={`text-5xl font-bold ${
                      !isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]" : "text-white"
                    }`}
                  >
                    {card.number}
                  </span>
                  <div className={`transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
                    <p className="mt-4 text-base">{card.description}</p>
                  </div>
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
