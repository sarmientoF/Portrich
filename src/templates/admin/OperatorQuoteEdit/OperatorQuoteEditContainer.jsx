import React, { useEffect, useState } from "react";
import classes_1 from "../../../dist/css/operatorquotes_edit.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { fetchViewForQuoteContainers } from "./items/operations";
import { useLocation } from "react-router-dom";

import {
  TextField,
  InputAdornment,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core/";
import {
  fetchShipPortList,
  fetchContainerTypes,
  fetchCargoNames,
  fetchUserCompanies,
  fetchShippingCompanies,
} from "../../../common/services/fetchData";
import {
  OperatorQuoteEditContainerDialog,
  OperatorQuoteDeleteContainerDialog,
} from "../../index";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "12ch",
      background: "#fff",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(0.5),
      marginTop: theme.spacing(1.5),
      width: "12ch",
      background: "#fff",
    },
  },
  root2: {
    "& .MuiTextField-root": {
      width: "100%",
      background: "#fff",
    },
  },
  btn: {
    width: "100%",
    backgroundColor: "#0052cc",
    color: "#fff",
    fontSize: 15,
    textTransform: "capitalize",
    padding: theme.spacing(1.5),
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #C0C0C0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const OperatorQuoteEditContainer = () => {
  const classes = useStyles();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [usercompanies, setUserCompanies] = useState([]);
  const [shipportlist, setShipPortList] = useState([]);
  const [containertypes, setContainerTypes] = useState([]);
  const [cargonames, setCargoNames] = useState([]);
  const [shippingcompanies, setShippingCompanies] = useState([]);

  useEffect(() => {
    fetchViewForQuoteContainers(location.search, setItems);
    fetchShipPortList(setShipPortList);
    fetchContainerTypes(setContainerTypes);
    fetchCargoNames(setCargoNames);
    fetchUserCompanies(setUserCompanies);
    fetchShippingCompanies(setShippingCompanies);
  }, [location.search]);

  const userCompaniesId = items.users_company;
  const departurePortId = items.departure_port;
  const arrivalPortId = items.arrival_port;
  const containerTypeId = items.container_type;
  const cargoNameId = items.cargo_name;
  const ShippingCompaniesId = items.shipping_company;
  const usercompaniesname = usercompanies.filter(
    (item) => item.id === userCompaniesId
  );
  const departureportname = shipportlist.filter(
    (item) => item.id === departurePortId
  );
  const arrivalportname = shipportlist.filter(
    (item) => item.id === arrivalPortId
  );
  const containertypesname = containertypes.filter(
    (item) => item.id === containerTypeId
  );
  const cargonamesname = cargonames.filter((item) => item.id === cargoNameId);
  const ShippingCompaniesName = shippingcompanies.filter(
    (item) => item.id === ShippingCompaniesId
  );

  function createTitleData(title, value) {
    return { title, value };
  }
  const titleList = [
    createTitleData(
      "?????????",
      usercompaniesname.length === 0 ? "" : usercompaniesname[0].value
    ),
    createTitleData(
      "CARRIER",
      ShippingCompaniesName.length === 0 ? "" : ShippingCompaniesName[0].value
    ),
    createTitleData(
      "From",
      departureportname.length === 0 ? "" : departureportname[0].value
    ),
    createTitleData(
      "To",
      arrivalportname.length === 0 ? "" : arrivalportname[0].value
    ),
    createTitleData(
      "?????????????????????",
      containertypesname.length === 0 ? "" : containertypesname[0].value
    ),
    createTitleData(
      "?????????",
      cargonamesname.length === 0 ? "" : cargonamesname[0].value
    ),
    createTitleData(
      "????????????",
      (items.estimated_deadline_date &&
        items.estimated_deadline_date.replaceAll(/-/g, "/")) ||
        "-"
    ),
  ];

  function createData(id, label, currency, value) {
    return { id, label, currency, value };
  }
  const inputCostList = [
    createData(
      "ocean_freight_usd_buy",
      "O/F ??????",
      "$",
      items.ocean_freight_usd_buy
    ),
    createData(
      "ocean_freight_jpy_buy",
      "O/F ??????",
      "??",
      items.ocean_freight_jpy_buy
    ),
    createData("thc_jpy_buy", "THC ??????", "??", items.thc_jpy_buy),
    createData("lss_usd_buy", "LSS ??????", "$", items.lss_usd_buy),
    createData("lss_jpy_buy", "LSS ??????", "??", items.lss_jpy_buy),
    createData("wrs_usd_buy", "WRS ??????", "$", items.wrs_usd_buy),
    createData("doc_fee_jpy_buy", "Doc Fee ??????", "??", items.doc_fee_jpy_buy),
    createData("do_fee_jpy_buy", "DO Fee ??????", "??", items.do_fee_jpy_buy),
    createData(
      "seal_fee_jpy_buy",
      "Seal Fee ??????",
      "??",
      items.seal_fee_jpy_buy
    ),
    createData("pss_usd_buy", "PSS ??????", "$", items.pss_usd_buy),
    createData("ams_usd_buy", "AMS ??????", "$", items.ams_usd_buy),
    createData("ems_usd_buy", "EMS ??????", "$", items.ems_usd_buy),
    createData("afr_jpy_buy", "AFR ??????", "??", items.afr_jpy_buy),
    createData("gri_usd_buy", "GRI ??????", "$", items.gri_usd_buy),
    createData("cic_usd_buy", "CIC ??????", "$", items.cic_usd_buy),
    createData("cic_jpy_buy", "CIC ??????", "??", items.cic_jpy_buy),
  ];
  const inputSellList = [
    createData(
      "ocean_freight_usd_sell",
      "O/F ??????",
      "$",
      items.ocean_freight_usd_sell
    ),
    createData(
      "ocean_freight_jpy_sell",
      "O/F ??????",
      "??",
      items.ocean_freight_jpy_sell
    ),
    createData("thc_jpy_sell", "THC ??????", "??", items.thc_jpy_sell),
    createData("lss_usd_sell", "LSS ??????", "$", items.lss_usd_sell),
    createData("lss_jpy_sell", "LSS ??????", "??", items.lss_jpy_sell),
    createData("wrs_usd_sell", "WRS ??????", "$", items.wrs_usd_sell),
    createData("doc_fee_jpy_sell", "Doc Fee ??????", "??", items.doc_fee_jpy_sell),
    createData("do_fee_jpy_sell", "DO Fee ??????", "??", items.do_fee_jpy_sell),
    createData(
      "seal_fee_jpy_sell",
      "Seal Fee ??????",
      "??",
      items.seal_fee_jpy_sell
    ),
    createData("pss_usd_sell", "PSS ??????", "$", items.pss_usd_sell),
    createData("ams_usd_sell", "AMS ??????", "$", items.ams_usd_sell),
    createData("ems_usd_sell", "EMS ??????", "$", items.ems_usd_sell),
    createData("afr_jpy_sell", "AFR ??????", "??", items.afr_jpy_sell),
    createData("gri_usd_sell", "GRI ??????", "$", items.gri_usd_sell),
    createData("cic_usd_sell", "CIC ??????", "$", items.cic_usd_sell),
    createData("cic_jpy_sell", "CIC ??????", "??", items.cic_jpy_sell),
  ];
  const handleChange = (e) => {
    setItems((items) => {
      return {
        ...items,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleFreeTime = (e) => {
    setItems({ ...items, freetime: e.target.value });
  };

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes_1.main}>
        <div className={classes_1.main_head}>
          <div className={classes_1.main_head_title}>????????????</div>
        </div>
        <div className={classes_1.main_body}>
          <div className={classes_1.main_body_title_area}>
            {titleList.map((item) => (
              <div className={classes_1.main_body_title_flex}>
                <div className={classes_1.main_body_title}>{item.title}</div>
                <div className={classes_1.main_body_title_item}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className={classes_1.main_body_cost_area}>
            <div className={classes_1.main_body_cost_title}>Freetime</div>
            <TextField
              id="freetime"
              value={items.freetime || ""}
              label="Free Time"
              type="number"
              variant="outlined"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">???</InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes_1.main_body_cost_area}>
            <div className={classes_1.main_body_cost_title}>????????????</div>
            {inputCostList.map((item, index) => (
              <TextField
                id={item.id}
                key={index}
                value={item.value || ""}
                label={item.label}
                type="number"
                variant="outlined"
                onChange={handleFreeTime}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {item.currency}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </div>
          <div className={classes_1.main_body_sell_area}>
            <div className={classes_1.main_body_sell_title}>????????????</div>
            {inputSellList.map((item, index) => (
              <TextField
                id={item.id}
                key={index}
                value={item.value || ""}
                label={item.label}
                type="number"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {item.currency}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </div>
          <div className={classes_1.main_btn_area}>
            <div className={classes_1.main_btn_edit}>
              <OperatorQuoteEditContainerDialog
                items={items}
                handleModalOpen={handleModalOpen}
              />
            </div>
            <div className={classes_1.main_btn_delete}>
              <OperatorQuoteDeleteContainerDialog
                items={items}
                handleModalOpen={handleModalOpen}
                setItems={setItems}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalopen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalopen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">???????????????????????????????????????</h2>
            <p id="transition-modal-description">?????????????????????????????????</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default OperatorQuoteEditContainer;
