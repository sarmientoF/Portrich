import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { registerPaymentDeadlineData } from "./info/operations";
import { AnnounceModal } from "../../../components/common/index";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    width: "20%",
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
    fontSize: 15,
    margin: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShipmentsManegementDialogPaymentDeadline = (props) => {
  const { textStates, cargoStatus } = props;

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
    registerPaymentDeadlineData(
      textStates,
      cargoStatus,
      handleClose,
      handleModalOpen
    );
  };

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <Button
        className={classes.btn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        支払情報登録
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          支払情報登録の登録を完了しますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            確認が完了したら登録してください。
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
            支払情報登録登録！
          </Button>
        </DialogActions>
      </Dialog>
      <AnnounceModal
        isOpen={modalopen}
        setModalOpen={setModalOpen}
        title="支払い情報を更新しました。"
        text=""
      />
    </div>
  );
};
export default ShipmentsManegementDialogPaymentDeadline;
