// pages/index.tsx
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-poppins rounded-2xl mt-10  bg-white mx-7 py-12">
      
      {/* Headline */}
      <div className="text-4xl font-bold mb-6 flex text-center items-center">
       <p className="mr-2 font-poppins">How much time did{" "}
        <span className="text-red-600 font-poppins">we spend <br />
</span>driving every day?</p>

      </div>

      {/* Subtext */}
      <div className="max-w-[680px] text-center font-poppins text-gray-700 leading-relaxed mb-8">
        Congestion levels, travel times and speeds are based on worldwide trip data 
        spanning more than 737 billion km anonymously collected during the year 
        from drivers within the larger metropolitan area (“metro”) and central city area 
        (“city center”) throughout the complete road network — including fast roads 
        and highways crossing this area.
      </div>

      {/* Image below the subtext */}
      <Image
        src="/images/traveltime.png" 
        alt="Traffic illustration" 
        width={1100}   // set width
        height={400}  // set height
        className="max-w-full -mt-9 h-auto "
      />
    </div>
  );
}
