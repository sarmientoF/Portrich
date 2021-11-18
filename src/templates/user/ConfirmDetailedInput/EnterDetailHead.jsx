import React from "react";
import classes from "../../../dist/css/enter_detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const EnterDetailHead = () => {
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
          <div className={classes.no_info_trun}>2</div>
          <div className={classes.text_gray}>詳細情報</div>
        </div>

        <div className={classes.hr_area}>
          <hr className={classes.hr_gray} />
        </div>

        <div className={classes.head_item}>
          <div className={classes.no_gray}>3</div>
          <div className={classes.text_gray}>確認 & Booking</div>
        </div>

        <div className={classes.hr_area}>
          <hr className={classes.hr_gray} />
        </div>

        <div className={classes.head_item}>
          <div className={classes.no_gray}>4</div>
          <div className={classes.text_gray}>完了</div>
        </div>
      </div>
    </div>
  );
};

export default EnterDetailHead;
