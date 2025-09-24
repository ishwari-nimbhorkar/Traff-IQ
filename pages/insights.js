'use client';

import React from 'react';
import Navbar from '@/components/user-navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gray-100 py-12 px-6 md:px-12">

        {/* Headline */}
        <div className="text-4xl font-bold mb-6 flex justify-center items-center text-center">
          <p className="mr-2 font-poppins text-black">
            AI-Based{" "}
            <span className="text-red-600 font-poppins">Insights{" "}</span>
            & Analytics
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
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">1. AI-Based Features for Insights Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Data Aggregation & Visualization:</strong> Collects traffic, trips, and alerts data and visualizes it in dashboards.</li>
            <li><strong>Predictive Analytics:</strong> Forecasts traffic patterns, trip demand, and alert trends using historical and live data.</li>
            <li><strong>Anomaly Detection:</strong> Identifies unusual trends in traffic, alerts, or user behavior.</li>
            <li><strong>Personalized Insights:</strong> Provides tailored insights for users, cities, or authorities based on usage patterns.</li>
            <li><strong>Performance Metrics:</strong> Tracks KPIs such as travel time, congestion hotspots, and alert response efficiency.</li>
            <li><strong>Scenario Simulation:</strong> AI simulates what-if scenarios to predict impact of road closures or events.</li>
            <li><strong>Automated Reporting:</strong> Generates PDF/Excel reports and visual summaries for decision-making.</li>
            <li><strong>Trend Analysis & Recommendations:</strong> Suggests improvements for routes, infrastructure, and service planning based on patterns.</li>
          </ul>
        </div>

        {/* Resources Needed */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">2. Resources Needed</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Data Sources:</strong> Traffic APIs, trip logs, alert history, city sensors, weather data, and social media feeds.</li>
            <li><strong>AI/ML Models:</strong> Time-series forecasting, anomaly detection, clustering & recommendation models.</li>
            <li><strong>Infrastructure:</strong> Cloud storage & compute for real-time and historical data, dashboards backend, database for logs and analytics.</li>
            <li><strong>Frontend:</strong> Interactive dashboards, graphs, charts, filters, map overlays, exportable reports, and notification system for insights updates.</li>
          </ul>
        </div>

        {/* User Flow */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">3. User Flow for Insights Page</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>User Access:</strong> User logs in and navigates to the Insights page.</li>
            <li><strong>Select Metrics / Filters:</strong> Choose timeframe, region, data type (traffic, trips, alerts), and preferences.</li>
            <li><strong>Data Visualization:</strong> Dashboards display charts, graphs, and heatmaps for trends and KPIs.</li>
            <li><strong>AI Analysis & Recommendations:</strong> AI generates predictive insights, identifies anomalies, and recommends actions.</li>
            <li><strong>Export / Share Insights:</strong> Users can download reports or share visual summaries with stakeholders.</li>
            <li><strong>Feedback Loop:</strong> User interactions and feedback refine AI predictions and dashboards over time.</li>
          </ul>

          {/* Image Placeholder */}
          <div className="mt-6 flex justify-center">
            <Image src="/images/insights-user-flow.png" alt="Insights User Flow Diagram" className="max-w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Expected Results / Benefits */}
        <div className="max-w-[980px] mx-auto mb-12">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">4. Expected Results / Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Data-Driven Decisions:</strong> Authorities and users make informed decisions based on real-time and historical data.</li>
            <li><strong>Improved Traffic Management:</strong> Identify congestion hotspots and plan preventive measures.</li>
            <li><strong>Enhanced User Experience:</strong> Personalized insights help users optimize trips and actions.</li>
            <li><strong>Predictive Planning:</strong> Forecast demand, alerts, and congestion trends to prevent delays.</li>
            <li><strong>Resource Optimization:</strong> Allocate resources efficiently using AI recommendations.</li>
            <li><strong>Operational Efficiency:</strong> Automates reporting, anomaly detection, and trend analysis to save time.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
}
