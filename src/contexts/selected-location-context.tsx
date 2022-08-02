import React,{createContext,useState} from 'react';

interface Props {
  children?:React.ReactNode
}
interface Obj {
    [key: string]: number
}
type SelectedLocation = {
  selectedLocation: Obj,
  positionSelected:Obj,
  selectedRows:Array<string>,
  markers:string[][],
  setSelectedRows:(value:object) => void,
  setSelectedLocation:(value:object) => void,
  setPositionSelected:(value:object) => void,
  setMarkers:(value:object) => void

}


export const SelectedLocationContext = createContext<SelectedLocation>({
 selectedLocation:{},
 positionSelected:{},
 selectedRows:[],
 markers:[],
 setSelectedRows:()=>{},
 setSelectedLocation:()=>{},
 setPositionSelected:()=>{},
 setMarkers:()=>{}
})

export const SelectedContextProvider:React.FC<Props>=({children})=>{
 const [selectedLocation, setSelectedLocation] = useState({})
 const [positionSelected, setPositionSelected] = useState({}) 
 const [selectedRows,setSelectedRows] = useState([]) as any
  const [markers,setMarkers] = useState([]) as any

 return (
  <SelectedLocationContext.Provider value={{selectedLocation,setSelectedLocation,positionSelected,setPositionSelected,selectedRows,setSelectedRows,markers,setMarkers}}>
   {children}
  </SelectedLocationContext.Provider>
 )

}




