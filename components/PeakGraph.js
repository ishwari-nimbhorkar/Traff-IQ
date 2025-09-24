"use client";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineController, // ✅ Import this
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarElement, // only if you use bar charts
} from "chart.js";

// Register chart components
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarElement // only if needed
);
const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

const trafficVolume = [
  20, 15, 18, 25, 40, 65, 90, 110, 120, 100,
  70, 60, 55, 50, 45, 70, 100, 120, 130, 115,
  80, 50, 35, 25
];

export default function TrafficChart() {
  const avg = trafficVolume.reduce((a, b) => a + b, 0) / trafficVolume.length;

  const data = {
    labels: hours,
    datasets: [
      {
        label: "Traffic Volume",
        data: trafficVolume,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "rgba(0,0,0,0.1)";

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(0, 63, 135, 0.8)");  // deep blue
          gradient.addColorStop(1, "rgba(255, 0, 0, 0.8)");   // strong red
          return gradient;
        },
        borderRadius: 4,
        barPercentage: 0.8,
        categoryPercentage: 0.9
      },
      {
        label: "Average Level",
        data: Array(24).fill(avg),
        type: "line",
        borderColor: "gray",
        borderDash: [6, 6],
        pointRadius: 0,
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 20
    },
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "",
        font: { size: 18, weight: "bold" }
      },
      tooltip: {
        callbacks: {
          label: function (ctx) {
            const v = ctx.raw;
            if (typeof v !== "number") return "";
            if (v < 50) return ` ${v} (Low congestion)`;
            if (v < 100) return ` ${v} (Medium congestion)`;
            return ` ${v} (High congestion)`;
          }
        }
      }
    },
    scales: {
      x: {
        title: { display: true, text: "Hour of Day" },
        ticks: { maxRotation: 0, autoSkip: false },
        grid: { drawOnChartArea: false }
      },
      y: {
        min: 0,
        max: 150,
        title: { display: true, text: "Vehicles / 1000 units" },
        ticks: { stepSize: 25 },
        grid: { drawBorder: true }
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg mt-10 shadow-md w-full">
        <p className="text-3xl font-poppins text-black font-semibold text-center mb-7">
        Weekly Peek and Off-peak level
      </p>
       <div className="max-w-[790px] mx-auto text-center font-poppins text-gray-700 mb-5 leading-relaxed ">
       This chart shows hourly traffic volume over 24 hours. Bars indicate actual traffic, with a blue-to-red gradient highlighting low to high congestion, while the dashed gray line shows the daily average. Peak traffic occurs at 7–10 AM and 5–8 PM, and off-peak is midday and night. Tooltips classify congestion levels as low, medium, or high.
      </div>
      <div className="h-[500px] w-full max-w-[1200px]">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-4 text-sm text-gray-600 flex justify-between w-full max-w-[1200px]">
        <p><span className="font-semibold">Peak hours:</span> 7–10 AM, 5–8 PM</p>
        <p><span className="font-semibold">Off-peak:</span> Midday & Night</p>
      </div>
    </div>
  );
}
