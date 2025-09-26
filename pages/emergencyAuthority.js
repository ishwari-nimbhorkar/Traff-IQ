'use client';

import React from 'react';
import Navbar from '@/components/higerAuthority_Navbar';
import Footer from '@/components/higherAuthority_Footer';
import CustomCursor from '@/components/CustomCursor';

export default function EmergencyPage() {
  return (
    <>
    <CustomCursor />
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">
        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            Emergency{" "}
            <span className="text-red-600 font-poppins">
              Management{" "}
            </span>
            for Authorities
          </p>
        </div>

        {/* Subtext */}
        <div className="max-w-[980px] mx-auto text-center font-poppins text-gray-700 leading-relaxed mb-12">
          The Emergency Page equips authorities with real-time tools to detect,
          manage, and resolve emergency situations. It enables faster response,
          improved coordination, and AI-backed decision-making during critical
          events.
          <br /><br />
          The sections below outline its features, resources, user flow, and
          expected results.
        </div>

        {/* Features */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            1. Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Emergency Dashboard:</strong> Centralized panel showing all ongoing and past emergencies with map view and severity tagging.</li>
            <li><strong>Incident Detection & Alerts:</strong> AI-based classification of incidents with automatic alerts and smart prioritization.</li>
            <li><strong>Emergency Response Management:</strong> Dynamic rerouting, green corridors, and cross-department coordination hub.</li>
            <li><strong>AI Insights & Predictive Support:</strong> Impact prediction, safe zone suggestions, and early warnings.</li>
            <li><strong>Reporting & Post-Incident Review:</strong> Incident summaries, response time analysis, and downloadable reports.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            2. Resources Needed
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Datasets & APIs:</strong> Traffic APIs, IoT camera feeds, emergency services data, weather/disaster warnings.</li>
            <li><strong>AI/ML Resources:</strong> Computer vision for accident/fire detection, predictive escalation analytics, route optimization models.</li>
            <li><strong>Backend Infrastructure:</strong> Real-time alert microservices, incident logging database, integrations with police/hospitals/fire services.</li>
            <li><strong>Frontend/UX:</strong> Emergency control panel with map overlays, severity filters, and notification broadcasting system.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            3. User Flow (Authority Officer)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Step 1 → Login:</strong> Officer logs into the Authority Dashboard.</li>
            <li><strong>Step 2 → Navigate to Emergency Page:</strong> Selects {"Emergency"} from sidebar.</li>
            <li><strong>Step 3 → View Incidents:</strong> Map + list view shows active emergencies with severity indicators.</li>
            <li><strong>Step 4 → Assess Situation:</strong> Officer checks live feeds, AI predictions, and severity level.</li>
            <li><strong>Step 5 → Take Action:</strong> Dispatch emergency services, create green corridors, broadcast advisories.</li>
            <li><strong>Step 6 → Monitor Response:</strong> Track service movement, ETA, and progress in real-time.</li>
            <li><strong>Step 7 → Resolution & Report:</strong> Incident resolved → system logs details → authority downloads report.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
            4. Results (Impact of Emergency Page)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Faster Emergency Response:</strong> AI + live data enables quick decisions.</li>
            <li><strong>Lives Saved:</strong> Green corridors and rerouting improve response times.</li>
            <li><strong>Reduced Chaos:</strong> Smart traffic control and advisories prevent secondary accidents.</li>
            <li><strong>Cross-Agency Coordination:</strong> Unified platform for police, hospitals, and fire departments.</li>
            <li><strong>Accountability & Planning:</strong> Reports improve preparedness for future incidents.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
