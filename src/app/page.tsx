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

export default function Home() {
  return (
    <div className="w-full  overflow-hidden">
      <Navbar />
      <Hero />
      <BenefitsCarousel />
      <ServiceSection />
      <GrowTogetherSection />
      <Work />
      <Comparison />
      <Testimonial />
      <QuoteSection />
      <Footer />
    </div>
  );
}
