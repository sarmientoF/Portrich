import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core/";
import { monthdata } from "../../common/services/datas";

const SelectMonthPlural = (props) => {
  const { state, setState, styles } = props;
  const SelectedPluralMonth = (_, value) => {
    setState({ ...state, plural_month: value });
  };
  return (
    <>
      <div className={classes.block_title}>何月から見積を依頼しますか？</div>
      <div className={classes.flex_wrap}>
        <Autocomplete
          id="cargo_name"
          size="small"
          className={styles.select}
          options={monthdata}
          getOptionLabel={(option) => option}
          onChange={SelectedPluralMonth}
          renderInput={(params) => (
            <TextField {...params} label="月を選択" variant="outlined" />
          )}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default SelectMonthPlural;
