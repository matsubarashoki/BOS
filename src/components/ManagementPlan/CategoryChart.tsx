import { Pie } from "react-chartjs-2";

import { useTheme } from "@mui/material";
import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = () => {
  const theme = useTheme();

  const categoryLabels = ["Sample", "Sample2", "Sample3"];

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  const data: ChartData<"pie"> = {
    labels: categoryLabels,
    datasets: [
      {
        data: [1000, 2000, 3000],
        backgroundColor: ["#1769aa", "#2196f3", "#4dabf5"],
      },
    ],
  };

  return <Pie data={data} options={options} />;
};

export default CategoryChart;
