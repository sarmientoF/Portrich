import React from "react";
import { OperatorScheduleHead, OperatorScheduleTabs } from "../../index";
import classes from "../../../dist/css/bookings.module.css";

const OperatorSchedules = () => {
  return (
    <section className={classes.main}>
      <OperatorScheduleHead />
      <OperatorScheduleTabs />
    </section>
  );
};

export default OperatorSchedules;
