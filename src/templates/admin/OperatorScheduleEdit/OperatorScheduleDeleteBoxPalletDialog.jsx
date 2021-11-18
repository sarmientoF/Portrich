import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { deleteScheduleOfBoxPallet } from "./items/operations";
import { AnnounceModal } from "../../../components/common/index";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    fontSize: 14,
  },
  root2: {
    textTransform: "capitalize",
    fontSize: 14,
    color: "red",
  },
  dengerButton: {
    width: "100%",
    backgroundColor: "#e34040",
    color: "#fff",
    fontSize: 15,
    textTransform: "capitalize",
    padding: theme.spacing(1.5),
    border: "none",
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

const OperatorScheduleDeleteBoxPalletDialog = (props) => {
  const { scheduleList } = props;

  const classes = useStyles();

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    deleteScheduleOfBoxPallet(scheduleList, handleClose, handleModalOpen);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.dengerButton}
      >
        削除
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
          このスケジュールを削除しますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            削除したら二度と取り消すことはできません。
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
          <Button className={classes.root2} onClick={handleDelete}>
            削除
          </Button>
        </DialogActions>
      </Dialog>
      <AnnounceModal
        isOpen={modalopen}
        setModalOpen={setModalOpen}
        title="スケジュールの削除が完了しました。"
        text=""
      />
    </div>
  );
};
export default OperatorScheduleDeleteBoxPalletDialog;
