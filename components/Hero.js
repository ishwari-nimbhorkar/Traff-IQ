import Image from "next/image";
import Link from "next/link";
import Search from "@/components/Search"
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section
      className="w-full flex items-center justify-center min-h-[620px]"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "10rem",
        paddingBottom: "5rem",
      }}
      id="contentField-46ea554209b0"
    >
      <div className="container mr-15">
        <div className="mx-auto max-w-6xl">
          <div className="prose prose-gray dark:prose-invert text-center">
            <div>
              <div className="content mx-auto text-center pl-8 justify-center">
                <div className="content leading-relaxed pl-8 ">
                  {/* Heading */}
                  <h1 className=" text-[2.625rem] font-semibold leading-tight tracking-wide">
                    <p className="break-normal"> Transforming Urban  &amp; Traffic With </p> 
                    <p>Smart Technology, AI-Powered </p>
                  </h1>

                  {/* Subtitle */}
                  <p className="font-poppins text-gray-600 tracking-[0.1px] break-normal text-[16px] pt-5  max-w-6xl">
                    AI-powered traffic solutions designed to reduce congestion, optimize signals, enhance road safety, and shaping the future of 
                  </p>
                  <p className=" text-gray-600 font-poppins tracking-[0.1px] text-[16px]">
                    smarter urban and connected cities mobility. 
                  </p>
                </div>
                {/* Buttons */}
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
