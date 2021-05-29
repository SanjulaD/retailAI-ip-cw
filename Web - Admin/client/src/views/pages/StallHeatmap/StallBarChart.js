import React, { useState, useEffect } from 'react'
import {
    CCard,
    CCardBody,
} from '@coreui/react'
import {
    CChartBar,
} from '@coreui/react-chartjs'
import { Container } from 'react-bootstrap'

import firebase from 'firebase';
import Loader from './../../../components/Loader/Loader'
import connectDB from './../../../config/firebaseConfig'

const StallBarChart = () => {

    const [loading, setLoading] = useState(false)
    const [stallLive, setStallLive] = useState([])

    if (!firebase.apps.length) {
        firebase.initializeApp(connectDB);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        var starCountRef = firebase.database().ref('stallCount/');
        starCountRef.on('value', (snapshot) => {
            var data = snapshot.val();
            const entries = Object.values(data)

            //Stall Live data
            const itemsLive = entries.map((data) => {
                setStallLive(stallLive => [...stallLive, data.live])
            })

            setLoading(false)
        })

    }

    setTimeout(() => {
        fetchData()


    }, 600000);

    const labelName = ["Stall-1", "Stall-2", "Stall-3", "Stall-5", "Stall-6", "Stall-7", "Stall-8", "Stall-9", "Stall-10"];

    return (
        <Container>
            {
                loading ? <Loader /> : (
                    <CCard>
                        <CCardBody>
                            <CChartBar
                                datasets={[
                                    {
                                        label: 'People count after 24hrs',
                                        backgroundColor: '#2eb85c',
                                        data: stallLive
                                    }
                                ]}
                                labels={labelName}
                                options={{
                                    tooltips: {
                                        enabled: true
                                    }
                                }}
                            />
                        </CCardBody>
                    </CCard>
                )
            }
        </Container>
    )
}

export default StallBarChart
