import axios from "axios";
import { push } from "connected-react-router";
import { AppConfig } from "../../../../common/config";
import {
  validEmailFormat,
  validHiragana,
  validTell,
  validHankakuEisuu,
  validMinlength,
  validEquivalent,
} from "../../../../common/validation";

const ENDPOINT = {
  ACCOUNTS: "/api/v1/accounts/",
};

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const ValidationCheck = async (userInfo, setOpen) => {
  const {
    name,
    name_pronunciation,
    department,
    email,
    phone_number,
    password,
    password_re,
  } = userInfo;

  const isEmailFormat = validEmailFormat(email);
  const isHiragana = validHiragana(name_pronunciation);
  const isTell = validTell(phone_number);
  const isHankakuEisuu = validHankakuEisuu(password);
  const isMinlength = validMinlength(password);
  const isEquivalent = validEquivalent(password, password_re);

  if (
    [
      name,
      name_pronunciation,
      department,
      email,
      phone_number,
      password,
      password_re,
    ].some((value) => !value)
  ) {
    window.confirm("入力されていない項目があります。");
    return;
  }
  if (!isEmailFormat) {
    window.confirm("メールアドレスの形式で入力してください");
    return;
  }
  if (!isHiragana) {
    window.confirm("ひらがなで入力してください");
    return;
  }
  if (!isTell) {
    window.confirm("電話番号の形式で入力してください");
    return;
  }
  if (!isHankakuEisuu) {
    window.confirm("パスワードは半角英数記号の形式で入力してください");
    return;
  }
  if (!isMinlength) {
    window.confirm("パスワードは8文字以上で入力してください");
    return;
  }
  if (!isEquivalent) {
    window.confirm("パスワードが一致していません。");
    return;
  }
  setOpen(true);
};

export const registerAddMember = async (userInfo, dispatch) => {
  try {
    const params = {
      name: userInfo.name,
      name_pronunciation: userInfo.name_pronunciation,
      department: userInfo.department,
      email: userInfo.email,
      phone_number: userInfo.phone_number,
      password: userInfo.password,
    };
    await post(ENDPOINT.ACCOUNTS, params);
    dispatch(push("/mypage"));
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};
