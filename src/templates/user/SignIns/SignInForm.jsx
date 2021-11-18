import React, { useState, useRef } from "react";
import classes from "../../../dist/css/signin.module.css";
import { TextInput } from "../../../components/Uikit";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { signIn } from "../../../reducks/users/operations";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonRef = useRef();
  const location = useLocation();
  const login = async () => {
    if (!email || !password) {
      window.confirm("入力されていない項目があります。");
      return;
    }
    dispatch(signIn(email, password, location));
  };
  const pressKey = (e) => {
    if (e.key === "Enter") {
      buttonRef.current.click();
    }
  };

  return (
    <div className={classes.block}>
      <div className={classes.block_title}>ログイン画面</div>
      <div className={classes.block_body}>
        <TextInput
          fullWidth={true}
          label={"メールアドレス"}
          multiline={false}
          required={true}
          rows={1}
          value={email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          fullWidth={true}
          label={"パスワード（半角英数字で6文字以上）"}
          multiline={false}
          required={true}
          rows={1}
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={pressKey}
        />

        <div className={classes.form_area}>
          <div className={classes.submit_area}>
            <input
              ref={buttonRef}
              type="submit"
              className={classes.submit}
              value="ログイン"
              onClick={login}
            />
            <Link className={classes.a_menu} to="/signup">
              <input
                type="submit"
                className={classes.submit}
                value="アカウント登録"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
