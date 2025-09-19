"use client";

import React from "react";
import Image from "next/image";

const cities = [
  {
    rank: 1,
    worldRank: 1,
    city: "Barranquilla",
    country: "Colombia",
    flag: "https://flagcdn.com/w20/co.png",
    travelTime: "36 min 6 s",
    change: "-20 s",
    changeType: "down",
    congestion: "45%",
    lostTime: "130 hours",
    congestionWorldRank: 16,
  },
  {
    rank: 2,
    worldRank: 2,
    city: "Kolkata",
    country: "India",
    flag: "https://flagcdn.com/w20/in.png",
    travelTime: "34 min 33 s",
    change: "+10 s",
    changeType: "up",
    congestion: "32%",
    lostTime: "110 hours",
    congestionWorldRank: 173,
  },
  {
    rank: 3,
    worldRank: 3,
    city: "Bengaluru",
    country: "India",
    flag: "https://flagcdn.com/w20/in.png",
    travelTime: "34 min 10 s",
    change: "+50 s",
    changeType: "up",
    congestion: "38%",
    lostTime: "117 hours",
    congestionWorldRank: 65,
  },
  {
    rank: 4,
    worldRank: 4,
    city: "Pune",
    country: "India",
    flag: "https://flagcdn.com/w20/in.png",
    travelTime: "33 min 22 s",
    change: "-1 min",
    changeType: "down",
    congestion: "34%",
    lostTime: "108 hours",
    congestionWorldRank: 127,
  },
  {
    rank: 5,
    worldRank: 5,
    city: "London",
    country: "United Kingdom",
    flag: "https://flagcdn.com/w20/gb.png",
    travelTime: "33 min 17 s",
    change: "+40 s",
    changeType: "up",
    congestion: "32%",
    lostTime: "113 hours",
    congestionWorldRank: 150,
  },
  {
    rank: 6,
    worldRank: 6,
    city: "Kyoto",
    country: "Japan",
    flag: "https://flagcdn.com/w20/jp.png",
    travelTime: "33 min 16 s",
    change: "+20 s",
    changeType: "up",
    congestion: "39%",
    lostTime: "95 hours",
    congestionWorldRank: 60,
  },
  {
    rank: 7,
    worldRank: 7,
    city: "Lima",
    country: "Peru",
    flag: "https://flagcdn.com/w20/pe.png",
    travelTime: "33 min 12 s",
    change: "+1 min 30 s",
    changeType: "up",
    congestion: "47%",
    lostTime: "155 hours",
    congestionWorldRank: 9,
  },
  {
    rank: 8,
    worldRank: 8,
    city: "Davao City",
    country: "Philippines",
    flag: "https://flagcdn.com/w20/ph.png",
    travelTime: "32 min 59 s",
    change: "-30 s",
    changeType: "down",
    congestion: "49%",
    lostTime: "136 hours",
    congestionWorldRank: 3,
  },
  {
    rank: 9,
    worldRank: 9,
    city: "Trujillo",
    country: "Peru",
    flag: "https://flagcdn.com/w20/pe.png",
    travelTime: "32 min 56 s",
    change: "+30 s",
    changeType: "up",
    congestion: "34%",
    lostTime: "102 hours",
    congestionWorldRank: 117,
  },
  {
    rank: 10,
    worldRank: 10,
    city: "Dublin",
    country: "Ireland",
    flag: "https://flagcdn.com/w20/ie.png",
    travelTime: "32 min 45 s",
    change: "+40 s",
    changeType: "up",
    congestion: "47%",
    lostTime: "155 hours",
    congestionWorldRank: 10,
  },
];

export default function SlowestCitiesTable() {
  return (
    <div className="container mx-auto px-4 mt-20">
      {/* Heading */}
      <div className="mb-7 md:w-3/5 w-full text-left">
        <h2 className="text-3xl md:text-4xl font-Cy-grotesk font-bold leading-tight mb-4">
          Top 10 slowest cities of 2024
        </h2>
        <p className="text-gray-700 font-poppins text-base md:text-[16px] tracking-[0.1px]">
          We have ranked more than 500 cities based on congestion and drive times for a typical trip. Here is the top 10.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto relative font-poppins shadow-md rounded-lg">
        <table className="min-w-full text-[13px] border-collapse">
          <caption className="sr-only">Top 10 slowest cities in 2024 with traffic data</caption>
          <thead className="text-gray-900 bg-gray-100 sticky top-0">
            <tr>
              <th scope="col" className="py-3 px-2">Rank by filter</th>
              <th scope="col" className="py-3 px-2">World rank</th>
              <th scope="col" className="py-3 px-2">City</th>
              <th scope="col" className="py-3 px-2">Average travel time per 10 km</th>
              <th scope="col" className="py-3 px-2">Change from 2023</th>
              <th scope="col" className="py-3 px-2">Congestion level %</th>
              <th scope="col" className="py-3 px-2">Time lost per year at rush hours</th>
              <th scope="col" className="py-3 px-2">Congestion world rank</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => (
              <tr key={city.rank} className="hover:bg-gray-50">
                <td className="py-2 px-2 text-center">{city.rank}</td>
                <td className="py-2 px-2 text-center">
                  <span className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
                    {city.worldRank}
                  </span>
                </td>
                <td className="py-2 px-2">
                  <div className="flex flex-col">
                    <span className="font-semibold">{city.city}</span>
                    <span className="flex items-center text-sm text-gray-600 gap-1">
                      <Image
                        src={city.flag}
                        alt={city.country}
                        width={16}
                        height={12}
                        className="rounded-sm"
                        priority
                      />
                      {city.country}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-2 font-semibold">{city.travelTime}</td>
                <td
                  className={`py-2 px-2 font-medium ${
                    city.changeType === "up" ? "text-red-600" : city.changeType === "down" ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {city.change}
                </td>
                <td className="py-2 px-2">{city.congestion}</td>
                <td className="py-2 px-2">{city.lostTime}</td>
                <td className="py-2 px-2 text-center">
                  <span
                    className={`${
                      city.congestionWorldRank > 100 ? "bg-red-600" : "bg-orange-600"
                    } text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold`}
                  >
                    {city.congestionWorldRank}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
