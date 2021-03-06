import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/shipments_detail.module.css";
import { ShipmentsManegementDialog } from "../../index";
import {
  fetchOriginalManegmentItem,
  fetchSalesStaffs,
} from "./manegement/operations";
import {
  TextField,
  makeStyles,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Modal,
  Backdrop,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "27ch",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
      width: "27ch",
      background: "#fff",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ShipmentsManagement = (props) => {
  const { textStates, setTextStates, cargoStatus, queryParameters } = props;
  const style = useStyles();
  useEffect(() => {
    fetchOriginalManegmentItem(setTextStates, cargoStatus);
  }, []);
  const handleChangeShipId = (e) => {
    setTextStates({
      ...textStates,
      changed_marine_traffic_ship_id: e.target.value,
    });
  };
  const handleChangeIsDeliveryCompleted = (e) => {
    setTextStates({ ...textStates, is_delivery_completed: e.target.checked });
  };
  const handleChangeHasDoneCustomsClearance = (e) => {
    setTextStates({
      ...textStates,
      has_done_customs_clearance: e.target.checked,
    });
  };
  const handleChangeIsCheckingCustomsClearance = (e) => {
    setTextStates({
      ...textStates,
      is_checking_customs_clearance: e.target.checked,
    });
  };
  const handleChangeDrayageShippingJpyBuy = (e) => {
    setTextStates({ ...textStates, drayage_shipping_jpy_buy: e.target.value });
  };
  const handleChangeDrayageShippingJpySell = (e) => {
    setTextStates({ ...textStates, drayage_shipping_jpy_sell: e.target.value });
  };
  const handleChangeTruckScaleBuy = (e) => {
    setTextStates({ ...textStates, truck_scale_jpy_buy: e.target.value });
  };
  const handleChangeTruckScaleSell = (e) => {
    setTextStates({ ...textStates, truck_scale_jpy_sell: e.target.value });
  };
  const handleChangeUseTruckFeeJpyBuy = (e) => {
    setTextStates({ ...textStates, use_truck_fee_jpy_buy: e.target.value });
  };
  const handleChangeUseTruckFeeJpySell = (e) => {
    setTextStates({ ...textStates, use_truck_fee_jpy_sell: e.target.value });
  };
  const handleChangeLoadingAndUnloadingFeeJpyBuy = (e) => {
    setTextStates({
      ...textStates,
      loading_and_unloading_fee_jpy_buy: e.target.value,
    });
  };
  const handleChangeLoadingAndUnloadingFeeJpySell = (e) => {
    setTextStates({
      ...textStates,
      loading_and_unloading_fee_jpy_sell: e.target.value,
    });
  };
  const handleChangeActualRate = (e) => {
    setTextStates({ ...textStates, usd_to_jpy_rate: e.target.value });
  };
  const handleChangeActualVesselName = (e) => {
    setTextStates({ ...textStates, changed_vessel_name: e.target.value });
  };
  const handleChangeActualVoyageNo = (e) => {
    setTextStates({ ...textStates, changed_voyage_no: e.target.value });
  };
  const handleChangeActualDepartureDate = (e) => {
    setTextStates({ ...textStates, changed_departure_date: e.target.value });
  };
  const handleChangeActualArrivalDate = (e) => {
    setTextStates({ ...textStates, changed_arrival_date: e.target.value });
  };
  const handleChangeActualOpenDate = (e) => {
    setTextStates({ ...textStates, changed_open_date: e.target.value });
  };
  const handleChangeActualCutDate = (e) => {
    setTextStates({ ...textStates, changed_cut_date: e.target.value });
  };

  const [salesStaffsList, setSalesStaffsList] = useState([]);
  const [selectedSalesStaffs, setSelectedSalesStaffs] = useState("");
  useEffect(() => {
    fetchSalesStaffs(setSalesStaffsList);
  }, []);
  const handleSalesStaffs = (e) => {
    setSelectedSalesStaffs(e.target.value);
  };

  const personInChargeId = cargoStatus.person_in_charge;
  const currentcharge = salesStaffsList.filter(
    (item) => item.id === personInChargeId
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.s_d_area}>
      <div className={classes.management_area}>
        <div className={classes.management_title}>ShipID ??????</div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <TextField
              label="Ship ID"
              type="number"
              variant="outlined"
              value={textStates.changed_marine_traffic_ship_id || ""}
              onChange={handleChangeShipId}
            />
          </div>
        </div>
        <div className={classes.management_title}>???????????????????????????</div>
        <div className={classes.management_form_area}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value={textStates.is_delivery_completed || false}
                onChange={handleChangeIsDeliveryCompleted}
                checked={textStates.is_delivery_completed ? true : false}
              />
            }
            label="??????????????????????????????????????????"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value={textStates.has_done_customs_clearance || false}
                onChange={handleChangeHasDoneCustomsClearance}
                checked={textStates.has_done_customs_clearance ? true : false}
              />
            }
            label="????????????????????????"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value={textStates.is_checking_customs_clearance || false}
                onChange={handleChangeIsCheckingCustomsClearance}
                checked={
                  textStates.is_checking_customs_clearance ? true : false
                }
              />
            }
            label="???????????????????????????"
            labelPlacement="top"
          />
        </div>
        {queryParameters.shipping_type_id === "2" ? (
          <>
            <div className={classes.management_title}>??????????????????</div>
            <div className={classes.management_form_area}>
              <div className={style.root}>
                <TextField
                  label="??????????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.drayage_shipping_jpy_buy || ""}
                  onChange={handleChangeDrayageShippingJpyBuy}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="??????????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.drayage_shipping_jpy_sell || ""}
                  onChange={handleChangeDrayageShippingJpySell}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="???????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.truck_scale_jpy_buy || ""}
                  onChange={handleChangeTruckScaleBuy}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="???????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.truck_scale_jpy_sell || ""}
                  onChange={handleChangeTruckScaleSell}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={classes.management_title}>??????????????????</div>
            <div className={classes.management_form_area}>
              <div className={style.root}>
                <TextField
                  label="??????????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.use_truck_fee_jpy_buy || ""}
                  onChange={handleChangeUseTruckFeeJpyBuy}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="??????????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.use_truck_fee_jpy_sell || ""}
                  onChange={handleChangeUseTruckFeeJpySell}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="?????????????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.loading_and_unloading_fee_jpy_buy || ""}
                  onChange={handleChangeLoadingAndUnloadingFeeJpyBuy}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="?????????????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.loading_and_unloading_fee_jpy_sell || ""}
                  onChange={handleChangeLoadingAndUnloadingFeeJpySell}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div className={classes.management_title}>?????????</div>
            <div className={classes.management_form_area}>
              <div className={style.root}>
                <TextField
                  label="??????????????????"
                  type="number"
                  variant="outlined"
                  value={textStates.usd_to_jpy_rate || ""}
                  onChange={handleChangeActualRate}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">??</InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </>
        )}
        <div className={classes.management_title}>????????????????????????????????????</div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <TextField
              label="????????????????????????"
              type="text"
              variant="outlined"
              value={textStates.changed_vessel_name || ""}
              onChange={handleChangeActualVesselName}
            />
            <TextField
              label="????????????Voyage No"
              type="text"
              variant="outlined"
              value={textStates.changed_voyage_no || ""}
              onChange={handleChangeActualVoyageNo}
            />
            <TextField
              label="?????????????????????"
              type="date"
              variant="outlined"
              value={textStates.changed_departure_date || ""}
              onChange={handleChangeActualDepartureDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="?????????????????????"
              type="date"
              variant="outlined"
              value={textStates.changed_arrival_date || ""}
              onChange={handleChangeActualArrivalDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <TextField
              label="????????????OPEN???"
              type="date"
              variant="outlined"
              value={textStates.changed_open_date || ""}
              onChange={handleChangeActualOpenDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="????????????CUT???"
              type="date"
              variant="outlined"
              value={textStates.changed_cut_date || ""}
              onChange={handleChangeActualCutDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div className={classes.management_title}>??????????????????</div>
        <div className={classes.management_current_charge_area}>
          <div className={style.root}>
            <FormControl variant="outlined">
              <InputLabel id="shipping_company">??????????????????</InputLabel>
              <Select
                labelId="shipping_company"
                value={selectedSalesStaffs}
                onChange={handleSalesStaffs}
                label="????????????"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {salesStaffsList.map((value, index) => (
                  <MenuItem key={index} value={value.id}>
                    {value.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.current_charge}>
            ????????????????????????
            {currentcharge.length === 0 ? "" : currentcharge[0].title}
          </div>
        </div>
        <div className={classes.management_form_area}>
          <div className={classes.management_dialog}>
            <ShipmentsManegementDialog
              textStates={textStates}
              cargoStatus={cargoStatus}
              selectedSalesStaffs={selectedSalesStaffs}
              handleOpen={handleOpen}
            />
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={style.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={style.paper}>
            <h2 id="transition-modal-title">????????????????????????????????????</h2>
            <p id="transition-modal-description">???????????????????????????</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ShipmentsManagement;
