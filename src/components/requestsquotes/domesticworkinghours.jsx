import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core/";
import { timedata } from "../../common/services/datas";

const DomesticWorkingHour = (props) => {
  const { state, setState, styles } = props;

  const SelectedDomesticWorkingHours = (_, value) => {
    setState({ ...state, domestic_working_hours: value });
  };
  return (
    <>
      <div className={classes.block_title}>
        およその作業時間を選択してください
      </div>
      <div className={classes.flex_wrap}>
        <Autocomplete
          id="cargo_name"
          size="small"
          className={styles.select}
          options={timedata}
          getOptionLabel={(option) => option.value}
          onChange={SelectedDomesticWorkingHours}
          renderInput={(params) => (
            <TextField {...params} label="作業時間" variant="outlined" />
          )}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default DomesticWorkingHour;
