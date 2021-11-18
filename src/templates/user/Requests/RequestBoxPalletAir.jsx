import React from "react";
import classes from "../../../dist/css/request.module.css";
import { RequestBoxPalletAirForm, RequestContainerSubmit } from "../../index";

const RequestAir = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_head}>
        <div className={classes.main_head_left}>
          箱/パレット+航空配送 見積依頼
        </div>
        <div className={classes.main_head_right}>
          ※お見積の依頼は24時間可能です。
        </div>
      </div>

      <div className={classes.main_body}>
        <RequestBoxPalletAirForm />
        <RequestContainerSubmit />
      </div>
    </section>
  );
};

export default RequestAir;
