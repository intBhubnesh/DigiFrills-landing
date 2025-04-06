"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  position: string;
  company?: string;
  logoSrc?: string;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  clientName, 
  position, 
  company, 
  logoSrc, 
  avatarSrc 
}) => {
  return (
    <div className="p-4 rounded-lg flex flex-col">
      <div className="mb-4 flex flex-row bg-gray-50 p-6 rounded-xl w-full max-w-7xl">
        <span className="text-orange-600 text-7xl">&quot</span>
        <p className="text-black text-base p-4">{quote}</p>
      </div>
      <div className='flex flex-col p-6 py-1'>
        <div className="flex items-center flex-row">
          <div className="w-16 h-16 mr-4 relative">
            <Image 
              src={avatarSrc || "/api/placeholder/60/60"} 
              alt={clientName} 
              className="rounded-full object-cover"
              fill
            />
          </div>
          {logoSrc && (
            <div className="w-16 h-8 mr-4 relative">
              <Image 
                src={logoSrc} 
                alt={`${company} logo`}
                className="rounded-full object-contain p-1"
                fill
              />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-black text-lg">{clientName}</h3>
          <p className="text-gray-600 text-sm uppercase tracking-wide">
            {position}{company ? `, ${company}` : ''}
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
  imageUrl?: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ name, position, company, imageUrl }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div 
        className="relative w-full h-80 bg-gray-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={imageUrl || "/api/placeholder/400/320"} 
          alt={`${name} video testimonial`}
          className="object-cover grayscale"
          fill
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-22 h-14 rounded-xl flex items-center justify-center ${isHovered ? 'bg-red-600' : 'bg-gray-800'} transition-colors duration-300`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="white" 
              className="w-8 h-8"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-black text-xl">{name}</h3>
        <p className="text-gray-600 uppercase text-sm tracking-wide">
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
  imageUrl: string;
}

const Testimonial: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Working with this team felt like having a secret weapon. They took our scattered ideas and turned them into a website that screams 'wow!' Our customers can't stop raving about it!",
      clientName: "Tobias Green",
      position: "FOUNDER",
      company: "GREENSPARK INNOVATIONS",
      logoSrc: "https://framerusercontent.com/images/3Y1x3Iz9CnzoCeLjfRflZMOiF0.svg",
      avatarSrc: "https://framerusercontent.com/images/UsPZoUaacWnpNKo5ow2OkPMrpw0.jpg"
    },
    {
      quote: "Finally, an agency that speaks our language! They understood our vision better than we did and brought it to life in a way that exceeded expectations. 10/10 would recommend!",
      clientName: "Silas Leighton",
      position: "MANAGING DIRECTOR",
      company: "VENTUREVISTA",
      logoSrc: "https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg",
      avatarSrc: "https://framerusercontent.com/images/ItbAaHsEW3CUnztIn91H9TiuKHc.jpg?scale-down-to=512"
    },
    {
      quote: "I came in with high hopes, and they absolutely blew me away. From strategy to execution, every detail was on point. I'm telling everyone I know—hire them!",
      clientName: "Orion Vance",
      position: "CEO",
      company: "LUNAR LUX CO.",
      logoSrc: "",
      avatarSrc: "https://framerusercontent.com/images/2Zm0QnC5KdYbFQFAK2RQ8DRekU.jpg"
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
      imageUrl: ""
    },
    {
      name: "Thaddeus Montgomery",
      position: "OWNER",
      company: "GOLDGARDEN",
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  return (
    <>
      <div className="bg-white py-16 px-4 items-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8 bg-grey-60">
            <div className="bg-black text-white rounded-full p-2 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium text-black text-xs">Client Stories</span>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Hear stories 
              <span className="inline-block mx-2 relative">
                <div className="flex -space-x-2 overflow-hidden">
                  {["https://framerusercontent.com/images/MDE7XIBGnAp7GIZqwSV00Vh90.jpg?scale-down-to=512", "https://framerusercontent.com/images/5wZzX30rg0ckdSubOe94bFGvXk.jpg?scale-down-to=512", "https://framerusercontent.com/images/6KKDj9gnqEHDNBTD7GWaqkIug8.jpg?scale-down-to=512", "https://framerusercontent.com/images/6OOWa2zIdujTmN3ZdUxz0qFSaRA.jpg?scale-down-to=512", "https://framerusercontent.com/images/XQBcFnxyK3FSny302gO7Gggkdsw.jpg?scale-down-to=512"].map((i) => (
                    <div key={i} className="inline-block h-12 w-12 rounded-sm ring-2 ring-white relative">
                      <Image 
                        src={i} 
                        alt={'Client'}
                        fill
                        className="rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </span> 
              straight from the people we helped!
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                clientName={testimonial.clientName}
                position={testimonial.position}
                company={testimonial.company}
                logoSrc={testimonial.logoSrc}
                avatarSrc={testimonial.avatarSrc}
              />
            ))}
          </div>
        </div>
      </div>
  
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <VideoTestimonial 
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );   
};
  
export default Testimonial;