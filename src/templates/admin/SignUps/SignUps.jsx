import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../../../dist/css/signup.module.css";
import { SignUpForm, SignUpConfirm } from "../../index";
import { stepValidationCheck } from "./info/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(6),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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

function getStepContent(stepIndex, state, setState) {
  switch (stepIndex) {
    case 0:
      return <SignUpForm state={state} setState={setState} />;
    case 1:
      return <SignUpConfirm state={state} />;
    default:
      return "Unknown stepIndex";
  }
}

const SignUps = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [textStates, setTextStates] = useState("");
  const handleNext = () => {
    stepValidationCheck(textStates, setActiveStep);
  };

  const handleBack = () => {
    setTextStates({ ...textStates, password: "" });
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section className={styles.main}>
      <div>{getStepContent(activeStep, textStates, setTextStates)}</div>
      <div className={styles.form_area}>
        <div className={styles.submit_area}>
          {activeStep === 0 ? (
            <></>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={handleBack}
                className={classes.backbtn}
                color="gray"
              >
                戻る
              </Button>
            </>
          )}
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
    </section>
  );
};

export default SignUps;
