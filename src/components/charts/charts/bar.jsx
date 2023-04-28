import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 12,
          weight: 600,
          color:"#0d383f"
        },
      },
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: false,
};

const labels = ["BOJ", "ECB", "FED"];

const data1 = [-0.2, 3.1, 4.8];
const data2 = [0.15, 3.3, 3.7];
const data3 = [0.4, 2.7, 2.7];

export const data = {
  labels,
  datasets: [
    {
      label: "CURRENT POLICY RATE",

      data: data1,
      backgroundColor: "#0d383f",
      stack: "Stack 0",
    },
    {
      label: "EXPECTED IN 12 MONTHS*",
      data: data2,
      backgroundColor: "#009e79",
      stack: "Stack 1",
    },
    {
      label: "EXPECTED IN 24 MONTHS*",
      data: data3,
      backgroundColor: "#a39382",
      stack: "Stack 2",
    },
  ],
};

export default function BarChart() {
  return (
    <Bar
      style={{ width: "100%", height: "500px" }}
      options={options}
      data={data}
    />
  );
}
