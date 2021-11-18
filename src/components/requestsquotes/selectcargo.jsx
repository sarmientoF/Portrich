import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core/";

const SelectCargo = (props) => {
  const { cargoNameList, state, setState, styles } = props;

  const SelectedCargo = (_, value) => {
    setState({ ...state, cargoname: value });
  };
  return (
    <>
      <div className={classes.block_title}>貨物の種類を選択してください。</div>
      <Autocomplete
        id="cargo_name"
        size="small"
        className={styles.cargo}
        options={cargoNameList}
        getOptionLabel={(option) => option.name}
        onChange={SelectedCargo}
        renderInput={(params) => (
          <TextField {...params} label="貨物名" variant="outlined" />
        )}
      />
      <div className={classes.mb_30}></div>
    </>
  );
};
export default SelectCargo;
