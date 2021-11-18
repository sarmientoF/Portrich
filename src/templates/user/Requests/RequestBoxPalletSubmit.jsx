import React from "react";
import classes from "../../../dist/css/request.module.css";
import { useDispatch } from "react-redux";
import { registerBoxPalletRequest } from "./items/operations";

const RequestBoxPalletSubmit = (props) => {
  const dispatch = useDispatch();
  const register = () => {
    registerBoxPalletRequest(
      props.shipping_type,
      props.selectedPortList,
      props.selectedCargo,
      dispatch
    );
  };

  return (
    <div className={classes.submit_area}>
      <input
        type="submit"
        className={classes.submit}
        value="見積依頼"
        onClick={register}
      />
    </div>
  );
};

export default RequestBoxPalletSubmit;
