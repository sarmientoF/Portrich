import React from "react";
import classes from "../../dist/css/quoteslist.module.css";
import { Button, makeStyles } from "@material-ui/core";
import { ReactComponent as UnderArrow2 } from "../../dist/images/under_arrow2.svg";
import { ReactComponent as UnderRight } from "../../dist/images/β.svg";

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

const ImportFclArea = () => {
  const styles = useStyles();
  return (
    <div className={classes.import_fcl_area}>
      <div className={classes.import_fcl_area_title}>
        FCL
        <UnderArrow2 className={classes.import_fcl_area_title_icon} />
      </div>
      <div className={classes.import_fcl_area_item_area}>
        <div className={classes.import_fcl_area_item_area_left}>
          <div className={classes.import_fcl_area_item_area_left_item1}>
            <div className={classes.import_fcl_area_item_area_left_item1_title}>
              γ«γΌγ
            </div>
            <div className={classes.import_fcl_area_item_area_left_item1_text}>
              kawasaki Port/Japan
            </div>
          </div>
          <div className={classes.import_fcl_area_item_area_left_arrow}>
            <div
              className={classes.import_fcl_area_item_area_left_arrow_title}
            ></div>

            <div className={classes.import_fcl_area_item_area_left_arrow_text}>
              <UnderRight />
            </div>
          </div>
          <div className={classes.import_fcl_area_item_area_left_item2}>
            <div
              className={classes.import_fcl_area_item_area_left_item2_title}
            ></div>
            <div className={classes.import_fcl_area_item_area_left_item2_text}>
              Sint Eustatius,Bonairebaf
            </div>
          </div>
          <div className={classes.import_fcl_area_item_area_left_item3}>
            <div className={classes.import_fcl_area_item_area_left_item3_title}>
              θ²¨η©ε
            </div>
            <div className={classes.import_fcl_area_item_area_left_item3_text}>
              Apple concentrate, apple juice, non-frozen, foodstuff
            </div>
          </div>
        </div>
        <div className={classes.import_fcl_area_item_area_right}>
          <div className={classes.import_fcl_area_item_area_right_up}>
            <div className={classes.import_fcl_area_item_area_right_up_title}>
              7ζθ¦η©
            </div>
            <div className={classes.import_fcl_area_item_area_right_up_usd}>
              USD 6,00
            </div>
            <div
              className={classes.import_fcl_area_item_area_right_up_deadline}
            >
              <span className={classes.deadline_title}>ζι</span>7/30
            </div>
            <div
              className={classes.import_fcl_area_item_area_right_up_breakdown}
            >
              ζιγ?εθ¨³ οΌ
            </div>
            <div className={classes.import_fcl_area_item_area_right_up_btn}>
              <Button variant="contained" className={styles.button}>
                γΉγ±γΈγ₯γΌγ«ιΈζ
              </Button>
            </div>
          </div>
          <div className={classes.import_fcl_area_item_area_right_under}>
            <div
              className={classes.import_fcl_area_item_area_right_under_title}
            >
              8ζθ¦η©
            </div>
            <div className={classes.import_fcl_area_item_area_right_under_usd}>
              USD 6,00
            </div>
            <div
              className={classes.import_fcl_area_item_area_right_under_deadline}
            >
              <span className={classes.deadline_title}>ζι</span>7/30
            </div>
            <div
              className={
                classes.import_fcl_area_item_area_right_under_breakdown
              }
            >
              ζιγ?εθ¨³ οΌ
            </div>
            <div className={classes.import_fcl_area_item_area_right_under_btn}>
              <Button variant="contained" className={styles.disabled} disabled>
                γΉγ±γΈγ₯γΌγ«ιΈζ
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.import_fcl_area_item_area}>
        <div className={classes.import_fcl_area_item_area_left}>
          <div className={classes.import_fcl_area_item_area_left_item1}>
            <div className={classes.import_fcl_area_item_area_left_item1_title}>
              γ«γΌγ
            </div>
            <div className={classes.import_fcl_area_item_area_left_item1_text}>
              kawasaki Port/Japan
            </div>
          </div>
          <div className={classes.import_fcl_area_item_area_left_arrow}>
            <div
              className={classes.import_fcl_area_item_area_left_arrow_title}
            ></div>

            <div className={classes.import_fcl_area_item_area_left_arrow_text}>
              <UnderRight />
            </div>
          </div>
          <div className={classes.import_fcl_area_item_area_left_item2}>
            <div
              className={classes.import_fcl_area_item_area_left_item2_title}
            ></div>
            <div className={classes.import_fcl_area_item_area_left_item2_text}>
              Sint Eustatius,Bonairebaf
            </div>
          </div>
          <div className={classes.import_fcl_area_item_area_left_item3}>
            <div className={classes.import_fcl_area_item_area_left_item3_title}>
              θ²¨η©ε
            </div>
            <div className={classes.import_fcl_area_item_area_left_item3_text}>
              Apple concentrate,
            </div>
          </div>
        </div>
        <div className={classes.import_fcl_area_item_area_right}>
          <div className={classes.import_fcl_area_item_area_right_up}>
            <div className={classes.import_fcl_area_item_area_right_up_title}>
              7ζθ¦η©
            </div>
            <div className={classes.import_fcl_area_item_area_right_up_usd}>
              USD 6,00
            </div>
            <div
              className={classes.import_fcl_area_item_area_right_up_deadline}
            >
              <span className={classes.deadline_title}>ζι</span>7/30
            </div>
            <div
              className={classes.import_fcl_area_item_area_right_up_breakdown}
            >
              ζιγ?εθ¨³ οΌ
            </div>
            <div className={classes.import_fcl_area_item_area_right_up_btn}>
              <Button variant="contained" className={styles.button}>
                γΉγ±γΈγ₯γΌγ«ιΈζ
              </Button>
            </div>
          </div>
          <div className={classes.import_fcl_area_item_area_right_under}>
            <div
              className={classes.import_fcl_area_item_area_right_under_title}
            >
              8ζθ¦η©
            </div>
            <div className={classes.import_fcl_area_item_area_right_under_usd}>
              USD 6,00
            </div>
            <div
              className={classes.import_fcl_area_item_area_right_under_deadline}
            >
              <span className={classes.deadline_title}>ζι</span>7/30
            </div>
            <div
              className={
                classes.import_fcl_area_item_area_right_under_breakdown
              }
            >
              ζιγ?εθ¨³ οΌ
            </div>
            <div className={classes.import_fcl_area_item_area_right_under_btn}>
              <Button variant="contained" className={styles.disabled} disabled>
                γΉγ±γΈγ₯γΌγ«ιΈζ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImportFclArea;
