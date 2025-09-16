  // components/CTASection.js
  "use client";

  import Image from "next/image";
  import Link from "next/link";

  export default function CTASection() {
    return (
      <section
        id="ctaSection-657b510c29ac"
        className="w-full py-20 mt-[-15px]"
        style={{ backgroundColor: "#f6f6f6", backgroundPosition: "center", backgroundSize: "cover" }}
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="md:w-3/5 mx-auto text-center">
              {/* Heading & Text */}
              <div className="content mx-auto justify-center">
                <h2
                  id="the-last-website-partner-youll-ever-need"
                  className="text-4xl leading-tight md:text-4xl font-bold"
                >
                  Shaping the Future of Traffic About us
                </h2>
                <p className="mt-4 text-base md:text-[16px] tracking-[0.1px] text-gray-600">
                  At the heart of our work is innovation. We leverage artificial intelligence,
                  predictive analytics, and smart infrastructure to create intelligent traffic systems
                  that redefine how cities move.
                </p>
              </div>

              {/* Call to Action Button */}
              <Link
              href="/get-a-quote"
              className=" sticky-target  mt-10 inline-flex font-poppins items-center gap-4  tracking-[0.1px] rounded-full text-sm bg-black text-white px-6 py-3 hover:bg-black-600"
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
