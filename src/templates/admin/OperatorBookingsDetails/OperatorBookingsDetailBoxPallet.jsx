import React, { useEffect, useState } from "react";
import classes_1 from "../../../dist/css/bookings_detail.module.css";
import { AnnounceModal } from "../../../components/common/index";
import {
  fetchViewForBookingsDetailsBoxPallet,
  fetchSalesStaffs,
} from "./items/operations";
import { useLocation } from "react-router-dom";
import {
  Button,
  withStyles,
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Backdrop,
  Fade,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  InputAdornment,
} from "@material-ui/core/";
import {
  OperatorBookingsDetailBoxPalletDialog,
  BookingsBoxPalletNotEstablishedDialog,
  OperatorBookingsDetailDeleteBoxPalletDialog,
  OperatorBookingsDetailEditBoxPalletDialog,
} from "../../index";
import { uploadSiForBoxPallet } from "./files/operations";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#878B8D",
    color: theme.palette.common.white,
    fontSize: 16,
    padding: theme.spacing(1),
  },
  body: {
    fontSize: 16,
    padding: theme.spacing(0.8),
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "24ch",
      background: "#fff",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "24ch",
      background: "#fff",
    },
    table: {
      minWidth: 700,
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

const OperatorBookingsDetailBoxPallet = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const location = useLocation();

  const [truckbuy, setTruckBuy] = useState("");
  const handleChangeTruckBuy = (e) => {
    setTruckBuy(e.target.value);
  };

  const [trucksell, setTruckSell] = useState("");
  const handleChangeTruckSell = (e) => {
    setTruckSell(e.target.value);
  };
  const [truckloadingbuy, setTruckLoadingBuy] = useState("");
  const handleChangeTruckLoadingBuy = (e) => {
    setTruckLoadingBuy(e.target.value);
  };
  const [truckloadingsell, setTruckLoadingSell] = useState("");
  const handleChangeTruckLoadingSell = (e) => {
    setTruckLoadingSell(e.target.value);
  };

  const [bookingno, setBookingNo] = useState("");
  const handleChangeBookingNo = (e) => {
    setBookingNo(e.target.value);
  };

  useEffect(() => {
    fetchViewForBookingsDetailsBoxPallet(location.search, setItems);
  }, [location.search]);

  const uploadShippingInstruction = async (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    await uploadSiForBoxPallet(items.id, e.target.files[0], items);
    fetchViewForBookingsDetailsBoxPallet(location.search, setItems);
    handleModalOpen();
  };

  const [salesStaffsList, setSalesStaffsList] = useState([]);
  const [selectedSalesStaffs, setSelectedSalesStaffs] = useState("");
  useEffect(() => {
    fetchSalesStaffs(setSalesStaffsList);
  }, []);
  const handleSalesStaffs = (e) => {
    setSelectedSalesStaffs(e.target.value);
  };

  function createData(name, value) {
    return { name, value };
  }

  function createPriceData(name, buy, sell) {
    return { name, buy, sell };
  }

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    createData("Case No", items.id),
    createData("Booking No", items.booking_no),
    createData("???????????????", "???/???????????????LCL"),
    createData("?????????", items.departure_port_name),
    createData("?????????", items.waypoint_name || "N"),
    createData("?????????", items.arrival_port_name),
    createData(
      "?????????",
      items.departure_date && items.departure_date.replaceAll(/-/g, "/")
    ),
    createData(
      "?????????",
      items.arrival_date && items.arrival_date.replaceAll(/-/g, "/")
    ),
    createData(
      "OPEN???",
      items.cfs_open_date && items.cfs_open_date.replaceAll(/-/g, "/")
    ),
    createData(
      "CUT???",
      items.cfs_cut_date && items.cfs_cut_date.replaceAll(/-/g, "/")
    ),
    createData("Freetime", items.freetime),
    createData(
      "????????????",
      items.estimated_deadline_date &&
        items.estimated_deadline_date.replaceAll(/-/g, "/")
    ),
    createData("?????????", items.shipping_company_name),
    createData("??????", items.vessel_name),
    createData("Voyage No", items.voyage_no),
    createData(
      "??????",
      items.need_customs_documents === true ? "????????????" : "???????????????"
    ),
    createData(
      "??????????????????",
      items.need_truck === true ? "????????????" : "???????????????"
    ),
    createData(
      "????????????",
      items.need_loading_or_unloading === true ? "????????????" : "???????????????"
    ),
    createData("????????????", items.workplace_truck || "-"),
    createData("??????????????????", items.street_address_truck || "-"),
    createData(
      "??????????????????",
      (items.preferred_delivery_day_truck &&
        items.preferred_delivery_day_truck
          .replaceAll(/-/g, "/")
          .split("T")
          .join(" ")
          .split("+")
          .join(" ")) ||
        "-"
    ),
    createData(
      "????????????????????????",
      (items.preferred_pick_up_day_truck &&
        items.preferred_pick_up_day_truck
          .replaceAll(/-/g, "/")
          .split("T")
          .join(" ")
          .split("+")
          .join(" ")) ||
        "-"
    ),
    createData("??????", items.quantity),
    createData("????????????(M3)", items.cubic_meter),
    createData("?????????L", items.size_l),
    createData("?????????W", items.size_w),
    createData("?????????H", items.size_h),
    createData("??????", items.weight),
    createData("?????????????????????", items.revenue_ton),
    createData("?????????????????????", items.pallet_type_id),
    createData("?????????", items.cargo_name_name),
  ];

  const pricedata = [
    createPriceData(
      "OceanFreight/RT($)",
      "$" + Number(items.ocean_freight_usd_buy).toLocaleString(),
      "$" + Number(items.ocean_freight_usd_sell).toLocaleString()
    ),
    createPriceData(
      "OceanFreight(??)",
      "??" + Number(items.ocean_freight_jpy_buy).toLocaleString(),
      "??" + Number(items.ocean_freight_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "WRS($)",
      "$" + Number(items.wrs_usd_buy).toLocaleString(),
      "$" + Number(items.wrs_usd_sell).toLocaleString()
    ),
    createPriceData(
      "LSS/RT($)",
      "$" + Number(items.lss_usd_buy).toLocaleString(),
      "$" + Number(items.lss_usd_sell).toLocaleString()
    ),
    createPriceData(
      "LSS/RT(??)",
      "??" + Number(items.lss_jpy_buy).toLocaleString(),
      "??" + Number(items.lss_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "THC/RT(??)",
      items.thc_jpy_buy === "0"
        ? "Incl"
        : "??" + Number(items.thc_jpy_buy).toLocaleString(),
      items.thc_jpy_sell === "0"
        ? "Incl"
        : "??" + Number(items.thc_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "DOC FEE(??)",
      "??" + Number(items.doc_fee_jpy_buy).toLocaleString(),
      "??" + Number(items.doc_fee_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "DO FEE(??)",
      "??" + Number(items.do_fee_jpy_buy).toLocaleString(),
      "??" + Number(items.do_fee_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "CFS CHARGE(??)",
      "??" + Number(items.cfs_charge_jpy_buy).toLocaleString(),
      "??" + Number(items.cfs_charge_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "PSS($)",
      "$" + Number(items.pss_usd_buy).toLocaleString(),
      "$" + Number(items.pss_usd_sell).toLocaleString()
    ),
    createPriceData(
      "DRAYGE RECOVERY CHARGE/RT(??)",
      "??" + Number(items.drayge_recovery_charge_jpy_buy).toLocaleString(),
      "??" + Number(items.drayge_recovery_charge_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "AFS(??)",
      "$" + Number(items.afs_jpy_buy).toLocaleString(),
      "$" + Number(items.afs_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "GRI($)",
      "$" + Number(items.gri_usd_buy).toLocaleString(),
      "$" + Number(items.gri_usd_sell).toLocaleString()
    ),
    createPriceData(
      "ERR($)",
      "$" + Number(items.err_usd_buy).toLocaleString(),
      "$" + Number(items.err_usd_sell).toLocaleString()
    ),
    createPriceData(
      "CIC($)",
      "$" + Number(items.cic_usd_buy).toLocaleString(),
      "$" + Number(items.cic_usd_sell).toLocaleString()
    ),
    createPriceData(
      "CIC(??)",
      "$" + Number(items.cic_jpy_buy).toLocaleString(),
      "$" + Number(items.cic_jpy_sell).toLocaleString()
    ),
    createPriceData("???????????????", "??" + 1000, "??" + 5000),
    createPriceData("???????????????", "??" + 1000, "??" + 5000),
    createPriceData("???????????????", "??" + 1000, "??" + 5000),
    createPriceData("???????????????", "??" + 1000, "??" + 5000),
    createPriceData("??????????????????", "??" + truckbuy, "??" + trucksell),
    createPriceData("????????????", "??" + truckloadingbuy, "??" + truckloadingsell),
    createPriceData(
      "??????",
      "??" + Number(items.total_jpy).toLocaleString(),
      "??" + Number(items.total_jpy).toLocaleString()
    ),
  ];

  return (
    <div className={classes.root}>
      <div className={classes_1.main}>
        <div className={classes_1.main_head}>
          <div className={classes_1.main_head_title}>Booking??????</div>
        </div>
        <div className={classes_1.main_body}>
          <div className={classes_1.main_body_left}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>??????</StyledTableCell>
                    <StyledTableCell align="right">?????????</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.value}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={classes_1.main_body_right}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>??????</StyledTableCell>
                    <StyledTableCell align="right">??????</StyledTableCell>
                    <StyledTableCell align="right">??????</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pricedata.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.buy}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.sell}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className={classes_1.main_remarks_area}>
          <div className={classes.root2}>
            <TextField
              label="??????"
              type="text"
              disabled
              variant="outlined"
              multiline={true}
              rows={5}
              value={items.remarks || ""}
            />
          </div>
        </div>
        <div className={classes_1.main_form_area}>
          <div className={classes_1.main_form}>
            <FormControl variant="outlined" className={classes.root}>
              <InputLabel id="shipping_company">????????????</InputLabel>
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
            <TextField
              label="Booking No"
              type="text"
              variant="outlined"
              value={bookingno}
              onChange={handleChangeBookingNo}
            />
            <TextField
              label="??????????????????"
              type="number"
              variant="outlined"
              value={truckbuy}
              onChange={handleChangeTruckBuy}
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
              value={trucksell}
              onChange={handleChangeTruckSell}
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
              value={truckloadingbuy}
              onChange={handleChangeTruckLoadingBuy}
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
              value={truckloadingsell}
              onChange={handleChangeTruckLoadingSell}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">??</InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes_1.main_dialog}>
            <OperatorBookingsDetailBoxPalletDialog
              items={items}
              selectedSalesStaffs={selectedSalesStaffs}
              bookingno={bookingno}
              truckbuy={truckbuy}
              trucksell={trucksell}
              truckloadingbuy={truckloadingbuy}
              truckloadingsell={truckloadingsell}
              handleOpen={handleOpen}
              className={classes_1.btn}
            />
          </div>
        </div>
        <div className={classes_1.main_form_area}>
          <OperatorBookingsDetailEditBoxPalletDialog
            items={items}
            bookingno={bookingno}
            className={classes_1.btn}
          />
          <BookingsBoxPalletNotEstablishedDialog items={items} />
        </div>
        <div className={classes_1.main_form_area_upload_area}>
          <div className={classes_1.main_form_area_upload_btn}>
            <Button
              variant="contained"
              component="label"
              className={classes.btn}
            >
              {items.is_exists_shipping_instruction
                ? "S/I ??? ??????????????? ??????"
                : "S/I ??? ??????????????? ??????"}
              <input
                type="file"
                hidden
                onInput={uploadShippingInstruction}
              ></input>
            </Button>
          </div>
          <div className={classes_1.main_form_area_upload_text}>
            {items.is_exists_shipping_instruction ? (
              <Button
                variant="contained"
                component="label"
                disabled
                className={classes.btn}
              >
                S/I ??? ????????????????????????
              </Button>
            ) : (
              <></>
            )}
          </div>
          <div className={classes_1.main_form_area_upload_delete}>
            {items.is_exists_shipping_instruction ? (
              <OperatorBookingsDetailDeleteBoxPalletDialog items={items} />
            ) : (
              <></>
            )}
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
            <h2 id="transition-modal-title">Booking??????????????????????????????</h2>
            <p id="transition-modal-description">
              ????????????Booking??????????????????????????????????????????
            </p>
          </div>
        </Fade>
      </Modal>
      <AnnounceModal
        isOpen={modalopen}
        setModalOpen={setModalOpen}
        title="S/I ??? ??????????????????????????????????????????????????????"
        text=""
      />
    </div>
  );
};

export default OperatorBookingsDetailBoxPallet;
