import React from "react";
import { BookingHead, BookingListContainer, BookingTabs } from "../../index";
import classes from "../../../dist/css/bookings.module.css";

const Bookings = () => {
  return (
    <section className={classes.main}>
      <BookingHead />
      <BookingTabs />
    </section>
  );
};

export default Bookings;
