import React from "react";
import classes_1 from "../../../dist/css/bookings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "24ch",
    },
  },
}));

const BookingHead = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes_1.main_head}>
        <div className={classes_1.main_head_title}>Booking一覧</div>
      </div>
    </div>
  );
};

export default BookingHead;
