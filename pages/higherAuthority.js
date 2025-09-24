"use client";

import dynamic from "next/dynamic";
import ProtectedRoute from "@/components/ProtectedRoute"; // Import HOC
import Navbar from "@/components/higerAuthority_Navbar";
import Footer from "@/components/higherAuthority_Footer";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/services";
import Driving from '@/components/travelindia'
import AddServices from "@/components/AddServices";
import Features from "@/components/Features";
import India from "@/components/india"
import Aipower from "@/components/Aipower";
import CustomCursor from "@/components/CustomCursor";
import Metadata from "@/components/metadata";
import Hero from "@/components/Asearch";
import Timecard from "@/components/Timecard"
import TrafficStats from "@/components/Trafficstats";
// Lazy-loaded components for performance
const Profiles = dynamic(() => import("@/components/Profiles"), { ssr: false });
const Book = dynamic(() => import("@/components/Book"), { ssr: false });
const Aboutus = dynamic(() => import("@/components/Aboutus"), { ssr: false });

export default function Home() {
  return (
    <ProtectedRoute requiredRole="Admin">
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
    </ProtectedRoute>
  );
}