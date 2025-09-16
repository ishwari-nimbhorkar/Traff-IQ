"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/services";
import AddServices from "@/components/AddServices";
import Features from "@/components/Features";
import Aipower from "@/components/Aipower";
import CustomCursor from "@/components/CustomCursor";
import dynamic from "next/dynamic";
import Metadata from "@/components/metadata"

// Lazy-loaded components for performance
const Profiles = dynamic(() => import("@/components/Profiles"), { ssr: false });
const Book = dynamic(() => import("@/components/Book"), { ssr: false });
const Aboutus = dynamic(() => import("@/components/Aboutus"), { ssr: false });

export default function Home() {
  return (
    <>
     
      <Navbar />
      <main id="hero" className="text-black">
        <Hero />
        <LogoMarquee />

        <section id="services">
          <Services />
          <AddServices />
        </section>

        <section id="features">
          <Features />
          <Aipower />
        </section>

        <section id="profiles">
          <Profiles />
        </section>

        <section id="book">
          <Book />
        </section>

        <section id="aboutus">
          <Aboutus />
        </section>
      </main>
      <Footer />
      <Metadata />
      <CustomCursor />
    </>
  );
}
