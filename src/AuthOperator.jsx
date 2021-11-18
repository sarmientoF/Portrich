import React from "react";
import { useSelector } from "react-redux";
import { getIsStaff } from "./reducks/users/selectors";

const AuthOperator = ({ children }) => {
  const selector = useSelector((state) => state);
  const isStaff = getIsStaff(selector);

  if (!isStaff) {
    return <></>;
  } else {
    return children;
  }
};

export default AuthOperator;
