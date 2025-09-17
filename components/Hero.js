"use client";

import Search from "@/components/Search";

const Hero = () => {
  return (
    <section
      id="contentField-46ea554209b0"
      className="w-full flex items-center justify-center min-h-[620px] pt-40 pb-20 bg-center bg-cover"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          {/* Heading */}
          <h1 className="text-[2.625rem] font-semibold leading-tight tracking-wide mb-6">
            <span className="block font-cy-grotesk">Transforming Urban & Traffic With</span>
            <span className="block font-cy-grotesk">Smart Technology, AI-Powered</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 font-poppins text-[16px] tracking-[0.1px]  max-w-5xl mx-auto">
            AI-powered traffic solutions designed to reduce congestion, optimize signals, enhance road safety, and shape the future of
          </p>
          <p className="text-gray-600 font-poppins text-[16px] tracking-[0.1px] max-w-3xl mx-auto">
            smarter urban and connected cities mobility.
          </p>

          {/* Search / Buttons */}
          <div className="mt-8">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
