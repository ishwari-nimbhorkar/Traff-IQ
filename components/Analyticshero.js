"use client";

import { useState, useEffect } from "react";

// 🔹 Generate random demo stats
function generateStats() {
  const avgSpeed = +(Math.random() * 40 + 20).toFixed(1); // 20–60 km/h
  const accidents = Math.floor(Math.random() * 20 + 5); // 5–25 reports
  const compliance = +(Math.random() * 20 + 75).toFixed(0); // 75–95 %
  const responseTime = +(Math.random() * 10 + 8).toFixed(1); // 8–18 minutes

  return {
    avgSpeed,
    accidents,
    compliance,
    responseTime,
  };
}

export default function ReportIssuePage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setStats(generateStats());
  }, []);

  if (!stats) return null;

  return (
    <div className="min-h-screen w-9xl mt-18 -mb-9 bg-white py-12 px-6 md:px-12">
      {/* Headline */}
      <div className="text-4xl font-bold mt-5 mb-6 flex justify-center items-center text-center">
        <p className="mr-2 font-poppins text-black">
          Amt Weekly Traffic{" "}
          <span className="text-red-600 font-poppins">Stats</span>
        </p>
      </div>

      {/* Subtext */}
      <div className="max-w-[790px] mx-auto text-center font-poppins text-gray-700 leading-relaxed mb-12">
        This entry page is currently hard-coded and serves the purpose of
        demonstrating analytics. However, it can be implemented in real-time.
        The analytics provided here support decision-making for better urban
        mobility and enable AI-driven predictions to help improve and optimize
        traffic conditions.
      </div>

      {/* Traffic Stats Cards */}
      <div className="flex flex-col w-full mt-25 font-poppins items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-[1150px]">
          {/* Average Speed */}
          <div className="rounded-xl bg-black p-6 h-[185px] flex flex-col justify-between text-white">
            <div className="mb-4 font-semibold text-[14px]">Average Speed</div>
            <div className="text-3xl font-bold flex items-baseline gap-2">
              {stats.avgSpeed} <span className="text-base">km/h</span>
            </div>
            <p className="text-red-500 mt-3 text-[14px]">
              {(35 - stats.avgSpeed).toFixed(1)} km/h{" "}
              <span className="text-white text-sm">below city avg</span>
            </p>
          </div>

          {/* Accident & Incident Reports */}
          <div className="rounded-xl bg-black p-6 flex flex-col justify-between text-white">
            <div className="mb-4 font-semibold text-[14px]">
              Accident & Incident Reports
            </div>
            <div className="text-3xl font-bold">{stats.accidents}</div>
            <p className="text-red-500 text-sm">
              +{Math.max(0, stats.accidents - 10)}{" "}
              <span className="text-white text-sm">vs last week</span>
            </p>
          </div>

          {/* Signal Compliance Data */}
          <div className="rounded-xl bg-black p-6 flex flex-col justify-between text-white">
            <div className="mb-4 font-semibold text-[14px]">
              Signal Compliance
            </div>
            <div className="text-3xl font-bold">{stats.compliance}%</div>
            <p className="text-red-500 text-[14px]">
              {(90 - stats.compliance)}%{" "}
              <span className="text-white text-sm">below ideal</span>
            </p>
          </div>

          {/* Emergency Response Times */}
          <div className="rounded-xl bg-red-600 p-6 flex flex-col justify-between text-white">
            <div className="mb-4 font-semibold text-[14px]">
              Emergency Response Time
            </div>
            <div className="flex justify-between">
              <div className="text-3xl font-bold">
                {stats.responseTime} <span className="text-sm">min</span>
              </div>
              <div className="text-3xl font-bold">
                +{(stats.responseTime - 8).toFixed(1)}{" "}
                <span className="text-sm">min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
