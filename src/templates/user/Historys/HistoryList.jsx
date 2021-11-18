import React from "react";
import classes from "../../../dist/css/history.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import ShipIcon from "../../../dist/images/輸送船アイコン.png";

const HistoryList = () => {
  const w_2 = { width: "2%" };
  const w_6 = { width: "6%" };
  const w_8 = { width: "8%" };
  const w_10 = { width: "10%" };
  const w_12 = { width: "12%" };
  const w_13 = { width: "13%" };
  const w_15 = { width: "15%" };

  return (
    <div className={classes.main_body}>
      <div className={classes.billing_head}>
        <div className={classes.billing_head_item} style={w_2}></div>
        <div className={classes.billing_head_item} style={w_13}>
          請求書No
        </div>
        <div className={classes.billing_head_item} style={w_13}>
          Invoice No
        </div>
        <div className={classes.billing_head_item} style={w_13}>
          From
        </div>
        <div className={classes.billing_head_item} style={w_13}>
          To
        </div>
        <div className={classes.billing_head_item} style={w_6}>
          種類
        </div>
        <div className={classes.billing_head_item} style={w_12}>
          支払い期限
        </div>
        <div className={classes.billing_head_item} style={w_6}>
          状況
        </div>
        <div className={classes.billing_head_item} style={w_10}>
          請求金額
        </div>
        <div className={classes.billing_head_item} style={w_6}></div>
        <div className={classes.billing_head_item} style={w_2}></div>
      </div>

      <div className={classes.billing_body}>
        <div className={classes.billing_body_item} style={w_2}></div>
        <div className={classes.billing_body_item} style={w_13}>
          PR01-20200001
        </div>
        <div className={classes.billing_body_item} style={w_13}>
          20201224111
        </div>
        <div className={classes.billing_body_item} style={w_13}>
          KIX,Japan
        </div>
        <div className={classes.billing_body_item} style={w_13}>
          LAX,U.S
        </div>
        <div className={classes.billing_body_item} style={w_6}>
          <img className={classes.billing_img} src={ShipIcon} />
        </div>
        <div className={classes.billing_body_item} style={w_12}>
          2020/08/22
        </div>
        <div className={classes.billing_body_item} style={w_6}>
          <span className={classes_Common.text_info}>支払済</span>
        </div>
        <div className={classes.billing_body_item} style={w_10}>
          $638.20
        </div>
        <div className={classes.billing_body_item} style={w_8}>
          <a href="" className={classes_Common.view_info_btn}>
            見る
          </a>
        </div>
      </div>

      <div className={classes.billing_body}>
        <div className={classes.billing_body_item} style={w_2}></div>
        <div className={classes.billing_body_item} style={w_13}>
          PR01-20200001
        </div>
        <div className={classes.billing_body_item} style={w_13}>
          20201224111
        </div>
        <div className={classes.billing_body_item} style={w_13}>
          KIX,Japan
        </div>
        <div className={classes.billing_body_item} style={w_13}>
          LAX,U.S
        </div>
        <div className={classes.billing_body_item} style={w_6}>
          <img className={classes.billing_img} src={ShipIcon} />
        </div>
        <div className={classes.billing_body_item} style={w_12}>
          2020/08/22
        </div>
        <div className={classes.billing_body_item} style={w_6}>
          <span className={classes_Common.text_denger}>未払い</span>
        </div>
        <div className={classes.billing_body_item} style={w_10}>
          $638.20
        </div>
        <div className={classes.billing_body_item} style={w_8}>
          <a href="" className={classes_Common.view_denger_btn}>
            見る
          </a>
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
