"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 md:px-12 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-lg font-semibold">DigiFrills</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        {["Services", "Projects", "Process", "Reviews", "Pricing"].map(
          (item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-600"
            >
              {item}
            </Link>
          )
        )}
      </div>

      {/* Call-to-Action Button (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-black text-white px-6 py-2 rounded-full shadow-lg">
          Get Template
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
            className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-lg font-medium z-40"
          >
            {["Services", "Projects", "Process", "Pricing", "Reviews"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
            <button className="bg-black text-white px-6 py-2 rounded-full shadow-lg">
              Get Template
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
