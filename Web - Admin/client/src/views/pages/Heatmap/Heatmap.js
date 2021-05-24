import React from "react";
import { Col } from "react-materialize";
import OneYearData from "./data/OneYearData";
import TwoMonthsData from "./data/TwoMonthsData";
import ThreeWeeksData from "./data/ThreeWeeksData";
const Heatmap = () => {
    return (
        <div>
            <Col s={12}>
                <ThreeWeeksData />
            </Col>
        </div>
    )
}

export default Heatmap
