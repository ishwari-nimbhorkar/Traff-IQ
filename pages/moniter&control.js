// pages/index.tsx
import Image from 'next/image'
import Navbar from "@/components/higerAuthority_Navbar";
import { useEffect, useState, useCallback } from "react";
import { Video, Activity, Power, Lightbulb } from "lucide-react";
import ControllerPanel from '@/components/FullTrafficController';
import UserManual from '@/components/Usermanual';
import Footer from '@/components/higherAuthority_Footer';
import ProtectedRoute from "@/components/ProtectedRoute";
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  
  const data = [
    { label: "Controller ID", value: "TC-AMT-001" },
    { label: "City Name", value: "Amravati" },
    { label: "Authority", value: "Amravati Municipal Corporation (AMC)" },
    { label: "Department", value: "Urban Traffic & Road Safety Division" },
    { label: "Operator in Charge", value: "Mr. R. Kulkarni" },
    { label: "Shift Supervisor", value: "Mrs. S. Deshmukh" },
    { label: "Emergency Contact", value: "+91-98765-43210" },
    { label: "Control Center Hub", value: "Amravati Smart City Traffic HQ" },
  ];

   const AREAS = [
  "Rajapeth Square",
  "Gopal Nagar",
  "Irwin Chowk",
  "Badnera Road",
  "Camp Area",
  "Gandhi Chowk",
  "Railway Station",
  "University Road",
  "Kathora Naka",
  "Morshi Road",
  "Walgaon Road",
  "Chandur Bazar Road",
  "Shankar Nagar",
  "Sai Nagar",
  "Paradise Chowk",
  "Cotton Market",
  "Nandgaonpeth",
  "Rathi Nagar",
  "VMV Road",
  "Rajapeth Bus Stop",

  // 🔽 Added areas with "n" in name
  "Gadge Nagar",
  "Rukhmini Nagar",
  "Arjun Nagar",
  "Saraswati Nagar",
  "Sainath Nagar",
  "Rajkamal Square",
  "Chatrapati Square",
  "Dastur Nagar",
  "Panchvati Square",
  "Yashwant Nagar",
  "Sant Gadge Baba Amravati University Area"
];  
   const [selectedArea, setSelectedArea] = useState(AREAS[0]);
  const [controlType, setControlType] = useState("Adaptive");
  const [signalMode, setSignalMode] = useState("Sensor-Based");
  
   
   const [cameraStats, setCameraStats] = useState([
    { camNo: 1, lane: 1, vehicles: 18, congestion: "Low", speed: 45 },
    { camNo: 2, lane: 2, vehicles: 35, congestion: "Medium", speed: 30 },
    { camNo: 3, lane: 3, vehicles: 50, congestion: "High", speed: 15 },
    { camNo: 4, lane: 4, vehicles: 22, congestion: "Low", speed: 40 },
  ]);


  const cameras = [
    { camNo: 1, lane: 1, video: "/video/videoplayback(2).mp4" },
    { camNo: 2, lane: 2, video: "/video/videoplayback(3).mp4" },
    { camNo: 3, lane: 3, video: "/video/videoplayback(4).mp4" },
    { camNo: 4, lane: 4, video: "/video/videoplayback(1).mp4" },
  ];


  const updateStats = () => {
    setCameraStats((prevStats) =>
      prevStats.map((cam) => {
        let newVehicles = cam.vehicles;
        let newSpeed = cam.speed;
        let newCongestion = cam.congestion;

        // Random fluctuation
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2 vehicles
        newVehicles = Math.max(5, cam.vehicles + change);

        // Calculate congestion based on vehicle count
        if (newVehicles <= 20) {
          newCongestion = "Low";
          newSpeed = 40 + Math.floor(Math.random() * 6); // 40-45 km/h
        } else if (newVehicles <= 40) {
          newCongestion = "Medium";
          newSpeed = 25 + Math.floor(Math.random() * 6); // 25-30 km/h
        } else {
          newCongestion = "High";
          newSpeed = 10 + Math.floor(Math.random() * 6); // 10-15 km/h
        }

        return {
          ...cam,
          vehicles: newVehicles,
          congestion: newCongestion,
          speed: newSpeed,
        };
      })
    );
  };

    // Update stats every 1 second
  useEffect(() => {
    const interval = setInterval(updateStats, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
     <ProtectedRoute requiredRole="Admin">

  <>
  <Navbar />
    <div className="flex flex-col items-center justify-top min-h-screen font-poppins rounded-2xl mt-20  bg-white mx-7 py-12">
      
      {/* Headline */}
      <div className="text-4xl font-bold mb-6 flex text-center items-center">
       <p className="mr-2 font-poppins text-black">Control{" "}
        <span className="text-red-600 font-poppins">and{" "}
</span>Monitoring</p>

      </div>

      {/* Subtext */}
      <div className="max-w-[980px] text-center font-poppins text-gray-700 leading-relaxed mb-8">
        This entire page is hard-coded, and live camera feeds or control access are not publicly available. It is presented purely for demonstration purposes, to illustrate our vision of how adaptive traffic control can help address urban traffic problems. While it is technically possible to integrate live data through APIs, no public APIs currently provide this information, and manually feeding data is a time-consuming process. Nevertheless, we are committed to planning and executing solutions that aim to make urban areas traffic-free.
      </div>
       
          <div className="bg-white shadow-md w-full mx-20 rounded-xl p-6 ">
      <h2 className="text-xl font-bold font-poppins mb-4 text-gray-800">
        🚦 Traffic Controller Info
      </h2>
      <table className="w-full border  border-gray-200 rounded-lg overflow-hidden text-sm">
        <tbody>
          {data.reduce((rows, item, index) => {
            if (index % 2 === 0) rows.push([item]);
            else rows[rows.length - 1].push(item);
            return rows;
          }, []).map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              {row.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 border-b border-gray-200 w-1/2 align-top"
                >
                  <div className="font-semibold text-gray-700">{col.label}</div>
                  <div className="text-gray-600">{col.value}</div>
                </td>
              ))}
              {row.length === 1 && <td className="w-1/2"></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

</div>
 <div className="bg-gray-100 min-h-screen font-poppins p-6">      

      {/* Camera Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      {cameraStats.map((cam) => {
        let congestionColor;
        if (cam.congestion === "Low") congestionColor = "bg-green-500";
        else if (cam.congestion === "Medium") congestionColor = "bg-yellow-400";
        else congestionColor = "bg-red-600";

        return (
          <div key={cam.camNo} className="relative bg-black rounded-lg overflow-hidden shadow-lg">
            {/* Camera Label */}
            <div className="absolute top-2 left-2 bg-gray-900/80 px-3 py-1 rounded text-xs text-white font-medium z-10">
              Cam-{cam.camNo} | Lane-{cam.lane}
            </div>

            {/* Video Feed */}
            <video
              src={cameras.find(c => c.camNo === cam.camNo)?.video}
              className="w-full h-70 object-cover"
              autoPlay
              loop
              muted
            />

            {/* Traffic Stats Overlay */}
            <div className="absolute gap-9 bottom-0 left-0 w-full bg-gray-900/70 p-3 text-white text-sm flex flex-row ">
              <div>Vehicle Count: <span className="font-semibold">{cam.vehicles}</span></div>
              <div>Congestion Level: <span className={`font-semibold ${congestionColor} px-2 py-0.5 rounded`}>{cam.congestion}</span></div>
              <div>Average Speed: <span className="font-semibold">{cam.speed} km/h</span></div>
            </div>
          </div>
        );
      })}
    </div>
<div className="grid grid-cols-1 md:grid-cols-3  gap-4 mb-6 text-sm">
        
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <span className="block font-semibold text-gray-700">CCTV Status</span>
          <span className="inline-block mt-1 px-9 ml-35 py-3 text-xs rounded-full bg-green-200 text-green-800 font-medium">
            Active
          </span>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <span className="block font-semibold text-gray-700">Health Status</span>
          <span className="inline-block mt-1 px-9 ml-32 py-3 text-xs rounded-full bg-blue-200 text-blue-800 font-medium">
            Operational
          </span>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <span className="block font-semibold text-gray-700">Area</span>
          <select
            className="mt-2 w-full p-2 rounded-md border border-indigo-500 text-indigo-600 font-medium shadow-sm  text-sm"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            {AREAS.map((area, i) => (
              <option key={i} value={area}>{area}</option>
            ))}
          </select>
        </div>
      </div>

      <ControllerPanel camData={cameraStats} />
      <UserManual />
      
    </div>
    <Footer />
         <CustomCursor />

  </>
  </ProtectedRoute>

  );
}


