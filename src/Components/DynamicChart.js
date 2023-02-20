import React from "react";
import {
  Bar,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import PropTypes from "prop-types";
ChartJS.register(...registerables);

function DynamicChart({ chartType, data }) {
  const BarChart = () => {
    return <Bar data={data} />;
  };

  const LineChart = () => {
    return <Line data={data} />;
  };

  const PieChart = () => {
    return <Pie data={data} />;
  };

  const DoughnutChart = () => {
    return <Doughnut data={data} />;
  };

  const RadarChart = () => {
    return <Radar data={data} />;
  };

  const ScatterChart = () => {
    return <Scatter data={data} />;
  };

  const PolarChart = () => {
    return <PolarArea data={data} />;
  };

  const renderChart = (type) => {
    switch (type) {
      case "bar":
        return <BarChart />;
      case "line":
        return <LineChart />;
      case "pie":
        return <PieChart />;
      case "doughnut":
        return <DoughnutChart />;
      case "radar":
        return <RadarChart />;
      case "scatter":
        return <ScatterChart />;
      case "polar":
        return <PolarChart />;
      default:
        return null;
    }
  };
  return data ? renderChart(chartType) : null;
}

DynamicChart.propTypes = {
  chartType: PropTypes.string,
  data: PropTypes.any,
};

export default DynamicChart;
