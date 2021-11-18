import React, { useEffect, useState } from "react";
import classes from "../../dist/css/shipments_detail.module.css";

const ExportBookingOnly = (props) => {
  const { currentStateData } = props;

  return (
    <>
      <div className={classes.s_d_head_item}>
        <div
          className={classes.s_d_img_area}
          style={currentStateData.export_customs_styles_of_not_selected}
        >
          <img
            className={classes.s_d_img}
            src={currentStateData.export_custom_of_not_selected}
          />
        </div>
        <div className={classes.s_d_description_title}>通関</div>
        <div className={classes.s_d_description}></div>
      </div>
      <div className={classes.s_d_hr_area}>
        {currentStateData.export_customs_hr_of_not_selected ? (
          <hr className={classes.s_d_hr_info} />
        ) : (
          <hr className={classes.s_d_hr_gray} />
        )}
      </div>
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
    </>
  );
};
export default ExportBookingOnly;
