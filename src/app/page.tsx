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

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BenefitsCarousel />
      <GrowTogetherSection />
      <Work />
      <Comparison />
      <Testimonial />
      <QuoteSection />
      <Footer />
    </div>
  );
}
