import React from "react";
import classes from "../../../dist/css/request_thanks.module.css";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(5),
    width: "20%",
    fontSize: 14,
    padding: 8,
    background: "#0052cc",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#0052cc",
      opacity: "0.8",
      color: "#fff",
    },
  },
}));

const RequestThanks = () => {
  const styles = useStyles();
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <div className={classes.main_body_title}>定期見積完了しました</div>
        <div className={classes.main_body_text}>
          見積依頼が送信されました。
          <br />
          1営業日以内に見積の詳細が「見積一覧」に表示されます。
          <br />
          見積完了後は、メールにて通知が送られます。
        </div>
        <div className={classes.mb_30}></div>
        <div className={classes.flex_wrap}>
          <Button variant="contained" className={styles.button}>
            お見積状況一覧
          </Button>
          <Button variant="contained" className={styles.button}>
            追加でお見積をする
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RequestThanks;
