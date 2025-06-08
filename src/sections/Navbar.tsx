"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";
import { getCalApi } from "@calcom/embed-react";

const navItems = ["Services", "Projects", "Process", "Reviews", "FaQ"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-6 md:px-12 py-4 flex justify-between items-center z-20 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/Logo.svg" alt="Logo" width={40} height={40} />
        <span className="font-semibold font-[inter] text-xl">DigiFrills</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-sm text-[#0F0F0F] font-[inter] text-[15px] font-medium leading-[22.5px] tracking-[-0.45px]">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-gray-600"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Call-to-Action Button (Desktop) - Updated to Cal.com */}
      <div className="hidden md:block">
        <button
          data-cal-link="prithviraj-panda-qtbcvw/30min"
          className="bg-black text-white px-6 py-2 rounded-full shadow-lg font-inter text-[15px] font-medium leading-[22.5px] tracking-[-0.45px] hover:bg-opacity-90 transition"
        >
          Book a Call
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg bg-black text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-sm font-medium z-50"
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-gray-600 text-lg"
              >
                {item}
              </Link>
            ))}

            {/* Mobile Cal.com Button */}
            <button
              data-cal-link="prithviraj-panda-qtbcvw/30min"
              className="bg-black text-white px-6 py-2 rounded-full shadow-lg font-inter text-[15px] font-medium leading-[22.5px] tracking-[-0.45px] mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </button>

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-black p-2 rounded-lg bg-gray-100 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} className="text-red-500" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
