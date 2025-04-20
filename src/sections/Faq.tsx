"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

const Faq = ({ faqs }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="md:grid md:grid-cols-2 md:gap-12 relative">
        {/* Sticky Left Side */}
        <div className="md:sticky md:top-12 h-fit self-start">
          <div className="flex flex-col">
            {/* Icon + Label */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full w-fit">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="FAQ icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-sm font-medium text-gray-800">
                Frequently Asked Questions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-900 mt-4">
              <div>FAQ It Up! Your curiosity</div>
              <div>meets our expertise</div>
              <div>&mdash;let&apos;s clear things up!</div>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-500 text-lg mt-4">
              We&apos;ve gathered all the important info right here.
              <br />
              Explore our FAQs and find the answers you need.
            </p>
          </div>
        </div>

        {/* Scrollable Right Side */}
        <div className="mt-10 md:mt-0 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[rgb(245,247,249)] border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-2xl text-gray-500 hover:text-white hover:bg-[rgb(241,85,51)] rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 bg-white rounded-b-lg"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
