import React, { useState } from "react";
import classes from "../../../dist/css/admin_requestlist.module.css";
import { makeStyles } from "@material-ui/core";
import {
  fclItem,
  lclItem,
  truckItem,
  drageItem,
  customsItem,
} from "./items/operations";
import {
  FclComponent,
  LclComponent,
  TruckComponent,
  DrageComponent,
  CustomsClearanceComponent,
  CreateRequestDialog,
} from "../../../components/adminrequestlist/index.js";
import { BtnGroup, SerchBox } from "../../../components/Uikit";

const useStyles = makeStyles((theme) => ({
  dialogroot: {
    "& .MuiDialog-paperWidthSm": {
      minWidth: 800,
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
      border: "1px solid #415B65",
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
    border: "none",
    "&:hover": {
      opacity: "0.8",
      background: "#415B65",
      boxShadow: "none",
      border: "none",
    },
  },
  dialog_btn: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#415B65",
    marginBottom: 10,
  },
  delete_btn: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#e34040",
    marginBottom: 10,
    border: "1px solid #e34040",
    "&:hover": {
      opacity: "0.8",
      background: "#e34040",
      color: "#fff",
      border: "1px solid #e34040",
    },
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
    margin: "20px 30px",
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

const AdminRequestList = () => {
  const styles = useStyles();
  // const [quoteListItem, setQuoteListItem] = useState([]);
  // useEffect(() => {
  //   fetchViewForQuoteRequestsOcean(setQuoteListItem, dispatch);
  // }, []);
  const [clickNum, setClickNum] = useState(0);
  const btnTitle = ["FCL", "LCL", "トラック", "ドレージ", "通関"];

  return (
    <section className={classes.main}>
      <div className={classes.body}>
        <div className={classes.title_area}>
          <div className={classes.title}>見積依頼一覧</div>
        </div>
        <div className={classes.mb_20}></div>
        <div className={classes.filter_area}>
          <BtnGroup
            btnTitle={btnTitle}
            clickNum={clickNum}
            setClickNum={setClickNum}
          />
          <div className={classes.search}>
            <SerchBox />
          </div>
        </div>
        <div className={classes.mb_30}></div>
        <div className={classes.content}>
          <div className={styles.root}>
            {clickNum === 0 && <FclComponent item={fclItem} styles={styles} />}
            {clickNum === 1 && <LclComponent item={lclItem} styles={styles} />}
            {clickNum === 2 && (
              <TruckComponent item={truckItem} styles={styles} />
            )}
            {clickNum === 3 && (
              <DrageComponent item={drageItem} styles={styles} />
            )}
            {clickNum === 4 && (
              <CustomsClearanceComponent item={customsItem} styles={styles} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminRequestList;
