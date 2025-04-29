"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  type: "default" | "special";
  image: string;
  tags: string[];
  title: string;
  logo?: string;
  hasCarousel?: boolean;
  carouselImages?: string[];
  youtubeUrl?: string;
  siteUrl?: string;
  details?: {
    challenge?: string;
    features?: string[];
    achievements?: string[];
  };
}

// Portfolio data defined outside component to avoid recreation on every render
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: "default",
    image:
      "https://framerusercontent.com/images/g8k4INKeyIieB7Th2DTYOefwDy4.png?scale-down-to=1024",
    logo: "https://framerusercontent.com/images/Ia3ikiLVEBJUr08Ep5M8UXgfaA.svg?scale-down-to=1024",
    tags: ["BRANDING", "STRATEGY", "PACKAGING", "DIGITAL PRESENCE"],
    title: "Frostify — Redefining Ice Cream Cool",
    hasCarousel: true,
    carouselImages: [
      "https://framerusercontent.com/images/g8k4INKeyIieB7Th2DTYOefwDy4.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
    ],
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      challenge:
        "Frostify had the magic of handcrafted, mouthwatering ice creams but lacked a strong visual identity to stand out in the crowded freezer aisle...",
      features: [
        "Brand Identity Design: We created a fresh and playful identity for Frostify that screams 'premium yet fun.' From a vibrant color palette inspired by their delicious flavors to a quirky ice-cream-cone mascot, the brand feels instantly lovable and unforgettable",
        "Packaging Design:Designed packaging that pops on the shelves. Frostify's new tubs became Instagrammable stars, with pastel tones, cheeky taglines like 'Scoop Dreams,' and a design that tells a story with every bite",
        "Social Media Strategy:Launched a campaign titled 'Chill Responsibly', focusing on Frostify's creamy indulgence. This included playful Reels, flavor reveals, and interactive polls, which skyrocketed engagement by 75% in just three months.",
        "Storefront & Digital Presence: Revamped Frostify's website and introduced a seamless online ordering system. Added a 'Flavor Finder' quiz to recommend the perfect flavor based on mood (because, why not?)",
      ],
      achievements: [
        "300% increase in in-store sales",
        "50% growth in online sales",
        "10K new Instagram followers",
        "40% customer retention via 'Scoop Squad' program",
      ],
    },
  },
  {
    id: 2,
    type: "special",
    image:
      "https://framerusercontent.com/images/chvWbQPAfXTanooWyhT8zamduq0.jpg?scale-down-to=2048",
    logo: "https://framerusercontent.com/images/mGAxAGDBjt0JHg8MI0F9P9FkW0g.svg?scale-down-to=1024",
    tags: [
      "DISCOVER & RESEARCH",
      "WEB DESIGN",
      "CONTENT STRATEGY",
      "SEO & MARKETING INTEGRATION",
      "RE-BRANDING",
    ],
    title: "CritterShield-Pest Solutions Re-branding",
    siteUrl: "#",
    details: {
      challenge:
        "PixelPlay needed to transform mundane productivity tasks into engaging gaming experiences while maintaining core functionality...",
      features: [
        "Gamified task completion system",
        "Customizable avatar progression",
        "Real-time collaboration features",
        "Cross-platform synchronization",
      ],
    },
  },
  {
    id: 3,
    type: "special",
    image:
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
    logo: "https://framerusercontent.com/images/3Y1x3Iz9CnzoCeLjfRflZMOiF0.svg?scale-down-to=1024",
    tags: [
      "UI Design",
      "Framer Development",
      "Content Strategy",
      "SEO & Performance",
    ],
    title:
      "How we revamped an Agency's digital presence to drive 40% more client engagement",
    siteUrl: "#",
    hasCarousel: true,
    carouselImages: [
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
    ],
    details: {
      challenge:
        "GreenTech's platform needed to communicate complex environmental data in an accessible way while maintaining visual appeal...",
      features: [
        "Interactive carbon footprint calculator",
        "Real-time sustainability metrics dashboard",
        "Educational resource library",
        "Community engagement features",
      ],
      achievements: [
        "Increased user engagement by 65%",
        "Reduced bounce rate by 40%",
        "Won 2023 Green Web Award",
      ],
    },
  },
];

