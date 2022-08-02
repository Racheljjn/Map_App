import {useContext} from 'react';
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import {SelectedLocationContext} from '../contexts/selected-location-context';




const myIcon = L.icon({
    iconUrl: './marker.png',
    iconSize: [35, 35],
});


const MapBox = () => {
  
 const {markers} = useContext(SelectedLocationContext)


 

return( 
  <MapContainer center={[51.505, -0.09]} zoom={13} style={{width:"100%",height:"100%"}}>
   
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Jps96PbsWWoabU1d15U4"
    />
    <div>
      {markers.map((marker:any,index:any)=>{
      return <Marker key={index} position={marker} icon={myIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

     })
    }
    </div>
  </MapContainer>
)
}

export default MapBox