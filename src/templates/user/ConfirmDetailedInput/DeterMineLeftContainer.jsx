import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classes from "../../../dist/css/determine.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import { BookingDialogContainer } from "../../index";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    width: "100%",
    padding: "8px",
    fontSize: 15,
    textTransform: "capitalize",
  },
  backbtn: {
    color: "gray",
    width: "10%",
    marginLeft: "10%",
    padding: "8px 0",
    fontSize: 15,
  },
  root: {
    "& .MuiTextField-root": {
      width: "100%",
    },
  },
}));

const DeterMineLeftContainer = (props) => {
  const { quote, fixedprice, state, setState, handleBack } = props;
  const style = useStyles();

  const [customsfee, setCustomsFee] = useState({});
  const [handlingfee, setHandlingFee] = useState({});

  const isExport =
    quote.departure_port_name && quote.departure_port_name.includes("Japan");

  useEffect(() => {
    if (isExport) {
      setCustomsFee(
        fixedprice.find((item) => item.value === "export_customs_fee_jpy") || {}
      );
      setHandlingFee(
        fixedprice.find((item) => item.value === "export_handling_fee_jpy") ||
          {}
      );
    } else {
      setCustomsFee(
        fixedprice.find((item) => item.value === "import_customs_fee_jpy") || {}
      );
      setHandlingFee(
        fixedprice.find((item) => item.value === "import_handling_fee_jpy") ||
          {}
      );
    }
  }, [fixedprice]);

  const isCustomsfee = isExport ? "輸出通関料" : "輸入通関料";
  const isHandlingfee = isExport ? "輸出取扱量" : "輸入取扱量";

  const pricetitles = [
    { title: "OceanFreight" },
    { title: "LSS" },
    { title: "THC" },
    { title: quote.wrs_usd === "0" ? "" : "WRS" },
    { title: quote.doc_fee_jpy === "0" ? "" : "DOC FEE" },
    { title: quote.seal_fee_jpy === "0" ? "" : "SEAL FEE" },
    { title: quote.do_fee_jpy === "0" ? "" : "DO FEE" },
    { title: quote.pss_usd === "0" ? "" : "PSS" },
    { title: quote.ams_usd === "0" ? "" : "AMS" },
    { title: quote.ems_usd === "0" ? "" : "EMS" },
    { title: quote.afr_jpy === "0" ? "" : "AFR" },
    { title: quote.gri_usd === "0" ? "" : "GRI" },
    { title: quote.cic_usd === "0" ? "" : "CIC" },
    { title: state.customs === "依頼する" ? isCustomsfee : "" },
    { title: state.customs === "依頼する" ? isHandlingfee : "" },
    { title: state.drayage === "依頼しない" ? "" : "ドレージ料金" },
    { title: state.axes === undefined || state.axes === "" ? "" : "台貫料金" },
    { title: "Total" },
  ];

  const priceitems = [
    {
      item:
        quote.ocean_freight_usd > 0
          ? "$" + Number(quote.ocean_freight_usd).toLocaleString()
          : quote.ocean_freight_usd === "0"
          ? "¥" + Number(quote.ocean_freight_jpy).toLocaleString()
          : "-",
    },
    {
      item:
        quote.lss_usd === "0"
          ? "Incl"
          : quote.lss_usd > 0
          ? "$" + Number(quote.lss_usd).toLocaleString()
          : quote.lss_usd === "0"
          ? "¥" + Number(quote.lss_jpy).toLocaleString()
          : "-",
    },
    {
      item:
        quote.thc_jpy === "0"
          ? "Incl"
          : quote.thc_jpy > 0
          ? "¥" + Number(quote.thc_jpy).toLocaleString()
          : "-",
    },
    {
      item:
        quote.wrs_usd === "0"
          ? ""
          : "$" + Number(quote.wrs_usd).toLocaleString(),
    },
    {
      item:
        quote.doc_fee_jpy === "0"
          ? ""
          : "¥" + Number(quote.doc_fee_jpy).toLocaleString() || "-",
    },
    {
      item:
        quote.seal_fee_jpy === "0"
          ? ""
          : "¥" + Number(quote.seal_fee_jpy).toLocaleString() || "-",
    },
    {
      item:
        quote.do_fee_jpy === "0"
          ? ""
          : "¥" + Number(quote.do_fee_jpy).toLocaleString() || "-",
    },
    {
      item:
        quote.pss_usd === "0"
          ? ""
          : "$" + Number(quote.pss_usd).toLocaleString() || "-",
    },
    {
      item:
        quote.ams_usd === "0"
          ? ""
          : "$" + Number(quote.ams_usd).toLocaleString() || "-",
    },
    {
      item:
        quote.ems_usd === "0"
          ? ""
          : "$" + Number(quote.ems_usd).toLocaleString() || "-",
    },
    {
      item:
        quote.afr_jpy === "0"
          ? ""
          : "¥" + Number(quote.afr_jpy).toLocaleString() || "-",
    },
    {
      item:
        quote.gri_usd === "0"
          ? ""
          : "$" + Number(quote.gri_usd).toLocaleString() || "-",
    },
    {
      item:
        quote.cic_usd === "0"
          ? ""
          : "$" + Number(quote.cic_usd).toLocaleString() || "-",
    },
    {
      item:
        state.customs === "依頼する"
          ? "¥" + Number(customsfee.price).toLocaleString()
          : "",
    },
    {
      item:
        state.customs === "依頼する"
          ? "¥" + Number(handlingfee.price).toLocaleString()
          : "",
    },
    { item: state.drayage === "依頼しない" ? "" : "別途料金表をご覧ください" },
    {
      item:
        state.axes === undefined || state.axes === ""
          ? ""
          : "別途料金表をご覧ください",
    },
    { item: "¥ " + Number(quote.total_jpy).toLocaleString() },
  ];
  console.log(state);
  return (
    <>
      <div className={classes.quotation_area_adjustment}>
        <div className={classes.quotation_left_area}>
          <div className={classes.quotation_left_head}>見積内訳</div>
          <div className={classes.quotation_left_body}>
            <div className={classes.quotation_left_body_item}>
              {pricetitles.map((value, index) => (
                <div className={classes.quotation_left_display} key={index}>
                  {value.title}
                </div>
              ))}
            </div>
            <div className={classes.quotation_left_body_item}>
              {priceitems.map((value, index) => (
                <div className={classes.quotation_left_price} key={index}>
                  {value.item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.remarke_area}>
          <div className={style.root}>
            <TextField
              label="備考"
              type="text"
              disabled
              variant="outlined"
              multiline={true}
              rows={5}
              value={state.remarks || ""}
            />
          </div>
        </div>
        <div className={classes.btn_area}>
          <div className={classes.booking_btn_area}>
            <BookingDialogContainer
              state={state}
              quote={quote}
              className={style.btn}
            />
          </div>
          <Button
            variant="contained"
            onClick={handleBack}
            className={style.backbtn}
            color="gray"
          >
            戻る
          </Button>
        </div>

        <div className={classes.warning}>
          <span className={classes.warning_title}>Bookingに関して</span>
          <br />
          Bookingされた情報に関しては迅速にご対応させて頂きます。
          <br />
          Bookingが完了後、Booking一覧にS/Iまたは作業確認書がダウンロードできるようになります。
          <br />
          質問等がございましたら、お気軽に下記のメールアドレスまでご連絡頂くようお願いします。
          <br />
          <a
            className={classes_Common.contact_mail}
            href="mailto:upport&#64;portrich.jp"
          >
            お問い合わせはこちらから
          </a>
        </div>
      </div>
    </>
  );
};

export default DeterMineLeftContainer;
