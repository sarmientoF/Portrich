import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/bookings.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import ShipIconInfo from "../../../dist/images/shipinfo.png";
import TruckIconInfo from "../../../dist/images/truckinfo.png";
import TruckIconGray from "../../../dist/images/truckgray.png";
import CustomIconInfo from "../../../dist/images/customsinfo.png";
import CustomIconGray from "../../../dist/images/customsgray.png";
import { fetchViewForBookingsConatiners } from "./items/operations";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BookingsContainerCancelDialog } from "../../index";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { convertToBookingIdOfContainer } from "../../../common/utils";

const useStyles = makeStyles((theme) => ({
  enableButton: {
    background: "#0052cc",
    color: "#fff",
    width: "98%",
  },
  disableButton: {
    width: "95%",
  },
  cancelButton: {
    width: "65%",
    background: "#fff",
    border: "solid 1px #0052cc",
    color: "#0052cc",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #C0C0C0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const widthList = [
  { width: "8%" },
  { width: "11%" },
  { width: "11%" },
  { width: "13%" },
  { width: "13%" },
  { width: "11%" },
  { width: "10%" },
  { width: "8%" },
  { width: "7%" },
  { width: "7%" },
];
const Bookingstitle = [
  { title: "Case No" },
  { title: "Booking No" },
  { title: "Carrier" },
  { title: "From" },
  { title: "To" },
  { title: "貨物名" },
  { title: "依頼項目" },
  { title: "状況" },
  { title: "Download" },
  { title: "Cancel" },
];

const BookingListContainer = () => {
  const styles = useStyles();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchViewForBookingsConatiners(setItems);
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
              {convertToBookingIdOfContainer(
                item.id,
                item.created_at,
                isExport(item.departure_port_name)
              )}
            </div>
            <div className={classes.bookings_body_item} style={widthList[1]}>
              {item.booking_no}
            </div>
            <div className={classes.bookings_body_item} style={widthList[2]}>
              {item.shipping_company_name}
            </div>
            <div className={classes.bookings_body_item} style={widthList[3]}>
              {item.departure_port_name}
            </div>
            <div className={classes.bookings_body_item} style={widthList[4]}>
              {item.arrival_port_name}
            </div>
            <div className={classes.bookings_body_item} style={widthList[5]}>
              {item.cargo_name_name}
            </div>
            <div
              className={classes.bookings_body_item_img}
              style={widthList[6]}
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
            <div className={classes.bookings_body_item} style={widthList[7]}>
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
            <div className={classes.bookings_body_item} style={widthList[8]}>
              {item.si === null ? (
                <Button
                  variant="contained"
                  className={styles.disableButton}
                  disabled
                >
                  {item.need_customs_documents
                    ? "作業確認書未完了"
                    : item.need_drayage_shipping && !item.need_customs_documents
                    ? "S/I・作業確認書未完了"
                    : "S/I未完了"}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={styles.enableButton}
                  target="_blank"
                  href={`${item.si}`}
                >
                  {item.need_customs_documents
                    ? "作業確認書"
                    : item.need_drayage_shipping && !item.need_customs_documents
                    ? "S/I・作業確認書"
                    : "S/I"}
                </Button>
              )}
            </div>
            <div className={classes.bookings_body_item} style={widthList[9]}>
              <BookingsContainerCancelDialog
                handleOpen={handleOpen}
                item={item}
              />
            </div>
          </div>
        ))}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            <h2 id="transition-modal-title">Cancelが完了しました。</h2>
            <p id="transition-modal-description">
              再度Bookingをご希望の場合はお手数ですが、見積一覧よりお願い致します。
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingListContainer;
