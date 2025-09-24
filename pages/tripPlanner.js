'use client';

import React from 'react';
import Navbar from '@/components/user-navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TripPlannerPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">

        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            AI-Based{" "}
            <span className="text-red-600 font-poppins">Trip Planner{" "}</span>
            & Journey Optimization
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
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">1. AI-Based Features for Trip Planner</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Intelligent Route Planning:</strong> AI suggests optimal routes based on distance, traffic, road conditions, and user preferences.</li>
            <li><strong>Dynamic ETA Calculation:</strong> Adjusts estimated arrival times in real-time based on traffic, weather, and events.</li>
            <li><strong>Personalized Recommendations:</strong> Suggests stops, restaurants, attractions, or fuel stations based on user preferences and past behavior.</li>
            <li><strong>Multi-Modal Travel Support:</strong> Combines car, public transport, walking, and cycling options for optimized planning.</li>
            <li><strong>Predictive Traffic & Hazards:</strong> Forecast congestion, accidents, or construction zones to avoid delays.</li>
            <li><strong>Cost & Environmental Optimization:</strong> Suggests routes that minimize fuel consumption, tolls, or emissions.</li>
            <li><strong>Voice-Powered Assistance:</strong> Conversational AI provides route guidance, alerts, and travel tips hands-free.</li>
            <li><strong>Smart Alerts:</strong> Notifies users of unexpected delays, roadblocks, weather changes, or events affecting the journey.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">2. Resources Needed</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Data Sources:</strong> Live traffic APIs (Google Maps, TomTom, HERE), weather APIs, event calendars, historical travel patterns, points of interest databases.</li>
            <li><strong>AI/ML Models:</strong> Time-series forecasting for traffic prediction, route optimization (Dijkstra, A*, reinforcement learning), recommendation models for stops/attractions, NLP for conversational AI and voice guidance.</li>
            <li><strong>Infrastructure:</strong> Backend server for real-time computation, database for storing historical routes, cloud services for scalability.</li>
            <li><strong>Frontend:</strong> Interactive map with layers for traffic, stops, and alerts; user-friendly forms for inputting destinations, preferences, and travel modes; notifications system.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">3. User Flow for Trip Planner</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>User Access:</strong> User opens the Trip Planner page; optionally allows location access.</li>
            <li><strong>Input Destination & Preferences:</strong> Enter start/end locations, preferred travel modes, stops, or points of interest.</li>
            <li><strong>AI Route Suggestions:</strong> System generates 2–3 optimal routes considering traffic, ETA, cost, and user preferences.</li>
            <li><strong>Route Selection:</strong> User selects preferred route; AI displays estimated travel time, stops, and alerts.</li>
            <li><strong>Navigation & Alerts:</strong> Real-time guidance with map overlay; alerts for traffic, hazards, weather, or events.</li>
            <li><strong>Trip Monitoring:</strong> AI dynamically adjusts route if unexpected delays occur.</li>
            <li><strong>Trip Completion & Feedback:</strong> Trip data logged to improve AI predictions; user provides feedback on route accuracy and suggestions.</li>
          </ul>

          {/* Image Placeholder */}
          <div className="mt-6 flex justify-center">
            <Image src="/images/trip-planner-user-flow.png" alt="Trip Planner User Flow Diagram" className="max-w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Expected Results / Benefits */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">4. Expected Results / Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Reduced Travel Time:</strong> AI avoids congestion and dynamically adjusts routes.</li>
            <li><strong>Enhanced User Experience:</strong> Personalized stops, recommendations, and voice guidance improve journey planning.</li>
            <li><strong>Increased Safety:</strong> Early alerts for hazards, accidents, and weather conditions.</li>
            <li><strong>Cost & Fuel Efficiency:</strong> Routes optimized for minimal fuel consumption, tolls, or environmental impact.</li>
            <li><strong>Data Insights:</strong> Aggregated travel data informs future route planning and city infrastructure decisions.</li>
            <li><strong>Proactive Travel Management:</strong> Users plan trips confidently, knowing AI accounts for delays, events, and road conditions.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}
