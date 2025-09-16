// app/sitemap/page.js
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

const siteSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "#" },
      { name: "About Traff IQ", href: "#" },
      { name: "Essential Information", href: "#" },
      { name: "Digital Rule & Law Book", href: "#" },
      { name: "Services & Features", href: "#" },
    ],
  },
  {
    title: "User Section",
    links: [
      { name: "Dashboard", href: "#" },
      { name: "Live Traffic Updates", href: "#" },
      { name: "Route Suggestions & Optimization", href: "#" },
      { name: "E-Challan & Fines", href: "#" },
      { name: "Report Violations", href: "#" },
      { name: "Emergency Assistance", href: "#" },
      { name: "User Profile & Vehicle Details", href: "#" },
      { name: "Permit & Pass Applications", href: "#" },
      { name: "Feedback & Support", href: "#" },
    ],
  },
  {
    title: "Authority Section",
    links: [
      { name: "Admin Dashboard", href: "#" },
      { name: "Live Traffic Monitoring", href: "#" },
      { name: "Violation & Challan Management", href: "#" },
      { name: "Incident & Emergency Management", href: "#" },
      { name: "Permit & Pass Management", href: "#" },
      { name: "User Reports & Complaints", href: "#" },
      { name: "Law Book Management", href: "#" },
      { name: "Analytics & Insights", href: "#" },
      { name: "Officer & Role Management", href: "#" },
      { name: "System Settings & Integrations", href: "#" },
      { name: "Communication & Alerts", href: "#" },
      { name: "Audit & Compliance Reports", href: "#" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Copyright Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className={poppins.className}>
      <Navbar />

      <section
        id="sitemapPage"
        className="w-full py-20"
        style={{
          backgroundColor: "#f6f6f6",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-black container mx-auto">
          <div className="mx-auto max-w-5xl px-6 sm:p-0">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center mt-10 leading-tight mb-10">
              Sitemap – <span className="text-black">Traff IQ</span>
            </h1>

            {/* Sitemap Sections */}
            {siteSections.map((section, idx) => (
              <div key={idx} className="my-12">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.links.map((link, i) => (
                    <Card key={i} title={link.name} href={link.href} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CustomCursor />
    </div>
  );
}

/* --- Card Component --- */
function Card({ title, href }) {
  return (
    <Link href={href}>
      <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer">
        <div className="flex items-start gap-4">
          <span className="mt-1" aria-hidden>
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
    </Link>
  );
}
