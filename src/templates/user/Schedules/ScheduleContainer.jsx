import React from "react";
import classes from "../../../dist/css/scheduls.module.css";
import { ScheduleHead, ScheduleListContainer } from "../../index";

const ScheduleContainer = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <ScheduleHead />
        <div className={classes.main_body_list_area}>
          <ScheduleListContainer />
        </div>
      </div>
    </section>
  );
};

export default ScheduleContainer;
