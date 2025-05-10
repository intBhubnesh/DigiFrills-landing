"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          <div className="w-full flex flex-col items-center justify-center px-[20px] gap-[5px]">
            {/* Icon + Label */}
          <div className=" h-[33px] gap-1 rounded-[25px] bg-[#f5f7f9] inline-flex justify-between items-center pt-[2px] pb-[2px] pr-[10px] pl-[2px]">
          <div className="size-[32px]   rounded-full flex items-center justify-center "
            style={{
                background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
            }}
            >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 11 12" fill="none">
  <path d="M6.1875 8.71484C6.1875 8.85082 6.14718 8.98374 6.07164 9.0968C5.99609 9.20986 5.88872 9.29798 5.7631 9.35001C5.63747 9.40205 5.49924 9.41566 5.36588 9.38913C5.23252 9.36261 5.11001 9.29713 5.01387 9.20098C4.91772 9.10483 4.85224 8.98233 4.82571 8.84897C4.79918 8.71561 4.8128 8.57737 4.86483 8.45175C4.91687 8.32612 5.00499 8.21875 5.11805 8.14321C5.23111 8.06767 5.36403 8.02734 5.5 8.02734C5.68234 8.02734 5.85721 8.09978 5.98614 8.22871C6.11507 8.35764 6.1875 8.53251 6.1875 8.71484ZM10.1406 6.48047C10.1406 7.3983 9.86846 8.29552 9.35854 9.05866C8.84862 9.82181 8.12386 10.4166 7.27589 10.7678C6.42793 11.1191 5.49485 11.211 4.59466 11.0319C3.69447 10.8529 2.86759 10.4109 2.21858 9.76189C1.56958 9.11288 1.1276 8.286 0.948545 7.38581C0.769486 6.48562 0.861386 5.55254 1.21262 4.70458C1.56386 3.85662 2.15866 3.13185 2.92181 2.62193C3.68496 2.11201 4.58217 1.83984 5.5 1.83984C6.73035 1.84121 7.90992 2.33057 8.77991 3.20056C9.6499 4.07055 10.1393 5.25012 10.1406 6.48047ZM9.10938 6.48047C9.10938 5.7666 8.89769 5.06877 8.50109 4.47521C8.10448 3.88165 7.54078 3.41903 6.88125 3.14584C6.22172 2.87266 5.496 2.80118 4.79585 2.94045C4.0957 3.07972 3.45257 3.42347 2.94779 3.92826C2.44301 4.43304 2.09925 5.07616 1.95998 5.77631C1.82071 6.47646 1.89219 7.20219 2.16537 7.86172C2.43856 8.52124 2.90118 9.08495 3.49474 9.48155C4.0883 9.87816 4.78613 10.0898 5.5 10.0898C6.45695 10.0888 7.37442 9.70822 8.05108 9.03155C8.72775 8.35488 9.10835 7.43742 9.10938 6.48047ZM5.5 3.73047C4.45758 3.73047 3.60938 4.50133 3.60938 5.44922V5.62109C3.60938 5.75785 3.6637 5.889 3.7604 5.9857C3.8571 6.08239 3.98825 6.13672 4.125 6.13672C4.26175 6.13672 4.39291 6.08239 4.4896 5.9857C4.5863 5.889 4.64063 5.75785 4.64063 5.62109V5.44922C4.64063 5.07023 5.02735 4.76172 5.5 4.76172C5.97266 4.76172 6.35938 5.07023 6.35938 5.44922C6.35938 5.8282 5.97266 6.13672 5.5 6.13672C5.36325 6.13672 5.2321 6.19104 5.1354 6.28774C5.0387 6.38444 4.98438 6.51559 4.98438 6.65234V6.99609C4.98407 7.12348 5.03093 7.24648 5.11593 7.34137C5.20092 7.43626 5.31804 7.49632 5.4447 7.50999C5.57135 7.52365 5.69858 7.48995 5.80186 7.41537C5.90514 7.34079 5.97716 7.23062 6.00403 7.10609C6.80238 6.905 7.39063 6.23855 7.39063 5.44922C7.39063 4.50133 6.54242 3.73047 5.5 3.73047Z" fill="white"/>
</svg>
            </div>
            <div className="section-tag text-nowrap">
              FAQ
            </div>
          </div>

            {/* Heading */}

            <h1 className=" text-4xl font-bold text-gray-900 mt-4">
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
                  className="text-2xl text-gray-500 hover:text-white hover:bg-[#0260EB] rounded-full w-8 h-8 flex items-center justify-center transition-colors"
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
