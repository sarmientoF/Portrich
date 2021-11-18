import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import classes from "../../../dist/css/operatorscheduls.module.css";
import { fetchScheduleForBoxPallet } from "./info/operations";
import {
  fetchShipPortList,
  fetchShippingCompanies,
} from "../../../common/services/fetchData";
import { OperatorScheduleBoxPalletItem } from "../../index";

const titles = [
  "CARRIER",
  "船名",
  "Voyage No",
  "出港地",
  "経由港",
  "到着地",
  "CFS CUT",
  "CFS OPEN",
  "Marine Traffic id",
];

const OperatorScheduleListBoxPallet = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [shipportlist, setShipPortList] = useState([]);
  const [shippingcompanies, setShippingCompanies] = useState([]);

  useEffect(() => {
    fetchScheduleForBoxPallet(setScheduleList);
    fetchShipPortList(setShipPortList);
    fetchShippingCompanies(setShippingCompanies);
  }, []);

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
      {scheduleList.map((item, index) => (
        <div className={classes.quotes_body} key={index}>
          <OperatorScheduleBoxPalletItem
            item={item}
            shipportlist={shipportlist}
            shippingcompanies={shippingcompanies}
          />
        </div>
      ))}
    </>
  );
};

export default OperatorScheduleListBoxPallet;
