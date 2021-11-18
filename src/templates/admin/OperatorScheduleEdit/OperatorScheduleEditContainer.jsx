import React, { useEffect, useState } from "react";
import classes_1 from "../../../dist/css/operatorschedule_edit.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { fetchScheduleForContainer } from "./items/operations";
import { useLocation } from "react-router-dom";
import {
  TextField,
  Modal,
  Backdrop,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  fetchShipPortList,
  fetchShippingCompanies,
} from "../../../common/services/fetchData";
import {
  OperatorScheduleEditContainerDialog,
  OperatorScheduleDeleteContainerDialog,
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
      margin: theme.spacing(1),
      width: "25ch",
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

const OperatorScheduleEditContainer = () => {
  const classes = useStyles();
  const location = useLocation();
  const [scheduleList, setScheduleList] = useState([]);
  const [shipportlist, setShipPortList] = useState([]);
  const [shippingcompanies, setShippingCompanies] = useState([]);

  useEffect(() => {
    fetchScheduleForContainer(location.search, setScheduleList);
    fetchShipPortList(setShipPortList);
    fetchShippingCompanies(setShippingCompanies);
  }, []);

  const departurePortId = scheduleList.departure_port;
  const arrivalPortId = scheduleList.arrival_port;
  const wayPointId = scheduleList.waypoint;
  const shippingCompaniesId = scheduleList.shipping_company;
  const departurePortName = shipportlist.filter(
    (item) => item.id === departurePortId
  );
  const arrivalPortName = shipportlist.filter(
    (item) => item.id === arrivalPortId
  );
  const wayPointName = shipportlist.filter((item) => item.id === wayPointId);
  const shippingCompaniesName = shippingcompanies.filter(
    (item) => item.id === shippingCompaniesId
  );

  function createData(id, label, value) {
    return { id, label, value };
  }

  const inputSchedule = [
    createData(
      "shipping_company_name",
      "CARRIER",
      shippingCompaniesName.length === 0 ? "" : shippingCompaniesName[0].value
    ),
    createData(
      "departure_port_name",
      "出港地",
      departurePortName.length === 0 ? "" : departurePortName[0].value
    ),
    createData(
      "waypoint_name",
      "経由港",
      wayPointName.length === 0 ? "" : wayPointName[0].value
    ),
    createData(
      "arrival_port_name",
      "到港地",
      arrivalPortName.length === 0 ? "" : arrivalPortName[0].value
    ),
    createData("vessel_name", "船名", scheduleList.vessel_name),
    createData("voyage_no", "Voyage No", scheduleList.voyage_no),
    createData(
      "marine_traffic_ship_id",
      "Marine Traffic id",
      scheduleList.marine_traffic_ship_id
    ),
    createData(
      "departure_date",
      "出発日",
      scheduleList.departure_date &&
        scheduleList.departure_date.replaceAll(/-/g, "/")
    ),
    createData(
      "arrival_date",
      "到着日",
      scheduleList.arrival_date &&
        scheduleList.arrival_date.replaceAll(/-/g, "/")
    ),
    createData(
      "cy_cut_date",
      "CY CUT",
      scheduleList.cy_cut_date && scheduleList.cy_cut_date.replaceAll(/-/g, "/")
    ),
    createData(
      "cy_open_date",
      "CY OPEN",
      scheduleList.cy_open_date &&
        scheduleList.cy_open_date.replaceAll(/-/g, "/")
    ),
  ];

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

  const param = {
    id: scheduleList.id,
    shipping_company: selectedShippingCompany,
    departure_port: selectedDeparturePort && selectedDeparturePort.id,
    waypoint: selectedWaypoint && selectedWaypoint.id,
    arrival_port: selectedArrivalPort && selectedArrivalPort.id,
    vessel_name: vesselName,
    voyage_no: voyageNo,
    departure_date: departureDate,
    arrival_date: arrivalDate,
    cy_cut_date: cutday,
    cy_open_date: openday,
    marine_traffic_ship_id: marineTrafficShipId,
  };
  const blankparam = {
    shipping_company:
      shippingCompaniesName.length === 0 ? "" : shippingCompaniesName[0].id,
    departure_port:
      departurePortName.length === 0 ? "" : departurePortName[0].id,
    waypoint: wayPointName.length === 0 ? "" : wayPointName[0].id,
    arrival_port: arrivalPortName.length === 0 ? "" : arrivalPortName[0].id,
    vessel_name: scheduleList.vessel_name,
    voyage_no: scheduleList.voyage_no,
    departure_date: scheduleList.departure_date,
    arrival_date: scheduleList.arrival_date,
    cy_cut_date: scheduleList.cy_cut_date,
    cy_open_date: scheduleList.cy_open_date,
    marine_traffic_ship_id: scheduleList.marine_traffic_ship_id,
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
          <div className={classes_1.main_head_title}>スケジュール編集</div>
        </div>
        <div className={classes_1.main_body}>
          <div className={classes_1.main_body_title_area}>
            {inputSchedule.map((item) => (
              <div className={classes_1.main_body_title_flex}>
                <div className={classes_1.main_body_title}>{item.label}</div>
                <div className={classes_1.main_body_title_item}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className={classes_1.main_body_edit_area}>
            <div className={classes_1.main_body_cost_title}>編集</div>
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
                {shippingcompanies.map((value, index) => (
                  <MenuItem key={index} value={value.id}>
                    {value.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Autocomplete
              options={shipportlist}
              getOptionLabel={(option) => option.value}
              value={selectedDeparturePort}
              onChange={handleDeparturePort}
              renderInput={(params) => (
                <TextField {...params} label="港名(From)" variant="outlined" />
              )}
            />
            <Autocomplete
              options={shipportlist}
              getOptionLabel={(option) => option.value}
              value={selectedArrivalPort}
              onChange={handleArrivalPort}
              renderInput={(params) => (
                <TextField {...params} label="港名(To)" variant="outlined" />
              )}
            />
            <Autocomplete
              options={shipportlist}
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
          <div className={classes_1.main_btn_area}>
            <div className={classes_1.main_btn_edit}>
              <OperatorScheduleEditContainerDialog
                handleModalOpen={handleModalOpen}
                param={param}
                blankparam={blankparam}
              />
            </div>
            <div className={classes_1.main_btn_delete}>
              <OperatorScheduleDeleteContainerDialog
                scheduleList={scheduleList}
                handleModalOpen={handleModalOpen}
                setScheduleList={setScheduleList}
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
            <h2 id="transition-modal-title">
              スケジュールの変更が完了しました。
            </h2>
            <p id="transition-modal-description">何か文入れてもいいかも</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default OperatorScheduleEditContainer;
