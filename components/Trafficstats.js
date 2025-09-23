"use client";
import { useState, useEffect } from "react";

function generateStats() {
  const avgSpeed = +(Math.random() * 60 + 20).toFixed(1); // 20-80 km/h
  const congestion = +(Math.random() * 80 + 10).toFixed(0); // 10%-90%
  const travelTime = +(Math.random() * 30 + 10).toFixed(0); // minutes
  const jamCount = Math.floor(Math.random() * 50 + 20);
  const jamLength = +(Math.random() * 20 + 5).toFixed(1);

  const syncedCongestion = Math.min(Math.max(congestion, 10), 90);
  const syncedTravelTime = Math.round(travelTime * (1 + syncedCongestion / 100));

  return {
    currentSpeed: avgSpeed,
    congestion: syncedCongestion,
    travelTime: syncedTravelTime,
    jams: {
      count: jamCount,
      length: jamLength,
    },
  };
}

export default function TrafficStats({ city }) {
  const [stats, setStats] = useState(null);

  // Run only on client
  useEffect(() => {
    setStats(generateStats());
  }, []);

  // Render nothing until client stats are ready
  if (!stats) return null;

  return (
    <div className="flex flex-col w-full font-poppins items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-[1000px] ">
        {/* Travel Time */}
        <div className="rounded-xl bg-black p-6 flex flex-col justify-between text-white">
          <div className="mb-4 font-semibold text-[14px]">Travel time per 10 km</div>
          <div>
            <div className="text-3xl font-bold flex items-baseline gap-2">
              {stats.travelTime} <span className="text-base">min</span>
            </div>
            <p className="text-red-500 mt-3 text-[14px]">
              {stats.travelTime - 15} min{" "}
              <span className="text-white text-sm">above usual</span>
            </p>
          </div>
        </div>

        {/* Congestion */}
        <div className="rounded-xl bg-black p-6 flex flex-col justify-between text-white">
          <div className="mb-4 font-semibold text-[14px]">Congestion level</div>
          <div className="text-3xl font-bold">{stats.congestion}%</div>
          <p className="text-red-500 text-sm">
            {stats.congestion}%{" "}
            <span className="text-white text-sm">above usual</span>
          </p>
        </div>

        {/* Speed */}
        <div className="rounded-xl bg-black p-6 flex flex-col justify-between text-white">
          <div className="mb-4 font-semibold text-[14px]">Speed</div>
          <div className="text-3xl font-bold flex items-baseline gap-2">
            {stats.currentSpeed} <span className="text-base">km/h</span>
          </div>
          <p className="text-red-500 text-[14px]">
            {80 - stats.currentSpeed} km/h{" "}
            <span className="text-white text-sm">below usual</span>
          </p>
        </div>

        {/* Traffic Jams */}
        <div className="rounded-xl bg-red-600  p-6 flex flex-col justify-between text-white">
          <div className="mb-4 font-semibold text-[14px]">Traffic jams</div>
          <div className="flex justify-between">
            <div className="text-3xl font-bold">{stats.jams.count}</div>
            <div className="text-3xl font-bold">
              {stats.jams.length} <span className="text-sm">km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
