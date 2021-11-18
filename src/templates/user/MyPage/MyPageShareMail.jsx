import React, { useEffect, useState, useMemo } from "react";
import classes from "../../../dist/css/mypages.module.css";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { makeStyles, createStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiFormControl-root": {
        margin: theme.spacing(0.5),
        width: "100%",
      },
      "& .MuiFilledInput-input": {
        padding: "27px 6px 5px",
        background: "#f7f7f7",
        borderBottom: "none",
      },
      "& .MuiFilledInput-underline:before": {
        borderBottom: "none",
      },
      "& .MuiButton-root": {
        minWidth: "30px",
      },
    },
    button: {
      width: "100%",
      fontSize: 12,
      padding: "8px 14px",
      background: "#0052cc",
      color: "#fff",
      textAlign: "center",
      textTransform: "capitalize",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#0052cc",
        opacity: "0.8",
        color: "#fff",
      },
    },
    deletebutton: {
      width: "80%",
      fontSize: 12,
      padding: "2px 4px",
      backgroundColor: "#fff",
      border: "1px solid #7d7d7d",
      color: "#7d7d7d",
      textAlign: "center",
      textTransform: "capitalize",
      minWidth: "20%",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#fff",
        opacity: "0.8",
        color: "#7d7d7d",
      },
    },
  })
);

const MyPageShareMail = () => {
  const styles = useStyles();

  return (
    <>
      <div className={classes.main_body_right_share_area}>
        <div className={classes.main_body_right_share_title_area}>
          <div className={classes.main_body_right_share_title}>
            メール共有設定
          </div>
          <div className={classes.main_body_right_share_title_addbtn}>
            <Button variant="contained" className={styles.button}>
              メール共有者を追加
            </Button>
          </div>
        </div>
        <div className={classes.main_body_right_share_table_head}>
          <div className={classes.main_body_right_share_table_head_name}>
            メールアドレス
          </div>
          <div className={classes.main_body_right_share_table_head_btn}></div>
        </div>
        <div className={classes.main_body_right_share_table_body_area}>
          <div className={classes.main_body_right_share_table_body_item}>
            <div className={classes.main_body_right_share_table_body_name}>
              yatsuka_y@ezweb.ne.jp
            </div>
            <div className={classes.main_body_right_share_table_body_btn}>
              <Button variant="contained" className={styles.deletebutton}>
                削除
              </Button>
            </div>
          </div>
          <div className={classes.main_body_right_share_table_body_item}>
            <div className={classes.main_body_right_share_table_body_name}>
              yatsuka_y@ezweb.ne.jp
            </div>
            <div className={classes.main_body_right_share_table_body_btn}>
              <Button variant="contained" className={styles.deletebutton}>
                削除
              </Button>
            </div>
          </div>
          <div className={classes.main_body_right_share_table_body_item}>
            <div className={classes.main_body_right_share_table_body_name}>
              yatsuka_y@ezweb.ne.jp
            </div>
            <div className={classes.main_body_right_share_table_body_btn}>
              <Button variant="contained" className={styles.deletebutton}>
                削除
              </Button>
            </div>
          </div>
          <div className={classes.main_body_right_share_table_body_item}>
            <div className={classes.main_body_right_share_table_body_name}>
              yatsuka_y@ezweb.ne.jp
            </div>
            <div className={classes.main_body_right_share_table_body_btn}>
              <Button variant="contained" className={styles.deletebutton}>
                削除
              </Button>
            </div>
          </div>
          <div className={classes.main_body_right_share_table_body_item}>
            <div className={classes.main_body_right_share_table_body_name}>
              yatsuka_y@ezweb.ne.jp
            </div>
            <div className={classes.main_body_right_share_table_body_btn}>
              <Button variant="contained" className={styles.deletebutton}>
                削除
              </Button>
            </div>
          </div>
          <div className={classes.main_body_right_share_table_body_item}>
            <div className={classes.main_body_right_share_table_body_name}>
              yatsuka_y@ezweb.ne.jp
            </div>
            <div className={classes.main_body_right_share_table_body_btn}>
              <Button variant="contained" className={styles.deletebutton}>
                削除
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageShareMail;
