import React, { useState, useEffect, useCallback } from "react";
import styles from "../../../dist/css/signup.module.css";
import { TextInput } from "../../../components/Uikit";

const SignUpForm = (props) => {
  useEffect(() => {
    console.log(props.state);
  }, [props.state]);
  const handleCompanyName = (e) => {
    props.setState({ ...props.state, company_name: e.target.value });
  };
  const handleDepartment = (e) => {
    props.setState({ ...props.state, department: e.target.value });
  };
  const handleName = (e) => {
    props.setState({ ...props.state, name: e.target.value });
  };
  const handleNamePronunciation = (e) => {
    props.setState({ ...props.state, name_pronunciation: e.target.value });
  };
  const handlePostalCode = (e) => {
    props.setState({ ...props.state, postal_code: e.target.value });
  };
  const handleStreetAddress = (e) => {
    props.setState({ ...props.state, street_address: e.target.value });
  };
  const handlePhoneNumber = (e) => {
    props.setState({ ...props.state, phone_number: e.target.value });
  };
  const handleEmail = (e) => {
    props.setState({ ...props.state, email: e.target.value });
  };
  const handlePassword = (e) => {
    props.setState({ ...props.state, password: e.target.value });
  };
  const handlePasswordRe = (e) => {
    props.setState({ ...props.state, password_re: e.target.value });
  };

  return (
    <div className={styles.block}>
      <div className={styles.block_title}>会社情報入力</div>
      <div className={styles.block_body}>
        <TextInput
          fullWidth={true}
          label={"会社名"}
          multiline={false}
          required={true}
          rows={1}
          type={"text"}
          defaultValue={props.state.company_name}
          onChange={handleCompanyName}
        />
        <TextInput
          fullWidth={true}
          label={"役職"}
          multiline={false}
          required={true}
          rows={1}
          type={"text"}
          defaultValue={props.state.department}
          onChange={handleDepartment}
        />
        <TextInput
          fullWidth={true}
          label={"お名前"}
          multiline={false}
          required={true}
          rows={1}
          type={"text"}
          defaultValue={props.state.name}
          onChange={handleName}
        />
        <TextInput
          fullWidth={true}
          label={"ふりがな"}
          multiline={false}
          required={true}
          rows={1}
          type={"text"}
          defaultValue={props.state.name_pronunciation}
          onChange={handleNamePronunciation}
        />
        <TextInput
          fullWidth={true}
          label={"郵便番号（ハイフンなし）"}
          multiline={false}
          required={true}
          rows={1}
          type={"zip"}
          defaultValue={props.state.postal_code}
          onChange={handlePostalCode}
        />
        <TextInput
          fullWidth={true}
          label={"住所"}
          multiline={false}
          required={true}
          rows={1}
          type={"text"}
          defaultValue={props.state.street_address}
          onChange={handleStreetAddress}
        />
        <TextInput
          fullWidth={true}
          label={"電話番号（ハイフンなし）"}
          multiline={false}
          required={true}
          rows={1}
          type={"tel"}
          defaultValue={props.state.phone_number}
          onChange={handlePhoneNumber}
        />
        <TextInput
          fullWidth={true}
          label={"メールアドレス"}
          multiline={false}
          required={true}
          rows={1}
          type={"email"}
          defaultValue={props.state.email}
          onChange={handleEmail}
        />
        <TextInput
          fullWidth={true}
          label={"パスワード（半角英数字で8文字以上）"}
          multiline={false}
          required={true}
          rows={1}
          type={"password"}
          onChange={handlePassword}
        />
        <TextInput
          fullWidth={true}
          label={"パスワードの再確認"}
          multiline={false}
          required={true}
          rows={1}
          type={"password"}
          onChange={handlePasswordRe}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
