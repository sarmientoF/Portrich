import React from "react";
import classes from "../../../dist/css/admin_schedule.module.css";
import { makeStyles } from "@material-ui/core";
import { ReactComponent as FilterIcon } from "../../../dist/images/filtericn.svg";
import { scheduleItem } from "./items/operations";
import {
  CreateScheduleDialog,
  EditScheduleDialog,
  DeleteScheduleDialog,
} from "../../../components/adminschedulelist/index";

const useStyles = makeStyles((theme) => ({
  dialogroot: {
    "& .MuiDialog-paperWidthSm": {
      minWidth: 800,
    },
  },
  button: {
    background: "#fff",
    border: "1px solid #415B65",
    color: "#415B65",
    textAlign: "center",
    fontSize: "12px",
    display: "block",
    width: "100%",
    borderRadius: "3px",
    boxShadow: "none",
    "&:hover": {
      opacity: "0.8",
      background: "#415B65",
      color: "#fff",
      border: "1px solid #415B65",
    },
  },
  buttonroot: {
    "& .MuiButton-contained:hover": {
      background: "#415B65",
      color: "#fff",
      boxShadow: "none",
    },
  },
  root: {
    "& .MuiButton-label": {
      justifyContent: "space-between",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "30px",
    },
    "& .MuiButton-contained": {
      boxShadow: "none",
    },
    "& .MuiButton-root": {
      padding: "4px 5px",
      minWidth: 10,
    },
  },
  btn: {
    color: "#fff",
    width: "22ch",
    padding: 5,
    fontSize: 12,
    background: "#415B65",
    textTransform: "capitalize",
    boxShadow: "none",
    borderRadius: "3px",
    border: "none",
    "&:hover": {
      opacity: "0.8",
      background: "#415B65",
      boxShadow: "none",
      border: "none",
    },
  },
  dialog_btn: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#415B65",
    marginBottom: 10,
  },
  delete_btn: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#e34040",
    marginBottom: 10,
    border: "1px solid #e34040",
    "&:hover": {
      opacity: "0.8",
      background: "#e34040",
      color: "#fff",
      border: "1px solid #e34040",
    },
  },
  request_btn: {
    textTransform: "capitalize",
    fontSize: 12,
    color: "#fff",
    background: "#415B65",
    marginBottom: 10,
    "&:hover": {
      opacity: "0.8",
      background: "#415B65",
      boxShadow: "none",
    },
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    background: "#415B65",
    color: "#fff",
    padding: 6,
  },
  content: {
    border: "1px solid #D9DCE0",
    padding: 10,
    margin: "20px 30px",
  },
  form: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(0.5),
      width: "100%",
    },
    "& .MuiFilledInput-input": {
      padding: "9px",
      borderBottom: "none",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "2px solid #D9DCE0",
    },
    "& .MuiAutocomplete-inputRoot": {
      padding: 0,
    },
  },
}));

const widthList = [
  { width: "8%" },
  { width: "8%" },
  { width: "7%" },
  { width: "5%" },
  { width: "11%" },
  { width: "11%" },
  { width: "11%" },
  { width: "6.5%" },
  { width: "6.5%" },
  { width: "6.5%" },
  { width: "6.5%" },
  { width: "4%" },
  { width: "2.5%" },
];

const adminScheduleHead = [
  { title: "船会社", icon: true },
  { title: "船名" },
  { title: "Voyage No" },
  { title: "Ship id" },
  { title: "出発港", icon: true },
  { title: "経由港", icon: true },
  { title: "到着港" },
  { title: "出発日" },
  { title: "到着日" },
  { title: "CUT" },
  { title: "OPEN" },
  { title: "" },
  { title: "" },
];

const AdminScheduleList = () => {
  const styles = useStyles();
  // const [quoteListItem, setQuoteListItem] = useState([]);
  // useEffect(() => {
  //   fetchViewForQuoteRequestsOcean(setQuoteListItem, dispatch);
  // }, []);
  return (
    <section className={classes.main}>
      <div className={classes.body}>
        <div className={classes.title_area}>
          <div className={classes.title}>スケジュール一覧</div>
          <div>
            <CreateScheduleDialog styles={styles} />
          </div>
        </div>
        <div className={classes.mb_30}></div>
        <div className={classes.content}>
          <div className={styles.root}>
            <ul className={classes.content_head_list}>
              {adminScheduleHead.map((value, index) => (
                <li
                  className={classes.content_head_item}
                  style={widthList[index]}
                  key={index}
                >
                  <div className={classes.content_head_item_text}>
                    {value.title}
                  </div>
                  {value.icon && <FilterIcon />}
                </li>
              ))}
            </ul>
            <ul className={classes.contetnt_list}>
              {scheduleItem.map((value, index) => (
                <li className={classes.content_item}>
                  <div
                    className={classes.content_item_data}
                    style={widthList[0]}
                    key={index}
                  >
                    {value.carrier}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[1]}
                  >
                    {value.ship_name}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[2]}
                  >
                    {value.voyage_no}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[3]}
                  >
                    {value.ship_id}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[4]}
                    key={index}
                  >
                    {value.pol}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[5]}
                    key={index}
                  >
                    {value.transit || "-"}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[6]}
                  >
                    {value.pod}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[7]}
                  >
                    {value.etd}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[8]}
                  >
                    {value.eta}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[9]}
                  >
                    {value.cut}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[10]}
                  >
                    {value.open}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[11]}
                  >
                    <div className={styles.buttonroot}>
                      <EditScheduleDialog styles={styles} id={value.id} />
                    </div>
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[12]}
                  >
                    <DeleteScheduleDialog styles={styles} id={value.id} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminScheduleList;
