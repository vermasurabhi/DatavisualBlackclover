import React from "react";
import { Chart } from "react-google-charts";


export const options = {};

export function Sankeychart({sankdata}) {
  return (
    <div className="d-flex justify-content-center">
    <Chart
      chartType="Sankey"
      width="90%"
      height="54rem"
      data={sankdata}
      options={options}
    />
    </div>
  );
}