"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      setShadow(window.scrollY > hero.offsetHeight * 0.05);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/features&services/#services", label: "Services" },
    { href: "/features&services/#features", label: "Features" },
    { href: "/rules&laws/#laws", label: "Law Book" },
    { href: "/rules&laws/#rules", label: "Rule Book" },
    { href: "/essentials/#about", label: "About" },
    { href: "/sitemap", label: "Sitemap" },
    { href: "/essentials/#help", label: "Help" },
  ];

  // Determine button target and text dynamically
  const isAuthPage = ["/login", "/sign-up", "/reset-pass"].includes(pathname);
  const buttonHref = isAuthPage ? "/" : "/login";
  const buttonText = isAuthPage ? "Back" : "Login | Sign up";

  const handleButtonClick = (e) => {
    e.preventDefault();
    router.push(buttonHref);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        shadow ? "bg-white shadow-lg" : "bg-white"
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
          <ul className="flex items-center gap-6 text-gray-800 text-sm">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Dynamic Button */}
          <a
            href={buttonHref}
            onClick={handleButtonClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            {buttonText}
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
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
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
          <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black text-white space-y-6">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Dynamic Mobile Button */}
            <a
              href={buttonHref}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileOpen(false);
                router.push(buttonHref);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
            >
              {buttonText}
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
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
