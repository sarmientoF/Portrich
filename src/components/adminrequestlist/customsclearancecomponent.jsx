import React from 'react'
import classes from '../../dist/css/admin_bidpricelist.module.css'
import { Button } from "@material-ui/core";
import { ReactComponent as FilterIcon } from "../../dist/images/filtericn.svg";

const widthList = [
  { width: "17%" },
  { width: "17%" },
  { width: "17%" },
  { width: "17%" },
  { width: "17%" },
  { width: "6%" },
  { width: "6%" },
];

const headList = [
  { title: "通関会社名", icon: true },
  { title: "輸出入" },
  { title: "通貨単位" },
  { title: "通関料（買値）" },
  { title: "通関取り扱い料（買値）" },
  { title: "" },
  { title: "" },
];


const CustomsClearanceComponent = (props) => {
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
              {value.currency}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[3]}
            >
              {value.customs_fees}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[4]}
              key={index}
            >
              {value.customs_handling_fee}
            </div>
            <div
              className={classes.content_item_data}
              style={widthList[5]}
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
              style={widthList[6]}
            >
              <span class="material-icons">delete</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default CustomsClearanceComponent