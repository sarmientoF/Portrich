import React from "react";
import { MyPageForm, MyPageHead } from "../../index";
import classes from "../../../dist/css/mypage.module.css";

const MyPages = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <MyPageForm />
      </div>
    </section>
  );
};
export default MyPages;
