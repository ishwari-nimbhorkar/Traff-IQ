// app/laws/page.js
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const trafficRules = [
  "Vehicles carrying hazardous materials must display reflective hazard warning plates (as per ADR standards) and drivers must hold special endorsements on their license.",
  "Heavy vehicles are legally required to maintain a minimum 50-meter safe following distance at speeds above 40 km/h on highways, irrespective of traffic density.",
  "All commercial passenger vehicles must maintain an emergency medical kit and fire extinguisher in working condition; absence can result in permit suspension.",
  "Trucks and buses must not operate in the city core zones during restricted hours (typically 8 AM–11 AM and 5 PM–9 PM), except with special permits.",
  "Any vehicle exceeding 3.5 tonnes gross weight must have side underrun and rear underrun protection bars to reduce fatal accidents for smaller vehicles.",
  "Motorcycles are prohibited from carrying fuel in containers or bottles; violation is punishable with fines and vehicle impoundment.",
  "Vehicles fitted with bull bars, crash guards, or sharp protruding metal fittings are banned under safety regulations and can be seized.",
  "Every school bus must be painted yellow, have ‘SCHOOL BUS’ written in black, and be fitted with a GPS tracker, speed governor (40 km/h limit), and CCTV cameras.",
  "Lane discipline: On expressways, heavy goods vehicles are legally required to use only the leftmost lane; overtaking from the left is strictly prohibited.",
  "Noise pollution rule: Modified exhausts producing sound above 80 dB (for 2-wheelers) and 85 dB (for 4-wheelers) are prohibited under environmental traffic laws.",
];

const trafficLaws = [
  "Motor Vehicles Act, Section 184: Driving dangerously, including sudden lane changes or overtaking from the wrong side, is punishable with imprisonment up to 6 months and/or fines up to ₹10,000.",
  "Section 129: Every person riding a two-wheeler must wear protective headgear conforming to BIS standards; non-compliance can result in suspension of driving license for 3 months.",
  "Section 190(2): Owners of vehicles found emitting smoke beyond prescribed norms are liable to imprisonment up to 3 months, fine up to ₹10,000, or cancellation of registration certificate.",
  "Section 206(4): Authorities have the right to seize driving licenses on the spot for offenses such as drunk driving, overspeeding, or dangerous driving.",
  "Central Motor Vehicle Rule 93: Mandatory retro-reflective tape markings on all commercial vehicles (red at rear, white on sides, and yellow on front). Non-compliance results in challans and fitness certificate cancellation.",
  "Section 201: Obstructing free flow of traffic (parking on highways, blocking emergency lanes) is punishable with fines up to ₹500 per minute of obstruction.",
  "Rule 118: Mandatory speed governors in transport vehicles with preset maximum speeds (commercial LMVs: 80 km/h, passenger buses: 60 km/h). Tampering is a criminal offense.",
  "Section 202: Police officers can conduct a breath test using a breathalyzer, and refusal to undergo testing is itself considered an offense punishable by law.",
  "Rule 132: All hazardous goods vehicles must be fitted with spark arrestors and comply with additional night-time reflective visibility regulations.",
  "Section 177A: Electronic enforcement (CCTV, ANPR cameras) challans carry the same legal weight as physical challans; tampering with e-challan records is punishable by imprisonment.",
];

export default function LawsPage() {
  return (
    <div className={poppins.className}>
      <Navbar />

      <section
        id="lawsPage"
        className="w-full py-20"
        style={{
          backgroundColor: "#f6f6f6",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-black container mx-auto">
          <div className="mx-auto max-w-5xl px-6 sm:p-0">
            {/* Title */}
            <h1 className="text-4xl mt-10 font-bold text-center leading-tight mb-10">
              Digital Rule & Law Book – <span className="text-black">Traff IQ</span>
            </h1>

            {/* Rules Section */}
            <div id="rules" className="my-16">
              <h2 className="text-2xl font-semibold text-center mb-8">Traffic Rules</h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                Below are detailed professional traffic rules that govern everyday road usage,
                designed for safe, disciplined, and lawful driving. These are less commonly known
                but highly enforced by authorities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trafficRules.map((rule, idx) => (
                  <Card key={`rule-${idx}`} title={rule} />
                ))}
              </div>
            </div>

            {/* Laws Section */}
            <div id="laws" className="my-16">
              <h2 className="text-2xl font-semibold text-center mb-8">Traffic Laws</h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                These laws are derived from the Motor Vehicles Act and Central Motor Vehicle Rules,
                and carry legal and financial consequences if violated.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trafficLaws.map((law, idx) => (
                  <Card key={`law-${idx}`} title={law} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CustomCursor />
    </div>
  );
}

/* --- Small Card component --- */
function Card({ title }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <span className="mt-1" aria-hidden>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-gray-700">{title}</p>
      </div>
    </div>
  );
}
