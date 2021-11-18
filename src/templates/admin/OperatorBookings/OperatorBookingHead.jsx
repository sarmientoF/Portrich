import React from "react";
import classes_1 from "../../../dist/css/bookings.module.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "24ch",
    },
  },
}));

const OperatorBookingHead = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes_1.main_head}>
        <div className={classes_1.main_head_title}>オペレーターBooking一覧</div>
      </div>
    </div>
  );
};

export default OperatorBookingHead;
