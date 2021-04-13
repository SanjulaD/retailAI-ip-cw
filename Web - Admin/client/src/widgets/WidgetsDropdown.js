import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CWidgetSimple
} from '@coreui/react'

import ChartLineSimple from '../views/charts/ChartLineSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol md="4">
        <CWidgetDropdown
          color="gradient-info"
          header="15"
          text="In Users"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{ height: '80px' }}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 } } }}
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol md="4">
        <CWidgetDropdown
          color="gradient-warning"
          header="9"
          text="Out Users"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: '80px' }}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>
      <CCol md="4">
        <CWidgetSimple header="People Count" text="1,123">
          <ChartLineSimple style={{ height: '40px' }} borderColor="danger" />
        </CWidgetSimple>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
