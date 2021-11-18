import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "../../../dist/css/shipments.module.css";
import { getCurrentStateData } from "./progress/operations";
import { fetchCargoStatuses } from "./cargo_status/operations";
import {
  ShipmentExportBookingCustom,
  ShipmentExportBookingOnly,
  ShipmentExportBookingTruckOrDrayage,
  ShipmentExportFull,
  ShipmentImportBookingOnly,
  ShipmentImportBookingCustom,
  ShipmentImportBookingTruckOrDrayage,
  ShipmentImportFull,
} from "../../../components/shipment/index";
import { getIsStaff } from "../../../reducks/users/selectors";

const ShipmentList = (props) => {
  const { setMarineTrafficShipId } = props;
  const selector = useSelector((state) => state);
  const isStaff = getIsStaff(selector);
  const [cargoStatusList, setCargoStatusList] = useState([]);
  useEffect(() => {
    fetchCargoStatuses(setCargoStatusList);
  }, []);

  const isExport = (departure_port_name) => {
    return departure_port_name.includes("Japan");
  };
  const handleSelectRow = (
    marine_traffic_ship_id,
    changed_marine_traffic_ship_id
  ) => {
    if (!marine_traffic_ship_id && !changed_marine_traffic_ship_id) {
      return;
    }
    setMarineTrafficShipId(
      changed_marine_traffic_ship_id || marine_traffic_ship_id
    );
  };

  const ShowProgressInformation = (row, isExport) => {
    const currentStateData = getCurrentStateData(row);

    if (isExport && row.need_truck_or_drayage && row.need_customs_documents) {
      return (
        <ShipmentExportFull
          currentStateData={currentStateData}
          isStaff={isStaff}
        />
      );
    }
    if (isExport && row.need_truck_or_drayage) {
      return (
        <ShipmentExportBookingTruckOrDrayage
          currentStateData={currentStateData}
          isStaff={isStaff}
        />
      );
    }
    if (isExport && row.need_customs_documents) {
      return (
        <ShipmentExportBookingCustom
          currentStateData={currentStateData}
          isStaff={isStaff}
        />
      );
    }
    if (isExport) {
      return (
        <ShipmentExportBookingOnly
          currentStateData={currentStateData}
          isStaff={isStaff}
        />
      );
    }
    if (!isExport && row.need_truck_or_drayage && row.need_customs_documents) {
      return (
        <ShipmentImportFull
          currentStateData={currentStateData}
          isStaff={isStaff}
        />
      );
    }
    if (!isExport && row.need_truck_or_drayage) {
      return (
        <ShipmentImportBookingTruckOrDrayage
          currentStateData={currentStateData}
          isStaff={isStaff}
        />
      );
    }
    if (!isExport && row.need_customs_documents) {
      return (
        <ShipmentImportBookingCustom
          currentStateData={currentStateData}
          isStaff={isStaff}
        />
      );
    }
    if (!isExport) {
      return (
        <ShipmentImportBookingOnly
          currentStateData={currentStateData}
          isStaff={isStaff}
        />
      );
    }
  };

  return (
    <div className={classes.main_body}>
      {cargoStatusList.map((row, index) => (
        <div
          key={index}
          onClick={() =>
            handleSelectRow(
              row.marine_traffic_ship_id,
              row.changed_marine_traffic_ship_id
            )
          }
        >
          {ShowProgressInformation(row, isExport(row.departure_port_name))}
        </div>
      ))}
    </div>
  );
};

export default ShipmentList;
