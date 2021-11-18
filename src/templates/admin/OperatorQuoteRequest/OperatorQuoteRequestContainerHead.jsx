import React from "react";
import classes_1 from "../../../dist/css/operatorquotes_request.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import ShipIcon from "../../../dist/images/輸送船アイコン.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "24ch",
      color: "red",
    },
    // "& .MuiFormLabel-root": {
    //   color: "#0052cc",
    // },
    // "& .MuiSelect-icon ": {
    //   color: "#0052cc",
    // },
  },
}));

const OperatorQuoteRequestContainerHead = () => {
  const classes = useStyles();

  const [transportation, setTransportation] = React.useState("");
  const [date, setDate] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleChangeTransportation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransportation(event.target.value);
  };
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes_1.main_head}>
        <div className={classes_1.main_head_menu}>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="輸送形態を選択"
              value={transportation}
              margin="dense"
              onChange={handleChangeTransportation}
              variant="outlined"
            >
              {transportations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="年月を選択"
              value={date}
              margin="dense"
              onChange={handleChangeDate}
              variant="outlined"
            >
              {dates.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="ステータスを選択"
              value={status}
              margin="dense"
              onChange={handleChangeStatus}
              variant="outlined"
            >
              {statuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={classes_1.main_head_menu_search_area}>
            <div className={classes_1.main_head_menu_search}>
              <form
                className={classes_1.main_head_menu_search_form}
                action=""
                method=""
              >
                <input
                  className={classes_1.main_head_menu_search_box}
                  id="s"
                  name="s"
                  type="text"
                  placeholder="フリーワードを入力"
                />
                <button
                  type="submit"
                  className={classes_1.main_head_menu_search_btn}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const transportations = [
  { value: "ship", label: "船" },
  { value: "air", label: "飛行機" },
  { value: "truck", label: "トラック" },
];
const dates = [
  { value: "202103", label: "2021/03" },
  { value: "202102", label: "2021/02" },
  { value: "202101", label: "2021/01" },
  { value: "202012", label: "2020/12" },
  { value: "202011", label: "2021/11" },
];
const statuses = [
  { value: "mitumorikan", label: "見積完了" },
  { value: "mitumorimi", label: "見積未完了" },
];
export default OperatorQuoteRequestContainerHead;
