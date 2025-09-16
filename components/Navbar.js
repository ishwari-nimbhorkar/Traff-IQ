import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height (assumes main section has 'hero' id)
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > heroHeight * 0.05) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 bg-white ${
        shadow ? "shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/traffiq.png"
            alt="Traffic Iq Design"
            width={200}
            height={40}
            className="block h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center gap-6 text-gray-800 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/features&services/#services">Services</Link></li>
            <li><Link href="/features&services/#features">Features</Link></li>
            <li><Link href="/rules&laws/#laws">Law Book</Link></li>
            <li><Link href="/rules&laws/#rules">Rule Book</Link></li>
            <li><Link href="/essentials/#about">About</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li> {/* ✅ Added Sitemap */}
            <li><Link href="/essentials/#help">Help</Link></li>
          </ul>

          <Link
            href="/login"
            className=" sticky-target inline-flex tracking-[0.1px] items-center gap-2 rounded-full text-sm bg-black text-white px-6 py-3 hover:bg-black-600"
          >
            Login | Sign up
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 w-10 h-10 flex items-center justify-center"
          >
            <span className="sr-only">Open menu</span>
            <div className="w-full h-[14px] relative">
              <span
                className={`absolute left-0 w-full h-[2px] bg-black top-0 transition-transform duration-300 ${
                  isMobileOpen ? "rotate-45 top-2" : ""
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-[2px] bg-black top-2 transition-opacity duration-300 ${
                  isMobileOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-[2px] bg-black top-4 transition-transform duration-300 ${
                  isMobileOpen ? "-rotate-45 top-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Overlay */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-40 bg-black text-white flex flex-col items-center justify-center space-y-6">
            <Link href="/" onClick={() => setIsMobileOpen(false)}>Home</Link>
            <Link href="/features&services/#services" onClick={() => setIsMobileOpen(false)}>Services</Link>
            <Link href="/features&services/#features" onClick={() => setIsMobileOpen(false)}>Features</Link>
            <Link href="/rules&laws/#laws" onClick={() => setIsMobileOpen(false)}>Law Book</Link>
            <Link href="/rules&laws/#rules" onClick={() => setIsMobileOpen(false)}>Rule Book</Link>
            <Link href="/essentials/#about" onClick={() => setIsMobileOpen(false)}>About</Link>
            <Link href="/sitemap" onClick={() => setIsMobileOpen(false)}>Sitemap</Link> {/* ✅ Added Sitemap */}
            <Link href="/essentials/#help" onClick={() => setIsMobileOpen(false)}>Help</Link>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 hover:bg-black-800"
            >
              Login | Sign up
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
        )}
      </div>
    </nav>
  );
}
