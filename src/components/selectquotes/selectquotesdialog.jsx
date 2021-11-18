import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { useDispatch } from "react-redux";

const SelectQuotesDialog = (props) => {
  const { styles } = props;
  // const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = () => {};

  return (
    <div>
      <Button
        className={styles.btn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        選択した見積で決定する
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          選択した見積で依頼を確定しますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1">
            内容をご確認ください。 内容をご確認ください。 内容をご確認ください。
          </DialogContentText>
          <DialogContentText id="alert-dialog-description2"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={styles.dialog_btn}
            onClick={handleClose}
            color="primary"
          >
            閉じる
          </Button>
          <Button
            className={styles.dialog_btn}
            onClick={handleRequest}
            color="primary"
            autoFocus
          >
            見積依頼を確定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default SelectQuotesDialog;
