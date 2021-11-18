import React, { useState } from "react";
import classes from "../../dist/css/bookinglist.module.css";
import { Button, makeStyles } from "@material-ui/core";
import { SerchBox } from "../Uikit/index";

const useStyles = makeStyles((theme) => ({
  category: {
    display: "inlin-block",
    height: "20px",
    lineHeight: "20px",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#575861",
    padding: "6px 12px",
    marginRight: "5px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#E7F0FE",
    },
  },
  active: {
    backgroundColor: "#E7F0FE",
    fontWeight: "bold",
  },
  root: {
    "& .MuiButton-contained": {
      boxShadow: "none",
    },
  },
}));

const buttonItem = [
  "ALL",
  "Booking完了",
  "依頼中",
  "Booking不成立",
  "キャンセル済",
];

const BookingHead = () => {
  const styles = useStyles();
  const [click, setClick] = useState(0);
  const handleClick = (index) => {
    setClick(index);
  };

  return (
    <div className={classes.head_menu}>
      <div className={classes.head_category_group}>
        <div className={styles.root}>
          {buttonItem.map((value, index) => (
            <Button
              variant="contained"
              className={`${styles.category} ${
                click === index && styles.active
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>
      <SerchBox />
    </div>
  );
};

export default BookingHead;
