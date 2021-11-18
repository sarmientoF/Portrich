import React from "react";
import classes from "../../../dist/css/signup_thanks.module.css";

const SignUpThankHead = () => {
  return (
    <div className={classes.main_body_head}>
      <div className={classes.head_item_area}>
        <div className={classes.head_text_eria}>
          <div className={classes.head_text_info}>情報入力</div>
          <div className={classes.head_info_ball}></div>
        </div>

        <div className={classes.head_progress_area}>
          <div className={classes.head_progress_hr}>
            <hr className={classes.hr_info} />
          </div>
        </div>

        <div className={classes.head_text_eria}>
          <div className={classes.head_text_info}>確認</div>
          <div className={classes.head_info_ball}></div>
        </div>

        <div className={classes.head_progress_area}>
          <div className={classes.head_progress_hr}>
            <hr className={classes.hr_info} />
          </div>
        </div>

        <div className={classes.head_text_eria}>
          <div className={classes.head_text_info}>完了</div>
          <div className={classes.head_info_ball}></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpThankHead;
