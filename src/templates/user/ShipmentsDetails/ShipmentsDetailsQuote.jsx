import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/shipments_detail.module.css";
import {
  getQuoteMaritimeCosts,
  getQuoteDomesticCustomsClearanceCosts,
  getQuoteDomesticTransportationCosts,
} from "./quotes/operations";
import { fetchAdditionalCost } from "./quote/operations";

const ShipmentsDetailsQuote = (props) => {
  const { cargoStatus, queryParameters } = props;
  const [additionalcost, setAdditionalCost] = useState([]);
  useEffect(() => {
    fetchAdditionalCost(setAdditionalCost, queryParameters.cargo_status_id);
  }, [queryParameters]);

  const isExport =
    cargoStatus.departure_port_name &&
    cargoStatus.departure_port_name.includes("Japan");

  const totaladditionalcost = additionalcost.reduce(function (sum, element) {
    return sum + Number(element.sell_price);
  }, 0);
  const totalcost = totaladditionalcost + Number(cargoStatus.total_jpy);
  return (
    <div className={classes.s_d_area}>
      <div className={classes.quotation_title}>
        <span className={classes.quotation_no}></span>
      </div>
      <div className={classes.quotation_area}>
        <div className={classes.quotation_main_area}>
          <div className={classes.quotation_main}>
            <div className={classes.quotation_main_title}>海上費用</div>
            {getQuoteMaritimeCosts(
              cargoStatus,
              queryParameters.shipping_type_id
            ).map((quote, index) => (
              <div className={classes.quotation_list} key={index}>
                <div className={classes.quotation_list_left}>{quote.name}</div>
                <div className={classes.quotation_list_right}>
                  {quote.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.quotation_sub_area}>
          {cargoStatus.need_customs_documents ? (
            <div className={classes.quotation_main}>
              <div className={classes.quotation_main_title}>通関費用</div>
              {getQuoteDomesticCustomsClearanceCosts(cargoStatus, isExport).map(
                (quote, index) => (
                  <div className={classes.quotation_list} key={index}>
                    <div className={classes.quotation_list_left}>
                      {quote.name}
                    </div>
                    <div className={classes.quotation_list_right}>
                      {quote.value}
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <></>
          )}
          {cargoStatus.need_drayage_shipping || cargoStatus.need_truck ? (
            <div className={classes.quotation_main}>
              <div className={classes.quotation_main_title}>輸送費用</div>
              {getQuoteDomesticTransportationCosts(
                cargoStatus,
                queryParameters.shipping_type_id
              ).map((quote, index) => (
                <div className={classes.quotation_list} key={index}>
                  <div className={classes.quotation_list_left}>
                    {quote.name}
                  </div>
                  <div className={classes.quotation_list_right}>
                    {quote.value}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
          {additionalcost.length === 0 ? (
            <></>
          ) : (
            <div className={classes.quotation_main}>
              <div className={classes.quotation_main_title}>その他費用</div>
              {additionalcost.map((quote, index) => (
                <div className={classes.quotation_list} key={index}>
                  <div className={classes.quotation_list_left}>
                    {quote.name}
                  </div>
                  <div className={classes.quotation_list_right}>
                    ¥{Number(quote.sell_price).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={classes.quotation_main}>
            <div className={classes.quotation_main_title_total}>合計</div>
            <div className={classes.quotation_list}>
              <div className={classes.quotation_list_left}></div>
              <div className={classes.quotation_list_right_total}>
                ¥{Number(totalcost).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentsDetailsQuote;
