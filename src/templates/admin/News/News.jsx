import React from "react";
import classes from "../../../dist/css/news.module.css";
import { NewsListItem } from "../../../components/news/index";

const News = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <div className={classes.main_body_title}>通知一覧</div>
        <NewsListItem />
      </div>
    </section>
  );
};

export default News;
