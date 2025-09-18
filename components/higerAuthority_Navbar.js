"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

export default function Navbar({ user }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || window.innerHeight;
      setShadow(window.scrollY > heroHeight * 0.05);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize shadow on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Static menu links
  const menuLinks = useMemo(
    () => [
      { href: "/", label: "Dashboard" },
      { href: "/features&services/#services", label: "Analytics" },
      { href: "/features&services/#features", label: "Monitoring" },
      { href: "/rules&laws/#laws", label: "Control" },
      { href: "/rules&laws/#rules", label: "IOT Hub" },
      { href: "/essentials/#about", label: "Violation" },
      { href: "/sitemap", label: "Emergency" },
      { href: "/essentials/#help", label: "Zone" },
    ],
    []
  );

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-14 z-50 transition-shadow duration-300 bg-white shadow-lg"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/traffiq.png"
            alt="Traffic IQ Design"
            width={200}
            height={40}
            className="block h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center gap-6 text-black text-sm">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 pr-1 pl-5 pt-1  pb-[2px] mt-[2px] text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            Hi, {user?.name || "Guest"} |
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white w-9 h-9 mt-1"
              viewBox="0 0 640 640"
              fill="currentColor"
            >
              <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-full h-[14px] relative">
            <span
              className={`absolute left-0 w-full h-[2px] bg-black top-0 transition-transform duration-300 ${
                isMobileOpen ? "rotate-45 top-2" : ""
              }`}
            />
            <span
              className={`absolute left-0 w-full h-[2px] bg-black top-2 transition-opacity duration-300 ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 w-full h-[2px] bg-black top-4 transition-transform duration-300 ${
                isMobileOpen ? "-rotate-45 top-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black text-white space-y-6 lg:hidden">
          {menuLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)}>
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
          >
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
}
