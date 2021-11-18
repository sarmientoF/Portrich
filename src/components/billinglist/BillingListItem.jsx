import React from "react";
import classes from "../../dist/css/billinglist.module.css";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main_button: {
    width: "90%",
    fontSize: 12,
    padding: "4px 8px",
    background: "#0052cc",
    color: "#fff",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "#0052cc",
      opacity: "0.8",
      color: "#fff",
    },
  },
  gray_button: {
    width: "35%",
    fontSize: 12,
    padding: 2,
    background: "#F2F3F5",
    color: "#7D7D7D",
    margin: theme.spacing(0.2),
    textAlign: "center",
    textTransform: "capitalize",
    boxShadow: "none",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "#F2F3F5",
      opacity: "0.8",
      color: "#7D7D7D",
    },
  },
}));

const BillingListItem = () => {
  const styles = useStyles();
  const denger = { color: "#f86967", fontWeight: "bold" };
  return (
    <div className={classes.billing_area}>
      <div className={classes.billing_area_item_area}>
        <div className={classes.billing_area_item_area_booking_no}>123456</div>
        <div className={classes.billing_area_item_area_depature}>
          <div className={classes.billing_area_item_area_depature_title}>
            kawasaki Port/Japan
          </div>
          <div className={classes.billing_area_item_area_depature_text}>
            ETD：2021-7-30
          </div>
        </div>
        <div className={classes.billing_area_item_area_arrival}>
          <div className={classes.billing_area_item_area_arrival_title}>
            Sint Eustatius, Bonairem;l
          </div>
          <div className={classes.billing_area_item_area_arrival_text}>
            ETD：2021-7-30
          </div>
        </div>
        <div className={classes.billing_area_item_area_cargo}>
          Garments,Adhesive tape, Garments
        </div>
        <div className={classes.billing_area_item_area_payment_status}>
          <div
            className={classes.billing_area_item_area_payment_status_title}
            style={denger}
          >
            未払い
          </div>
          <div className={classes.billing_area_item_area_payment_status_text}>
            期限：2021-7-30
          </div>
        </div>
        <div className={classes.billing_area_item_area_price}>
          <span className={classes.usd}>USD</span>6,410
        </div>
        <div className={classes.billing_area_item_area_downroad}>
          <Button variant="contained" className={styles.main_button}>
            ダウンロード
          </Button>
        </div>
        <div className={classes.billing_area_item_area_other}>
          <Button variant="contained" className={styles.gray_button}>
            許可証
          </Button>
          <Button variant="contained" className={styles.gray_button}>
            BL
          </Button>
        </div>
      </div>
      <div className={classes.billing_area_item_area}>
        <div className={classes.billing_area_item_area_booking_no}>123456</div>
        <div className={classes.billing_area_item_area_depature}>
          <div className={classes.billing_area_item_area_depature_title}>
            kawasaki Port/Japan
          </div>
          <div className={classes.billing_area_item_area_depature_text}>
            ETD：2021-7-30
          </div>
        </div>
        <div className={classes.billing_area_item_area_arrival}>
          <div className={classes.billing_area_item_area_arrival_title}>
            Sint Eustatius, Bonairem;l
          </div>
          <div className={classes.billing_area_item_area_arrival_text}>
            ETD：2021-7-30
          </div>
        </div>
        <div className={classes.billing_area_item_area_cargo}>
          Garments,Adhesive tape, Garments
        </div>
        <div className={classes.billing_area_item_area_payment_status}>
          <div className={classes.billing_area_item_area_payment_status_title}>
            未払済
          </div>
          <div className={classes.billing_area_item_area_payment_status_text}>
            期限：2021-7-30
          </div>
        </div>
        <div className={classes.billing_area_item_area_price}>
          <span className={classes.usd}>USD</span>6,410
        </div>
        <div className={classes.billing_area_item_area_downroad}>
          <Button variant="contained" className={styles.main_button}>
            ダウンロード
          </Button>
        </div>
        <div className={classes.billing_area_item_area_other}>
          <Button variant="contained" className={styles.gray_button}>
            許可証
          </Button>
          <Button variant="contained" className={styles.gray_button}>
            BL
          </Button>
        </div>
      </div>
    </div>
  );
};
export default BillingListItem;
