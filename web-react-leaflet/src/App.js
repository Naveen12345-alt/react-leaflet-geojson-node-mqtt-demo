import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import {GeoJSON, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import './App.css'
import route from './data/Directions_from_Delhi_to_Gurgaon_Haryana.json'
import AddMarkers from './Map_feature/addMarker'

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/'

// const AddMarkers = () => {
//   const [markers, setMarkers] = useState([
//     {
//       lat: 40,
//       lng: -95.6268544,
//     },
//   ])

//   useMapEvents({
//     click: e => {
//       setMarkers([...markers, e.latlng])
//     },
//   })
//   return (
//     <React.Fragment>
//       {markers.map((marker, i) => (
//         <Marker key={`marker-${i}`} position={marker}>
//           <Popup>
//             <span>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </span>
//           </Popup>
//         </Marker>
//       ))}
//       <Marker position={markers[0]}>
//         <Popup>
//           <span>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </span>
//         </Popup>
//       </Marker>
//     </React.Fragment>
//   )
// }

export default function App() {
  return (
    <MapContainer
      center={[28.5762778, 77.1318189]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <AddMarkers />
      <GeoJSON data={route} />
    </MapContainer>
  )
}
