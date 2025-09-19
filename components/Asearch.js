"use client";

import React, { useState, useEffect } from "react";

const Hero = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchedCity, setSearchedCity] = useState(""); // track searched location

  // Request location on load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          try {
            const apiKey = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;
            const res = await fetch(
              `https://api.tomtom.com/search/2/reverseGeocode/${lat},${lon}.json?key=${apiKey}`
            );
            const data = await res.json();
            const city =
              data.addresses?.[0]?.address?.municipality ||
              data.addresses?.[0]?.address?.freeformAddress ||
              "";

            setQuery(city);
            setLoading(false);

            // Auto-pass location to parent
            if (onSearch) {
              onSearch({ city, lat, lon });
            }
          } catch (err) {
            console.error("Error fetching location:", err);
            setLoading(false);
          }
        },
        (err) => {
          console.warn("Location permission denied:", err);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, [onSearch]);

  // Handle manual search
  const handleSearchClick = () => {
    if (!query.trim()) return;
    setSearchedCity(query); // set searched city
    if (onSearch) {
      onSearch({ city: query });
    }
  };

  return (
    <section
      id="contentField-hero"
      className="w-full flex items-center justify-center min-h-[620px]  -mt-10 pb-20 bg-center bg-cover"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          {/* Dynamic Heading */}
          <h1 className="text-[40px] font-semibold leading-tight tracking-wide mb-6 font-cy-grotesk">
            {searchedCity ? (
              <>
                <span className="text-red-600 font-cy-grotesk ">{searchedCity}</span> | India live
                traffic update
              </>
            ) : (
              <>Search location | India live traffic update</>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 font-poppins text-[16px] tracking-[0.1px] max-w-5xl mx-auto">
            Real-time AI-powered traffic updates to help reduce congestion,
            optimize signals, and improve road safety.
          </p>

          {/* Search Bar */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center gap-5 w-full max-w-2xl">
              <input
                type="text"
                placeholder="Kathora Nake, Amaravti ..."
                aria-label="Search location"
                value={loading ? "Searching location..." : query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={loading}
                className="flex-1 h-12 px-5 text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder-gray-400 font-poppins"
              />

              <button
                onClick={handleSearchClick}
                disabled={loading}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                aria-label="Search"
              >
                <span className="text-sm font-medium">Search</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M1 11L11 1M11 1H1M11 1V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
