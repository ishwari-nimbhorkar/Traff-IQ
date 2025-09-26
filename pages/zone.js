'use client';

import React from 'react';
import Navbar from '@/components/higerAuthority_Navbar';
import Footer from '@/components/higherAuthority_Footer';
import CustomCursor from '@/components/CustomCursor';

export default function ZonesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">
        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            Zones{" "}
            <span className="text-red-600 font-poppins">
              Management{" "}
            </span>
            for Authorities
          </p>
        </div>

        {/* Subtext */}
        <div className="max-w-[980px] mx-auto text-center font-poppins text-gray-700 leading-relaxed mb-12">
          The Zones Page empowers city authorities with intelligent monitoring,
          control, and predictive insights. It ensures effective congestion
          management, emergency handling, and data-driven decision-making.
          <br /><br />
          The details below outline the features, resources, user flow, and
          expected results of this section.
        </div>

        {/* Features */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            1. Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Zone Management Dashboard:</strong> Create, edit, merge, or delete zones with map drawing tools; assign priority levels.</li>
            <li><strong>Real-Time Traffic Monitoring:</strong> Live congestion overlays (red/yellow/green), vehicle density, and incident tagging.</li>
            <li><strong>AI Insights & Predictive Analytics:</strong> Predictive heatmaps, accident hotspot alerts, and closure/event simulations.</li>
            <li><strong>Control Tools:</strong> Adjust traffic signals dynamically, push emergency rerouting instructions.</li>
            <li><strong>Zone Reports:</strong> Daily/weekly stats, downloadable reports (PDF/Excel), zone comparisons.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            2. Resources Needed
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Datasets & APIs:</strong> Google Maps/TomTom APIs, IoT camera feeds, road infrastructure data.</li>
            <li><strong>AI/ML Resources:</strong> Congestion & accident prediction models, time-series analysis.</li>
            <li><strong>Backend Infrastructure:</strong> Database for zones & historical data, real-time microservices (Kafka/Redis).</li>
            <li><strong>Frontend/UX:</strong> Interactive map (Leaflet/Google Maps), overlays, analytics dashboard with charts/tables.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            3. User Flow (Authority Officer)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Step 1 → Login:</strong> Officer logs into the Authority Dashboard.</li>
            <li><strong>Step 2 → Access Zones Page:</strong> Navigates from sidebar to Zones.</li>
            <li><strong>Step 3 → View Existing Zones:</strong> Map shows live status (red/yellow/green); sidebar lists stats.</li>
            <li><strong>Step 4 → Action Choices:</strong> Monitor, Manage, Control, or Analyze zones.</li>
            <li><strong>Step 5 → Take Action:</strong> Example – congestion in Zone A → activate signals + send advisory.</li>
            <li><strong>Step 6 → Results:</strong> Traffic improves → AI confirms reduced delay → authority logs action.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            4. Results (Impact of Zones Page)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Better Congestion Control:</strong> Live monitoring pinpoints problem areas quickly.</li>
            <li><strong>Faster Emergency Handling:</strong> Smart rerouting for ambulances, fire trucks, VIP movement.</li>
            <li><strong>Data-Driven Decisions:</strong> AI predictions help prevent jams & accidents.</li>
            <li><strong>Operational Efficiency:</strong> Authorities focus on problematic zones instead of whole city.</li>
            <li><strong>Transparency:</strong> Exportable reports for planning & accountability.</li>
          </ul>
        </div>
      </div>
      <Footer />
      <CustomCursor />
    </>
  );
}
