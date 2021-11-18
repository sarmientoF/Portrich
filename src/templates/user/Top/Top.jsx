import React from "react";
import classes from "../../../dist/css/top.module.css";
import { Button, makeStyles } from "@material-ui/core";
import { ReactComponent as ArrowIcon } from "../../../dist/images/arrow.svg";
import { ReactComponent as ArrowSmallIcon } from "../../../dist/images/arrowsmall.svg";
import { ReactComponent as NewsIcon } from "../../../dist/images/news.svg";
import { ReactComponent as FlugIcon } from "../../../dist/images/flug.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "90%",
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

const Top = () => {
  const styles = useStyles();
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <div className={classes.main_body_head}>
          <div className={classes.main_body_head_title}>
            発送までの４ステップ
          </div>
          <div className={classes.main_body_head_item_area}>
            <div className={classes.main_body_head_item}>
              <div className={classes.item_no}>STEP 01</div>
              <div className={classes.item_title}>定期お見積依頼を出す</div>
              <div className={classes.item_text}>
                お見積と対応可能な輸送スケジュールをお送りします。毎月月末に見積が自動更新されます。
              </div>
              <div className={classes.item_btn_area}>
                <Button
                  variant="contained"
                  className={styles.button}
                  // onClick={}
                >
                  新規お見積をする
                  <ArrowSmallIcon
                    className={classes.main_body_head_arrow_small}
                  />
                </Button>
              </div>
            </div>
            <div className={classes.main_body_head_arrow}>
              <ArrowIcon />
            </div>
            <div className={classes.main_body_head_item}>
              <div className={classes.item_no}>STEP 02</div>
              <div className={classes.item_title}>
                見積をスケジュールを確認し Bookingへ
              </div>
              <div className={classes.item_text}>
                お見積の料金と輸送スケジュールを確認してそのままブッキングへ。貨物状況を入力して予約完了です。
              </div>
              <div className={classes.item_btn_area}>
                <Button
                  variant="contained"
                  className={styles.button}
                  // onClick={}
                >
                  お見積一覧へ
                  <ArrowSmallIcon
                    className={classes.main_body_head_arrow_small}
                  />
                </Button>
              </div>
            </div>
            <div className={classes.main_body_head_arrow}>
              <ArrowIcon />
            </div>
            <div className={classes.main_body_head_item}>
              <div className={classes.item_no}>STEP 03</div>
              <div className={classes.item_title}>Booking状況を確認する</div>
              <div className={classes.item_text}>
                Bookingの進捗状況を確認いただけます。ブッキングが完了したら、ブッキング一覧から各種書類ダウンロードが可能です。
              </div>
              <div className={classes.item_btn_area}>
                <Button
                  variant="contained"
                  className={styles.button}
                  // onClick={}
                >
                  Booking状況を確認する
                  <ArrowSmallIcon
                    className={classes.main_body_head_arrow_small}
                  />
                </Button>
              </div>
            </div>
            <div className={classes.main_body_head_arrow}>
              <ArrowIcon />
            </div>
            <div className={classes.main_body_head_item}>
              <div className={classes.item_no}>STEP 04</div>
              <div className={classes.item_title}>貨物状況を確認する</div>
              <div className={classes.item_text}>
                貨物状況をリアルタイムで確認できます。出港/遅延/到着が更新され次第随時自動でメールでお知らせします。
              </div>
              <div className={classes.item_btn_area}>
                <Button
                  variant="contained"
                  className={styles.button}
                  // onClick={}
                >
                  貨物状況を確認する
                  <ArrowSmallIcon
                    className={classes.main_body_head_arrow_small}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.main_body_body}>
          <div className={classes.main_body_body_left}>
            <div className={classes.main_body_body_news}>
              <div className={classes.main_body_body_news_title}>
                <NewsIcon className={classes.icon} />
                お知らせ
              </div>
              <div className={classes.main_body_body_news_area}>
                <div className={classes.main_body_body_news_item_area}>
                  <div className={classes.main_body_body_news_item_date}>
                    2021/08/10
                  </div>
                  <div className={classes.main_body_body_news_item_textarea}>
                    <div className={classes.main_body_body_news_item_title}>
                      【バージョンアップのお知らせ】
                    </div>
                    <div className={classes.main_body_body_news_item_text}>
                      バージョンアップを行いました。詳細はこちらのページからご確認いただけます。
                    </div>
                  </div>
                </div>
                <div className={classes.main_body_body_news_item_area}>
                  <div className={classes.main_body_body_news_item_date}>
                    2021/08/10
                  </div>
                  <div className={classes.main_body_body_news_item_textarea}>
                    <div className={classes.main_body_body_news_item_title}>
                      ※重要※　緊急メンテナンスのお知らせ
                    </div>
                    <div className={classes.main_body_body_news_item_text}>
                      本日深夜（31日23時〜１日4時）まで緊急メンテナンスを行います。詳細はこちらからご確認ください。
                    </div>
                  </div>
                </div>
                <div className={classes.main_body_body_news_item_area}>
                  <div className={classes.main_body_body_news_item_date}>
                    2021/08/10
                  </div>
                  <div className={classes.main_body_body_news_item_textarea}>
                    <div className={classes.main_body_body_news_item_title}>
                      ※重要※　緊急メンテナンスのお知らせ
                    </div>
                    <div className={classes.main_body_body_news_item_text}>
                      本日深夜（31日23時〜１日4時）まで緊急メンテナンスを行います。詳細はこちらからご確認ください。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.main_body_body_right}>
            <div className={classes.main_body_body_relase}>
              <div className={classes.main_body_body_relase_title}>
                <FlugIcon className={classes.icon} />
                追加予定の機能
              </div>
              <div className={classes.main_body_body_relase_area}>
                <div className={classes.main_body_body_relase_item_area}>
                  <div className={classes.item_area}>
                    <span className={classes.item_area_ture}>公開済</span>
                  </div>
                  <div className={classes.text_area}>
                    <span className={classes.text_area_true}>
                      貨物状況がリアルタイムで確認できるようになりました
                    </span>
                  </div>
                </div>
                <div className={classes.main_body_body_relase_item_area}>
                  <div className={classes.item_area}>
                    <span className={classes.item_area_ture}>公開済</span>
                  </div>
                  <div className={classes.text_area}>
                    <span className={classes.text_area_true}>
                      貨物状況がリアルタイムで確認できるようになりました
                    </span>
                  </div>
                </div>
                <div className={classes.main_body_body_relase_item_area}>
                  <div className={classes.item_area}>
                    <span className={classes.item_area_false}>開発中</span>
                  </div>
                  <div className={classes.text_area}>
                    <span className={classes.text_area_false}>
                      見積一覧のカスタマイズ機能 (8月末予定)
                    </span>
                  </div>
                </div>
                <div className={classes.main_body_body_relase_item_area}>
                  <div className={classes.item_area}>
                    <span className={classes.item_area_false}>開発中</span>
                  </div>
                  <div className={classes.text_area}>
                    <span className={classes.text_area_false}>
                      見積一覧のカスタマイズ機能 (8月末予定)
                    </span>
                  </div>
                </div>
                <div className={classes.main_body_body_relase_item_area}>
                  <div className={classes.item_area}>
                    <span className={classes.item_area_false}>開発中</span>
                  </div>
                  <div className={classes.text_area}>
                    <span className={classes.text_area_false}>
                      見積一覧のカスタマイズ機能 (8月末予定)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Top;
