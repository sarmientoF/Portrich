import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/billings.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import { fetchCargoStatuses } from "./items/operations";
import {
  convertToCargoStatusId,
  isExport,
  whichShippingType,
} from "../../../common/utils";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { AppConfig } from "../../../common/config";

const ENDPOINTS = {
  FILE_DOWNLOAD_BILLOFLOADINGS:
    "/api/v1/cargo_statuses/billoflagings/download/",
  FILE_DOWNLOAD_PERMITCERTIFCATES:
    "/api/v1/cargo_statuses/permitcertificates/download/",
  FILE_DOWNLOAD_PAYMENTINVOICEES:
    "/api/v1/cargo_statuses/paymentinvoices/download/",
};

const useStyles = makeStyles((theme) => ({
  enableButton: {
    background: "#0052cc",
    color: "#fff",
  },
  disableButton: {},
}));

const widthList = [
  { width: "8%" },
  { width: "7%" },
  { width: "11%" },
  { width: "11%" },
  { width: "11%" },
  { width: "10%" },
  { width: "5.5%" },
  { width: "5.5%" },
  { width: "5.5%" },
  { width: "3%" },
  { width: "5%" },
  { width: "4.5%" },
  { width: "4.5%" },
  { width: "4.5%" },
];

const Billingstitle = [
  { title: "請求書No" },
  { title: "Booking No" },
  { title: "From" },
  { title: "To" },
  { title: "貨物種類" },
  { title: "M/V" },
  { title: "ETD" },
  { title: "ETA" },
  { title: "支払い期限" },
  { title: "状況" },
  { title: "請求金額" },
  { title: "BL" },
  { title: "請求書" },
  { title: "許可証" },
];

const BillingList = () => {
  const styles = useStyles();
  const [billingitems, setBillingItems] = useState([]);
  useEffect(() => {
    fetchCargoStatuses(setBillingItems);
  }, []);

  console.log(billingitems);
  return (
    <div className={classes.main_body}>
      <div className={classes.billing_head}>
        {Billingstitle.map((value, index) => (
          <div
            className={classes.billing_head_item}
            style={widthList[index]}
            key={index}
          >
            {value.title}
          </div>
        ))}
      </div>
      <div>
        {billingitems.map((item, index) => (
          <div className={classes.billing_body} key={index}>
            <div className={classes.billing_body_item} style={widthList[0]}>
              {convertToCargoStatusId(
                item.booking_id,
                item.created_at,
                isExport(item.departure_port_name),
                whichShippingType(item.shipping_type_id)
              )}
            </div>
            <div className={classes.billing_body_item} style={widthList[1]}>
              {item.booking_no}
            </div>
            <div className={classes.billing_body_item} style={widthList[2]}>
              {item.departure_port_name}
            </div>
            <div className={classes.billing_body_item} style={widthList[3]}>
              {item.arrival_port_name}
            </div>
            <div className={classes.billing_body_item} style={widthList[4]}>
              {item.cargo_name_name}
            </div>
            <div className={classes.billing_body_item} style={widthList[5]}>
              {item.vessel_name + " / " + item.voyage_no}
            </div>
            <div className={classes.billing_body_item} style={widthList[6]}>
              {(item.departure_date &&
                item.departure_date.replaceAll(/-/g, "/")) ||
                "-"}
            </div>
            <div className={classes.billing_body_item} style={widthList[7]}>
              {(item.departure_date &&
                item.arrival_date.replaceAll(/-/g, "/")) ||
                "-"}
            </div>
            <div className={classes.billing_body_item} style={widthList[8]}>
              {(item.payment_deadline &&
                item.payment_deadline.replaceAll(/-/g, "/")) ||
                "-"}
            </div>
            <div className={classes.billing_body_item} style={widthList[9]}>
              {item.is_paied ? (
                <span className={classes_Common.text_info}>支払済</span>
              ) : (
                <span className={classes_Common.text_denger}>未払い</span>
              )}
            </div>
            <div className={classes.billing_body_item} style={widthList[10]}>
              ¥{Number(item.total_jpy).toLocaleString()}
            </div>
            <div className={classes.billing_body_item} style={widthList[11]}>
              {item.bill_of_lading_id === null ? (
                <Button
                  variant="contained"
                  className={styles.disableButton}
                  disabled
                >
                  BL
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={styles.enableButton}
                  href={`${AppConfig.api.url}${ENDPOINTS.FILE_DOWNLOAD_BILLOFLOADINGS}${item.bill_of_lading_id}/`}
                >
                  BL
                </Button>
              )}
            </div>
            <div className={classes.billing_body_item} style={widthList[12]}>
              {item.payment_invoice_id === null ? (
                <Button
                  variant="contained"
                  className={styles.disableButton}
                  disabled
                >
                  請求書
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={styles.enableButton}
                  href={`${AppConfig.api.url}${ENDPOINTS.FILE_DOWNLOAD_PAYMENTINVOICEES}${item.payment_invoice_id}/`}
                >
                  請求書
                </Button>
              )}
            </div>
            <div className={classes.billing_body_item} style={widthList[13]}>
              {item.permit_certificate_id === null ? (
                <Button
                  variant="contained"
                  className={styles.disableButton}
                  disabled
                >
                  許可証
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={styles.enableButton}
                  href={`${AppConfig.api.url}${ENDPOINTS.FILE_DOWNLOAD_PERMITCERTIFCATES}${item.permit_certificate_id}/`}
                >
                  許可証
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingList;
