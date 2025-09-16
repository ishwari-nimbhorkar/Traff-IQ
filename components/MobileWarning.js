"use client";
import { useEffect, useState } from "react";

export default function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleContinue = () => {
    setDismissed(true);

    // Force "desktop-like" rendering by updating viewport
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=1024, initial-scale=1.0, maximum-scale=1.0"
      );
    }
  };

  if (!isMobile || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Mobile Experience Limited
        </h2>
        <p className="mt-2 mb-6 text-sm text-gray-600">
          Our website is not fully optimized for mobile yet.
          <br />
          For the best experience, please switch to <b>Desktop Mode</b>.
        </p>
        <button
          onClick={handleContinue}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
        >
          Continue Anyway
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 11L11 1M11 1H1M11 1V11" />
          </svg>
        </button>
      </div>
    </div>
  );
}
