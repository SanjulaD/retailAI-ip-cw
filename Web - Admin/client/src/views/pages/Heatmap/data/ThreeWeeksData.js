import React from "react";
import { setData } from "./../utils";
import { Card } from "react-materialize";
import HeatMapDate from "react-d3-heatmap";

const startDate = new Date(2021, 0, 2);
const endDate = new Date(2021, 0, 23);
const data = setData(startDate, endDate, 80);

const colors = [];
colors.push({ count: 1, color: "#cc66ff" });
colors.push({ count: 3, color: "#ff9966" });
colors.push({ count: 2, color: "#003399" });
colors.push({ count: 5, color: "#990000" });
colors.push({ count: 9, color: "#00cc00" });

const ThreeWeeksData = () => {
  return (
    <Card title="Heatmap with three weeks data">
      <HeatMapDate
        startDate={startDate}
        endDate={endDate}
        data={data}
        colors={colors}
      />
    </Card>
  )
}

export default ThreeWeeksData;
