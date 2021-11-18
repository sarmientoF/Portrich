import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/admin_bidpricelist.module.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  fetchShipPortList,
  fetchShippingCompanies,
} from "../../../common/services/fetchDatas.js";
import { FclShipDetails, FclFreightChage, FclOriginChage } from "./index";
// import { validationAddScheduls } from "./validate/operations";
// import { registerAddScheduls } from "./info/operations";
// import { createSchedulsItems } from "./items/operations";
import { SnackbarItme } from "../../Uikit/index";

const FclCreateBitPriceListDialog = (props) => {
  const { styles } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});
  const [portList, setPortList] = useState([]);
  const [shippingCompanyList, setShippingCompanyList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    // fetchShipPortList(setPortList, dispatch);
    // fetchShippingCompanies(setShippingCompanyList);
  }, []);

  // const handleRequest = () => {
  //   validationAddScheduls(
  //     state,
  //     createSchedulsItems,
  //     registerAddScheduls,
  //     handleClickSnackbar,
  //     handleClose,
  //     dispatch
  //   );
  // };

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Button
        className={styles.btn}
        variant="outlined"
        color="primary"
        onClick={() => setOpen(true)}
      >
        新規追加
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        className={styles.dialogroot}
      >
        <DialogTitle id="alert-dialog-title" className={styles.title}>
          新規FCL買値登録
          <span onClick={() => setOpen(false)} className={classes.close}>
            <span class="material-icons">close</span>
          </span>
        </DialogTitle>
        <DialogContent className={styles.content}>
          <div className={classes.dialog_content}>
            <div className={classes.dialog_content_title}>Shipment Details</div>
            <div className={classes.dialog_content_area}>
              <FclShipDetails
                state={state}
                setState={setState}
                classes={classes}
                styles={styles}
                portList={portList}
                shippingCompanyList={shippingCompanyList}
              />
            </div>
          </div>
        </DialogContent>
        <DialogContent className={styles.content}>
          <div className={classes.dialog_content}>
            <div className={classes.dialog_content_title}>Freight Charge</div>
            <div className={classes.dialog_content_area}>
              <FclFreightChage
                state={state}
                setState={setState}
                classes={classes}
                styles={styles}
              />
            </div>
          </div>
        </DialogContent>
        <DialogContent className={styles.content}>
          <div className={classes.dialog_content}>
            <div className={classes.dialog_content_title}>Origin Charge</div>
            <div className={classes.dialog_content_area}>
              <FclOriginChage
                state={state}
                setState={setState}
                classes={classes}
                styles={styles}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className={styles.request_btn}
            // onClick={handleRequest}
            autoFocus
          >
            スケジュールを登録
          </Button>
        </DialogActions>
      </Dialog>
      <SnackbarItme
        openSnackbar={openSnackbar}
        handleClose={handleCloseSnackbar}
        message="スケジュールを登録しました。"
      />
    </div>
  );
};
export default FclCreateBitPriceListDialog;
