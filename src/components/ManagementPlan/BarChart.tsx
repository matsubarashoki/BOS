import { Box, useTheme } from "@mui/material";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const theme = useTheme();
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => getRandomInt(1000, 2000)),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => getRandomInt(2000, 3000)),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Dataset 3",
        data: labels.map(() => getRandomInt(3000, 4000)),
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <Bar options={options} data={data} />
    </Box>
  );
};

export default BarChart;
