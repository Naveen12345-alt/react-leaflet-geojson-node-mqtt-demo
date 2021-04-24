import React, {useState} from 'react'
import {useMapEvents, Marker, Popup} from 'react-leaflet'
const AddMarkers = () => {
  const [markers, setMarkers] = useState([
    {
      lat: 40,
      lng: -95.6268544,
    },
  ])

  useMapEvents({
    click: e => {
      setMarkers([...markers, e.latlng])
    },
  })
  return (
    <React.Fragment>
      {markers.map((marker, i) => (
        <Marker key={`marker-${i}`} position={marker}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
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
