import React, { useState, useCallback } from "react";
import classes from "../../../dist/css/signup_thanks.module.css";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const SignUpThank = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.block}>
      <div className={classes.block_title}>アカウント作成完了</div>

      <div className={classes.block_body}>
        <div className={classes.form_area}>
          <div className={classes.thanks_msg}>
            アカウント作成ありがとうございます。
            <br />
            入力されたメールアドレスにメールを送信させていただきました。
            <br />
            お客様のアカウントは、現段階では仮登録となっており、このままでもサイトの使用は可能ですが、見積検索までしかできない状態です。
            メールの内容と重複しますが、登記簿謄本と銀行口座を下記メールアドレスまでお送り後、全ての機能が使用可能となります。
            <br />
            お手数ですがよろしくお願いいたします。
            <br />
            不明点などがございましたら、下記メールアドレスまでご連絡いただけると対応させていただきます。
            <br />
            support@portrich.jp
            <br />
            ここの文章てきとう
          </div>

          <div className={classes.submit_area}>
            <input
              type="submit"
              className={classes.submit}
              value="アカウント作成する"
              onClick={() => dispatch(push("/search"))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpThank;
