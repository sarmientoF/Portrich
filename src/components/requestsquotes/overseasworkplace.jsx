import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { TextField } from "@material-ui/core/";

const OverseasWorkplace = (props) => {
  const { state, setState, styles } = props;

  const handleOverseasWorkPalce = (e) => {
    setState({ ...state, overseas_workplace: e.target.value });
  };

  return (
    <>
      <div className={classes.block_title}>作業場所を入力してください。</div>
      <div className={classes.flex_wrap}>
        <TextField
          size="small"
          label="作業場所"
          variant="outlined"
          className={styles.textfield}
          defaultValue={state.overseas_workplace}
          onChange={handleOverseasWorkPalce}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default OverseasWorkplace;
