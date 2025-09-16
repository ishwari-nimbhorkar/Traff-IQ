"use client";
import { useEffect, useState } from "react";

export default function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleContinue = () => {
    setDismissed(true);

    // Force "desktop-like" rendering by changing viewport meta
    let viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=1024, initial-scale=1.0, maximum-scale=1.0"
      );
    }
  };

  if (!isMobile || dismissed) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Mobile Experience Limited
        </h2>
        <p className="mt-2 text-sm pb-6 text-gray-600">
          Our website is not fully optimized for mobile yet.
          <br />
          For the best experience, please switch to <b>Desktop Mode</b>.
        </p>
        <button
          onClick={handleContinue}
           className=" sticky-target inline-flex tracking-[0.1px] items-center gap-2 rounded-full text-sm bg-black text-white px-6 py-3 hover:bg-black-600"
        >
          Continue Anyway<svg 
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
}
