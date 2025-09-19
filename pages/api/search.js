export default async function handler(req, res) {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: "Missing query" });
    }

    const apiKey = process.env.NEXT_PUBLIC_TOMTOM_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing API key" });
    }

    const response = await fetch(
      `https://api.tomtom.com/search/2/search/${encodeURIComponent(
        q
      )}.json?key=${apiKey}`
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("TomTom API error:", text);
      return res
        .status(response.status)
        .json({ error: "TomTom API failed", details: text });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
