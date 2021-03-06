import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { notEstablishedBoxPallet } from "./items/operations";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
  enableButton: {
    width: "100%",
    background: "#fff",
    border: "solid 1px #e34040",
    color: "#e34040",
    fontSize: 13,
    textTransform: "capitalize",
    padding: theme.spacing(1.5),
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    "&:hover": {
      backgroundColor: "#e34040",
      opacity: "0.8",
      border: "solid 1px #e34040",
      color: "#fff",
    },
  },
  disableButton: {
    width: "85%",
    color: "rgba(0, 0, 0, 0.26)",
    boxShadow: "none",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    fontSize: 13,
    textTransform: "capitalize",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #C0C0C0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookingsBoxPalletNotEstablishedDialog = (props) => {
  const { items } = props;

  const classes = useStyles();

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = () => {
    notEstablishedBoxPallet(items, handleClose, handleModalOpen);
  };

  return (
    <div>
      {items.is_exists_cargo_status ||
      items.is_canceled ||
      items.is_not_established ? (
        <></>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          className={classes.enableButton}
        >
          Booking?????????
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
          Booking??????????????????????????????
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ?????????????????????????????????????????????????????????????????????
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.root}
            onClick={handleClose}
            color="primary"
          >
            ??????
          </Button>
          <Button
            className={classes.root2}
            onClick={handleRequest}
            color="primary"
          >
            ???????????????
          </Button>
        </DialogActions>
      </Dialog>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalopen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalopen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Booking?????????????????????????????????</h2>
            <p id="transition-modal-description">
              ????????????Booking?????????????????????????????????????????????
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default BookingsBoxPalletNotEstablishedDialog;
