import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classes from "../../../dist/css/determine.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import { BookingDialogBoxPallet } from "../../index";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    width: "100%",
    padding: "8px 0",
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

const DeterMineLeftBoxPallet = (props) => {
  const { quote, fixedprice, state, setState, revenueton, handleBack } = props;
  const style = useStyles();

  const [customsfee, setCustomsFee] = useState({});
  const [handlingfee, setHandlingFee] = useState({});

  const isExport =
    quote.departure_port_name && quote.departure_port_name.includes("Japan");

  useEffect(() => {
    if (isExport) {
      setCustomsFee(
        fixedprice.find((price) => price.value === "export_customs_fee") || {}
      );
      setHandlingFee(
        fixedprice.find((price) => price.value === "export_handling_fee") || {}
      );
    } else {
      setCustomsFee(
        fixedprice.find((price) => price.value === "import_customs_fee") || {}
      );
      setHandlingFee(
        fixedprice.find((price) => price.value === "import_handling_fee") || {}
      );
    }
  }, [fixedprice]);

  const isCustomsfee = isExport ? "輸出通関料" : "輸入通関料";
  const isHandlingfee = isExport ? "輸出取扱量" : "輸入取扱量";

  const breakdowntitles = [
    { title: "OceanFreight (RT)" },
    { title: "LSS (RT)" },
    { title: "THC (RT)" },
    { title: quote.wrs_usd === "0" ? "" : "WRS" },
    { title: quote.doc_fee_jpy === "0" ? "" : "DOC FEE" },
    { title: quote.do_fee_jpy === "0" ? "" : "DO FEE" },
    { title: "CFS CHARGE(RT)" },
    { title: quote.pss_usd === "0" ? "" : "PSS" },
    { title: "DRAYGE RECOVERY CHARGE (RT)" },
    { title: quote.afs_jpy === "0" ? "" : "AFS" },
    { title: quote.gri_usd === "0" ? "" : "GRI" },
    { title: quote.err_usd === "0" ? "" : "ERR" },
    { title: quote.cic_usd === "0" ? "" : "CIC" },
    { title: state.customs === "依頼する" ? isCustomsfee : "" },
    { title: state.customs === "依頼する" ? isHandlingfee : "" },
    { title: state.truck === "依頼しない" ? "" : "トラック料金" },
    {
      title:
        state.truckloading === undefined || state.truckloading === ""
          ? ""
          : "積載料金",
    },
    { title: "Total" },
  ];

  const breakdownitems = [
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
        quote.thc_jpy == "0"
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
          : "¥" + Number(quote.doc_fee_jpy).toLocaleString(),
    },
    {
      item:
        quote.do_fee_jpy === "0"
          ? ""
          : "¥" + Number(quote.do_fee_jpy).toLocaleString(),
    },
    {
      item:
        quote.cfs_charge_jpy === "0"
          ? "Incl"
          : "¥" + Number(quote.cfs_charge_jpy).toLocaleString(),
    },
    {
      item:
        quote.pss_usd === "0"
          ? ""
          : "$" + Number(quote.pss_usd).toLocaleString(),
    },
    {
      item:
        quote.drayge_recovery_charge_jpy === "0"
          ? "Incl"
          : "¥" + Number(quote.drayge_recovery_charge_jpy).toLocaleString(),
    },
    {
      item:
        quote.afs_jpy === "0"
          ? ""
          : "¥" + Number(quote.afs_jpy).toLocaleString(),
    },
    {
      item:
        quote.gri_usd === "0"
          ? ""
          : "$" + Number(quote.gri_usd).toLocaleString(),
    },
    {
      item:
        quote.err_usd === "0"
          ? ""
          : "$" + Number(quote.err_usd).toLocaleString(),
    },
    {
      item:
        quote.cic_usd === "0" && quote.cic_jpy === "0"
          ? ""
          : quote.cic_usd > 0
          ? "$" + Number(quote.cic_usd).toLocaleString()
          : quote.cic_usd === "0"
          ? "¥" + Number(quote.cic_jpy).toLocaleString()
          : "-",
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
    { item: state.truck === "依頼しない" ? "" : "別途料金表をご覧ください" },
    {
      item:
        state.truckloading === undefined || state.truckloading === ""
          ? ""
          : "別途料金表をご覧ください",
    },
    { item: "¥ " + Number(quote.total_jpy).toLocaleString() },
  ];

  return (
    <>
      <div className={classes.quotation_area_adjustment}>
        <div className={classes.quotation_left_area}>
          <div className={classes.quotation_left_head}>見積内訳</div>

          <div className={classes.quotation_left_body}>
            <div className={classes.quotation_left_body_item}>
              {breakdowntitles.map((value, index) => (
                <div className={classes.quotation_left_display} key={index}>
                  {value.title}
                </div>
              ))}
            </div>
            <div className={classes.quotation_left_body_item}>
              {breakdownitems.map((value, index) => (
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
              label="備考欄"
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
            <BookingDialogBoxPallet
              state={state}
              quote={quote}
              revenueton={revenueton}
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

export default DeterMineLeftBoxPallet;
