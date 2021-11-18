import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/operatorquotes.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import { fetchViewForQuoteContainers } from "./items/operations";
import { makeStyles } from "@material-ui/core/styles";
import {
  fetchShipPortList,
  fetchContainerTypes,
  fetchCargoNames,
  fetchUserCompanies,
  fetchShippingCompanies,
} from "../../../common/services/fetchData";
import { OperatorQuoteContainerItem } from "../../index";

const OperatorQuoteContainer = () => {
  const widthList = [
    { width: "6%" },
    { width: "7%" },
    { width: "7%" },
    { width: "7%" },
    { width: "6%" },
    { width: "7%" },
    { width: "5%" },
    { width: "5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "3.5%" },
    { width: "4%" },
  ];

  const headerItems = [
    { title: "顧客名" },
    { title: "CARRIER" },
    { title: "From" },
    { title: "To" },
    { title: "コンテナタイプ" },
    { title: "貨物名" },
    { title: "見積期限" },
    { title: "Free Time" },
    { title: "O/F" },
    { title: "THC" },
    { title: "LSS" },
    { title: "WRS" },
    { title: "Doc Fee" },
    { title: "Do Fee" },
    { title: "Seal Fee" },
    { title: "PSS" },
    { title: "AMS" },
    { title: "EMS" },
    { title: "AFR" },
    { title: "GRI" },
    { title: "CIC" },
    { title: "" },
  ];
  return (
    <div className={classes.main_body}>
      <ListHeaderComponent widthList={widthList} headerItems={headerItems} />
      <ListItems widthList={widthList} />
    </div>
  );
};

const ListHeaderComponent = (props) => {
  const { widthList, headerItems } = props;
  return (
    <div className={classes.quotes_head}>
      {headerItems.map((value, index) => (
        <div
          className={classes.quotes_head_item}
          style={widthList[index]}
          key={index}
        >
          {value.title}
        </div>
      ))}
    </div>
  );
};

const ListItems = (props) => {
  const { widthList } = props;
  const [items, setItems] = useState([]);
  const [shipportlist, setShipPortList] = useState([]);
  const [containertypes, setContainerTypes] = useState([]);
  const [cargonames, setCargoNames] = useState([]);
  const [usercompanies, setUserCompanies] = useState([]);
  const [shippingcompanies, setShippingCompanies] = useState([]);
  useEffect(() => {
    fetchViewForQuoteContainers(setItems);
    fetchShipPortList(setShipPortList);
    fetchContainerTypes(setContainerTypes);
    fetchCargoNames(setCargoNames);
    fetchUserCompanies(setUserCompanies);
    fetchShippingCompanies(setShippingCompanies);
  }, []);

  return (
    <>
      {items.map((item, index) => (
        <div className={classes.quotes_body} key={index}>
          <OperatorQuoteContainerItem
            widthList={widthList}
            item={item}
            shipportlist={shipportlist}
            containertypes={containertypes}
            cargonames={cargonames}
            usercompanies={usercompanies}
            shippingcompanies={shippingcompanies}
          />
        </div>
      ))}
    </>
  );
};

export default OperatorQuoteContainer;
