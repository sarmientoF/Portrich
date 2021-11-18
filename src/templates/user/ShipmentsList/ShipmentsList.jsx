import React from "react";
import classes from "../../../dist/css/shipmentslist.module.css";
import { ShipmentsListItem, ShipmentsListHead } from "../../../components/shipmentslist/index";


const ShipmentsList = () => {
  return (
    <section className={classes.main}>
      <div className={classes.body}>
        <div className={classes.title}>貨物状況一覧</div>
        <div className={classes.mb_30}></div>
        <ShipmentsListHead />
        <div className={classes.mb_30}></div>
        <div className={`${classes.content}`}>
          <ShipmentsListItem />
        </div>
      </div>
    </section>
  );
};

export default ShipmentsList;
