"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function EssentialPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />

      <section id="essentialPage" className="w-full py-20 bg-gray-100 bg-center bg-cover">
        <div className="container mx-auto px-6 sm:px-4 text-black max-w-5xl">
          
          {/* Page Title */}
          <h1 className="text-4xl mt-10 font-bold text-center leading-tight mb-10">
            Essential Information – <span className="text-black">Traff IQ</span>
          </h1>

          {/* About Section */}
          <section id="about" className="text-center my-16 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">About Traff IQ</h2>
            <p className="text-gray-600 leading-relaxed">
              <b>Traff IQ</b> is an <b>AI-powered traffic control and management system</b> designed to revolutionize urban mobility. Leveraging cutting-edge artificial intelligence and real-time data analytics, Traff IQ empowers traffic management authorities and citizens alike to optimize traffic flow, reduce congestion, and enhance road safety.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By providing intelligent insights, predictive traffic patterns, and adaptive control solutions, Traff IQ enables cities to respond dynamically to changing traffic conditions. Our mission is to create smarter, safer, and more efficient urban environments, giving people the freedom to move seamlessly through the city while supporting authorities with data-driven decision-making.
            </p>
            <p className="text-gray-600 text-[17px] font-poppins leading-relaxed">
              Traff IQ: powering the future of urban mobility.
            </p>
          </section>

          {/* Privacy Policy Section */}
          <section id="privacy-policy" className="border-t pt-6 my-16 font-poppins">
            <h2 className="text-2xl font-semibold text-center mb-4">Privacy Policy</h2>
            <div className="text-gray-600 space-y-4">
              <p>Effective Date: [27 Sep 2025]</p>
              <p>
                Traff IQ (“we,” “our,” or “us”) values your privacy and is committed to protecting the personal information of users and visitors of our website and services. By using Traff IQ, you agree to the terms described below.
              </p>
              <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><b>Personal Information:</b> Name, email, phone number, and other details you provide when contacting us or signing up for services.</li>
                <li><b>Usage Data:</b> Device info, IP address, browser type, pages visited, and traffic data.</li>
                <li><b>Cookies and Tracking:</b> We use cookies to enhance user experience and optimize services.</li>
              </ul>
              {/* Other sections omitted for brevity but structured similarly */}
              <p>
                Contact us at: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>
              </p>
            </div>
          </section>

          {/* Terms & Conditions */}
          <section id="terms-conditions" className="border-t pt-6 my-16 font-poppins">
            <h2 className="text-2xl font-semibold text-center mb-4">Terms & Conditions</h2>
            <div className="text-gray-600 space-y-4">
              <p>Effective Date: [27 Sep 2025]</p>
              <p>Welcome to Traff IQ (“we,” “our,” or “us”). By accessing or using our services, you agree to comply with these Terms.</p>
              {/* Use structured headings, lists, and paragraphs */}
              <p>For questions: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a></p>
            </div>
          </section>

          {/* Fulfillment Policy */}
          <section id="fulfillment-policy" className="border-t pt-6 my-16 font-poppins">
            <h2 className="text-2xl font-semibold text-center mb-4">Fulfillment Policy</h2>
            <div className="text-gray-600 space-y-4">
              <p>Effective Date: [27 Sep 2025]</p>
              <p>Traff IQ is committed to delivering our services efficiently and reliably.</p>
              {/* Structured content omitted for brevity */}
              <p>Contact: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a></p>
            </div>
          </section>

          {/* Accessibility */}
          <section id="accessibility" className="border-t pt-6 my-16 font-poppins">
            <h2 className="text-2xl font-semibold text-center mb-4">Accessibility</h2>
            <div className="text-gray-600 space-y-4">
              <p>Effective Date: [27 Sep 2025]</p>
              <p>At Traff IQ, we are committed to ensuring that our website and services are accessible to all users.</p>
              <p>Contact: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a></p>
            </div>
          </section>

          {/* Help & Support */}
          <section id="help" className="border-t pt-6 my-16 font-poppins">
            <h2 className="text-2xl font-semibold text-center mb-4">Help & Support</h2>
            <div className="text-gray-600 space-y-4">
              <p>Effective Date: [27 Sep 2025]</p>
              <p>Contact our support team for inquiries or assistance: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a></p>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full text-sm bg-black text-white px-6 py-3 hover:bg-gray-800">
                Contact Support
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </section>

          {/* Copyright */}
          <section id="copyright" className="border-t pt-6 my-16 font-poppins text-gray-500 text-center space-y-2">
            <p>© {currentYear} Traff IQ – AI Traffic Management System. All rights reserved.</p>
            <p>All content, designs, graphics, logos, software, and other materials displayed on this website are the property of Traff IQ or its licensors. Unauthorized use is prohibited.</p>
            <p>For permissions, contact: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a></p>
          </section>

        </div>
      </section>

      <Footer />
      <CustomCursor />
    </>
  );
}
