"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  // Redirect to login on click
  const handleSearchClick = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-[150px] bg-white px-4 sm:px-6 lg:px-20">
      <div className="flex items-center gap-5 w-full max-w-2xl">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Kathora Nake, Amaravti ..."
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
  );
};

export default SearchBar;
