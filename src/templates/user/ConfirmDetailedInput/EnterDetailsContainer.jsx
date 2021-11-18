import React from "react";
import classes from "../../../dist/css/enter_detail.module.css";
import { EnterDetailHead, EnterDetailListContainer } from "../../index";

const EnterDetailsContainer = (props) => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <EnterDetailHead />
        <div className={classes.block}>
          <EnterDetailListContainer
            state={props.state}
            setState={props.setState}
          />
        </div>
      </div>
    </section>
  );
};

export default EnterDetailsContainer;
