import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const OverseasDelivery = (props) => {
  const { state, setState, styles } = props;

  const handleChangeAskOverseasDelivery = () => {
    setState({
      ...state,
      askoverseasdelivery: true,
      notaskoverseasdelivery: false,
    });
  };
  const handleChangeNotAskOverseasDelivery = () => {
    setState({
      ...state,
      notaskoverseasdelivery: true,
      askoverseasdelivery: false,
      overseas_target_port: undefined,
      overseas_workplace: undefined,
      overseas_workplace_address: undefined,
      textcbm: undefined,
      textkg: undefined,
    });
  };
  return (
    <>
      <div className={classes.block_title}>
        海外配送の見積有無を選択してください。
      </div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.askoverseasdelivery ? styles.blue : styles.button}
          onClick={handleChangeAskOverseasDelivery}
        >
          依頼する
        </Button>
        <Button
          variant="outlined"
          className={state.notaskoverseasdelivery ? styles.blue : styles.button}
          onClick={handleChangeNotAskOverseasDelivery}
        >
          依頼しない
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default OverseasDelivery;
