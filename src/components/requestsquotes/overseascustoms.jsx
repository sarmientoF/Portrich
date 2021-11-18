import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const OverseasCustoms = (props) => {
  const { state, setState, styles } = props;

  const handleChangeAsOverseasCustoms = () => {
    setState({
      ...state,
      askoverseascustoms: true,
      notaskoverseascustoms: false,
    });
  };
  const handleChangeNotAskOverseasCustoms = () => {
    setState({
      ...state,
      notaskoverseascustoms: true,
      askoverseascustoms: false,
    });
  };
  return (
    <>
      <div className={classes.mb_60}></div>
      <div className={classes.main_body_sub_title}>海外作業</div>
      <div className={classes.block_title}>
        海外通関の見積有無を選択してください。
      </div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.askoverseascustoms ? styles.blue : styles.button}
          onClick={handleChangeAsOverseasCustoms}
        >
          依頼する
        </Button>
        <Button
          variant="outlined"
          className={state.notaskoverseascustoms ? styles.blue : styles.button}
          onClick={handleChangeNotAskOverseasCustoms}
        >
          依頼しない
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default OverseasCustoms;
