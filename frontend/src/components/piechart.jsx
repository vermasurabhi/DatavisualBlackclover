import React from "react";
import { Chart } from "react-google-charts";

export const options = {
    title: "Total news of each sectors",
    pieHole: 0.4,
    is3D: false,
};

export function PieChart({piedata}) {
    console.log(piedata)
  return (
    <Chart
      chartType="PieChart"
      data={piedata}
      options={options}
      width={"100%"}
      height={"490px"}
    />
  );
}
