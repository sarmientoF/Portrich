import React, { useEffect, useState } from "react";
import { getDetailRowItems } from "./cargo_status/operations";
import classes from "../../../dist/css/shipments_detail.module.css";
import { fetchOriginalInvoiceItem } from "./invoice/operations";

const ShipmentsDetail = (props) => {
  const { cargoStatus, queryParameters } = props;
  const [invoiceitem, setInvoiceItem] = useState({});
  useEffect(() => {
    fetchOriginalInvoiceItem(setInvoiceItem, cargoStatus);
  }, [cargoStatus]);

  return (
    <div className={classes.detailes_area}>
      <div className={classes.detailes_head}>貨物詳細</div>
      {getDetailRowItems(
        cargoStatus,
        queryParameters.shipping_type_id,
        invoiceitem
      ).map((row, index) => (
        <div className={classes.detailes_body} key={index}>
          <div className={classes.detailes_body_left}>{row.name}</div>
          <div className={classes.detailes_body_right}>{row.value}</div>
        </div>
      ))}
    </div>
  );
};
export default ShipmentsDetail;
