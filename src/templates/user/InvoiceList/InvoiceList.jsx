import React, { useState } from "react";
import classes from "../../../dist/css/invoicelist.module.css";
import {
  InvoiceListHead,
  InvoiceListButton,
  Top,
  Detail,
  CategoryButton,
} from "../../../components/invoicelist/index";
import { ReactComponent as FilterIcon } from "../../../dist/images/filtericn.svg";
import { ReactComponent as Arrow } from "../../../dist/images/→.svg";
import { ReactComponent as ArrowPrev } from "../../../dist/images/arrow_prev.svg";
import { ReactComponent as ArrowNext } from "../../../dist/images/arrow_next.svg";
import { ReactComponent as Download } from "../../../dist/images/download.svg";
import { ReactComponent as DownloadBlue } from "../../../dist/images/download_blue.svg";
import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import { contentItem, detailItem } from "./items/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiIconButton-label": {
      color: "#809FB8",
    },
    "& .MuiTypography-body1": {
      color: "#333333",
    },
  },
}));

const headTitile = [
  {
    title: <FormControlLabel disabled control={<Checkbox />} label="Case No" />,
  },
  { title: "ユーザ管理No" },
  { title: "From", icon: true },
  { title: "" },
  { title: "to", icon: true },
  { title: "支払い期日" },
  { title: "支払い状況", icon: true },
  { title: "料金" },
];

const widthList = [
  { width: "9%" },
  { width: "8%" },
  { width: "14%" },
  { width: "2%" },
  { width: "14%" },
  { width: "9%" },
  { width: "8%" },
  { width: "5.5%" },
  { width: "8%" },
  { width: "2%" },
];

const statusColor = (stauts) => {
  switch (stauts) {
    case "支払済":
      return classes.paid;
    case "未払い":
      return classes.unpaid;
    default:
      return classes.expired;
  }
};

