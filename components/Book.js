// components/TrafficCarousel.js
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function TrafficCarousel() {
  const slides = [
    {
      heading: "Traffic Rule Book (Operational Standards)",
      points: [
        "Dynamic Signal Control – Signals must adapt in real time based on vehicular load and pedestrian movement.",
        "Lane Discipline Enforcement – Dedicated lanes (e.g., bus lanes, HOV lanes) must be respected, with penalties for misuse.",
        "Roundabout Priority System – Right-of-way rules at intersections and roundabouts must be clearly enforced.",
        "Emergency Corridor Protocol – Traffic must yield immediately to create a “rescue lane” during emergencies.",
        "Adaptive Speed Regulations – Variable speed limits must be displayed and enforced depending on weather, visibility, and congestion.",
        "Incident Reporting Requirement – Drivers involved in accidents, however minor, must report to authorities within a set timeframe.",
      ],
      img: "/images/enforcemnt(1).png",
    },
    {
      heading: "Road Law Book (Legal Framework)",
      points: [
        "Zero-Tolerance DUI Policy – Any measurable alcohol/drug influence constitutes a legal violation.",
        "Mandatory Vehicle Tech Compliance – ABS, airbags, and pollution-control devices must meet current regulatory standards.",
        "Commercial Vehicle Restrictions – Timed entry bans for heavy trucks in dense zones to reduce congestion and emissions.",
        "Right-of-Way Codification – Legal clarity on priority between pedestrians, cyclists, and motor vehicles in shared spaces.",
        "License Point System – A structured demerit system leading to suspension upon repeated violations.",
        "Data Privacy in Traffic Monitoring – Use of ANPR must comply with citizen privacy protections.",
      ],
      img: "/images/enforcemnt  (3).png",
    },
    {
      heading: "Enforcement Handbook (Authority Guidelines)",
      points: [
        "AI-Based Surveillance Integration – Automated detection of violations with minimal human bias.",
        "Uniform Penalty Enforcement – Standardized fine structures to avoid discretionary variation among officers.",
        "Transparent E-Challan System – All penalties must be digitally recorded and traceable by offenders online.",
        "Bodycam Protocol for Officers – Mandatory use of body cameras during traffic stops for accountability.",
        "Graduated Enforcement Approach – Escalating penalties (warning → fine → license suspension) to balance deterrence with fairness.",
        "Emergency Preparedness Drills – Enforcement agencies must conduct quarterly drills for accident management and disaster response on highways.",
      ],
      img: "/images/enforcemnt(2).png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const doubledSlides = [...slides, ...slides];

  // Auto-slide with pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Reset when reaching end
  useEffect(() => {
    if (current === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [current, slides.length]);

  return (
    <section className="w-full bg-center bg-cover mt-[-50px] py-12 px-5 md:px-12 tracking-[0.1px] font-poppins">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Standardized Traffic <br /> Laws, Compliance & Enforcement
          </h2>
          <p className="mt-2 text-[16px] tracking-[0.1px] text-gray-600">
            Stronger Enforcement. Smarter Systems. Safer Roads. Fewer Accidents.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides Container */}
          <div
            ref={containerRef}
            className={`flex ${
              isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {doubledSlides.map((slide, i) => (
              <div
                key={i}
                className="min-w-full shrink-0 px-4"
                role="group"
                aria-roledescription="slide"
              >
                <div className="bg-card text-card-foreground lg:flex rounded-2xl overflow-hidden shadow-lg">
                  {/* Left Content */}
                  <div className="lg:w-[600px] border border-gray-300 text-gray-600 rounded-2xl lg:p-16 md:p-10 p-8 flex items-center justify-center bg-white">
                    <div>
                      <h3 className="text-xl md:text-[20px] font-semibold mb-4">
                        {slide.heading}
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-base md:text-[14.5px]">
                        {slide.points.map((point, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative rounded-2xl lg:h-[30rem] h-96 lg:w-[625px]">
                    <Image
                      src={slide.img}
                      alt={slide.heading}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex px-9 gap-9 mt-10">
            <button
              onClick={prevSlide}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
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
              <span className="sr-only">Previous slide</span>
            </button>

            <button
              onClick={nextSlide}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
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
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
