import React from "react";
import classes from "../../dist/css/news.module.css";
import { ReactComponent as PortrichIcon } from "../../dist/images/portrichicon.svg";

const NewsListItem = () => {
  return (
    <div className={classes.news_area}>
      <div className={classes.news_area_item}>
        <div className={classes.news_area_item_icon}>
          <PortrichIcon />
        </div>
        <div className={classes.news_area_item_text}>
          【新機能追加】ダッシュボードが追加されました。
        </div>
        <div className={classes.news_area_item_time}>6時間前</div>
      </div>
      <div className={classes.news_area_item}>
        <div className={classes.news_area_item_icon}>
          <PortrichIcon />
        </div>
        <div className={classes.news_area_item_text}>
          【新機能追加】ダッシュボードが追加されました。貨物状況がリアルタイムで確認できるようになりました。こちらから確認いただけます。
        </div>
        <div className={classes.news_area_item_time}>6時間前</div>
      </div>
      <div className={classes.news_area_item}>
        <div className={classes.news_area_item_icon}>
          <PortrichIcon />
        </div>
        <div className={classes.news_area_item_text}>
          【新機能追加】ダッシュボードが追加されました。
        </div>
        <div className={classes.news_area_item_time}>6時間前</div>
      </div>
      <div className={classes.news_area_item}>
        <div className={classes.news_area_item_icon}>
          <PortrichIcon />
        </div>
        <div className={classes.news_area_item_text}>
          【新機能追加】ダッシュボードが追加されました。
        </div>
        <div className={classes.news_area_item_time}>6時間前</div>
      </div>
      <div className={classes.news_area_item}>
        <div className={classes.news_area_item_icon}>
          <PortrichIcon />
        </div>
        <div className={classes.news_area_item_text}>
          【新機能追加】ダッシュボードが追加されました。
        </div>
        <div className={classes.news_area_item_time}>6時間前</div>
      </div>
      <div className={classes.news_area_item}>
        <div className={classes.news_area_item_icon}>
          <PortrichIcon />
        </div>
        <div className={classes.news_area_item_text}>
          【新機能追加】ダッシュボードが追加されました。
        </div>
        <div className={classes.news_area_item_time}>6時間前</div>
      </div>
    </div>
  );
};
export default NewsListItem;
