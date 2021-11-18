import React, { useEffect, useState } from "react";
import classes from "../../dist/css/shipments.module.css";
import {
  convertToCargoStatusId,
  isExport,
  whichShippingType,
} from "../../common/utils";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  enableButton: {
    background: "#0052cc",
    color: "#fff",
  },
  disableButton: {},
}));

const ShipmentImportBookingCustom = (props) => {
  const { currentStateData, isStaff } = props;
  const styles = useStyles();
  // const [addstyles, setAddStules] = useState();

  return (
    <>
      {/* <div className={addstyles ? classes.shipments_item_selected : classes.shipments_item}
          onClick={() => setAddStules(true)}
        > */}
      <div className={classes.shipments_item}>
        <div className={classes.shipments_heading}>
          <p className={classes.job_no}>
            {convertToCargoStatusId(
              currentStateData.booking_id,
              currentStateData.created_at,
              isExport(currentStateData.departure_port_name),
              whichShippingType(currentStateData.shipping_type_id)
            )}
            {isStaff ? "　" + currentStateData.users_company_name : ""}
          </p>
          <p className={classes.weight}>
            {currentStateData.shipping_type_id === 2 ? "コンテナタイプ：" : ""}
            {currentStateData.shipping_type_id === 2
              ? currentStateData.container_type_name
              : ""}
          </p>
          <p className={classes.freetime}>
            FreeTime：
            {currentStateData.freetime}days
          </p>
        </div>
        <div className={classes.shipments_going}>
          <div className={classes.shipments_bar_erea}>
            <div className={classes.shipments_img_area}>
              <img
                className={classes.shipments_img}
                src={currentStateData.departure_ship}
              />
            </div>
            <div className={classes.shipments_hr_area}>
              {currentStateData.departure_ship_hr ? (
                <hr className={classes.shipments_hr_info} />
              ) : (
                <hr className={classes.shipments_hr_gray} />
              )}
            </div>
            <div className={classes.shipments_img_area}>
              <img
                className={classes.shipments_img}
                src={currentStateData.arrival_ship}
              />
            </div>
            <div className={classes.shipments_hr_area}>
              {currentStateData.arrival_ship_hr ? (
                <hr className={classes.shipments_hr_info} />
              ) : (
                <hr className={classes.shipments_hr_gray} />
              )}
            </div>
            <div className={classes.shipments_img_area}>
              <img
                className={classes.shipments_img}
                src={currentStateData.import_customs}
              />
            </div>
          </div>
          <div className={classes.shipments_date_erea}>
            <div className={classes.shipments_date_item}>
              <p className={classes.place_name}></p>
              <p className={classes.dep_date}>
                CUT日:<span>{currentStateData.changedcutdate}</span>
              </p>
            </div>
            <div className={classes.shipments_date_item}>
              <p className={classes.place_name}>
                {currentStateData.departure_port_name}
              </p>
              <p className={classes.arr_date}>
                出発日:<span>{currentStateData.changeddeparturedate}</span>
              </p>
            </div>
            <div className={classes.shipments_date_item}>
              <p className={classes.place_name}>
                {currentStateData.arrival_port_name}
              </p>
              <p className={classes.arr_date}>
                到着日:<span>{currentStateData.changedarrivaldate}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.shipments_btn_area}>
          <Button
            variant="contained"
            href={`shipment_detail/?cargo_status_id=${currentStateData.id}&shipping_type_id=${currentStateData.shipping_type_id}`}
            className={styles.enableButton}
          >
            詳細
          </Button>
        </div>
      </div>
    </>
  );
};
export default ShipmentImportBookingCustom;
