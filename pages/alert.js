'use client';

import React from 'react';
import Navbar from '@/components/user-navbar';
import Footer from '@/components/Footer';

export default function AlertPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">

        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            AI-Based{" "}
            <span className="text-red-600 font-poppins">Alerts{" "}</span>
            & Notifications
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
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">1. AI-Based Features for Alert Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Real-Time Alert Detection:</strong> AI monitors traffic, weather, and city sensors to detect incidents instantly.</li>
            <li><strong>Predictive Alerts:</strong> Forecast potential accidents, congestion, or hazards before they occur using historical and live data.</li>
            <li><strong>Personalized Notifications:</strong> Tailor alerts based on location, preferences, vehicle type, and frequently traveled routes.</li>
            <li><strong>Severity Classification:</strong> Evaluate urgency of alerts and prioritize notifications accordingly.</li>
            <li><strong>Multi-Channel Delivery:</strong> Alerts sent via push notifications, SMS, email, or in-app messages based on user preferences.</li>
            <li><strong>Context-Aware Recommendations:</strong> Suggest alternative routes or safety actions depending on the alert type.</li>
            <li><strong>Anomaly Detection:</strong> Identify unusual patterns in traffic or city systems to prevent surprises.</li>
            <li><strong>Incident Summarization:</strong> Summarize alerts with concise actionable text and relevant visuals.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">2. Resources Needed</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Data Sources:</strong> Live traffic APIs, city sensors, weather data, public safety feeds, social media, historical incidents.</li>
            <li><strong>AI/ML Models:</strong> Time-series forecasting for predictive alerts, classification for severity/type, NLP for summarization, anomaly detection.</li>
            <li><strong>Infrastructure:</strong> Real-time processing backend, cloud services for scalability, database for historical and active alerts.</li>
            <li><strong>Frontend:</strong> Interactive dashboard, map overlays for live alerts, filtering/sorting options, and notifications system.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">3. User Flow for Alert Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>User Access:</strong> User logs in or opens the Alert page; location permissions optionally enabled.</li>
            <li><strong>Alert Detection:</strong> System monitors multiple data sources for incidents in real-time.</li>
            <li><strong>AI Analysis:</strong> Alerts are analyzed for severity, type, and potential impact; predictive alerts generated as needed.</li>
            <li><strong>Alert Delivery:</strong> Personalized alerts pushed to users via preferred channels.</li>
            <li><strong>User Interaction:</strong> Users can acknowledge, dismiss, or request more details for each alert.</li>
            <li><strong>Recommended Actions:</strong> AI suggests routes, detours, or safety measures based on alert type.</li>
            <li><strong>Feedback & Learning:</strong> User interactions feed back into AI to improve alert relevance and prediction accuracy.</li>
          </ul>

          {/* Image Placeholder */}
          <div className="mt-6 flex justify-center">
            <img src="/images/alert-user-flow.png" alt="Alert User Flow Diagram" className="max-w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Expected Results / Benefits */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">4. Expected Results / Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Faster Response Times:</strong> Authorities and users receive critical information immediately.</li>
            <li><strong>Improved Safety:</strong> Early warnings reduce accident risk and congestion.</li>
            <li><strong>Better User Experience:</strong> Personalized, actionable alerts improve engagement and trust.</li>
            <li><strong>Proactive Management:</strong> Predictive alerts enable preventive measures for incidents.</li>
            <li><strong>Data Insights:</strong> Aggregated alert data informs city planning and traffic management.</li>
            <li><strong>Resource Optimization:</strong> Authorities can allocate resources efficiently based on alert patterns and severity.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}
