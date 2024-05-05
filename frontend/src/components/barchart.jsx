import React from "react";
import { Chart } from "react-google-charts";

export  const options = {
    title: "Intensity of news",
    width: "100%",
    height: 700,
    bar: { groupWidth: "60%" },
    legend: { position: "none" },
};

export default function BarChart({newdata}) {
  return (
    <Chart
    chartType="BarChart"
    width="100%"
    height="700px"
    data={newdata}
    options={options}
    />
  );
}

