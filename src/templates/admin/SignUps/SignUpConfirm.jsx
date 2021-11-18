import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import classes from "../../../dist/css/signup.module.css";
import { SignUpDialogContainer } from "../../index";

const SignUpConfirm = (props) => {
  const { state } = props;
  const dispatch = useDispatch();
  return (
    <div className={classes.block}>
      <div className={classes.block_title}>確認画面</div>
      <div className={classes.block_body}>
        <div className={classes.form_area}>
          <table>
            <tr>
              <td>会社名</td>
              <td>
                <spn>{state.company_name}</spn>
              </td>
            </tr>
            <tr>
              <td>お名前</td>
              <td>
                <span>{state.name}</span>
              </td>
            </tr>
            <tr>
              <td>ふりがな</td>
              <td>
                <spn>{state.name_pronunciation}</spn>
              </td>
            </tr>
            <tr>
              <td>郵便番号</td>
              <td>
                <spn>{state.postal_code}</spn>
              </td>
            </tr>
            <tr>
              <td>住所</td>
              <td>
                <spn>{state.street_address}</spn>
              </td>
            </tr>
            <tr>
              <td>電話番号</td>
              <td>
                <span>{state.phone_number}</span>
              </td>
            </tr>
            <tr>
              <td>メールアドレス</td>
              <td>
                <spn>{state.email}</spn>
              </td>
            </tr>
          </table>
          <SignUpDialogContainer state={state} />
        </div>
      </div>
    </div>
  );
};

export default SignUpConfirm;
