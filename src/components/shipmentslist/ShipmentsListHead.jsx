import React from "react";
import classes from "../../dist/css/shipmentslist.module.css";
import { SerchBox } from "../Uikit/index";
import { CategoryButton } from "./index";

const ShipmentsListHead = () => {
  return (
    <div className={classes.head_menu}>
      <CategoryButton />
      <SerchBox />
    </div>
  );
};

export default ShipmentsListHead;
