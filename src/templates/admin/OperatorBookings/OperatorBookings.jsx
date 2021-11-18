import React from "react";
import { OperatorBookingHead, OperatorBookingTabs } from "../../index";
import classes from "../../../dist/css/bookings.module.css";

const OperatorBookings = () => {
  return (
    <section className={classes.main}>
      <OperatorBookingHead />
      <OperatorBookingTabs />
    </section>
  );
};

export default OperatorBookings;
