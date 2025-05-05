"use client";

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
import Faq from "@/sections/Faq";
import { Element } from "react-scroll";
import LoadingScreen from "@/sections/LoadingScreen";
import { Suspense } from "react";

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
  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <LoadingScreen />
      </Suspense>

      <Navbar />
      <Hero />
      <BenefitsCarousel />
      <GrowTogetherSection />

      {/* Services Section */}
      <Element name="services" className="scroll-mt-24">
        <ServiceSection />
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="scroll-mt-24">
        <PortfolioSection />
      </Element>

      {/* Process Section */}
      <Element name="process" className="scroll-mt-24">
        <Work />
        <Comparison />
      </Element>

      {/* Reviews Section */}
      <Element name="reviews" className="scroll-mt-24">
        <Testimonial />
      </Element>

      {/* Pricing Section */}
      <Element name="pricing" className="scroll-mt-24">
        <Faq faqs={faqItems} />
      </Element>

      <QuoteSection />
      <Footer />
    </div>
  );
}
