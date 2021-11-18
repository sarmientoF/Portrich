import React from "react";
import { AddMenberForm, AddMenberHead } from "../../index";
import classes from "../../../dist/css/addmenber.module.css";

const AddMenbers = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <AddMenberHead />
        <AddMenberForm />
      </div>
    </section>
  );
};

export default AddMenbers;
