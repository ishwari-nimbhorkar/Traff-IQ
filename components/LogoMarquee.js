"use client";

import Image from "next/image";
import styles from "./logomarquee.module.css";

const logos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
];

export default function LogoMarquee() {
  return (
    <section
      id="logos"
      className="w-full py-20 mt-[-85px] bg-white"
    >
      <div className="container mx-auto relative overflow-hidden">
        {/* Left gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 h-full bg-gradient-to-r from-white to-transparent" />
        {/* Right gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 h-full bg-gradient-to-l from-white to-transparent" />

        {/* Marquee track */}
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-[60px] w-32 h-auto flex items-center justify-center opacity-70 grayscale"
              >
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={600}
                  height={200}
                  className="object-contain"
                  priority={index < logos.length} // prioritize first set of logos
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
