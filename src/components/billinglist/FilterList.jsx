import React from "react";
import classes from "../../dist/css/billinglist.module.css";
import { ReactComponent as FilterIcon } from "../../dist/images/filtericn.svg";

const FilterList = () => {
  return (
    <div className={classes.filter_area}>
      <div className={classes.filter_booking_no}>
        <div>Booking No</div>
        <div>
          <FilterIcon />
        </div>
      </div>
      <div className={classes.filter_departure}>
        <div>出発地</div>
        <div>
          <FilterIcon />
        </div>
      </div>
      <div className={classes.filter_arrival}>
        <div>到着地</div>
        <div>
          <FilterIcon />
        </div>
      </div>
      <div className={classes.filter_cargo}>貨物名</div>
      <div className={classes.filter_payment_status}>支払い状況</div>
      <div className={classes.filter_price}>料金</div>
      <div className={classes.filter_downroad}>請求書</div>
      <div className={classes.filter_other}>その他</div>
    </div>
  );
};
export default FilterList;
