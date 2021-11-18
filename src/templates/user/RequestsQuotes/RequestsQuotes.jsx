import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/requests_quotes.module.css";
import {
  fetchShipPortList,
  fetchCargoNameList,
  fetchContainerTypeList,
} from "../../../common/services/fetchDatas.js";
import { RequestsQuotesOcean, RequestsQuotesTruck } from "../../index";
import { ShipOrTruck } from "../../../components/requestsquotes/index";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    width: "22ch",
    fontSize: 12,
    padding: 5,
    color: "#575861",
    borderColor: "#d5d6e8",
    textAlign: "center",
    textTransform: "capitalize",
    "&:hover": {
      opacity: "0.8",
      color: "#575861",
    },
  },
  blue: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    width: "22ch",
    fontSize: 12,
    padding: 5,
    color: "#0052cc",
    borderColor: "#0052cc",
    textAlign: "center",
    textTransform: "capitalize",
    "&:hover": {
      opacity: "0.8",
      color: "#0052cc",
    },
  },
  select: {
    width: "38.5ch",
    fontSize: 12,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    "& .MuiFormLabel-root": {
      fontSize: 12,
      fontFamily: "none",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#d5d6e8",
      },
      "&:hover fieldset": {
        borderColor: "#0052cc",
      },
    },
  },
  cargo: {
    "& .MuiTextField-root": {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(0.5),
      width: "72.5ch",
    },
    "& .MuiFormLabel-root": {
      fontSize: 12,
      fontFamily: "none",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#d5d6e8",
      },
      "&:hover fieldset": {
        borderColor: "#0052cc",
      },
    },
  },
  textfield: {
    fontSize: 12,
    width: "38.5ch",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    "& .MuiFormLabel-root": {
      fontSize: 12,
      fontFamily: "none",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#d5d6e8",
      },
      "&:hover fieldset": {
        borderColor: "#0052cc",
      },
    },
  },

  portarea: {
    "& .MuiTextField-root": {
      fontSize: 12,
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(0.5),
      width: "32ch",
    },
  },
  containerarea: {
    "& .MuiTextField-root": {
      fontSize: 12,
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(0.5),
      width: "20ch",
    },
  },
  btn: {
    color: "#fff",
    width: "22ch",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    padding: 5,
    fontSize: 12,
    background: "#0052cc",
    textTransform: "capitalize",
    boxShadow: "none",
    "&:hover": {
      opacity: "0.8",
      background: "#0052cc",
      boxShadow: "none",
    },
  },
  dialog_btn: {
    textTransform: "capitalize",
    fontSize: 12,
  },
  icon: {
    paddingRight: 6,
  },
}));

const RequestsQuotes = () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();
  const styles = useStyles();
  const [portList, setPortList] = useState([]);
  const [containerTypeList, setContainerTypeList] = useState([]);
  const [cargoNameList, setCargoNameList] = useState([]);

  useEffect(() => {
    fetchShipPortList(setPortList, dispatch);
    fetchCargoNameList(setCargoNameList, dispatch);
    fetchContainerTypeList(setContainerTypeList, dispatch);
  }, []);
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <div className={classes.main_body_title}>見積依頼</div>
        <ShipOrTruck state={state} setState={setState} styles={styles} />
        {state.ocean === undefined && state.truck === undefined ? (
          <></>
        ) : state.ocean ? (
          <RequestsQuotesOcean
            state={state}
            setState={setState}
            styles={styles}
            portList={portList}
            containerTypeList={containerTypeList}
            cargoNameList={cargoNameList}
          />
        ) : state.truck ? (
          <RequestsQuotesTruck
            state={state}
            setState={setState}
            styles={styles}
            portList={portList}
            containerTypeList={containerTypeList}
          />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default RequestsQuotes;
