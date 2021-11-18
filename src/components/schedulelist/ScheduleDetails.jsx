import React from "react";
import classes from "../../dist/css/schedulelist.module.css";
import { ReactComponent as Card } from "../../dist/images/card.svg";
import { ReactComponent as Transportation } from "../../dist/images/transportation.svg";

function createData(
  freight,
  extra,
  drage,
  importCustoms,
  importHandling,
  tariffs,
  tax
) {
  return { freight, extra, drage, importCustoms, importHandling, tariffs, tax };
}

const detailItem = [
  createData(
    "$777",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "¥5389"
  ),
];

const ScheduleDetails = () => {
  return (
    <div className={classes.content_detail}>
      <div className={classes.content_detail_info}>
        <div className={classes.detail_heading}>Shipping company A</div>
        <div className={classes.detail_flex}>
          <Card />
          <div className={classes.detail_text}>
            Apple concentrate, apple juice, non-frozen
          </div>
        </div>
        <div className={classes.detail_flex}>
          <Transportation />
          <div className={classes.detail_text}>FCL</div>
        </div>
        <div className={classes.detail_flex}>
          <div className={classes.detail_text}>フリータイム :&nbsp;</div>
          <div className={classes.detail_text}>DEM:14 days / DET: 7 days</div>
        </div>
      </div>
      <div className={classes.detail_desc}>
        <div className={classes.detail_heading}>見積もり概要</div>
        <div className={classes.detail_deadline}>見積期限：2021-08-30</div>
        {detailItem.map((value) => (
          <div className={classes.detail_quotes}>
            <div className={classes.detail_quotes_head}>Freight Charges</div>
            <div className={classes.detail_flex}>
              <div className={classes.detail_quotes_text}>Freight Charges</div>
              <div className={classes.detail_quotes_money}>{value.freight}</div>
            </div>
            <div className={classes.detail_quotes_head}>Origin Charges</div>
            <div className={classes.detail_flex}>
              <div className={classes.detail_quotes_text}>割増料金</div>
              <div className={classes.detail_quotes_money}>{value.extra}</div>
            </div>
            <div className={classes.detail_flex}>
              <div className={classes.detail_quotes_text}>ドレージ料金</div>
              <div className={classes.detail_quotes_money}>{value.drage}</div>
            </div>
            <div className={classes.detail_quotes_head}>Customs Charges</div>
            <div className={classes.detail_flex}>
              <div className={classes.detail_quotes_text}>輸入通関料</div>
              <div className={classes.detail_quotes_money}>
                {value.importCustoms}
              </div>
            </div>
            <div className={classes.detail_flex}>
              <div className={classes.detail_quotes_text}>輸入取扱料</div>
              <div className={classes.detail_quotes_money}>
                {value.importHandling}
              </div>
            </div>
            <div className={classes.detail_flex}>
              <div className={classes.detail_quotes_text}>関税</div>
              <div className={classes.detail_quotes_money}>{value.tariffs}</div>
            </div>
            <div className={classes.detail_flex}>
              <div className={classes.detail_quotes_text}>消費税</div>
              <div className={classes.detail_quotes_money}>{value.tax}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ScheduleDetails;
