import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { registerQuotesDetailsBoxPallet } from "./items/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    fontSize: 14,
  },
  enableButton: {
    width: "100%",
    padding: "8px 0",
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
    padding: "8px 0",
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

const OperatorQuoteRequestDetailBoxPalletDialog = (props) => {
  const {
    items,
    selectedSalesStaffs,
    truckbuy,
    trucksell,
    truckloadingbuy,
    truckloadingsell,
    handleOpen,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRequest = () => {
    registerQuotesDetailsBoxPallet(
      items,
      selectedSalesStaffs,
      truckbuy,
      trucksell,
      truckloadingbuy,
      truckloadingsell,
      handleClose,
      handleOpen
    );
  };

  return (
    <div>
      {items.is_exists_cargo_status ? (
        <Button variant="contained" className={classes.disableButton} disabled>
          Quotes完了済
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          className={classes.enableButton}
        >
          Quotes完了登録
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
          お客様のQuotes依頼を完了しますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            船及びドレージが手配できたか確認してください。
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
            Quotes完了登録！
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default OperatorQuoteRequestDetailBoxPalletDialog;