const InvoiceList = () => {
  const styles = useStyles();
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(true);

  const indexChange = (e) => {
    setIndex(e);
  };

  const downloadItem = [
    ["B/L", "B/Lコピー", "サレンダーB/L", "Waybill"],
    ["I/V", "P/L", "輸出(輸入)許可証", "原産地証明書"],
  ];

  return (
    <section className={classes.main}>
      <div className={classes.body}>
        {slide ? <Top /> : <Detail />}
        <div className={classes.mb_30}></div>
        {slide ? (
          <>
            <InvoiceListHead />
            <div className={`${classes.content}`}>
              <ul className={classes.content_head_list}>
                {headTitile.map((value, index) => (
                  <li
                    className={`${classes.content_head_item} ${styles.root}`}
                    style={widthList[index]}
                    key={index}
                  >
                    {value.title}
                    {value.icon && <FilterIcon />}
                  </li>
                ))}
              </ul>
              <ul className={classes.content_list}>
                {contentItem.map((value, index) => (
                  <li className={classes.content_item} key={index}>
                    <div
                      className={`${classes.content_item_data} ${styles.root} ${classes.content_item_caseNo}`}
                      style={widthList[0]}
                    >
                      <div className={classes.content_item_text}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={value.caseNo}
                        />
                      </div>
                    </div>
                    <div
                      className={`${classes.content_item_data} ${classes.content_item_userId}`}
                      style={widthList[1]}
                    >
                      <div className={classes.content_item_text}>
                        {value.userId}
                      </div>
                    </div>
                    <div
                      className={`${classes.content_item_data} ${classes.content_item_from}`}
                      style={widthList[2]}
                    >
                      <div className={classes.content_item_text}>
                        {value.from}
                      </div>
                      <div className={classes.content_item_etd}>
                        {value.etd}
                      </div>
                    </div>
                    <div
                      className={classes.content_item_data}
                      style={widthList[3]}
                    >
                      <Arrow />
                    </div>
                    <div
                      className={`${classes.content_item_data} ${classes.content_item_to}`}
                      style={widthList[4]}
                    >
                      <div className={classes.content_item_text}>
                        {value.to}
                      </div>
                      <div className={classes.content_item_eta}>
                        {value.eta}
                      </div>
                    </div>
                    <div
                      className={`${classes.content_item_data} ${classes.content_item_paymentDate}`}
                      style={widthList[5]}
                    >
                      {value.paymentDate}
                    </div>
                    <div
                      className={`${classes.content_item_data} ${classes.content_item_paymentStatus}`}
                      style={widthList[6]}
                    >
                      <div
                        className={`${
                          classes.content_item_status
                        } ${statusColor(value.paymentStatus)}`}
                      >
                        {value.paymentStatus}
                      </div>
                    </div>
                    <div
                      className={`${classes.content_item_data} ${classes.content_item_price}`}
                      style={widthList[7]}
                    >
                      {value.price}
                    </div>
                    <div
                      className={classes.content_item_data}
                      style={widthList[8]}
                    >
                      <InvoiceListButton value={"ダウンロード"} />
                    </div>
                    <div
                      className={classes.content_item_data}
                      style={widthList[9]}
                      onClick={() => setSlide(!slide)}
                    >
                      ＞
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className={classes.content_detail}>
              <div className={classes.detail_left}>
                <div className={classes.detail_left_head}>
                  <CategoryButton />
                  <div className={classes.left_arrow_block}>
                    <div className={classes.arrow}>
                      <ArrowPrev />
                    </div>
                    <div className={classes.arrow}>
                      <ArrowNext />
                    </div>
                  </div>
                </div>
                <ul className={classes.left_list}>
                  {detailItem.map((value, index) => (
                    <li
                      className={classes.left_item}
                      key={index}
                      onClick={() => indexChange(index)}
                    >
                      <div className={classes.left_item_left}>
                        <div className={classes.prfe}>{value.prfe}</div>
                        <div className={classes.paymentDate}>
                          {value.paymentDate}
                        </div>
                      </div>
                      <div className={classes.left_item_right}>
                        <div className={classes.price}>{value.price}</div>
                        <div className={classes.paymentStatus}>
                          {value.paymentStatus}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classes.detail_right}>
                <div className={classes.detail_right_head}>
                  <div className={classes.right_head_prfe}>
                    {detailItem[index].prfe}
                  </div>
                  <div className={classes.right_head_detail}>
                    <div className={classes.head_detail_unit}>
                      <div className={classes.text}>ステータス</div>
                      <div className={classes.value}>
                        {detailItem[index].paymentStatus}
                      </div>
                    </div>
                    <div className={classes.head_detail_unit}>
                      <div className={classes.text}>支払い期日</div>
                      <div className={classes.value}>
                        {detailItem[index].paymentDate}
                      </div>
                    </div>
                    <div className={classes.head_detail_unit}>
                      <div className={classes.text}>料金</div>
                      <div className={`${classes.value} ${classes.bold}`}>
                        {detailItem[index].price}
                      </div>
                    </div>
                    <div className={classes.head_detail_button}>
                      <InvoiceListButton value={"請求書ダウンロード"} />
                    </div>
                  </div>
                </div>
                <div className={classes.mb_20}></div>
                <div className={classes.detail_right_content}>
                  <div className={classes.right_content_info}>
                    <div className={classes.info_title}>請求情報</div>
                    <ul className={classes.info_list}>
                      {detailItem.map((value, index) => (
                        <li className={classes.info_item} key={index}>
                          <div className={classes.info_item_crages}>
                            Additional Charges
                          </div>
                          <div className={classes.info_item_flex}>
                            <div className={classes.text}>延滞料金</div>
                            <div className={classes.value}>
                              {value.lateFees}
                            </div>
                          </div>
                          <div className={classes.info_item_flex}>
                            <div className={classes.text}>検査費用</div>
                            <div className={classes.value}>
                              {value.costOfTesting}
                            </div>
                          </div>
                          <div className={classes.info_item_flex}>
                            <div className={classes.text}>Short Drayage</div>
                            <div className={classes.value}>
                              {value.shortDrayage}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className={classes.info_total}>
                      <div className={classes.info_total_text}>合計</div>
                      <div className={classes.value_wrap}>
                        <div className={classes.value}>USD5389</div>
                        <div className={classes.text}>EX RATE: ¥110</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.right_content_download}>
                    <div className={classes.download_title}>
                      各種書類ダウンロード
                    </div>
                    <ul className={classes.download_list}>
                      {downloadItem[0].map((value, index) => (
                        <li className={classes.download_item} key={index}>
                          <div className={classes.icon}>
                            <DownloadBlue />
                          </div>
                          <div className={`${classes.text} ${classes.blue}`}>
                            {value}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <ul className={classes.download_list}>
                      {downloadItem[1].map((value, index) => (
                        <li className={classes.download_item} key={index}>
                          <div className={classes.icon}>
                            <Download />
                          </div>
                          <div className={classes.text}>{value}</div>
                        </li>
                      ))}
                    </ul>
                    <div onClick={() => setSlide(!slide)}>＞</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default InvoiceList;
