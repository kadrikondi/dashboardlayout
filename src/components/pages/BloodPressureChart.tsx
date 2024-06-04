import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const BloodPressureChart: React.FC = () => {
  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: [130, 140, 160, 120, 140, 160],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
      {
        label: "Diastolic",
        data: [90, 80, 70, 75, 70, 78],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-purple-50  flex ">
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4 w-96 ">
          Blood Pressure
        </h2>
        <div className="mb-4">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="text-gray-600">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-pink-500 font-medium">Systolic</p>
            <p className="text-lg font-semibold">160</p>
            <p className="text-sm">Higher than Average</p>
          </div>
          <div>
            <p className="text-blue-500 font-medium">Diastolic</p>
            <p className="text-lg font-semibold">78</p>
            <p className="text-sm">Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
