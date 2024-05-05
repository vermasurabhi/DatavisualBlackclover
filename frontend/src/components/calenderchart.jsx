import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  title: "Average revelance of news",
  calendar: { cellSize: 14 }
};

export function CalenderChart({caldata}) {
  return (
    <Chart
      chartType="Calendar"
      width="100%"
      height="400px"
      data={caldata}
      options={options}
    />
  );
}
