import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { EnterDetailsBoxpallet, DeterMinesBoxPallet } from "../../index";
import classes_1 from "../../../dist/css/enter_detail.module.css";
import { stepBoxPalletEnterDetail } from "./info/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  nextbtn: {
    color: "#fff",
    width: "20%",
    padding: "8px 0",
    fontSize: 15,
  },
  backbtn: {
    color: "gray",
    width: "10%",
    marginRight: "3%",
    padding: "8px 0",
    fontSize: 15,
  },
}));

const ConfirmDetailedInputBoxPallet = () => {
  function getStepContent(
    stepIndex,
    state,
    setState,
    revenueton,
    needcustoms,
    handleBack
  ) {
    switch (stepIndex) {
      case 0:
        return <EnterDetailsBoxpallet state={state} setState={setState} />;
      case 1:
        return (
          <DeterMinesBoxPallet
            state={state}
            setState={setState}
            revenueton={revenueton}
            needcustoms={needcustoms}
            handleBack={handleBack}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [textStates, setTextStates] = useState({});

  const [revenueton, setRevenueton] = useState(0);

  const lwh =
    Number(textStates.sizeL) *
      Number(textStates.sizeW) *
      Number(textStates.sizeH) || "";
  const volumeM3 = Number(textStates.volumeM3) || "";
  const size = lwh === "" ? volumeM3 : lwh;
  const weight = Number(textStates.weight) / 1000;
  const finalsize = size > 1 ? size : 1;
  const finalweight = weight > 1 ? weight : 1;

  useEffect(() => {
    if (finalsize > finalweight) {
      setRevenueton(Math.round(finalsize * 10000) / 10000);
    } else {
      setRevenueton(Math.round(finalweight * 10000) / 10000);
    }
  }, [textStates]);
  const [needcustoms, setNeedCustoms] = useState({});

  useEffect(() => {
    if (textStates.customs === "依頼する") {
      setNeedCustoms(1);
    } else {
      setNeedCustoms(0);
    }
  }, [textStates]);

  const handleNext = () => {
    stepBoxPalletEnterDetail(textStates, setActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <div>
        {getStepContent(
          activeStep,
          textStates,
          setTextStates,
          revenueton,
          needcustoms,
          handleBack
        )}
      </div>
      <div>
        <div className={classes_1.submit_area}>
          <div
            className={
              activeStep === 1 ? classes_1.back_btn_area : classes_1.btn_area
            }
          >
            {activeStep === 1 ? (
              <></>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={classes.nextbtn}
                onClick={handleNext}
              >
                確認に進む
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmDetailedInputBoxPallet;
