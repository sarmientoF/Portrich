import React from "react";
import classes from "../../dist/css/stepperhead.module.css";

const StepperHead = (props) => {
  const label = [
    "見積を選択",
    "スケジュールを選択",
    "詳細入力",
    "確認してブッキング",
    "ブッキング完了",
  ];
  const stepNo = props.stepNo;

  const step_hr = (stepNo, index) => {
    if (index + 1 < stepNo) {
      if (index + 1.5 === stepNo) {
        return classes.hr_info_half;
      } else {
        return classes.hr_info;
      }
    } else {
      return classes.hr_gray;
    }
  };

  return (
    <div className={classes.head_item_area}>
      {label.map((value, index) => (
        <>
          <div className={classes.head_item}>
            <div
              className={
                index + 1 <= stepNo ? classes.no_info_trun : classes.no_gray
              }
            >
              {index + 1}
            </div>
            <div className={classes.text_gray}>{value}</div>
          </div>
          {index + 1 === label.length ? (
            <></>
          ) : (
            <div className={classes.hr_area}>
              <hr className={step_hr(stepNo, index)} />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default StepperHead;
