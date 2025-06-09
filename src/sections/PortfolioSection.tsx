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
    title:
      "Planica - Reduced Time-to-Market by 40% to Accelerate Product Success",
    hasCarousel: true,
    carouselImages: [
      "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746854632/User_Details_mdb0t8.png",
      "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746854630/channel_view_default_equwij.png",
      "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746854632/Dashboard_Progress_euj0sy.png",
    ],
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    siteUrl: "#", // Added View Site URL
    details: {
      challenge:
        "Planica approached us with a vision to revolutionize event planning and team coordination but needed expert guidance to transform their ideas from documentation into a polished, market-ready product quickly and efficiently.",
      features: [
        "Strategic Product Consulting: We collaborated closely with Planica's team to clarify their vision, define priorities, and establish a clear roadmap that aligned business goals with user needs.",
        "Rapid Design & Prototyping: Our design experts translated complex workflows into intuitive user interfaces, creating interactive prototypes that accelerated stakeholder feedback and iteration cycles.",
        "Agile Development & Task Management: Implemented streamlined task scheduling and team collaboration processes to ensure seamless communication and faster delivery without compromising quality.",
        "End-to-End Support & Launch Assistance: Guided Planica through testing, refinement, and deployment phases, ensuring a smooth transition from design to a fully functional live product.",
      ],
      achievements: [
        "Reduced time-to-market by 40%, enabling faster user acquisition",
        "Improved cross-team collaboration, boosting productivity by 60%",
        "Delivered a scalable platform that supports dynamic event and task management",
        "Helped Planica launch with confidence, backed by robust design and development practices",
      ],
    },
  },
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
      "LAUNCH SUPPORT",
    ],
    title:
      "Zif Care - Accelerated HR Recruitment SaaS Launch by 50% Using Bubble",
    siteUrl: "#",
    hasCarousel: true, // Add this property
    carouselImages: [
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749443034/Screen_Part_filecq.png",
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749444816/iPad_Pro_11_Inches_rzlnfx.png",
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749444824/Frame_1321315740_1_i8lcru.png",
    ],
    details: {
      challenge:
        "Zif Care sought to build a comprehensive HR recruitment SaaS platform that streamlines hiring workflows, candidate management, and team collaboration. They needed a fast, scalable solution with a seamless user experience, built on Bubble's no-code platform to accelerate time-to-market.",
      features: [
        "Thorough discovery and research phase to align product features with HR industry needs and user expectations.",
        "Leveraged Bubble's no-code capabilities to rapidly develop and iterate on complex recruitment workflows without sacrificing scalability or customization.",
        "Designed an intuitive UX/UI that simplifies applicant tracking, interview scheduling, and communication between recruiters and candidates.",
        "Implemented strategic product planning to prioritize core functionalities such as resume parsing, automated candidate communication, and onboarding integrations.",
        "Provided end-to-end support from prototype to launch, ensuring smooth deployment and post-launch optimizations for performance and user engagement.",
      ],
      achievements: [
        // Optional: Add achievements section
        "Accelerated product launch by 50% using no-code development",
        "Successfully deployed scalable HR recruitment platform",
        "Streamlined hiring workflows for improved efficiency",
        "Enhanced user experience with intuitive interface design",
      ],
    },
  },

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
      "SEO & Performance",
    ],
    title:
      "How we helped fuel station owners cut fuel losses by 45% with app and real-time AI analytics",
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
        "Fuel station owners struggled with manual monitoring and lacked real-time insights to optimize fuel management and reduce losses.",
      features: [
        "AI-powered analytics delivering real-time fuel consumption and inventory data",
        "Camera integration for automated monitoring and fraud detection",
        "User-friendly dashboard designed with Framer for seamless data visualization",
        "Optimized SEO and performance to maximize platform reach and reliability",
      ],
      achievements: [
        "Cut fuel losses by over 45%, saving thousands monthly",
        "Boosted operational efficiency by 40% with instant data insights",
        "Accelerated platform response time by 50%, enhancing user satisfaction",
      ],
    },
  },
  // NEW FOURTH CARD
  {
    id: 4,
    type: "default",
    image:
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749438598/Group_427318580_j7qnrm.png",
    logo: "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749439182/Frame_1321315076_1_psri6z.png",
    tags: ["WEB DEVELOPMENT", "UI/UX DESIGN", "EDUCATION PLATFORM"],
    title: "UpskillLink - Professional Learning Platform",
    siteUrl: "#", // Add actual URL when available
    hasCarousel: true,
    carouselImages: [
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749440148/Screen_nvwsjs.png",
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749442060/Frame_1321315064_hp6gnz.png",
      "https://res.cloudinary.com/dsza8fjtr/image/upload/v1749442370/Screenshot_2025-06-09_094208_xy8sid.png",
    ],
    details: {
      challenge:
        "Designed and developed a comprehensive learning management platform that connects professionals with skill development opportunities. The challenge was to create an intuitive interface that serves both learners and educators while maintaining a modern, engaging user experience.",
      features: [
        "Interactive dashboard with progress tracking and analytics",
        "Responsive design optimized for mobile and desktop learning",
        "User-friendly course management and enrollment system",
        "Real-time messaging and video call integration",
        "Clean, modern UI with consistent branding and visual hierarchy",
      ],
      achievements: [
        "Successfully launched a full-featured learning platform",
        "Implemented responsive design across all device sizes",
        "Created an intuitive user experience for diverse user types",
        "Developed a scalable architecture for future feature expansion",
      ],
    },
  },
];

const PortfolioSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // State for all carousels
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [carouselIndex2, setCarouselIndex2] = useState(1); // Added for Zif Care
  const [carouselIndex3, setCarouselIndex3] = useState(1);
  const [carouselIndex4, setCarouselIndex4] = useState(1);

  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [carouselImages2, setCarouselImages2] = useState<string[]>([]); // Added for Zif Care
  const [carouselImages3, setCarouselImages3] = useState<string[]>([]);
  const [carouselImages4, setCarouselImages4] = useState<string[]>([]);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTransitioning2, setIsTransitioning2] = useState(false); // Added for Zif Care
  const [isTransitioning3, setIsTransitioning3] = useState(false);
  const [isTransitioning4, setIsTransitioning4] = useState(false);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(true); // Added for Zif Care
  const [isPlaying3, setIsPlaying3] = useState(true);
  const [isPlaying4, setIsPlaying4] = useState(true);

  // Initialize all carousels
  useEffect(() => {
    const getClonedImages = (images: string[]): string[] => {
      if (!images || images.length === 0) return [];
      const lastItem = images[images.length - 1];
      const firstItem = images[0];
      return [lastItem, ...images, firstItem];
    };

    // Initialize each carousel
    if (portfolioItems[0].carouselImages) {
      setCarouselImages(getClonedImages(portfolioItems[0].carouselImages));
      setCarouselIndex(1);
    }
    if (portfolioItems[1].carouselImages) {
      // Added for Zif Care
      setCarouselImages2(getClonedImages(portfolioItems[1].carouselImages));
      setCarouselIndex2(1);
    }
    if (portfolioItems[2].carouselImages) {
      setCarouselImages3(getClonedImages(portfolioItems[2].carouselImages));
      setCarouselIndex3(1);
    }
    if (portfolioItems[3].carouselImages) {
      setCarouselImages4(getClonedImages(portfolioItems[3].carouselImages));
      setCarouselIndex4(1);
    }
  }, []);

  // Navigation functions for all carousels
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

  const nextSlide2 = useCallback(() => {
    // Added for Zif Care
    if (carouselIndex2 >= carouselImages2.length - 1) return;
    setIsTransitioning2(true);
    setCarouselIndex2((prev) => prev + 1);
  }, [carouselIndex2, carouselImages2.length]);

  const prevSlide2 = useCallback(() => {
    // Added for Zif Care
    if (carouselIndex2 <= 0) return;
    setIsTransitioning2(true);
    setCarouselIndex2((prev) => prev - 1);
  }, [carouselIndex2]);

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

  const nextSlide4 = useCallback(() => {
    if (carouselIndex4 >= carouselImages4.length - 1) return;
    setIsTransitioning4(true);
    setCarouselIndex4((prev) => prev + 1);
  }, [carouselIndex4, carouselImages4.length]);

  const prevSlide4 = useCallback(() => {
    if (carouselIndex4 <= 0) return;
    setIsTransitioning4(true);
    setCarouselIndex4((prev) => prev - 1);
  }, [carouselIndex4]);

  // Autoplay for all carousels
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
    // Added for Zif Care
    let interval2: NodeJS.Timeout;
    if (isPlaying2 && expandedCard === 2) {
      interval2 = setInterval(() => {
        nextSlide2();
      }, 3000);
    }
    return () => clearInterval(interval2);
  }, [isPlaying2, expandedCard, nextSlide2]);

  useEffect(() => {
    let interval3: NodeJS.Timeout;
    if (isPlaying3 && expandedCard === 3) {
      interval3 = setInterval(() => {
        nextSlide3();
      }, 3000);
    }
    return () => clearInterval(interval3);
  }, [isPlaying3, expandedCard, nextSlide3]);

  useEffect(() => {
    let interval4: NodeJS.Timeout;
    if (isPlaying4 && expandedCard === 4) {
      interval4 = setInterval(() => {
        nextSlide4();
      }, 3000);
    }
    return () => clearInterval(interval4);
  }, [isPlaying4, expandedCard, nextSlide4]);

  const toggleExpand = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
      // Reset all carousels to first slide
      setCarouselIndex(1);
      setCarouselIndex2(1);
      setCarouselIndex3(1);
      setCarouselIndex4(1);
    }
  };

  // Transition end handlers
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (carouselIndex === 0) {
      setCarouselIndex(carouselImages.length - 2);
    } else if (carouselIndex === carouselImages.length - 1) {
      setCarouselIndex(1);
    }
  };

  const handleTransitionEnd2 = () => {
    // Added for Zif Care
    setIsTransitioning2(false);
    if (carouselIndex2 === 0) {
      setCarouselIndex2(carouselImages2.length - 2);
    } else if (carouselIndex2 === carouselImages2.length - 1) {
      setCarouselIndex2(1);
    }
  };

  const handleTransitionEnd3 = () => {
    setIsTransitioning3(false);
    if (carouselIndex3 === 0) {
      setCarouselIndex3(carouselImages3.length - 2);
    } else if (carouselIndex3 === carouselImages3.length - 1) {
      setCarouselIndex3(1);
    }
  };

  const handleTransitionEnd4 = () => {
    setIsTransitioning4(false);
    if (carouselIndex4 === 0) {
      setCarouselIndex4(carouselImages4.length - 2);
    } else if (carouselIndex4 === carouselImages4.length - 1) {
      setCarouselIndex4(1);
    }
  };

  // Carousel styles
  const carouselStyle = {
    transform: `translateX(-${carouselIndex * 100}%)`,
    transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
  };

  const carouselStyle2 = {
    // Added for Zif Care
    transform: `translateX(-${carouselIndex2 * 100}%)`,
    transition: isTransitioning2 ? "transform 0.5s ease-in-out" : "none",
  };

  const carouselStyle3 = {
    transform: `translateX(-${carouselIndex3 * 100}%)`,
    transition: isTransitioning3 ? "transform 0.5s ease-in-out" : "none",
  };

  const carouselStyle4 = {
    transform: `translateX(-${carouselIndex4 * 100}%)`,
    transition: isTransitioning4 ? "transform 0.5s ease-in-out" : "none",
  };

  // Mouse handlers for all carousels
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);
  const handleMouseEnter2 = () => setIsPlaying2(false); // Added for Zif Care
  const handleMouseLeave2 = () => setIsPlaying2(true);
  const handleMouseEnter3 = () => setIsPlaying3(false);
  const handleMouseLeave3 = () => setIsPlaying3(true);
  const handleMouseEnter4 = () => setIsPlaying4(false);
  const handleMouseLeave4 = () => setIsPlaying4(true);

  return (
    <section
      id="portfolio"
      className="w-full flex flex-col items-center mx-auto py-[100px] px-[40px]"
    >
      <div className="max-w-[1200px] w-full flex flex-col gap-[16px] my-8 items-center mx-auto">
        {/* Header */}
        <div className="max-w-[800px]   w-full flex flex-col items-center justify-center px-[20px] ">
          <div className="w-[132.79px] h-[33px] rounded-[25px] bg-[#f5f7f9] flex justify-between items-center pt-[2px] pb-[2px] pr-[10px] pl-[2px]">
            <div
              className="size-[32px]   rounded-full flex items-center justify-center "
              style={{
                background:
                  "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M10.7306 1.93506C10.7306 1.79831 10.6763 1.66716 10.5796 1.57046C10.4829 1.47376 10.3517 1.41943 10.215 1.41943C8.29086 1.41943 6.34781 3.50514 5.23492 4.94287C4.82843 4.83792 4.40331 4.82742 3.99215 4.91219C3.58098 4.99696 3.19467 5.17474 2.86285 5.43191C2.53102 5.68907 2.26247 6.0188 2.07779 6.39581C1.89312 6.77283 1.79721 7.18712 1.79742 7.60693C1.79742 8.12256 1.66421 8.58275 1.40082 8.97162C1.29021 9.14022 1.15276 9.28958 0.993902 9.41377C0.901287 9.47389 0.830663 9.56242 0.792624 9.66608C0.754584 9.76974 0.751182 9.88293 0.782926 9.98869C0.815343 10.0957 0.881466 10.1893 0.971441 10.2557C1.06142 10.3221 1.17043 10.3576 1.28222 10.3569H4.54785C4.96726 10.3564 5.38101 10.26 5.75742 10.075C6.13384 9.89001 6.46296 9.62137 6.7196 9.28964C6.97623 8.9579 7.15359 8.57186 7.2381 8.16105C7.32261 7.75023 7.31204 7.32553 7.20718 6.91943C8.64621 5.80439 10.7306 3.86006 10.7306 1.93506ZM9.59711 2.55338C9.42523 3.10854 9.03207 3.73459 8.44039 4.39717C8.31148 4.54283 8.1757 4.68506 8.03863 4.82213C7.82959 4.55988 7.59177 4.32192 7.32964 4.11271C7.46672 3.97564 7.60851 3.84115 7.75418 3.71096C8.41675 3.11885 9.04238 2.72697 9.59711 2.55338ZM4.54613 9.32568H2.39468C2.6874 8.8006 2.83761 8.20805 2.83039 7.60693C2.83039 7.267 2.93119 6.93469 3.12005 6.65205C3.30891 6.3694 3.57734 6.1491 3.8914 6.01902C4.20546 5.88893 4.55104 5.85489 4.88445 5.92121C5.21785 5.98753 5.52411 6.15122 5.76448 6.39159C6.00485 6.63197 6.16854 6.93822 6.23486 7.27162C6.30118 7.60503 6.26714 7.95061 6.13705 8.26467C6.00697 8.57873 5.78667 8.84716 5.50402 9.03602C5.22138 9.22488 4.88907 9.32568 4.54914 9.32568H4.54613ZM6.18668 5.40178C6.32074 5.23291 6.46812 5.05416 6.62625 4.87111C6.87273 5.05909 7.09284 5.27935 7.28066 5.52596C7.09761 5.68408 6.91886 5.83146 6.75 5.96553C6.59039 5.75143 6.40066 5.56154 6.18668 5.40178Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="section-tag text-gray-800">Our Portfolio</div>
          </div>
        </div>

        <div className="max-w-[760px]  w-full">
          <h2 className="section-heading  text-center">
            Uncover the Stories Behind Our Most Innovative and Game-Changing
            Projects.
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Portfolio Cards */}
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="relative max-w-[700px] w-full flex flex-col items-center mx-auto overflow-hidden rounded-2xl md:rounded-[30px]"
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
                    unoptimized
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
                unoptimized
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
              <div className="flex flex-col gap-2">
                {/* View Site Button for all cards */}
                {item.siteUrl && (
                  <a
                    href={item.siteUrl}
                    className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, #444 -31.5%, #000 100%)",
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
                )}

                {/* Expand Details Button */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="max-w-[640px] w-full h-[45.19px] flex justify-between items-center rounded-full md:rounded-[20px] px-[20px] py-[10px] cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)",
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

                    {/* NEW: Carousel for Card 2 (Zif Care) */}
                    {item.hasCarousel && item.id === 2 && (
                      <div
                        className="relative w-full h-fit bg-gray-200 rounded-xl overflow-hidden"
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        style={{ maxWidth: "100%" }}
                      >
                        <div
                          className="flex h-fit"
                          style={carouselStyle2}
                          onTransitionEnd={handleTransitionEnd2}
                        >
                          {carouselImages2.map((image, index) => (
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

                        <button
                          onClick={prevSlide2}
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
                          onClick={nextSlide2}
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

                    {/* Carousel for Fourth Card */}
                    {item.hasCarousel && item.id === 4 && (
                      <div
                        className="relative w-full h-fit bg-gray-200 rounded-xl overflow-hidden"
                        onMouseEnter={handleMouseEnter4}
                        onMouseLeave={handleMouseLeave4}
                        style={{ maxWidth: "100%" }}
                      >
                        <div
                          className="flex h-fit"
                          style={carouselStyle4}
                          onTransitionEnd={handleTransitionEnd4}
                        >
                          {carouselImages4.map((image, index) => (
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
                          onClick={prevSlide4}
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
                          onClick={nextSlide4}
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
