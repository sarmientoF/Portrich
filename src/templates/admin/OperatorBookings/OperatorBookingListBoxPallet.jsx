import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/bookings.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import ShipIconInfo from "../../../dist/images/shipinfo.png";
import TruckIconInfo from "../../../dist/images/truckinfo.png";
import TruckIconGray from "../../../dist/images/truckgray.png";
import CustomIconInfo from "../../../dist/images/customsinfo.png";
import CustomIconGray from "../../../dist/images/customsgray.png";
import { fetchViewForBookingBoxPallets } from "./items/operations";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { convertToBookingIdOfBoxPallet } from "../../../common/utils";

const useStyles = makeStyles((theme) => ({
  enableButton: {
    background: "#0052cc",
    color: "#fff",
    width: "60%",
  },
  disableButton: {},
}));

const widthList = [
  { width: "8%" },
  { width: "9%" },
  { width: "9%" },
  { width: "12%" },
  { width: "13%" },
  { width: "13%" },
  { width: "13%" },
  { width: "8%" },
  { width: "7%" },
  { width: "7%" },
];
const Bookingstitle = [
  { title: "Case No" },
  { title: "顧客名" },
  { title: "Booking No" },
  { title: "Carrier" },
  { title: "From" },
  { title: "To" },
  { title: "貨物名" },
  { title: "依頼項目" },
  { title: "状況" },
  { title: "Cancel" },
  { title: "" },
];

const OperatorBookingListBoxPallet = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchViewForBookingBoxPallets(setItems);
  }, []);

  const tobookingdetails = (item) => {
    const params = addBookingDetails(item);
    const url = `/operator/booking/detail/boxpallet?${params}`;
    dispatch(push(url));
  };
  const addBookingDetails = (item) => {
    const params = new URLSearchParams();
    params.append("id", item.id);
    return params.toString();
  };

  const isExport = (departure_port_name) => {
    if (departure_port_name.includes("Japan")) {
      return `E`;
    } else {
      return `I`;
    }
  };

  return (
    <div className={classes.main_body}>
      <div className={classes.bookings_head}>
        {Bookingstitle.map((value, index) => (
          <div
            className={classes.bookings_head_item}
            style={widthList[index]}
            key={index}
          >
            {value.title}
          </div>
        ))}
      </div>
      <div>
        {items.map((item, index) => (
          <div className={classes.bookings_body} key={index}>
            <div className={classes.bookings_body_item} style={widthList[0]}>
              {convertToBookingIdOfBoxPallet(
                item.id,
                item.created_at,
                isExport(item.departure_port_name)
              )}
            </div>
            <div className={classes.bookings_body_item} style={widthList[1]}>
              {item.users_company_name}
            </div>
            <div className={classes.bookings_body_item} style={widthList[2]}>
              {item.booking_no}
            </div>
            <div className={classes.bookings_body_item} style={widthList[3]}>
              {item.shipping_company_name}
            </div>
            <div className={classes.bookings_body_item} style={widthList[4]}>
              {item.departure_port_name}
            </div>
            <div className={classes.bookings_body_item} style={widthList[5]}>
              {item.arrival_port_name}
            </div>
            <div className={classes.bookings_body_item} style={widthList[6]}>
              {item.cargo_name_name}
            </div>
            <div
              className={classes.bookings_body_item_img}
              style={widthList[7]}
            >
              <img className={classes.bookings_img} src={ShipIconInfo} />
              <img
                className={classes.bookings_img}
                src={
                  item.need_customs_documents === true
                    ? CustomIconInfo
                    : CustomIconGray
                }
              />
              <img
                className={classes.bookings_img}
                src={
                  item.need_drayage_shipping === true
                    ? TruckIconInfo
                    : TruckIconGray
                }
              />
            </div>
            <div className={classes.bookings_body_item} style={widthList[8]}>
              {item.is_exists_cargo_status ? (
                <span className={classes_Common.text_info}>Booking完了</span>
              ) : item.is_canceled ? (
                <span className={classes_Common.text_denger}>Cancel</span>
              ) : item.is_not_established ? (
                <span className={classes_Common.text_denger}>不成立</span>
              ) : (
                <span className={classes_Common.text_gray}>Booking未完了</span>
              )}
            </div>
            <div className={classes.bookings_body_item} style={widthList[9]}>
              <Button
                variant="contained"
                className={styles.enableButton}
                onClick={() => tobookingdetails(item)}
              >
                詳細
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperatorBookingListBoxPallet;
