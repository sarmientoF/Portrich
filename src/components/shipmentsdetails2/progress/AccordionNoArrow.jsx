import React from 'react'
import classes from "../../../dist/css/progress.module.css";
import { ReactComponent as Shipment } from "../../../dist/images/progress_shipment.svg";

const AcordionNoArrow = (props) => {

  return (
    <div className={classes.progress_accordion}>
      <div className={classes.progress_bar}>
        <div className={classes.progress_detail_circle}><Shipment /></div>
        <div className={classes.progress_bar_hr} />
      </div>
      <div className={classes.progress_detail}>
        <div className={classes.progress_detail_place}>{props.place}</div>
      </div>
    </div>
  )
}

export default AcordionNoArrow




