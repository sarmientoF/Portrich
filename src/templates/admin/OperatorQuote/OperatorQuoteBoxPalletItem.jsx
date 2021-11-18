import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/operatorquotes.module.css";
import { getCurrentQuoteBoxPalletItems } from "./items/operations";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme) => ({
  enableButton: {
    background: "#0052cc",
    color: "#fff",
    width: "60%",
  },
  disableButton: {},
}));

const OperatorQuoteBoxPalletItem = (props) => {
  const {
    widthList,
    item,
    shipportlist,
    containertypes,
    cargonames,
    usercompanies,
    shippingcompanies,
  } = props;
  const dispatch = useDispatch();
  const styles = useStyles();

  const currentQuoteItems = getCurrentQuoteBoxPalletItems(
    item,
    shipportlist,
    containertypes,
    cargonames,
    usercompanies,
    shippingcompanies
  );

  const toquoteedit = (item) => {
    const params = addquoteedit(item);
    const url = `/operator/quote/edit/boxpallet?${params}`;
    dispatch(push(url));
  };
  const addquoteedit = (item) => {
    const params = new URLSearchParams();
    params.append("id", item.id);
    return params.toString();
  };

  return (
    <>
      <div className={classes.quotes_body_item_center} style={widthList[0]}>
        {currentQuoteItems.users_company_name}
      </div>
      <div className={classes.quotes_body_item_center} style={widthList[1]}>
        {currentQuoteItems.shipping_company_name}
      </div>
      <div className={classes.quotes_body_item_center} style={widthList[2]}>
        {currentQuoteItems.departure_port_name}
      </div>
      <div className={classes.quotes_body_item_center} style={widthList[3]}>
        {currentQuoteItems.arrival_port_name}
      </div>
      <div className={classes.quotes_body_item_center} style={widthList[4]}>
        {currentQuoteItems.cargo_name_name}
      </div>
      <div className={classes.quotes_body_item_center} style={widthList[5]}>
        {(currentQuoteItems.estimated_deadline_date &&
          currentQuoteItems.estimated_deadline_date.replaceAll(/-/g, "/")) ||
          "-"}
      </div>
      <div className={classes.quotes_body_item_center} style={widthList[6]}>
        {currentQuoteItems.freetime} Days
      </div>
      <div className={classes.quotes_body_item} style={widthList[7]}>
        {currentQuoteItems.ocean_freight_usd_buy > "0.00"
          ? "$" +
            Number(currentQuoteItems.ocean_freight_usd_buy).toLocaleString()
          : currentQuoteItems.ocean_freight_usd_buy === "0.00"
          ? "¥" +
            Number(currentQuoteItems.ocean_freight_jpy_buy).toLocaleString()
          : "-"}
        <br />
        {currentQuoteItems.ocean_freight_usd_sell > "0.00"
          ? "$" +
            Number(currentQuoteItems.ocean_freight_usd_sell).toLocaleString()
          : currentQuoteItems.ocean_freight_usd_sell === "0.00"
          ? "¥" +
            Number(currentQuoteItems.ocean_freight_jpy_sell).toLocaleString()
          : "-"}
      </div>
      <div className={classes.quotes_body_item} style={widthList[8]}>
        {currentQuoteItems.thc_jpy_buy === "0.00"
          ? "Incl"
          : currentQuoteItems.thc_jpy_buy > "0.00"
          ? "¥" + Number(currentQuoteItems.thc_jpy_buy).toLocaleString()
          : "-"}
        <br />
        {currentQuoteItems.thc_jpy_sell === "0.00"
          ? "Incl"
          : currentQuoteItems.thc_jpy_sell > "0.00"
          ? "¥" + Number(currentQuoteItems.thc_jpy_sell).toLocaleString()
          : "-"}
      </div>
      <div className={classes.quotes_body_item} style={widthList[9]}>
        {currentQuoteItems.cfs_charge_jpy_buy === "0.00"
          ? "Incl"
          : currentQuoteItems.cfs_charge_jpy_buy > "0.00"
          ? "¥" + Number(currentQuoteItems.cfs_charge_jpy_buy).toLocaleString()
          : "-"}
        <br />
        {currentQuoteItems.cfs_charge_jpy_sell === "0.00"
          ? "Incl"
          : currentQuoteItems.cfs_charge_jpy_sell > "0.00"
          ? "¥" + Number(currentQuoteItems.cfs_charge_jpy_sell).toLocaleString()
          : "-"}
      </div>
      <div className={classes.quotes_body_item} style={widthList[10]}>
        {currentQuoteItems.lss_usd_buy === "0.00" &&
        currentQuoteItems.lss_jpy_buy === "0.00"
          ? "Incl"
          : currentQuoteItems.lss_usd_buy > 0
          ? "$" + Number(currentQuoteItems.lss_usd_buy).toLocaleString()
          : currentQuoteItems.lss_usd_buy === "0.00"
          ? "¥" + Number(currentQuoteItems.lss_jpy_buy).toLocaleString()
          : "-"}
        <br />
        {currentQuoteItems.lss_usd_sell === "0.00" &&
        currentQuoteItems.lss_jpy_sell === "0.00"
          ? "Incl"
          : currentQuoteItems.lss_usd_sell > 0
          ? "$" + Number(currentQuoteItems.lss_usd_sell).toLocaleString()
          : currentQuoteItems.lss_usd_sell === "0.00"
          ? "¥" + Number(currentQuoteItems.lss_jpy_sell).toLocaleString()
          : "-"}
      </div>
      <div className={classes.quotes_body_item} style={widthList[11]}>
        {currentQuoteItems.drayge_recovery_charge_jpy_buy === "0.00"
          ? "Incl"
          : currentQuoteItems.drayge_recovery_charge_jpy_buy > "0.00"
          ? "¥" +
            Number(
              currentQuoteItems.drayge_recovery_charge_jpy_buy
            ).toLocaleString()
          : "-"}
        <br />
        {currentQuoteItems.drayge_recovery_charge_jpy_buy === "0.00"
          ? "Incl"
          : currentQuoteItems.drayge_recovery_charge_jpy_buy > "0.00"
          ? "¥" +
            Number(
              currentQuoteItems.drayge_recovery_charge_jpy_buy
            ).toLocaleString()
          : "-"}
      </div>
      <div className={classes.quotes_body_item} style={widthList[12]}>
        {currentQuoteItems.wrs_usd_buy === null ||
        currentQuoteItems.wrs_usd_buy === "0.00"
          ? "-"
          : "$" + Number(currentQuoteItems.wrs_usd_buy).toLocaleString()}
        <br />
        {currentQuoteItems.wrs_usd_sell === null ||
        currentQuoteItems.wrs_usd_sell === "0.00"
          ? "-"
          : "$" + Number(currentQuoteItems.wrs_usd_sell).toLocaleString()}
      </div>
      <div className={classes.quotes_body_item} style={widthList[13]}>
        {currentQuoteItems.doc_fee_jpy_buy === null ||
        currentQuoteItems.doc_fee_jpy_buy === "0.00"
          ? "-"
          : "¥" + Number(currentQuoteItems.doc_fee_jpy_buy).toLocaleString()}
        <br />
        {currentQuoteItems.doc_fee_jpy_sell === null ||
        currentQuoteItems.doc_fee_jpy_sell === "0.00"
          ? "-"
          : "¥" + Number(currentQuoteItems.doc_fee_jpy_sell).toLocaleString()}
      </div>
      <div className={classes.quotes_body_item} style={widthList[14]}>
        {currentQuoteItems.do_fee_jpy_buy === null ||
        currentQuoteItems.do_fee_jpy_buy === "0.00"
          ? "-"
          : "¥" + Number(currentQuoteItems.do_fee_jpy_buy).toLocaleString()}
        <br />
        {currentQuoteItems.do_fee_jpy_sell === null ||
        currentQuoteItems.do_fee_jpy_sell === "0.00"
          ? "-"
          : "¥" + Number(currentQuoteItems.do_fee_jpy_sell).toLocaleString()}
      </div>
      <div className={classes.quotes_body_item} style={widthList[15]}>
        {currentQuoteItems.pss_usd_buy === null ||
        currentQuoteItems.pss_usd_buy === "0.00"
          ? "-"
          : "$" + Number(currentQuoteItems.pss_usd_buy).toLocaleString()}
        <br />
        {currentQuoteItems.pss_usd_sell === null ||
        currentQuoteItems.pss_usd_sell === "0.00"
          ? "-"
          : "$" + Number(currentQuoteItems.pss_usd_sell).toLocaleString()}
      </div>
      <div className={classes.quotes_body_item} style={widthList[16]}>
        {currentQuoteItems.afs_jpy_buy === null ||
        currentQuoteItems.afs_jpy_buy === "0.00"
          ? "-"
          : "¥" + Number(currentQuoteItems.afs_jpy_buy).toLocaleString()}
        <br />
        {currentQuoteItems.afs_jpy_sell === null ||
        currentQuoteItems.afs_jpy_sell === "0.00"
          ? "-"
          : "¥" + Number(currentQuoteItems.afs_jpy_sell).toLocaleString()}
      </div>
      <div className={classes.quotes_body_item} style={widthList[17]}>
        {currentQuoteItems.gri_usd_buy === null ||
        currentQuoteItems.gri_usd_buy === "0.00"
          ? "-"
          : "$" + Number(currentQuoteItems.gri_usd_buy).toLocaleString()}
        <br />
        {currentQuoteItems.gri_usd_sell === null ||
        currentQuoteItems.gri_usd_sell === "0.00"
          ? "-"
          : "$" + Number(currentQuoteItems.gri_usd_sell).toLocaleString()}
      </div>
      <div className={classes.quotes_body_item} style={widthList[18]}>
        {currentQuoteItems.err_usd_buy === null ||
        currentQuoteItems.err_usd_buy === "0.00"
          ? "-"
          : "$" + Number(currentQuoteItems.err_usd_buy).toLocaleString()}
        <br />
        {currentQuoteItems.err_usd_buy === null ||
        currentQuoteItems.err_usd_buy === "0.00"
          ? "-"
          : "$" + Number(currentQuoteItems.err_usd_buy).toLocaleString()}
      </div>
      <div className={classes.quotes_body_item} style={widthList[19]}>
        {currentQuoteItems.cic_usd_buy === "0.00"
          ? "Incl"
          : currentQuoteItems.cic_usd_buy > 0
          ? "$" + Number(currentQuoteItems.cic_usd_buy).toLocaleString()
          : currentQuoteItems.cic_usd_buy === "0.00"
          ? "¥" + Number(currentQuoteItems.cic_jpy_buy).toLocaleString()
          : "-"}
        <br />
        {currentQuoteItems.cic_usd_sell === "0.00"
          ? "Incl"
          : currentQuoteItems.cic_usd_sell > 0
          ? "$" + Number(currentQuoteItems.cic_usd_sell).toLocaleString()
          : currentQuoteItems.cic_usd_sell === "0.00"
          ? "¥" + Number(currentQuoteItems.cic_jpy_sell).toLocaleString()
          : "-"}
      </div>
      <div className={classes.quotes_body_item_center} style={widthList[20]}>
        <Button
          variant="contained"
          className={styles.enableButton}
          onClick={() => toquoteedit(item)}
        >
          編集
        </Button>
      </div>
    </>
  );
};

export default OperatorQuoteBoxPalletItem;
