// components/MarqueeSection.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function MarqueeSection() {
  return (
    <section
      id="marqueeImages-b6d8e22780f1"
      className="w-full bg-cover bg-center  py-8 lg:py-12"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:pr-8 order-2 lg:order-1">
            <div className="content text-left">
              <h2 className="text-3xl md:text-4xl px-3 leading-tight font-bold mb-4">
                AI-Powered <br/>Recasting Urban Traffic 
              </h2>
              <p className="text-base tracking-[0.1px] md:text-[16px] px-3 text-gray-600">
                AI-powered traffic solutions designed to reduce <br />{" "}
                <Link
                  href="/locations"
                  className="font-extrabold hover:underline"
                >
                congestion, optimize signals, and improve road safety<br />{" "}
                </Link>
                building the future of urban mobility.
              </p>

              {/* Location Links */}
              <div className="my-6 flex tracking-[0.1px] text-gray-600 en-600 flex-wrap gap-3">
                {[
                  "Accident Detection",
                  "Traffci Prediction",
                  "Signal Control",
                  "Lean Monitoring",
                  "Speed Tracking",
                  "Road Condition",
                  "Wrong Way Detection",
                  "Emergency Response",
                  "Voilation Detection",
                ].map((loc) => (
                  <Link
                    key={loc}
                    href={`/locations/${loc}`}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline h-10 px-4 py-2 transition-transform duration-200 hover:scale-105"
                  >
                    {loc.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Marquee */}
          <div className="relative order-1 lg:order-2">
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl bg-[#01000e]">
              <div className="grid grid-cols-2 gap-4 h-full p-4">
                
                {/* Column 1 - Scrolls Down */}
                <div className="h-full overflow-hidden">
                  <div className="flex flex-col gap-8 animate-slide-down">
                    <Image
                      src="/images/aipower01.webp"
                      alt="marquee images"
                      width={970}
                      height={580}
                      className="object-cover w-full h-auto rounded-md ring ring-gray-950/5 dark:ring-white/10"
                    />
                    <Image
                      src="/images/aipower-02.webp"
                      alt="marquee images"
                      width={970}
                      height={580}
                      className="object-cover w-full h-auto rounded-md ring ring-gray-950/5 dark:ring-white/10"
                    />
                  </div>
                </div>

                {/* Column 2 - Scrolls Up */}
                <div className="h-full overflow-hidden">
                  <div className="flex flex-col  gap-8 animate-slide-up">
                    <Image
                      src="/images/aipoer03.webp"
                      alt="marquee images"
                      width={970}
                      height={580}
                      className="object-cover w-full h-auto rounded-md ring ring-gray-950/5 dark:ring-white/10"
                    />
                    <Image
                      src="/images/aipower04.webp"
                      alt="marquee images"
                      width={970}
                      height={580}
                      className="object-cover w-full h-auto rounded-md ring ring-gray-950/5 dark:ring-white/10"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
  0% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-25%);
  }
}
.animate-slide-down {
  animation: slideDown 20s linear infinite;
}
.animate-slide-up {
  animation: slideUp 20s linear infinite;
}

      `}</style>
    </section>
  );
}
