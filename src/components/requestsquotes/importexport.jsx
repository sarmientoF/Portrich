import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const ImportExport = (props) => {
  const { state, setState, styles } = props;

  const handleChangeExport = () => {
    setState({
      ...state,
      isexport: true,
      isimport: false,
      exw: undefined,
      fob: undefined,
    });
  };
  const handleChangeImport = () => {
    setState({
      ...state,
      isimport: true,
      isexport: false,
      cfr: undefined,
      cif: undefined,
      dap: undefined,
      ddp: undefined,
    });
  };
  return (
    <>
      <div className={classes.block_title}>輸出入を選択して下さい。</div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.isexport ? styles.blue : styles.button}
          onClick={handleChangeExport}
        >
          輸出
        </Button>
        <Button
          variant="outlined"
          className={state.isimport ? styles.blue : styles.button}
          onClick={handleChangeImport}
        >
          輸入
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default ImportExport;
