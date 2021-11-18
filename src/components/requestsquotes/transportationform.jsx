import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const TransportationForm = (props) => {
  const { state, setState, styles } = props;

  const handleChangeFcl = () => {
    setState({
      ...state,
      fcl: true,
      lcl: false,
      textcbm: undefined,
      textkg: undefined,
    });
  };
  const handleChangeLcl = () => {
    setState({
      ...state,
      lcl: true,
      fcl: false,
      domestic_working_hours: undefined,
      containertype: undefined,
      loading_oneself: undefined,
      loading_Joint: undefined,
      loading_request: undefined,
      light_truck: undefined,
      two_ton_truck: undefined,
      four_ton_truck: undefined,
      ten_ton_truck: undefined,
    });
  };
  return (
    <>
      <div className={classes.block_title}>輸送形態を選択して下さい。</div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.fcl ? styles.blue : styles.button}
          onClick={handleChangeFcl}
        >
          FCL
        </Button>
        <Button
          variant="outlined"
          className={state.lcl ? styles.blue : styles.button}
          onClick={handleChangeLcl}
        >
          LCL
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default TransportationForm;
