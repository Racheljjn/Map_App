import {useState} from 'react';
import SearchBox from './components/SearchBox';
import MapBox from './components/Map';
import { Button } from 'antd';


const App = () => {
  const [userLocation,setUserLocation] = useState({latitude:null,longitude:null})
  
  const getUserLocation=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getCoordinates)
      alert(`current location is ${userLocation.latitude},${userLocation.longitude}`)
    }else{
      alert("Geolocation is not supported by this browser.")
    }
  }
  const getCoordinates=(position:any)=>{    
    const {latitude, longitude} = position.coords
    setUserLocation({...userLocation,latitude:latitude,longitude:longitude}) 

  }
  


  return (
    <div style={{display:"flex",width:"100vw",height:"100vh"}}>
      
     <div style={{width:"50vw",height:"100%"}}>
      <MapBox/>
     </div>
     <div>
      <div style={{width:"50px",margin:"20px,0"}}>
       <Button onClick={getUserLocation} type="primary">get current location</Button>
     </div>
    
     <div style={{width:"50vw"}}>
      <SearchBox/>
     </div>

     </div>
     
     
    </div>
  )
}

export default App

