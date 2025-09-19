"use client"; // only if you're using Next.js App Router
import { useEffect, useState, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

export default function MapPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debounceTimer = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        try {
          console.log("📌 Importing TomTom SDK...");
          const tt = await import("@tomtom-international/web-sdk-maps");

          const apiKey = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;
          console.log("✅ Loaded API Key:", apiKey);

          if (!apiKey) {
            console.error("❌ Missing TomTom API key!");
            return;
          }

          console.log("📌 Initializing map...");
          mapRef.current = tt.map({
            key: apiKey,
            container: "map",
        style:
    "https://api.tomtom.com/style/1/basic/main.json?key=" +
    process.env.NEXT_PUBLIC_TOMTOM_API_KEY,
            center: [77.4126, 23.2599],
            zoom: 10,
          });

          if (mapRef.current) {
            console.log("✅ Map initialized successfully");
            new tt.Marker()
              .setLngLat([77.4126, 23.2599])
              .addTo(mapRef.current);
            console.log("📌 Default marker added at [77.4126, 23.2599]");
          } else {
            console.error("❌ Map failed to initialize!");
          }

          return () => {
            if (mapRef.current) {
              console.log("🧹 Cleaning up map instance...");
              mapRef.current.remove();
            }
          };
        } catch (err) {
          console.error("❌ Error setting up TomTom map:", err);
        }
      })();
    }
  }, []);

  // Debounced search
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(async () => {
      if (value.trim().length > 2) {
        try {
          const apiKey = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;
          console.log("🔎 Searching for:", value, "with API key:", apiKey);

          if (!apiKey) {
            console.error("❌ Missing API key during search!");
            return;
          }

          const url = `https://api.tomtom.com/search/2/search/${encodeURIComponent(
            value
          )}.json?key=${apiKey}`;

          console.log("🌍 Fetching:", url);

          const res = await fetch(url);

          if (!res.ok) {
            console.error("❌ TomTom API error:", res.status, res.statusText);
            return;
          }

          const data = await res.json();
          console.log("✅ Search results:", data);

          setResults(data.results || []);

          // Add marker for first result
          if (mapRef.current && data.results?.length > 0) {
            const { position } = data.results[0];
            console.log("📌 Centering map to:", position);

            mapRef.current.setCenter([position.lon, position.lat]);

            new (await import("@tomtom-international/web-sdk-maps")).Marker()
              .setLngLat([position.lon, position.lat])
              .addTo(mapRef.current);

            console.log("✅ Marker added at:", position);
          }
        } catch (err) {
          console.error("❌ Search error:", err);
        }
      } else {
        console.log("ℹ️ Query too short, clearing results");
        setResults([]);
      }
    }, 500);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen space-y-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search location..."
        value={query}
        onChange={handleSearch}
        className="w-full max-w-lg p-3 border rounded-xl shadow focus:outline-none focus:ring focus:ring-blue-400"
      />

      {/* Search Results */}
      {results.length > 0 && (
        <ul className="w-full max-w-lg bg-white rounded-xl shadow divide-y">
          {results.map((item, idx) => (
            <li
              key={idx}
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                console.log("📌 Clicked result:", item);
                if (mapRef.current && item.position) {
                  mapRef.current.setCenter([
                    item.position.lon,
                    item.position.lat,
                  ]);
                  new (window.tt.Marker)()
                    .setLngLat([item.position.lon, item.position.lat])
                    .addTo(mapRef.current);
                  console.log("✅ Marker added at clicked result:", item.position);
                }
              }}
            >
              {item.address.freeformAddress}
            </li>
          ))}
        </ul>
      )}

      {/* Map Container */}
      <div className="w-full h-[600px] max-w-5xl border-2 border-gray-300 rounded-2xl overflow-hidden shadow-lg">
        <div id="map" className="w-full h-full" />
      </div>
    </div>
  );
}