const PortfolioSection = () => {
  // State to track which card is expanded (null = none)
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // --- Carousel State for First Card ---
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // --- Carousel State for Third Card ---
  const [carouselIndex3, setCarouselIndex3] = useState(1);
  const [carouselImages3, setCarouselImages3] = useState<string[]>([]);
  const [isTransitioning3, setIsTransitioning3] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(true);

  // Helper: clone first and last images for infinite loop effect
  // Initialize cloned images once on mount
  useEffect(() => {
    const getClonedImages = (images: string[]): string[] => {
      if (!images || images.length === 0) return [];
      const lastItem = images[images.length - 1];
      const firstItem = images[0];
      return [lastItem, ...images, firstItem];
    };

    if (portfolioItems[0].carouselImages) {
      setCarouselImages(getClonedImages(portfolioItems[0].carouselImages));
      setCarouselIndex(1);
    }
    if (portfolioItems[2].carouselImages) {
      setCarouselImages3(getClonedImages(portfolioItems[2].carouselImages));
      setCarouselIndex3(1);
    }
  }, []); // Empty dependency array (runs once on mount)

  // --- Corrected Slide Functions ---
  const nextSlide = useCallback(() => {
    if (carouselIndex >= carouselImages.length - 1) return;
    setIsTransitioning(true);
    setCarouselIndex((prev) => prev + 1);
  }, [carouselIndex, carouselImages.length]);

  const prevSlide = useCallback(() => {
    if (carouselIndex <= 0) return;
    setIsTransitioning(true);
    setCarouselIndex((prev) => prev - 1);
  }, [carouselIndex]);

  const nextSlide3 = useCallback(() => {
    if (carouselIndex3 >= carouselImages3.length - 1) return;
    setIsTransitioning3(true);
    setCarouselIndex3((prev) => prev + 1);
  }, [carouselIndex3, carouselImages3.length]);

  const prevSlide3 = useCallback(() => {
    if (carouselIndex3 <= 0) return;
    setIsTransitioning3(true);
    setCarouselIndex3((prev) => prev - 1);
  }, [carouselIndex3]);

  // Autoplay effects
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && expandedCard === 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, expandedCard, nextSlide]);

  useEffect(() => {
    let interval3: NodeJS.Timeout;
    if (isPlaying3 && expandedCard === 3) {
      interval3 = setInterval(() => {
        nextSlide3();
      }, 3000);
    }
    return () => clearInterval(interval3);
  }, [isPlaying3, expandedCard, nextSlide3]);

  // Toggle expand/collapse details
  const toggleExpand = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
      setCarouselIndex(1);
      setCarouselIndex3(1);
    }
  };

  // Handle transition end for first card carousel (jump instantly if on clone)
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (carouselIndex === 0) {
      setCarouselIndex(carouselImages.length - 2);
    } else if (carouselIndex === carouselImages.length - 1) {
      setCarouselIndex(1);
    }
  };

  // Handle transition end for third card carousel
  const handleTransitionEnd3 = () => {
    setIsTransitioning3(false);
    if (carouselIndex3 === 0) {
      setCarouselIndex3(carouselImages3.length - 2);
    } else if (carouselIndex3 === carouselImages3.length - 1) {
      setCarouselIndex3(1);
    }
  };

  // Carousel styles with or without transition
  const carouselStyle = {
    transform: `translateX(-${carouselIndex * 100}%)`,
    transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
  };

  const carouselStyle3 = {
    transform: `translateX(-${carouselIndex3 * 100}%)`,
    transition: isTransitioning3 ? "transform 0.5s ease-in-out" : "none",
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);
  const handleMouseEnter3 = () => setIsPlaying3(false);
  const handleMouseLeave3 = () => setIsPlaying3(true);

  return (
    <section className="w-full flex flex-col items-center mx-auto py-[100px] px-[40px]">
      <div className="max-w-[1200px] w-full flex flex-col gap-[50px] items-center mx-auto">
        {/* Header */}
        <div className="max-w-[800px] w-full flex flex-col items-center justify-center px-[20px] gap-[5px]">
          <div className="w-[132.79px] h-[33px] rounded-[25px] bg-[#f5f7f9] flex justify-between items-center pt-[2px] pb-[2px] pr-[10px] pl-[2px]">
            <div className="size-[32px] bg-black rounded-full p-[9px] flex items-center justify-center">
              <Image
                src="/portfolio-icon.svg"
                alt="section icon"
                width={64}
                height={64}
              />
            </div>
            <div className="text-[15.1px] font-medium leading-[22.5px] tracking-[-0.45px] text-black whitespace-nowrap">
              Our Portfolio
            </div>
          </div>

          <div className="max-w-[760px] w-full">
            <h2 className="text-[32px] md:text-[47.8px] md:leading-[53px] leading-[40px] tracking-[-2.4px] font-semibold text-black font-inter text-center text-balance">
              Explore the projects where we played, experimented, and built
              something amazing.
            </h2>
          </div>
        </div>

        {/* Portfolio Cards */}
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="relative max-w-[700px] w-full flex flex-col items-center mx-auto overflow-hidden gap-[5px] rounded-2xl md:rounded-[30px]"
          >
            {/* Logo */}
            {item.logo && (
              <div className="absolute top-[499px] left-[25px] w-[109px] px-[14px] py-[7px] rounded-[14px] bg-[#f5f7f9] flex items-center justify-center">
                <div className="w-[81px] h-[27px] flex items-center justify-center">
                  <Image
                    className="object-fit"
                    src={item.logo}
                    alt={`${item.title} logo`}
                    width={81}
                    height={14.73}
                  />
                </div>
              </div>
            )}

            {/* Card Image */}
            <div className="max-w-[700px] w-full h-[528px]">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover rounded-t-2xl rounded-b-2xl md:rounded-t-[30px] md:rounded-b-[30px]"
                width={700}
                height={528}
              />
            </div>

            {/* Card Content */}
            <div className="w-full bg-[#f5f7f9] p-[30px] rounded-b-2xl rounded-t-2xl md:rounded-b-[30px] md:rounded-t-[30px] flex flex-col gap-[23px]">
              {/* Tags */}
              <div className="flex flex-wrap gap-[4px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold font-inter px-[10px] py-[5px] rounded-full bg-white text-black leading-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-[24px] md:text-[24px] md:leading-[32px] leading-[28px] tracking-[-0.96px] font-semibold text-black font-inter text-balance">
                {item.title}
              </h3>

              {/* Action Buttons */}
              {item.id === 2 ? (
                // Card 2: Only View Site button
                <a
                  href={item.siteUrl}
                  className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center bg-[#f15533] rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                >
                  <span className="text-[17px] font-medium leading-[22.5px] tracking-[-0.45px] text-white font-inter">
                    View Site
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="24"
                    height="24"
                    fill="white"
                  >
                    <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Z" />
                  </svg>
                </a>
              ) : item.id === 3 ? (
                // Card 3: Both View Site and Expand Details buttons
                <div className="flex flex-col gap-2">
                  <a
                    href={item.siteUrl}
                    className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center bg-[#f15533] rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                  >
                    <span className="text-[17px] font-medium leading-[22.5px] tracking-[-0.45px] text-white font-inter">
                      View Site
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="24"
                      height="24"
                      fill="white"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Z" />
                    </svg>
                  </a>
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center bg-[#f15533] rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                  >
                    <span className="text-[17px] font-medium leading-[22.5px] tracking-[-0.45px] text-white font-inter">
                      {expandedCard === item.id
                        ? "Collapse Details"
                        : "Expand Details"}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="24"
                      height="24"
                      fill="white"
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
                    </svg>
                  </div>
                </div>
              ) : (
                // Other cards: Only Expand Details button
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center bg-[#f15533] rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                >
                  <span className="text-[17px] font-medium leading-[22.5px] tracking-[-0.45px] text-white font-inter">
                    {expandedCard === item.id
                      ? "Collapse Details"
                      : "Expand Details"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="24"
                    height="24"
                    fill="white"
                  >
                    <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
                  </svg>
                </div>
              )}

              {/* Expanded Details & Carousel */}
              <AnimatePresence>
                {expandedCard === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-col gap-[30px] mt-[20px]"
                  >
                    {/* Carousel for First Card */}
                    {item.hasCarousel && item.id === 1 && (
                      <div
                        className="relative w-full h-[480px] bg-gray-200 rounded-xl overflow-hidden"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div
                          className="flex h-full"
                          style={carouselStyle}
                          onTransitionEnd={handleTransitionEnd}
                        >
                          {carouselImages.map((image, index) => (
                            <motion.div
                              key={index}
                              className="min-w-full h-full relative"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src={image}
                                alt={`Carousel item ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                          onClick={prevSlide}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm p-1.5 rounded-full hover:bg-[rgba(0,0,0,0.3)] transition-colors"
                        >
                          <Image
                            width="40"
                            height="40"
                            src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
                            alt="Previous"
                            className="rotate-180"
                          />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm p-1.5 rounded-full hover:bg-[rgba(0,0,0,0.3)] transition-colors"
                        >
                          <Image
                            width="40"
                            height="40"
                            src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
                            alt="Next"
                          />
                        </button>
                      </div>
                    )}

                    {/* YouTube Video (only for first card) */}
                    {item.youtubeUrl && item.id === 1 && (
                      <div className="w-full h-[360px] rounded-xl overflow-hidden">
                        <iframe
                          className="w-full h-[360px] rounded-xl"
                          src={item.youtubeUrl}
                          title={`${item.title} Video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                    {/* Carousel for Third Card */}
                    {item.hasCarousel && item.id === 3 && (
                      <div
                        className="relative w-full h-[480px] bg-gray-200 rounded-xl overflow-hidden"
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                      >
                        <div
                          className="flex h-full"
                          style={carouselStyle3}
                          onTransitionEnd={handleTransitionEnd3}
                        >
                          {carouselImages3.map((image, index) => (
                            <motion.div
                              key={index}
                              className="min-w-full h-full relative"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src={image}
                                className="w-full h-full object-cover"
                                alt={`Carousel item ${index + 1}`}
                                width={400}
                                height={300}
                              />
                            </motion.div>
                          ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                          onClick={prevSlide3}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm p-1.5 rounded-full hover:bg-[rgba(0,0,0,0.3)] transition-colors"
                        >
                          <Image
                            width="40"
                            height="40"
                            src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
                            alt="Previous"
                            className="rotate-180"
                          />
                        </button>
                        <button
                          onClick={nextSlide3}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm p-1.5 rounded-full hover:bg-[rgba(0,0,0,0.3)] transition-colors"
                        >
                          <Image
                            width="40"
                            height="40"
                            src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
                            alt="Next"
                          />
                        </button>
                      </div>
                    )}

                    {/* Details Content */}
                    {item.details && (
                      <div className="text-[16px] text-gray-800 space-y-4">
                        {item.details.challenge && (
                          <div>
                            <h4 className="text-[20px] font-bold text-black">
                              The Challenge
                            </h4>
                            <p>{item.details.challenge}</p>
                          </div>
                        )}

                        {item.details.features && (
                          <div>
                            <h4 className="text-[20px] font-bold text-black">
                              {item.id === 1 ? "What We Did" : "Key Features"}
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {item.details.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.details.achievements && (
                          <div>
                            <h4 className="text-[20px] font-bold text-black">
                              Achievements
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {item.details.achievements.map(
                                (achievement, idx) => (
                                  <li key={idx}>{achievement}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
