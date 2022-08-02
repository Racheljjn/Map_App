import React,{useContext} from 'react';
import { Table,Button } from 'antd';
import {SelectedLocationContext} from '../contexts/selected-location-context';

interface DataType {
  display_name:string,

}
const LocationTable = ({listPlaces,setSearchResult,searchResult}:any) => {

  const {setSelectedRows,setMarkers,} = useContext(SelectedLocationContext)
 
  const location_details:any = []
  
  const columns = [
    {
      title: 'display_name',
      dataIndex: 'display_name',
      key:"name"
    }, 
    {
      title: 'latitude',
      dataIndex: 'lat',
      key:"lat"
    }, 
    {
      title: 'longitude',
      dataIndex: 'lon',
      key:"lon"
    }, 
]
  const data_source = listPlaces.map((place:any,index:any)=>{
    return (
      {
        display_name:place.display_name,
        key:index,
        lon:place.lon,
        lat:place.lat
      }
    )
  })

  const handleDeleteRecords=()=>{
    setSearchResult([])
    setMarkers([])

  }
  
  return (
    <div>
     <Button type="primary" style={{marginTop:"10px"}}  onClick={handleDeleteRecords}>Delete</Button>
      <Table
        rowSelection={{
          type:"checkbox",
          onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            selectedRows.map((row:any)=>{
            return location_details.push([row.lat,row.lon])
  })
            setSelectedRows(selectedRows)
            setMarkers(location_details)
  },
        }}
        columns={columns}
        dataSource={data_source}
        
      />
    </div>
  );
};

export default LocationTable