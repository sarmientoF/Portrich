import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const Incotermses = (props) => {
  const { state, setState, styles } = props;

  const handleChangeExw = () => {
    setState({
      ...state,
      exw: true,
      fob: false,
      cfr: false,
      cif: false,
      dap: false,
      ddp: false,
    });
  };
  const handleChangeFob = () => {
    setState({
      ...state,
      fob: true,
      exw: false,
      cfr: false,
      cif: false,
      dap: false,
      ddp: false,
      askoverseascustoms: undefined,
      notaskoverseascustoms: undefined,
      askoverseasdelivery: undefined,
      notaskoverseasdelivery: undefined,
      overseas_target_port: undefined,
      overseas_workplace: undefined,
      overseas_workplace_address: undefined,
      textcbm: undefined,
      textkg: undefined,
    });
  };
  const handleChangeCfr = () => {
    setState({
      ...state,
      cfr: true,
      exw: false,
      fob: false,
      cif: false,
      dap: false,
      ddp: false,
      askoverseascustoms: undefined,
      notaskoverseascustoms: undefined,
      askoverseasdelivery: undefined,
      notaskoverseasdelivery: undefined,
      overseas_target_port: undefined,
      overseas_workplace: undefined,
      overseas_workplace_address: undefined,
      textcbm: undefined,
      textkg: undefined,
    });
  };
  const handleChangeCif = () => {
    setState({
      ...state,
      cif: true,
      exw: false,
      fob: false,
      cfr: false,
      dap: false,
      ddp: false,
      askoverseascustoms: undefined,
      notaskoverseascustoms: undefined,
      askoverseasdelivery: undefined,
      notaskoverseasdelivery: undefined,
      overseas_target_port: undefined,
      overseas_workplace: undefined,
      overseas_workplace_address: undefined,
      textcbm: undefined,
      textkg: undefined,
    });
  };
  const handleChangeDap = () => {
    setState({
      ...state,
      dap: true,
      exw: false,
      fob: false,
      cfr: false,
      cif: false,
      ddp: false,
    });
  };
  const handleChangeDdp = () => {
    setState({
      ...state,
      ddp: true,
      exw: false,
      fob: false,
      cfr: false,
      cif: false,
      dap: false,
    });
  };
  return (
    <>
      <div className={classes.block_title}>
        インコタームズを選択して下さい。
      </div>
      <div className={classes.flex_wrap}>
        {state.isimport ? (
          <>
            <Button
              variant="outlined"
              className={state.exw ? styles.blue : styles.button}
              onClick={handleChangeExw}
            >
              EXW
            </Button>
            <Button
              variant="outlined"
              className={state.fob ? styles.blue : styles.button}
              onClick={handleChangeFob}
            >
              FOB
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outlined"
              className={state.cfr ? styles.blue : styles.button}
              onClick={handleChangeCfr}
            >
              CFR
            </Button>
            <Button
              variant="outlined"
              className={state.cif ? styles.blue : styles.button}
              onClick={handleChangeCif}
            >
              CIF
            </Button>
            <Button
              variant="outlined"
              className={state.dap ? styles.blue : styles.button}
              onClick={handleChangeDap}
            >
              DAP
            </Button>
            <Button
              variant="outlined"
              className={state.ddp ? styles.blue : styles.button}
              onClick={handleChangeDdp}
            >
              DDP
            </Button>
          </>
        )}
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default Incotermses;
