import React from "react";
import classes from "../../../dist/css/operatorscheduls.module.css";
import {
  OperatorScheduleHead,
  OperatorScheduleListContainer,
} from "../../index";

const OperatorScheduleContainer = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <OperatorScheduleHead />
        <div className={classes.main_body_list_area}>
          <OperatorScheduleListContainer />
        </div>
      </div>
    </section>
  );
};

export default OperatorScheduleContainer;
