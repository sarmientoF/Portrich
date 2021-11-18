import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";
import { ReactComponent as Ocean } from "../../dist/images/ocean.svg";
import { ReactComponent as Track } from "../../dist/images/track.svg";

const ShipOrTruck = (props) => {
  const { state, setState, styles } = props;

  const handleChangeOcean = () => {
    setState({
      ...state,
      ocean: true,
      truck: false,
      isexport: undefined,
      isimport: undefined,
      plural: undefined,
      spot: undefined,
      plural_month: undefined,
      spot_month: undefined,
      fob: undefined,
      exw: undefined,
      cfr: undefined,
      cif: undefined,
      dap: undefined,
      ddp: undefined,
      fcl: undefined,
      lcl: undefined,
      containertype: undefined,
      departure_port: undefined,
      arrival_port: undefined,
      cargoname: undefined,
      askdomesticcustoms: undefined,
      notaskdomesticcustoms: undefined,
      askdomesticdelivery: undefined,
      notaskdomesticdelivery: undefined,
      loading_oneself: undefined,
      loading_Joint: undefined,
      loading_request: undefined,
      domestic: undefined,
      overseas: undefined,
      domestic_target_port: undefined,
      domestic_working_hours: undefined,
      domestic_workplace: undefined,
      domestic_workplace_address: undefined,
      askoverseascustoms: undefined,
      notaskoverseascustoms: undefined,
      askoverseasdelivery: undefined,
      notaskoverseasdelivery: undefined,
      overseas_target_port: undefined,
      overseas_workplace: undefined,
      overseas_workplace_address: undefined,
      textcbm: undefined,
      textkg: undefined,
      light_truck: undefined,
      two_ton_truck: undefined,
      four_ton_truck: undefined,
      ten_ton_truck: undefined,
    });
  };
  const handleChangeTruck = () => {
    setState({
      ...state,
      truck: true,
      ocean: false,
      isexport: undefined,
      isimport: undefined,
      plural: undefined,
      spot: undefined,
      plural_month: undefined,
      spot_month: undefined,
      fob: undefined,
      exw: undefined,
      cfr: undefined,
      cif: undefined,
      dap: undefined,
      ddp: undefined,
      fcl: undefined,
      lcl: undefined,
      containertype: undefined,
      departure_port: undefined,
      arrival_port: undefined,
      cargoname: undefined,
      askdomesticcustoms: undefined,
      notaskdomesticcustoms: undefined,
      askdomesticdelivery: undefined,
      notaskdomesticdelivery: undefined,
      loading_oneself: undefined,
      loading_Joint: undefined,
      loading_request: undefined,
      domestic: undefined,
      overseas: undefined,
      domestic_target_port: undefined,
      domestic_working_hours: undefined,
      domestic_workplace: undefined,
      domestic_workplace_address: undefined,
      askoverseascustoms: undefined,
      notaskoverseascustoms: undefined,
      askoverseasdelivery: undefined,
      notaskoverseasdelivery: undefined,
      overseas_target_port: undefined,
      overseas_workplace: undefined,
      overseas_workplace_address: undefined,
      textcbm: undefined,
      textkg: undefined,
      light_truck: undefined,
      two_ton_truck: undefined,
      four_ton_truck: undefined,
      ten_ton_truck: undefined,
    });
  };
  return (
    <>
      <div className={classes.block_title}></div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.ocean ? styles.blue : styles.button}
          onClick={handleChangeOcean}
        >
          <Ocean className={styles.icon} />
          Ocean
        </Button>
        <Button
          variant="outlined"
          className={state.truck ? styles.blue : styles.button}
          onClick={handleChangeTruck}
        >
          <Track className={styles.icon} />
          Truck Only
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default ShipOrTruck;
