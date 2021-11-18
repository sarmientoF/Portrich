import React from "react";
import classes from "../../../dist/css/thanks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ThanksHead = () => {
  return (
    <div className={classes.main_body_head}>
      <div className={classes.head_item_area}>
        <div className={classes.head_item}>
          <div className={classes.no_info}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className={classes.text_gray}>スケジュール</div>
        </div>

        <div className={classes.hr_area}>
          <hr className={classes.hr_info} />
        </div>

        <div className={classes.head_item}>
          <div className={classes.no_info}>2</div>
          <div className={classes.text_gray}>通関・ドレージ</div>
        </div>

        <div className={classes.hr_area}>
          <hr className={classes.hr_info} />
        </div>

        <div className={classes.head_item}>
          <div className={classes.no_info}>3</div>
          <div className={classes.text_gray}>確認 & Booking</div>
        </div>

        <div className={classes.hr_area}>
          <hr className={classes.hr_info} />
        </div>

        <div className={classes.head_item}>
          <div className={classes.no_info_trun}>4</div>
          <div className={classes.text_gray}>完了</div>
        </div>
      </div>
    </div>
  );
};

export default ThanksHead;
