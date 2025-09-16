// app/essential/page.js
"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const userFeatures = [
  "Personalized Dashboard with quick actions",
  "Live Traffic Updates and congestion map",
  "AI Route Suggestions & Optimization",
  "Digital E-Challan & Online Payment",
  "Report Violations and Road Issues",
  "Emergency Assistance with SOS & live location",
  "Profile & Vehicle Document Management",
  "Digital Rules & Regulations Handbook",
  "Permit & Pass Online Applications",
  "Feedback & Support via Helpdesk/Chatbot",
];

const authorityFeatures = [
  "Admin Dashboard with citywide overview",
  "Live Traffic Monitoring with CCTV & AI detection",
  "Violation & Challan Management",
  "Incident & Emergency Response System",
  "Permit & Pass Management Portal",
  "User Reports & Complaints Management",
  "Digital Law Book & Regulation Updates",
  "Analytics & Insights with predictive trends",
  "Officer & Role Management",
  "System Settings & IoT Integrations",
  "Communication & Public Alerts",
  "Audit & Compliance Reporting",
];

const userServices = [
  "Safe & Informed Travel with real-time alerts",
  "Faster Journeys using AI route optimization",
  "Easy Fine Management with digital payments",
  "Transparency & Awareness of rules and penalties",
  "Convenient Online Permits & Digital Passes",
  "Emergency Safety through instant SOS help",
  "Active Participation in traffic safety via reports",
];

const authorityServices = [
  "Efficient Monitoring through live feeds & dashboards",
  "Automated Enforcement with AI challan detection",
  "Quick Emergency Response with integrated services",
  "Data-Driven Planning using insights & forecasts",
  "Revenue Management from fines & permits",
  "Improved Public Communication via alerts",
  "Accountability & Transparency with audit trails",
  "Better Resource Utilization with officer tracking",
];

export default function EssentialPage() {
  return (
    <div className={poppins.className}>
      <Navbar />

      <section
        id="essentialPage"
        className="w-full py-20"
        style={{
          backgroundColor: "#f6f6f6",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-black container mx-auto">
          <div className="mx-auto max-w-5xl px-6 sm:p-0">
            {/* Project Title */}
            <h1 className="text-4xl mt-10 font-bold text-center leading-tight mb-10">
              Essential Information – <span className="text-black">Traff IQ</span>
            </h1>

            {/* About Section */}
            <div id="about" className="text-center my-16">
              <h2 className="text-2xl font-semibold mb-4">About Traff IQ</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Traff IQ</strong> is an <strong>AI-powered traffic control and management system</strong> designed to revolutionize urban mobility. Leveraging AI and real-time analytics, Traff IQ helps authorities and citizens optimize flow, reduce congestion, and improve road safety.
              </p>

              <p className="text-gray-600 leading-relaxed mb-2">
                By providing predictive patterns and adaptive control solutions, Traff IQ enables cities to respond dynamically to changing traffic conditions and make smarter, safer mobility decisions.
              </p>

              <p className="text-gray-600 text-[17px] leading-relaxed">
                Traff IQ: powering the future of urban mobility.
              </p>
            </div>

            {/* Features Section */}
            <div id="features" className="my-16">
              <h2 className="text-2xl font-semibold text-center mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userFeatures.map((item, idx) => (
                  <Card key={`uf-${idx}`} title={item} />
                ))}

                {/* Authorities features follow */}
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Authority Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {authorityFeatures.map((item, idx) => (
                  <Card key={`af-${idx}`} title={item} />
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div id="services" className="my-16">
              <h2 className="text-2xl font-semibold text-center mb-8">Services Provided</h2>

              <h3 className="text-xl font-semibold mb-4">For Users</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {userServices.map((item, idx) => (
                  <Card key={`us-${idx}`} title={item} />
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">For Authorities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {authorityServices.map((item, idx) => (
                  <Card key={`as-${idx}`} title={item} />
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <Footer />
      <CustomCursor />
    </div>
  );
}

/* --- Small presentational Card component used above --- */
function Card({ title }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <span className="mt-1" aria-hidden>
          {/* simple check/traffic-ish icon (inline SVG) */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-black" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <p className="text-gray-700">{title}</p>
      </div>
    </div>
  );
}
