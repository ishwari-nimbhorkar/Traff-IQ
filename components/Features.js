// components/BusinessSection.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BusinessSection() {
  return (
    <section className="container mx-auto mt-10 px-4">
      {/* Heading */}
      <div className="mb-12">
        <div className="text-left md:w-3/5 w-full">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Key Features
            <br /> That Power Traffic
          </h2>
          <p className="mt-4 text-base tracking-[0.1px]  md:text-[16px] text-gray-600">
            From AI-driven signal control to real-time monitoring, our system is
            packed with innovations that redefine mobility.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        {/* Real-Time Monitoring */}
      <div className="relative group lg:row-span-2">
          <Link href="/features&services/#services" className="block">
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
              <div className="relative min-h-[500px] w-full grow max-lg:mx-auto">
                <Image
                  src="/images/features-01.png"
                  alt="Real Estate Developers & Professionals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/50 text-white px-6 py-4 backdrop-blur-lg m-4 rounded-xl">
                <p className="text-xl font-semibold">
                  Real-Time Monitoring & Alerts
                </p>
              </div>
            </div>
          </Link>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-4xl" />
        </div>

        {/* Smart Route Optimization */}
        <div className="relative group max-lg:row-start-1">
          <Link href="/features&services/#services" className="block">
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
              <div className="relative min-h-60 w-full grow max-lg:mx-auto">
                <Image
                  src="/images/features-02.png"
                  alt="Restaurants & Hospitality"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/50 text-white px-6 py-4 backdrop-blur-lg m-4 rounded-xl">
                <p className="text-xl font-semibold">Smart Route Optimization</p>
              </div>
            </div>
          </Link>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-4xl" />
        </div>

        {/* Data & Insights */}
        <div className="relative group max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <Link href="/features&services/#services" className="block">
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
              <div className="relative min-h-60 w-full grow max-lg:mx-auto">
                <Image
                  src="/images/features-03.png"
                  alt="Small Professional Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/50 text-white px-6 py-4 backdrop-blur-lg m-4 rounded-xl">
                <p className="text-xl font-semibold">Data & Insights Dashboard</p>
              </div>
            </div>
          </Link>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-4xl" />
        </div>

        {/* Contact Us */}
        <div className="relative group lg:row-span-2">
          <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
            <Link href="/contact" className="absolute inset-0 z-0 block" />
            <div className="relative min-h-60 w-full grow max-lg:mx-auto">
              <div className="absolute inset-0 bg-[#1A1A1A] flex  tracking-[0.1px] font-poppins items-center justify-center text-center text-white lg:px-10 px-2 group">
                <div>
                  <p className="text-xl tracking-[0.1px] font-poppins font-semibold">Want to Be Safer?</p>
                  <p className="mt-2 text-[16px]">
                    AI will do this for You, before anything happens.
                  </p>
                  {/* Separate Link for Explore More */}
                  <Link href="/features&services/#services">
                    <div className="border rounded-full w-[180px] mx-auto py-3 mt-5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-200">
                      <span className="flex font-poppins tracking-[0.1px] items-center gap-2 text-white group-hover:text-black transition-colors duration-200">
                        Explore More
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 11L11 1M11 1H1M11 1V11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-4xl" />
        </div>
      </div>
    </section>
  );
}
