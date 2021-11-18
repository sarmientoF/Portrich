import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import { Button } from "@material-ui/core/";

const DomesticLandLoading = (props) => {
  const { state, setState, styles } = props;

  const handleChangeLoadingOneSelf = () => {
    setState({
      ...state,
      loading_oneself: true,
      loading_Joint: false,
      loading_request: false,
    });
  };
  const handleChangeLoadingJoint = () => {
    setState({
      ...state,
      loading_oneself: false,
      loading_Joint: true,
      loading_request: false,
    });
  };
  const handleChangeLoadingRequest = () => {
    setState({
      ...state,
      loading_oneself: false,
      loading_Joint: false,
      loading_request: true,
    });
  };
  return (
    <>
      <div className={classes.block_title}>積載の依頼を選択してください。</div>
      <div className={classes.flex_wrap}>
        <Button
          variant="outlined"
          className={state.loading_oneself ? styles.blue : styles.button}
          onClick={handleChangeLoadingOneSelf}
        >
          自力
        </Button>
        <Button
          variant="outlined"
          className={state.loading_Joint ? styles.blue : styles.button}
          onClick={handleChangeLoadingJoint}
        >
          共同
        </Button>
        <Button
          variant="outlined"
          className={state.loading_request ? styles.blue : styles.button}
          onClick={handleChangeLoadingRequest}
        >
          依頼する
        </Button>
      </div>
      <div className={classes.mb_30}></div>
    </>
  );
};
export default DomesticLandLoading;
