// components/MarqueeSection.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function MarqueeSection() {
  // Reusable service links (less repetition)
  const services = [
    "Accident Detection",
    "Traffic Prediction",
    "Signal Control",
    "Lane Monitoring",
    "Speed Tracking",
    "Road Condition",
    "Wrong Way Detection",
    "Emergency Response",
    "Violation Detection",
  ];

  // Reusable image configs (cleaner JSX)
  const column1 = [
    { src: "/images/aipower01.webp", alt: "AI Traffic System 1" },
    { src: "/images/aipower-02.webp", alt: "AI Traffic System 2" },
  ];

  const column2 = [
    { src: "/images/aipower03.webp", alt: "AI Traffic System 3" },
    { src: "/images/aipower04.webp", alt: "AI Traffic System 4" },
  ];

  return (
    <section
      id="marquee-section"
      className="w-full bg-cover bg-center py-8 lg:py-12"
    >
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1 lg:pr-8">
            <div className="text-left">
              <h2 className="mb-4 px-3 text-3xl font-bold leading-tight md:text-4xl">
                AI-Powered <br /> Recasting Urban Traffic
              </h2>
              <p className="px-3 text-base tracking-[0.1px] text-gray-600 md:text-[16px]">
                AI-powered traffic solutions designed to reduce <br />
                <Link
                  href="/aipower"
                  prefetch={false}
                  className="font-extrabold hover:underline"
                >
                  congestion, optimize signals, and improve road safety
                </Link>
                <br />
                building the future of urban mobility.
              </p>

              {/* Services Links */}
              <div className="my-6 flex flex-wrap gap-3 tracking-[0.1px] text-gray-600">
                {services.map((service) => (
                  <Link
                    key={service}
                    href="/aipower"
                    prefetch={false}
                    className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-primary underline-offset-4 transition-transform duration-200 hover:scale-105 hover:underline"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Marquee */}
          <div className="relative order-1 lg:order-2">
            <div className="h-[400px] overflow-hidden rounded-2xl bg-[#01000e] sm:h-[500px] lg:h-[600px]">
              <div className="grid h-full grid-cols-2 gap-4 p-4">
                {/* Column 1 - Scrolls Down */}
                <div className="h-full overflow-hidden">
                  <div className="flex flex-col gap-8 animate-slide-down">
                    {column1.map(({ src, alt }) => (
                      <Image
                        key={src}
                        src={src}
                        alt={alt}
                        width={970}
                        height={580}
                        priority={false}
                        className="h-auto w-full rounded-md object-cover ring ring-gray-950/5 dark:ring-white/10"
                      />
                    ))}
                  </div>
                </div>

                {/* Column 2 - Scrolls Up */}
                <div className="h-full overflow-hidden">
                  <div className="flex flex-col gap-8 animate-slide-up">
                    {column2.map(({ src, alt }) => (
                      <Image
                        key={src}
                        src={src}
                        alt={alt}
                        width={970}
                        height={580}
                        priority={false}
                        className="h-auto w-full rounded-md object-cover ring ring-gray-950/5 dark:ring-white/10"
                      />
                    ))}
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
