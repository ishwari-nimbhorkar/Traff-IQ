'use client'

import Image from 'next/image'

export default function MumbaiTrafficPage() {
  return (
    <div className="min-h-screen bg-gray-100 mt-9 rounded-2xl  mx-7 flex justify-center">
      {/* ✅ Next.js optimized Image */}
      <Image
        src="/images/Timecalc.png"
        alt="Time Calculator"
        width={1300}   // set width
        height={1000}  // set height
        className="rounded-xl "
      />
    </div>
  )
}
 