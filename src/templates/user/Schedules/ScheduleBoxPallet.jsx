import React from "react";
import classes from "../../../dist/css/scheduls.module.css";
import { ScheduleHead, ScheduleListBoxPallet } from "../../index";

const ScheduleBoxPallet = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <ScheduleHead />
        <div className={classes.main_body_list_area}>
          <ScheduleListBoxPallet />
        </div>
      </div>
    </section>
  );
};

export default ScheduleBoxPallet;
