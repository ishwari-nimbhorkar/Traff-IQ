"use client";
import React from "react";

const predictiveInsights = [
  {
    title: "Peak Hour Prediction",
    description:
      "Morning peak expected between 8–10 AM and evening peak between 6–8 PM. Predicted congestion level: High (avg. speed drops to 18–25 km/h)."
  },
  {
    title: "Accident-Prone Zones",
    description:
      "Heavy risk detected near Badnera Road, Rajapeth Square, and Irwin Square during peak hours. Suggested: adaptive signals + speed monitoring."
  },
  {
    title: "Road Closure Impact",
    description:
      "Planned metro construction on Badnera Road likely to increase congestion by 30% on bypass routes. Diversion simulation suggests strengthening alternative routes via Kathora Naka."
  },
  {
    title: "Weather Impact",
    description:
      "Monsoon rains reduce average speed by ~25% in low-lying areas (e.g., Maltekdi and Camp). AI suggests early rerouting alerts to drivers to prevent bottlenecks."
  }
];

export default function PredictiveUI() {
  return (
    <div className="p-6 bg-gray-50 pt-15 -mb-20 min-h-screen">
      <p className="text-3xl font-semibold font-poppins mb-6 pb-10 text-gray-800 text-center">
        Predictive Insights (AI-driven) – Amravati City
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {predictiveInsights.map((insight, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 font-poppins text-blue-900">
              {insight.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {insight.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        *These predictions are generated using AI models trained on past traffic
        data, live congestion feeds, and urban mobility simulations for
        Amravati.
      </div>
    </div>
  );
}
