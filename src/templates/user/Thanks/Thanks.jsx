import React from "react";
import classes from "../../../dist/css/thanks.module.css";
import { ThanklHead, ThankMessage } from "../../index";

const Thanks = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <ThanklHead />
        <ThankMessage />
      </div>
    </section>
  );
};

export default Thanks;
