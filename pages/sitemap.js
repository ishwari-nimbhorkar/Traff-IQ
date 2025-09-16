import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Poppins } from "next/font/google";

// SEO metadata (Next.js 13+ App Router)
export const metadata = {
  title: "Sitemap – Traff-IQ",
  description:
    "Traff-IQ sitemap offers a clear navigation guide for daily users and traffic authorities—helping citizens access routes, updates, and insights quickly, while enabling authorities to manage alerts, reports, and control tools with ease.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const siteSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Traff IQ", href: "/aboutus" },
      { name: "Essential Information", href: "/essentials" },
      { name: "Digital Rule & Law Book", href: "/lawbook" },
      { name: "Services & Features", href: "/services" },
    ],
  },
  {
    title: "User Section",
    links: [
      { name: "Dashboard", href: "/user/dashboard" },
      { name: "Live Traffic Updates", href: "/user/live-traffic" },
      { name: "Route Suggestions & Optimization", href: "/user/routes" },
      { name: "E-Challan & Fines", href: "/user/challan" },
      { name: "Report Violations", href: "/user/report" },
      { name: "Emergency Assistance", href: "/user/emergency" },
      { name: "User Profile & Vehicle Details", href: "/user/profile" },
      { name: "Permit & Pass Applications", href: "/user/permits" },
      { name: "Feedback & Support", href: "/user/support" },
    ],
  },
  {
    title: "Authority Section",
    links: [
      { name: "Admin Dashboard", href: "/authority/dashboard" },
      { name: "Live Traffic Monitoring", href: "/authority/live-traffic" },
      { name: "Violation & Challan Management", href: "/authority/challan" },
      { name: "Incident & Emergency Management", href: "/authority/incidents" },
      { name: "Permit & Pass Management", href: "/authority/permits" },
      { name: "User Reports & Complaints", href: "/authority/reports" },
      { name: "Law Book Management", href: "/authority/lawbook" },
      { name: "Analytics & Insights", href: "/authority/analytics" },
      { name: "Officer & Role Management", href: "/authority/officers" },
      { name: "System Settings & Integrations", href: "/authority/settings" },
      { name: "Communication & Alerts", href: "/authority/alerts" },
      { name: "Audit & Compliance Reports", href: "/authority/audit" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { name: "Privacy Policy", href: "/essentials/#privacy-policy" },
      { name: "Terms & Conditions", href: "/essentials/#terms-conditions" },
      { name: "Copyright Policy", href: "/essentials/#copyright-policy" },
      { name: "Disclaimer", href: "/essentials/#disclaimer" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className={poppins.className}>
      <Navbar />

      <main id="sitemapPage" className="w-full py-20 bg-[#f6f6f6] bg-center bg-cover">
        <div className="text-black container mx-auto">
          <div className="mx-auto max-w-5xl px-6">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center mt-10 leading-tight mb-6">
              Sitemap – <span className="text-black">Traff IQ</span>
            </h1>

            {/* Description */}
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
              <b>Traff-IQ sitemap</b> offers a clear navigation guide for both daily
              users and traffic authorities—helping citizens access routes,
              updates, and insights quickly, while enabling authorities to manage
              alerts, reports, and control tools with ease.
            </p>

            {/* Sections */}
            {siteSections.map((section, idx) => (
              <div key={idx} className="my-12">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.links.map((link, i) => (
                    <Card key={i} title={link.name} href={link.href} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <CustomCursor />
    </div>
  );
}

/* --- Card Component --- */
function Card({ title, href }) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white shadow-md rounded-2xl p-5 transition-transform transform group-hover:-translate-y-1 group-hover:shadow-lg">
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
    </Link>
  );
}
