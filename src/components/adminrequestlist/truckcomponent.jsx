import React from 'react'
import classes from '../../dist/css/admin_bidpricelist.module.css'
import { Button } from "@material-ui/core";
import { ReactComponent as FilterIcon } from "../../dist/images/filtericn.svg";

const widthList = [
  { width: "9%" },
  { width: "9%" },
  { width: "9%" },
  { width: "12%" },
  { width: "12%" },
  { width: "12%" },
  { width: "12%" },
  { width: "12%" },
  { width: "7%" },
  { width: "4%" },
  { width: "2.5%" },
];

const headList = [
  { title: "配送会社", icon: true },
  { title: "輸出入" },
  { title: "FCL or LCL" },
  { title: "出発地"},
  { title: "到着港" },
  { title: "作業時間" },
  { title: "積載の有無" },
  { title: "通貨単位" },
  { title: "金額" },
  { title: "" },
  { title: "" },
];

const TruckComponent = (props) => {
  return (
    <>
      <ul className={classes.content_head_list}>
        {headList.map((value, index) => (
          <li
            className={classes.content_head_item}
            style={widthList[index]}
            key={index}
          >
          <div className={classes.content_head_item_text}>
            {value.title}
          </div>
          {value.icon && <FilterIcon />}
        </li>
        ))}
      </ul>
      <ul className={classes.contetnt_list}>
        {props.item.map((value, index) => (
          <li className={classes.content_item} key={index}>
            <div
              className={classes.content_item_data}
              style={widthList[0]}
            >
              {value.carrier}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[1]}
            >
              {value.import_export}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[2]}
            >
              {value.fcl_lcl}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[3]}
            >
              {value.pol}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[4]}
              key={index}
            >
              {value.pod}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[5]}
              key={index}
            >
              {value.time}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[6]}
            >
              {value.loading}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[7]}
            >
              {value.currency}
            </div>
            <div
              className={`${classes.content_item_data} ${classes.big}`}
              style={widthList[8]}
            >
              {value.price}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[9]}
            >
              <div className={props.styles.buttonroot}>
                <Button
                  variant="contained"
                  className={props.styles.button}
                  // onClick={() => dispatch(push("/selectquotes"))}
                >
                  編集
                </Button>
              </div>
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[10]}
            >
              <span class="material-icons">delete</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default TruckComponent