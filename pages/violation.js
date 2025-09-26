'use client';

import React from 'react';
import Navbar from '@/components/user-navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function ViolationPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">
        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            Traffic{" "}
            <span className="text-red-600 font-poppins">
              Violation{" "}
            </span>
            Management
          </p>
        </div>

        {/* Subtext */}
        <div className="max-w-[980px] mx-auto text-center font-poppins text-gray-700 leading-relaxed mb-12">
          The Violation Page empowers authorities to monitor, detect, and manage
          traffic violations efficiently. It combines AI-powered detection,
          real-time dashboards, and automated challan issuance to improve road
          safety and transparency.
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
            <li><strong>AI-Powered Violation Detection:</strong> Red-light jumping, speeding, helmetless riders, seatbelt violations, and illegal parking detected automatically.</li>
            <li><strong>Automatic E-Challan Generation:</strong> Fines auto-issued and linked with RTO/vehicle database.</li>
            <li><strong>Live Violation Feed:</strong> Real-time dashboard and map showing violation hotspots.</li>
            <li><strong>Evidence Storage:</strong> Photos, video clips, and timestamps attached for each violation.</li>
            <li><strong>Manual Reporting by Officers:</strong> Officers can add violations manually from field apps.</li>
            <li><strong>Integration with Payment Gateways:</strong> Citizens can pay fines online via UPI, net banking, or wallet.</li>
            <li><strong>Analytics & Trends:</strong> Daily, weekly, and monthly statistics and heatmaps for violations.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            2. Resources Needed
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Datasets & APIs:</strong> RTO vehicle registry API, ANPR cameras, IoT sensors, CCTV feeds.</li>
            <li><strong>AI/ML Models:</strong> Object detection for helmets, seatbelts, speeding, and signal violations.</li>
            <li><strong>Backend Infrastructure:</strong> Cloud storage for violation evidence, secure databases for challan records.</li>
            <li><strong>Frontend/UX:</strong> Officer dashboards, citizen portal, violation maps, and heatmap visualizations.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            3. User Flow (Authority Officer)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Step 1 → Login:</strong> Officer logs into the Authority Portal.</li>
            <li><strong>Step 2 → Violation Monitoring:</strong> Live feed shows detected violations with alerts.</li>
            <li><strong>Step 3 → Review & Approve:</strong> Officer validates auto-detected violations.</li>
            <li><strong>Step 4 → Challan Issuance:</strong> Auto-issued or manually approved fines.</li>
            <li><strong>Step 5 → Citizen Notification:</strong> SMS/Email/App push sent with challan and payment link.</li>
            <li><strong>Step 6 → Reports & Insights:</strong> Officers view heatmaps, repeat offenders, and statistics.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            4. Results (Impact of Violation Page)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Improved Road Safety:</strong> Reduction in repeat violations due to AI monitoring.</li>
            <li><strong>Faster Fine Collection:</strong> Digital challans speed up processing.</li>
            <li><strong>Transparency:</strong> Citizens can view photo/video evidence before paying fines.</li>
            <li><strong>Data-Driven Policing:</strong> Insights from violation trends help identify accident-prone areas.</li>
            <li><strong>Reduced Manual Workload:</strong> Automation allows officers to focus on critical tasks.</li>
          </ul>
        </div>
      </div>
      <Footer />
      <CustomCursor />
    </>
  );
}
