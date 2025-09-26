"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] mt-20 text-[#b5b5b5] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div>
            <div className="flex justify-center md:justify-start mb-6">
              <Image
                src="/images/traffiq (1).png"
                alt="Traffic IQ Logo"
                width={240}
                height={50}
                priority
                className="-translate-x-7"
              />
            </div>
            <p className="text-sm mb-4">
              Real-time route optimization, smart traffic signal control, and predictive congestion analysis. 
              We are{" "}
              <Link
                href="https://www.google.com/maps/search/P.+R.+Pote+Patil+College+of+Engineering+and+Management,+Pote+Estate,+Kathora+Rd,+Amravati,+Maharashtra+444604/"
                target="_blank"
                className="font-extrabold hover:underline"
              >
                connected to the heart of Indians
              </Link>
              , empowering cities with data-driven insights for smarter mobility.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6 text-lg">
              <Link href="https://www.facebook.com/" target="_blank" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="https://www.linkedin.com/in/" target="_blank" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Information</h3>
            <address className="not-italic space-y-3 text-sm">
              <div><strong>Address:</strong> Pote Estate, Kathora Road, Amravati, 444602, Maharashtra, India</div>
              <div><strong>Direct:</strong> <Link href="tel:(000)000-0000">(000) 000-0000</Link></div>
              <div><strong>Office:</strong> <Link href="tel:(111)111-1111">(111) 111-1111</Link></div>
              <div><strong>Email:</strong> <Link href="mailto:contact@traffiq.ai">contact@traffiq.ai</Link></div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">All Services</Link></li>
              <li><Link href="/" className="hover:underline">Traffic Data Collection & Reporting</Link></li>
              <li><Link href="/" className="hover:underline">Congestion & Route Optimization</Link></li>
              <li><Link href="/" className="hover:underline">Road Safety Systems</Link></li>
              <li><Link href="/" className="hover:underline">Citizen Information Systems</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Support & Integration</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support&integration" className="hover:underline">Law & Regulation</Link></li>
              <li><Link href="/support&integration" className="hover:underline">User & Role Management</Link></li>
              <li><Link href="/support&integration" className="hover:underline">VIP Route Management</Link></li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#202020] w-full flex flex-col lg:flex-row justify-between items-center py-6 mt-10 rounded-2xl px-4 lg:px-20 gap-4">
          <p className="text-white text-lg">Need Help?</p>
          <Link href="/essentials/#help" className="flex items-center gap-2 rounded-full px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current rotate-[-39deg]"
            >
              <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
            </svg>
          </Link>
        </div>

        {/* Disclaimer & Footer Links */}
        <div className="mt-8 text-xs text-[#b5b5b5]">
          <p className="mb-4">
            The data and information presented on this website are for informational purposes only. Traffic conditions are dynamic; rely on information at your own risk. For authoritative information, consult your local transport authority.
          </p>
          <ul className="flex flex-wrap gap-4 mb-4">
            <li><Link href="/essentials/#accessibility" className="hover:underline">Accessibility</Link></li>
            <li><Link href="/essentials/#terms-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/essentials/#privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/essentials/#fulfillment-policy" className="hover:underline">Fulfillment Policy</Link></li>
            <li><Link href="/sitemap" className="hover:underline">Sitemap</Link></li>
          </ul>
          <p>
            © 2025 · Intelligence Traffic Management System · Website by{" "}
            <Link href="/essentials/#about" target="_blank" className="font-bold hover:underline">
              Traff IQ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
