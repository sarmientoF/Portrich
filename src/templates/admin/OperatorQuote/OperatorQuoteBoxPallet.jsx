import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/operatorquotes.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { fetchViewForBoxesOrPallets } from "./items/operations";
import {
  fetchShipPortList,
  fetchContainerTypes,
  fetchCargoNames,
  fetchUserCompanies,
  fetchShippingCompanies,
} from "../../../common/services/fetchData";
import { OperatorQuoteBoxPalletItem } from "../../index";

const useStyles = makeStyles((theme) => ({
  enableButton: {
    background: "#0052cc",
    color: "#fff",
    width: "60%",
  },
  disableButton: {},
}));

const OperatorQuoteBoxPallet = () => {
  const widthList = [
    { width: "5%" },
    { width: "6%" },
    { width: "7%" },
    { width: "7%" },
    { width: "7%" },
    { width: "6%" },
    { width: "6%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
    { width: "4%" },
  ];
  const headerItems = [
    { title: "顧客名" },
    { title: "CARRIER" },
    { title: "From" },
    { title: "To" },
    { title: "貨物名" },
    { title: "見積期限" },
    { title: "Free Time" },
    { title: "O/F (RT)" },
    { title: "THC (RT)" },
    { title: "CFS (RT)" },
    { title: "LSS (RT)" },
    { title: "DRC (RT)" },
    { title: "WRS" },
    { title: "Doc Fee" },
    { title: "DO Fee" },
    { title: "PSS" },
    { title: "AFS" },
    { title: "GRI" },
    { title: "ERR" },
    { title: "CIC" },
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
    fetchViewForBoxesOrPallets(setItems);
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
          <OperatorQuoteBoxPalletItem
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

export default OperatorQuoteBoxPallet;
