import React from "react";
import classes_1 from "../../dist/css/shipments.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default () => {
  const [transportation, setTransportation] = React.useState("");
  const [date, setDate] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleChangeTransportation = (event) => {
    setTransportation(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  return (
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
            action="自分のサイトURL"
            method="get"
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
  { value: "mibarai", label: "未払い" },
  { value: "siharaizumi", label: "支払済" },
];
