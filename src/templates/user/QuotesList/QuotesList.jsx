import React from "react";
import classes from "../../../dist/css/quoteslist.module.css";
import {
  ExportBar,
  ExportFclArea,
  ExportLclArea,
  ImportBar,
  ImportFclArea,
  ImportLclArea,
} from "../../../components/quoteslist/index";

const QuotesList = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <div className={classes.main_body_title}>定期見積を依頼する</div>
        <div className={classes.main_body_text}>
          定期見積の見積結果の確認ページです。
          <br />
          ここから、見積とスケジュールを確認してBooking依頼をしてください。
        </div>
        <div className={classes.mb_30}></div>
        <ExportBar />
        <ExportFclArea />
        <ExportLclArea />
        <ImportBar />
        <ImportFclArea />
        <ImportLclArea />
      </div>
    </section>
  );
};

export default QuotesList;
