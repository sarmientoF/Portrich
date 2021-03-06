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
              γ«γΌγ
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
              θ²¨η©ε
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
              γ³γ³γγγΏγ€γ
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_right_selected_textarea_text
              }
            >
              20γDry Standard
            </div>
          </div>
          <div
            className={classes.export_fcl_area_item_area_right_selected_btnarea}
          >
            <Button variant="contained" className={styles.graybutton}>
              ε?ζθ¦η©γγγγ
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
                7ζθ©³η΄°θ¦η©
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
                    ι η?
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_right
                    }
                  >
                    ιι‘
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
                    Β₯777
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
                    Β₯777
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
                    Β₯777
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
                    γγ?δ»
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_left_left_table_item_right
                    }
                  >
                    Β₯777
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
                    εθ¨
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
                <span className={classes.kigen}>ζι</span>
                2021/08/17
              </div>
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_left_right_btn
                }
              >
                <Button variant="contained" className={styles.selected}>
                  γΉγ±γΈγ₯γΌγ«ιΈζ
                </Button>
              </div>
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_details_area_left_bottom
              }
            >
              β»ζη?γ¬γΌγοΌ$1=Β₯110
              <br />
              β»ζ³¨ζδΊι οΌε₯εγγγΎγγθ²¨η©ζε ±γ¨ε?ιζ¬ε₯γγθ²¨η©γη°γͺγε ΄εγ―θΏ½ε θ²»η¨γηΊηγγε ΄εγγγγγΎγγ
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
                8ζθ©³η΄°θ¦η©
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
                    ι η?
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_right
                    }
                  >
                    ιι‘
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
                    Β₯777
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
                    Β₯777
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
                    Β₯777
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
                    γγ?δ»
                  </div>
                  <div
                    className={
                      classes.export_fcl_area_item_area_details_area_right_left_table_item_right
                    }
                  >
                    Β₯777
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
                    εθ¨
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
                <span className={classes.kigen}>ζι</span>
                2021/08/17
              </div>
              <div
                className={
                  classes.export_fcl_area_item_area_details_area_left_right_btn
                }
              >
                <Button variant="contained" className={styles.selected}>
                  γΉγ±γΈγ₯γΌγ«ιΈζ
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
              γ«γΌγ
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
              θ²¨η©ε
            </div>
            <div className={classes.export_fcl_area_item_area_left_item3_text}>
              Apple concentrate,
            </div>
          </div>
        </div>
        <div className={classes.export_fcl_area_item_area_right}>
          <div className={classes.export_fcl_area_item_area_right_up}>
            <div className={classes.export_fcl_area_item_area_right_up_title}>
              7ζθ¦η©
            </div>
            <div className={classes.export_fcl_area_item_area_right_up_usd}>
              USD 6,00
            </div>
            <div
              className={classes.export_fcl_area_item_area_right_up_deadline}
            >
              <span className={classes.deadline_title}>ζι</span>7/30
            </div>
            <div
              className={classes.export_fcl_area_item_area_right_up_breakdown}
            >
              ζιγ?εθ¨³ οΌ
            </div>
            <div className={classes.export_fcl_area_item_area_right_up_btn}>
              <Button variant="contained" className={styles.button}>
                γΉγ±γΈγ₯γΌγ«ιΈζ
              </Button>
            </div>
          </div>
          <div className={classes.export_fcl_area_item_area_right_under}>
            <div
              className={classes.export_fcl_area_item_area_right_under_title}
            >
              8ζθ¦η©
            </div>
            <div className={classes.export_fcl_area_item_area_right_under_usd}>
              USD 6,00
            </div>
            <div
              className={classes.export_fcl_area_item_area_right_under_deadline}
            >
              <span className={classes.deadline_title}>ζι</span>7/30
            </div>
            <div
              className={
                classes.export_fcl_area_item_area_right_under_breakdown
              }
            >
              ζιγ?εθ¨³ οΌ
            </div>
            <div className={classes.export_fcl_area_item_area_right_under_btn}>
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
export default ExportFclArea;
