"use client";

import React from "react";
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

      <main className="bg-gray-100 bg-center bg-cover w-full py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-black text-center mb-16">
            Essential Information – <span className="text-black">Traff IQ</span>
          </h1>

          {/* About Section */}
          <section id="about" className="text-center mb-16">
            <h2 className="text-2xl text-black font-semibold mb-4">About Traff IQ</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Traff IQ</strong> is an <strong>AI-powered traffic control and management system</strong> designed to revolutionize urban mobility. Leveraging AI and real-time analytics, Traff IQ helps authorities and citizens optimize flow, reduce congestion, and improve road safety.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              By providing predictive patterns and adaptive control solutions, Traff IQ enables cities to respond dynamically to changing traffic conditions and make smarter, safer mobility decisions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Traff IQ: powering the future of urban mobility.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Key Features</h2>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">For Users</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {userFeatures.map((item, idx) => (
                <Card key={`uf-${idx}`} title={item} />
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">For Authorities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authorityFeatures.map((item, idx) => (
                <Card key={`af-${idx}`} title={item} />
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Services Provided</h2>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">For Users</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {userServices.map((item, idx) => (
                <Card key={`us-${idx}`} title={item} />
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-700  mb-4">For Authorities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authorityServices.map((item, idx) => (
                <Card key={`as-${idx}`} title={item} />
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <CustomCursor />
    </div>
  );
}

/* Card Component */
function Card({ title }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <span className="mt-1" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-gray-700">{title}</p>
      </div>
    </div>
  );
}
