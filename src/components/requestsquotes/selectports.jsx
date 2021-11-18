import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core/";
import { ReactComponent as Arrow2 } from "../../dist/images/arrow2.svg";

const SelectPorts = (props) => {
  const { portList, state, setState, styles } = props;

  const SelectedDeparturePort = (_, value) => {
    setState({ ...state, departure_port: value });
  };
  const SelectedArrivalPort = (_, value) => {
    setState({ ...state, arrival_port: value });
  };

  return (
    <>
      <div className={classes.block_title}>ルートを選択してください。</div>
      <div className={classes.flex_wrap}>
        <Autocomplete
          id="departure_port"
          size="small"
          className={styles.select}
          options={portList}
          getOptionLabel={(option) => option.name}
          onChange={SelectedDeparturePort}
          renderInput={(params) => (
            <TextField {...params} label={"出発港"} variant="outlined" />
          )}
        />
        <div className={classes.arrow_area}>
          <Arrow2 className={classes.arrow2} />
        </div>
        <Autocomplete
          id="departure_port"
          size="small"
          className={styles.select}
          options={portList}
          getOptionLabel={(option) => option.name}
          onChange={SelectedArrivalPort}
          renderInput={(params) => (
            <TextField {...params} label={"出発港"} variant="outlined" />
          )}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default SelectPorts;
