"use client";

import { useEffect, useState, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { INDIAN_STATES } from "@/data/state";
import { INDIAN_CITIES } from "@/data/cities";
import Timecard from "@/components/Timecard"
import TrafficStats from "@/components/Trafficstats";
import TimeCalc from "@/components/TimeCalc"


// ✅ Helper to normalize Google API location objects
function getLatLng(location) {
  if (!location) return null;
  const lat = typeof location.lat === "function" ? location.lat() : location.lat;
  const lng = typeof location.lng === "function" ? location.lng() : location.lng;
  return { lat, lng };
}

// ✅ Controls Component
function MapControls({ mapRef, trafficLayerRef }) {
  const [active, setActive] = useState("all");
 const [city, setCity] = useState("Mumbai");

  return (
    <div className="absolute top-5 left-50 font-poppins text-[13px] -translate-x-1/2 z-20 flex items-center bg-white rounded-full shadow p-1 space-x-1">
      {/* Satellite */}
      <button
        onClick={() => {
          mapRef.current?.setMapTypeId(google.maps.MapTypeId.SATELLITE);
          setActive("satellite");
        }}
        className={`px-4 py-2 rounded-full font-medium transition ${
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
        className={`px-4 py-2 rounded-full font-medium transition ${
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
        className={`px-4 py-2 rounded-full font-medium transition ${
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

// ✅ Hero Section
const Hero = ({ onSearch, mapRef }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchedCity, setSearchedCity] = useState("");
  const [lastUpdated, setLastUpdated] = useState(""); // <-- NEW
  const [manualInput, setManualInput] = useState(false);
   const [city, setCity] = useState("Mumbai");


  // Detect user location on load (offline search using dataset)
  useEffect(() => {
    if (navigator.geolocation && !manualInput) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          // ✅ Find closest city in offline dataset
          const dataset = [...INDIAN_STATES, ...INDIAN_CITIES];
          let closestCity = dataset[0];
          let minDistance = Infinity;

          dataset.forEach((loc) => {
            const distance = Math.sqrt(
              Math.pow(lat - loc.lat, 2) + Math.pow(lon - loc.lng, 2)
            );
            if (distance < minDistance) {
              minDistance = distance;
              closestCity = loc;
            }
          });

          // ✅ Auto set city + update time
          if (!manualInput) {
            setQuery(closestCity.name);
            setSearchedCity(closestCity.name);
            setLastUpdated(new Date().toLocaleTimeString()); // <-- update time
            if (onSearch) onSearch({ city: closestCity.name });

            // ✅ Center map and add marker
            if (window.google && mapRef.current) {
              mapRef.current.setCenter({
                lat: closestCity.lat,
                lng: closestCity.lng,
              });
              mapRef.current.setZoom(12);

              new google.maps.Marker({
                position: { lat: closestCity.lat, lng: closestCity.lng },
                map: mapRef.current,
                title: closestCity.name,
              });
            }
          }

          setLoading(false);
        },
        (err) => {
          console.warn("Location permission denied:", err);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, [onSearch, mapRef, manualInput]);

  const handleSearchClick = () => {
    if (!query.trim()) return;
    setSearchedCity(query);
    setLastUpdated(new Date().toLocaleTimeString()); // <-- update timestamp
    if (onSearch) onSearch({ city: query });
  };

  return (
    <section className="w-full flex items-center justify-center min-h-[620px] -mt-10 pb-20 bg-center bg-cover">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-[40px] font-semibold leading-tight tracking-wide mb-6 font-poppins">
            {searchedCity ? (
              <>
                <span className="text-red-600 font-poppins ">
                  {searchedCity}
                </span>
                , India live traffic update
              </>
            ) : (
              <>Search location, India live traffic update</>
            )}
          </h1>

          {/* ✅ Last updated time */}
          {lastUpdated && (
            <p className="text-gray-500 text-[14px] mb-4 font-poppins">
              Last updated: {lastUpdated}
            </p>
          )}

          <p className="text-gray-600 font-poppins text-[16px] tracking-[0.1px] max-w-5xl mx-auto">
            Real-time AI-powered traffic updates to help reduce congestion,
            optimize signals, and improve road safety.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center gap-5 w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search by City..."
                aria-label="Search location"
                value={loading ? "Detecting location..." : query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setManualInput(true);
                }}
                disabled={loading}
                className="flex-1 h-12 px-5 text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder-gray-400 font-poppins"
              />
              <button
                onClick={handleSearchClick}
                disabled={loading}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                <span className="text-sm font-medium">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Main Map Page
export default function MapPage() {
  const [query, setQuery] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
    const [currentCity, setCurrentCity] = useState("Mumbai");
  const debounceTimer = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const trafficLayerRef = useRef(null);

  // Initialize Google Map
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      loader.load().then(() => {
        mapRef.current = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 20.933, lng: 77.751 }, // Default Amravati
          zoom: 6,
        });

        trafficLayerRef.current = new google.maps.TrafficLayer();
        trafficLayerRef.current.setMap(mapRef.current);
      });
    }
  }, []);

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  };

  // ✅ Handle search (local dataset only)
  const handleSearch = (val) => {
    setQuery(val);
    clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      if (!val.trim()) {
        clearMarkers();
        return;
      }

      const dataset = [...INDIAN_STATES, ...INDIAN_CITIES];
      const localResults = dataset.filter((loc) =>
        loc.name.toLowerCase().includes(val.toLowerCase())
      );

      if (localResults.length === 0) {
        setFlashMessage("⚠️ No results found.");
        clearMarkers();
        return;
      } else {
        setFlashMessage("");
      }

      if (mapRef.current) {
        clearMarkers();
        localResults.forEach((loc) => {
          const marker = new google.maps.Marker({
            position: { lat: loc.lat, lng: loc.lng },
            map: mapRef.current,
          });
          markersRef.current.push(marker);
        });

        mapRef.current.setCenter({
          lat: localResults[0].lat,
          lng: localResults[0].lng,
        });
        mapRef.current.setZoom(12);
      }
            setCurrentCity(val);

    }, 500);
  };

  return (
  <>
    <div>
      {/* ✅ Hero with auto-location detection */}
      <Hero
        mapRef={mapRef}
        onSearch={(loc) => {
          if (loc.city) handleSearch(loc.city);
        }}
      />

      {flashMessage && (
        <div className="max-w-5xl mx-auto mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
          {flashMessage}
        </div>
      )}

      <div className="relative w-full h-[600px] max-w-[1300px] -mt-50 rounded-2xl overflow-hidden shadow-lg mx-auto">
        {/* Floating controls */}
        <MapControls mapRef={mapRef} trafficLayerRef={trafficLayerRef} />

        {/* Map */}
        <div id="map" className="w-full h-full" />

        {/* Delay Legend */}
        <div className="absolute bottom-14 text-[13px] right-15 z-50">
          <div className="flex rounded-full font-poppins overflow-hidden shadow-lg">
            <div className="px-2 py-2 bg-red-600 text-white font-medium">
              Major delay
            </div>
            <div className="px-2 py-2 bg-yellow-400 text-gray-800 font-medium">
              Minor delay
            </div>
            <div className="px-2 py-2 bg-green-600 text-white font-medium">
              No delay
            </div>
          </div>
        </div>
      </div>
    </div>
    <Timecard /> 
     <div className="max-w-5xl mx-auto mt-12">
        <TrafficStats city={currentCity} />
      </div>
      <div>
        <TimeCalc />
      </div>
    </>
  );
}
