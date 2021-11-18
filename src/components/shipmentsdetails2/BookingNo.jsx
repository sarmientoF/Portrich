import React, { useCallback, useEffect, useState } from "react";
import classes from "../../dist/css/shipments_detail2.module.css";
import { ReactComponent as Edit } from "../../dist/images/edit_bookingNo.svg";

const BookingNo = () => {
  const [bookingNo, setBookingNo] = useState("bookingNo");
  const [toggle, setToggle] = useState(true);

  const inputText = useCallback((e) => {
    setBookingNo(e.target.value);
  });

  return (
    <div className={classes.booking_wrap}>
      {toggle ? (
        <div className={classes.booking_no}>ユーザー管理番号/{bookingNo}</div>
      ) : (
        <div className={classes.booking_no2}>
          ユーザー管理番号/
          <input
            className={classes.booking_input}
            type="text"
            value={bookingNo}
            onChange={inputText}
            autoFocus={true}
            onBlur={() => setToggle(true)}
          ></input>
        </div>
      )}
      <Edit onClick={() => setToggle(!toggle)} />
    </div>
  );
};

export default BookingNo;
