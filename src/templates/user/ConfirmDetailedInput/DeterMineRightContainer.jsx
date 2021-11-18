import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/determine.module.css";

const DeterMineRightContainer = (props) => {
  const { quote, state } = props;

  const title = ["Shipment Details", "通関・ドレージ", "貨物情報"];

  const shipmentdetailsitems = [
    { title: "輸送タイプ:", item: "コンテナ・FCL" },
    { title: "出発地:", item: quote.departure_port_name },
    { title: "経由地:", item: quote.waypoint_name || "N" },
    { title: "到着地:", item: quote.arrival_port_name },
    {
      title: "出発日:",
      item: quote.departure_date && quote.departure_date.replaceAll(/-/g, "/"),
    },
    {
      title: "到着日:",
      item: quote.arrival_date && quote.arrival_date.replaceAll(/-/g, "/"),
    },
    { title: "Freetime:", item: quote.freetime + "days" },
    {
      title: "見積期限:",
      item:
        quote.estimated_deadline_date &&
        quote.estimated_deadline_date.replaceAll(/-/g, "/"),
    },
    { title: "船会社:", item: quote.shipping_company_name },
    { title: "船名:", item: quote.vessel_name },
    { title: "Voyage No:", item: quote.voyage_no },
  ];

  const customdrayageitems = [
    { title: "通関:", item: state.customs },
    { title: "ドレージ配送:", item: state.drayage },
    {
      title: state.daikan === undefined ? "" : "台貫:",
      item: state.daikan === undefined ? "" : state.daikan,
    },
    {
      title: state.axes === undefined ? "" : "軸数:",
      item: state.axes === undefined ? "" : state.axes,
    },
    {
      title: state.workplace === undefined ? "" : "作業場所:",
      item: state.workplace === undefined ? "" : state.workplace,
    },
    {
      title: state.workplace_address === undefined ? "" : "作業場所住所:",
      item:
        state.workplace_address === undefined ? "" : state.workplace_address,
    },
    {
      title: state.delivery_datetime === undefined ? "" : "配送希望日時:",
      item:
        state.delivery_datetime === undefined
          ? ""
          : state.pickup_datetime &&
            state.pickup_datetime.replaceAll(/-/g, "/").split("T").join(" "),
    },
    {
      title: state.pickup_datetime === undefined ? "" : "引き取り希望日時:",
      item:
        state.delivery_datetime &&
        state.delivery_datetime.replaceAll(/-/g, "/").split("T").join(" "),
    },
  ];

  const cargoinfotitles = [
    { title: "数量:" },
    { title: "コンテナタイプ:" },
    { title: "貨物名:" },
  ];

  const cargoinfoitems = [
    { item: state.quantity },
    { item: quote.container_type_name },
    { item: quote.cargo_name_name },
  ];

  return (
    <div className={classes.quotation_right_area}>
      <div>
        <div className={classes.quotation_right_head}>{title[0]}</div>
        <div className={classes.quotation_right_body}>
          {shipmentdetailsitems.map((rows, index) => (
            <div className={classes.quotation_right_body_item_flex} key={index}>
              <div className={classes.quotation_right_body_item}>
                <div className={classes.quotation_right_display}>
                  {rows.title}
                </div>
              </div>
              <div className={classes.quotation_right_body_item}>
                <div className={classes.quotation_right_price}>{rows.item}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={classes.quotation_right_head}>{title[1]}</div>

        <div className={classes.quotation_right_body}>
          {customdrayageitems.map((rows, index) => (
            <div className={classes.quotation_right_body_item_flex} key={index}>
              <div className={classes.quotation_right_body_item}>
                <div className={classes.quotation_right_display}>
                  {rows.title}
                </div>
              </div>
              <div className={classes.quotation_right_body_item}>
                <div className={classes.quotation_right_price}>{rows.item}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={classes.quotation_right_foot_head}>{title[2]}</div>

        <div className={classes.quotation_right_foot}>
          <div className={classes.quotation_right_body_item}>
            {cargoinfotitles.map((value, index) => (
              <div className={classes.quotation_right_display} key={index}>
                {value.title}
              </div>
            ))}
          </div>
          <div className={classes.quotation_right_body_item}>
            {cargoinfoitems.map((value, index) => (
              <div className={classes.quotation_right_price} key={index}>
                {value.item}
              </div>
            ))}
          </div>

          <div className={classes.quotation_right_foot_info}>
            注意事項:
            <br />
            入力されました貨物情報と実際搬入する貨物が異なる場合は追加費用が発生する場合がございます。
            <br />
            あらかじめご了承ください。
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeterMineRightContainer;
