import React, { useEffect, useState } from "react";
import classes from "../../dist/css/shipments_detail.module.css";

const ImportBookingCustom = (props) => {
  const { currentStateData } = props;
  return (
    <>
      <div className={classes.s_d_head_item}>
        <div
          className={classes.s_d_img_area}
          style={currentStateData.departure_ship_styles}
        >
          <img
            className={classes.s_d_img}
            src={currentStateData.departure_ship}
          />
        </div>
        <div className={classes.s_d_description_title}>
          {currentStateData.departure_port_name}
        </div>
        <div className={classes.s_d_description}>
          ETD：
          {currentStateData.changeddeparturedate}
        </div>
      </div>
      <div className={classes.s_d_hr_area}>
        {currentStateData.departure_ship_hr ? (
          <hr className={classes.s_d_hr_info} />
        ) : (
          <hr className={classes.s_d_hr_gray} />
        )}
      </div>
      <div className={classes.s_d_head_item}>
        <div
          className={classes.s_d_img_area}
          style={currentStateData.arrival_ship_styles}
        >
          <img
            className={classes.s_d_img}
            src={currentStateData.arrival_ship}
          />
        </div>

        <div className={classes.s_d_description_title}>
          {currentStateData.arrival_port_name}
        </div>
        <div className={classes.s_d_description}>
          ETA：
          {currentStateData.changedarrivaldate}
        </div>
      </div>
      <div className={classes.s_d_hr_area}>
        {currentStateData.arrival_ship_hr ? (
          <hr className={classes.s_d_hr_info} />
        ) : (
          <hr className={classes.s_d_hr_gray} />
        )}
      </div>
      <div className={classes.s_d_head_item}>
        <div
          className={classes.s_d_img_area}
          style={currentStateData.import_customs_styles}
        >
          <img
            className={classes.s_d_img}
            src={currentStateData.import_customs}
          />
        </div>
        <div className={classes.s_d_description_title}>通関</div>
        <div className={classes.s_d_description}>
          {currentStateData.is_checking_customs
            ? "検査中"
            : "CUT：" + currentStateData.cut_day}
        </div>
      </div>
    </>
  );
};
export default ImportBookingCustom;
