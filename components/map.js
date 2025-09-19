import { useEffect, useState } from "react";

export default function MapPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  let debounceTimer;

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const tt = await import("@tomtom-international/web-sdk-maps");

        const map = tt.map({
          key: process.env.NEXT_PUBLIC_TOMTOM_API_KEY,
          container: "map",
          style: {map: "basic_main"},
          center: [77.4126, 23.2599],
          zoom: 10,
        });

        new tt.Marker().setLngLat([77.4126, 23.2599]).addTo(map);

        return () => map.remove();
      })();
    }
  }, []);

  // Debounced search
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      if (value.trim().length > 2) {
        try {
          const res = await fetch(`/api/search?q=${value}`);
          const data = await res.json();
          setResults(data.results || []);
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
            <li key={idx} className="p-3 hover:bg-gray-100 cursor-pointer">
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
