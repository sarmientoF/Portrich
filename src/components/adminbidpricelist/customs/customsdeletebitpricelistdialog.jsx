import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { SnackbarItme } from "../../Uikit/index";
// import { deleteSchedules } from "./info/operations";
import { useDispatch } from "react-redux";

const CustomsDeleteBitPriceListDialog = (props) => {
  const { styles, id } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [state, setState] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRequest = () => {
    // deleteSchedules(state, handleClose(), handleClickSnackbar(), dispatch());
  };

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <span onClick={handleClickOpen} class="material-icons">
        delete
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          選択したスケジュールの削除をしますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1">
            この操作を行うと、二度と取り消すことはできません。
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
            className={styles.delete_btn}
            onClick={handleRequest}
            color="primary"
            autoFocus
          >
            見積もりを削除
          </Button>
        </DialogActions>
      </Dialog>
      <SnackbarItme
        openSnackbar={openSnackbar}
        handleClose={handleCloseSnackbar}
        message="スケジュールを削除しました。"
      />
    </div>
  );
};
export default CustomsDeleteBitPriceListDialog;
