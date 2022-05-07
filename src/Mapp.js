import React from "react"
import { Map, Marker } from "pigeon-maps"

const MyMap = (props) => {
    // console.log(props.userIP.location.lat, props.userIP.location.lng);
    const location = [props.userIP.location.lat, props.userIP.location.lng];
  return (
    <Map height={300} defaultCenter={location} defaultZoom={11}>
      <Marker width={50} anchor={location} />
    </Map>
  )
  }
  export default MyMap;