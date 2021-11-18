import React from 'react'
import classes from '../../dist/css/admin_bidpricelist.module.css'
import { Button } from "@material-ui/core";
import { ReactComponent as FilterIcon } from "../../dist/images/filtericn.svg";

const widthList = [
  { width: "8%" },
  { width: "8%" },
  { width: "8%" },
  { width: "8%" },
  { width: "12%" },
  { width: "12%" },
  { width: "8%" },
  { width: "11%" },
  { width: "11%" },
  { width: "6%" },
  { width: "4%" },
  { width: "2.5%" },
];

const headList = [
  { title: "船会社", icon: true },
  { title: "海外FW" },
  { title: "輸出入" },
  { title: "Incoterms", icon: true },
  { title: "出発地"},
  { title: "到着港" },
  { title: "貨物名" },
  { title: "サイズ" },
  { title: "F/T" },
  { title: "金額" },
  { title: "" },
  { title: "" },
];

const LclComponent = (props) => {
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
              {value.fw}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[2]}
            >
              {value.import_export}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[3]}
            >
              {value.incoterms}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[4]}
              key={index}
            >
              {value.pol}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[5]}
              key={index}
            >
              {value.pod}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[6]}
            >
              {value.cargo_name}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[7]}
            >
              {value.size}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[8]}
            >
              {value.ft}
            </div>
            <div
              className={`${classes.content_item_data} ${classes.big}`}
              style={widthList[9]}
            >
              {value.price}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[10]}
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
              style={widthList[11]}
            >
              <span class="material-icons">delete</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default LclComponent