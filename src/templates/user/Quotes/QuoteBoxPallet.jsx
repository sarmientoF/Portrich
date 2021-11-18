import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/quotes.module.css";
import { fetchViewForBoxPalletRequests } from "./items/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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

const QuoteBoxPallet = () => {
  const widthList = [
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
    { width: "8.3%" },
  ];
  const headerItems = [
    { title: "From" },
    { title: "To" },
    { title: "貨物名" },
    { title: "O/F（R/T）" },
    { title: "THC（R/T）" },
    { title: "CFS（R/T）" },
    { title: "LSS（R/T）" },
    { title: "DRC（R/T）" },
    { title: "その他" },
    { title: "Total" },
    { title: "見積期限" },
    { title: "" },
  ];
  return (
    <div className={classes.main_body}>
      <ListHeaderComponent widthList={widthList} headerItems={headerItems} />
      <ListItems widthList={widthList} />
    </div>
  );
};

const ListHeaderComponent = (props) => {
  const { widthList, headerItems, isStaff } = props;
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
  const { widthList, isStaff } = props;
  const dispatch = useDispatch();
  const styles = useStyles();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchViewForBoxPalletRequests(setItems);
  }, []);
  const search = (item) => {
    const params = createSearchParams(item);
    const url = `/schedule/boxpallet?${params}`;
    dispatch(push(url));
  };
  const createSearchParams = (item) => {
    const params = new URLSearchParams();
    params.append("departure_port_id", item.departure_port_id);
    params.append("arrival_port_id", item.arrival_port_id);
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
            {item.cargo_name_name}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[3]}
          >
            {item.ocean_freight_usd > "0"
              ? "$" + Number(item.ocean_freight_usd).toLocaleString()
              : item.ocean_freight_usd === "0"
              ? "¥" + Number(item.ocean_freight_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[4]}
          >
            {item.thc_jpy === "0"
              ? "Incl"
              : item.thc_jpy > "0"
              ? "¥" + Number(item.thc_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[5]}
          >
            {item.cfs_charge_jpy === "0"
              ? "Incl"
              : item.cfs_charge_jpy > "0"
              ? "¥" + Number(item.cfs_charge_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[6]}
          >
            {item.lss_usd === "0" && item.lss_jpy === "0"
              ? "Incl"
              : item.lss_usd > "0"
              ? "$" + Number(item.lss_usd).toLocaleString()
              : item.lss_usd === "0"
              ? "¥" + Number(item.lss_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[7]}
          >
            {item.drayge_recovery_charge_jpy === "0"
              ? "Incl"
              : item.drayge_recovery_charge_jpy > "0"
              ? "¥" + Number(item.drayge_recovery_charge_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[8]}
          >
            {item.is_exist_quotes
              ? "¥" + Number(item.others_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[9]}
          >
            {item.is_exist_quotes
              ? "¥" + Number(item.total_jpy).toLocaleString()
              : "-"}
          </div>
          <div
            className={classes.regular_confirm_body_item}
            style={widthList[10]}
          >
            {(item.estimated_deadline_date &&
              item.estimated_deadline_date.replaceAll(/-/g, "/")) ||
              "-"}
          </div>
          <div className={classes.quotes_body_item} style={widthList[11]}>
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

export default QuoteBoxPallet;
