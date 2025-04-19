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
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
  }`}
  style={{ 
    transitionDelay: `${rowDelay}ms`,
    transitionDuration: `${animationDuration}ms`
  }}
>
  <div 
    className="relative w-full h-95 rounded-4xl overflow-hidden  "
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={() => setPlayVideo(true)}
  >
    {playVideo ? (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={`${name} video testimonial`}
        className="absolute inset-0 w-full h-full  object-cover sm:object-cover md:object-cover lg:object-cover"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <>
        <img 
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={`${name} video thumbnail`} 
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-19 h-14 rounded-2xl flex items-center justify-center ${isHovered ? 'bg-red-600' : 'bg-black opacity-65'} transition-colors duration-300`}>
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
  <div className=" text-center py-3">
    <h3 className="text-black text-xl font-medium text-[17px]">{name}</h3>
    <p className="className=text-black/65 font-semibold uppercase text-sm text-[11px] tracking-wide">
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
      quote: "Working with this team felt like having a secret weapon. They took our scattered ideas and turned them into a website that screams 'wow!' Our customers can't stop raving about it!",
      clientName: "Tobias Green",
      position: "FOUNDER",
      company: "GREENSPARK INNOVATIONS",
      logoSrc:
        "https://framerusercontent.com/images/3Y1x3Iz9CnzoCeLjfRflZMOiF0.svg",
      avatarSrc:
        "https://framerusercontent.com/images/UsPZoUaacWnpNKo5ow2OkPMrpw0.jpg",
    },
    {
      quote: "Finally, an agency that speaks our language! They understood our vision better than we did and brought it to life in a way that exceeded expectations. 10/10 would recommend!",
      clientName: "Silas Leighton",
      position: "MANAGING DIRECTOR",
      company: "VENTUREVISTA",
      logoSrc:
        "https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg",
      avatarSrc:
        "https://framerusercontent.com/images/ItbAaHsEW3CUnztIn91H9TiuKHc.jpg",
    },
    {
      quote: "I came in with high hopes, and they absolutely blew me away. From strategy to execution, every detail was on point. I'm telling everyone I know-hire them!",
      clientName: "Orion Vance",
      position: "CEO",
      company: "LUNAR LUX CO.",
      logoSrc: "",
      avatarSrc:
        "https://framerusercontent.com/images/2Zm0QnC5KdYbFQFAK2RQ8DRekU.jpg",
    },
    {
      quote: "Our brand went from a whisper to a roar. The team's creativity and expertise made all the difference. We're getting noticed like never before!",
      clientName: "Callum Yates",
      position: "CO-FOUNDER",
      company: "DRIFTWOOD MEDIA",
      logoSrc: "https://framerusercontent.com/images/mGAxAGDBjt0JHg8MI0F9P9FkW0g.svg",
      avatarSrc: "https://framerusercontent.com/images/ciqeScb6bZagxmIXqN70lJt6x10.jpg?scale-down-to=512"
    },
    {
      quote: "Our online presence went from zero to hero in no time. The team made the process so seamless, I almost forgot I was working on a big project!",
      clientName: "Jasper Lowell",
      position: "CEO",
      company: "COPPERLEAF ENTERPRISES",
      logoSrc: "",
      avatarSrc: "https://framerusercontent.com/images/NE0HbZCpk08RqUBmljkId4i3oEw.jpg?scale-down-to=512"
    },
    {
      quote: "They made us feel like their most important client. The attention to detail, quick responses, and innovative ideas were top-notch. We'll definitely be back for more!",
      clientName: "Jasper Lowell",
      position: "BRAND MANAGER",
      company: "STELLAR BLOOM STUDIO",
      logoSrc: "https://framerusercontent.com/images/RsaJCL4Sj4fVM9spQ7bKyrgyngo.svg",
      avatarSrc: "https://framerusercontent.com/images/Zm4yodZZxdIXJhenN7bdKUq5KM.jpg"
    }

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


  const testimonialRows = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialRows.push(testimonials.slice(i, i + 3));
  }
  return (
<>
      <div className={`${InterSans.className} bg-white py-16 px-2 items-center text-Inter overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          <div 
            ref={headerRef}
            className={`transform transition-all ease-out ${
              isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDuration: `${animationDuration}ms` }}
          >
           
            <div className="flex justify-center mb-2">
              <div className="inline-flex items-center bg-gray-100  py-1 rounded-full">
                <div className="bg-black text-white rounded-full p-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 256 256" fill="currentColor">
                      <path fillRule="evenodd" d="M172,108a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,108Zm-12,28H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm76-8A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.06a12,12,0,0,1,1,9.81l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z" clipRule="evenodd" />
                    </svg>
                </div>
                <p className="text-black font-medium text-[14px] pr-2">Client Stories</p>
                <p className="text-black font-medium text-[14px] pr-2">Client Stories</p>
              </div>
            </div>
          <div className="flex justify-center mb-10">
  <div className="text-center">
    <h2 className="hidden md:block text-3xl md:text-3xl lg:text-5xl lg:w-[64rem] font-bold font-inter text-black leading-snug">
      Hear stories
      <span className="inline-flex items-center mx-2 -space-x-2 align-middle">
        {["https://framerusercontent.com/images/MDE7XIBGnAp7GIZqwSV00Vh90.jpg?scale-down-to=512", "https://framerusercontent.com/images/5wZzX30rg0ckdSubOe94bFGvXk.jpg?scale-down-to=512", "https://framerusercontent.com/images/6KKDj9gnqEHDNBTD7GWaqkIug8.jpg?scale-down-to=512", "https://framerusercontent.com/images/6OOWa2zIdujTmN3ZdUxz0qFSaRA.jpg?scale-down-to=512", "https://framerusercontent.com/images/XQBcFnxyK3FSny302gO7Gggkdsw.jpg?scale-down-to=512"].map((src, index) => (
          <div
            key={index}
            className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 rounded-lg sm:rounded-lg md:rounded-2xl lg:rounded-2xl ring-4 ring-white overflow-hidden"
          >
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </span>
      straight from the people we helped!
    </h2>
    <h2 className="md:hidden text-3xl font-bold font-inter text-black leading-snug">
      Hear stories straight from the people 
      <span className="inline-flex items-center mx-2 -space-x-2 align-middle">
        {["https://framerusercontent.com/images/MDE7XIBGnAp7GIZqwSV00Vh90.jpg?scale-down-to=512", "https://framerusercontent.com/images/5wZzX30rg0ckdSubOe94bFGvXk.jpg?scale-down-to=512", "https://framerusercontent.com/images/6KKDj9gnqEHDNBTD7GWaqkIug8.jpg?scale-down-to=512", "https://framerusercontent.com/images/6OOWa2zIdujTmN3ZdUxz0qFSaRA.jpg?scale-down-to=512", "https://framerusercontent.com/images/XQBcFnxyK3FSny302gO7Gggkdsw.jpg?scale-down-to=512"].map((src, index) => (
          <div
            key={index}
            className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-lg sm:rounded-lg ring-4 ring-white overflow-hidden"
          >
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </span>
      we helped!
    </h2>
  </div>
</div>
        </div>
    
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {testimonialRows.map((row, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {row.map((testimonial, colIndex) => {
                  const rowDelay = rowIndex * rowDelayInterval; 
                  return (
                    <TestimonialCard 
                      key={`testimonial-${rowIndex}-${colIndex}`}
                      quote={testimonial.quote}
                      clientName={testimonial.clientName}
                      position={testimonial.position}
                      company={testimonial.company}
                      logoSrc={testimonial.logoSrc}
                      avatarSrc={testimonial.avatarSrc}
                      rowDelay={rowDelay}
                      animationDuration={animationDuration}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videoTestimonials.map((testimonial, index) => (
              <VideoTestimonial 
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                videoUrl={testimonial.videoUrl}
                rowDelay={testimonialRows.length * rowDelayInterval + 50}
                animationDuration={animationDuration}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </>
  );   
};


export default Testimonial;
