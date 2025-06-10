"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

// Mock useMediaQuery hook for this example
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

type CardData = {
  number: string;
  title: string;
  description: string;
  image: string;
};

const cardData: CardData[] = [
  {
    number: "1",
    title: "Discover & Understand",
    description:
      "We start by exploring your business needs and goals. Through research and collaboration, we uncover key insights to guide the project's direction.",
    image:
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749489023/welding_helmet_protection_safety_gear_industrial_work_Vector_illustration-removebg-preview_hytart.png",
  },
  {
    number: "2",
    title: "Design & Plan",
    description:
      "We transform insights into actionable plans. Our team crafts clear strategies and designs tailored to your objectives and user expectations.",
    image:
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749489022/ruler_blue_measuring_right_angle_drafting-removebg-preview_qnapzf.png",
  },
  {
    number: "3",
    title: "Develop & Implement",
    description:
      "We build and integrate solutions with precision, using the latest technology to ensure seamless functionality and a smooth user experience.",
    image:
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749489022/robotic_arm_mechanical_hand_technology_blueprint_wireframe__1_-removebg-preview_urcdue.png",
  },
  {
    number: "4",
    title: "Deliver & Support",
    description:
      "We launch your solution and provide ongoing support. Our team ensures everything runs smoothly and adapts as your business grows.",
    image:
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749489022/gear_settings_configuration_technical_support_Vector_illustration-removebg-preview_dr46st.png",
  },
];

// Mobile Component - Completely separate
function MobileCardsSection() {
  return (
    <section className="w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-gray-50">
      {cardData.map((card, index) => (
        <div
          key={`mobile-${index}`}
          className="snap-start w-full h-screen flex flex-col justify-center p-8 bg-[#f7f7f7]"
        >
          <div className="flex flex-col items-start">
            {/* Large Number */}
            <span className="text-9xl font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]">
              {card.number}
            </span>

            {/* Title - smaller than number */}
            <h3 className="text-4xl font-bold mt-2 mb-6 max-w-[20ch]">
              {card.title}
            </h3>

            {/* Description - smallest */}
            <p className="text-lg leading-relaxed text-gray-700 max-w-[45ch]">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

// Desktop Component - Original functionality
function DesktopCardsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const descriptionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleCardClick = (index: number) => {
    if (activeCard === index) return;
    setActiveCard(index);
  };

  const handleHoverEnter = (index: number) => {
    if (activeCard === index) return;
    gsap.to(numberRefs.current[index], {
      x: "-15%",
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleHoverLeave = (index: number) => {
    if (activeCard === index) return;
    gsap.to(numberRefs.current[index], {
      x: "35%",
      opacity: 0.8,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  useEffect(() => {
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
        background: isActive
          ? "linear-gradient(135deg, #444 -31.5%, #000 100%)"
          : "#f7f7f7",
        zIndex: isActive ? 50 : 40,
        duration: 0.6,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      position += width;

      if (!isActive) {
        gsap.set(numberRefs.current[index], {
          x: "35%",
          opacity: 0.8,
        });
      }

      // Animate description text reveal for desktop
      const descContainer = descriptionRefs.current[index];
      if (descContainer) {
        if (isActive) {
          gsap.to(descContainer, {
            width: "100%",
            duration: 0.6,
            ease: "power3.inOut",
            delay: 0.1,
          });
        } else {
          gsap.to(descContainer, {
            width: "0%",
            duration: 0.6,
            ease: "power3.inOut",
          });
        }
      }

      // Animate image reveal for desktop
      const imageContainer = imageRefs.current[index];
      if (imageContainer) {
        if (isActive) {
          gsap.to(imageContainer, {
            opacity: 1,
            scale: 0.85,
            duration: 0.6,
            ease: "power3.inOut",
            delay: 0.2,
          });
        } else {
          gsap.to(imageContainer, {
            opacity: 0,
            scale: 0.5,
            duration: 0.4,
            ease: "power3.inOut",
          });
        }
      }
    });
  }, [activeCard]);

  return (
    <section className="w-full min-h-screen mx-auto px-4 py-16 bg-gray-50 overflow-hidden relative z-10">
      <div className="relative mx-auto h-[600px] max-w-6xl">
        {cardData.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={`desktop-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleHoverEnter(index)}
              onMouseLeave={() => handleHoverLeave(index)}
              className={`absolute rounded-2xl cursor-pointer overflow-hidden shadow-lg transition-all duration-700 ease-in-out ${
                isActive ? "text-white" : "bg-[#f7f7f7] text-black"
              }`}
              style={{
                height: "500px",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "20px 24px",
                background: isActive
                  ? "linear-gradient(135deg, #444 -31.5%, #000 100%)"
                  : "",
              }}
            >
              <div className="flex flex-col h-full">
                {/* Top section - number and title */}
                <div className="flex items-start mb-6">
                  <span
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                    className={`text-8xl font-bold leading-none ${
                      isActive
                        ? "text-white"
                        : "bg-clip-text text-transparent bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3]"
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

                {/* Image container for desktop */}
                {isActive && (
                  <div className="flex items-center justify-center mb-6">
                    <div
                      ref={(el) => {
                        imageRefs.current[index] = el;
                      }}
                      className="w-full max-w-3xl h-60 rounded-lg overflow-hidden shadow-lg opacity-0 relative"
                      style={{ transform: "scale(0.5)" }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                )}

                {/* Bottom section - description */}
                <div className="overflow-hidden">
                  <div
                    ref={(el) => {
                      descriptionRefs.current[index] = el;
                    }}
                    className={`transition-opacity duration-500 ease-in-out overflow-hidden ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      width: isActive ? "100%" : "0%",
                    }}
                  >
                    <p className="text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Main Component
export default function ExpandableCardsSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Render completely different components based on screen size
  return isMobile ? <MobileCardsSection /> : <DesktopCardsSection />;
}
