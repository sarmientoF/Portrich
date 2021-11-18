import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { registerBookingNoOfBoxPallet } from "./items/operations";
import { AnnounceModal } from "../../../components/common/index";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    fontSize: 14,
  },
  enableButton: {
    width: "100%",
    backgroundColor: "#0052cc",
    color: "#fff",
    fontSize: 15,
    textTransform: "capitalize",
    padding: theme.spacing(1.5),
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
  },
  disableButton: {
    width: "100%",
    color: "rgba(0, 0, 0, 0.26)",
    boxShadow: "none",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    fontSize: 15,
    textTransform: "capitalize",
    padding: theme.spacing(1.5),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OperatorBookingsDetailEditBoxPalletDialog = (props) => {
  const { items, bookingno } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleRequest = () => {
    if (bookingno !== "") {
      registerBookingNoOfBoxPallet(
        items,
        bookingno,
        handleClose,
        handleModalOpen
      );
    }
  };

  return (
    <div>
      {items.is_exists_cargo_status ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          className={classes.enableButton}
        >
          Booking No 編集
        </Button>
      ) : (
        <div></div>
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
          Booking Noを変更する。
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ここではBooking Noしか編集できません。
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
            className={classes.root}
            onClick={handleRequest}
            color="primary"
          >
            Booking No変更
          </Button>
        </DialogActions>
      </Dialog>
      <AnnounceModal
        isOpen={modalopen}
        setModalOpen={setModalOpen}
        title="Booking Noを更新しました。"
        text=""
      />
    </div>
  );
};
export default OperatorBookingsDetailEditBoxPalletDialog;
