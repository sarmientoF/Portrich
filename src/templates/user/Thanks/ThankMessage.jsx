import React from "react";
import classes from "../../../dist/css/thanks.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
    width: "100%",
    color: "#fff",
    fontSize: 15,
    background: "#0052cc",
    textAlign: "center",
    padding: 10,
    borderRadius: 3,
    textTransform: "capitalize",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    "&:hover": {
      background: "#0052cc",
      opacity: 0.8,
    },
  },
}));

const QuotesSelectCalender = () => {
  const style = useStyles();
  return (
    <div className={classes.block}>
      <div className={classes.check_mark_area}>
        <FontAwesomeIcon icon={faCheck} />
      </div>

      <div className={classes.block_title}>
        Booking依頼ありがとうございます。
      </div>

      <div className={classes.block_body}>
        <div className={classes.warning}>
          <span className={classes.warning_title}>Bookingに関して</span>
          <br />
          <br />
          ご依頼された情報に関しては迅速に対応させて頂きます。
          <br />
          Bookingが完了後。メールにてS/I又は作業確認書の
          <br />
          ダウンロード可能なURLをお送りさせて頂きます。
          <br />
          ご質問等がございましたら、お気軽に営業担当者、
          <br />
          又は下記メールアドレスまでご連絡頂きますようお願いいたします。
          <a
            className={classes_Common.contact_mail}
            href="mailto:upport&#64;portrich.jp"
          >
            <br />
            お問い合わせはこちらから
          </a>
        </div>
      </div>

      <div className={classes.block_btn_area}>
        <Button className={style.root}>
          <Link className={style.a} to="/booking">
            Booking一覧へ
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuotesSelectCalender;
