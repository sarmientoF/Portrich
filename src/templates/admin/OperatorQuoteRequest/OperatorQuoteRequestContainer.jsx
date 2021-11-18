import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "../../../dist/css/operatorquotes_request.module.css";
import classes_Common from "../../../dist/css/common.module.css";
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
    width: "60%",
  },
  disableButton: {},
}));

const OperatorQuoteRequestContainer = () => {
  const selector = useSelector((state) => state);
  const isStaff = getIsStaff(selector);
  const widthList = [
    { width: "10%" },
    { width: "10%" },
    { width: "10%" },
    { width: "10%" },
    { width: "10%" },
    { width: "10%" },
    { width: "10%" },
    { width: "10%" },
    { width: "10%" },
    { width: "10%" },
  ];

  const headerItems = [
    { title: "顧客名" },
    { title: "From" },
    { title: "To" },
    { title: "コンテナタイプ" },
    { title: "貨物名" },
    { title: "船会社" },
    { title: "見積期限" },
    { title: "見積状況" },
    { title: "スケジュール状況" },
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
  const { widthList } = props;
  const dispatch = useDispatch();
  const styles = useStyles();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchViewForQuoteRequests(setItems);
  }, []);

  const search = (item) => {
    const params = createSearchParams(item);
    const url = `/operator/quote/detail/container?${params}`;
    dispatch(push(url));
  };

  const createSearchParams = (item) => {
    const params = new URLSearchParams();
    params.append("id", item.id);
    params.append("quote_id", item.quote_id);
    params.append("schedule_id", item.schedule_id);
    return params.toString();
  };

  return (
    <>
      {items.map((item, index) => (
        <div className={classes.regular_confirm_body} key={index}>
          <div className={classes.quotes_body_item} style={widthList[0]}>
            {item.users_company_name}
          </div>
          <div className={classes.quotes_body_item} style={widthList[1]}>
            {item.departure_port_name}
          </div>
          <div className={classes.quotes_body_item} style={widthList[2]}>
            {item.arrival_port_name}
          </div>
          <div className={classes.quotes_body_item} style={widthList[3]}>
            {item.container_type_name}
          </div>
          <div className={classes.quotes_body_item} style={widthList[4]}>
            {item.cargo_name_name}
          </div>
          <div className={classes.quotes_body_item} style={widthList[5]}>
            {item.shipping_company_name || "-"}
          </div>
          <div className={classes.quotes_body_item} style={widthList[6]}>
            {(item.estimated_deadline_date &&
              item.estimated_deadline_date.replaceAll(/-/g, "/")) ||
              "-"}
          </div>
          <div className={classes.quotes_body_item} style={widthList[6]}>
            {item.shipping_company_name === null ? (
              <span className={classes_Common.text_gray}>見積登録未完了</span>
            ) : (
              <span className={classes_Common.text_info}>見積登録完了</span>
            )}
          </div>
          <div className={classes.quotes_body_item} style={widthList[7]}>
            {item.schedule_id === null ? (
              <span className={classes_Common.text_gray}>
                スケジュール紐付け無し
              </span>
            ) : (
              <span className={classes_Common.text_info}>
                スケジュール紐付け有り
              </span>
            )}
          </div>
          <div className={classes.quotes_body_item} style={widthList[8]}>
            <Button
              variant="contained"
              className={styles.enableButton}
              onClick={() => search(item)}
            >
              詳細
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default OperatorQuoteRequestContainer;
