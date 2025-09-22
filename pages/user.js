"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/user-navbar";
import Footer from "@/components/higherAuthority_Footer";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/services";
import AddServices from "@/components/AddServices";
import Features from "@/components/Features";
import Aipower from "@/components/Aipower";
import CustomCursor from "@/components/CustomCursor";
import Metadata from "@/components/metadata";
import Hero from "@/components/Asearch";
import ProtectedRoute from "@/components/ProtectedRoute";




// Lazy-loaded components for performance
const Profiles = dynamic(() => import("@/components/Profiles"), { ssr: false });
const Book = dynamic(() => import("@/components/Book"), { ssr: false });
const Aboutus = dynamic(() => import("@/components/Aboutus"), { ssr: false });

export default function Home() {
  return ( 
     <ProtectedRoute requiredRole="user">

    <>
      {/* Metadata for SEO */}
      <Metadata />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="hero" className="text-black">
        <Hero />
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom Cursor */}
      <CustomCursor />
    </>
     <ProtectedRoute />

  );
}
