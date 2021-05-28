import React, { useState, useEffect } from 'react'
import {
    CCol,
    CRow,
    CWidgetSimple,
    CWidgetBrand
} from '@coreui/react'

import firebase from 'firebase';
import Loader from './../../../components/Loader/Loader'
import connectDB from './../../../config/firebaseConfig'

import ChartBarSimple from './../../charts/ChartBarSimple'
import StallIn from './StallIn';

const StallHeatmap = () => {

    const [loading, setLoading] = useState(false)
    const [stallIn, setStallIn] = useState([])
    const [stallOut, setStallOut] = useState([])
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

            //Stall in data
            const itemsIn = entries.map((data) => {
                setStallIn(stallIn => [...stallIn, data.in])
            })

            //Stall Out data
            const itemsOut = entries.map((data) => {
                setStallOut(stallOut => [...stallOut, data.out])
            })

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

    return (
        <div>
            {
                loading ? <Loader /> :
                    <CRow>
                        {
                            stallIn.map((item, index) => (
                                <CCol xs="12" sm="6" lg="3" key={index}>
                                    <CWidgetSimple header={`STALL - ${index + 1}`}>
                                        <h3>{`IN - ${item}`}</h3>
                                        <ChartBarSimple style={{ height: '40px' }} backgroundColor="success" />
                                    </CWidgetSimple>
                                </CCol>
                            )
                            )
                        }
                    </CRow>
            }
            <StallIn />
        </div>
    )
}

export default StallHeatmap
