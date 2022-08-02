import {useState,useContext} from 'react';
import {SelectedLocationContext} from '../contexts/selected-location-context';
import LocationTable from './LocationTable';
import 'antd/dist/antd.css';


import { Button } from 'antd';
import { Input } from 'antd';



const BASE_URL = " https://nominatim.openstreetmap.org/search?"
interface Obj {
    [key: string]: number
}
const SearchBox = () => {

  const [userInput, setUserInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const {setSelectedLocation,setPositionSelected,positionSelected} = useContext(SelectedLocationContext)
  
  

  const handleChange=(e:any)=>{
    setUserInput(e.target.value)

  }
  const handleKeyPress=async(e:any)=>{
    if(e.key==="Enter"){
      try {
          const paramsObj = {
            q:`${userInput}`,
            format:"json",
          }
          const q_string= new URLSearchParams(paramsObj).toString()
           
          const res = await fetch(`${BASE_URL}${q_string}`)
          const result = await res.json() 
          console.log(q_string)
          setSearchResult(result)
                  
        } 
    catch (error) {console.log("error", error)}

    }
    

  }
  const handleClick =async ()=>{
    try {
          const paramsObj = {
            q:`${userInput}`,
            format:"json",
          }
          const q_string= new URLSearchParams(paramsObj).toString()
           
          const res = await fetch(`${BASE_URL}${q_string}`)
          const result = await res.json() 
          console.log(q_string)
          setSearchResult(result)
                  
        } 
    catch (error) {console.log("error", error)}
        
  }
  const handleSelectedClick=(e:any,item:Obj)=>{

    e.preventDefault()
    setSelectedLocation(item)
    setPositionSelected({...positionSelected,lon:item.lon,lat:item.lat})
  }
  console.log(searchResult)

  return (
    <div>
      <div style={{margin:"20px 0"}}>
        <Input style={{margin:"20px 0",width:"30%"}} placeholder="type location" value={userInput} onChange={handleChange} onKeyPress={handleKeyPress}/>
        <Button type="primary"  onClick={handleClick}>search</Button>
      </div>
      {searchResult.length > 0 && <LocationTable searchResult={searchResult} setSearchResult={setSearchResult} listPlaces ={searchResult}/>}
            
    </div>
  )
}

export default SearchBox