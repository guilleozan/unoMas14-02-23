import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -43.49597112962326,
      lng: 172.53258630453908
    },
     
    zoom: 10
  };

  return (
    // Important! Always set the container height explicitly
    <div  style={{ height: '80vh', width: '50%' , margin: 'auto'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: " " }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-43.49597112962326}
          lng={172.53258630453908}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}