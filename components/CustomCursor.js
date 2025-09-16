"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0, t: Date.now() });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // hide system cursor by default
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      const now = Date.now();
      const dt = now - lastPos.current.t || 1;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.hypot(dx, dy);
      const speed = distance / dt;

      lastPos.current = { x: e.clientX, y: e.clientY, t: now };

      // smooth position update
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

    // cursor toggle for interactive elements
    const showDefaultCursor = () => {
      setHidden(true);
      document.body.style.cursor = "auto";
      gsap.to(cursor, { opacity: 0, scale: 0.6, duration: 0.25 });
    };

    const hideDefaultCursor = () => {
      setHidden(false);
      document.body.style.cursor = "none";
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.25 });
    };

    // event listeners
    window.addEventListener("mousemove", moveCursor);

    const interactiveEls = document.querySelectorAll(
      "input, textarea, button, a, select"
    );
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
      document.body.style.cursor = "auto"; // restore on unmount
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
      }}
    />
  );
}
