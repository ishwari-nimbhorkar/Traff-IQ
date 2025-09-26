"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Redirect with search query
  const handleSearchClick = () => {
    if (!search) return;
    router.push(`/user`);
  };

  return (
    <section
      id="contentField-46ea554209b0"
      className="w-full flex items-center justify-center min-h-[620px] pt-40 pb-20 bg-center bg-cover"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          {/* Heading */}
          <h1 className="text-[2.625rem] font-semibold leading-tight tracking-wide mb-6">
            <span className="block font-cy-grotesk">Transforming Urban & Traffic With</span>
            <span className="block font-cy-grotesk">Smart Technology, AI-Powered</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 font-poppins text-[16px] tracking-[0.1px] max-w-5xl mx-auto">
            AI-powered traffic solutions designed to reduce congestion, optimize signals, enhance road safety, and shape the future of
          </p>
          <p className="text-gray-600 font-poppins text-[16px] tracking-[0.1px] max-w-3xl mx-auto">
            smarter urban and connected cities mobility.
          </p>

          {/* Search */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center gap-5 w-full max-w-2xl">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Kathora Nake, Amravati ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search location"
                className="flex-1 h-12 w-30 px-5 text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder-gray-400 font-poppins"
              />

              {/* Search Button */}
              <button
                onClick={handleSearchClick}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
