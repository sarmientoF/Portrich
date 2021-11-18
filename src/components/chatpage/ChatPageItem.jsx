import React from "react";
import classes from "../../dist/css/chatpage.module.css";
import {
  InputBase,
  IconButton,
  makeStyles,
  Badge,
  TextField,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ReactComponent as Arrow } from "../../dist/images/→.svg";
import { ReactComponent as PortrichIcon } from "../../dist/images/portrichicon.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    width: "90%",
    boxSizing: "border-box",
    "& .MuiInputBase-input": {
      height: 28,
    },
  },
  iconButton: {
    padding: 10,
    color: "#7d7d7d",
    boxSizing: "border-box",
  },
  badge: {
    color: "#fff",
    "& .MuiBadge-colorPrimary": {
      color: "#fff",
    },
  },
  link: {
    textDecoration: "none",
    color: "#1877b7",
    "&:hover": {
      opacity: 0.8,
      color: "#D00539",
    },
  },
  wrapText: {
    width: "100%",
    background: "#fff",
    "& .MuiInputBase-inputMultiline ": {
      padding: "2px 5px 5px",
    },
    "& .MuiOutlinedInput-root ": {
      padding: "2px 5px 45px",
    },
  },
  button: {
    width: "6%",
    fontSize: 12,
    padding: "2px",
    background: "#0052cc",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#0052cc",
      opacity: "0.8",
      color: "#fff",
    },
  },
  not_item_btn: {
    width: "50%",
    fontSize: 14,
    padding: "5px",
    background: "#0052cc",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#0052cc",
      opacity: "0.8",
      color: "#fff",
    },
  },
}));

