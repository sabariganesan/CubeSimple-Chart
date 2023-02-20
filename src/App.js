import React from "react";
import DynamicChart from "./Components/DynamicChart";

function App() {
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
    "bar",
    "line",
    "pie",
    "doughnut",
    "radar",
    "scatter",
    "polar",
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Charts</h2>
      {chartTypes.map((type, index) => {
        return (
          <>
            <h4>{type.toUpperCase()}</h4>
            <div
              key={index}
              style={{
                width: "500px",
                height: "300px",
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DynamicChart
                chartType={type}
                data={type === "scatter" ? scatterData : data}
              />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
