// components/CTASection.js
"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="ctaSection"
      className="w-full py-20 -mt-4"
      style={{ backgroundColor: "#f6f6f6", backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div className="container mx-auto">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto text-center md:w-3/5">
            {/* Heading & Text */}
            <h2
              id="the-last-website-partner-youll-ever-need"
              className="text-4xl font-bold leading-tight md:text-4xl"
            >
              Shaping the Future of Traffic About Us
            </h2>
            <p className="mt-4 text-base tracking-[0.1px] text-gray-600 md:text-[16px]">
              At the heart of our work is innovation. We leverage artificial
              intelligence, predictive analytics, and smart infrastructure to
              create intelligent traffic systems that redefine how cities move.
            </p>

            {/* Call to Action Button */}
            <Link
              href="/login"
              prefetch={false}
              className="mt-10 inline-flex items-center gap-4 rounded-full bg-black px-6 py-3 text-sm font-poppins tracking-[0.1px] text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Start Your Journey, Now!
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
