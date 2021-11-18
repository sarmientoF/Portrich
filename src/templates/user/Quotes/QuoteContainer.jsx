import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "../../../dist/css/quotes.module.css";
import { fetchViewForQuoteRequests } from "./items/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { getIsStaff } from "../../../reducks/users/selectors";

const useStyles = makeStyles((theme) => ({
  enableButton: {
    background: "#0052cc",
    color: "#fff",
    width: "100%",
  },
  disableButton: {
    width: "100%",
  },
}));

const QuoteContainer = () => {
  const selector = useSelector((state) => state);
  const isStaff = getIsStaff(selector);
  const widthList = [
    { width: "12%" },
    { width: "12%" },
    { width: "9%" },
    { width: "9%" },
    { width: "9%" },
    { width: "8%" },
    { width: "8%" },
    { width: "8%" },
    { width: "8%" },
    { width: "8%" },
    { width: "8%" },
  ];

  const headerItems = [
    { title: "From" },
    { title: "To" },
    { title: "コンテナタイプ" },
    { title: "貨物名" },
    { title: "Ocean Freight" },
    { title: "THC" },
    { title: "LSS" },
    { title: "その他" },
    { title: "Total" },
    { title: "見積期限" },
    { title: "" },
  ];
  return (
    <div className={classes.main_body}>
      <ListHeaderComponent
        widthList={widthList}
        headerItems={headerItems}
        isStaff={isStaff}
      />
      <ListItems widthList={widthList} isStaff={isStaff} />
    </div>
  );
};

const ListHeaderComponent = (props) => {
  const { widthList, headerItems } = props;
  return (
    <div className={classes.regular_confirm_head}>
      {headerItems.map((value, index) => (
        <div
          className={classes.regular_confirm_head_item}
          style={widthList[index]}
          key={index}
        >
          {value.title}
        </div>
      ))}
    </div>
  );
};

const ListItems = (props) => {
  const { widthList } = props;
  const dispatch = useDispatch();
  const styles = useStyles();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchViewForQuoteRequests(setItems);
  }, []);
  const search = (item) => {
    const params = createSearchParams(item);
    const url = `/schedule/container?${params}`;
    dispatch(push(url));
  };
  const createSearchParams = (item) => {
    const params = new URLSearchParams();
    params.append("departure_port_id", item.departure_port_id);
    params.append("arrival_port_id", item.arrival_port_id);
    params.append("container_type_id", item.container_type_id);
    params.append("cargo_name_id", item.cargo_name_id);
    return params.toString();
  };
  return (
    <>
      {items.map((item, index) => (
        <div className={classes.regular_confirm_body} key={index}>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[0]}
          >
            {item.departure_port_name}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[1]}
          >
            {item.arrival_port_name}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[2]}
          >
            {item.container_type_name}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[3]}
          >
            {item.cargo_name_name}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[4]}
          >
            {item.ocean_freight_usd > "0"
              ? "$" + Number(item.ocean_freight_usd).toLocaleString()
              : item.ocean_freight_usd === "0"
              ? "¥" + Number(item.ocean_freight_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[5]}
          >
            {item.thc_jpy === "0"
              ? "Incl"
              : item.thc_jpy > "0"
              ? "¥" + Number(item.thc_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[6]}
          >
            {item.lss_usd === "0" && item.lss_jpy === "0"
              ? "Incl"
              : item.lss_usd > 0
              ? "$" + Number(item.lss_usd).toLocaleString()
              : item.lss_usd === "0"
              ? "¥" + Number(item.lss_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[7]}
          >
            {item.is_exist_quotes
              ? "¥" + Number(item.others_jpy).toLocaleString()
              : "-"}
            {/* {Number(item.others_jpy).toLocaleString() } */}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[8]}
          >
            {item.is_exist_quotes
              ? "¥" + Number(item.total_jpy).toLocaleString()
              : "-"}
            {/* {Number(item.total_jpy).toLocaleString() } */}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[9]}
          >
            {(item.estimated_deadline_date &&
              item.estimated_deadline_date.replaceAll(/-/g, "/")) ||
              "-"}
          </div>
          <div className={classes.quotes_body_item} style={widthList[10]}>
            {item.is_exist_quotes ? (
              <Button
                variant="contained"
                className={styles.enableButton}
                onClick={() => search(item)}
              >
                スケジュール
              </Button>
            ) : (
              <Button
                variant="contained"
                className={styles.disableButton}
                disabled
              >
                未完了
              </Button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default QuoteContainer;
