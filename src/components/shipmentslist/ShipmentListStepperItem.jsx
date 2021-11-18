import React, { useEffect, useState } from "react";
import classes from "../../dist/css/shipmentslist.module.css";
import { ReactComponent as Shipment } from "../../dist/images/shipment.svg";


const ShipmentListStepperItem = (props) => {
  const {stepNo, ship} = props
  const [left, setLeft] = useState({left: 0})

  const stepper = (stepNo) => {
    switch(stepNo) {
      case -0.5:
        return classes.half_red
      case -1:
        return classes.red
      case 0:
        return classes.blue
      case 0.5:
        return classes.half
      case 1:
        return classes.gray
      default:
        return classes.gray
    }
  }

  useEffect(() => {
      if(stepNo === 0.5 || stepNo === -0.5) {
        setLeft({left: '50%'})
      }
      console.log(left)
  }, [])


  return(
    <>
    {ship ? (
      <div className={`${classes.stepper_unit} ${stepper(stepNo)} ${classes.stepper_ship}`}>
        <div className={classes.stepper_head_maru}></div>
        <div style={left} className={`${ classes.stepper_head_maru} ${classes.stepper_ship_maru}`}><Shipment /></div>
        <hr className={classes.stepper_head_hr}></hr>
      </div>
    ): (
      <div className={`${classes.stepper_unit} ${stepper(stepNo)}`}>
        <div className={classes.stepper_head_maru}></div>
        <hr className={classes.stepper_head_hr}></hr>
      </div>
    )
    }
    </>
  )
}

export default ShipmentListStepperItem;