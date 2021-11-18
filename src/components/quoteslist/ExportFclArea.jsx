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
  selected: {
    width: "60%",
    fontSize: 14,
    padding: 6,
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
  graybutton: {
    width: "100%",
    fontSize: 12,
    padding: 8,
    marginRight: 30,
    background: "#F4F4F4",
    color: "#7D7D7D",
    textAlign: "center",
    textTransform: "capitalize",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#F4F4F4",
      opacity: "0.8",
      color: "#7D7D7D",
    },
  },
  disabled: {
    width: "70%",
    fontSize: 12,
    padding: 4,
  },
}));

const border = { border: "solid 1px #0052cc" };

const ExportFclArea = () => {
  const styles = useStyles();
  return (
    <div className={classes.export_fcl_area}>
      <div className={classes.export_fcl_area_title}>
        FCL
        <UnderArrow2 className={classes.export_fcl_area_title_icon} />
      </div>
      <div className={classes.export_fcl_area_item_area} style={border}>
        <div className={classes.export_fcl_area_item_area_left}>
          <div className={classes.export_fcl_area_item_area_left_item1}>
            <div className={classes.export_fcl_area_item_area_left_item1_title}>
              ルート
            </div>
            <div className={classes.export_fcl_area_item_area_left_item1_text}>
              kawasaki Port/Japan
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_left_arrow}>
            <div
              className={classes.export_fcl_area_item_area_left_arrow_title}
            ></div>

            <div className={classes.export_fcl_area_item_area_left_arrow_text}>
              <UnderRight />
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_left_item2}>
            <div
              className={classes.export_fcl_area_item_area_left_item2_title}
            ></div>
            <div className={classes.export_fcl_area_item_area_left_item2_text}>
              Sint Eustatius,Bonairebaf
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_left_item3}>
            <div className={classes.export_fcl_area_item_area_left_item3_title}>
              貨物名
            </div>
            <div className={classes.export_fcl_area_item_area_left_item3_text}>
              Apple concentrate, apple juice, non-frozen, foodstuff
            </div>
          </div>
        </div>
        <div className={classes.export_fcl_area_item_area_right_selected}>
          <div
            className={
              classes.export_fcl_area_item_area_right_selected_textarea
            }
          >
            <div
              className={
                classes.export_fcl_area_item_area_right_selected_textarea_title
              }
            >
              コンテナタイプ
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_right_selected_textarea_text
              }
            >
              20　Dry Standard
            </div>
          </div>
          <div
            className={classes.export_fcl_area_item_area_right_selected_btnarea}
          >
            <Button variant="contained" className={styles.graybutton}>
              定期見積をやめる
            </Button>
          </div>
        </div>
        <div className={classes.export_fcl_area_item_area_details_area}>
          <div className={classes.export_fcl_area_item_area_details_area_left}>
            <div
              className={
                classes.export_fcl_area_item_area_details_area_left_left
              }
            >
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_left_left_title
                }
              >
                7月詳細見積
              </div>
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_left_left_table
                }
              >
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_left_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_left
                    }
                  >
                    項目
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_right
                    }
                  >
                    金額
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_left_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_left
                    }
                  >
                    Ocean Freight
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_right
                    }
                  >
                    ¥777
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_left_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_left
                    }
                  >
                    THC
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_right
                    }
                  >
                    ¥777
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_left_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_left
                    }
                  >
                    LSS
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_right
                    }
                  >
                    ¥777
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_left_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_left
                    }
                  >
                    その他
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_right
                    }
                  >
                    ¥777
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_left_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_left
                    }
                  >
                    合計
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_right
                    }
                  >
                    <span className={classes.usd}>USD</span>6,410
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_details_area_left_right
              }
            >
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_left_right_deadline
                }
              >
                <span className={classes.kigen}>期限</span>
                2021/08/17
              </div>
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_left_right_btn
                }
              >
                <Button variant="contained" className={styles.selected}>
                  スケジュール選択
                </Button>
              </div>
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_details_area_left_bottom
              }
            >
              ※換算レート：$1=¥110
              <br />
              ※注意事項：入力されました貨物情報と実際搬入する貨物が異なる場合は追加費用が発生する場合がございます。
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_details_area_right}>
            <div
              className={
                classes.export_fcl_area_item_area_details_area_right_left
              }
            >
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_right_left_title
                }
              >
                8月詳細見積
              </div>
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_right_left_table
                }
              >
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_right_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_left
                    }
                  >
                    項目
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_right
                    }
                  >
                    金額
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_right_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_left
                    }
                  >
                    Ocean Freight
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_right
                    }
                  >
                    ¥777
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_right_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_left
                    }
                  >
                    THC
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_right
                    }
                  >
                    ¥777
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_right_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_left
                    }
                  >
                    LSS
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_right
                    }
                  >
                    ¥777
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_right_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_left
                    }
                  >
                    その他
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_right
                    }
                  >
                    ¥777
                  </div>
                </div>
                <div
                  className={
                    classes.export_fcl_area_item_area_details_area_right_left_table_item
                  }
                >
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_left
                    }
                  >
                    合計
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_right
                    }
                  >
                    <span className={classes.usd}>USD</span>6,410
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_details_area_left_right
              }
            >
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_left_right_deadline
                }
              >
                <span className={classes.kigen}>期限</span>
                2021/08/17
              </div>
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_left_right_btn
                }
              >
                <Button variant="contained" className={styles.selected}>
                  スケジュール選択
                </Button>
              </div>
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_details_area_left_bottom
              }
            ></div>
          </div>
        </div>
      </div>
      <div className={classes.export_fcl_area_item_area}>
        <div className={classes.export_fcl_area_item_area_left}>
          <div className={classes.export_fcl_area_item_area_left_item1}>
            <div className={classes.export_fcl_area_item_area_left_item1_title}>
              ルート
            </div>
            <div className={classes.export_fcl_area_item_area_left_item1_text}>
              kawasaki Port/Japan
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_left_arrow}>
            <div
              className={classes.export_fcl_area_item_area_left_arrow_title}
            ></div>

            <div className={classes.export_fcl_area_item_area_left_arrow_text}>
              <UnderRight />
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_left_item2}>
            <div
              className={classes.export_fcl_area_item_area_left_item2_title}
            ></div>
            <div className={classes.export_fcl_area_item_area_left_item2_text}>
              Sint Eustatius,Bonairebaf
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_left_item3}>
            <div className={classes.export_fcl_area_item_area_left_item3_title}>
              貨物名
            </div>
            <div className={classes.export_fcl_area_item_area_left_item3_text}>
              Apple concentrate,
            </div>
          </div>
        </div>
        <div className={classes.export_fcl_area_item_area_right}>
          <div className={classes.export_fcl_area_item_area_right_up}>
            <div className={classes.export_fcl_area_item_area_right_up_title}>
              7月見積
            </div>
            <div className={classes.export_fcl_area_item_area_right_up_usd}>
              USD 6,00
            </div>
            <div
              className={classes.export_fcl_area_item_area_right_up_deadline}
            >
              <span className={classes.deadline_title}>期限</span>7/30
            </div>
            <div
              className={classes.export_fcl_area_item_area_right_up_breakdown}
            >
              料金の内訳 ＞
            </div>
            <div className={classes.export_fcl_area_item_area_right_up_btn}>
              <Button variant="contained" className={styles.button}>
                スケジュール選択
              </Button>
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_right_under}>
            <div
              className={classes.export_fcl_area_item_area_right_under_title}
            >
              8月見積
            </div>
            <div className={classes.export_fcl_area_item_area_right_under_usd}>
              USD 6,00
            </div>
            <div
              className={classes.export_fcl_area_item_area_right_under_deadline}
            >
              <span className={classes.deadline_title}>期限</span>7/30
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_right_under_breakdown
              }
            >
              料金の内訳 ＞
            </div>
            <div className={classes.export_fcl_area_item_area_right_under_btn}>
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
export default ExportFclArea;
