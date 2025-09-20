"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Ishwari [ Team Lead ]",
      href: "/team",
      imageSrc: "/images/team lead.webp",
      logoSrc: "/images/image-removebg-preview (13) (1).png",
    },
    {
      title: "Ryan Serhant",
      href: "/team",
      imageSrc: "/images/team lead.webp",
      logoSrc:
        "https://cdn.sanity.io/images/iw93gfn0/v4/d206554accd36bb0b0d7ce7fef92493297316ef8-158x26.png",
    },
    {
      title: "Coach Jordie",
      href: "/team",
      imageSrc: "/images/team lead.webp",
      logoSrc: "",
    },
    {
      title: "Yoori Park",
      href: "/team",
      imageSrc: "/images/team lead.webp",
      logoSrc:
        "https://cdn.sanity.io/images/iw93gfn0/v4/1a02821fcf830ee5d05a3fff9dcc58e20bab04a2-1387x220.png",
    },
    {
      title: "Lions Group",
      href: "/profiles",
      imageSrc: "/images/team lead.webp",
      logoSrc:
        "https://cdn.sanity.io/images/iw93gfn0/v4/23d50dfd3ee2babad9a5bec6d0313df8d941e58f-425x177.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const itemsPerSlide = 3;
  const totalItems = portfolioItems.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  }, [totalItems]);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Duplicate items for seamless loop
  const loopItems = [...portfolioItems, ...portfolioItems];

  return (
    <section className="w-full bg-cover bg-center py-20">
      <div className="container mx-auto px-6 sm:px-4">
        {/* Heading */}
        <div className="mb-12 md:w-3/5 w-full">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Work That <br />
            Speaks for Itself
          </h2>
          <p className="text-base md:text-[16px] tracking-[0.1px] font-poppins text-gray-600 mb-2">
            Trusted by city planners and transport authorities alike—our TMS
            delivers smarter traffic flow, reliable data insights, and safer
            streets.
          </p>
          <p className="text-base md:text-[16px] text-gray-600">
            At the heart of our success is a Leader whose{" "}
            <Link href="/locations/orange-county" className="font-extrabold hover:underline">
              Intelligence
            </Link>{" "}
            fuels strategy and whose{" "}
            <Link
              href="https://hungryram-v3.vercel.app/locations/new-york"
              className="font-extrabold hover:underline"
            >
              Vision
            </Link>{" "}
            drives the team—turning complex traffic challenges into seamless
            solutions.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
              width: `${(loopItems.length / itemsPerSlide) * 30}%`,
            }}
          >
            {loopItems.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[33.3333%] px-4 shrink-0 group relative"
              >
                <Link href={item.href} className="block relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:bg-black/50 transition-all duration-200" />
                  <div className="relative h-96 lg:h-[470px]">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full"
                      priority
                    />
                    {item.logoSrc && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Image
                          src={item.logoSrc}
                          alt={`${item.title} logo`}
                          width={165}
                          height={165}
                          className="group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                    )}
                    <div className="absolute bottom-10 left-0 right-0 flex justify-between items-center px-5 z-10">
                      <h3
                        className={`${montserrat.className} text-white text-[20px] font-semibold tracking-[0.2px]`}
                      >
                        {item.title}
                      </h3>
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
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex px-9 gap-9 mt-10">
            <button
              onClick={prevSlide}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
