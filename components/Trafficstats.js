"use client";

import { useState, useEffect } from "react";

export default function TrafficStats({ city }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;

  const cityPopulation = {
    Mumbai: 20,
    Delhi: 30,
    Bangalore: 12,
    Hyderabad: 10,
    Pune: 7,
    Kolkata: 14,
    Chennai: 11,
    Amravati: 0.6,
    Nashik: 2,
    Nagpur: 2.5,
  };

  const ROAD_OFFSETS = [
    { latOffset: 0.01, lonOffset: 0.01 },
    { latOffset: -0.01, lonOffset: -0.01 },
    { latOffset: 0.02, lonOffset: -0.015 },
    { latOffset: -0.02, lonOffset: 0.015 },
    { latOffset: 0.015, lonOffset: -0.02 },
  ];

  useEffect(() => {
    if (!city) return;
    let isCancelled = false;

    const fetchTraffic = async () => {
      try {
        setLoading(true);

        const geoRes = await fetch(
          `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(
            city
          )}.json?limit=1&countrySet=IN&key=${API_KEY}`
        );
        const geoData = await geoRes.json();
        if (!geoData.results || geoData.results.length === 0) {
          console.warn("City not found in India.");
          setLoading(false);
          return;
        }

        const cityCenter = geoData.results[0].position;

        const majorRoadPoints = ROAD_OFFSETS.map((offset) => ({
          lat: cityCenter.lat + offset.latOffset,
          lon: cityCenter.lon + offset.lonOffset,
        }));

        const flowPromises = majorRoadPoints.map(({ lat, lon }) =>
          fetch(
            `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?point=${lat},${lon}&key=${API_KEY}`
          )
            .then((res) => res.json())
            .catch(() => null)
        );

        const flowResults = await Promise.all(flowPromises);
        const validFlows = flowResults
          .map((f) => f?.flowSegmentData)
          .filter((f) => f && typeof f.currentSpeed === "number");

        if (validFlows.length === 0) {
          console.warn("No traffic data available for major roads.");
          setLoading(false);
          return;
        }

        const avgSpeed =
          validFlows.reduce((sum, f) => sum + f.currentSpeed, 0) /
          validFlows.length;
        const avgFreeFlowSpeed =
          validFlows.reduce((sum, f) => sum + f.freeFlowSpeed, 0) /
          validFlows.length;
        const avgTravelTime =
          validFlows.reduce((sum, f) => sum + f.currentTravelTime, 0) /
          validFlows.length;
        const avgFreeFlowTime =
          validFlows.reduce((sum, f) => sum + f.freeFlowTravelTime, 0) /
          validFlows.length;

        const population = cityPopulation[city] || 1;
        const jamCount = Math.floor(Math.random() * 50 + 20) * (population / 5);
        const jamLengthKm = (Math.random() * 20 + 10) * (population / 5);

        if (!isCancelled) {
          setStats({
            travelTime: avgTravelTime,
            freeFlowTime: avgFreeFlowTime,
            currentSpeed: avgSpeed,
            freeFlowSpeed: avgFreeFlowSpeed,
            congestion: ((avgTravelTime - avgFreeFlowTime) / avgFreeFlowTime) * 100,
            jams: {
              count: jamCount,
              length: jamLengthKm,
            },
          });
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (!isCancelled) setLoading(false);
      }
    };

    fetchTraffic();

    return () => {
      isCancelled = true; // cancel state update if unmounted
    };
  }, [city, API_KEY]);

  if (loading) {
    return <div className="p-6 text-center font-poppins">Loading traffic data...</div>;
  }

  if (!stats) return null;

  return (
    <div className="flex flex-col w-[1300px] -ml-[135px] font-poppins items-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Travel Time */}
        <div className="rounded-xl bg-black p-6 flex flex-col h-42 justify-between text-white">
          <div className="mb-4 font-semibold text-[14px]">Travel time per 10 km</div>
          <div>
            <div className="text-3xl font-bold flex items-baseline gap-2">
              {Math.floor(stats.travelTime / 60)} <span className="text-base">min</span>{" "}
              {Math.round(stats.travelTime % 60)} <span className="text-base">s</span>
            </div>
            <p className="text-red-500 mt-3 text-[14px]">
              {Math.floor((stats.travelTime - stats.freeFlowTime) / 60)} min{" "}
              <span className="text-white text-sm">
                {Math.round((stats.travelTime - stats.freeFlowTime) % 60)} s above usual
              </span>
            </p>
          </div>
        </div>

        {/* Congestion */}
        <div className="rounded-xl bg-black p-6 flex flex-col justify-between text-white">
          <div className="mb-4 font-semibold text-[14px]">Congestion level</div>
          <div className="text-3xl font-bold">{stats.congestion.toFixed(0)}%</div>
          <p className="text-red-500 text-sm">
            {stats.congestion.toFixed(0)}%{" "}
            <span className="text-white text-sm">above usual</span>
          </p>
        </div>

        {/* Speed */}
        <div className="rounded-xl bg-black p-6 flex flex-col justify-between text-white">
          <div className="mb-4 font-semibold text-[14px]">Speed</div>
          <div className="text-3xl font-bold flex items-baseline gap-2">
            {stats.currentSpeed.toFixed(1)} <span className="text-base">km/h</span>
          </div>
          <p className="text-red-500 text-[14px]">
            {(stats.freeFlowSpeed - stats.currentSpeed).toFixed(1)} km/h{" "}
            <span className="text-white text-sm">below usual</span>
          </p>
        </div>

        {/* Traffic Jams */}
        <div className="rounded-xl bg-red-600  p-6 flex flex-col justify-between font-poppins text-white">
          <div className="mb-4 font-semibold font-poppins text-[14px]">Traffic jams</div>
          <div className="flex justify-between ">
            <div className="text-3xl">
              <span className="font-bold font-poppins ">{Math.floor(stats.jams.count)}</span>
              <span className="block text-sm font-poppins mt-3">Total count</span>
            </div>
            <div className="text-3xl font-poppins">
              <span className="font-bold">{stats.jams.length.toFixed(1)}</span>
              <span className="text-base font-poppins font-bold"> km</span>
              <span className="block font-poppins text-sm mt-3">Total length</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
