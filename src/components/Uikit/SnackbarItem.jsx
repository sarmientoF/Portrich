import React, { useState } from "react";
import { Snackbar, IconButton, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  Snackbar: {
    left: "11%",
  },
}));

const SnackbarItme = (props) => {
  const { openSnackbar, handleClose, message } = props;
  const styles = useStyles();

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Snackbar
      className={styles.Snackbar}
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default SnackbarItme;
