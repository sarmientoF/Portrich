import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { TextField } from "@material-ui/core/";

const TextCbm = (props) => {
  const { state, setState, styles } = props;

  const handleTextCbm = (e) => {
    setState({ ...state, textcbm: e.target.value });
  };
  return (
    <>
      <div className={classes.block_title}>
        品物のサイズを入力してください。
      </div>
      <div className={classes.flex_wrap}>
        <TextField
          size="small"
          label="CBM(m&#xB3;)"
          type="number"
          variant="outlined"
          className={styles.textfield}
          defaultValue={state.textcbm}
          onChange={handleTextCbm}
        />
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default TextCbm;
