"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

// Image URL configuration
const imageConfig = {
  cloudinary: "https://res.cloudinary.com/dkfjhjdh6/image/upload/",
  framerusercontent: "https://framerusercontent.com/images/",
  local: "/images/",
  youtube: "https://img.youtube.com/vi/",
};

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
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Capture observer in callback scope
          const currentObserver = observer;
          setTimeout(() => {
            setIsVisible(true);
            currentObserver.unobserve(node);
          }, rowDelay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
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
        <div className="flex items-center justify-between flex-row">
          <div className="w-16 h-16 mr-4 relative">
            <Image
              src={avatarSrc || "/api/placeholder/60/60"}
              alt={clientName}
              className="rounded-full object-cover grayscale"
              fill
            />
          </div>
          {logoSrc && (
            <div className="w-32 h-12  relative">
              <Image
                src={logoSrc}
                alt={`${company} logo`}
                className=" object-scale-down p-1"
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
  rowDelay?: number;
  animationDuration?: number;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  name,
  position,
  company,
  rowDelay = 0,
  animationDuration = 1000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = videoRef.current; // Capture current value in variable
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, rowDelay);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.unobserve(node); // Use captured node in cleanup
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
        className="relative w-full h-[300px] rounded-4xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #444 -31.5%, #000 100%)" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
          <p className="text-gray-300 text-center max-w-xs px-4">
            Video testimonials from our clients are being prepared and will be available shortly.
          </p>
        </div>
      </div>
      <div className="text-center py-3">
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
}

const Testimonial: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const rowDelayInterval = 30;
  const animationDuration = 600;

  useEffect(() => {
    const node = headerRef.current; // Capture current value in variable
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(node);
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
      observer.unobserve(node); // Use captured node in cleanup
    };
  }, [hasAnimated]);

  const testimonials: Testimonial[] = [
    {
      quote:
        "Felt like they read our minds—turned our rough ideas into a stunning website our users love. Can’t imagine a better tech partner.",
      clientName: "Rohit Chopra",
      position: "FOUNDER",
      company: "ZIFCARE",
      logoSrc: `${imageConfig.cloudinary}v1746849674/logo2active_yqvf7o.png`,
      avatarSrc: `${imageConfig.cloudinary}v1746911698/1723801405260_o8pgc0.jpg`,
    },
    {
      quote:
        "They understood our vision better than we did and brought it to life in a way that exceeded expectations. 10/10 would recommend!",
      clientName: "Kiran Kumar Yerriboina",
      position: "Founder & CEO",
      company: "Upskillink",
      logoSrc: `https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746911983/Frame_1321315076_cyvt2z.png`,
      avatarSrc: `https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746911836/1737181719368_zztdhm.jpg`,
    },
    {
      quote:
        "I came in with high hopes, and they absolutely blew me away. From strategy to execution, every detail was on point. I'm telling everyone I know-hire them!",
      clientName: "Stavya Bhatia",
      position: "CEO",
      company: "Roombae",
      logoSrc: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746912463/roombae_logo_sivd1g.png",
      avatarSrc: `https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746912344/1517021278290_zm1bk8.jpg`,
    },
    {
      quote:
        "Our brand went from a whisper to a roar. The team's creativity and expertise made all the difference. We're getting noticed like never before!",
      clientName: "Chennapa Naidu Darapaneni",
      position: "FOUNDER",
      company: "Planica",
      logoSrc: `https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746849481/logo1active_zlpqgm.png`,
      avatarSrc: `https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746912615/1516269349989_tasdep.jpg`},
    {
      quote:
        "They made us feel like their most important client. The attention to detail, quick responses, and innovative ideas were top-notch. We'll definitely be back for more!",
      clientName: "Chethan Naidu",
      position: "Founder & CEO",
      company: "Sheshgayan",
      logoSrc: "https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746912978/logo_1_cmay4q.svg",
      avatarSrc: `https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746913149/Rectangle_4312_ivfohg.png`,
    },
    {

              quote:
        "Our online presence went from zero to hero in no time. The team made the process so seamless, I almost forgot I was working on a big project!",
      clientName: "Bhavy Parmar",
      position: "Founder",
      company: "MedLinkPro",
      logoSrc: `https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746913451/Frame_1321315496_iwg58y.png`,
      avatarSrc: `https://res.cloudinary.com/dkfjhjdh6/image/upload/v1746913650/1733584220094_dgvvaq.jpg`,
    },
  ];

  const videoTestimonials: VideoTestimonialData[] = [
    {
      name: "Magnus Hawthorne",
      position: "OWNER",
      company: "BAYLEAF",
    },
    {
      name: "Thaddeus Montgomery",
      position: "OWNER",
      company: "GOLDGARDEN",
    },
  ];

  const testimonialRows = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialRows.push(testimonials.slice(i, i + 3));
  }
  return (
    <>
      <div
        className={`${InterSans.className} bg-white  py-40 px-2 items-center text-Inter overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            ref={headerRef}
            className={`transform transition-all ease-out mx-auto max-w-[800px] w-full flex flex-col items-center justify-center px-[20px] gap-[5px]  ${
              isHeaderVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDuration: `${animationDuration}ms` }}
          >
        {/* Section Heading */}
          <div className=" h-[33px] gap-1 rounded-[25px] mx-auto bg-[#f5f7f9] inline-flex  justify-between items-center pt-[2px] pb-[2px] pr-[10px] pl-[2px]">
           <div className="size-[32px]   rounded-full flex items-center justify-center "
            style={{
                background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
            }}
            >
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
  <path d="M11.0874 5.70191L9.71244 2.26441C9.66695 2.15101 9.58268 2.05743 9.47463 2.00038C9.36658 1.94332 9.24178 1.9265 9.12248 1.95289L6.65564 2.49902V1.76855C6.65564 1.6318 6.60131 1.50065 6.50462 1.40395C6.40792 1.30725 6.27677 1.25293 6.14001 1.25293C6.00326 1.25293 5.87211 1.30725 5.77541 1.40395C5.67871 1.50065 5.62439 1.6318 5.62439 1.76855V2.72977L2.93455 3.32789C2.85265 3.34605 2.77643 3.38392 2.71249 3.4382C2.64854 3.49249 2.59881 3.56156 2.56759 3.63941L1.19259 7.07348C1.16775 7.13549 1.1552 7.20175 1.15564 7.26855C1.15564 7.78977 1.42205 8.23234 1.90544 8.51465C2.25417 8.70974 2.64668 8.81323 3.04626 8.81543C3.44585 8.81323 3.83836 8.70974 4.18708 8.51465C4.67048 8.23234 4.93689 7.78977 4.93689 7.26855C4.93688 7.2029 4.92434 7.13786 4.89994 7.07691L3.75009 4.20273L5.62439 3.78809V8.81543H5.10876C4.97201 8.81543 4.84086 8.86975 4.74416 8.96645C4.64746 9.06315 4.59314 9.1943 4.59314 9.33105C4.59314 9.46781 4.64746 9.59896 4.74416 9.69566C4.84086 9.79235 4.97201 9.84668 5.10876 9.84668H7.17126C7.30802 9.84668 7.43917 9.79235 7.53587 9.69566C7.63256 9.59896 7.68689 9.46781 7.68689 9.33105C7.68689 9.1943 7.63256 9.06315 7.53587 8.96645C7.43917 8.86975 7.30802 8.81543 7.17126 8.81543H6.65564V3.55734L8.39244 3.17062L7.38009 5.70148C7.35563 5.76256 7.34309 5.82776 7.34314 5.89355C7.34314 6.41477 7.60955 6.85734 8.09294 7.13965C8.44074 7.33709 8.83383 7.44088 9.23376 7.44088C9.6337 7.44088 10.0268 7.33709 10.3746 7.13965C10.858 6.85734 11.1244 6.41477 11.1244 5.89355C11.1244 5.8279 11.1118 5.76286 11.0874 5.70191ZM3.04626 7.78418C2.88685 7.78418 2.27283 7.70383 2.19505 7.34676L3.04626 5.21937L3.89748 7.34676C3.8197 7.70383 3.20568 7.78418 3.04626 7.78418ZM9.23376 6.40918C9.07435 6.40918 8.46033 6.32883 8.38255 5.97176L9.23376 3.84437L10.085 5.97176C10.0072 6.32883 9.39318 6.40918 9.23376 6.40918Z" fill="white"/>
</svg>
            </div>
            <div className="section-tag text-nowrap">
            Client Stories
            </div>
          </div>
            <div className="flex justify-center mb-10">
              <div className="text-center">
                <h2 className="hidden md:block text-3xl md:text-3xl lg:text-5xl lg:w-[64rem] font-bold font-inter text-black leading-snug">
                  Hear stories
                  <span className="inline-flex items-center mx-2 -space-x-2 align-middle">
                    {[
                      `${imageConfig.framerusercontent}MDE7XIBGnAp7GIZqwSV00Vh90.jpg?scale-down-to=512`,
                      `${imageConfig.framerusercontent}5wZzX30rg0ckdSubOe94bFGvXk.jpg?scale-down-to=512`,
                      `${imageConfig.framerusercontent}6KKDj9gnqEHDNBTD7GWaqkIug8.jpg?scale-down-to=512`,
                      `${imageConfig.framerusercontent}6OOWa2zIdujTmN3ZdUxz0qFSaRA.jpg?scale-down-to=512`,
                      `${imageConfig.framerusercontent}XQBcFnxyK3FSny302gO7Gggkdsw.jpg?scale-down-to=512`,
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 rounded-lg sm:rounded-lg md:rounded-2xl lg:rounded-2xl ring-4 ring-white overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`Client ${index + 1}`}
                          className="h-full w-full object-cover"
                          width={48} // Set the width based on the size of the parent container (for example: 48px = 6 * 8)
                          height={48} // Set the height based on the size of the parent container (for example: 48px = 6 * 8)
                        />
                      </div>
                    ))}
                  </span>
                  straight from the people we helped!
                </h2>
                <h2 className="md:hidden text-3xl font-bold font-inter text-black leading-snug">
                  Hear stories straight from the people
                  <span className="inline-flex items-center mx-2 -space-x-2 align-middle">
                    {[
                      `${imageConfig.framerusercontent}MDE7XIBGnAp7GIZqwSV00Vh90.jpg?scale-down-to=512`,
                      `${imageConfig.framerusercontent}5wZzX30rg0ckdSubOe94bFGvXk.jpg?scale-down-to=512`,
                      `${imageConfig.framerusercontent}6KKDj9gnqEHDNBTD7GWaqkIug8.jpg?scale-down-to=512`,
                      `${imageConfig.framerusercontent}6OOWa2zIdujTmN3ZdUxz0qFSaRA.jpg?scale-down-to=512`,
                      `${imageConfig.framerusercontent}XQBcFnxyK3FSny302gO7Gggkdsw.jpg?scale-down-to=512`,
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-lg sm:rounded-lg ring-4 ring-white overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`Client ${index + 1}`}
                          className="h-full w-full object-cover"
                          width={32} // Width is set to match h-6 and w-6 (6 * 8 = 48px, you can adjust based on your design)
                          height={32} // Height is set to match h-6 and w-6 (same as width)
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
