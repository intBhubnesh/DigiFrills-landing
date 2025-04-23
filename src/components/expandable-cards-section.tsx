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
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  useEffect(() => {
    // Reset all cards to their default state
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.to(card, {
        backgroundColor: activeCard === index ? "#000" : "#f7f7f7",
        color: activeCard === index ? "#fff" : "#000",
        duration: 0.4,
        ease: "power2.out",
      });
    });

    // Animate content visibility
    contentRefs.current.forEach((content, index) => {
      if (!content) return;

      if (activeCard === index) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power2.out" }
        );
      } else {
        gsap.to(content, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });

    // Adjust layout based on active card
    if (!isMobile) {
      const timeline = gsap.timeline();

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        if (activeCard === index) {
          timeline.to(
            card,
            {
              flex: isTablet ? 2 : 3,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0
          );
        } else {
          timeline.to(
            card,
            {
              flex: 1,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0
          );
        }
      });
    }
  }, [activeCard, isMobile, isTablet]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full transition-all duration-500 ease-in-out">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            onClick={() => handleCardClick(index)}
            className={`relative rounded-2xl p-6 md:p-8 cursor-pointer transition-all
                       flex flex-col
                       min-h-[200px] md:min-h-[400px]
                       ${
                         activeCard === index
                           ? "bg-black text-white"
                           : "bg-[#f7f7f7] text-black"
                       }
                       overflow-hidden`}
            style={{
              flex: isMobile
                ? "1 1 auto"
                : activeCard === index
                ? isTablet
                  ? 2
                  : 3
                : 1,
            }}
          >
            <span className="text-6xl md:text-8xl font-bold opacity-80">
              {card.number}
            </span>

            <h3 className="text-xl md:text-2xl font-bold mt-4">{card.title}</h3>

            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className={`mt-4 text-base md:text-lg
                         ${
                           activeCard === index
                             ? "block"
                             : "hidden md:block md:opacity-0"
                         }`}
            >
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
