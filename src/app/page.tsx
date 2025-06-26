"use client";

import { useEffect, Suspense } from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import Testimonial from "@/sections/Testimonials";
import BenefitsCarousel from "../sections/BenefitsCarousel";
import QuoteSection from "@/sections/QuoteSection";
import Footer from "@/sections/Footer";
import GrowTogetherSection from "@/sections/GrowTogether";
import Comparison from "@/sections/Comparison";
import ServiceSection from "@/sections/ServiceSection";
import PortfolioSection from "@/sections/PortfolioSection";
import AboutUs from "@/sections/AboutUs";
import Faq from "@/sections/Faq";
import LoadingScreen from "@/sections/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const faqItems = [
  {
    question: "How long does it take to design a website?",
    answer:
      "The timeline varies based on project complexity, but most standard websites take between 4-8 weeks from initial consultation to launch.",
  },
  {
    question: "Do you work with small businesses or just big brands?",
    answer:
      "We work with businesses of all sizes! We're passionate about helping small businesses establish their online presence.",
  },
  {
    question: "Can I customize the packages you offer?",
    answer:
      "Absolutely! Our packages are starting points that we can tailor to your specific needs and budget.",
  },
  {
    question: "How do you measure the success of a marketing campaign?",
    answer:
      "We use a variety of KPIs including conversion rates, engagement metrics, ROI, and customer acquisition costs to measure success.",
  },
  {
    question: "What if I don't like the designs or strategies?",
    answer:
      "We include revision rounds in our process to ensure you're completely satisfied with the results.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our website or give us a call. We'll schedule a free consultation to discuss your project.",
  },
  {
    question: "Do you provide support after launching my website or campaign?",
    answer:
      "Yes, we offer various maintenance and support packages to keep your digital presence running smoothly.",
  },
  {
    question: "What makes your agency different from the rest?",
    answer:
      "Our unique combination of creative design, technical expertise, and data-driven marketing strategies sets us apart.",
  },
];

export default function Home() {
  const { scrollTo, scrollToTop } = useSmoothScroll();

  // Attach global scroll access (optional, mostly for debugging)
  useEffect(() => {
    window.smoothScrollTo = scrollTo;
    window.smoothScrollToTop = scrollToTop;

    return () => {
      delete window.smoothScrollTo;
      delete window.smoothScrollToTop;
    };
  }, [scrollTo, scrollToTop]);

  // ✅ Navigation handler passed to Navbar
  const handleSmoothScroll = (target: string, offset: number = 80) => {
    // NOTE: offset is passed as *positive* to scroll *above* the target
    scrollTo(`#${target}`, { offset: -offset, duration: 1.2 });
  };

  return (
    <SmoothScroll>
      <div className="w-full">
        <Suspense fallback={<LoadingScreen />}>
          <LoadingScreen />
        </Suspense>

        {/* ✅ Navbar with scroll handler */}
        <Navbar onNavigate={handleSmoothScroll} />

        {/* ✅ All IDs must match the "target" in Navbar */}
        <div id="home">
          <Hero />
        </div>

        <BenefitsCarousel />
        <GrowTogetherSection />

        <div id="services" className="scroll-mt-24">
          <ServiceSection />
        </div>

        <div id="projects" className="scroll-mt-24">
          <PortfolioSection />
        </div>

        <div id="process" className="scroll-mt-24">
          <Work />
          <Comparison />
        </div>

        <div id="about" className="scroll-mt-24">
          <AboutUs />
        </div>

        <div id="reviews" className="scroll-mt-24">
          <Testimonial />
        </div>

        <div id="faq" className="scroll-mt-24">
          <Faq faqs={faqItems} />
        </div>

        <QuoteSection />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
