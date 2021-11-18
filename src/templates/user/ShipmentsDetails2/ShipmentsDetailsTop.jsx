import React from "react";
import classes from "../../../dist/css/shipments_detail2.module.css";
import {TopicPath} from '../../../components/Uikit/index'
import {BookingNo, TagArea, TaskAndUpload, TabArea, GoogleMapComponent, Progress} from '../../../components/shipmentsdetails2/index'


const ShipmentsDetailsTop = () => {
  return  (
    <section className={classes.main}>
      <div className={classes.body}>
        <div className={classes.body_content}>
          <TopicPath old='貨物状況一覧' now='貨物詳細' />
          <div className={classes.mb_15}></div>
          <BookingNo />
          <div className={classes.mb_15}></div>
          <TagArea />
          <div className={classes.mb_30}></div>
          <TaskAndUpload />
          <div className={classes.mb_30}></div>
          <TabArea />
        </div>
        <div className={classes.body_sideContent}>
          <GoogleMapComponent />
          <div className={classes.mb_30}></div>
          <Progress />
        </div>
      </div>
    </section>
  )
}

export default ShipmentsDetailsTop