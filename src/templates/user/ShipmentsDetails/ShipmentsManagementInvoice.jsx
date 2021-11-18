import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/shipments_detail.module.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ShipmentsManegementDialogInvoice } from "../../index";
import {
  fetchPackingTypes,
  fetchOriginalInvoiceItem,
} from "./invoice/operations";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "27ch",
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

const ShipmentsManagementInvoice = (props) => {
  const { textStates, setTextStates, cargoStatus } = props;
  const style = useStyles();

  const [packingtypes, setPackingTypes] = useState([]);
  useEffect(() => {
    fetchPackingTypes(setPackingTypes);
  }, []);
  useEffect(() => {
    fetchOriginalInvoiceItem(setTextStates, cargoStatus);
  }, []);
  const handleChangePackingType = (e) => {
    setTextStates({ ...textStates, packing_type: e.target.value });
  };
  const handleChangeQuantity = (e) => {
    setTextStates({ ...textStates, quantity: e.target.value });
  };
  const handleChangeShipperName = (e) => {
    setTextStates({ ...textStates, shipper_name: e.target.value });
  };
  const handleChangeConsigneeName = (e) => {
    setTextStates({ ...textStates, consignee_name: e.target.value });
  };
  const handleChangeNotifyParty = (e) => {
    setTextStates({ ...textStates, notify_party: e.target.value });
  };
  const handleChangeCbm = (e) => {
    setTextStates({ ...textStates, cbm: e.target.value });
  };
  const handleChangeKgs = (e) => {
    setTextStates({ ...textStates, kgs: e.target.value });
  };
  const handleChangeItemName = (e) => {
    setTextStates({ ...textStates, item_name: e.target.value });
  };
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
        <div className={classes.management_title}>荷姿</div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <RadioGroup
              row
              aria-label="position"
              name="packing"
              onChange={handleChangePackingType}
              value={textStates.packing_type || ""}
            >
              {packingtypes.map((row, index) => (
                <FormControlLabel
                  key={index}
                  value={row.title}
                  control={<Radio color="primary" />}
                  label={row.title}
                />
              ))}
            </RadioGroup>
          </div>
        </div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <TextField
              label="荷姿数量"
              type="number"
              variant="outlined"
              value={textStates.quantity || ""}
              onChange={handleChangeQuantity}
            />
          </div>
        </div>
        <div className={classes.management_title}>Shipper/Consignee</div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <TextField
              label="Shipper Name"
              type="text"
              variant="outlined"
              value={textStates.shipper_name || ""}
              onChange={handleChangeShipperName}
            />
            <TextField
              label="Consignee Name"
              type="text"
              variant="outlined"
              value={textStates.consignee_name || ""}
              onChange={handleChangeConsigneeName}
            />
            <TextField
              label="NOTIFY PARTY"
              type="text"
              variant="outlined"
              value={textStates.notify_party || ""}
              onChange={handleChangeNotifyParty}
            />
          </div>
        </div>
        <div className={classes.management_title}>貨物情報</div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <TextField
              label="Measurement"
              type="number"
              variant="outlined"
              value={textStates.cbm || ""}
              onChange={handleChangeCbm}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">CBM</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Gross Weight"
              type="number"
              variant="outlined"
              value={textStates.kgs || ""}
              onChange={handleChangeKgs}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">KGS</InputAdornment>
                ),
              }}
            />
            <TextField
              label="商品名"
              type="text"
              variant="outlined"
              value={textStates.item_name || ""}
              onChange={handleChangeItemName}
            />
          </div>
        </div>
        <div className={classes.management_form_area}>
          <div className={classes.management_dialog}>
            <ShipmentsManegementDialogInvoice
              textStates={textStates}
              cargoStatus={cargoStatus}
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
            <h2 id="transition-modal-title">INVOICE情報を登録しました。</h2>
            <p id="transition-modal-description">何か文入れても良い</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ShipmentsManagementInvoice;
