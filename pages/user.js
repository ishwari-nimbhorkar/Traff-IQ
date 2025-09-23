"use client";

import Navbar from "@/components/user-navbar";
import Footer from "@/components/higherAuthority_Footer";
import Hero from "@/components/Asearch";
import India from "@/components/india";
import Driving from "@/components/travelindia";
import CustomCursor from "@/components/CustomCursor";
import Metadata from "@/components/metadata";

export default function UserDashboard() {
  return (
    <>
      {/* Metadata for SEO */}
      <Metadata />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="text-black">
        <Hero />
        <India />
        <Driving />
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom Cursor */}
      <CustomCursor />
    </>
  );
}
