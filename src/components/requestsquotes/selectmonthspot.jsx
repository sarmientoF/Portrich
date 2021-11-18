import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core/";
import { monthdata } from "../../common/services/datas";

const SelectMonthSpot = (props) => {
  const { state, setState, styles } = props;

  const SelectedSpotMonth = (_, value) => {
    setState({ ...state, spot_month: value });
  };

  return (
    <>
      <div className={classes.block_title}>何月の見積を依頼しますか？</div>
      <div className={classes.flex_wrap}>
        <Autocomplete
          id="cargo_name"
          size="small"
          className={styles.select}
          options={monthdata}
          getOptionLabel={(option) => option}
          onChange={SelectedSpotMonth}
          renderInput={(params) => (
            <TextField {...params} label="月を選択" variant="outlined" />
          )}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default SelectMonthSpot;
