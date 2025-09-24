"use client";

import Navbar from "@/components/higerAuthority_Navbar";
import Footer from "@/components/higherAuthority_Footer";
import CustomCursor from "@/components/CustomCursor";
import Metadata from "@/components/metadata";
import Hero from "@/components/Analyticshero";
import Graph from "@/components/weekgraph";
import Graph2 from "@/components/PeakGraph";
import Insights from "@/components/insights" ;

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
       
      </main>
      <Graph />
      <Graph2 />
      <Insights />

      {/* Footer */}
      <Footer />

      {/* Custom Cursor */}
      <CustomCursor />
    </>
  );
}
