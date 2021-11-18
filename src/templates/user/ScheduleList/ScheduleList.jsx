import React from "react";
import classes from "../../../dist/css/schedulelist.module.css";
import {
  ScheduleItem,
  ScheduleDetails,
  ScheduleListHead,
} from "../../../components/schedulelist/index";
import { ReactComponent as Arrow } from "../../../dist/images/→.svg";

const ScheduleList = () => {
  return (
    <section className={classes.main}>
      <ScheduleListHead />
      <div className={classes.mb_30}></div>
      <div className={classes.body}>
        <div className={classes.title}>スケジュールを選択する</div>
        <div className={classes.port_area}>
          <div className={classes.port_name}>Kobe/Japan</div>
          <div className={classes.port_arrow}>
            <Arrow />
          </div>
          <div className={classes.port_name}>Karachi/Pakistan</div>
        </div>
        <div className={classes.mb_45}></div>
        <div className={classes.content}>
          <div className={classes.content_left}>
            <ScheduleItem />
          </div>
          <div className={classes.content_right}>
            <ScheduleDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleList;
