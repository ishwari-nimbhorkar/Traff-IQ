"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const features = [
  {
    title: "Accident Detection",
    desc: "Real-time identification of accidents to enable faster emergency response.",
  },
  {
    title: "Traffic Prediction",
    desc: "AI models forecast traffic congestion trends and patterns ahead of time.",
  },
  {
    title: "Signal Control",
    desc: "Dynamic traffic light management to optimize road flow.",
  },
  {
    title: "Lane Monitoring",
    desc: "Monitor lane usage to prevent bottlenecks and improve safety.",
  },
  {
    title: "Speed Tracking",
    desc: "Track vehicle speeds to enforce safety and detect over-speeding.",
  },
  {
    title: "Road Condition",
    desc: "Detect potholes and hazards to improve road maintenance planning.",
  },
  {
    title: "Wrong Way Detection",
    desc: "Identify vehicles moving against traffic flow to prevent accidents.",
  },
  {
    title: "Emergency Response",
    desc: "Prioritize emergency vehicles and reduce their travel time.",
  },
  {
    title: "Violation Detection",
    desc: "Identify red-light jumps, lane violations, and traffic offenses.",
  },
];

export default function EssentialPage() {
  return (
    <>
      <Navbar />

      {/* Main Section */}
      <section
        id="essentialPage"
        className="w-full py-20 bg-gray-100 bg-center bg-cover"
      >
        <div className="container mx-auto px-6 sm:px-4 text-black max-w-5xl">

          {/* AI-Powered Features */}
          <div id="ai-features" className="text-center my-16">
            <h1 className="text-4xl font-bold mb-4">
              AI-Powered Recasting Urban Traffic
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              AI-powered traffic solutions designed to reduce{" "}
              <b>congestion, optimize signals, and improve road safety</b>,
              building the future of urban mobility.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white shadow-sm rounded-lg hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div id="about" className="text-center my-16 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">About Traff IQ</h2>
            <p className="text-gray-600 leading-relaxed">
              <b>Traff IQ</b> is an <b>AI-powered traffic control and management system</b> 
              designed to revolutionize urban mobility. Leveraging cutting-edge AI and real-time data analytics, Traff IQ empowers traffic authorities and citizens alike to optimize traffic flow, reduce congestion, and enhance road safety.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By providing intelligent insights, predictive traffic patterns, and adaptive control solutions, Traff IQ enables cities to respond dynamically to changing traffic conditions. Our mission is to create smarter, safer, and more efficient urban environments.
            </p>
            <p className="text-gray-600 text-[17px] font-poppins leading-relaxed">
              Traff IQ: powering the future of urban mobility.
            </p>
          </div>

          {/* Additional sections like Privacy Policy, Terms, Accessibility, Help, etc. can be added here */}

        </div>
      </section>

      <Footer />
      <CustomCursor />
    </>
  );
}
