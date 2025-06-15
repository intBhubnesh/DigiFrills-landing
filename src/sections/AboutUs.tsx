import React from "react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Mobile/Default About Us Header and Text */}
      <div className="block lg:hidden">
        {/* About Us Header */}
        <div className="flex items-center mb-4">
          <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-xs mr-2">
            <Image
              src="https://www.svgrepo.com/show/363184/users-four-bold.svg"
              alt="Users icon"
              width={16} // equivalent to className="w-4"
              height={16} // equivalent to className="h-4"
              className="w-4 h-4"
            />
          </div>
          <h2 className="section-heading">About us</h2>
        </div>

        {/* About Text */}
        <div className="mb-8 max-w-3xl">
          <p className="text-gray-800 mb-4">
            We started as a small group of passionate creators who believed that
            great ideas deserve bold execution. What began over coffee-fueled
            brainstorming sessions has grown into a thriving digital agency
            dedicated to
            <span className="font-semibold"> helping brands stand out.</span>
          </p>

          <p className="text-gray-800 mb-4">
            Our mission is simple:{" "}
            <span className="font-semibold">
              to craft creative, impactful solutions that drive results.
            </span>
            With a vision{" "}
            <span className="font-semibold">
              to empower businesses to shine in a crowded world,
            </span>{" "}
            we combine{" "}
            <span className="font-semibold">
              strategy, design, and a touch of magic
            </span>{" "}
            to bring your ideas to life. Let&apos;s make something amazing
            together!
          </p>
        </div>
      </div>

      {/* Desktop Version with Precise Styling - Only shows on lg screens and up */}
      <div className="hidden lg:block relative h-[312.5px] mb-16">
        <div className="absolute w-[1200px] h-[312.5px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[275.75px]">
          {/* About Us Header */}
          <div className="absolute left-0 top-0">
            <div className="relative flex items-center">
              <div className="w-[108.61px] h-[33px] bg-[#F5F7F9] rounded-[25px] flex items-center">
                <div className="absolute w-[29px] h-[29px] left-[calc(50%-29px/2-37.81px)] top-[calc(50%-29px/2)] bg-[#0A0A0A] rounded-[40px] flex items-center justify-center">
                  <span className="text-white">S</span>
                </div>
                <span className="absolute w-[61.37px] h-[22.5px] left-[38px] top-[5.25px] font-inter font-medium text-[15px] leading-[22px] tracking-[-0.45px] text-[#0F0F0F]">
                  About us
                </span>
              </div>
            </div>
          </div>

          {/* Paragraph Content */}
          <div className="absolute h-[269.5px] left-0 right-[400px] top-[calc(50%-269.5px/2+21.5px)]">
            {/* First Paragraph */}
            <p className="absolute w-[805.11px] h-[122.57px] left-0 top-[1px] font-inter font-medium text-[24px] leading-[31px] tracking-[-0.96px] text-black/60">
              We started as a small group of passionate creators who believed
              that great ideas deserve bold execution. What began over
              coffee-fueled brainstorming sessions has grown into a thriving
              digital agency dedicated to{" "}
              <span className="text-black font-semibold">
                helping brands stand out.
              </span>
            </p>

            {/* Second Paragraph */}
            <p className="absolute w-[802.87px] h-[122.57px] left-0 top-[145.75px] font-inter font-medium text-[24px] leading-[31px] tracking-[-0.96px] text-black/60">
              Our mission is simple:{" "}
              <span className="text-black font-semibold">
                to craft creative, impactful solutions that drive results.
              </span>{" "}
              With a vision{" "}
              <span className="text-black font-semibold">
                to empower businesses to shine in a crowded world,
              </span>{" "}
              we combine{" "}
              <span className="text-black font-semibold">
                strategy, design, and a touch of magic
              </span>{" "}
              to bring your ideas to life. Let&apos;s make something amazing
              together!
            </p>
          </div>
        </div>
      </div>

      {/* Team Cards Section - Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mx-0 lg:w-[1200px] lg:ml-[calc(50%-1200px/2)]">
        {/* Dinesh Chowdhary */}
        <div className="relative h-[500px] overflow-hidden rounded-3xl bg-[#f2f2f2] flex flex-col shadow-sm transition-transform hover:scale-[1.01]">
          <div className="absolute top-0 left-0 z-10">
            <div className="bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3] text-white text-sm px-4 py-2 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none flex items-center min-h-[60px] gap-2 w-64">
              <span className="mr-2 text-lg">✨</span>
              CREATIVE WIZARD
            </div>
          </div>

          <div className="flex-grow pt-4 px-4 overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dsza8fjtr/image/upload/v1749970078/WhatsApp_Image_2025-06-15_at_11.11.02_b65e808e_ds4p6j.jpg"
              alt="Dinesh Chowdhary"
              width={800} // Estimate appropriate width
              height={600} // Estimate appropriate height
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="p-4 pb-6">
            <h3 className="font-bold text-xl">Dinesh Chowdhary</h3>
            <p className="text-gray-600 text-sm mb-3">
              Lead Designer / Brand Strategist
            </p>
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/dineshlavu/"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="bg-gray-100 hover:bg-black hover:text-white rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="bg-gray-100 hover:bg-black hover:text-white rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Ajay Singh Raghuwanshi */}
        <div className="relative h-[500px] overflow-hidden rounded-3xl bg-[#f2f2f2] flex flex-col shadow-sm transition-transform hover:scale-[1.01]">
          <div className="absolute top-0 left-0 z-10">
            <div className="bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3] text-white text-sm px-4 py-2 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none flex items-center min-h-[60px] gap-2 w-64">
              <span className="mr-1">✨</span>
              STRATEGY GENIUS
            </div>
          </div>
          <div className="flex-grow pt-4 px-4 overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dsza8fjtr/image/upload/v1749970067/ChatGPT_Image_Jun_15_2025_12_17_16_PM_slreld.png"
              alt="Ajay Singh Raghuwanshi"
              width={800} // adjust to your layout
              height={600} // adjust to your layout
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="p-4 pb-6">
            <h3 className="font-bold text-xl">Ajay Singh Raghuwanshi</h3>
            <p className="text-gray-600 text-sm mb-3">
              Business Development Manager
            </p>
            <div className="flex space-x-2">
              <a
                href="#"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="bg-gray-100 hover:bg-black hover:text-white rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://x.com/Ajaysingh1009"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="bg-gray-100 hover:bg-black hover:text-white rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Prithviraj Panda */}
        <div className="relative h-[500px] overflow-hidden rounded-3xl bg-[#f2f2f2] flex flex-col shadow-sm transition-transform hover:scale-[1.01]">
          <div className="absolute top-0 left-0 z-10">
            <div className="bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3] text-white text-sm px-4 py-2 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none flex items-center min-h-[60px] gap-2 w-64">
              <span className="mr-1">✨</span>
              TECH ALCHEMIST
            </div>
          </div>
          <div className="flex-grow pt-4 px-4 overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dsza8fjtr/image/upload/v1749969938/ChatGPT_Image_Jun_15_2025_12_13_24_PM_ebejms.png"
              alt="Prithviraj Panda"
              width={800} // estimate or replace with actual
              height={600} // estimate or replace with actual
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="p-4 pb-6">
            <h3 className="font-bold text-xl">Prithviraj Panda</h3>
            <p className="text-gray-600 text-sm mb-3">Lead Developer</p>
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/prithviraj-panda-707621225/"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="bg-gray-100 hover:bg-black hover:text-white rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://x.com/Prithvi00211510"
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="bg-gray-100 hover:bg-black hover:text-white rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Join Our Team Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#7988E7] via-[#667DE7] to-[#2A59E3] text-white flex flex-col justify-between shadow-sm transition-transform hover:scale-[1.01]">
          <div className="p-6">
            <h3 className="font-bold text-2xl mb-4">You can be here</h3>
            <p className="text-sm">
              We value curiosity, collaboration, and a can-do attitude. Oh, and
              coffee— lots of coffee. Come join a team that celebrates your
              unique skills and helps you unlock your full potential.
            </p>
          </div>
          <div className="p-6 mt-auto">
            <button className="w-full bg-black hover:text-[#7988E7] text-white py-2 px-4 rounded-full transition duration-200">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
