import React, { useState } from 'react'
import classes from '../../../dist/css/shipmentsdetails_taskandupload.module.css' ;
import { Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  button: {
    background: "#0753CC",
    color: "#fff",
    textAlign: "center",
    fontSize: "12px",
    display: "block",
    width: "100%",
    borderRadius: "5px",
    boxShadow: "none",
    "&:hover": {
      opacity: "0.8",
    },
  },
  buttonRoot: {
    "& .MuiButton-contained:hover": {
      background: "#0753CC",
      boxShadow: "none",
    },
  }
}))


const TaskArea = (props) => {
  const styles = useStyles();
  const task = 'ファイルをアップデートして下さい'
  const deadline = '2021-08-31'

  return (
    <div className={classes.task_area}>
      <div className={classes.task_unit}>
        <div className={classes.small}>タスク</div>
        <div className={classes.text}>{task}</div>
      </div>
      <div className={classes.task_unit}>
        <div className={classes.small}>期限</div>
        <div className={classes.text}>{deadline}</div>
      </div>
      <div className={`${classes.task_button} ${styles.buttonRoot}`}>
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => props.setAploadArea(false)}
        >
          アップデート
        </Button>
      </div>
    </div>
  )
}

export default TaskArea