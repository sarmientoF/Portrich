import React from "react";
import { HistoryHead, HistoryList } from "../../index";
import classes from "../../../dist/css/history.module.css";

const Historys = () => {
  return (
    <section className={classes.main}>
      <HistoryHead />
      <HistoryList />
    </section>
  );
};

export default Historys;
