import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const DomesticOrOverseas = (props) => {
  const { state, setState, styles } = props;

  const handleChangeDomestic = () => {
    setState({
      ...state,
      domestic: true,
      overseas: false,
      overseas_target_port: undefined,
      overseas_workplace: undefined,
      overseas_workplace_address: undefined,
      textcbm: undefined,
      textkg: undefined,
      containertype: undefined,
    });
  };
  const handleChangeOverseas = () => {
    setState({
      ...state,
      overseas: true,
      domestic: false,
      domestic_target_port: undefined,
      domestic_working_hours: undefined,
      domestic_workplace: undefined,
      domestic_workplace_address: undefined,
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
      <div className={classes.block_title}>国内か海外を選択して下さい。</div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.domestic ? styles.blue : styles.button}
          onClick={handleChangeDomestic}
        >
          国内配送
        </Button>
        <Button
          variant="outlined"
          className={state.overseas ? styles.blue : styles.button}
          onClick={handleChangeOverseas}
        >
          海外配送
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default DomesticOrOverseas;
