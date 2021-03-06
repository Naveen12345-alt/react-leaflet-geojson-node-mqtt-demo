import React, {useEffect, useState} from 'react'
import {Marker, Popup} from 'react-leaflet'
import mqtt from 'mqtt'

const client = mqtt.connect('mqtt://broker.hivemq.com:8000/mqtt', {
  clientId: 'mqttjs01#gameit',
  keepAlive: 60,
  cleanSession: true,
})

// testtopic/aplha is the MQTT topic
client.subscribe('testtopic/aplha')

// add markers to map on receiving coordinates
const AddMarkers = () => {
  const [markers, setMarkers] = useState([
    {
      lat: 40,
      lng: -95.6268544,
    },
  ])

  // setmarkers
  useEffect(() => {
    client.on('error', function (err) {
      console.log('connection end')
      client.end()
    })
    client.on('message', function (topic, message) {
      // Updates React state with message
      console.log(message.toString())
      setMarkers(prev => [...prev, JSON.parse(message)])
    })
  }, [])

  return (
    <React.Fragment>
      {markers.map((marker, i) => (
        <Marker key={`marker-${i}`} position={marker}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
              {markers.toString()}
            </span>
          </Popup>
        </Marker>
      ))}
    </React.Fragment>
  )
}

export default AddMarkers
