import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/operatorscheduls.module.css";
import { setScheduleBoxPalletItems } from "./info/operations";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme) => ({
  nocontent: {
    fontSize: "3em",
    textAlign: "center",
  },
  enableButton: {
    background: "#0052cc",
    color: "#fff",
  },
}));

const OperatorScheduleBoxPalletItem = (props) => {
  const { item, shipportlist, shippingcompanies } = props;
  const dispatch = useDispatch();
  const styles = useStyles();

  const currentScheduleItems = setScheduleBoxPalletItems(
    item,
    shipportlist,
    shippingcompanies
  );
  const toscheduleedit = (item) => {
    const params = addscheduleedit(item);
    const url = `/operator/schedule/edit/boxpallet?${params}`;
    dispatch(push(url));
  };
  const addscheduleedit = (item) => {
    const params = new URLSearchParams();
    params.append("id", item.id);
    return params.toString();
  };
  return (
    <>
      <div className={classes.main_body_list}>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.shipping_company_name}
        </div>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.vessel_name}
        </div>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.voyage_no}
        </div>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.departure_port_name}
          <br />
          {currentScheduleItems.departure_date}
        </div>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.waypoint_name || "N"}
        </div>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.arrival_port_name}
          <br />
          {currentScheduleItems.arrival_date}
        </div>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.cfs_cut_date}
        </div>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.cfs_open_date}
        </div>
        <div className={classes.main_body_list_item}>
          {currentScheduleItems.marine_traffic_ship_id}
        </div>
        <div className={classes.select_area}>
          <Button
            variant="contained"
            className={styles.enableButton}
            onClick={() => toscheduleedit(item)}
          >
            編集
          </Button>
        </div>
      </div>
    </>
  );
};

export default OperatorScheduleBoxPalletItem;
