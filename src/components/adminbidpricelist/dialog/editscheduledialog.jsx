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
import { ShipDetails, DateDetails } from "../index";
import { scheduleItem } from "../../../templates/admin/AdminScheduleList/items/operations";
import { editSchedules } from "./info/operations";
import { createSchedulsItems } from "./items/operations";
import { SnackbarItme } from "../../Uikit/index";

const EditScheduleDialog = (props) => {
  const { styles, id } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});
  const [portList, setPortList] = useState([]);
  const [shippingCompanyList, setShippingCompanyList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    setState(scheduleItem.find((item) => item.id === id));
  }, []);

  useEffect(() => {
    fetchShipPortList(setPortList, dispatch);
    // fetchShippingCompanies(setShippingCompanyList);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRequest = () => {
    editSchedules(
      state,
      createSchedulsItems,
      handleClose,
      handleClickSnackbar,
      dispatch
    );
  };

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Button
        className={styles.button}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        編集
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        className={styles.dialogroot}
      >
        <DialogTitle id="alert-dialog-title" className={styles.title}>
          スケジュール編集
          <span onClick={handleClose} className={classes.close}>
            <span class="material-icons">close</span>
          </span>
        </DialogTitle>
        <DialogContent className={styles.content}>
          <div className={classes.dialog_content}>
            <div className={classes.dialog_content_title}>船の詳細</div>
            <div className={classes.dialog_content_area}>
              <ShipDetails
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
            <div className={classes.dialog_content_title}>日程の詳細</div>
            <div className={classes.dialog_content_area}>
              <DateDetails
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
            onClick={handleRequest}
            autoFocus
          >
            スケジュールを編集
          </Button>
        </DialogActions>
      </Dialog>
      <SnackbarItme
        openSnackbar={openSnackbar}
        handleClose={handleCloseSnackbar}
        message="スケジュールを修正しました。"
      />
    </div>
  );
};
export default EditScheduleDialog;
