"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Real-Time Monitoring & Alerts",
    img: "/images/features-01.png",
    link: "/features&services/#services",
    className: "lg:row-span-2",
    minHeight: "min-h-[500px]",
  },
  {
    title: "Smart Route Optimization",
    img: "/images/features-02.png",
    link: "/features&services/#services",
    className: "max-lg:row-start-1",
    minHeight: "min-h-60",
  },
  {
    title: "Data & Insights Dashboard",
    img: "/images/features-03.png",
    link: "/features&services/#services",
    className: "max-lg:row-start-3 lg:col-start-2 lg:row-start-2",
    minHeight: "min-h-60",
  },
];

export default function BusinessSection() {
  return (
    <section className="container mx-auto mt-10 px-4">
      {/* Heading */}
      <div className="mb-12 text-left md:w-3/5">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Key Features
          <br /> That Power Traffic
        </h2>
        <p className="mt-4 text-base md:text-[16px] tracking-[0.1px] text-gray-600">
          From AI-driven signal control to real-time monitoring, our system is
          packed with innovations that redefine mobility.
        </p>
      </div>

      {/* Grid Section */}
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        {/* Map Feature Cards */}
        {features.map(({ title, img, link, className, minHeight }) => (
          <div key={title} className={`relative group ${className}`}>
            <Link href={link} className="block">
              <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
                <div className={`relative ${minHeight} w-full grow max-lg:mx-auto`}>
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                    priority={title === "Real-Time Monitoring & Alerts"} // first card loads faster
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/50 text-white px-6 py-4 backdrop-blur-lg m-4 rounded-xl">
                  <p className="text-xl font-semibold">{title}</p>
                </div>
              </div>
            </Link>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-4xl" />
          </div>
        ))}

        {/* Contact / Explore More Card */}
        <div className="relative group lg:row-span-2">
          <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
            <Link href="/contact" className="absolute inset-0 z-0 block" />
            <div className="relative min-h-60 w-full grow max-lg:mx-auto">
              <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col tracking-[0.1px] font-poppins items-center justify-center text-center text-white lg:px-10 px-2">
                <p className="text-xl font-semibold">Want to Be Safer?</p>
                <p className="mt-2 text-[16px]">
                  AI will do this for You, before anything happens.
                </p>

                {/* CTA Button */}
                <Link href="/features&services/#services">
                  <div className="border rounded-full w-[180px] mx-auto py-3 mt-5 flex items-center justify-center transition-colors duration-200 group-hover:bg-white group-hover:text-black">
                    <span className="flex items-center gap-2 font-poppins tracking-[0.1px] text-white group-hover:text-black">
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
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-4xl" />
        </div>
      </div>
    </section>
  );
}
