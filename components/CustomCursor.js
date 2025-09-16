"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0, t: Date.now() });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    document.body.style.cursor = "none"; // hide system cursor by default

    const moveCursor = (e) => {
      const now = Date.now();
      const dt = now - lastPos.current.t;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = distance / (dt || 1);

      lastPos.current = { x: e.clientX, y: e.clientY, t: now };

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });

      if (!hidden) {
        let gradient;
        if (speed < 0.5) {
          gradient =
            "radial-gradient(circle, rgba(220,0,0,0.6) 40%, rgba(0,0,0,0.8) 70%)";
        } else if (speed < 1) {
          gradient =
            "radial-gradient(circle, rgba(220,220,0,0.6) 40%, rgba(0,0,0,0.8) 70%)";
        } else {
          gradient =
            "radial-gradient(circle, rgba(0,220,0,0.6) 40%, rgba(0,0,0,0.8) 70%)";
        }

        gsap.to(cursor, {
          background: gradient,
          duration: 0.25,
          ease: "power2.out",
        });
      }
    };

    // smooth show default cursor
    const showDefaultCursor = () => {
      setHidden(true);
      document.body.style.cursor = "auto";
      gsap.to(cursor, { opacity: 0, scale: 0.6, duration: 0.25, ease: "power2.out" });
    };

    // smooth back to custom cursor
    const hideDefaultCursor = () => {
      setHidden(false);
      document.body.style.cursor = "none";
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveSelectors = "input, textarea, button, a, select";
    const interactiveEls = document.querySelectorAll(interactiveSelectors);

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", showDefaultCursor);
      el.addEventListener("mouseleave", hideDefaultCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", showDefaultCursor);
        el.removeEventListener("mouseleave", hideDefaultCursor);
      });
      document.body.style.cursor = "auto";
    };
  }, [hidden]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
      style={{
        background:
          "radial-gradient(circle, rgba(150,0,0,0.6) 40%, rgba(0,0,0,0.95) 70%)",
        transform: "translate(-50%, -50%)",
        opacity: 1,
      }}
    />
  );
}
