import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/shipments.module.css";
import { ShipmentList, ShipmentHead } from "../../index";

const Shipments = () => {
  const [marineTrafficShipId, setMarineTrafficShipId] = useState("");

  return (
    <section className={classes.main}>
      <ShipmentHead marineTrafficShipId={marineTrafficShipId} />
      <ShipmentList setMarineTrafficShipId={setMarineTrafficShipId} />
    </section>
  );
};

export default Shipments;
