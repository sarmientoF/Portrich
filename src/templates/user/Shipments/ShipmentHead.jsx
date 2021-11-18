import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import classes_1 from "../../../dist/css/shipments.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { AppConfig } from "../../../common/config";
import { ListMenu } from "../../../components/shipment/";
import {
  fetchVoyageForecasts,
  generateRoute,
} from "./marineTraffic/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "24ch",
    },
  },
}));
const containerStyle = {
  width: "100%",
  height: "100%",
};

const ShipmentHead = (props) => {
  const { marineTrafficShipId } = props;
  const classes = useStyles();
  const [center, setCenter] = useState({
    lat: 35.69575,
    lng: 139.77521,
  });
  const [route, setRoute] = useState([]);

  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    fetchVoyageForecasts(marineTrafficShipId, setApiResult);
  }, [marineTrafficShipId]);

  useEffect(() => {
    generateRoute(apiResult, setRoute);
  }, [apiResult]);

  const getPolyLineOptions = () => {
    return {
      strokeColor: "#0052cc",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      zIndex: 1,
    };
  };
  return (
    <div className={classes.root}>
      <div className={classes_1.main_head}>
        <div className={classes_1.main_head_map}>
          <LoadScript googleMapsApiKey={AppConfig.googleMapsApiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
            >
              <GoogleMapMarkers route={route} />
              <Polyline options={getPolyLineOptions()} path={route} />
            </GoogleMap>
          </LoadScript>
        </div>
        <ListMenu />
      </div>
    </div>
  );
};

const GoogleMapMarkers = (props) => {
  const { route } = props;
  return route.length > 0 ? (
    <>
      <Marker
        position={{
          lat: route[0].lat,
          lng: route[0].lng,
        }}
        label={"現在地"}
      />
      <Marker
        position={{
          lat: route[route.length - 1].lat,
          lng: route[route.length - 1].lng,
        }}
        label={"目的地"}
      />
    </>
  ) : (
    <></>
  );
};
export default ShipmentHead;
