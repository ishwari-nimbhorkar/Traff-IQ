'use client';

import React from 'react';
import Navbar from '@/components/higerAuthority_Navbar';
import Footer from '@/components/higherAuthority_Footer';
import CustomCursor from '@/components/CustomCursor';

export default function IoTHubPage() {
  return (
    <>
    <CustomCursor />
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">
        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            IoT{" "}
            <span className="text-red-600 font-poppins">
              Hub{" "}
            </span>
            for Authorities
          </p>
        </div>

        {/* Subtext */}
        <div className="max-w-[980px] mx-auto text-center font-poppins text-gray-700 leading-relaxed mb-12">
          The IoT Hub Page connects traffic signals with public transport,
          fire brigade, police, and ambulances. It enables real-time
          monitoring, emergency handling, and AI-driven automation to ensure
          faster response and smoother traffic operations.
          <br /><br />
          Below are the features, resources, user flow, and expected results
          of this section.
        </div>

        {/* Features */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            1. Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>IoT Integration Dashboard:</strong> Central hub showing all connected signals and emergency vehicles with live status.</li>
            <li><strong>Connected Agencies:</strong> 
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Public Transport – signals prioritize buses in peak hours.</li>
                <li>Fire Brigade – green corridor support for fire trucks.</li>
                <li>Police – real-time routing for law & order and VIP movements.</li>
                <li>Ambulances – automatic signal preemption for fastest hospital access.</li>
              </ul>
            </li>
            <li><strong>Signal Automation & Overrides:</strong> AI-driven adaptive signals with manual override for critical cases.</li>
            <li><strong>Incident & Emergency Handling:</strong> Detects approaching emergency vehicles and prioritizes their movement.</li>
            <li><strong>Analytics & Reports:</strong> Logs device uptime, response efficiency, and emergency reports (PDF/Excel).</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            2. Resources Needed
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Datasets & APIs:</strong> GPS tracking APIs for buses, police, fire, ambulances; traffic signal IoT controllers; traffic data feeds.</li>
            <li><strong>AI/ML Resources:</strong> Vehicle detection via CCTV, predictive congestion analytics, signal priority algorithms.</li>
            <li><strong>Backend Infrastructure:</strong> IoT Hub platform (Azure/AWS/Google), Kafka/Redis for streaming, secure databases.</li>
            <li><strong>Frontend/UX:</strong> Map overlays of connected vehicles and signals, color-coded signal states, agency dashboards.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            3. User Flow (Authority Officer)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Step 1 → Login:</strong> Officer logs into Authority Dashboard.</li>
            <li><strong>Step 2 → Open IoT Hub:</strong> Navigates to IoT Hub page.</li>
            <li><strong>Step 3 → View Connected Devices:</strong> Map shows IoT-enabled signals and vehicles.</li>
            <li><strong>Step 4 → Monitor Status:</strong> Real-time updates of signals, congestion, and emergency vehicles.</li>
            <li><strong>Step 5 → Action Choices:</strong> Auto Mode (AI prioritizes) or Manual Override (officer forces green corridor).</li>
            <li><strong>Step 6 → Emergency Handling:</strong> Ambulance/fire truck approaching → system auto-creates green path.</li>
            <li><strong>Step 7 → Reports & Logs:</strong> Actions recorded and performance reports generated.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            4. Results (Impact of IoT Hub Page)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Faster Emergency Response:</strong> Ambulances and fire trucks save critical minutes.</li>
            <li><strong>Improved Public Transport:</strong> Bus delays reduced via smart prioritization.</li>
            <li><strong>Better Law & Order:</strong> Police units get optimized priority routing.</li>
            <li><strong>Citywide Coordination:</strong> All agencies operate through one IoT platform.</li>
            <li><strong>Data Insights:</strong> Reports improve planning, transparency, and upgrades.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
