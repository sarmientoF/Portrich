import React from "react";
import classes from "../../../dist/css/shipments_detail.module.css";
import TopIcon from "../../../dist/images/icons8-上向きの太い矢印-30.png";
import BottomIcon from "../../../dist/images/icons8-太い矢印が指している-30.png";
import Bookings from "../Bookings/Bookings";

const ShipmentsDetailsTask = () => {
  const w_4 = { width: "4%" };
  const w_18 = { width: "18%" };
  const w_40 = { width: "40%" };

  return (
    <div className={classes.task_area}>
      <div className={classes.task_head}>
        <div className={classes.task_head_item} style={w_4}></div>
        <div className={classes.task_head_item} style={w_40}>
          件名
        </div>
        <div className={classes.task_head_item} style={w_18}>
          更新者
        </div>
        <div className={classes.task_head_item} style={w_18}>
          優先度
        </div>
        <div className={classes.task_head_item} style={w_18}>
          期限日
        </div>
      </div>

      <div className={classes.task_body}>
        <div className={classes.task_body_item_area}>
          <div className={classes.task_body_item} style={w_4}>
            <div className={classes.quotes_checkbox_area}>
              <label className={classes.quotes_checkbox_label}>
                <input
                  type="checkbox"
                  name=""
                  className={classes.quotes_checkbox}
                />
              </label>
            </div>
          </div>
          <div className={classes.task_body_item} style={w_40}>
            I/VとP/Lを書類の欄に共有お願いします。
          </div>
          <div className={classes.task_body_item} style={w_18}>
            山田 太郎
          </div>
          <div className={classes.task_body_item} style={w_18}>
            <img className={classes.document_body_img} src={TopIcon} />
          </div>
          <div className={classes.task_body_item} style={w_18}>
            2020/12/22
          </div>
        </div>

        <div className={classes.task_body_item_area}>
          <div className={classes.task_body_item} style={w_4}>
            <div className={classes.quotes_checkbox_area}>
              <label className={classes.quotes_checkbox_label}>
                <input
                  type="checkbox"
                  name=""
                  className={classes.quotes_checkbox}
                />
              </label>
            </div>
          </div>
          <div className={classes.task_body_item} style={w_40}>
            積み付け図を書類の欄
          </div>
          <div className={classes.task_body_item} style={w_18}>
            山田 太郎
          </div>
          <div className={classes.task_body_item} style={w_18}>
            <img className={classes.document_body_img} src={TopIcon} />
          </div>
          <div className={classes.task_body_item} style={w_18}>
            2020/12/22
          </div>
        </div>

        <div className={classes.task_body_item_area}>
          <div className={classes.task_body_item} style={w_4}>
            <div className={classes.quotes_checkbox_area}>
              <label className={classes.quotes_checkbox_label}>
                <input
                  type="checkbox"
                  name=""
                  className={classes.quotes_checkbox}
                />
              </label>
            </div>
          </div>
          <div className={classes.task_body_item} style={w_40}>
            積み付け図を書類の欄
          </div>
          <div className={classes.task_body_item} style={w_18}>
            山田 太郎
          </div>
          <div className={classes.task_body_item} style={w_18}>
            <img className={classes.document_body_img} src={BottomIcon} />
          </div>
          <div className={classes.task_body_item} style={w_18}>
            2020/12/22
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentsDetailsTask;
