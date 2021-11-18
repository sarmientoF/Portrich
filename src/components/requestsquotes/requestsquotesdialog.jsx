import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  registerRequestQuoteOcean,
  registerRequestQuoteTruck,
} from "../../templates/user/RequestsQuotes/info/operations";
import {
  validationRequestQuoteOcean,
  validationRequestQuoteTruck,
} from "../../templates/user/RequestsQuotes/validate/operations";
import { createRequestItems } from "../../templates/user/RequestsQuotes/item/operations";
import { useDispatch } from "react-redux";

const RequestsQuotesDialog = (props) => {
  const { state, styles } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (state.ocean) {
      validationRequestQuoteOcean(state, setOpen);
    } else {
      validationRequestQuoteTruck(state, setOpen);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = () => {
    const requestItems = createRequestItems(state);
    if (state.ocean) {
      registerRequestQuoteOcean(requestItems, state, dispatch);
    } else if (state.truck) {
      registerRequestQuoteTruck(requestItems, state, dispatch);
    } else {
      return;
    }
  };

  return (
    <div>
      <Button
        className={styles.btn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        見積を依頼する
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          見積依頼を確定しますか？
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
export default RequestsQuotesDialog;
