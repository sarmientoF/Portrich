import React from "react";
import classes from "../../../dist/css/operatorscheduls.module.css";
import {
  OperatorScheduleHead,
  OperatorScheduleListBoxPallet,
} from "../../index";

const OperatorScheduleBoxPallet = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <OperatorScheduleHead />
        <div className={classes.main_body_list_area}>
          <OperatorScheduleListBoxPallet />
        </div>
      </div>
    </section>
  );
};

export default OperatorScheduleBoxPallet;
