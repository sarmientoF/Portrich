import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

import { AppConfig } from "../../common/config";

const containerStyle = {
  width: "100%",
  height: "240px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};


const GoogleMapComponent = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey={AppConfig.googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          ></GoogleMap>
      </LoadScript>
    </div>
  )

}
export default GoogleMapComponent