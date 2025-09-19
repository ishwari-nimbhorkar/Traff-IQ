import { useState } from "react";

export default function MapControls({ mapRef, trafficLayerRef }) {
  const [active, setActive] = useState("all"); // default active button

  return (
    <div className="flex  bg-white rounded-full shadow p-1 space-x-1">
      {/* Satellite */}
      <button
        onClick={() => {
          mapRef.current?.setMapTypeId(google.maps.MapTypeId.SATELLITE);
          setActive("satellite");
        }}
        className={`px-[13px] py-[4px] rounded-full text-[13px] font-medium transition ${
          active === "satellite"
            ? "bg-red-600 text-white"
            : "bg-transparent text-gray-700 hover:bg-gray-100"
        }`}
      >
        Satellite
      </button>

      {/* Show Traffic */}
      <button
        onClick={() => {
          if (mapRef.current && trafficLayerRef.current) {
            mapRef.current.setMapTypeId(google.maps.MapTypeId.ROADMAP);
            trafficLayerRef.current.setMap(mapRef.current);
          }
          setActive("traffic");
        }}
        className={`px-[13px] py-[4px] rounded-full text-[13px] font-medium transition ${
          active === "traffic"
            ? "bg-red-600 text-white"
            : "bg-transparent text-gray-700 hover:bg-gray-100"
        }`}
      >
        Show Traffic
      </button>

      {/* Hide Traffic */}
      <button
        onClick={() => {
          trafficLayerRef.current?.setMap(null);
          setActive("hide");
        }}
        className={`px-[13px] py-[4px] rounded-full  text-[13px] font-medium transition ${
          active === "hide"
            ? "bg-red-600 text-white"
            : "bg-transparent text-gray-700 hover:bg-gray-100"
        }`}
      >
        Hide Traffic
      </button>
    </div>
  );
}
