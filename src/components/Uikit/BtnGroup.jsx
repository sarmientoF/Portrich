import React from "react";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      backgroundColor: "#415B65",
      color: "#fff",
    },
  },
  active: {
    backgroundColor: "#415B65",
    color: "#fff",
  },
  btnGroup: {
    boxShadow: "none",
  },
}));

const BtnGroup = (props) => {
  const styles = useStyles();
  const { btnTitle, clickNum, setClickNum } = props;

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined primary button group"
      className={styles.btnGroup}
    >
      {btnTitle.map((value, index) => (
        <Button
          className={`${styles.button} ${clickNum === index && styles.active}`}
          id={index}
          onClick={() => setClickNum(index)}
        >
          {value}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default BtnGroup;
