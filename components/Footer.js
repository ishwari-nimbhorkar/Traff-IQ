"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#b5b5b5] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div>
            <div className="flex justify-center md:justify-start mb-6">
              <Image
                src="/images/traffiq (1).png"
                alt="Traffic IQ"
                width={240}
                height={50}
                className="-translate-x-7"
                priority
              />
            </div>
            <p className="text-sm mb-4">
              Delivers real-time route optimization, smart traffic signal control, and predictive congestion analysis. 
              We are{" "}
              <Link
                href="https://www.google.com/maps/search/P.+R.+Pote+Patil+College+of+Engineering+and+Management,+Pote+Estate,+Kathora+Rd,+Amravati,+Maharashtra+444604/"
                target="_blank"
                className="font-extrabold hover:underline"
              >
                Connected to the heart of Indians
              </Link>
              . Empowering cities with data-driven insights for smarter mobility.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-8 py-2 text-lg">
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
            <dl className="space-y-4 text-sm leading-6">
              <div className="flex">
                <dt className="w-24 flex-none">Address:</dt>
                <dd>Pote Estate, Kathora Road, Amravati, 444602, Maharashtra, India</dd>
              </div>
              <div className="flex">
                <dt className="w-24 flex-none">Direct:</dt>
                <dd><Link href="tel:(000)000-0000">(000) 000-0000</Link></dd>
              </div>
              <div className="flex">
                <dt className="w-24 flex-none">Office:</dt>
                <dd><Link href="tel:(111)111-1111">(111) 111-1111</Link></dd>
              </div>
              <div className="flex">
                <dt className="w-24 flex-none">Email:</dt>
                <dd><Link href="mailto:contact@traffiq.ai">contact@traffiq.ai</Link></dd>
              </div>
            </dl>
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
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rules&laws/#laws" className="hover:underline">Law book</Link></li>
              <li><Link href="/rules&laws/#rules" className="hover:underline">Rule Book</Link></li>
              <li><Link href="/essentials/#about" className="hover:underline">About</Link></li>
              <li><Link href="/login" className="hover:underline">Sign In</Link></li>
            </ul>
          </div>

        </div>

        {/* Contact Call-to-Action */}
        <div className="bg-[#202020] w-full flex justify-between items-center py-6 lg:px-20 mt-10 rounded-2xl px-4">
          <p className="text-white text-lg">Need Help?</p>
          <Link href="/essentials/#help" className="flex items-center gap-2 rounded-full px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-6 h-6 fill-current rotate-321"
            >
              <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
            </svg>
          </Link>
        </div>

        {/* Disclaimer & Footer Links */}
        <div className="mt-8 text-xs text-[#b5b5b5]">
          <p className="mb-4">
            The data and information presented on this website are provided for informational purposes only and are intended to support traffic planning and situational awareness. While our AI systems use real-time feeds and predictive models to provide insights, traffic conditions are inherently dynamic and may change without notice. We make reasonable efforts to keep information current, but we do not guarantee the accuracy, completeness, reliability, or timeliness of any data, forecasts, maps, text, graphics, links, or other materials. Reliance on any information provided by this site is at your own risk. For authoritative and legally binding traffic information, please consult your local transport authority. For details, please review our full disclaimer and terms of use.
          </p>
          <ul className="flex flex-wrap gap-4 mb-4">
            <li><Link href="/essentials/#accessibility" className="hover:underline">Accessibility</Link></li>
            <li><Link href="/essentials/#terms-conditions" className="hover:underline">Terms and Conditions</Link></li>
            <li><Link href="/essentials/#privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/essentials/#fulfillment-policy" className="hover:underline">Fulfillment Policy</Link></li>
            <li><Link href="/sitemap" className="hover:underline">Sitemap</Link></li>
          </ul>
          <p>
            © 2025 · Intelligence Traffic Management System · Website built by{" "}
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
