import React from "react";
import { SignUpThank, SignUpThankHead } from "../../index";
import classes from "../../../dist/css/signup_thanks.module.css";

const SignUpThanks = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <SignUpThankHead />
        <SignUpThank />
      </div>
    </section>
  );
};

export default SignUpThanks;
