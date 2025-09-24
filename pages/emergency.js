'use client';

import React from 'react';
import Navbar from '@/components/user-navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';


export default function EmergencyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">

        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            AI-Powered{" "}
            <span className="text-red-600 font-poppins">Emergency{" "}</span>
            Assistance
          </p>
        </div>

        {/* Subtext */}
        <div className="max-w-[980px] mx-auto text-center font-poppins text-gray-700 leading-relaxed mb-12">
          We strive to provide the best features and services possible. However, due to time constraints, it is not feasible to build the full end-to-end product at this stage. Therefore, our current focus is on developing the major pages and core features of this website.

          <br /><br />

          The information provided below pertains specifically to this page’s features, resources, user flow, and expected results. We are confident that these features are practically achievable, and we are committed to ensuring that they can be developed further in the next stage of the project.
        </div>

        {/* AI-Based Features */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">1. AI-Based Features for Emergency Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Real-Time Emergency Detection:</strong> AI identifies emergencies using user reports, city sensors, traffic data, and social media alerts.</li>
            <li><strong>Location-Based Assistance:</strong> Suggests nearest hospitals, police, fire stations, or help centers automatically.</li>
            <li><strong>Automated Alerts & Notifications:</strong> Sends instant notifications to authorities and nearby users.</li>
            <li><strong>Emergency Route Optimization:</strong> Provides fastest and safest routes for emergency vehicles and users.</li>
            <li><strong>Voice Assistance & Chatbot:</strong> Offers hands-free guidance during emergencies using conversational AI.</li>
            <li><strong>Resource & Contact Recommendations:</strong> Recommends emergency contacts and first-aid instructions based on situation type.</li>
            <li><strong>Predictive Risk Alerts:</strong> Forecasts potential hazards based on historical data and live feeds.</li>
            <li><strong>Incident Logging:</strong> Automatically logs emergencies for authorities to track response effectiveness.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">2. Resources Needed</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Data Sources:</strong> Live traffic APIs, city emergency services APIs, weather data, accident reports, social media alerts, public safety feeds.</li>
            <li><strong>AI/ML Models:</strong> Real-time event detection (computer vision, NLP), predictive models for risk alerts, route optimization algorithms.</li>
            <li><strong>Infrastructure:</strong> Cloud servers for real-time processing, database for incident logs, scalable notification system.</li>
            <li><strong>Frontend:</strong> Emergency dashboard with quick-access buttons, location-based map, alerts panel, and voice-assisted guidance.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">3. User Flow for Emergency Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>User Access:</strong> Opens the Emergency page and optionally allows location access.</li>
            <li><strong>Report an Emergency:</strong> User reports accidents, health emergencies, hazards, or natural disasters.</li>
            <li><strong>AI Response & Guidance:</strong> Suggests nearest emergency services, fastest routes, and first-aid instructions.</li>
            <li><strong>Alerts & Notifications:</strong> Notifies local authorities and nearby users to ensure rapid response.</li>
            <li><strong>Navigation Assistance:</strong> Provides real-time navigation for reaching safety or directing emergency vehicles.</li>
            <li><strong>Incident Logging & Feedback:</strong> Logs incident details and feedback to improve AI detection accuracy.</li>
          </ul>

          {/* Image Placeholder */}
          <div className="mt-6 flex justify-center">
            <Image src="/images/emergency-user-flow.png" alt="Emergency User Flow Diagram" className="max-w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Expected Results / Benefits */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">4. Expected Results / Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Rapid Response:</strong> Ensures quicker assistance by guiding users and notifying authorities instantly.</li>
            <li><strong>User Safety:</strong> Optimized routes, first-aid instructions, and nearest emergency resources increase safety.</li>
            <li><strong>Improved Emergency Coverage:</strong> Logs and tracks incidents for better planning and resource allocation.</li>
            <li><strong>Data-Driven Insights:</strong> Historical emergency data improves predictive risk alerts and preparedness.</li>
            <li><strong>Enhanced Awareness:</strong> Users are informed proactively of potential hazards in real-time.</li>
            <li><strong>Hands-Free Assistance:</strong> Voice-powered guidance allows users to stay safe while navigating emergencies.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}
