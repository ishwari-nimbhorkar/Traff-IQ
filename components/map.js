"use client"; // only if you're on Next.js App Router
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
        const tt = await import("@tomtom-international/web-sdk-maps");

        mapRef.current = tt.map({
          key: process.env.NEXT_PUBLIC_TOMTOM_API_KEY,
          container: "map",
          style: "tomtom://vector/1/basic-main", // ✅ correct style
          center: [77.4126, 23.2599],
          zoom: 10,
        });

        new tt.Marker().setLngLat([77.4126, 23.2599]).addTo(mapRef.current);

        return () => mapRef.current.remove();
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
          // ✅ Direct TomTom call (if you’re not using API route)
          const apiKey = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;
          const res = await fetch(
            `https://api.tomtom.com/search/2/search/${encodeURIComponent(
              value
            )}.json?key=${apiKey}`
          );

          if (!res.ok) {
            console.error("TomTom API error", res.status);
            return;
          }

          const data = await res.json();
          setResults(data.results || []);

          // Add first result to map
          if (mapRef.current && data.results?.length > 0) {
            const { position } = data.results[0];
            mapRef.current.setCenter([position.lon, position.lat]);
            new (await import("@tomtom-international/web-sdk-maps")).Marker()
              .setLngLat([position.lon, position.lat])
              .addTo(mapRef.current);
          }
        } catch (err) {
          console.error("Search error:", err);
        }
      } else {
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
                if (mapRef.current && item.position) {
                  mapRef.current.setCenter([
                    item.position.lon,
                    item.position.lat,
                  ]);
                  new (window.tt.Marker)()
                    .setLngLat([item.position.lon, item.position.lat])
                    .addTo(mapRef.current);
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
