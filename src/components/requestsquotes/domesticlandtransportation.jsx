import React from "react";
import {
  DomesticWorkplace,
  DomesticWorkPalceAddress,
  DomesticWorkingHour,
  DomesticLandLoading,
  DomesticTargetPort,
  TruckSize,
  SelectContainerType,
} from "./index";

const DomesticLandTransportation = (props) => {
  const { portList, state, setState, styles, containerTypeList } = props;

  return (
    <>
      <DomesticWorkplace state={state} setState={setState} styles={styles} />
      <DomesticWorkPalceAddress
        state={state}
        setState={setState}
        styles={styles}
      />
      <DomesticTargetPort
        portList={portList}
        state={state}
        setState={setState}
        styles={styles}
      />
      {state.fcl && state.truck ? (
        <SelectContainerType
          state={state}
          setState={setState}
          styles={styles}
          containerTypeList={containerTypeList}
        />
      ) : state.lcl ? (
        <>
          <TruckSize state={state} setState={setState} styles={styles} />
          <DomesticLandLoading
            state={state}
            setState={setState}
            styles={styles}
          />
        </>
      ) : (
        <></>
      )}
      {state.fcl ? (
        <DomesticWorkingHour
          state={state}
          setState={setState}
          styles={styles}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default DomesticLandTransportation;
