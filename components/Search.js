import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center h-[150px] pl-[70px] bg-white">
      <div className="flex items-center gap-5 ">
        {/* Search Input */}
        <div className="relative placeholder:font-poppins">
          <input
            type="text"
            placeholder="Kathora Nake, Amaravti ..."
            className="w-90 h-12 px-5   py- pr-4 text-gray-900 bg-white border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder-gray-400"
          />
        </div>
        
        {/* Search Button */}
        <button className="flex items-center gap-2 px-6 py-[13PX] bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
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