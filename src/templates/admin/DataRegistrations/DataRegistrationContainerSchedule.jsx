import React, { useState, useEffect } from "react";
import classes_1 from "../../../dist/css/dataentrys.module.css";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  fetchShippingCompanies,
  fetchShipPortList,
} from "../../../common/services/fetchData";
import { registerContainerSchedule } from "./dataRegistrationSchedule/operations";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "21ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: "21ch",
  },
  button: {
    width: "70%",
    fontSize: 20,
    padding: 3,
    background: "#0052cc",
    color: "#fff",
  },
  root2: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1.5),
      width: "17.5ch",
    },
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

const DataRegistrationContainerSchedule = () => {
  const classes = useStyles();
  const [shippingCompanyList, setShippingCompanyList] = useState([]);
  const [shipPortList, setShipPortList] = useState([]);

  const [selectedShippingCompany, setSelectedShippingCompany] = useState("");
  const handleShippingCompany = (e) => {
    setSelectedShippingCompany(e.target.value);
  };
  const [selectedDeparturePort, setSelectedDeparturePort] = useState(null);
  const handleDeparturePort = (e, value) => {
    setSelectedDeparturePort(value);
  };
  const [selectedArrivalPort, setSelectedArrivalPort] = useState(null);
  const handleArrivalPort = (e, value) => {
    setSelectedArrivalPort(value);
  };
  const [selectedWaypoint, setSelectedWaypoint] = useState(null);
  const handleWaypoint = (e, value) => {
    setSelectedWaypoint(value);
  };
  const [vesselName, setVesselName] = useState("");
  const handleVesselName = (e) => {
    setVesselName(e.target.value);
  };
  const [voyageNo, setVoyageNo] = useState("");
  const handleVoyageNo = (e) => {
    setVoyageNo(e.target.value);
  };
  const [marineTrafficShipId, setMarineTrafficShipId] = useState("");
  const handleMarineTrafficShipId = (e) => {
    setMarineTrafficShipId(e.target.value);
  };
  const [departureDate, setDepartureDate] = useState("");
  const handleDepartureDate = (e) => {
    setDepartureDate(e.target.value);
  };
  const [arrivalDate, setArrivalDate] = useState("");
  const handleArrivalDate = (e) => {
    setArrivalDate(e.target.value);
  };

  const [openday, setOpenday] = useState("");
  const handleOpenday = (e) => {
    setOpenday(e.target.value);
  };
  const [cutday, setCutday] = useState("");
  const handleCutDay = (e) => {
    setCutday(e.target.value);
  };
  const save = () => {
    const param = {
      shipping_company: selectedShippingCompany,
      departure_port: selectedDeparturePort && selectedDeparturePort.id,
      waypoint: selectedWaypoint && selectedWaypoint.id,
      arrival_port: selectedArrivalPort && selectedArrivalPort.id,
      vessel_name: vesselName,
      voyage_no: voyageNo,
      departure_date: departureDate,
      arrival_date: arrivalDate,
      cut_day: cutday,
      open_day: openday,
      marine_traffic_ship_id: marineTrafficShipId,
    };
    registerContainerSchedule(param, handleOpen);
  };
  useEffect(() => {
    fetchShippingCompanies(setShippingCompanyList);
    fetchShipPortList(setShipPortList);
  }, []);

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
        <div className={classes_1.block_title}>
          スケジュール（コンテナ・FCL）
        </div>
        <div className={classes_1.block_body}>
          <div className={classes_1.block_sub_title}>スケジュール</div>
          <div className={classes_1.flex_box}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="shipping_company">船会社</InputLabel>
              <Select
                labelId="shipping_company"
                value={selectedShippingCompany}
                onChange={handleShippingCompany}
                label="container_type"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {shippingCompanyList.map((value, index) => (
                  <MenuItem key={index} value={value.id}>
                    {value.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Autocomplete
              options={shipPortList}
              getOptionLabel={(option) => option.value}
              value={selectedDeparturePort}
              onChange={handleDeparturePort}
              renderInput={(params) => (
                <TextField {...params} label="港名(From)" variant="outlined" />
              )}
            />
            <Autocomplete
              options={shipPortList}
              getOptionLabel={(option) => option.value}
              value={selectedArrivalPort}
              onChange={handleArrivalPort}
              renderInput={(params) => (
                <TextField {...params} label="港名(To)" variant="outlined" />
              )}
            />
            <Autocomplete
              options={shipPortList}
              getOptionLabel={(option) => option.value}
              value={selectedWaypoint}
              onChange={handleWaypoint}
              renderInput={(params) => (
                <TextField {...params} label="経由港" variant="outlined" />
              )}
            />
            <TextField
              label="船名"
              type="text"
              variant="outlined"
              value={vesselName}
              onChange={handleVesselName}
            />
            <TextField
              label="Voyage No"
              type="text"
              variant="outlined"
              value={voyageNo}
              onChange={handleVoyageNo}
            />
            <TextField
              label="ship id(for Marine Traffic)"
              type="text"
              variant="outlined"
              value={marineTrafficShipId}
              onChange={handleMarineTrafficShipId}
            />
          </div>
          <div className={classes_1.mt20}></div>
          <div className={classes_1.flex_box}>
            <TextField
              label="出発日"
              type="date"
              variant="outlined"
              value={departureDate}
              onChange={handleDepartureDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="到着日"
              type="date"
              variant="outlined"
              value={arrivalDate}
              onChange={handleArrivalDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes_1.flex_box}>
            <TextField
              label="OPEN"
              type="date"
              variant="outlined"
              value={openday}
              onChange={handleOpenday}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="CUT"
              type="date"
              variant="outlined"
              value={cutday}
              onChange={handleCutDay}
              InputLabelProps={{
                shrink: true,
              }}
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
            <h2 id="transition-modal-title">スケジュールを登録しました。</h2>
            <p id="transition-modal-description">何か文入れれる。</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default DataRegistrationContainerSchedule;
