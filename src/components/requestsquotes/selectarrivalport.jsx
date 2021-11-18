import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core/";

const SelectArrivalPort = (props) => {
  const { cargoNameList, setSelectedCargo, styles } = props;

  const SelectedCargo = (_, value) => {
    setSelectedCargo(value);
  };
  return (
    <>
      <div className={classes.block_title}>貨物の種類を選択してください。</div>
      <Autocomplete
        id="cargo_name"
        size="small"
        className={styles.cargoarea}
        options={cargoNameList}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        onChange={SelectedCargo}
        renderInput={(params) => (
          <TextField {...params} label="貨物名" variant="outlined" />
        )}
      />
      <div className={classes.mb_30}></div>
    </>
  );
};
export default SelectArrivalPort;
