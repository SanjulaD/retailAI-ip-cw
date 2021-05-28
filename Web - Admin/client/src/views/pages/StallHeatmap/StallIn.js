import React, { useState, useEffect } from 'react'
import firebase from 'firebase';

import Loader from './../../../components/Loader/Loader'
import connectDB from './../../../config/firebaseConfig'
const StallIn = () => {

    const [loading, setLoading] = useState(false)
    const [stallOut, setStallOut] = useState([])

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


            //Stall Out data
            const itemsOut = entries.map((data) => {
                setStallOut(stallOut => [...stallOut, data.out])
            })

            setLoading(false)
        })

    }

    setTimeout(() => {
        fetchData()


    }, 600000);

    return (
        <>
            {
                loading ? <Loader /> : (
                    stallOut.map((item) => (
                        <h3>
                            {`OUT - ${item}`}
                        </h3>
                    ))
                )
            }
        </>
    )
}

export default StallIn
