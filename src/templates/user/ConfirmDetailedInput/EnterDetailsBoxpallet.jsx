import React from "react";
import classes from "../../../dist/css/enter_detail.module.css";
import { EnterDetailHead, EnterDetailListBoxPallet } from "../../index";

const EnterDetailsBoxpallet = (props) => {
  const { state, setState } = props;
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <EnterDetailHead />
        <div className={classes.block}>
          <EnterDetailListBoxPallet state={state} setState={setState} />
        </div>
      </div>
    </section>
  );
};

export default EnterDetailsBoxpallet;
