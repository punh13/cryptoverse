import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./styles.css";

const VolumeChart = ({ volumeData }) => {
  const chartData = {
    labels: volumeData.map((item) => new Date(item[0]).toLocaleDateString()),
    datasets: [
      {
        label: "Volume (BTC)",
        data: volumeData.map((item) => item[1]),
        fill: true,
        borderColor: "#fdbf1c",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "7-Day Trading Volume",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} BTC`,
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        title: {
          display: true,
          text: "Volume (BTC)",
        },
      },
    },
  };

  return (
    <div className="volume-chart">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default VolumeChart;
