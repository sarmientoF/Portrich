import React from 'react';
import classes from "../../dist/css/shipments_detail2.module.css";
import { ReactComponent as Transportation } from "../../dist/images/transportation.svg";


const caseNo = '12345';

const TagArea = () => {

  return (
    <div className={classes.tag_area}>
      <div className={classes.tag_text}>
        <Transportation />
        FCL
      </div>
      <div className={classes.tag_circle}>Case No:{caseNo}</div>
    </div>
  )
}

export default TagArea