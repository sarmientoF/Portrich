import React from "react";
import classes from "../../dist/css/schedulelist.module.css";
import { StepperHead } from "../Uikit/index";

const ScheduleListHead = () => {
  return (
    <div className={classes.main_head}>
      <div className={classes.mb_30}></div>
      <StepperHead stepNo={2.5} />
    </div>
  );
};

export default ScheduleListHead;
