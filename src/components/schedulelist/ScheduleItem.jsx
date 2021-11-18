import React from "react";
import classes from "../../dist/css/schedulelist.module.css";

const headTitiele = [
  "CY CUT",
  "CY OPEN",
  "出発日",
  "経由地",
  "到着日",
  "船名",
  "Voyage No",
];

function createData(cut, open, departure, waypoint, arrival, ship, voyage) {
  return { cut, open, departure, waypoint, arrival, ship, voyage };
}

const contentData = [
  createData(
    "2021-7-21",
    "2021-7-21",
    "2021-7-20",
    "Yokohama, Tokyo",
    "2021-7-20",
    "Shipping company A",
    "12345"
  ),
  createData(
    "2021-7-21",
    "2021-7-21",
    "2021-7-20",
    "Yokohama, Tokyo",
    "2021-7-20",
    "Shipping company A",
    "12345"
  ),
];

const widthList = [
  { width: "10%" },
  { width: "10%" },
  { width: "10%" },
  { width: "17%" },
  { width: "10%" },
  { width: "20%" },
  { width: "10%" },
];

const ScheduleItem = () => {
  return (
    <>
      <ul className={classes.content_head_list}>
        {headTitiele.map((value, index) => (
          <li
            className={classes.content_head_item}
            kye={index}
            style={widthList[index]}
          >
            {value}
          </li>
        ))}
      </ul>
      <ul className={classes.content_list}>
        {contentData.map((value, index) => (
          <li className={classes.content_item} kye={index}>
            <div className={classes.content_item_data} style={widthList[0]}>
              {value.cut}
            </div>
            <div className={classes.content_item_data} style={widthList[1]}>
              {value.open}
            </div>
            <div className={classes.content_item_data} style={widthList[2]}>
              {value.departure}
            </div>
            <div className={classes.content_item_data} style={widthList[3]}>
              {value.waypoint}
            </div>
            <div className={classes.content_item_data} style={widthList[4]}>
              {value.arrival}
            </div>
            <div className={classes.content_item_data} style={widthList[5]}>
              {value.ship}
            </div>
            <div className={classes.content_item_data} style={widthList[6]}>
              {value.voyage}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ScheduleItem;
