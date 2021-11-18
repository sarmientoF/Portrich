import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import classes from "../../../dist/css/scheduls.module.css";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useLocation } from "react-router-dom";
import { fetchQuoteForBoxPallet } from "./info/operations";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const titles = [
  "CARRIER",
  "船名",
  "Voyage No",
  "出港地",
  "経由港",
  "到着地",
  "CFS CUT",
  "CFS OPEN",
];

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

const ScheduleListBoxPallet = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [quoteList, setQuoteList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchQuoteForBoxPallet(location.search, setQuoteList);
  }, []);

  const toenterdetail = (item) => {
    const params = createToEnterDetail(item);
    const url = `/confirmdetailedinput/boxpallet?${params}`;
    dispatch(push(url));
  };
  const createToEnterDetail = (item) => {
    const params = new URLSearchParams();
    params.append("id", item.id);
    params.append("schedule_id", item.schedule_id);
    return params.toString();
  };

  return (
    <>
      <div className={classes.main_body_list}>
        {titles.map((title, index) => (
          <div className={classes.main_body_list_item_title} key={index}>
            {title}
          </div>
        ))}
        <div className={classes.select_area}></div>
      </div>
      {quoteList.length === 0 ? (
        <Typography className={styles.nocontent} gutterBottom>
          No Result
        </Typography>
      ) : (
        quoteList.map((item, index) => (
          <div className={classes.main_body_list}>
            <div className={classes.main_body_list_item}>
              {item.shipping_company_name}
            </div>
            <div className={classes.main_body_list_item}>
              {item.vessel_name}
            </div>
            <div className={classes.main_body_list_item}>{item.voyage_no}</div>
            <div className={classes.main_body_list_item}>
              {item.departure_port_name}
              <br />
              {item.departure_date && item.departure_date.replaceAll(/-/g, "/")}
            </div>
            <div className={classes.main_body_list_item}>
              {item.waypoint_name || "N"}
            </div>
            <div className={classes.main_body_list_item}>
              {item.arrival_port_name}
              <br />
              {item.arrival_date && item.arrival_date.replaceAll(/-/g, "/")}
            </div>
            <div className={classes.main_body_list_item}>
              {item.cfs_cut_date && item.cfs_cut_date.replaceAll(/-/g, "/")}
            </div>
            <div className={classes.main_body_list_item}>
              {item.cfs_open_date && item.cfs_open_date.replaceAll(/-/g, "/")}
            </div>
            <div className={classes.select_area}>
              <Button
                variant="contained"
                className={styles.enableButton}
                onClick={() => toenterdetail(item)}
              >
                詳細入力
              </Button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ScheduleListBoxPallet;
