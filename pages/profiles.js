// app/essential/page.js
"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lazy-load Custom Cursor (not critical for page load)
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function EssentialPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main
        id="essentialPage"
        className="w-full py-20 bg-[#f6f6f6] bg-center bg-cover text-black"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-5xl px-6 sm:p-0">
            {/* Project Title */}
            <h1 className="text-4xl mt-10 font-bold text-center leading-tight mb-10">
              Team Structure & Roles for Traffic IQ
            </h1>

            {/* About Section */}
            <section id="about" className="text-center my-16">
              <h2 className="text-2xl font-semibold mb-4">About Traff IQ</h2>
              <p className="text-gray-600 leading-relaxed">
                <b>Traff IQ</b> is an{" "}
                <b>AI-powered traffic control and management system</b> designed
                to revolutionize urban mobility. Leveraging cutting-edge AI and
                real-time data analytics, Traff IQ empowers traffic management
                authorities and citizens alike to optimize traffic flow, reduce
                congestion, and enhance road safety.
              </p>

              <p className="text-gray-600 leading-relaxed">
                By providing intelligent insights, predictive traffic patterns,
                and adaptive control solutions, Traff IQ enables cities to
                respond dynamically to changing traffic conditions.
              </p>

              <p className="text-gray-600 text-lg font-medium leading-relaxed font-poppins">
                Traff IQ: powering the future of urban mobility.
              </p>
            </section>

            <hr className="border-gray-300 my-12" />

            {/* Team Section */}
            <section id="team" className="text-center my-16">
              <h2 className="text-2xl font-semibold mb-4">Team Lead</h2>

              {/* Leadership */}
              <div className="my-10 text-left">
                <h3 className="text-gray-800 text-xl mb-2 font-bold">
                  Ishwari Nimbhorkar
                </h3>
                <p className="text-gray-600 mb-4">
                  The driving force behind Traff IQ, Ishwari architects the
                  entire system from frontend design to backend logic and
                  database strategy. She not only sets the vision but also
                  provides the roadmap, coding standards, and workflows the
                  entire team follows.
                </p>
              </div>

              <hr className="border-gray-300 my-8" />

              {/* Frontend */}
              <div className="my-10 text-left">
                <h3 className="text-xl text-gray-700 font-bold mb-3">
                  Frontend Team (Next.js + UI/UX)
                </h3>
                <p className="text-gray-600 mb-4">
                  Goal: Build an interactive, responsive, and accessible user
                  interface for citizens and authorities.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <b>Shrutika – UI/UX & Styling:</b> Designs modern,
                    user-friendly layouts using TailwindCSS.
                  </li>
                  <li>
                    <b>Rupal – React Component:</b> Develops reusable Next.js
                    components (navbar, footer, cards, dashboards).
                  </li>
                  <li>
                    <b>Ruchika – Frontend State & API Integration:</b> Manages
                    client-side state & connects frontend with backend APIs.
                  </li>
                  <li>
                    <b>Sumit – Testing & Accessibility:</b> QA for frontend
                    responsiveness and WCAG standards.
                  </li>
                </ul>
              </div>

              <hr className="border-gray-300 my-8" />

              {/* Backend */}
              <div className="my-10 text-left">
                <h3 className="text-xl text-gray-700 font-bold mb-3">
                  Backend Team (APIs, Authentication, Business Logic)
                </h3>
                <p className="text-gray-600 mb-4">
                  Goal: Develop secure APIs, traffic logic, and authority tools.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <b>Somal – Backend Lead:</b> Builds core backend APIs with
                    authentication & role-based access.
                  </li>
                  <li>
                    <b>Pranav – Traffic Logic & AI:</b> Works on AI-powered
                    route suggestions & optimizations.
                  </li>
                  <li>
                    <b>Rupesh – E-Challan System:</b> Backend for challan
                    generation & violation tracking.
                  </li>
                </ul>
              </div>

              <hr className="border-gray-300 my-8" />

              {/* Database */}
              <div className="my-10 text-left">
                <h3 className="text-xl text-gray-700 font-bold mb-3">
                  Data/Database Team (MongoDB + Analytics)
                </h3>
                <p className="text-gray-600 mb-4">
                  Goal: Manage database schemas, queries, analytics, and
                  reports.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <b>Sandip – Database Schema:</b> Designs MongoDB schema and
                    optimizes queries.
                  </li>
                  <li>
                    <b>Rushikesh – Data Analyst & Insights:</b> Builds
                    analytics dashboards & supports AI with traffic data.
                  </li>
                </ul>
              </div>

              <p className="text-gray-600 font-poppins font-medium text-2xl mt-10 text-center mb-4">
                Thank you!
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

      <CustomCursor />
    </>
  );
}
