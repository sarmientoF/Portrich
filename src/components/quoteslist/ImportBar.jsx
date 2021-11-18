import React from "react";
import classes from "../../dist/css/quoteslist.module.css";
import { ReactComponent as ShipIcon } from "../../dist/images/shipgray.svg";
import { ReactComponent as ImportIcon } from "../../dist/images/import.svg";
import { ReactComponent as UnderArrow1 } from "../../dist/images/under_arrow1.svg";
import { ReactComponent as UnderArrow } from "../../dist/images/under_arrow.svg";

const ImportBar = () => {
  return (
    <div className={classes.import_bar}>
      <div className={classes.export_area}>
        <div className={classes.export_text}>
          <ShipIcon className={classes.export_icon} />
          輸出
        </div>
        <div className={classes.export_fcl}>
          FCL
          <UnderArrow className={classes.import_arrow} />
        </div>
        <div className={classes.export_lcl}>
          LCL
          <UnderArrow className={classes.import_arrow} />
        </div>
      </div>
      <div className={classes.import_area}>
        <div className={classes.import_text}>
          <ImportIcon className={classes.import_icon} />
          輸入
        </div>
        <div className={classes.import_fcl}>
          FCL
          <UnderArrow1 className={classes.import_arrow} />
        </div>
        <div className={classes.import_lcl}>
          LCL
          <UnderArrow className={classes.import_arrow} />
        </div>
      </div>
    </div>
  );
};
export default ImportBar;
