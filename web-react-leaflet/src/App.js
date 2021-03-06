import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import {GeoJSON, MapContainer, TileLayer} from 'react-leaflet'
import './App.css'
import AddMarkers from './Components/addMarker'
import route from './data/Directions_from_Delhi_to_Gurgaon_Haryana.json'

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/'

export default function App() {
  // import geojson data and render on map-->lookout for data directory in src

  return (
    <React.Fragment>
      <MapContainer
        center={[28.5762778, 77.1318189]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarkers />
        <GeoJSON data={route} />
      </MapContainer>
    </React.Fragment>
  )
}
