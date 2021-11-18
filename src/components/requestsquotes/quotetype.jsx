import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const QuoteType = (props) => {
  const { state, setState, styles } = props;

  const handleChangePlural = () => {
    setState({ ...state, plural: true, spot: false, spot_month: undefined });
  };
  const handleChangeSpot = () => {
    setState({ ...state, spot: true, plural: false, plural_month: undefined });
  };
  return (
    <>
      <div className={classes.block_title}>見積タイプを選択してください。</div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.plural ? styles.blue : styles.button}
          onClick={handleChangePlural}
        >
          定期見積
        </Button>
        <Button
          variant="outlined"
          className={state.spot ? styles.blue : styles.button}
          onClick={handleChangeSpot}
        >
          スポット見積
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default QuoteType;
