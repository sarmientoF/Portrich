import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { registerBookingCancelContainer } from "./items/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    fontSize: 14,
  },
  root2: {
    textTransform: "capitalize",
    fontSize: 14,
    color: "#e34040",
  },
  cancelButton: {
    width: "80%",
    background: "#fff",
    border: "solid 1px rgb(117, 111, 111)",
    color: "rgb(117, 111, 111)",
    fontSize: 12,
    textTransform: "capitalize",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    "&:hover": {
      backgroundColor: "rgb(117, 111, 111)",
      opacity: "0.8",
      border: "solid 1px rgb(117, 111, 111)",
      color: "#fff",
    },
  },
  disableButton: {
    width: "80%",
    color: "rgba(0, 0, 0, 0.26)",
    boxShadow: "none",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    fontSize: 12,
    textTransform: "capitalize",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookingsContainerCancelDialog = (props) => {
  const { item, handleOpen } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRequest = () => {
    registerBookingCancelContainer(item, handleClose, handleOpen);
  };

  return (
    <div>
      {item.is_exists_cargo_status ? (
        <Button variant="contained" className={classes.disableButton} disabled>
          完了
        </Button>
      ) : item.is_canceled ? (
        <Button variant="contained" className={classes.disableButton} disabled>
          Cancel
        </Button>
      ) : item.is_not_established ? (
        <Button variant="contained" className={classes.disableButton} disabled>
          不成立
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          className={classes.cancelButton}
        >
          Cansel
        </Button>
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Bookingをキャンセルしますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            直前のキャンセルの場合Cancel Feeがかかることがあります。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.root}
            onClick={handleClose}
            color="primary"
          >
            戻る
          </Button>
          <Button
            className={classes.root2}
            onClick={handleRequest}
            color="primary"
          >
            キャンセル確定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default BookingsContainerCancelDialog;
