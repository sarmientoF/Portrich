import React from "react";
import { MyPageForms, MyPageMenber, MyPageShareMail } from "../../index";
import classes from "../../../dist/css/mypages.module.css";

const MyPage = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <MyPageForms />
        <div className={classes.main_body_right}>
          <MyPageMenber />
          <MyPageShareMail />
        </div>
      </div>
    </section>
  );
};
export default MyPage;
