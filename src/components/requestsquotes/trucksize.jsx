import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const TruckSize = (props) => {
  const { state, setState, styles } = props;

  const handleChangelightTruck = () => {
    setState({
      ...state,
      light_truck: true,
      two_ton_truck: false,
      four_ton_truck: false,
      ten_ton_truck: false,
    });
  };
  const handleChange2tTruck = () => {
    setState({
      ...state,
      light_truck: false,
      two_ton_truck: true,
      four_ton_truck: false,
      ten_ton_truck: false,
    });
  };
  const handleChange4tTruck = () => {
    setState({
      ...state,
      light_truck: false,
      two_ton_truck: false,
      four_ton_truck: true,
      ten_ton_truck: false,
    });
  };
  const handleChange10tTruck = () => {
    setState({
      ...state,
      light_truck: false,
      two_ton_truck: false,
      four_ton_truck: false,
      ten_ton_truck: true,
    });
  };

  return (
    <>
      <div className={classes.block_title}>
        トラックのサイズを選択してください。
      </div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.light_truck ? styles.blue : styles.button}
          onClick={handleChangelightTruck}
        >
          軽トラック
        </Button>
        <Button
          variant="outlined"
          className={state.two_ton_truck ? styles.blue : styles.button}
          onClick={handleChange2tTruck}
        >
          2tトラック
        </Button>
        <Button
          variant="outlined"
          className={state.four_ton_truck ? styles.blue : styles.button}
          onClick={handleChange4tTruck}
        >
          4tトラック
        </Button>
        <Button
          variant="outlined"
          className={state.ten_ton_truck ? styles.blue : styles.button}
          onClick={handleChange10tTruck}
        >
          10tトラック
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default TruckSize;
