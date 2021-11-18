import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core/";

const DomesticTargetPort = (props) => {
  const { portList, state, setState, styles } = props;

  const SelectedDomesticTargetPort = (_, value) => {
    setState({ ...state, domestic_target_port: value });
  };
  return (
    <>
      <div className={classes.block_title}>対象港を選択してください</div>
      <div className={classes.flex_wrap}>
        <Autocomplete
          id="domestic_target_port"
          size="small"
          className={styles.select}
          options={portList}
          getOptionLabel={(option) => option.name}
          onChange={SelectedDomesticTargetPort}
          renderInput={(params) => (
            <TextField {...params} label={"対象港"} variant="outlined" />
          )}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default DomesticTargetPort;
