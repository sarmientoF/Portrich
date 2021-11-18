import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { ValidationCheck, registerAddMember } from "./info/operations";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    width: "100%",
    padding: "8px 5px",
    marginTop: 40,
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

const AddMemberDialogContainer = (props) => {
  const { userInfo } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    ValidationCheck(userInfo, setOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = () => {
    registerAddMember(userInfo, dispatch);
    // const payload = {
    //     text: 'FCLのBooking依頼がありました。\n'
    // };
    // const url = 'https://hooks.slack.com/services/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'

    // fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify(payload)
    // })
  };

  return (
    <div>
      <Button
        className={classes.btn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        アカウント追加
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby1="alert-dialog-description1"
        aria-describedby2="alert-dialog-description2"
      >
        <DialogTitle id="alert-dialog-title">
          アカウントを追加しますか？
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
            アカウントを追加する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AddMemberDialogContainer;
