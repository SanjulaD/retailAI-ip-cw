import React, { useState } from "react";
import { setData } from "./../utils";
import { Card, Row, Col } from "react-bootstrap"
import { CSwitch } from '@coreui/react'
import HeatMapDate from "react-d3-heatmap";
import { Container } from "react-bootstrap";

const TwoMonthsData = () => {

  const endDate = new Date();
  const startDate = new Date();

  startDate.setFullYear(startDate.getFullYear() - 1);
  const data = setData(startDate, endDate, 580);
  const colors = [];

  colors.push({ count: 2, color: "#66ff33" });
  colors.push({ count: 3, color: "#99ff33" });
  colors.push({ count: 4, color: "#ccff33" });
  colors.push({ count: 6, color: "#ffcc00" });
  colors.push({ count: 7, color: "#ff9933" });
  colors.push({ count: 9, color: "#ff0000" });

  const startDisplayData = new Date("2020-10-15T17:41:27");
  const endDisplayData = new Date("2021-06-10T23:01:50");

  const [displayLegend, setDisplayLegend] = useState(false)
  const [displayYear, setDisplayYear] = useState(false)
  const [shouldStartMonday, setShouldStartMonday] = useState(false)
  const [toggleStartDisplayData, setToggleStartDisplayData] = useState(false)
  const [toggleEndDisplayData, setToggleEndDisplayData] = useState(false)

  const rangeDisplayData = [
    toggleStartDisplayData ? startDisplayData : null,
    toggleEndDisplayData ? endDisplayData : null
  ];

  return (
    <Container>
      <Card title="Heatmap with two months data">
        <HeatMapDate
          startDate={startDate}
          endDate={endDate}
          data={data}
          colors={colors}
          displayYear={displayYear}
          displayLegend={displayLegend}
          rangeDisplayData={rangeDisplayData}
          shouldStartMonday={shouldStartMonday}
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
      <Row className="topOffset">
        <Col s={6}>
          <h5 className="mb-3">Display Legend (displayLegend)</h5>
          <CSwitch
            className={'mx-1'}
            color={'info'}
            variant={'opposite'}
            labelOn={'\u2713'} l
            abelOff={'\u2715'}

            onChange={() => setDisplayLegend(!displayLegend)}
          />
          <br />
          <h5 className="mb-3">Display Year (displayYear)</h5>
          <CSwitch
            className={'mx-1'}
            color={'info'}
            variant={'opposite'}
            labelOn={'\u2713'} l
            abelOff={'\u2715'}
            onChange={() => setDisplayYear(!displayYear)}
          />
          <br />
          <h5 className="mb-3">Starts on Monday (shouldStartMonday)</h5>
          <CSwitch
            className={'mx-1'}
            color={'info'}
            variant={'opposite'}
            labelOn={'\u2713'} l
            abelOff={'\u2715'}
            onChange={() => setShouldStartMonday(!shouldStartMonday)}
          />
        </Col>
        <Col s={6}>
          <h5 className="mb-3">Data begins to display from 2020/10/15</h5>
          <CSwitch
            className={'mx-1'}
            color={'info'}
            variant={'opposite'}
            labelOn={'\u2713'} l
            abelOff={'\u2715'}
            onChange={() => setToggleStartDisplayData(!toggleStartDisplayData)}
          />
          <br />
          <h5 className="mb-3">Data ends to display until 2021/06/10</h5>
          <CSwitch
            className={'mx-1'}
            color={'info'}
            variant={'opposite'}
            labelOn={'\u2713'} l
            abelOff={'\u2715'}
            onChange={() => setToggleEndDisplayData(!toggleEndDisplayData)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TwoMonthsData;
