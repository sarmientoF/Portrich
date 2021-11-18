import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/shipments_detail.module.css";
import { getProgressItems, getCurrentStateData } from "./progress/operations";
import {
  ExportBookingCustom,
  ExportBookingOnly,
  ExportBookingTruckOrDrayage,
  ExportFull,
  ImportBookingOnly,
  ImportBookingCustom,
  ImportBookingTruckOrDrayage,
  ImportFull,
} from "../../../components/shipmentsdetails/index";

const ShipmentsDetailsProgress = (props) => {
  const { cargoStatus, queryParameters } = props;

  const setProgressItem = getProgressItems(
    cargoStatus,
    queryParameters.shipping_type_id
  );
  const preferredDeliveryDay = new Date(setProgressItem.preferred_delivery_day);
  const preferredPickUpDay = new Date(setProgressItem.preferred_pick_up_day);
  const [changeddeparturedate, setActualDepartureDate] = useState();
  const [changedarrivaldate, setActualArrivalDate] = useState();

  useEffect(() => {
    setActualDepartureDate(
      setProgressItem.changed_departure_date || setProgressItem.departure_date
    );
  }, [setProgressItem]);
  useEffect(() => {
    setActualArrivalDate(
      setProgressItem.changed_arrival_date || setProgressItem.arrival_date
    );
  }, [setProgressItem]);

  const actualDepartureDay = new Date(changeddeparturedate);
  const actualArrivalDay = new Date(changedarrivaldate);
  const isExport =
    setProgressItem.departure_port_name &&
    setProgressItem.departure_port_name.includes("Japan");

  const currentStateData = getCurrentStateData(
    setProgressItem,
    preferredDeliveryDay,
    preferredPickUpDay,
    changeddeparturedate,
    changedarrivaldate,
    actualDepartureDay,
    actualArrivalDay
  );
  return (
    <div className={classes.s_d_head_area}>
      <div className={classes.s_d_title_area}>進捗状況</div>
      <div className={classes.s_d_head}>
        {isExport &&
        setProgressItem.need_shipping &&
        setProgressItem.need_customs_documents ? (
          <ExportFull currentStateData={currentStateData} />
        ) : isExport && setProgressItem.need_shipping ? (
          <ExportBookingTruckOrDrayage currentStateData={currentStateData} />
        ) : isExport && setProgressItem.need_customs_documents ? (
          <ExportBookingCustom currentStateData={currentStateData} />
        ) : isExport ? (
          <ExportBookingOnly currentStateData={currentStateData} />
        ) : !isExport &&
          setProgressItem.need_shipping &&
          setProgressItem.need_customs_documents ? (
          <ImportFull currentStateData={currentStateData} />
        ) : !isExport && setProgressItem.need_shipping ? (
          <ImportBookingTruckOrDrayage currentStateData={currentStateData} />
        ) : !isExport && setProgressItem.need_customs_documents ? (
          <ImportBookingCustom currentStateData={currentStateData} />
        ) : !isExport ? (
          <ImportBookingOnly currentStateData={currentStateData} />
        ) : (
          "エラーが発生しました。お手数ですがサポートまでご連絡お願い致します。"
        )}
      </div>
    </div>
  );
};
export default ShipmentsDetailsProgress;
