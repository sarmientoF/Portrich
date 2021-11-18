import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const DomesticCustoms = (props) => {
  const { state, setState, styles } = props;

  const handleChangeAskDomesticCustoms = () => {
    setState({
      ...state,
      askdomesticcustoms: true,
      notaskdomesticcustoms: false,
    });
  };
  const handleChangeNotAskDomesticCustoms = () => {
    setState({
      ...state,
      notaskdomesticcustoms: true,
      askdomesticcustoms: false,
    });
  };
  return (
    <>
      <div className={classes.mb_60}></div>
      <div className={classes.main_body_sub_title}>国内作業</div>
      <div className={classes.block_title}>
        国内通関の見積有無を選択してください。
      </div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.askdomesticcustoms ? styles.blue : styles.button}
          onClick={handleChangeAskDomesticCustoms}
        >
          依頼する
        </Button>
        <Button
          variant="outlined"
          className={state.notaskdomesticcustoms ? styles.blue : styles.button}
          onClick={handleChangeNotAskDomesticCustoms}
        >
          依頼しない
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default DomesticCustoms;
