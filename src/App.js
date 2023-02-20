import React, { useState } from "react";
import DynamicChart from "./Components/DynamicChart";
import "./App.css";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

function App() {
  const [chartType, setChartType] = useState("line");
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: "# of Votes",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
        ],
      },
    ],
  };

  const chartTypes = [
    {
      value: "bar",
      label: "Bar Chart",
    },
    {
      value: "line",
      label: "Line Chart",
    },
    {
      value: "pie",
      label: "Pie Chart",
    },
    {
      value: "doughnut",
      label: "Doughnut Chart",
    },
    {
      value: "radar",
      label: "Radar Chart",
    },
    {
      value: "scatter",
      label: "Scatter Chart",
    },
    {
      value: "polar",
      label: "Polar Chart",
    },
  ];

  const chartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const renderMenuItems = (menus) => {
    return menus && menus.length > 0 ? (
      menus.map((menu, menuIndex) => (
        <MenuItem key={menuIndex} value={menu.value}>
          {menu.label}
        </MenuItem>
      ))
    ) : (
      <MenuItem>Select</MenuItem>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <header className="p-2">
          <FormControl fullWidth>
            <InputLabel id="chartType">Chart Type</InputLabel>
            <Select
              labelId="chartType"
              value={chartType}
              label="ChartType"
              onChange={chartTypeChange}
            >
              {renderMenuItems(chartTypes)}
            </Select>
          </FormControl>
        </header>
        <section className="chartContainer">
          <DynamicChart
            chartType={chartType}
            data={chartType === "scatter" ? scatterData : data}
          />
        </section>
      </Grid>
    </Grid>
  );
}

export default App;
