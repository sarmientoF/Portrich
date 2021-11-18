import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchCargoStatus } from "./cargo_status/operations";
import classes from "../../../dist/css/shipments_detail.module.css";
import {
  ShipmentsDetailsHead,
  ShipmentsDetailsTabs,
  ShipmentsDetailsProgress,
  ShipmentsDetail,
} from "../../index";

const ShipmentsDetails = () => {
  const [queryParameters, setQueryParameters] = useState({});
  const [cargoStatus, setCargoStatus] = useState({});
  const location = useLocation();
  const [textStates, setTextStates] = useState({});
  const parseQueryStrings = (params) => {
    return [...new URLSearchParams(params).entries()].reduce(
      (acc, cur) => ({ ...acc, [cur[0]]: cur[1] }),
      {}
    );
  };

  useEffect(() => {
    const params = parseQueryStrings(location.search);
    setQueryParameters(params);
    if (
      isNaN(parseInt(params.cargo_status_id)) ||
      isNaN(parseInt(params.shipping_type_id))
    ) {
      window.confirm(
        "invalid query parameter: cargo_status_id and shipping_type_id must be set."
      );
      return;
    }
    fetchCargoStatus(
      params.cargo_status_id,
      params.shipping_type_id,
      setCargoStatus
    );
  }, []);

  return (
    <section className={classes.main}>
      <ShipmentsDetailsHead
        cargoStatus={cargoStatus}
        queryParameters={queryParameters}
      />
      <div className={classes.main_body}>
        <div className={classes.main_body_left}>
          <div className={classes.main_body_left_progress}>
            <ShipmentsDetailsProgress
              cargoStatus={cargoStatus}
              queryParameters={queryParameters}
            />
          </div>
          <div className={classes.main_body_left_action}>
            <ShipmentsDetailsTabs
              cargoStatus={cargoStatus}
              setCargoStatus={setCargoStatus}
              queryParameters={queryParameters}
              textStates={textStates}
              setTextStates={setTextStates}
            />
          </div>
        </div>
        <div className={classes.main_body_right}>
          <div>
            <div className={classes.main_body_right_details}>
              <ShipmentsDetail
                cargoStatus={cargoStatus}
                queryParameters={queryParameters}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipmentsDetails;
