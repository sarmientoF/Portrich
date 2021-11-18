import React, { useReducer } from "react";
import { DataRegistrationTabs } from "../../index";
import classes from "../../../dist/css/dataentrys.module.css";

const DataRegistrations = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <DataRegistrationTabs />
      </div>
    </section>
  );
};

export default DataRegistrations;
