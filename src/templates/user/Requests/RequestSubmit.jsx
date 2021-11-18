import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import classes from "../../../dist/css/requests_quotes.module.css";
import { useDispatch } from "react-redux";
import { registerContainerRequest } from "./items/operations";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(1),
    width: "20%",
    fontSize: 14,
    padding: 8,
    background: "#0052cc",
    color: "#fff",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#0052cc",
      opacity: "0.8",
      color: "#fff",
    },
  },
}));

const RequestSubmit = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const register = () => {
    registerContainerRequest(
      props.shipping_type,
      props.selectedPortList,
      props.selectedContainerTypeList,
      props.selectedCargo,
      dispatch
    );
  };

  return (
    <div className={classes.submit_area}>
      <Button variant="contained" className={styles.button} onClick={register}>
        お見積をする
      </Button>
    </div>
  );
};

export default RequestSubmit;
