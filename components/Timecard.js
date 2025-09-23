"use client";

import { useEffect, useState, useCallback } from "react";

export default function TrafficCard({ lat = 19.076, lng = 72.8777 }) {
  const [trafficData, setTrafficData] = useState(null);
  const [localTime, setLocalTime] = useState(null); // initialize as null
  const [mounted, setMounted] = useState(false); // track client mount

  const API_KEY = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;

  // Fetch traffic data dynamically based on lat/lng
  const fetchTraffic = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?point=${lat},${lng}&key=${API_KEY}`
      );
      const data = await res.json();
      setTrafficData({
        lastUpdate: new Date().toLocaleString(),
        congestion: data?.flowSegmentData?.currentSpeed || null,
      });
    } catch (err) {
      console.error("Error fetching traffic:", err);
    }
  }, [lat, lng, API_KEY]);

  // Set mounted state to true (client only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update local time every minute
  useEffect(() => {
    if (!mounted) return; // don't run on server
    setLocalTime(new Date());
    const timer = setInterval(() => setLocalTime(new Date()), 60 * 1000);
    return () => clearInterval(timer);
  }, [mounted]);

  // Fetch traffic every minute or on lat/lng change
  useEffect(() => {
    if (!mounted) return; // don't run on server
    fetchTraffic();
    const interval = setInterval(fetchTraffic, 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchTraffic, mounted]);

  // Prevent rendering before client mount to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <div className="flex w-full flex-col p-6">
      <div className="mt-6 flex gap-10 max-w-full item center justify-center font-poppins">
        <div className="flex flex-col">
          <span className="font-semibold text-[15px] text-black">Last update</span>
          <span className="text-gray-600 text-[17px]">
            {trafficData?.lastUpdate || "Loading..."}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[15px]">Local time</span>
          <span className="text-gray-600 text-[17px]">
            {localTime?.toLocaleTimeString() || "Loading..."}
          </span>
        </div>
      </div>

      <div className="mt-8 max-w-full text-center font-poppins items-center text-[17px] justify-center text-gray-600">
        Travel times, congestion levels and speeds are based on trip data
        <br />
        anonymously collected from drivers within the urban area throughout the
        complete <br />
        road network — including fast roads and highways crossing this area.
        <br /> Below Data May be Inaccurate
      </div>
    </div>
  );
}