const ChatPageItem = () => {
  const styles = useStyles();
  return (
    <>
      <div className={classes.main_body_left_area}>
        <div className={classes.main_body_left_area_search}>
          <IconButton
            type="submit"
            className={styles.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={styles.input}
            placeholder="名前、内容、ブッキングナンバーなど"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </div>
        <div className={classes.main_body_left_area_support}>
          サポートチームへのお問い合わせ
        </div>
        <div className={classes.main_body_left_area_support_title}>
          Portrichサポートチームへのお問い合わせ
        </div>
        <div className={classes.main_body_left_area_support_text}>
          突然のメッセージ失礼いたします。この度bookingナンバーhga;dsfgh;ladkhgl;aksdgkaljsdlk
        </div>
        <div className={classes.main_body_left_area_chat_of_cargo_status}>
          貨物ごとのチャット一覧
        </div>

        {/* <div className={classes.main_body_left_area_not_item}>
          <div className={classes.main_body_left_area_not_item_title}>
            メッセージがありません
          </div>
          <div className={classes.main_body_left_area_not_item_text}>
            貨物状況一覧画面からフォワーダーに問い合わせすると、
            <br />
            チャット一覧に表示されます。
          </div>
          <div className={classes.main_body_left_area_not_item_btn}>
            <Button variant="contained" className={styles.not_item_btn}>
              Booking一覧へ
            </Button>
          </div>
        </div> */}
        {/* ここからしたはチャットがあった場合 */}
        <div className={classes.main_body_left_area_chat_area}>
          <div className={classes.main_body_left_area_chat_item}>
            <div className={classes.main_body_left_area_chat_item_left}>
              <div className={classes.main_body_left_area_chat_item_left_up}>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_case_no
                  }
                >
                  PRFE2021-00001
                </div>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_booking_no
                  }
                >
                  Booking No
                  <span className={classes.booking_no}>12348</span>
                </div>
              </div>
              <div
                className={classes.main_body_left_area_chat_item_left_down_text}
              >
                突然のメッセージ失礼いたします。この度bookingナンバー
              </div>
            </div>

            <div className={classes.main_body_left_area_chat_item_right}>
              <div className={classes.main_body_left_area_chat_item_right_up}>
                6時間前
              </div>
              <div className={classes.main_body_left_area_chat_item_right_down}>
                <Badge
                  className={styles.badge}
                  badgeContent={2}
                  color="primary"
                ></Badge>
              </div>
            </div>
          </div>
          <div className={classes.main_body_left_area_chat_item}>
            <div className={classes.main_body_left_area_chat_item_left}>
              <div className={classes.main_body_left_area_chat_item_left_up}>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_case_no
                  }
                >
                  PRFE2021-00001
                </div>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_booking_no
                  }
                >
                  Booking No
                  <span className={classes.booking_no}>12348</span>
                </div>
              </div>
              <div
                className={classes.main_body_left_area_chat_item_left_down_text}
              >
                突然のメッセージ失礼いたします。この度bookingナンバー
              </div>
            </div>

            <div className={classes.main_body_left_area_chat_item_right}>
              <div className={classes.main_body_left_area_chat_item_right_up}>
                6時間前
              </div>
              <div className={classes.main_body_left_area_chat_item_right_down}>
                <Badge
                  className={styles.badge}
                  badgeContent={2}
                  color="primary"
                ></Badge>
              </div>
            </div>
          </div>
          <div className={classes.main_body_left_area_chat_item}>
            <div className={classes.main_body_left_area_chat_item_left}>
              <div className={classes.main_body_left_area_chat_item_left_up}>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_case_no
                  }
                >
                  PRFE2021-00001
                </div>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_booking_no
                  }
                >
                  Booking No
                  <span className={classes.booking_no}>12348</span>
                </div>
              </div>
              <div
                className={classes.main_body_left_area_chat_item_left_down_text}
              >
                突然のメッセージ失礼いたします。この度bookingナンバー
              </div>
            </div>

            <div className={classes.main_body_left_area_chat_item_right}>
              <div className={classes.main_body_left_area_chat_item_right_up}>
                6時間前
              </div>
              <div className={classes.main_body_left_area_chat_item_right_down}>
                <Badge
                  className={styles.badge}
                  badgeContent={2}
                  color="primary"
                ></Badge>
              </div>
            </div>
          </div>
          <div className={classes.main_body_left_area_chat_item}>
            <div className={classes.main_body_left_area_chat_item_left}>
              <div className={classes.main_body_left_area_chat_item_left_up}>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_case_no
                  }
                >
                  PRFE2021-00001
                </div>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_booking_no
                  }
                >
                  Booking No
                  <span className={classes.booking_no}>12348</span>
                </div>
              </div>
              <div
                className={classes.main_body_left_area_chat_item_left_down_text}
              >
                突然のメッセージ失礼いたします。この度bookingナンバー
              </div>
            </div>

            <div className={classes.main_body_left_area_chat_item_right}>
              <div className={classes.main_body_left_area_chat_item_right_up}>
                6時間前
              </div>
              <div className={classes.main_body_left_area_chat_item_right_down}>
                <Badge
                  className={styles.badge}
                  badgeContent={2}
                  color="primary"
                ></Badge>
              </div>
            </div>
          </div>
          <div className={classes.main_body_left_area_chat_item}>
            <div className={classes.main_body_left_area_chat_item_left}>
              <div className={classes.main_body_left_area_chat_item_left_up}>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_case_no
                  }
                >
                  PRFE2021-00001
                </div>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_booking_no
                  }
                >
                  Booking No
                  <span className={classes.booking_no}>12348</span>
                </div>
              </div>
              <div
                className={classes.main_body_left_area_chat_item_left_down_text}
              >
                突然のメッセージ失礼いたします。この度bookingナンバー
              </div>
            </div>

            <div className={classes.main_body_left_area_chat_item_right}>
              <div className={classes.main_body_left_area_chat_item_right_up}>
                6時間前
              </div>
              <div className={classes.main_body_left_area_chat_item_right_down}>
                <Badge
                  className={styles.badge}
                  badgeContent={2}
                  color="primary"
                ></Badge>
              </div>
            </div>
          </div>
          <div className={classes.main_body_left_area_chat_item}>
            <div className={classes.main_body_left_area_chat_item_left}>
              <div className={classes.main_body_left_area_chat_item_left_up}>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_case_no
                  }
                >
                  PRFE2021-00001
                </div>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_booking_no
                  }
                >
                  Booking No
                  <span className={classes.booking_no}>12348</span>
                </div>
              </div>
              <div
                className={classes.main_body_left_area_chat_item_left_down_text}
              >
                突然のメッセージ失礼いたします。この度bookingナンバー
              </div>
            </div>

            <div className={classes.main_body_left_area_chat_item_right}>
              <div className={classes.main_body_left_area_chat_item_right_up}>
                6時間前
              </div>
              <div className={classes.main_body_left_area_chat_item_right_down}>
                <Badge
                  className={styles.badge}
                  badgeContent={2}
                  color="primary"
                ></Badge>
              </div>
            </div>
          </div>
          <div className={classes.main_body_left_area_chat_item}>
            <div className={classes.main_body_left_area_chat_item_left}>
              <div className={classes.main_body_left_area_chat_item_left_up}>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_case_no
                  }
                >
                  PRFE2021-00001
                </div>
                <div
                  className={
                    classes.main_body_left_area_chat_item_left_up_booking_no
                  }
                >
                  Booking No
                  <span className={classes.booking_no}>12348</span>
                </div>
              </div>
              <div
                className={classes.main_body_left_area_chat_item_left_down_text}
              >
                突然のメッセージ失礼いたします。この度bookingナンバー
              </div>
            </div>

            <div className={classes.main_body_left_area_chat_item_right}>
              <div className={classes.main_body_left_area_chat_item_right_up}>
                6時間前
              </div>
              <div className={classes.main_body_left_area_chat_item_right_down}>
                <Badge
                  className={styles.badge}
                  badgeContent={2}
                  color="primary"
                ></Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.main_body_right_area}>
        <div className={classes.main_body_right_area_head_area}>
          <div className={classes.main_body_right_area_head_area_left}>
            <div className={classes.main_body_right_area_head_area_left_up}>
              <div
                className={classes.main_body_right_area_head_area_left_up_root}
              >
                ルート
              </div>
              <div
                className={
                  classes.main_body_right_area_head_area_left_up_depature
                }
              >
                Kawasaki Port /Japan
              </div>
              <div
                className={classes.main_body_right_area_head_area_left_up_arrow}
              >
                <Arrow />
              </div>
              <div
                className={
                  classes.main_body_right_area_head_area_left_up_arrival
                }
              >
                Sint Eustatius, Bonaire
              </div>
            </div>
            <div className={classes.main_body_right_area_head_area_left_down}>
              <div
                className={
                  classes.main_body_right_area_head_area_left_down_booking_no
                }
              >
                Booking No<span className={classes.booking_no}>12345</span>
              </div>
              <div
                className={
                  classes.main_body_right_area_head_area_left_down_case_no
                }
              >
                Case No<span className={classes.case_no}>12345</span>
              </div>
            </div>
          </div>
          <div className={classes.main_body_right_area_head_area_right}>
            <Link className={styles.link} to="/shipmentslist">
              貨物状況一覧画面へ
            </Link>
          </div>
        </div>
        <div className={classes.main_body_right_area_chat_area}>
          <div className={classes.main_body_right_area_chat_date}>
            <hr className={classes.chat_title_hr} />
            <div>8月24日(火)</div>
            <hr className={classes.chat_title_hr} />
          </div>
          <div className={classes.main_body_right_area_chat_text_area}>
            <div className={classes.main_body_right_area_chat_text_area_icon}>
              <span class="material-icons">account_circle</span>
            </div>
            <div className={classes.main_body_right_area_chat_text_area_text}>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_title_area
                }
              >
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_title
                  }
                >
                  あなた
                </div>
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_time
                  }
                >
                  11:01
                </div>
              </div>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_text
                }
              >
                いつもお世話になっております。
                〜について伺いたく連絡しました。ーの到着日はいつになりそうでしょうか？
              </div>
            </div>
          </div>
          <div className={classes.main_body_right_area_chat_text_area}>
            <div className={classes.main_body_right_area_chat_text_area_icon}>
              <PortrichIcon />
            </div>
            <div className={classes.main_body_right_area_chat_text_area_text}>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_title_area
                }
              >
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_title
                  }
                >
                  あなた
                </div>
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_time
                  }
                >
                  11:01
                </div>
              </div>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_text
                }
              >
                いつもお世話になっております。
                〜について伺いたく連絡しました。ーの到着日はいつになりそうでしょうか？
              </div>
            </div>
          </div>
          <div className={classes.main_body_right_area_chat_date}>
            <hr className={classes.chat_title_hr} />
            <div>8月24日(火)</div>
            <hr className={classes.chat_title_hr} />
          </div>
          <div className={classes.main_body_right_area_chat_text_area}>
            <div className={classes.main_body_right_area_chat_text_area_icon}>
              <span class="material-icons">account_circle</span>
            </div>
            <div className={classes.main_body_right_area_chat_text_area_text}>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_title_area
                }
              >
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_title
                  }
                >
                  あなた
                </div>
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_time
                  }
                >
                  11:01
                </div>
              </div>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_text
                }
              >
                いつもお世話になっております。
                〜について伺いたく連絡しました。ーの到着日はいつになりそうでしょうか？
              </div>
            </div>
          </div>
          <div className={classes.main_body_right_area_chat_text_area}>
            <div className={classes.main_body_right_area_chat_text_area_icon}>
              <PortrichIcon />
            </div>
            <div className={classes.main_body_right_area_chat_text_area_text}>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_title_area
                }
              >
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_title
                  }
                >
                  あなた
                </div>
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_time
                  }
                >
                  11:01
                </div>
              </div>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_text
                }
              >
                いつもお世話になっております。
                〜について伺いたく連絡しました。ーの到着日はいつになりそうでしょうか？
              </div>
            </div>
          </div>
          <div className={classes.main_body_right_area_chat_date}>
            <hr className={classes.chat_title_hr} />
            <div>8月24日(火)</div>
            <hr className={classes.chat_title_hr} />
          </div>
          <div className={classes.main_body_right_area_chat_text_area}>
            <div className={classes.main_body_right_area_chat_text_area_icon}>
              <span class="material-icons">account_circle</span>
            </div>
            <div className={classes.main_body_right_area_chat_text_area_text}>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_title_area
                }
              >
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_title
                  }
                >
                  あなた
                </div>
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_time
                  }
                >
                  11:01
                </div>
              </div>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_text
                }
              >
                いつもお世話になっております。
                〜について伺いたく連絡しました。ーの到着日はいつになりそうでしょうか？
              </div>
            </div>
          </div>
          <div className={classes.main_body_right_area_chat_text_area}>
            <div className={classes.main_body_right_area_chat_text_area_icon}>
              <PortrichIcon />
            </div>
            <div className={classes.main_body_right_area_chat_text_area_text}>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_title_area
                }
              >
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_title
                  }
                >
                  あなた
                </div>
                <div
                  className={
                    classes.main_body_right_area_chat_text_area_text_title_area_time
                  }
                >
                  11:01
                </div>
              </div>
              <div
                className={
                  classes.main_body_right_area_chat_text_area_text_text
                }
              >
                いつもお世話になっております。
                〜について伺いたく連絡しました。ーの到着日はいつになりそうでしょうか？
              </div>
            </div>
          </div>
        </div>
        <div className={classes.main_body_right_area_input_area}>
          <TextField
            variant="outlined"
            label="メッセージを送信する"
            className={styles.wrapText}
            multiline={true}
            rows={3}
          />
          <div className={classes.main_body_right_area_input_area_btn}>
            <div className={classes.main_body_right_area_input_area_btn_icon}>
              <span class="material-icons">sentiment_satisfied_alt</span>
            </div>
            <div className={classes.main_body_right_area_input_area_btn_file}>
              <span class="material-icons">attach_file</span>
            </div>
            <Button variant="contained" className={styles.button}>
              送信
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatPageItem;
