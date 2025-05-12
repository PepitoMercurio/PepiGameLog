// components/MyBarChart.js
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      ticks: {
        display: false
      },
      title: {
        display: false
      },
      grid: {
        drawTicks: false,
        display: false
      }
    },
    y: {
      ticks: {
        display: false
      },
      title: {
        display: false
      },
      grid: {
        drawTicks: false,
        display: false
      }
    }
  }
};

const BarChart = () => {
    const labels = ["0.5⭐", "1.0⭐", "1.5⭐", "2.0⭐", "2.5⭐", "3.0⭐", "3.5⭐", "4.0⭐", "4.5⭐", "5.0⭐"];
    
    const data = {
    labels,
    datasets: [
        {
            data: [0.5, 1.0, 1.5, 2.0, 2.5, 3.0 ,3.5, 4.0, 4.5, 5],
            backgroundColor: "#006AD7",
            borderRadius: 6,
        }
    ]
    };
  return <Bar options={options} data={data} />;
}

export default BarChart
