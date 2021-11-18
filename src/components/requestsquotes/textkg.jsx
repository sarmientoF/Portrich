import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { TextField } from "@material-ui/core/";

const TextKg = (props) => {
  const { state, setState, styles } = props;

  const handleTextKg = (e) => {
    setState({ ...state, textkg: e.target.value });
  };
  return (
    <>
      <div className={classes.block_title}>品物の重量を入力してください。</div>
      <div className={classes.flex_wrap}>
        <TextField
          size="small"
          label="Kg"
          type="number"
          variant="outlined"
          className={styles.textfield}
          defaultValue={state.textkg}
          onChange={handleTextKg}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default TextKg;
