import React, { useEffect, useState } from "react";
import classes_1 from "../../../dist/css/bookings_detail.module.css";
import { AnnounceModal } from "../../../components/common/index";
import {
  fetchViewForBookingsDetailsConatiner,
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
  OperatorBookingsDetailContainerDialog,
  BookingsContainerNotEstablishedDialog,
  OperatorBookingsDetailDeleteContainerDialog,
  OperatorBookingsDetailEditContainerDialog,
} from "../../index";
import { uploadSiForContainer } from "./files/operations";

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

const OperatorBookingsDetailContainer = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const location = useLocation();

  const [drayagebuy, setDrayageBuy] = useState("");
  const handleChangeDrayageBuy = (e) => {
    setDrayageBuy(e.target.value);
  };

  const [drayagesell, setDrayageSell] = useState("");
  const handleChangeDrayageSell = (e) => {
    setDrayageSell(e.target.value);
  };

  const [bookingno, setBookingNo] = useState("");
  const handleChangeBookingNo = (e) => {
    setBookingNo(e.target.value);
  };

  useEffect(() => {
    fetchViewForBookingsDetailsConatiner(location.search, setItems);
  }, [location.search]);

  const uploadShippingInstruction = async (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    await uploadSiForContainer(items.id, e.target.files[0], items);
    fetchViewForBookingsDetailsConatiner(location.search, setItems);
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

  function createData(name, value) {
    return { name, value };
  }

  function createPriceData(name, buy, sell) {
    return { name, buy, sell };
  }
  const data = [
    createData("Case No", items.id),
    createData("Booking No", items.booking_no),
    createData("???????????????", "???????????????FCL"),
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
      items.cy_open_date && items.cy_open_date.replaceAll(/-/g, "/")
    ),
    createData(
      "CUT???",
      items.cy_cut_date && items.cy_cut_date.replaceAll(/-/g, "/")
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
      items.need_drayage_shipping === true ? "????????????" : "???????????????"
    ),
    createData(
      "??????",
      items.need_truck_scale === true ? "????????????" : "???????????????" || "-"
    ),
    createData("??????", items.num_of_axis === 2 ? "2???" : "3???" || "-"),
    createData("????????????", items.workplace_drayage || "-"),
    createData("??????????????????", items.street_address_drayage || "-"),
    createData(
      "??????????????????",
      (items.preferred_delivery_day_drayage &&
        items.preferred_delivery_day_drayage
          .replaceAll(/-/g, "/")
          .split("T")
          .join(" ")
          .split("+")
          .join(" ")) ||
        "-"
    ),
    createData(
      "????????????????????????",
      (items.preferred_pick_up_day_drayage &&
        items.preferred_pick_up_day_drayage
          .replaceAll(/-/g, "/")
          .split("T")
          .join(" ")
          .split("+")
          .join(" ")) ||
        "-"
    ),
    createData("??????", items.quantity),
    createData("?????????????????????", items.container_type_name),
    createData("?????????", items.cargo_name_name),
  ];

  const pricedata = [
    createPriceData(
      "OceanFreight($)",
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
      "LSS($)",
      "$" + Number(items.lss_usd_buy).toLocaleString(),
      "$" + Number(items.lss_usd_sell).toLocaleString()
    ),
    createPriceData(
      "LSS(??)",
      "??" + Number(items.lss_jpy_buy).toLocaleString(),
      "??" + Number(items.lss_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "THC(??)",
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
      "SEAL FEE(??)",
      "??" + Number(items.seal_fee_jpy_buy).toLocaleString(),
      "??" + Number(items.seal_fee_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "DO FEE(??)",
      "??" + Number(items.do_fee_jpy_buy).toLocaleString(),
      "??" + Number(items.do_fee_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "PSS($)",
      "$" + Number(items.pss_usd_buy).toLocaleString(),
      "$" + Number(items.pss_usd_sell).toLocaleString()
    ),
    createPriceData(
      "AMS($)",
      "$" + Number(items.ams_usd_buy).toLocaleString(),
      "$" + Number(items.ams_usd_sell).toLocaleString()
    ),
    createPriceData(
      "EMS($)",
      "$" + Number(items.ems_usd_buy).toLocaleString(),
      "$" + Number(items.ems_usd_sell).toLocaleString()
    ),
    createPriceData(
      "AFR(??)",
      "??" + Number(items.afr_jpy_buy).toLocaleString(),
      "??" + Number(items.afr_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "GRI($)",
      "$" + Number(items.gri_usd_buy).toLocaleString(),
      "$" + Number(items.gri_usd_sell).toLocaleString()
    ),
    createPriceData(
      "CIC($)",
      "$" + Number(items.cic_usd_buy).toLocaleString(),
      "$" + Number(items.cic_usd_sell).toLocaleString()
    ),
    createPriceData("???????????????", "??" + 1000, "??" + 5000),
    createPriceData("???????????????", "??" + 1000, "??" + 5000),
    createPriceData("???????????????", "??" + 1000, "??" + 5000),
    createPriceData("???????????????", "??" + 1000, "??" + 5000),
    createPriceData("??????????????????", "??" + drayagebuy, "??" + drayagesell),
    createPriceData("??????", "", ""),
    createPriceData("??????", "??" + items.total_jpy, "??" + items.total_jpy),
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
              value={drayagebuy}
              onChange={handleChangeDrayageBuy}
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
              value={drayagesell}
              onChange={handleChangeDrayageSell}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">??</InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes_1.main_dialog}>
            <OperatorBookingsDetailContainerDialog
              items={items}
              selectedSalesStaffs={selectedSalesStaffs}
              bookingno={bookingno}
              drayagebuy={drayagebuy}
              drayagesell={drayagesell}
              handleOpen={handleOpen}
              className={classes_1.btn}
            />
          </div>
        </div>
        <div className={classes_1.main_form_area}>
          <OperatorBookingsDetailEditContainerDialog
            items={items}
            bookingno={bookingno}
            className={classes_1.btn}
          />

          <BookingsContainerNotEstablishedDialog items={items} />
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
              <OperatorBookingsDetailDeleteContainerDialog items={items} />
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

export default OperatorBookingsDetailContainer;
