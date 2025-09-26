import React, { useEffect } from "react";

export default function Notice() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.history.back(); // Automatically goes back after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins bg-black">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 space-y-4 animate-fade-in max-w-sm text-center">

        <p className="text-gray-700 text-[15px]">
          Hello! 👋 Some parts of this page are <b>still being built / Unavailable</b>. But don’t worry – we’re focusing on the most important features first to ensure the best experience.
        </p>

        <p className="text-gray-700 text-[15px]">
          This project is designed to grow, improve, and evolve. With a little patience, everything here will expand beyond what you see now, unlocking new possibilities and exciting features.
        </p>

        <p className="text-gray-700 text-[15px]">
          <b>Thank you for being part of this journey – the best is yet to come!</b>
        </p>

        <p className="text-gray-500 text-[14px] mt-2">
          Redirecting back in 5 seconds...
        </p>
      </div>
    </div>
  );
}
