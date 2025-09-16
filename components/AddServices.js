// components/ServicesCTA.js
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <div className="md:w-3/5 mx-auto text-center">
        {/* Heading & Description */}
        <p className="text-base tracking-[0.1px] font-poppins text-gray-600 md:text-[16px]">
          <strong>Discover smart traffic solutions </strong>that reduce congestion, {" "}
          
improve safety, and 
{" "}
          <Link
            href="/services"
            className="font-extrabold hover:underline"
            target="_self"
          >
            AI-powered services
          </Link>{" "}
          create smoother journeys for <i>Everyone.</i>
        </p>

        {/* Buttons */}
        <div className="my-6 tracking-[0.1px] font poppins flex flex-wrap gap-3 justify-center">
          <Link
            href="/features&services/#services"
            target="_self"
            className="inline-flex items-center justify-center text-gray-600 gap-2 whitespace-nowrap rounded-md border border-gray-700 border-input bg-background px-4 py-2 h-10 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Data Reporting
          </Link>

          <Link
            href="/features&services/#services"
            target="_self"
            className="inline-flex items-center justify-center text-gray-600 gap-2 whitespace-nowrap rounded-md border border-gray-700 border-input bg-background px-4 py-2 h-10 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Route Optimization
          </Link>

          <Link
            href="/features&services/#services"
            target="_self"
            className="inline-flex items-center justify-center text-gray-600 gap-2 whitespace-nowrap rounded-md border border-gray-700 border-input bg-background px-4 py-2 h-10 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Parking Management
          </Link>
        </div>

        {/* Placeholder for additional content if needed */}
        <div className="mt-10 flex flex-wrap items-center gap-2 md:gap-x-6 md:gap-y-2 justify-center"></div>
      </div>
    </div>
  );
}
