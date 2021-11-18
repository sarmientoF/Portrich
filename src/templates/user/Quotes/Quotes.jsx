import React from "react";
import classes from "../../../dist/css/quotes.module.css";
import { QuotesTabs } from "../../index";

const Quotes = () => {
  return (
    <section className={classes.main}>
      <QuotesTabs />
    </section>
  );
};

export default Quotes;
