import React, { useState } from 'react'
import HeatMap from "react-heatmap-grid";
import './heatmap.css'
import {
  Card
} from 'react-bootstrap'
import Loader from './../../../../components/Loader/Loader'
const OneYearData = () => {

  const [loading, setLoading] = useState(false)

  const xLabels = ["Stall-1", "Stall-2", "Stall-3", "Stall-5", "Stall-6", "Stall-7", "Stall-8", "Stall-9", "Stall-10"];

  // Display only even labels
  // const xLabelsVisibility = new Array(10)
  //   .fill(0)
  //   .map((_, i) => (i % 2 === 0 ? true : false));

  const yLabels = ["Sat", "Sun", "Mon"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
    );


  return (
    <>
      <h4 className="mb-4 text-center">Overall Count Heatmap</h4>
      {
        loading ? <Loader /> : (
          <Card className="heatmap-section border-0" style={{ backgroundColor: "transparent" }}>
            <HeatMap
              xLabels={xLabels}
              yLabels={yLabels}
              xLabelsLocation={"bottom"}
              xLabelWidth={60}
              data={data}
              squares
              height={70}
              cellStyle={(background, value, min, max, data, x, y) => ({
                background: `rgb(46,184,92, ${1 - (max - value) / (max - min)})`,
                fontSize: "15px",
                color: "#444"
              })}
              cellRender={value => value && <div>{value}</div>}
            />
          </Card>
        )
      }
    </>
  )
}

export default OneYearData
