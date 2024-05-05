import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  chart: {
    title: "Average Intensity and total news in the month of January 2017",
  },
  width: "100%",
  height: 400,
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: { axis: "Intensity" },
    1: { axis: "totalnews" },
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
        Intensity: { label: "Intensity" },
        totalnews: { label: "total-news" },
    },
  },
};

export function LineChart({linedata}) {

  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={linedata}
      options={options}
    />
  );
}

export const optiontonew = {
  title: "Average likelihood",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

export function LineCharttwo({linedata}) {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={linedata}
      options={optiontonew}
    />
  );
}
