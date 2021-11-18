import React from "react";
import classes from "../../../dist/css/requests_quotes.module.css";

import {
  ImportExport,
  QuoteType,
  Incotermses,
  TransportationForm,
  DomesticCustoms,
  DomesticDelivery,
  OverseasCustoms,
  OverseasDelivery,
  OverseasLandTransportation,
  DomesticLandTransportation,
  SelectMonthSpot,
  SelectMonthPlural,
  SelectCargo,
  SelectPorts,
  SelectContainerType,
  RequestsQuotesDialog,
} from "../../../components/requestsquotes/index";

const RequestsQuotesOcean = (props) => {
  const {
    state,
    setState,
    styles,
    portList,
    containerTypeList,
    cargoNameList,
  } = props;

  return (
    <>
      <div className={classes.main_body_sub_title}>海上輸送</div>
      <ImportExport state={state} setState={setState} styles={styles} />
      <QuoteType state={state} setState={setState} styles={styles} />
      {state.spot ? (
        <SelectMonthSpot state={state} setState={setState} styles={styles} />
      ) : (
        <SelectMonthPlural state={state} setState={setState} styles={styles} />
      )}
      <Incotermses state={state} setState={setState} styles={styles} />
      <TransportationForm state={state} setState={setState} styles={styles} />
      {state.fcl ? (
        <SelectContainerType
          containerTypeList={containerTypeList}
          state={state}
          setState={setState}
          styles={styles}
        />
      ) : (
        <></>
      )}
      <SelectPorts
        portList={portList}
        state={state}
        setState={setState}
        styles={styles}
      />
      <SelectCargo
        cargoNameList={cargoNameList}
        state={state}
        setState={setState}
        styles={styles}
      />
      <DomesticCustoms state={state} setState={setState} styles={styles} />
      <DomesticDelivery state={state} setState={setState} styles={styles} />
      {state.askdomesticdelivery ? (
        <DomesticLandTransportation
          portList={portList}
          state={state}
          setState={setState}
          styles={styles}
        />
      ) : (
        <></>
      )}
      {state.exw || state.dap || state.ddp ? (
        <>
          <OverseasCustoms state={state} setState={setState} styles={styles} />
          <OverseasDelivery state={state} setState={setState} styles={styles} />
          {state.askoverseasdelivery ? (
            <OverseasLandTransportation
              portList={portList}
              state={state}
              setState={setState}
              styles={styles}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <div className={classes.mb_30}></div>
      <RequestsQuotesDialog state={state} setState={setState} styles={styles} />
    </>
  );
};

export default RequestsQuotesOcean;
