import React from "react";
import classes from "../../../dist/css/billinglist.module.css";
import {
  BillingListItem,
  FilterList,
} from "../../../components/billinglist/index";

const BillingsList = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <div className={classes.main_body_title}>請求書一覧</div>
        <div className={classes.main_body_text}>
          各種書類ダウンロードが可能です。
        </div>
        <div className={classes.mb_30}></div>
        <FilterList />
        <BillingListItem />
      </div>
    </section>
  );
};

export default BillingsList;
