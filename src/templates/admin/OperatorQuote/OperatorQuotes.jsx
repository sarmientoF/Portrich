import React from "react";
import classes from "../../../dist/css/operatorquotes.module.css";
import { OperatorQuotesTabs } from "../../index";

const OperatorQuotes = () => {
  return (
    <section className={classes.main}>
      <OperatorQuotesTabs />
    </section>
  );
};

export default OperatorQuotes;
