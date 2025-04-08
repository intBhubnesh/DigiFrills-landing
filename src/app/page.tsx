<<<<<<< HEAD

"use client";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import BenefitsCarousel from "../sections/BenefitsCarousel";
=======
import Image from "next/image";
import Testimonial from '@/app/Components/Testimonials';
>>>>>>> cc8fd3b (Improved testimonial card styles)

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BenefitsCarousel />
    </div>
    <Testimonial />
    </>
  );
}
