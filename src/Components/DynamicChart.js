import React, { useEffect, useState } from "react";
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

function DynamicChart({ chartType, chartData, label }) {
  const [config, setConfig] = useState(null);
  const options = {
    maintainAspectRatio: false,
  };

  const BarChart = () => {
    return <Bar data={config} />;
  };

  const LineChart = () => {
    return <Line data={config} />;
  };

  const PieChart = () => {
    return <Pie options={options} height={5} width={5} data={config} />;
  };

  const DoughnutChart = () => {
    return <Doughnut options={options} height={5} width={5} data={config} />;
  };

  const RadarChart = () => {
    return <Radar options={options} height={5} width={5} data={config} />;
  };

  const ScatterChart = () => {
    return <Scatter data={config} />;
  };

  const PolarChart = () => {
    return <PolarArea options={options} height={5} width={5} data={config} />;
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

  const chartDataIntoConfig = () => {
    const chartConfig = {
      labels: [],
      datasets: [],
    };
    const dataset = {};

    for (const data of chartData) {
      const { name, quantity, bgColor, borderColor } = data;
      if (name && quantity) {
        if (!dataset.data) {
          dataset.data = [];
        }
        chartConfig.labels.push(name);
        dataset.data.push(quantity);
      }
      if (name && quantity && bgColor) {
        if (!dataset.backgroundColor) {
          dataset.backgroundColor = [];
        }
        dataset.backgroundColor.push(bgColor);
      }
      if (name && quantity && borderColor) {
        if (!dataset.borderColor) {
          dataset.borderColor = [];
        }
        dataset.borderColor.push(borderColor);
      }
    }
    if (label) {
      dataset.label = label;
    }
    if (Object.keys(dataset).length > 0) {
      chartConfig.datasets.push(dataset);
      setConfig(chartConfig);
    }
  };

  useEffect(() => {
    chartDataIntoConfig();
  }, [chartData]);

  return config ? renderChart(chartType) : null;
}

DynamicChart.propTypes = {
  chartType: PropTypes.string,
  data: PropTypes.any,
};

export default DynamicChart;
