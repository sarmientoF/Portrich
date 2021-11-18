import React from "react";
import {
  RequestsQuotesTruckOverseas,
  RequestsQuotesTruckDomestic,
} from "../../index";
import {
  ImportExport,
  TransportationForm,
  DomesticOrOverseas,
} from "../../../components/requestsquotes/index";

const RequestsQuotesTruck = (props) => {
  const { state, setState, styles, portList, containerTypeList } = props;

  return (
    <>
      <DomesticOrOverseas state={state} setState={setState} styles={styles} />
      <ImportExport state={state} setState={setState} styles={styles} />
      <TransportationForm state={state} setState={setState} styles={styles} />
      {state.domestic === undefined && state.overseas === undefined ? (
        <></>
      ) : state.domestic ? (
        <RequestsQuotesTruckDomestic
          state={state}
          setState={setState}
          styles={styles}
          portList={portList}
          containerTypeList={containerTypeList}
        />
      ) : state.overseas ? (
        <RequestsQuotesTruckOverseas
          state={state}
          setState={setState}
          styles={styles}
          portList={portList}
          containerTypeList={containerTypeList}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default RequestsQuotesTruck;
