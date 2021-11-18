import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const DomesticDelivery = (props) => {
  const { state, setState, styles } = props;

  const handleChangeAskDomesticDelivery = () => {
    setState({
      ...state,
      askdomesticdelivery: true,
      notaskdomesticdelivery: false,
    });
  };
  const handleChangeNotAskDomesticDelivery = () => {
    setState({
      ...state,
      notaskdomesticdelivery: true,
      askdomesticdelivery: false,
      domestic_workplace: undefined,
      domestic_workplace_address: undefined,
      domestic_working_hours: undefined,
      domestic_target_port: undefined,
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
      <div className={classes.block_title}>
        国内配送の見積有無を選択してください。
      </div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.askdomesticdelivery ? styles.blue : styles.button}
          onClick={handleChangeAskDomesticDelivery}
        >
          依頼する
        </Button>
        <Button
          variant="outlined"
          className={state.notaskdomesticdelivery ? styles.blue : styles.button}
          onClick={handleChangeNotAskDomesticDelivery}
        >
          依頼しない
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default DomesticDelivery;
