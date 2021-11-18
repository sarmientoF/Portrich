import React, { useState } from "react";
import classes from "../../../dist/css/admin_bidpricelist.module.css";
// import { push } from "connected-react-router";
// import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import {
  fclItem,
  lclItem,
  truckItem,
  drageItem,
  customsItem,
} from "./items/operations";
import { BtnGroup } from "../../../components/Uikit";
import {
  CustomsComponent,
  CustomsCreateBitPriceListDialog,
} from "../../../components/adminbidpricelist/customs/index";
import {
  DrayageComponent,
  DrayageCreateBitPriceListDialog,
} from "../../../components/adminbidpricelist/drayage/index";
import {
  FclComponent,
  FclCreateBitPriceListDialog,
} from "../../../components/adminbidpricelist/fcl/index";
import {
  LclComponent,
  LclCreateBitPriceListDialog,
} from "../../../components/adminbidpricelist/lcl/index";
import {
  TruckComponent,
  TruckCreateBitPriceListDialog,
} from "../../../components/adminbidpricelist/truck/index";

const useStyles = makeStyles((theme) => ({
  dialogroot: {
    "& .MuiDialog-paperWidthSm": {
      minWidth: 1200,
    },
  },
  button: {
    background: "#fff",
    border: "1px solid #415B65",
    color: "#415B65",
    textAlign: "center",
    fontSize: "12px",
    display: "block",
    width: "100%",
    borderRadius: "3px",
    boxShadow: "none",
    "&:hover": {
      opacity: "0.8",
      background: "#415B65",
      color: "#fff",
    },
  },
  buttonroot: {
    "& .MuiButton-contained:hover": {
      background: "#415B65",
      color: "#fff",
      boxShadow: "none",
    },
  },
  root: {
    "& .MuiButton-label": {
      justifyContent: "space-between",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "30px",
    },
    "& .MuiButton-contained": {
      boxShadow: "none",
    },
    "& .MuiButton-root": {
      padding: "4px 5px",
      minWidth: 10,
    },
  },
  btn: {
    color: "#fff",
    width: "22ch",
    padding: 5,
    fontSize: 12,
    background: "#415B65",
    textTransform: "capitalize",
    boxShadow: "none",
    borderRadius: "3px",
    "&:hover": {
      opacity: "0.8",
      background: "#415B65",
      boxShadow: "none",
    },
  },
  dialog_btn: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#415B65",
    marginBottom: 10,
  },
  request_btn: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#fff",
    background: "#415B65",
    marginBottom: 10,
    "&:hover": {
      opacity: "0.8",
      background: "#415B65",
      boxShadow: "none",
    },
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    background: "#415B65",
    color: "#fff",
    padding: 6,
  },
  content: {
    border: "1px solid #D9DCE0",
    padding: 10,
    margin: "20px 30px 0",
    overflowY: "visible",
  },
  form: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(0.5),
      width: "100%",
    },
    "& .MuiFilledInput-input": {
      padding: "9px",
      borderBottom: "none",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "2px solid #D9DCE0",
    },
    "& .MuiAutocomplete-inputRoot": {
      padding: 0,
    },
  },
}));

const AdminBidPriceList = () => {
  const styles = useStyles();
  const [clickNum, setClickNum] = useState(0);
  const btnTitle = ["FCL", "LCL", "トラック", "ドレージ", "通関"];

  return (
    <section className={classes.main}>
      <div className={classes.body}>
        <div className={classes.title_area}>
          <div className={classes.title}>買値一覧画面</div>
          <div>
            {clickNum === 0 && <FclCreateBitPriceListDialog styles={styles} />}
            {clickNum === 1 && <LclCreateBitPriceListDialog styles={styles} />}
            {clickNum === 2 && (
              <TruckCreateBitPriceListDialog styles={styles} />
            )}
            {clickNum === 3 && (
              <DrayageCreateBitPriceListDialog styles={styles} />
            )}
            {clickNum === 4 && (
              <CustomsCreateBitPriceListDialog styles={styles} />
            )}
          </div>
        </div>
        <div className={classes.mb_20}></div>
        <BtnGroup
          btnTitle={btnTitle}
          clickNum={clickNum}
          setClickNum={setClickNum}
        />
        <div className={classes.mb_30}></div>
        <div className={classes.content}>
          <div className={styles.root}>
            {clickNum === 0 && <FclComponent item={fclItem} styles={styles} />}
            {clickNum === 1 && <LclComponent item={lclItem} styles={styles} />}
            {clickNum === 2 && (
              <TruckComponent item={truckItem} styles={styles} />
            )}
            {clickNum === 3 && (
              <DrayageComponent item={drageItem} styles={styles} />
            )}
            {clickNum === 4 && (
              <CustomsComponent item={customsItem} styles={styles} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBidPriceList;
