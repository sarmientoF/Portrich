import React from "react";
import classes from "../../../dist/css/operatorquotes_request.module.css";
import { OperatorQuotesRequestTabs } from "../../index";

const OperatorQuotesRequest = () => {
  return (
    <section className={classes.main}>
      <OperatorQuotesRequestTabs />
    </section>
  );
};

export default OperatorQuotesRequest;
