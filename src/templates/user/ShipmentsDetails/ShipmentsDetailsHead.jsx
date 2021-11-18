import React from "react";
import { useSelector } from "react-redux";
import classes from "../../../dist/css/shipments_detail.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import { Link } from "react-router-dom";
import { getIsStaff } from "../../../reducks/users/selectors";
import {
  convertToCargoStatusId,
  isExport,
  whichShippingType,
} from "../../../common/utils";

const ShipmentsDetailsHead = (props) => {
  const { cargoStatus, queryParameters } = props;
  const selector = useSelector((state) => state);
  const isStaff = getIsStaff(selector);

  return (
    <div className={classes.main_head}>
      <div className={classes.main_head_title}>
        <p>
          <Link className={classes_Common.page_back} to="/shipments">
            ＜ 貨物状況一覧
          </Link>
          {convertToCargoStatusId(
            cargoStatus.booking_id,
            cargoStatus.created_at,
            isExport(cargoStatus.departure_port_name),
            whichShippingType(queryParameters.shipping_type_id)
          )}
          {isStaff ? "　" + cargoStatus.users_company_name : ""}
        </p>
      </div>
    </div>
  );
};

export default ShipmentsDetailsHead;
