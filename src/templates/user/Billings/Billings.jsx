import React from "react";
import { BillingHead, BillingList } from "../../index";
import classes from "../../../dist/css/billings.module.css";

const Billings = () => {
  return (
    <section className={classes.main}>
      <BillingHead />
      <BillingList />
    </section>
  );
};

export default Billings;
