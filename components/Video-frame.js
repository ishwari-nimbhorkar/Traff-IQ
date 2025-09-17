"use client";
import React from "react";

export default function TrafficVideo() {
  return (
    <section className="relative w-full max-w-[1240px] mx-auto rounded-2xl my-10 overflow-hidden shadow-lg">
      {/* Video */}
      <video
        src="https://media.tomtom.com/f/178460/x/9007d9b0ea/24q4_traffic-index-website-16-9_2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

    </section>
  );
}
