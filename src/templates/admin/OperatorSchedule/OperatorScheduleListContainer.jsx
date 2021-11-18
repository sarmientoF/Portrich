import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/operatorscheduls.module.css";
import { fetchScheduleForContainer } from "./info/operations";
import {
  fetchShipPortList,
  fetchShippingCompanies,
} from "../../../common/services/fetchData";
import { OperatorScheduleContainerItem } from "../../index";

const titles = [
  "CARRIER",
  "船名",
  "Voyage No",
  "出港地",
  "経由港",
  "到着地",
  "CY CUT",
  "CY OPEN",
  "Marine Traffic id",
];

const OperatorScheduleListContainer = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [shipportlist, setShipPortList] = useState([]);
  const [shippingcompanies, setShippingCompanies] = useState([]);

  useEffect(() => {
    fetchScheduleForContainer(setScheduleList);
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
          <OperatorScheduleContainerItem
            item={item}
            shipportlist={shipportlist}
            shippingcompanies={shippingcompanies}
          />
        </div>
      ))}
    </>
  );
};

export default OperatorScheduleListContainer;
