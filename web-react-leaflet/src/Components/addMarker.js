import React, {useState, useEffect} from 'react'
import {useMapEvents, Marker, Popup} from 'react-leaflet'

var mqtt = require('mqtt')

var client = mqtt.connect('mqtt://broker.hivemq.com:8000/mqtt', {
  clientId: 'mqttjs01',
  keepAlive: 1800000,
  cleanSession: false,
  mode: 'no-cors',
})

// preciouschicken.com is the MQTT topic
client.subscribe('testtopic/aplha')

const AddMarkers = () => {
  const [markers, setMarkers] = useState([
    {
      lat: 40,
      lng: -95.6268544,
    },
  ])

  useEffect(() => {
    client.on('message', function (topic, message) {
      // Updates React state with message
      console.log(message.toString())
      setMarkers(prev => [...prev, JSON.parse(message)])
      // client.end()
    })
  }, [])

  // console.log(typeof mesg)

  // useMapEvents({
  //   click: e => {
  //     setMarkers([...markers, e.latlng])
  //   },
  // })
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
      <Marker position={markers[0]}>
        <Popup>
          <span>
            A pretty CSS3 popup. <br /> Easily customizable.
          </span>
        </Popup>
      </Marker>
    </React.Fragment>
  )
}

export default AddMarkers
