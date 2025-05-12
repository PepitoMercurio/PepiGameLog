// components/MyBarChart.js
"use client";

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
import React, { useState, useEffect } from "react";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      title: {
        display: false,
      },
      grid: {
        drawTicks: false,
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      title: {
        display: false,
      },
      grid: {
        drawTicks: false,
        display: false,
      },
    },
  },
};

const BarChart = ({ game_id }) => {
  const [stats, setStats] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/rating/games/${game_id}`
        );

        const receivedStats = response.data.ratingCounts;

        setStats({
          1: receivedStats["1"] || 0,
          2: receivedStats["2"] || 0,
          3: receivedStats["3"] || 0,
          4: receivedStats["4"] || 0,
          5: receivedStats["5"] || 0,
        });
      } catch (error) {
        console.error("Error fetching ratings data:", error);
      }
    };

    fetchData();
  }, [game_id]);

  const labels = ["1.0⭐", "2.0⭐", "3.0⭐", "4.0⭐", "5.0⭐"];

  const data = {
    labels,
    datasets: [
      {
        data: [stats[1], stats[2], stats[3], stats[4], stats[5]],
        backgroundColor: "#006AD7",
        borderRadius: 6,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
