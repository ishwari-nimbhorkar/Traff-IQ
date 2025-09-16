// components/FeaturedGrid.js
import Link from "next/link";


export default function Services() {
  return (
    <section
      className="w-full bg-cover mt-[-60px] bg-center pt-20 pb-8"
      id="featuredGrid-54c9e9323c91"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 md:w-3/5 w-full text-left">
          <h2
            id="expertise-driven-solutions"
            className="text-3xl md:text-4xl   font-bold leading-tight mb-4"
          >Innovating The Way 
 <br /> Cities Move
          </h2>
          <p className="text-gray-700 text-base tracking-[0.1px] md:text-[16px]">
            From real-time monitoring to advanced traffic forecasting, our full suite of services ensures cities stay safe, efficient, and connected.

          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="relative bg-[#1a1a1a] border border-[#D9D9D9] rounded-xl flex flex-col justify-between px-4 md:px-8 py-12 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <Link href="/features&services/#services" className="absolute inset-0 z-10" />
            <div className="flex flex-col space-y-2.5 pt-6 z-20">
              <h3 className="text-lg md:text-xl font-poppins font-semibold tracking-[0.1px] text-white mb-2.5">
                Smart Traffic Control
              </h3>
              <p className="text-[13px] tracking-[0.1px] font-poppins  text-gray-300">
                Adaptive traffic lights that adjust in real-time based on congestion, vehicle flow, and emergency priorities.
              </p>
            </div>
            <div className="flex space-x-2 items-center mt-6 text-white transition-colors duration-300 z-20">
              <span className="md:text-[16px]  font-poppins tracking-[0.1px]">View More </span>
               <svg 
            width="18"  
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
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#1a1a1a] border border-[#D9D9D9] rounded-xl flex flex-col justify-between px-4 md:px-8 py-12 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <Link href="/features&services/#services" className="absolute inset-0 z-10" />
            <div className="flex flex-col space-y-2.5 pt-6 z-20">
              <h3 className="text-lg md:text-xl tracking-[0.1px] font-poppins font-semibold text-white mb-2.5">
                Real-Time Monitoring 

              </h3>
              <p className="text-[13px] font-poppns tracking-[0.1px] text-gray-300">
                Continuous tracking of road conditions with AI-powered insights to predict and manage congestion effectively.

              </p>
            </div>
            <div className="flex space-x-4 items-center mt-6 text-white  transition-colors duration-300 z-20">
              <span  className="md:text-[16px] tracking-[0.1px]">Get Seen</span>
               <svg 
            width="18"  
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
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#1a1a1a] border border-[#D9D9D9] rounded-xl flex flex-col justify-between px-4 md:px-8 py-12 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <Link href="/features&services/#services" className="absolute inset-0 z-10" />
            <div className="flex flex-col space-y-2.5 pt-6 z-20">
              <h3 className="text-lg md:text-xl tracking-[0.1px] font-poppins font-semibold text-white mb-2.5">
                Emergency Management

              </h3>
              <p className="text-[13px] tracking-[0.1px] font-poppins text-gray-300">
                Prioritization for emergency vehicles, quick incident detection, and automated rerouting for smooth mobility.

              </p>
            </div>
            <div className="flex space-x-4 items-center mt-6 text-white  transition-colors duration-300 z-20">
              <span  className="md:text-[16px] tracking-[0.1px]">Learn more</span>
              <svg 
            width="18"  
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
