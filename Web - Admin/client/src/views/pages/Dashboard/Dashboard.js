import React, { lazy } from 'react'

const WidgetsDropdown = lazy(() => import('./../../../widgets/WidgetsDropdown'))
const Dashboard = () => {
    return (
        <>
            <WidgetsDropdown />
        </>
    )
}

export default Dashboard
