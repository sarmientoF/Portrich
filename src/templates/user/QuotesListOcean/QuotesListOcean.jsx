import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/quoteslistocean.module.css";
import { Button, makeStyles, TextField, Box } from "@material-ui/core";
import { ReactComponent as Ocean } from "../../../dist/images/ocean.svg";
import { ReactComponent as Track } from "../../../dist/images/track.svg";
import { ReactComponent as FilterIcon } from "../../../dist/images/filtericn.svg";
import { ReactComponent as Transportation } from "../../../dist/images/transportation.svg";
import SearchIcon from "@material-ui/icons/Search";
import { push } from "connected-react-router";
import { fetchViewForQuoteRequestsOcean } from "./items/operations";
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
  button: {
    background: "#0753CC",
    color: "#fff",
    textAlign: "center",
    fontSize: "12px",
    display: "block",
    width: "100%",
    borderRadius: "5px",
    boxShadow: "none",
    "&:hover": {
      opacity: "0.8",
    },
  },
  buttonroot: {
    "& .MuiButton-contained:hover": {
      background: "#0753CC",
      boxShadow: "none",
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
  },
  searchIcon: {
    color: "#7D7D7D",
  },
}));

const widthList = [
  { width: "15%" },
  { width: "15%" },
  { width: "14.5%" },
  { width: "10%" },
  { width: "8%" },
  { width: "8%" },
  { width: "13%" },
  { width: "9%" },
];

const QuotesOceanHead = [
  { title: "From", icon: true },
  { title: "To", icon: true },
  { title: "貨物名", icon: true },
  { title: "インコタームズ" },
  { title: "輸送形態", icon: true },
  { title: "出発予定月" },
  { title: "コンテナタイプ(FCL)", icon: true },
];

const QuotesListOcean = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [quoteListItem, setQuoteListItem] = useState([]);
  useEffect(() => {
    fetchViewForQuoteRequestsOcean(setQuoteListItem, dispatch);
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
              className={`${styles.category} ${styles.action}`}
            >
              <Ocean className={classes.icon} />
              Ocean
            </Button>
            <Button
              variant="contained"
              className={styles.category}
              onClick={() => dispatch(push("truck"))}
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
          <div className={styles.root}>
            <ul className={classes.content_head_list}>
              {QuotesOceanHead.map((value, index) => (
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
              {quoteListItem.map((value, index) => (
                <li className={classes.content_item}>
                  <div
                    className={classes.content_item_data}
                    style={widthList[0]}
                    key={index}
                  >
                    {value.pod_name}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[1]}
                  >
                    {value.pol_name}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[2]}
                  >
                    {value.cargo_name}
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
                    <Transportation />
                    {value.shipping_method === 0 ? "FCL" : "LCL"}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[5]}
                    key={index}
                  >
                    {value.request_start_month}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[6]}
                  >
                    {value.container_type_name || "-"}
                  </div>
                  <div
                    className={classes.content_item_data}
                    style={widthList[7]}
                  >
                    <div className={styles.buttonroot}>
                      <Button
                        variant="contained"
                        className={styles.button}
                        onClick={() => dispatch(push("/selectquotes"))}
                      >
                        見積選択へ
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesListOcean;
