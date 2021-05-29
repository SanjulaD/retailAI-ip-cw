import React, { useState, useEffect } from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import firebase from 'firebase';
import connectDB from './../../config/firebaseConfig'
import Loader from './../../components/Loader/Loader'

const brandInfo = getStyle('info') || '#20a8d8'

const MainChartExample = attributes => {


  const [count, setCount] = useState([])
  const [loading, setLoading] = useState(false)

  if (!firebase.apps.length) {
    firebase.initializeApp(connectDB);
  }

  useEffect(() => {
    fetchData()
  }, [count])

  const fetchData = () => {
    setLoading(true)
    var starCountRef = firebase.database().ref('dailyCount/');
    starCountRef.on('value', (snapshot) => {
      var data = snapshot.val();
      var entries = Object.values(data)

      //all in data
      count.push(entries)
      setLoading(false)
      console.log(count)
    })
  }
  setTimeout(() => {
    fetchData()
  }, 60000);

  const defaultDatasets = (() => {

    return [
      {
        label: 'Max Count',
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: count[0]
      },
    ]
  })()

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(750 / 5),
            max: 900
          },
          gridLines: {
            display: true
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    }
  }
  )()

  // render
  return (
    <>
      {
        loading ? <Loader /> : (
          <CChartLine
            {...attributes}
            datasets={defaultDatasets}
            options={defaultOptions}
            labels={['Sat', 'Sun', 'Mon']}
          />
        )
      }
    </>
  )
}


export default MainChartExample
