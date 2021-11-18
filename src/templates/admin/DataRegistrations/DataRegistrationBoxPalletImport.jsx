import React, { useState } from "react";
import classes_1 from "../../../dist/css/dataentrys.module.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  BoxPalletCommontItems,
  BoxPalletCostPriceInputList,
  SellPriceInputListComponent,
} from "../../../components/dataregister/";
import { registerBoxPalletQuotes } from "./dataRegistrationQuotes/operations";
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
  button: {
    width: "70%",
    fontSize: 20,
    padding: 3,
    background: "#0052cc",
    color: "#fff",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function createData(id, label, currency) {
  return { id, label, currency };
}

const inputCostList = [
  createData("ocean_freight_usd_buy", "OceanFreight 買い", "$"),
  createData("ocean_freight_jpy_buy", "OceanFreight 買い", "¥"),
  createData("wrs_buy", "WRS 買い", "$"),
  createData("lss_jpy_buy", "LSS 買い", "¥"),
  createData("thc_buy", "THC 買い", "¥"),
  createData("doc_fee_buy", "Doc Fee 買い", "¥"),
  createData("do_fee_buy", "DO Fee 買い", "¥"),
  createData("cfs_charge_buy", "CFS Charge 買い", "¥"),
  createData("pss_buy", "PSS 買い", "$"),
  createData("drayge_recovery_charge_buy", "DRC 買い", "¥"),
  createData("afs_buy", "AFS 買い", "¥"),
  createData("gri_buy", "GRI 買い", "$"),
  createData("err_buy", "ERR 買い", "$"),
  createData("cic_usd_buy", "CIC 買い", "$"),
  createData("cic_jpy_buy", "CIC 買い", "¥"),
];

const inputSellList = [
  createData("ocean_freight_usd_sell", "OceanFreight 売り", "$"),
  createData("ocean_freight_jpy_sell", "OceanFreight 売り", "¥"),
  createData("wrs_sell", "WRS 売り", "$"),
  createData("lss_jpy_sell", "LSS 売り", "¥"),
  createData("thc_sell", "THC 売り", "¥"),
  createData("doc_fee_sell", "Doc Fee 売り", "¥"),
  createData("do_fee_sell", "DO Fee 売り", "¥"),
  createData("cfs_charge_sell", "CFS Charge 売り", "¥"),
  createData("pss_sell", "PSS 売り", "$"),
  createData("drayge_recovery_charge_sell", "DRC売り", "¥"),
  createData("afs_sell", "AFS 売り", "¥"),
  createData("gri_sell", "GRI 売り", "$"),
  createData("err_sell", "ERR 売り", "$"),
  createData("cic_usd_sell", "CIC 売り", "$"),
  createData("cic_jpy_sell", "CIC 売り", "¥"),
];

const initialSelectedCommonItems = {
  users_company: "",
  departure_port: null,
  arrival_port: null,
  cargo_name: null,
};

const initialSelectedCostPrices = inputCostList.reduce(
  (acc, cur) => {
    acc[cur.id] = "";
    return acc;
  },
  {
    shipping_company: "",
    freetime: "",
    estimated_deadline_date: "",
  }
);

const DataRegistrationBoxPalletImport = () => {
  const classes = useStyles();
  const [selectedCommonItems, setSelectedCommonItems] = useState(
    initialSelectedCommonItems
  );
  const [selectedCostPricesList, setSelectedCostPricesList] = useState([
    initialSelectedCostPrices,
  ]);
  const [selectedSellPrices, setSelectedSellPrices] = useState({});
  const save = () => {
    registerBoxPalletQuotes(
      selectedCommonItems,
      selectedCostPricesList,
      selectedSellPrices,
      handleOpen
    );
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes_1.block}>
        <div className={classes_1.block_title}>輸入（箱/パレット・LCL）</div>
        <div className={classes_1.block_body}>
          <div className={classes_1.block_sub_title}>見積</div>
          <BoxPalletCommontItems
            selectedCommonItems={selectedCommonItems}
            setSelectedCommonItems={setSelectedCommonItems}
          />
          <div className={classes_1.mt30}></div>
          <BoxPalletCostPriceInputList
            selectedCostPricesList={selectedCostPricesList}
            setSelectedCostPricesList={setSelectedCostPricesList}
            initialSelectedCostPrices={initialSelectedCostPrices}
            inputCostList={inputCostList}
          />
          <SellPriceInputListComponent
            selectedSellPrices={selectedSellPrices}
            setSelectedSellPrices={setSelectedSellPrices}
            inputSellList={inputSellList}
          />
        </div>
        <div className={classes_1.form_area}>
          <div className={classes_1.submit_area}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={save}
            >
              登録
            </Button>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">見積を登録しました。</h2>
            <p id="transition-modal-description">
              スケジュールの登録もお願いしたします。
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default DataRegistrationBoxPalletImport;
