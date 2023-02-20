import React, { useState } from "react";
import DynamicChart from "./Components/DynamicChart";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import SampleJson from "./data/product.json";
import "./App.css";

function App() {
  const [chartType, setChartType] = useState("line");

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
          <FormControl>
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
            chartData={SampleJson}
            label="Product"
          />
        </section>
      </Grid>
    </Grid>
  );
}

export default App;
