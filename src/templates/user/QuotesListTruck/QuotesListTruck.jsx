import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/quoteslisttruck.module.css";
import { Button, makeStyles, TextField, Box } from "@material-ui/core";
import { ReactComponent as Ocean } from "../../../dist/images/ocean.svg";
import { ReactComponent as Track } from "../../../dist/images/track.svg";
import { ReactComponent as FilterIcon } from "../../../dist/images/filtericn.svg";
import SearchIcon from "@material-ui/icons/Search";
import { push } from "connected-react-router";
import { fetchViewForQuoteRequestsTruck } from "./items/operations";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  category: {
    width: "79px",
    height: "20px",
    lineHeight: "20px",
    textTransform: "none",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#575861",
    padding: "6px 12px",
    marginRight: "5px",
    boxShadow: "none",
    "&:hover": {
      background: "#E7F0FE",
      boxShadow: "none",
      opacity: 0.8,
    },
  },
  action: {
    backgroundColor: "#E7F0FE",
    color: "#333333",
    fontWeight: "bold",
    boxShadow: "none",
    "&:hover": {
      background: "#E7F0FE",
      boxShadow: "none",
      opacity: 0.8,
    },
  },
  root: {
    "& .MuiButton-label": {
      justifyContent: "space-between",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "30px",
    },
    "& .MuiButton-contained": {
      boxShadow: "none",
    },
    "& .MuiButton-root": {
      padding: "5px 8% 3px",
    },
    "& .MuiButton-contained:hover": {
      background: "#0753CC",
      boxShadow: "none",
    },
  },
  searchIcon: {
    color: "#7D7D7D",
  },
}));

const widthList = [
  { width: "10%" },
  { width: "10%" },
  { width: "10%" },
  { width: "14%" },
  { width: "14%" },
  { width: "16%" },
  { width: "15%" },
  { width: "18%" },
];

const QuotesTruckHead = [
  { title: "輸出入", icon: true },
  { title: "輸送形態", icon: true },
  { title: "作業時間" },
  { title: "作業場所名" },
  { title: "作業場所住所" },
  { title: "対象ポート" },
  { title: "その他" },
  { title: "金額" },
];

const QuotesListTruck = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [truckQuoteListItem, setTruckQuoteListItem] = useState([]);
  useEffect(() => {
    fetchViewForQuoteRequestsTruck(setTruckQuoteListItem, dispatch);
  }, []);
  return (
    <section className={classes.main}>
      <div className={classes.body}>
        <div className={classes.title}>見積依頼一覧</div>
        <div className={classes.mb_30}></div>
        <div className={classes.head_menu}>
          <div className={classes.head_category_group}>
            <Button
              variant="contained"
              className={styles.category}
              onClick={() => dispatch(push("ocean"))}
            >
              <Ocean className={classes.icon} />
              Ocean
            </Button>
            <Button
              variant="contained"
              className={`${styles.category} ${styles.action}`}
            >
              <Track className={classes.icon} />
              Truck
            </Button>
          </div>
          <div className={`${classes.head_search_box} ${styles.root}`}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className={styles.searchIcon}
              />
              <TextField
                id="input-with-sx"
                placeholder="検索"
                variant="standard"
              />
            </Box>
          </div>
        </div>
        <div className={classes.mb_50}></div>
        <div className={classes.content}>
          <ul className={classes.content_head_list}>
            {QuotesTruckHead.map((value, index) => (
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
            {truckQuoteListItem.map((value, index) => (
              <li className={classes.content_item}>
                <div
                  className={classes.content_item_data}
                  style={widthList[0]}
                  key={index}
                >
                  {value.shipping_method === 0 ? "輸入" : "輸出"}
                </div>
                <div className={classes.content_item_data} style={widthList[1]}>
                  {value.shipping_method === 0 ? "FCL" : "LCL"}
                </div>
                <div className={classes.content_item_data} style={widthList[2]}>
                  {value.working_hours + "H" || "-"}
                </div>
                <div
                  className={classes.content_item_data}
                  style={widthList[3]}
                  key={index}
                >
                  {value.place_of_departure_name}
                </div>
                <div
                  className={classes.content_item_data}
                  style={widthList[4]}
                  key={index}
                >
                  {value.place_of_departure_as_address}
                </div>
                <div className={classes.content_item_data} style={widthList[5]}>
                  {value.place_of_departure_as_port_name}
                </div>
                <div className={classes.content_item_data} style={widthList[6]}>
                  {value.loading_request_type === 0
                    ? "自力"
                    : value.loading_request_type === 1
                    ? "共同"
                    : value.loading_request_type === 2
                    ? "依頼"
                    : "-"}
                </div>
                <div className={classes.content_item_data} style={widthList[7]}>
                  ¥ {value.money || "-"}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuotesListTruck;
