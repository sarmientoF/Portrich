import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { EnterDetailsContainer, DeterMinesContainer } from "../../index";
import classes_1 from "../../../dist/css/enter_detail.module.css";
import { stepContainerEnterDetail } from "./info/operations";

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

const ConfirmDetailedInputContainer = () => {
  function getStepContent(stepIndex, state, setState, needcustoms, handleBack) {
    switch (stepIndex) {
      case 0:
        return <EnterDetailsContainer state={state} setState={setState} />;
      case 1:
        return (
          <DeterMinesContainer
            state={state}
            setState={setState}
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

  const handleNext = () => {
    stepContainerEnterDetail(textStates, setActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [textStates, setTextStates] = useState({});

  const [needcustoms, setNeedCustoms] = useState({});

  useEffect(() => {
    if (textStates.customs === "依頼する") {
      setNeedCustoms(1);
    } else {
      setNeedCustoms(0);
    }
  }, [textStates]);

  return (
    <div className={classes.root}>
      <div>
        {getStepContent(
          activeStep,
          textStates,
          setTextStates,
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
export default ConfirmDetailedInputContainer;
