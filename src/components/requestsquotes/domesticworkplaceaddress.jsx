import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { TextField } from "@material-ui/core/";

const DomesticWorkPalceAddress = (props) => {
  const { state, setState, styles } = props;

  const handleDomesticWorkPalceAddress = (e) => {
    setState({ ...state, domestic_workplace_address: e.target.value });
  };
  return (
    <>
      <div className={classes.block_title}>
        作業場所住所を入力してください。
      </div>
      <div className={classes.flex_wrap}>
        <TextField
          size="small"
          label="作業場所住所"
          variant="outlined"
          className={styles.textfield}
          defaultValue={state.domestic_workplace_address}
          onChange={handleDomesticWorkPalceAddress}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default DomesticWorkPalceAddress;
