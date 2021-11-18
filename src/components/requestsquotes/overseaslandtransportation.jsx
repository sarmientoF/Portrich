import React from "react";
import {
  OverseasWorkplace,
  OverseasWorkplaceAddress,
  OverseasTargetPort,
  SelectContainerType,
  TextCbm,
  TextKg,
} from "./index";

const OverseasLandTransportation = (props) => {
  const { portList, state, setState, styles, containerTypeList } = props;

  return (
    <>
      <OverseasWorkplace state={state} setState={setState} styles={styles} />
      <OverseasWorkplaceAddress
        state={state}
        setState={setState}
        styles={styles}
      />
      <OverseasTargetPort
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
          <TextCbm state={state} setState={setState} styles={styles} />
          <TextKg state={state} setState={setState} styles={styles} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default OverseasLandTransportation;
