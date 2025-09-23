"use client";

import { useEffect, useState, useCallback } from "react";

export default function TrafficCard({ lat = 19.076, lng = 72.8777 }) {
  const [trafficData, setTrafficData] = useState(null);
  const [localTime, setLocalTime] = useState(new Date());

  const API_KEY = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;

  // Fetch TomTom Traffic Flow API dynamically based on lat/lng
  const fetchTraffic = useCallback(async () => {
    try {
      console.log("Fetching traffic data for:", lat, lng);
      const res = await fetch(
        `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?point=${lat},${lng}&key=${API_KEY}`
      );
      const data = await res.json();
      console.log("Traffic API response:", data);
      setTrafficData({
        lastUpdate: new Date().toLocaleString(),
        congestion: data?.flowSegmentData?.currentSpeed || null,
      });
    } catch (err) {
      console.error("Error fetching traffic:", err);
    }
  }, [lat, lng, API_KEY]);

  // Update local time every minute
  useEffect(() => {
    const timer = setInterval(() => setLocalTime(new Date()), 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch traffic every minute or on lat/lng change
  useEffect(() => {
    fetchTraffic();
    const interval = setInterval(fetchTraffic, 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchTraffic]);

  return (
    <div className="flex w-full flex-col  p-6">
      <div className="mt-6 flex gap-10  max-w-full item center justify-center  font-poppins  ">
        <div className="flex flex-col ">
          <span className="font-semibold text-[15px] text-black ">Last update</span>
          <span className="text-gray-600 text-[17px]">{trafficData?.lastUpdate || "Loading..."}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[15px] ">Local time</span>
          <span className="text-gray-600 text-[17px]">{localTime.toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="mt-8 max-w-full text-center font-poppins  items-center text-[17px] justify-center text-gray-600">
        Travel times, congestion levels and speeds are based on trip data<br />
        anonymously collected from drivers within the urban area throughout the
        complete <br /> road network — including fast roads and highways crossing this
        area.<br /> Below Data May be Inaccurate
      </div>
    </div>
  );
}
