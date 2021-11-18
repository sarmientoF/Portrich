import React, { useEffect, useState } from "react";
// import classes from "../../dist/css/shipmentslist.module.css";
import ShipmentListStepperItem from "./ShipmentListStepperItem";
import ShipmentListStepperLast from "./ShipmentListStepperLast";

const ShipmentListStepper = (props) => {
  const {test} = props
  const [step, setStep] = useState(0)
  console.log(...test)
  
  useEffect(() => {
    setStep(test[4])
  }, [])

  return (
      <>
        {step === 1 ? (
          <ShipmentListStepperItem stepNo={test[0]} ship={true}/>) : (
          <ShipmentListStepperItem stepNo={test[0]} />)
        }
        {step === 2 ? (
          <ShipmentListStepperItem stepNo={test[1]} ship={true}/>) : (
          <ShipmentListStepperItem stepNo={test[1]} />)
        }
        {step === 3 ? (
          <ShipmentListStepperItem stepNo={test[2]} ship={true}/>) : (
          <ShipmentListStepperItem stepNo={test[2]} />)
        }
        {step === 4 ? (
          <ShipmentListStepperLast stepNo={test[3]} ship={true}/>) : (
          <ShipmentListStepperLast stepNo={test[3]} />)
        }
      </>
  )
}

export default ShipmentListStepper