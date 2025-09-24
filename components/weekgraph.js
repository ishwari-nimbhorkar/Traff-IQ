"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

// 🔹 Generate dummy weekly data
function generateWeeklyData() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((day) => ({
    day,
    speed: +(Math.random() * 40 + 20).toFixed(1), // 20–60 km/h
    liveCongestion: +(Math.random() * 100).toFixed(0), // 0–100%
    usualCongestion: +(Math.random() * 80 + 10).toFixed(0), // 10–90%
  }));
}

export default function WeeklyTrafficChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateWeeklyData());
  }, []);

  return (
    <div className="w-full flex flex-col -mt-15 items-center ">
      <p className="text-3xl font-poppins text-black font-semibold text-center mb-7">
        Weekly speed and congestion level
      </p>
       <div className="max-w-[790px] mx-auto text-center font-poppins text-gray-700 mb-15 leading-relaxed ">
       Blue Bars show daily average vehicle speed (km/h), where taller bars mean smoother traffic and shorter bars indicate congestion.
Red Line represents live congestion percentage, while the Grey Dotted Line shows usual congestion as a benchmark.
      </div>

      <ResponsiveContainer width="90%" height={400}>
        <ComposedChart data={data}>
          {/* Grid + Axis */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" domain={[0, 100]} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 80]}
            tickFormatter={(val) => `${val} km/h`}
          />

          {/* Tooltip + Legend */}
          <Tooltip />
          <Legend />

          {/* Bars → Speed */}
          <Bar
            yAxisId="right"
            dataKey="speed"
            barSize={20}
            fill="#003f88"
            name="Average Speed"
          />

          {/* Line → Live Congestion */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="liveCongestion"
            stroke="#df1b12"
            strokeWidth={2}
            name="Live congestion level"
          />

          {/* Line → Usual Congestion */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="usualCongestion"
            stroke="#999"
            strokeDasharray="5 5"
            name="Usual congestion level"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
