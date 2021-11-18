import React, { useEffect } from "react";
import classes from "../../dist/css/shipmentslist.module.css";
import { ReactComponent as Shipment } from "../../dist/images/shipment.svg";


const ShipmentListStepperLast = (props) => {
  const {stepNo} = props

  const stepper = (stepNo) => {
    switch(stepNo) {
      case -1:
        return classes.red
      case 0:
        return classes.blue
      case 1:
        return classes.gray
      default:
        return classes.blue
    }
  }

  return(
    <>
      {stepNo !== 0 ? (
        <div className={`${classes.stepper_unit} ${classes.stepper_unit_end} ${classes.stepper_ship}`}>
          <div className={`${classes.stepper_head_maru} ${classes.stepper_ship_maru} ${stepper(stepNo)}`}>
            <Shipment />
          </div>
        </div>
        ) : (
        <div className={`${classes.stepper_unit} ${classes.stepper_unit_end}`}>
          <div className={`${classes.stepper_head_maru} ${stepper(stepNo)}`}>
          </div>
        </div>
      )}
    </>
)
}

export default ShipmentListStepperLast;