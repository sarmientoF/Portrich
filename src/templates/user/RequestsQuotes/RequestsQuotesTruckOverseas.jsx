import React from "react";
import classes from "../../../dist/css/requests_quotes.module.css";
import {
  OverseasLandTransportation,
  RequestsQuotesDialog,
} from "../../../components/requestsquotes/index";

const RequestsQuotesTruckOverseas = (props) => {
  const { state, setState, styles, portList, containerTypeList } = props;

  return (
    <>
      <OverseasLandTransportation
        portList={portList}
        state={state}
        setState={setState}
        styles={styles}
        containerTypeList={containerTypeList}
      />
      <div className={classes.mb_30}></div>
      <RequestsQuotesDialog state={state} setState={setState} styles={styles} />
    </>
  );
};

export default RequestsQuotesTruckOverseas;
