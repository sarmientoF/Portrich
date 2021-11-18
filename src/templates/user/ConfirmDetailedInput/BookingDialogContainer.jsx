import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { registerContainerBooking } from "./items/operations";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    width: "100%",
    padding: "8px 0",
    fontSize: 15,
    background: "#0052cc",
    textTransform: "capitalize",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    "&:hover": {
      background: "#0052cc",
      opacity: 0.8,
    },
  },
  root: {
    textTransform: "capitalize",
    fontSize: 14,
  },
}));

const BookingDialogContainer = (props) => {
  const { state, quote } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = () => {
    registerContainerBooking(state, quote, dispatch);
  };

  return (
    <div>
      <Button
        className={classes.btn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Bookingを依頼する
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby1="alert-dialog-description1"
        aria-describedby2="alert-dialog-description2"
      >
        <DialogTitle id="alert-dialog-title">
          Bookingを確定しますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1">
            Booking確定後のお客様都合によるキャンセルはキャンセル料金がかかることがあります。
          </DialogContentText>
          <DialogContentText id="alert-dialog-description2"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.root}
            onClick={handleClose}
            color="primary"
          >
            閉じる
          </Button>
          <Button
            className={classes.root}
            onClick={handleRequest}
            color="primary"
            autoFocus
          >
            Booking依頼を確定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default BookingDialogContainer;
