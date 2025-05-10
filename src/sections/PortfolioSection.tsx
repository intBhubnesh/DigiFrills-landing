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
          "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746848564/Frame_1321315911_xqv8qj.png",
        logo: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746849481/logo1active_zlpqgm.png",
        tags: ["AGENCY", "PRODUCT DEVELOPMENT", "COLLABORATION", "STRATEGY"],
        title: "Planica - Reduced Time-to-Market by 40% to Accelerate Product Success",
        hasCarousel: true,
        carouselImages: [
          "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746854632/User_Details_mdb0t8.png",
          "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746854630/channel_view_default_equwij.png",
          "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746854632/Dashboard_Progress_euj0sy.png"
        ],
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        details: {
          challenge:
            "Planica approached us with a vision to revolutionize event planning and team coordination but needed expert guidance to transform their ideas from documentation into a polished, market-ready product quickly and efficiently.",
          features: [
            "Strategic Product Consulting: We collaborated closely with Planica’s team to clarify their vision, define priorities, and establish a clear roadmap that aligned business goals with user needs.",
            "Rapid Design & Prototyping: Our design experts translated complex workflows into intuitive user interfaces, creating interactive prototypes that accelerated stakeholder feedback and iteration cycles.",
            "Agile Development & Task Management: Implemented streamlined task scheduling and team collaboration processes to ensure seamless communication and faster delivery without compromising quality.",
            "End-to-End Support & Launch Assistance: Guided Planica through testing, refinement, and deployment phases, ensuring a smooth transition from design to a fully functional live product."
          ],
          achievements: [
            "Reduced time-to-market by 40%, enabling faster user acquisition",
            "Improved cross-team collaboration, boosting productivity by 60%",
            "Delivered a scalable platform that supports dynamic event and task management",
            "Helped Planica launch with confidence, backed by robust design and development practices"
          ]
        }
      }
,

      {
        id: 2,
        type: "special",
        image:
          "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746848768/123_xyvdse.png",
        logo: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746849674/logo2active_yqvf7o.png",
        tags: [
          "DISCOVERY & RESEARCH",
          "NO-CODE DEVELOPMENT",
          "UX/UI DESIGN",
          "PRODUCT STRATEGY",
          "LAUNCH SUPPORT"
        ],
        title: "Zif Care - Accelerated HR Recruitment SaaS Launch by 50% Using Bubble",
        siteUrl: "#",
        details: {
          challenge:
            "Zif Care sought to build a comprehensive HR recruitment SaaS platform that streamlines hiring workflows, candidate management, and team collaboration. They needed a fast, scalable solution with a seamless user experience, built on Bubble’s no-code platform to accelerate time-to-market.",
          features: [
            "Thorough discovery and research phase to align product features with HR industry needs and user expectations.",
            "Leveraged Bubble’s no-code capabilities to rapidly develop and iterate on complex recruitment workflows without sacrificing scalability or customization.",
            "Designed an intuitive UX/UI that simplifies applicant tracking, interview scheduling, and communication between recruiters and candidates.",
            "Implemented strategic product planning to prioritize core functionalities such as resume parsing, automated candidate communication, and onboarding integrations.",
            "Provided end-to-end support from prototype to launch, ensuring smooth deployment and post-launch optimizations for performance and user engagement."
          ]
        }
      }

,
{
    id: 3,
    type: "special",
    image:
      "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746848767/Frame_1321314991_ck4occ.png",
    logo: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746850195/logo3active_tj5bmu.png",
    tags: [
      "UI Design",
      "Framer Development",
      "Content Strategy",
      "SEO & Performance"
    ],
    title:
      "How we helped fuel station owners cut fuel losses by 45% with app and real-time AI analytics",
    siteUrl: "#",
    hasCarousel: true,
    carouselImages: [
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024",
      "https://framerusercontent.com/images/wsGLnkSe3c02jPdVbTqqhf80xZo.png?scale-down-to=1024"
    ],
    details: {
      challenge:
        "Fuel station owners struggled with manual monitoring and lacked real-time insights to optimize fuel management and reduce losses.",
      features: [
        "AI-powered analytics delivering real-time fuel consumption and inventory data",
        "Camera integration for automated monitoring and fraud detection",
        "User-friendly dashboard designed with Framer for seamless data visualization",
        "Optimized SEO and performance to maximize platform reach and reliability"
      ],
      achievements: [
        "Cut fuel losses by over 45%, saving thousands monthly",
        "Boosted operational efficiency by 40% with instant data insights",
        "Accelerated platform response time by 50%, enhancing user satisfaction"
      ]
    }
  }

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
            <div className="section-tag">
              Our Portfolio
            </div>
          </div>

          <div className="max-w-[760px] w-full">
            <h2 className="section-heading mt-2 text-center">
                Uncover the Stories Behind Our Most Innovative and Game-Changing Projects.
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
                  className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #444 -31.5%, #000 100%)"
                  }}
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
                    <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
                  </svg>
                </a>
              ) : item.id === 3 ? (
                // Card 3: Both View Site and Expand Details buttons
                <div className="flex flex-col gap-2">
                  <a
                    href={item.siteUrl}
                    className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #444 -31.5%, #000 100%)"
                    }}
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
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
                    </svg>
                  </a>
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                    style={{
                      background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
                    }}
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
                  className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                  style={{
                    background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
                  }}
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
                        className="relative w-full h-fit bg-gray-200 rounded-xl overflow-hidden"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ maxWidth: "100%" }}
                      >
                        <div
                          className="flex h-fit"
                          style={carouselStyle}
                          onTransitionEnd={handleTransitionEnd}
                        >
                          {carouselImages.map((image, index) => (
                            <motion.div
                              key={index}
                              className="min-w-full h-fit relative flex items-center justify-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src={image}
                                alt={`Carousel item ${index + 1}`}
                                width={700}
                                height={320}
                                className="w-full h-fit object-contain"
                                style={{ objectFit: "contain" }}
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
                    {/* {item.youtubeUrl && item.id === 1 && (
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
                    )} */}

                    {/* Carousel for Third Card */}
                    {item.hasCarousel && item.id === 3 && (
                      <div
                        className="relative w-full h-fit bg-gray-200 rounded-xl overflow-hidden"
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                        style={{ maxWidth: "100%" }}
                      >
                        <div
                          className="flex h-fit"
                          style={carouselStyle3}
                          onTransitionEnd={handleTransitionEnd3}
                        >
                          {carouselImages3.map((image, index) => (
                            <motion.div
                              key={index}
                              className="min-w-full h-fit relative flex items-center justify-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src={image}
                                alt={`Carousel item ${index + 1}`}
                                width={700}
                                height={320}
                                className="w-full h-full object-contain"
                                style={{ objectFit: "contain" }}
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
