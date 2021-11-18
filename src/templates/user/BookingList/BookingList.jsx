import React from "react";
import classes from "../../../dist/css/bookinglist.module.css";
import { ReactComponent as FilterIcon } from "../../../dist/images/filtericn.svg";
import { ReactComponent as Batu } from "../../../dist/images/batu.svg";
import { ReactComponent as Arrow } from "../../../dist/images/→.svg";
import {
  BookingHead,
  BookingButton,
} from "../../../components/bookinglist/index";

const headTitle = [
  { title: "Booking情報" },
  { title: "From", icon: true },
  { title: "" },
  { title: "To", icon: true },
  { title: "貨物名", icon: true },
  { title: "料金" },
];

const widthList = [
  { width: "21%" },
  { width: "13%" },
  { width: "2%" },
  { width: "16%" },
  { width: "16%" },
  { width: "10%" },
  { width: "6%" },
];

function createData(caseStatus, caseNumber, from, to, cargoName, price) {
  return { caseStatus, caseNumber, from, to, cargoName, price };
}

const contentItem = [
  createData(
    "Booking完了",
    "Case Number : 12345",
    "ETD：2021-7-30",
    "ETA：2021-7-30",
    "Aircraft, spacecraft, s...",
    "2,500$"
  ),
  createData(
    "依頼中",
    "Case Number : 12345",
    "ETD：2021-7-30",
    "ETA：2021-7-30",
    "Aircraft, spacecraft, s...",
    "2,500$"
  ),
  createData(
    "Booking不成立",
    "Case Number : 12345",
    "ETD：2021-7-30",
    "ETA：2021-7-30",
    "Aircraft, spacecraft, s...",
    "2,500$"
  ),
];

const colorJudge = (text) => {
  switch (text) {
    case "Booking完了":
      return classes.blue;
    case "依頼中":
      return classes.gray;
    case "Booking不成立":
      return classes.red;
    default:
      return classes.red;
  }
};

const BookingList = () => {
  return (
    <section className={classes.main}>
      <div className={classes.body}>
        <div className={classes.title}>Booking依頼一覧</div>
        <div className={classes.mb_30}></div>
        <BookingHead />
        <div className={classes.mb_30}></div>
        <div className={classes.content}>
          <ul className={classes.content_head_list}>
            {headTitle.map((value, index) => (
              <li
                className={classes.content_head_item}
                style={widthList[index]}
                key={index}
              >
                {value.title}
                {value.icon && <FilterIcon />}
              </li>
            ))}
          </ul>
          <ul className={classes.content_list}>
            {contentItem.map((value, index) => (
              <li className={classes.content_item} key={index}>
                <div
                  className={`${classes.content_item_data} ${classes.content_item_case}`}
                  style={widthList[0]}
                >
                  <div className={classes.content_item_text}>Case Number</div>
                  <div className={classes.content_item_flex}>
                    <div className={classes.content_item_symbol}>
                      <span className={colorJudge(value.caseStatus)}>
                        {value.caseStatus === "Booking不成立" ? <Batu /> : "◯"}
                      </span>
                      {value.caseStatus}
                    </div>
                    <div className={classes.content_item_value}>
                      {value.caseNumber}
                    </div>
                  </div>
                </div>
                <div
                  className={`${classes.content_item_data} ${classes.content_item_from}`}
                  style={widthList[1]}
                >
                  <div className={classes.content_item_text}>
                    Kawasaki,Japan
                  </div>
                  <div className={classes.content_item_value}>{value.from}</div>
                </div>
                <div
                  className={`${classes.content_item_data} ${classes.content_item_arrow}`}
                  style={widthList[2]}
                >
                  <Arrow />
                </div>
                <div
                  className={`${classes.content_item_data} ${classes.content_item_to}`}
                  style={widthList[3]}
                >
                  <div className={classes.content_item_text}>
                    Sint Eustatius, Bona...
                  </div>
                  <div className={classes.content_item_value}>{value.to}</div>
                </div>
                <div
                  className={`${classes.content_item_data} ${classes.content_item_cargoName}`}
                  style={widthList[4]}
                >
                  {value.cargoName}
                </div>
                <div
                  className={`${classes.content_item_data} ${classes.content_item_price}`}
                  style={widthList[5]}
                >
                  {value.price}
                </div>
                <div
                  className={`${classes.content_item_data} ${classes.content_item_button}`}
                  style={widthList[6]}
                >
                  <BookingButton />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BookingList;
