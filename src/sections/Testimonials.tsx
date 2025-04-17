"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const InterSans = Inter({
  subsets: ["latin"],
});

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  position: string;
  company?: string;
  logoSrc?: string;
  avatarSrc?: string;
  rowDelay?: number;
  animationDuration?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  clientName,
  position,
  company,
  logoSrc,
  avatarSrc,
  rowDelay = 0,
  animationDuration = 1000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, rowDelay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [rowDelay]);

  return (
    <div
      ref={cardRef}
      className={`p-2 rounded-lg flex flex-col transform transition-all ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
      }`}
      style={{
        transitionDelay: `${rowDelay}ms`,
        transitionDuration: `${animationDuration}ms`,
      }}
    >
      <div className="mb-4 flex flex-row bg-[#F5F7F9] p-8 rounded-3xl w-full max-w-7xl mx-auto text-left">
        <span className="text-orange-600 text-7xl">&quot;</span>
        <p className="text-black text-sm font-medium p-2">
          &quot;{quote}&quot;
        </p>
      </div>
      <div className="flex flex-col p-6 py-1">
        <div className="flex items-center flex-row">
          <div className="w-16 h-16 mr-4 relative">
            <Image
              src={avatarSrc || "/api/placeholder/60/60"}
              alt={clientName}
              className="rounded-full object-cover grayscale"
              fill
            />
          </div>
          {logoSrc && (
            <div className="w-16 h-8 mr-4 relative">
              <Image
                src={logoSrc}
                alt={`${company} logo`}
                className="rounded-full object-scale-down p-1"
                fill
              />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-black text-lg pb-1">{clientName}</h3>
          <p className="text-gray-800 text-sm uppercase tracking-wide font-medium text-[11px] pb-4">
            {position}
            {company ? `, ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

interface VideoTestimonialProps {
  name: string;
  position: string;
  company: string;
  videoUrl: string;
  rowDelay?: number;
  animationDuration?: number;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  name,
  position,
  company,
  videoUrl,
  rowDelay = 0,
  animationDuration = 1000,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const getYoutubeId = (url: string): string => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : "";
  };

  const videoId = getYoutubeId(videoUrl);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, rowDelay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [rowDelay]);

  return (
    <div
      ref={videoRef}
      className={`bg-[#F5F6F7] rounded-4xl p-3 transform transition-all ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{
        transitionDelay: `${rowDelay}ms`,
        transitionDuration: `${animationDuration}ms`,
      }}
    >
      <div
        className="relative w-full h-95 rounded-4xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setPlayVideo(true)}
      >
        {playVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`${name} video testimonial`}
            className="absolute inset-0 w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={`${name} video thumbnail`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-19 h-14 rounded-2xl flex items-center justify-center ${
                  isHovered ? "bg-red-600" : "bg-black opacity-65"
                } transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-9 h-9"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="text-center py-3">
        <h3 className="text-black text-xl font-medium text-[17px]">{name}</h3>
        <p className="text-gray-500 uppercase text-sm text-[11px] tracking-wide">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

interface Testimonial {
  quote: string;
  clientName: string;
  position: string;
  company: string;
  logoSrc: string;
  avatarSrc: string;
}

interface VideoTestimonialData {
  name: string;
  position: string;
  company: string;
  videoUrl: string;
}

const Testimonial: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const rowDelayInterval = 30;
  const animationDuration = 600;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    if (!hasAnimated) {
      setHasAnimated(true);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [hasAnimated]);

  const testimonials: Testimonial[] = [
    {
      quote: "Working with this team felt like having a secret weapon...",
      clientName: "Tobias Green",
      position: "FOUNDER",
      company: "GREENSPARK INNOVATIONS",
      logoSrc:
        "https://framerusercontent.com/images/3Y1x3Iz9CnzoCeLjfRflZMOiF0.svg",
      avatarSrc:
        "https://framerusercontent.com/images/UsPZoUaacWnpNKo5ow2OkPMrpw0.jpg",
    },
    {
      quote: "Finally, an agency that speaks our language!",
      clientName: "Silas Leighton",
      position: "MANAGING DIRECTOR",
      company: "VENTUREVISTA",
      logoSrc:
        "https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg",
      avatarSrc:
        "https://framerusercontent.com/images/ItbAaHsEW3CUnztIn91H9TiuKHc.jpg",
    },
    {
      quote: "I came in with high hopes, and they absolutely blew me away.",
      clientName: "Orion Vance",
      position: "CEO",
      company: "LUNAR LUX CO.",
      logoSrc: "",
      avatarSrc:
        "https://framerusercontent.com/images/2Zm0QnC5KdYbFQFAK2RQ8DRekU.jpg",
    },
  ];

  const videoTestimonials: VideoTestimonialData[] = [
    {
      name: "Magnus Hawthorne",
      position: "OWNER",
      company: "BAYLEAF",
      videoUrl: "https://youtu.be/Ly1auHs_ofo",
    },
    {
      name: "Thaddeus Montgomery",
      position: "OWNER",
      company: "GOLDGARDEN",
      videoUrl: "https://youtu.be/ay2e0VXtmfI",
    },
  ];

  return (
    <section
      className={`${InterSans.className} bg-white py-20 px-4 sm:px-10`}
      id="testimonials"
    >
      <div ref={headerRef} className="max-w-5xl mx-auto text-center mb-10">
        <h2
          className={`text-3xl sm:text-4xl font-bold transition-opacity duration-1000 ${
            isHeaderVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          What Our Clients Say
        </h2>
        <p
          className={`mt-4 text-gray-600 transition-opacity duration-1000 ${
            isHeaderVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Real stories from real people we’ve helped.
        </p>
      </div>

      {/* Text Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            rowDelay={index * rowDelayInterval}
            animationDuration={animationDuration}
          />
        ))}
      </div>

      {/* Video Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videoTestimonials.map((video, index) => (
          <VideoTestimonial
            key={index}
            {...video}
            rowDelay={index * rowDelayInterval}
            animationDuration={animationDuration}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
