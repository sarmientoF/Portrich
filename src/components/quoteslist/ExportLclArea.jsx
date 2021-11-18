import React from "react";
import classes from "../../dist/css/quoteslist.module.css";
import { Button, makeStyles } from "@material-ui/core";
import { ReactComponent as UnderArrow2 } from "../../dist/images/under_arrow2.svg";
import { ReactComponent as UnderRight } from "../../dist/images/→.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "70%",
    fontSize: 12,
    padding: 4,
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
  disabled: {
    width: "70%",
    fontSize: 12,
    padding: 4,
  },
}));

const ExportLclArea = () => {
  const styles = useStyles();
  return (
    <div className={classes.export_lcl_area}>
      <div className={classes.export_lcl_area_title}>
        LCL
        <UnderArrow2 className={classes.export_lcl_area_title_icon} />
      </div>
      <div className={classes.export_lcl_area_item_area}>
        <div className={classes.export_lcl_area_item_area_left}>
          <div className={classes.export_lcl_area_item_area_left_item1}>
            <div className={classes.export_lcl_area_item_area_left_item1_title}>
              ルート
            </div>
            <div className={classes.export_lcl_area_item_area_left_item1_text}>
              kawasaki Port/Japan
            </div>
          </div>
          <div className={classes.export_lcl_area_item_area_left_arrow}>
            <div
              className={classes.export_lcl_area_item_area_left_arrow_title}
            ></div>

            <div className={classes.export_lcl_area_item_area_left_arrow_text}>
              <UnderRight />
            </div>
          </div>
          <div className={classes.export_lcl_area_item_area_left_item2}>
            <div
              className={classes.export_lcl_area_item_area_left_item2_title}
            ></div>
            <div className={classes.export_lcl_area_item_area_left_item2_text}>
              Sint Eustatius,Bonairebaf
            </div>
          </div>
          <div className={classes.export_lcl_area_item_area_left_item3}>
            <div className={classes.export_lcl_area_item_area_left_item3_title}>
              貨物名
            </div>
            <div className={classes.export_lcl_area_item_area_left_item3_text}>
              Apple concentrate,
            </div>
          </div>
        </div>
        <div className={classes.export_lcl_area_item_area_right}>
          <div className={classes.export_lcl_area_item_area_right_up}>
            <div className={classes.export_lcl_area_item_area_right_up_title}>
              7月見積
            </div>
            <div className={classes.export_lcl_area_item_area_right_up_usd}>
              USD 6,00
            </div>
            <div
              className={classes.export_lcl_area_item_area_right_up_deadline}
            >
              <span className={classes.deadline_title}>期限</span>7/30
            </div>
            <div
              className={classes.export_lcl_area_item_area_right_up_breakdown}
            >
              料金の内訳 ＞
            </div>
            <div className={classes.export_lcl_area_item_area_right_up_btn}>
              <Button variant="contained" className={styles.button}>
                スケジュール選択
              </Button>
            </div>
          </div>
          <div className={classes.export_lcl_area_item_area_right_under}>
            <div
              className={classes.export_lcl_area_item_area_right_under_title}
            >
              8月見積
            </div>
            <div className={classes.export_lcl_area_item_area_right_under_usd}>
              USD 6,00
            </div>
            <div
              className={classes.export_lcl_area_item_area_right_under_deadline}
            >
              <span className={classes.deadline_title}>期限</span>7/30
            </div>
            <div
              className={
                classes.export_lcl_area_item_area_right_under_breakdown
              }
            >
              料金の内訳 ＞
            </div>
            <div className={classes.export_lcl_area_item_area_right_under_btn}>
              <Button variant="contained" className={styles.disabled} disabled>
                スケジュール選択
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.export_lcl_area_item_area}>
        <div className={classes.export_lcl_area_item_area_left}>
          <div className={classes.export_lcl_area_item_area_left_item1}>
            <div className={classes.export_lcl_area_item_area_left_item1_title}>
              ルート
            </div>
            <div className={classes.export_lcl_area_item_area_left_item1_text}>
              kawasaki Port/Japan
            </div>
          </div>
          <div className={classes.export_lcl_area_item_area_left_arrow}>
            <div
              className={classes.export_lcl_area_item_area_left_arrow_title}
            ></div>

            <div className={classes.export_lcl_area_item_area_left_arrow_text}>
              <UnderRight />
            </div>
          </div>
          <div className={classes.export_lcl_area_item_area_left_item2}>
            <div
              className={classes.export_lcl_area_item_area_left_item2_title}
            ></div>
            <div className={classes.export_lcl_area_item_area_left_item2_text}>
              Sint Eustatius,Bonairebaf
            </div>
          </div>
          <div className={classes.export_lcl_area_item_area_left_item3}>
            <div className={classes.export_lcl_area_item_area_left_item3_title}>
              貨物名
            </div>
            <div className={classes.export_lcl_area_item_area_left_item3_text}>
              Apple concentrate, apple juice, non-frozen, foodstuff
            </div>
          </div>
        </div>
        <div className={classes.export_lcl_area_item_area_right}>
          <div className={classes.export_lcl_area_item_area_right_up}>
            <div className={classes.export_lcl_area_item_area_right_up_title}>
              7月見積
            </div>
            <div className={classes.export_lcl_area_item_area_right_up_usd}>
              USD 6,00
            </div>
            <div
              className={classes.export_lcl_area_item_area_right_up_deadline}
            >
              <span className={classes.deadline_title}>期限</span>7/30
            </div>
            <div
              className={classes.export_lcl_area_item_area_right_up_breakdown}
            >
              料金の内訳 ＞
            </div>
            <div className={classes.export_lcl_area_item_area_right_up_btn}>
              <Button variant="contained" className={styles.button}>
                スケジュール選択
              </Button>
            </div>
          </div>
          <div className={classes.export_lcl_area_item_area_right_under}>
            <div
              className={classes.export_lcl_area_item_area_right_under_title}
            >
              8月見積
            </div>
            <div className={classes.export_lcl_area_item_area_right_under_usd}>
              USD 6,00
            </div>
            <div
              className={classes.export_lcl_area_item_area_right_under_deadline}
            >
              <span className={classes.deadline_title}>期限</span>7/30
            </div>
            <div
              className={
                classes.export_lcl_area_item_area_right_under_breakdown
              }
            >
              料金の内訳 ＞
            </div>
            <div className={classes.export_lcl_area_item_area_right_under_btn}>
              <Button variant="contained" className={styles.disabled} disabled>
                スケジュール選択
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExportLclArea;
