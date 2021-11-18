import React from "react";
import classes from "../../dist/css/invoicelist.module.css";
import { SerchBox } from "../Uikit/index";
import { CategoryButton } from "./index";

const InvoiceListHead = () => {
  return (
    <div className={classes.head_menu}>
      <CategoryButton />
      <SerchBox />
    </div>
  );
};

export default InvoiceListHead;
