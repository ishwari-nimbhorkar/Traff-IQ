'use client';

import React from 'react';
import Navbar from '@/components/user-navbar';
import Footer from '@/components/Footer';

export default function SmartNavPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen mt-20  bg-gray-100 py-12 px-6 md:px-12">
      
      {/* Headline */}
      <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
        <p className="mr-2 font-poppins text-black">
          Smart{" "}
          <span className="text-red-600 font-poppins">Navigation{" "}</span>
          to Enhnace Journey        </p>
      </div>

      {/* Subtext */}
      <div className="max-w-[980px] mx-auto text-center font-poppins text-gray-700 leading-relaxed mb-12">
        We strive to provide the best features and services possible. However, due to time constraints, it is not feasible to build the full end-to-end product at this stage. Therefore, our current focus is on developing the major pages and core features of this website.

        <br /><br />

        The information provided below pertains specifically to this page’s features, resources, user flow, and expected results. We are confident that these features are practically achievable, and we are committed to ensuring that they can be developed further in the next stage of the project.
      </div>

      {/* AI-Based Features */}
      <div className="max-w-[980px] mx-auto mb-12">
        <h2 className="text-2xl font-semibold  font-poppins  text-gray-900  mb-4">1. AI-Based Features for Smart Nav Page</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Real-Time Traffic Prediction:</strong> AI predicts congestion and travel time based on historical and live data, suggesting optimal routes dynamically.</li>
          <li><strong>Personalized Route Recommendations:</strong> Routes are optimized based on user preferences and learn user habits over time.</li>
          <li><strong>Incident & Accident Detection:</strong> Detects accidents, construction zones, and hazards; automatically reroutes users.</li>
          <li><strong>ETA Optimization:</strong> Adjusts estimated arrival time dynamically based on traffic, weather, and local events.</li>
          <li><strong>Adaptive Traffic Signals Integration:</strong> Suggests routes syncing with adaptive traffic lights to reduce stops.</li>
          <li><strong>Environmental Awareness:</strong> Suggests routes to minimize fuel consumption and emissions.</li>
          <li><strong>Voice-Powered Navigation:</strong> Conversational AI assistant for route guidance and alerts.</li>
          <li><strong>Predictive Alerts:</strong> Alerts for expected congestion, accidents, or city events affecting travel.</li>
        </ul>
      </div>

      {/* Resources Needed */}
      <div className="max-w-[980px] mx-auto mb-12">
        <h2 className="text-2xl font-semibold  font-poppins  text-gray-900  mb-4">2. Resources Needed</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Data Sources:</strong> Live traffic APIs (TomTom, Google Maps, HERE), city sensors & cameras, historical traffic patterns, weather & event feeds.</li>
          <li><strong>AI/ML Models:</strong> Traffic prediction (LSTM/Prophet/Transformer), incident detection (computer vision), route optimization algorithms (Dijkstra, A*, reinforcement learning).</li>
          <li><strong>Infrastructure:</strong> Backend server for real-time data processing, database for historical traffic & user behavior, cloud services (AWS/GCP/Azure).</li>
          <li><strong>Frontend:</strong> Map integration with congestion, incidents, suggested routes, interactive UI for route selection and alerts, notifications system (push/email/SMS).</li>
        </ul>
      </div>

      {/* User Flow */}
      <div className="max-w-[980px] mx-auto mb-12">
        <h2 className="text-2xl font-semibold  font-poppins  text-gray-900  mb-4">3. User Flow for Smart Nav Page</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>User Access:</strong> User logs in or opens the Smart Nav page, optionally allowing location access.</li>
          <li><strong>Input Destination:</strong> Enter destination or select from favorites.</li>
          <li><strong>AI Route Suggestions:</strong> System presents 2–3 optimal routes based on travel time, congestion, user preferences, and environmental efficiency.</li>
          <li><strong>Route Selection:</strong> User selects preferred route; AI provides ETA, road conditions, and predicted delays.</li>
          <li><strong>Navigation & Alerts:</strong> Real-time guidance with map overlay; predictive alerts for accidents or congestion; alternative routes suggested automatically.</li>
          <li><strong>Trip Completion:</strong> System logs trip, updates AI model with actual travel time, and requests feedback on route accuracy and alert relevance.</li>
        </ul>

        
      </div>

      {/* Expected Results / Benefits */}
      <div className="max-w-[980px] mx-auto mb-12">
        <h2 className="text-2xl font-semibold  font-poppins  text-gray-900 mb-4">4. Expected Results / Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Reduced Travel Time:</strong> AI helps avoid congestion and adjusts dynamically.</li>
          <li><strong>Improved Safety:</strong> Accident detection and hazard warnings reduce risk.</li>
          <li><strong>Better User Experience:</strong> Personalized navigation and voice assistance make travel easier.</li>
          <li><strong>Environmental Benefits:</strong> Optimized routes reduce fuel consumption and emissions.</li>
          <li><strong>Data-Driven Insights:</strong> Aggregated travel data improves city traffic management over time.</li>
        </ul>
      </div>

    </div> 
    <Footer />
    </>
  );
}
