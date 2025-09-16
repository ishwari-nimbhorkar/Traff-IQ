// app/essential/page.js
"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function EssentialPage() {
  return (<>
  <Navbar />
    <section
      id="essentialPage"
      className="w-full py-20"
      style={{ backgroundColor: "#f6f6f6", backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div className="text-black container mx-auto">
        <div className="mx-auto max-w-5xl px-6 sm:p-0 ">
          {/* Project Title */}
          <h1 className="text-4xl mt-10 font-bold text-center leading-tight mb-10">
            Essential Information – <span className="text-black">Traff IQ</span>
          </h1>

          {/* About Section */}
          <div id="about" className=" text-center my-16">
            <h2 className="text-2xl font-semibold mb-4">About Traff IQ</h2>
            <p className="text-gray-600 leading-relaxed">
              <b>Traff IQ </b>is an <b>AI-powered traffic control and management system </b>designed to revolutionize urban mobility. Leveraging cutting-edge artificial intelligence and real-time data analytics, Traff IQ empowers traffic management authorities and citizens alike to optimize traffic flow, reduce congestion, and enhance road safety.</p>

<p className="text-gray-600 leading-relaxed">By providing intelligent insights, predictive traffic patterns, and adaptive control solutions, Traff IQ enables cities to respond dynamically to changing traffic conditions. Our mission is to create smarter, safer, and more efficient urban environments, giving people the freedom to move seamlessly through the city while supporting authorities with data-driven decision-making.</p>

<p className="text-gray-600 text-[17px] font-poppins leading-relaxed">Traff IQ: powering the future of urban mobility.
            </p>
          </div>

          {/* Privacy Policy */}
          <div id="privacy-policy" className=" border-t  font-poppins pt-6 my-16">
            <h2 className="text-2xl text-center text-center font-semibold mb-4">Privacy Policy</h2>
            <div className="text-gray-600">
               <p className="text-gray-600 text-left leading-relaxed mb-4">Effective Date: [27 sep 2025]</p>

    <p className="text-gray-600 mb-4">
      Traff IQ (“we,” “our,” or “us”) values your privacy and is committed to protecting the personal information of users and visitors of our website and services. This Privacy Policy explains how we collect, use, store, and share your information. By using Traff IQ, you agree to the terms described below.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li><strong>Personal Information:</strong> Name, email, phone number, and other details you provide when contacting us or signing up for services.</li>
      <li><strong>Usage Data:</strong> Information on how you interact with our platform, including device info, IP address, browser type, pages visited, and traffic data.</li>
      <li><strong>Cookies and Tracking:</strong> We use cookies to enhance user experience, analyze traffic, and optimize services.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>Provide, operate, and maintain Traff IQ services.</li>
      <li>Improve, customize, and optimize our platform and user experience.</li>
      <li>Respond to inquiries, support requests, and feedback.</li>
      <li>Send updates, notifications, and promotional materials (with your consent).</li>
      <li>Ensure security, detect fraud, and prevent unauthorized use.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">3. How We Share Your Information</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>With trusted service providers who assist in operating our platform and services.</li>
      <li>When required by law or legal process.</li>
      <li>To protect the rights, property, or safety of Traff IQ, our users, or the public.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">4. Data Retention</h3>
    <p className="text-gray-600 mb-4">
      We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
    </p>

    <h3 className="text-xl font-semibold mb-2">5. Security</h3>
    <p className="text-gray-600 mb-4">
      We implement appropriate measures to protect your information, but no method of transmission over the internet is 100% secure.
    </p>

    <h3 className="text-xl font-semibold mb-2">6. Your Rights</h3>
    <p className="text-gray-600 mb-4">
      Depending on your location, you may have the right to access, correct, or delete your personal information, withdraw consent, or opt-out of marketing communications.  
      Contact us at: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>
    </p>

    <h3 className="text-xl font-semibold mb-2">7. Third-Party Links</h3>
    <p className="text-gray-600 mb-4">
      Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
    </p>

    <h3 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h3>
    <p className="text-gray-600 mb-4">
      We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
    </p>

    <h3 className="text-xl font-semibold mb-2">9. Contact Us</h3>
    <p className="text-gray-600 mb-4">
      For questions, concerns, or requests regarding this Privacy Policy, please contact:  
      <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>
    </p>
            </div>
    </div>

          {/* Terms & Conditions */}
          <div id="terms-conditions" className=" border-t pt-6 my-16">
            <h2 className="text-2xl font-semibold text-center mb-4">Terms & Conditions</h2>
            <div className="text-gray-600  font-poppins leading-relaxed">
               <p className="text-gray-600 mb-4">Effective Date: [27 Sep 2025]</p>

    <p className="text-gray-600 mb-4">
      Welcome to Traff IQ (“we,” “our,” or “us”). By accessing or using our website, platform, or services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
    <p className="text-gray-600 mb-4">
      By using Traff IQ, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, please do not use our services.
    </p>

    <h3 className="text-xl font-semibold mb-2">2. Use of Services</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>Use Traff IQ services only for lawful purposes and in accordance with these Terms.</li>
      <li>Do not attempt to interfere with or disrupt our services.</li>
      <li>Do not use the platform to transmit harmful, unlawful, or unauthorized content.</li>
      <li>Do not reverse engineer, copy, or misuse any part of our technology.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">3. User Accounts</h3>
    <p className="text-gray-600 mb-4">
      Some features may require creating an account. You are responsible for maintaining the confidentiality of your account credentials, all activities that occur under your account, and promptly notifying us of any unauthorized use.
    </p>

    <h3 className="text-xl font-semibold mb-2">4. Intellectual Property</h3>
    <p className="text-gray-600 mb-4">
      All content, technology, and software on Traff IQ are owned by or licensed to us. You may not reproduce, distribute, or create derivative works without permission, nor use our trademarks, logos, or branding without consent.
    </p>

    <h3 className="text-xl font-semibold mb-2">5. Privacy and Data</h3>
    <p className="text-gray-600 mb-4">
      Your use of Traff IQ is also governed by our <a href="#privacy" className="text-black font-medium">Privacy Policy</a>, which explains how we collect, use, and protect your data.
    </p>

    <h3 className="text-xl font-semibold mb-2">6. Disclaimers</h3>
    <p className="text-gray-600 mb-4">
      Traff IQ provides AI-powered traffic management services “as is” and does not guarantee uninterrupted or error-free operation. We are not liable for traffic predictions, recommendations, or any damages resulting from reliance on our data.
    </p>

    <h3 className="text-xl font-semibold mb-2">7. Limitation of Liability</h3>
    <p className="text-gray-600 mb-4">
      To the maximum extent permitted by law, Traff IQ and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
    </p>

    <h3 className="text-xl font-semibold mb-2">8. Modifications</h3>
    <p className="text-gray-600 mb-4">
      We may update these Terms from time to time. Changes will be posted on this page with a revised effective date. Continued use of our services constitutes acceptance of the updated Terms.
    </p>

    <h3 className="text-xl font-semibold mb-2">9. Governing Law</h3>
    <p className="text-gray-600 mb-4">
      These Terms shall be governed by and construed in accordance with the laws of [Insert Country/State]. Any disputes shall be resolved in the appropriate courts of that jurisdiction.
    </p>

    <h3 className="text-xl font-semibold mb-2">10. Contact</h3>
    <p className="text-gray-600 mb-4">
      For questions or concerns regarding these Terms and Conditions, please contact:  
      <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>
    </p>
            </div>
          </div>

          {/* Fulfillment Policy */}
          <div id="fulfillment-policy" className=" border-t pt-6 my-16">
            <h2 className="text-2xl text-center font-semibold mb-4">Fulfillment Policy</h2>
            <div className="text-gray-600 font-poppins leading-relaxed">
              <p className="text-gray-600 mb-4">Effective Date: [27 Sep 2025]</p>

    <p className="text-gray-600 mb-4">
      Traff IQ is committed to delivering our services efficiently and reliably. This Fulfillment Policy outlines how we provide our traffic management solutions and services to our users.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Service Delivery</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>Traff IQ services are primarily AI-based traffic data and management solutions accessible via our platform.</li>
      <li>Access to services begins after account setup or service activation.</li>
      <li>Service availability may vary based on technical or regulatory limitations.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">2. Processing and Activation</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>New accounts or service requests are typically processed within 1–3 business days.</li>
      <li>Users will receive confirmation via email once the services are activated.</li>
      <li>For any delays, our support team will provide timely updates.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">3. Service Changes</h3>
    <p className="text-gray-600 mb-4">
      Traff IQ may update, modify, or enhance features to improve performance. Changes do not require user consent but will be communicated via our platform or email notifications.
    </p>

    <h3 className="text-xl font-semibold mb-2">4. Limitations and Responsibilities</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>Users must provide accurate information for account setup and service access.</li>
      <li>Traff IQ is not responsible for delays caused by user errors, technical outages, or third-party dependencies.</li>
      <li>AI-based predictions and traffic recommendations are provided “as is” and do not guarantee specific outcomes.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">5. Support and Assistance</h3>
    <p className="text-gray-600 mb-4">
      Our support team is available for inquiries, troubleshooting, and guidance regarding service fulfillment.  
      Contact us at: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>
    </p>

    <h3 className="text-xl font-semibold mb-2">6. Modifications</h3>
    <p className="text-gray-600 mb-4">
      Traff IQ reserves the right to modify this Fulfillment Policy at any time. Updated policies will be posted with a revised effective date.
    </p>
            </div>
          </div>

          {/* Accessibility */}
          <div id="accessibility" className=" border-t pt-6 my-16">
            <h2 className="text-2xl font-semibold text-center mb-4">Accessibility</h2>
            <div className="text-gray-600 font-poppins leading-relaxed">
            <p className="text-gray-600 mb-4">Effective Date: [27 Sep 2025]</p>

    <p className="text-gray-600 mb-4">
      At Traff IQ, we are committed to ensuring that our website and services are accessible to all users, including people with disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 standards.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Accessibility Commitment</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>Traff IQ aims to provide an inclusive experience for all users, regardless of ability.</li>
      <li>Our platform is designed to be perceivable, operable, understandable, and robust.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">2. Features and Considerations</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>Text alternatives for non-text content.</li>
      <li>Keyboard navigable interfaces.</li>
      <li>Clear and consistent navigation across the site.</li>
      <li>Resizable text and scalable interface elements.</li>
      <li>Compatibility with assistive technologies such as screen readers.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">3. Ongoing Improvements</h3>
    <p className="text-gray-600 mb-4">
      We continuously review and improve our website and services for accessibility. Updates, features, and enhancements are implemented with accessibility in mind.
    </p>

    <h3 className="text-xl font-semibold mb-2">4. Reporting Accessibility Issues</h3>
    <p className="text-gray-600 mb-4">
      Users are encouraged to report accessibility barriers or issues. Please contact our team with details of the problem and any suggestions for improvement.  
      <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>
    </p>

    <h3 className="text-xl font-semibold mb-2">5. Feedback and Response</h3>
    <p className="text-gray-600 mb-4">
      Traff IQ commits to acknowledging accessibility reports promptly and will make reasonable efforts to address reported barriers in a timely manner.
    </p>
            </div>
          </div>

          {/* Help Section */}
          <div id="help" className=" border-t pt-6 my-16">
            <h2 className="text-2xl font-semibold text-center mb-4">Help & Support</h2>
            <div className="text-gray-600 font-poppins leading-relaxed">
              <p className="text-gray-600 mb-4">Effective Date: [27 Sep 2025]</p>

    <p className="text-gray-600 mb-4">
      At Traff IQ, we are committed to providing prompt and reliable support to help you get the most out of our traffic management services.
    </p>

    <h3 className="text-xl font-semibold mb-2">1. Contact Support</h3>
    <p className="text-gray-600 mb-4">
      For technical issues, inquiries, or assistance, reach out to our support team.  
      <br />
      Email: <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>  
      <br />
      Phone: [1111-1111-11]
    </p>

    <h3 className="text-xl font-semibold mb-2">2. Frequently Asked Questions (FAQs)</h3>
    <p className="text-gray-600 mb-4">
      Check our FAQ section for answers to common questions about account setup, service activation, and AI traffic insights.  
      
    </p>

    <h3 className="text-xl font-semibold mb-2">3. Troubleshooting</h3>
    <ul className="list-disc list-inside text-gray-600 mb-4">
      <li>Verify your credentials and reset your password if needed.</li>
      <li>Ensure your account is active and location data is accurate.</li>
      <li>Contact support if problems persist.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">4. Service Updates and Notifications</h3>
    <p className="text-gray-600 mb-4">
      Traff IQ may occasionally update features, services, or maintenance schedules. Notifications will be sent via email or displayed on your account dashboard.
    </p>

    <h3 className="text-xl font-semibold mb-2">5. Feedback and Suggestions</h3>
    <p className="text-gray-600 mb-4">
      We value your feedback and suggestions to improve our platform. Share your ideas or report issues via email to:  
      <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>
    </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-3 rounded-full text-sm bg-black text-white px-6 py-3 hover:bg-gray-800"
            >
              Contact Support
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
            </Link></div>
          </div>

          {/* Copyright */}
          <div id="copyright" className="my-16 text-poppins">
   <div id="help" className=" border-t pt-6 my-16">
            <h2 className="text-2xl font-semibold text-center mb-4">Copyright Policy</h2>
            <div className="text-gray-600 font-poppins leading-relaxed">
              <p className="text-gray-600 mb-4">Effective Date: [27 Sep 2025]</p>
 <p className="text-gray-500  mb-2">
    © {new Date().getFullYear()} Traff IQ – AI Traffic Management System. All rights reserved.
  </p>
  <p className="text-gray-500 mb-2">
    All content, designs, graphics, logos, software, and other materials displayed on this website are the property of Traff IQ or its licensors. Unauthorized use, reproduction, or distribution of any materials without prior written permission is strictly prohibited.
  </p>
  <p className="text-gray-500">
    For inquiries regarding permissions or licensing, please contact:  
    <a href="mailto:support@traffiq.com" className="text-black font-medium">support@traffiq.com</a>
  </p>
   
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <Footer /><CustomCursor /></>
  );
}
