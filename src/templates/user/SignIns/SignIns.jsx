import React from "react";
import { SignInForm, SignInHead } from "../../index";
import classes from "../../../dist/css/signin.module.css";

const SignIns = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <SignInHead />
        <SignInForm />
      </div>
    </section>
  );
};

export default SignIns;
