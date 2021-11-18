import React from "react";
import classes from "../../dist/css/invoicelist.module.css";

const Top = () => {
  return (
    <div className={classes.invoiceList_body}>
      <div className={classes.title}>請求書一覧</div>
      <div className={classes.duwnload}>一括ダウンロード</div>
    </div>
  );
};
export default Top;
