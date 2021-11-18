import React, { useState } from "react";
import classes from "../../../dist/css/progress.module.css";
import { ReactComponent as Shipment } from "../../../dist/images/progress_shipment.svg";
import { ReactComponent as ArrowSita } from "../../../dist/images/arrow_sita.svg";

const Accordion = (props) => {
  const { place, detail } = props;
  const [toggle, setToggle] = useState("");

  const toggleAccordion = () => {
    setToggle(toggle === "" ? classes.active : "");
  };

  return (
    <div className={classes.progress_accordion}>
      <div className={classes.progress_bar}>
        <div className={classes.progress_detail_circle}>
          <Shipment />
        </div>
        <div className={classes.progress_bar_hr} />
      </div>
      <div className={`${toggle} ${classes.progress_detail}`}>
        <div className={classes.progress_detail_place}>
          {place}
          <ArrowSita onClick={toggleAccordion} className={toggle} />
        </div>
        <div className={classes.progress_detail_cont}>{detail}</div>
      </div>
    </div>
  );
};
export default Accordion;
