import React from 'react'

import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheContent from './TheContent'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent/>
        </div>
      </div>
    </div>
  )
}

export default TheLayout
