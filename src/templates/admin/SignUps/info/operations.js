import axios from "axios";
import { push } from "connected-react-router";
import { AppConfig } from "../../../../common/config";
import {
  validEmailFormat,
  validHiragana,
  validZip,
  validTell,
  validHankakuEisuu,
  validMinlength,
  validEquivalent,
  validMaxlength50,
} from "../../../../common/validation";

const ENDPOINT = {
  ACCOUNTS_REPRSENTATIVES: "/api/v1/accounts/representatives/",
};

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const stepValidationCheck = async (state, setActiveStep) => {
  const {
    company_name,
    department,
    name,
    name_pronunciation,
    postal_code,
    street_address,
    phone_number,
    email,
    password,
    password_re,
  } = state;

  const isEmailFormat = validEmailFormat(email);
  const isHiragana = validHiragana(name_pronunciation);
  const isZip = validZip(postal_code);
  const isTell = validTell(phone_number);
  const isHankakuEisuu = validHankakuEisuu(password);
  const isMinlength = validMinlength(password);
  const isEquivalent = validEquivalent(password, password_re);
  const isMaxlength50CompanyName = validMaxlength50(company_name);
  const isMaxlength50Department = validMaxlength50(department);
  const isMaxlength50Name = validMaxlength50(name);
  const isMaxlength50NamePronunciation = validMaxlength50(name_pronunciation);
  const isMaxlength50StreetAddress = validMaxlength50(street_address);
  const isMaxlength50Email = validMaxlength50(email);
  const isMaxlength50Password = validMaxlength50(password);

  if (
    [
      company_name,
      department,
      name,
      name_pronunciation,
      postal_code,
      street_address,
      phone_number,
      email,
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
  if (!isZip) {
    window.confirm("郵便番号の形式で入力してください");
    return;
  }
  if (!isTell) {
    window.confirm("電話番号の形式で入力してください");
    return;
  }
  if (!isHankakuEisuu) {
    window.confirm("パスワードは半角英数字の形式で入力してください");
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
  if (!isMaxlength50CompanyName) {
    window.confirm("会社名は50文字以下で入力して下さい。");
    return;
  }
  if (!isMaxlength50Department) {
    window.confirm("役職は50文字以下で入力して下さい。");
    return;
  }
  if (!isMaxlength50Name) {
    window.confirm("名前は50文字以下で入力して下さい。");
    return;
  }
  if (!isMaxlength50NamePronunciation) {
    window.confirm("ふりがなは50文字以下で入力して下さい。");
    return;
  }
  if (!isMaxlength50StreetAddress) {
    window.confirm("住所は50文字以下で入力して下さい。");
    return;
  }
  if (!isMaxlength50Email) {
    window.confirm("メールアドレスは50文字以下で入力して下さい。");
    return;
  }
  if (!isMaxlength50Password) {
    window.confirm("パスワードは50文字以下で入力して下さい。");
    return;
  }
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

export const registerSugnUp = async (state, dispatch) => {
  try {
    const params = {
      company_name: state.company_name,
      postal_code: state.postal_code,
      street_address: state.street_address,
      name: state.name,
      name_pronunciation: state.name_pronunciation,
      email: state.email,
      password: state.password,
      phone_number: state.phone_number,
      department: state.department,
    };
    await post(ENDPOINT.ACCOUNTS_REPRSENTATIVES, params);
    dispatch(push("/signin"));
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};
