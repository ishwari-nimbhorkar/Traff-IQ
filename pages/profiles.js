// app/essential/page.js
"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function EssentialPage() {
  return (
    <>
      <Navbar />
      <section
        id="essentialPage"
        className="w-full py-20"
        style={{
          backgroundColor: "#f6f6f6",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-black container mx-auto">
          <div className="mx-auto max-w-5xl px-6 sm:p-0 ">
            {/* Project Title */}
            <h1 className="text-4xl mt-10 font-bold text-center leading-tight mb-10">
              Team Structure & Roles for Traffic IQ 
            </h1>

            {/* About Section */}
            <div id="about" className=" text-center my-16">
              <h2 className="text-2xl font-semibold mb-4">About Traff IQ</h2>
              <p className="text-gray-600 leading-relaxed">
                <b>Traff IQ </b>is an{" "}
                <b>AI-powered traffic control and management system </b>designed
                to revolutionize urban mobility. Leveraging cutting-edge
                artificial intelligence and real-time data analytics, Traff IQ
                empowers traffic management authorities and citizens alike to
                optimize traffic flow, reduce congestion, and enhance road
                safety.
              </p>

              <p className="text-gray-600 leading-relaxed">
                By providing intelligent insights, predictive traffic patterns,
                and adaptive control solutions, Traff IQ enables cities to
                respond dynamically to changing traffic conditions. Our mission
                is to create smarter, safer, and more efficient urban
                environments, giving people the freedom to move seamlessly
                through the city while supporting authorities with data-driven
                decision-making.
              </p>

              <p className="text-gray-600 text-[17px] font-poppins leading-relaxed">
                Traff IQ: powering the future of urban mobility.
              </p>
            </div>

            <hr className="border-gray-300 my-12" />

            {/* Team Structure & Roles */}
            <div id="team" className="text-center my-16">
              <h2 className="text-2xl font-semibold mb-4">
             Team Lead
              </h2>

              {/* Leadership */}
              <div className="my-10 text-left">
               
                <h2 className="text-gray-800 text-xl mb-2">
                  <b>Ishwari Nimbhorkar </b>
                </h2>
                <p className="text-gray-600 mb-4">
                 The driving force behind Traff IQ, Ishwari architects the entire system from frontend design to backend logic and database strategy. She not only sets the vision but also provides the roadmap, coding standards, and workflows the entire team follows. Every component, feature, and integration stems from her guidance, while the rest of the team executes her directions to bring her blueprint to Project.
                </p>
              </div>
              <hr className="border-gray-300 my-8" />

              {/* Frontend */}
              <div className="my-10 text-left">
                <h4 className="text-xl text-gray-700 font-bold mb-3">
                  Frontend Team (Next.js + UI/UX)
                </h4>
                <p className="text-gray-600 mb-4">
                  Goal: Build an interactive, responsive, and accessible user
                  interface for citizens and authorities.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li className="mb-2">
                    <b>Shrutika – UI/UX & Styling:</b> Designs modern,
                    user-friendly layouts using TailwindCSS. Ensures color
                    schemes, fonts, and components align with brand identity.
                    Works closely with backend to ensure proper API integration
                    in the UI.
                  </li>
                  <li className="mb-2">
                    <b>Rupal – React Component :</b> Develops reusable
                    Next.js components (navbar, footer, cards, dashboard
                    widgets). Handles routing between pages (User Dashboard,
                    Authority Dashboard, E-Challan, Reports). Ensures responsive
                    design for mobile and desktop.
                  </li>
                  <li className="mb-2">
                    <b>Ruchika – Frontend State & API Integration:</b> Manages
                    client-side state using React hooks / Context API. Connects
                    frontend pages with backend APIs (live traffic, violations,
                    challans). Implements loading states, error handling, and
                    smooth navigation.
                  </li>
                  <li className="mb-2">
                    <b>Sumit – Testing & Accessibility :</b> Focuses on
                    QA for frontend: tests responsiveness, accessibility (WCAG
                    standards). Creates test cases for UI workflows (login,
                    challan check, reporting violations). Ensures cross-browser
                    compatibility (Chrome, Firefox, Edge, Safari).
                  </li>
                </ul>
              </div>
              <hr className="border-gray-300 my-8" />

              {/* Backend */}
              <div className="my-10 text-left">
                <h4 className="text-xl text-gray-700 font-bold mb-3">
                  Backend Team (APIs, Authentication, Business Logic)
                </h4>
                <p className="text-gray-600 mb-4">
                  Goal: Develop secure APIs, logic for traffic management, and
                  authority tools.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li className="mb-2">
                    <b>Somal – Backend Lead (APIs & Authentication):</b> Builds
                    core backend using Next.js API routes. Implements user &
                    authority authentication (JWT/session). Designs role-based
                    access (User vs Authority).
                  </li>
                  <li className="mb-2">
                    <b>Pranav – Traffic Logic & AI Features:</b> Works on
                    AI-powered route suggestions & traffic optimization APIs.
                    Integrates third-party traffic data APIs (Google Maps, GPS).
                    Optimizes backend logic for fast response times.
                  </li>
                  <li className="mb-2">
                    <b>Rupesh – E-Challan & Violation System :</b>{" "}
                    Creates backend services for challan generation & violation
                    records. Connects with MongoDB collections for fines & user
                    history. Works with Rupal & Ruchika to show challans on UI.
                  </li>
                </ul>
              </div>
              <hr className="border-gray-300 my-8" />

              {/* Data/Database */}
              <div className="my-10 text-left">
                <h4 className="text-xl  text-gray-700 font-bold mb-3">
                  Data/Database Team (MongoDB + Analytics)
                </h4>
                <p className="text-gray-600 mb-4">
                  Goal: Manage database schemas, queries, analytics, and
                  reports.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li className="mb-2">
                    <b>Sandip – Database Schema :</b> Designs MongoDB
                    schema (users, vehicles, challans, reports, traffic data).
                    Sets up indexing for fast queries (live updates, searching
                    challans). Works closely with backend team for CRUD
                    operations.
                  </li>
                  <li className="mb-2">
                    <b>Rushikesh – Data Analyst & Insights :</b>{" "}
                    Develops analytics dashboards for authorities (violations
                    trends, accident hotspots). Prepares compliance & audit
                    reports. Works with Pranav to improve AI with historical
                    traffic data.
                  </li>
                </ul>
                              <hr className="border-gray-300 my-8" />

                <p className="text-gray-600 font-poppins font-medium text-2xl mt-10  text-center mb-4">
                  Thank you!    
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CustomCursor />
    </>
  );
}
