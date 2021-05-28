import React from "react";
import { setData } from "./../utils";
import { Card } from "react-bootstrap";
import HeatMapDate from "react-d3-heatmap";

const startDate = new Date(2021, 3, 2);
const endDate = new Date(2021, 4, 23);
const data = setData(startDate, endDate, 30);

const colors = [];
colors.push({ count: 1, color: "#a4fba6" });
colors.push({ count: 3, color: "#4ae54a" });
colors.push({ count: 2, color: "#30cb00" });
colors.push({ count: 5, color: "#0f9200" });
colors.push({ count: 9, color: "#006203" });

const ThreeWeeksData = () => {
  return (
    <Card className="p-3">
      <h3 className="text-center">Heatmap with 2 Months Data</h3>
      <HeatMapDate
        startDate={startDate}
        endDate={endDate}
        data={data}
        colors={colors}
        rectWidth={15}
        backgroundColor={"#fff"}
        textDefaultColor={"0"}
        textColor={"#000"}
        transition={-1}
        marginBottom={5}
        marginRight={5}
        marginLeft={5}
        monthSpace={2}
      />
    </Card>
  )
}

export default ThreeWeeksData;
