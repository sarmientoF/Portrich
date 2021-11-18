import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { registerSugnUp } from "./info/operations";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    width: "100%",
    padding: "8px 5px",
    marginTop: 60,
    fontSize: 18,
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

const SignUpDialogContainer = (props) => {
  const { state } = props;
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
    registerSugnUp(state, dispatch);
  };

  return (
    <div>
      <Button
        className={classes.btn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        アカウント登録
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby1="alert-dialog-description1"
        aria-describedby2="alert-dialog-description2"
      >
        <DialogTitle id="alert-dialog-title">
          アカウントを登録を確定しますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1">
            入力情報に間違いがないか確認の上アカウントを作成してください。
          </DialogContentText>
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
            アカウントを登録する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SignUpDialogContainer;
